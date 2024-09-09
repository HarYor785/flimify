'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import avatar from '@images/user.png'
import { IoHeartOutline, IoHeartSharp, IoVideocamOutline } from "react-icons/io5";
import { FaRegCommentDots } from "react-icons/fa6";
import Input from '../ui/Input'
import { CiImageOn } from "react-icons/ci";
import Button from '../ui/Button'
import Picker from 'emoji-picker-react'
import { FaRegSmile } from "react-icons/fa";
import PostCard from '../postCard/PostCard';



const Posts = ({moviePosts})=> {
    const [value, setValue] = useState('')
     
    const [openEmoji, setOpenEmoji] = useState(false)

    const handlePickEmoji = (emojiObject, event) => {
        const emoji = emojiObject.emoji
        setValue(value + emoji)
        setOpenEmoji(false)
    }

    

    return (
        <div className="w-full flex md:flex-row flex-col-reverse md:items-start items-center 
        md:justify-between justify-center gap-6 relative"
        onClick={()=>setOpenEmoji(false)}>
            {/* LEFT */}
            <div className='w-full flex flex-col items-center gap-8 relative'>
                {/* CREATE POST INPUT */}
                <div className='w-full flex flex-col gap-2 sticky top-0 left-0 z-50 pb-2 
                    border-b border-primary bg-secondary'>
                        <div className='w-full flex items-center gap-4'>
                            <Image src={avatar} width={50} height={50} 
                            className="rounded-full object-cover border-2 border-main"/>
                            <Input type="text" placeHolder="Create a post"
                            value={value} onChange={(e)=>setValue(e.target.value)}/>
                        </div>
                        <div className='w-full flex items-center justify-between'>
                            <div className='flex items-center gap-4'>
                                <label htmlFor="pickImg"
                                className='cursor-pointer text-secondaryText'>
                                    <input type="file" id="pickImg" className="hidden" accept='image/*'/>
                                    <CiImageOn size={20}/>
                                </label>
                                <label htmlFor="pickVideo"
                                className='cursor-pointer text-secondaryText'>
                                    <input type="file" id="pickVideo" className="hidden" accept='video/mp4'/>
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
                            <Button title={'Post'}/>
                        </div>
                </div>
                    
                {/* POSTS */}
                <div className=" w-full flex flex-col items-center gap-4 max-h-screen 
                overflow-y-scroll">
                    {moviePosts.map((item, i)=>(
                        <PostCard key={i} item={item}/>
                    ))}
                </div>
            </div>
            {/* RIGHT */}
            <div className='!sticky top-8 left-0 md:w-[450px] w-full flex flex-col items-center 
            gap-5 h-auto border border-primary p-3 rounded-lg '>
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
                <div className='w-full md:flex hidden'>
                    {
                        moviePosts.slice(0,1).map((item, i)=>(
                            <div key={i} className='w-full relative flex flex-col items-start gap-3
                            p-3 bg-primary rounded-md shadow-md'>
                                <Image src={item.imageUrl} 
                                alt={item.title} width={500} height={500}
                                className='w-full h-[300px] object-cover rounded-md'/>
                                <h2 className='text-base text-white'>
                                    {item.title}
                                </h2>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Posts