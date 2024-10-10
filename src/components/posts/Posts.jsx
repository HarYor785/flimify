'use client'

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import avatar from '@images/user.png'
import { IoVideocamOutline } from "react-icons/io5";
import Input from '../ui/Input'
import { CiImageOn } from "react-icons/ci";
import Button from '../ui/Button'
import Picker from 'emoji-picker-react'
import { FaRegSmile } from "react-icons/fa";
import PostCard from '../postCard/PostCard';
import { handleFetch } from '@/lib/data';
import { useDispatch, useSelector } from 'react-redux';
import { handleAddPost } from '@/states/postSlice';
import axios from 'axios';
import { toast } from 'react-toastify';
import { FaXmark } from "react-icons/fa6";
import { LuLoader } from "react-icons/lu";
import Loader from '../loader/Loader';



const Posts = ()=> {
    const [value, setValue] = useState('')
    const {user} = useSelector((state)=>state.user)
    const {post} = useSelector((state)=>state.post)
    const [isLoading, setIsLoading] = useState(false)
    const [file, setFile] = useState([])
    const [openEmoji, setOpenEmoji] = useState(false)
    const [previewUrls, setPreviewUrls] = useState([]); 
    const dispatch = useDispatch()

    const handlePickEmoji = (emojiObject, event) => {
        const emoji = emojiObject.emoji
        setValue(value + emoji)
        // setOpenEmoji(false)
    }

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];

        if (selectedFile) {
            const isVideo = selectedFile.type.includes("video");
            const previewUrl = URL.createObjectURL(selectedFile);

            setFile((prevFiles) => {
                if (isVideo) {
                    const filesWithoutVideo = prevFiles.filter((file) => !file.type.includes("video"));
                    return [...filesWithoutVideo, selectedFile];
                }
                return [...prevFiles, selectedFile];
            });

            setPreviewUrls((prevUrls) => {
                if (isVideo) {
                    const urlsWithoutVideo = prevUrls.filter((url, index) => !file[index]?.type.includes("video"));
                    return [...urlsWithoutVideo, previewUrl];
                }
                return [...prevUrls, previewUrl];
            });

            return () => {
                URL.revokeObjectURL(previewUrl);
            };
        }
    };
    
    const handleRemoveFile = (index) => {
        const updatedFiles = file.filter((_, i) => i !== index);
        const updatedPreviewUrls = previewUrls.filter((_, i) => i !== index);

        setFile(updatedFiles); 
        setPreviewUrls(updatedPreviewUrls);
    };

    const fetchPosts = async ()=>{
        const res = await handleFetch(`/post`,'GET','','',setIsLoading)
        dispatch(handleAddPost(res?.data))
    }
    
    useEffect(()=>{
        fetchPosts()
    },[])

    const handleCreatePost = async ()=>{
        if(!user?.token){
            toast.error('You must be logged in to create a post.')
            return
        }
        if(value.length >= 3){
            let img;
            const uploadedFile = []
            if(file){
                const oversizedFiles = Array.from(file).filter((f)=>f.size / (1024 * 1024) > 15)
                if(oversizedFiles.length > 0){
                    toast.info('The video file is too large. Please upload a file less than 15MB.')
                    setFile(null)
                    return
                }
                for(let fil of file){
                    setIsLoading(true)
                    const uploadData = new FormData()
                    uploadData.append('file', fil)
                    uploadData.append('upload_preset', 'flimify')
                    const res = await axios.post(`${process.env.NEXT_PUBLIC_CLOUDINARY_URL}`,uploadData)
                    img = res?.data?.secure_url
                    uploadedFile.push(img)
                }
            }
            const newData = {description: value, image: uploadedFile}
            const res = await handleFetch(`/post`,'POST',user?.token,newData,setIsLoading)
            if(res?.success){
                fetchPosts()
                setValue('')
                setFile([])
                setPreviewUrls([])
                toast.success(res?.message)
            }else{
                toast.error(res?.message)
            }
        }
    }
    

    return (
        <div className="w-full gap-6 relative md:grid md:grid-cols-3 
        min-h-screen max-h-screen overflow-y-auto md:flex-none 
        flex flex-col-reverse"
        onClick={()=>setOpenEmoji(false)}>
            {/* LEFT */}
            <div className='w-full flex flex-col items-center gap-8 relative md:col-span-2'>
                {/* CREATE POST INPUT */}
                <div className='w-full flex flex-col gap-2 sticky top-0 left-0 z-50 pb-2 
                    border-b border-primary bg-secondary'>
                        <div className='w-full flex items-center gap-4'>
                            <Image src={user?.profile || avatar} width={50} height={50} 
                            className="rounded-full object-cover border-2 border-main"/>
                            <textarea name="post" placeHolder="Create a post"
                            className='w-full text-secondaryText md:text-sm text-xs p-2 
                            outline-none bg-primary rounded-xl resize-none transition-all 
                            duration-300 ease-in-out border-2 border-secondary 
                            focus:border-2 focus:border-main'
                            value={value} onChange={(e)=>setValue(e.target.value)}></textarea>
                            {/* <Input type="text" /> */}
                        </div>
                        <div className='w-full flex items-center justify-between'>
                            <div className='flex items-center gap-4'>
                                <label htmlFor="pickImg"
                                className='cursor-pointer text-secondaryText'>
                                    <input type="file" id="pickImg" 
                                    className="hidden" accept='image/*'
                                    onChange={handleFileChange}/>
                                    <CiImageOn size={20}/>
                                </label>
                                <label htmlFor="pickVideo"
                                className='cursor-pointer text-secondaryText'>
                                    <input type="file" id="pickVideo" 
                                    onChange={handleFileChange}
                                    className="hidden" accept='video/mp4'/>
                                    <IoVideocamOutline size={20}/>
                                </label>
                                <label htmlFor="pickEmoji" 
                                onClick={(e)=>{
                                    e.stopPropagation()
                                    setOpenEmoji(!openEmoji)
                                }}
                                className='cursor-pointer text-secondaryText relative'>
                                    <FaRegSmile size={20}/>
                                    {
                                        openEmoji && <div className='absolute top-3 left-8 z-50'>
                                            <Picker onEmojiClick={handlePickEmoji}/>
                                        </div>
                                    }
                                </label>
                            </div>
                            <Button title={isLoading ? <LuLoader className="animate-spin-slow"/> : 'Post'} 
                            onClick={handleCreatePost}
                            disabled={isLoading}/>
                        </div>
                        {
                            previewUrls.length > 0 &&
                            <div className="w-full flex items-center gap-4">
                                {previewUrls.map((url, index)=>(
                                    <div key={file[index]?.name || index} className="w-fit relative">
                                        {file[index] && file[index].type.includes("image") ? (
                                            <Image src={url} width={80} height={80} 
                                            className="rounded-sm object-cover border-2 border-main"/>
                                        ) : file[index] && file[index].type.includes("video") &&  (
                                            <video src={url} controls width={80} height={80} 
                                            className=""></video>
                                        )}
                                        <button onClick={()=>handleRemoveFile(index)}
                                        className="absolute top-2 left-2 text-base font-bold text-red-600">
                                            <FaXmark/>
                                        </button>
                                    </div>
                                ))}
                            </div>
                        }
                </div>
                    {isLoading && <Loader/>}
                {/* POSTS */}
                <div className=" w-full flex flex-col items-center gap-4">
                    {post?.map((item, i)=>(
                        <PostCard key={i} item={item} user={user} fetchPosts={fetchPosts}/>
                    ))}
                </div>
            </div>
            {/* RIGHT */}
            <div className='md:col-span-1 md:sticky md:top-4 md:right-0 md:h-1/3 
            w-full flex flex-col items-center gap-5 border border-primary p-3 rounded-lg '>
                <a href="https://doodstream.com/join/54lfhgm1uoes"
                target='_blank'>
                    <Image 
                    style={{width:"100%",height: "auto", maxWidth: "720px"}} 
                    src="https://i.doodcdn.com/img/728x90.gif" 
                    alt="DoodStream - Upload videos share & make money"
                    width={200} height={200}/>
                </a>
                <div className='w-full h-[300px] bg-primary rounded-md flex items-center 
                justify-center'>
                    <span className="text-lg text-white text-center">
                        Advertise banner <br/>
                        350 x 280
                    </span>
                </div>
                <div className='w-full h-[300px] bg-primary rounded-md flex items-center 
                justify-center'>
                    <span className="text-lg text-white text-center">
                        Advertise banner <br/>
                        350 x 280
                    </span>
                </div>
                
            </div>
        </div>
    )
}

export default Posts