import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import Input from '../ui/Input'
import avatar from '@images/user.png'
import { BsSend, BsReplyAll, BsThreeDotsVertical } from "react-icons/bs";
import { IoHeartOutline, IoHeartSharp, } from "react-icons/io5";
import { handleFetch } from '@/lib/data';
import { toast } from 'react-toastify';
import moment from 'moment'
import Loader from '../loader/Loader'
import { LuLoader } from "react-icons/lu";



const Comment = ({openComment, comments, id, 
    user, handleFetchComment, loadingComment}) => {
    const [value, setValue] = useState('')
    const [replyValue, setReplyValue] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [openReply, setOpenReply] = useState('')
    const [isPendingLike, setIsPendingLike] = useState(false)
    const [isPendingDel, setIsPendingDel] = useState(false)
    const [openMenu, setOpenMenu] = useState()

    const handleOpenCommentMenu = (val)=>{
        if(openMenu === val){
            setOpenMenu(null)
        }else{
            setOpenMenu(val)
        }
    }

    const handleOpenReply = (id)=>{
        if(openReply === id){
            setOpenReply('')
        }else{
            setOpenReply(id)
        }
    }

    useEffect(()=>{
        handleFetchComment(id)
    },[id, openComment])

    const handleComment = async (id)=>{
        if(!user?.token){
            toast.error('You must be logged in to comment')
            return
        }
        if(value.length >= 2){
            const data = {postId: id, comment: value}
            const res = await handleFetch(`/post/comment`,'POST',user?.token,data,setIsLoading)
            if(res?.success){
                setValue('')
                handleFetchComment(id)
            }else{
                toast.error(res?.message)
            }
        }
    }

    const handleReply = async (id, commentId)=>{
        if(!user?.token){
            toast.error('You must be logged in to reply')
            return
        }
        if(replyValue.length >= 2){
            const data = {postId: id, commentId: commentId, reply: replyValue}
            const res = await handleFetch(`/post/reply`,'POST',user?.token,data,setIsLoading)
            if(res?.success){
                setReplyValue('')
                handleFetchComment(id)
            }else{
                toast.error(res?.message)
            }
        }
    }

    const handleLikeComment = async (commentId, replyId)=>{
        if(!user?.token){
            return toast.error('Please login to like comment')
        }
        const data = {postId: id, commentId: commentId, replyId: replyId}
        const res = await handleFetch(`/post/comment`,'PUT',user?.token,data,setIsPendingLike)
        if(res?.success){
            handleFetchComment(id)
        }
    }

    const handleDeleteComment = async (commentId, replyId)=>{
        const res = await handleFetch(`/post/comment?postId=${id}&commentId=${commentId}&replyId=${replyId}`,'DELETE',user?.token,'',setIsPendingDel)
        if(res?.success){
            handleFetchComment(id)
            toast.success(res?.message)
        }else{
            toast.error(res?.message)
        }
        setOpenMenu('')
    }

  return (
    <div className='w-full flex flex-col gap-3 relative'
    onClick={()=>{
        setOpenMenu('')
    }}>
        {/* INPUT */}
        <div className='w-full flex items-center justify-between md:gap-12 gap-2'>
            <div className='flex-1 flex items-center gap-4'>
                <Image src={user?.picture || avatar} 
                width={40} height={40} 
                className="rounded-full object-cover border-2 border-main"/>
                <Input type="text" placeHolder="Comment on this post"
                value={value} onChange={(e)=>setValue(e.target.value)}/>
            </div>
            <button onClick={()=>handleComment(id)}
            disabled={isLoading}
            className='p-3 rounded-full border-2 border-main text-main'>
                {isLoading ? <LuLoader size={16} className="animate-spin-slow"/>
                :<BsSend size={16} />}
            </button>
        </div>
        {/* LOADER */}
        {loadingComment  && <Loader/>}

        {/* COMMENT CONTAINER */}
        <div className={`w-full flex flex-col gap-4 transition-all duration-300 
        ease-in-out md:px-4 ${openComment === id 
            ? 'visible opacity-100 h-auto' : 'invisible opacity-0 h-0'}`}>
            {
                comments?.map((item, i)=>{
                    const isLiked = item?.likes?.find((c)=>c === user?._id)
                    return(
                    <div key={i} className='w-full flex flex-col items-start p-2 border 
                    border-primary rounded-md relative'>
                        <div className="w-full flex items-center justify-between">
                            <div className='w-full flex items-center gap-4'>
                                <Image src={item?.user?.picture ? item?.user?.picture : avatar} 
                                width={40} height={40} 
                                className="rounded-full object-cover border-2 border-main"/>
                                <div className='flex flex-col'>
                                    <h4 className='text-sm text-secondaryText'>{item?.user?.userName}</h4>
                                    <span className='text-xs text-primaryText italic'>
                                        {moment(item?.createdAt).format('DD MMM YYYY, HH:mm:ss')}
                                    </span>
                                </div>
                            </div>
                            {
                                item?.user?._id === user?._id &&
                                <button onClick={(e)=>{
                                    handleOpenCommentMenu(item?._id);
                                    e.stopPropagation();}}>
                                    <BsThreeDotsVertical size={18}/>
                                </button>
                            }
                            {
                                openMenu === item?._id && <div onClick={(e)=>e.stopPropagation()}
                                className='absolute top-8 right-4 bg-primary 
                                p-3 flex flex-col gap-2 rounded-md shadow-md'>
                                    <button onClick={()=>handleDeleteComment(item?._id, '')}
                                    disabled={isPendingDel}
                                    className='text-xs text-primaryText 
                                    transition-all duration-300 hover:text-secondaryText'>
                                        {isPendingDel ? 'Loading...' : 'Delete'}
                                    </button>
                                </div>
                            }
                        </div>
                        <p className='px-4 py-2 md:text-sm text-xs text-primaryText text-left'>
                            {item?.comment}
                        </p>
                        <div className="w-full flex items-center gap-4">
                            <button onClick={()=>handleLikeComment(item?._id,'')}
                            disabled={isPendingLike}
                            className='flex items-center gap-1 text-sm text-white'>
                                {item?.likes?.length} {isLiked ? 
                                <IoHeartSharp size={20} className="text-main"/> 
                                : <IoHeartOutline size={20}/>}
                            </button>
                            <button onClick={()=>handleOpenReply(item?._id)}
                            className='flex items-center gap-1 text-sm text-white'>
                                {item?.replies?.length} Replies <BsReplyAll size={20}/>
                            </button>
                        </div>

                        {/* REPLY CONTANER */}
                        <div className={`w-full flex flex-col gap-3 mt-2 transition-all duration-300 
                            ease-in-out md:px-4 ${openReply === item?._id 
                                ? 'visible opacity-100 h-auto' : 'invisible opacity-0 h-0'}`}>
                            {/* REPLY INPUT */}
                            <div className='w-full flex items-center justify-between md:gap-12 gap-2'>
                                <div className='flex-1 flex items-center gap-4'>
                                    <Image src={user?.picture ? user?.picture : avatar} 
                                    width={40} height={40} 
                                    className="rounded-full object-cover border-2 border-main"/>
                                    <Input type="text" placeHolder="Reply this comment"
                                    value={replyValue} onChange={(e)=>setReplyValue(e.target.value)}/>
                                </div>
                                <button onClick={()=>handleReply(id, item?._id)}
                                disabled={isLoading}
                                className='p-3 rounded-full border-2 border-main text-main'>
                                    {isLoading ? <LuLoader size={16} className="animate-spin-slow"/>
                                    :<BsSend size={16} />}
                                </button>
                            </div>
                            {/* REPLY BOX */}
                            <div className={`w-full flex flex-col gap-4 `}>
                                    {
                                        item?.replies?.map((rep, i)=>{
                                            const isLikedReply = rep?.likes?.find((r)=>r === user?._id)
                                            return(
                                            <div key={i} className='w-full flex flex-col items-start p-2 border 
                                            border-primary rounded-md relative'>
                                                <div className="w-full flex item-center justify-between">
                                                    <div className='w-full flex items-center gap-4'>
                                                        <Image src={rep?.user?.picture ? rep?.user?.picture : avatar} 
                                                        width={40} height={40} 
                                                        className="rounded-full object-cover border-2 border-main"/>
                                                        <div className='flex flex-col'>
                                                            <h4 className='text-sm text-secondaryText'>{rep?.user?.userName}</h4>
                                                            <span className='text-xs text-primaryText italic'>
                                                                {moment(rep?.createdAt).format('DD MMM YYYY, HH:mm:ss')}
                                                            </span>
                                                        </div>
                                                    </div>
                                                    {
                                                        rep?.user?._id === user?._id &&
                                                        <button onClick={(e)=>{
                                                            handleOpenCommentMenu(rep?._id);
                                                            e.stopPropagation();}}>
                                                            <BsThreeDotsVertical size={18}/>
                                                        </button>
                                                    }
                                                    {
                                                        openMenu === rep?._id && <div onClick={(e)=>e.stopPropagation()}
                                                        className='absolute top-8 right-4 bg-primary 
                                                        p-3 flex flex-col gap-2 rounded-md shadow-md'>
                                                            <button onClick={()=>handleDeleteComment(item?._id, rep?._id)}
                                                            disabled={isPendingDel}
                                                            className='text-xs text-primaryText 
                                                            transition-all duration-300 hover:text-secondaryText'>
                                                                {isPendingDel ? 'Loading...' : 'Delete'}
                                                            </button>
                                                        </div>
                                                    }
                                                </div>
                                                <p className='px-4 py-2 md:text-sm text-xs text-primaryText text-left'>
                                                    {rep?.reply}
                                                </p>
                                                <button onClick={()=>handleLikeComment(item?._id,rep?._id)}
                                                disabled={isPendingLike}
                                                className='flex items-center gap-1 text-sm text-white'>
                                                    {rep?.likes?.length} {isLikedReply ? <IoHeartSharp size={20} className="text-main"/> 
                                                    : <IoHeartOutline size={20}/>}
                                                </button>
                                            </div>
                                        )})
                                    }
                            </div>
                        </div>
                        
                    </div>
                )})
            }
        </div>
    </div>
  )
}

export default Comment