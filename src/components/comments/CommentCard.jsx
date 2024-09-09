import Image from 'next/image'
import React from 'react'
import avatar from '@images/user.png'
import { AiOutlineLike, AiFillLike } from "react-icons/ai"
import { LiaReplySolid } from "react-icons/lia";



const CommentCard = ({data, isReply, onclickReply, handleLike}) => {
  return (
    <div className='w-full flex flex-col gap-1'>
        <div className='w-full flex items-start gap-3'>
            <Image src={avatar}
            alt={data?.username}
            width={50} height={50}
            className=''/>
            <div className='flex flex-col items-start gap-1'>
                <h3 className='text-sm text-secondaryText'>
                    {data?.username}
                </h3>
                <span className='text-xs text-primaryText'>
                    {data?.date}
                </span>
            </div>
        </div>
        <div className='w-full border border-primary rounded-lg flex 
        flex-col gap-2 mx-2'>
            <p className='text-xs text-secondaryText p-3'>
                {data?.comment}
            </p>
            <hr className='border border-primary'/>
            <div className='w-full py-2 px-4 flex items-center justify-between'>
                <AiOutlineLike onClick={handleLike}/>
                {
                    !isReply &&
                    <button onClick={onclickReply}
                    className='text-xs text-main flex items-center gap-1'>
                        <LiaReplySolid size={15} className=' transform scale-x-[-1]'/> reply
                    </button>
                }
            </div>
        </div>
    </div>
  )
}

export default CommentCard