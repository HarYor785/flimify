import React, { useState } from 'react'
import Image from 'next/image'
import { IoHeartOutline, IoHeartSharp, } from "react-icons/io5";
import { FaRegCommentDots } from "react-icons/fa6";
import Comment from '../posts/Comment';
import avatar from '@images/user.png'


const PostCard = ({item}) => {
    const [openComment, setOpenComment] = useState('')

    const handleOpenComment = (index) => {
        if(openComment === index){
            setOpenComment('')
        }else{
            setOpenComment(index)
        }
    }
  return (
    <div className='w-full flex flex-col gap-3 p-4 border 
        border-primary rounded-lg'>
        <div className='flex items-center gap-3'>
            <Image src={avatar} width={200} height={300} 
            alt="User Avatar" className='w-12 h-12 rounded-full border-2 
            border-main'/>
            <div className='flex flex-col items-start'>
                <h3 className='text-base capitalize text-gray-100'>
                    Flimify
                </h3>
                <span className='text-xs italic text-gray-300'>
                    4/8/2079
                </span>
            </div>
        </div>
        <p className='md:text-sm text-xs text-gray-200 p-3'>
            {item.description}
        </p>
        <Image src={item.imageUrl} 
        alt={item.title} width={500} height={500}
        className='w-full h-full object-contain rounded-md'/>
        <div className='w-full flex items-center gap-4'>
            <button className='flex items-center gap-1 text-sm text-white'>
                50 <IoHeartOutline size={20}/>
            </button>
            <button onClick={()=>handleOpenComment(item.id)}
            className='flex items-center gap-1 text-sm text-white'>
                28 <FaRegCommentDots size={20}/>
            </button>
        </div>
        {/* COMMENT BOX */}
        {
            openComment === item.id &&
            <Comment openComment={openComment} id={item.id}/>
        }
    </div>
  )
}

export default PostCard