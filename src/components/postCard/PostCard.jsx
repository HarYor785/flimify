import React, { useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import { IoHeartOutline, IoHeartSharp, } from "react-icons/io5";
import { FaRegCommentDots } from "react-icons/fa6";
import Comment from '../posts/Comment';
import avatar from '@images/user.png'
import moment from 'moment';
import { BsThreeDotsVertical } from "react-icons/bs";
import { toast } from 'react-toastify';
import { handleFetch } from '@/lib/data';
import { IoMdCheckmark } from "react-icons/io";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import dynamic from 'next/dynamic';


const DynamicVideoPlayer = dynamic(() => import('../videoplayer/VideoPlayer'), { ssr: false });


function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format&dpr=2 2x`,
  };
}

const PostCard = ({item, user, fetchPosts}) => {
    const [openComment, setOpenComment] = useState('')
    const [value, setValue] = useState('')
    const [openMenu, setOpenMenu] = useState()
    const [editPost, setEditPost] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [isPendingLike, setIsPendingLike] = useState(false)
    const [loadingComment, setLoadingComment] = useState(false)
    const [comments, setComments] = useState([])
    const playerRef = useRef();

    const handleOpenMenu = (val)=>{
        if(openMenu === val){
            setOpenMenu(null)
        }else{
            setOpenMenu(val)
        }
    }

    const handleEditPost = (val)=>{
        if(editPost === val){
            setEditPost(null)
        }else{
            setEditPost(val)
        }
        setOpenMenu(false)
    }

    useEffect(() => {
        if (editPost === item?._id && item?.description) {
            setValue(item?.description);
        }
    }, [editPost, item]);

    const handleSubmitEditPost = async (id)=>{
        if(value.length > 3){
            const newData = {description: value,postId: id}
            const res = await handleFetch(`/post`,'PUT',user?.token,newData,setIsLoading)
            if(res?.success){
                fetchPosts()
                setValue(null)
                toast.success(res?.message)
            }else{
                toast.error(res?.message)
            }
        }
    }

    const handleLikePost = async (id)=>{
        if(!user?.token){
            return toast.error('Please login to like post')
        }
        const res = await handleFetch(`/post/like?id=${id}`,'POST',user?.token,'',setIsPendingLike)
        if(res?.success){
            fetchPosts()
        }
    }
    const handleDeletePost = async (id)=>{
        const res = await handleFetch(`/post?id=${id}`,'DELETE',user?.token,'',setIsPendingLike)
        if(res?.success){
            fetchPosts()
            toast.success(res?.message)
        }else{
            toast.error(res?.message)
        }
    }

    const handleFetchComment = async (id)=>{
        const res = await handleFetch(`/post/comment?id=${id}`,'GET',user?.token,'',setLoadingComment)
        if(res?.success){
            fetchPosts()
            setComments(res?.data)
        }
    }

    const handleOpenComment = async (index) => {
        handleFetchComment(index)
        if(openComment === index){
            setOpenComment('')
        }else{
            setOpenComment(index)
        }
    }

    const isLike = item?.likes?.find((id)=>id === user?._id)

    const itemData = item?.image?.map((img, index) => ({
        img,
        title: `Image ${index + 1}`,
        cols: 1,
        rows: 1,
    }));

    const videoItems = item?.image?.filter(img => 
        img?.includes('video')
    );
    
    const imageItems = itemData?.filter(data => 
        !data?.img?.includes('video')
    );



    return (
    <div className='w-full flex flex-col gap-3 p-4 border 
        border-primary rounded-lg relative'
        onClick={()=>{setOpenMenu(null);
        setEditPost(null);}}>

        <div className='w-full flex items-center justify-between'>
            <div className='flex items-center gap-3'>
                <Image src={item?.user?.profile || avatar} width={200} height={300} 
                alt="Avatar" className='w-12 h-12 rounded-full border-2 
                border-main'/>
                <div className='flex flex-col items-start'>
                    <h3 className='text-base capitalize text-gray-100'>
                        {item?.user?.userName}
                    </h3>
                    <span className='text-xs italic text-gray-300'>
                        {moment(item?.createdAt).format('DD MMM YYYY, HH:mm:ss')}
                    </span>
                </div>
            </div>
            {
                item?.user?._id === user?._id &&
                <button onClick={(e)=>{
                    handleOpenMenu(item?._id);
                    e.stopPropagation();}}>
                    <BsThreeDotsVertical size={25}/>
                </button>
            }
            {
                openMenu === item?._id && <div onClick={(e)=>e.stopPropagation()}
                className='absolute top-14 right-6 bg-primary 
                p-3 flex flex-col gap-2 rounded-md shadow-md'>
                    <button 
                    onClick={()=>handleEditPost(item?._id)}
                    className='text-xs text-primaryText 
                    transition-all duration-300 hover:text-secondaryText'>
                        Edit
                    </button>
                    <button disabled={isPendingLike}
                    onClick={()=>handleDeletePost(item?._id)}
                    className='text-xs text-primaryText 
                    transition-all duration-300 hover:text-secondaryText'>
                        {isPendingLike ? 'Loading...' : 'Delete'}
                    </button>
                </div>
            }
        </div>
        {
            editPost === item?._id ? 
            <div className='w-full flex flex-col gap-1'>
                <textarea className='border border-primary rounded-md p-2 
                text-xs text-primaryText bg-transparent outline-none resize-none'
                value={value}
                onClick={(e)=>e.stopPropagation()}
                onChange={(e)=>setValue(e.target.value)}>
                    {item?.description}
                </textarea>
                <button 
                className='self-end p-1 rounded-md bg-main text-xs'
                onClick={()=>handleSubmitEditPost(item?._id)}
                disabled={isLoading}>
                    <IoMdCheckmark size={16}/>
                </button>
            </div>
            :
            <p className='md:text-sm text-xs text-gray-200 p-3'>
                {item?.description}
            </p>
        }
        {
            videoItems?.length > 0 &&
            <DynamicVideoPlayer playerRef={playerRef} videoSrc={videoItems[0]}/>
        }

        {
            imageItems?.length > 0 &&
            <ImageList
                sx={{ width: '100%', height: 450 }}
                variant="quilted"
                cols={2}
                rowHeight={121}
                >
                {imageItems?.map((item) => (
                    <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                    <Image
                        {...srcset(item.img, 121, item.rows, item.cols)}
                        alt={'IMG'}
                        layout="responsive"
                        width={121 * (item.cols || 1)} 
                        height={121 * (item.rows || 1)} 
                        loading="lazy"
                    />
                    </ImageListItem>
                ))}
            </ImageList>
        }

        <div className='w-full flex items-center gap-4'>
            <button onClick={()=>handleLikePost(item?._id)}
            disabled={isPendingLike}
            className='flex items-center gap-1 text-sm text-white'>
                {item?.likes?.length > 0 ? item?.likes?.length : ''} 
                {
                    isLike ? <IoHeartSharp size={20} className="text-main"/>
                    : <IoHeartOutline size={20}/>
                }
                
            </button>
            <button onClick={()=>handleOpenComment(item?._id)}
            className='flex items-center gap-1 text-sm text-white'>
                {item?.comments?.length} <FaRegCommentDots size={20}/>
            </button>
        </div>
        {/* COMMENT BOX */}
        {
            openComment === item?._id &&
            <Comment openComment={openComment} user={user}
            id={item?._id} comments={comments}
            handleFetchComment={handleFetchComment}
            setOpenComment={setOpenComment}
            loadingComment={loadingComment}/>
        }
    </div>
  )
}

export default PostCard