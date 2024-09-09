import Image from 'next/image'
import React, { useState } from 'react'
import Input from '../ui/Input'
import avatar from '@images/user.png'
import { BsSend } from "react-icons/bs";
import { comments } from '@/lib';
import { IoHeartOutline } from 'react-icons/io5';



const Comment = ({openComment, id}) => {
    const [value, setValue] = useState('')
  return (
    <div className='w-full flex flex-col gap-3'>
        <div className='w-full flex items-center justify-between md:gap-12 gap-2'>
            <div className='flex-1 flex items-center gap-4'>
                <Image src={avatar} width={40} height={40} 
                className="rounded-full object-cover border-2 border-main"/>
                <Input type="text" placeHolder="Comment on this post"
                value={value} onChange={(e)=>setValue(e.target.value)}/>
            </div>
            <button className='p-3 rounded-full border-2 border-main text-main'>
                <BsSend size={16}/>
            </button>
        </div>
        <div className={`w-full flex flex-col gap-4 transition-all duration-300 
        ease-in-out md:px-4 ${openComment === id 
            ? 'visible opacity-100 h-auto' : 'invisible opacity-0 h-0'}`}>
            {
                comments.map((item, i)=>(
                    <div key={i} className='w-full flex flex-col items-start p-2 border 
                    border-primary rounded-md'>
                        <div className='w-full flex items-center gap-4'>
                            <Image src={avatar} width={40} height={40} 
                            className="rounded-full object-cover border-2 border-main"/>
                            <div className='flex flex-col'>
                                <h4 className='text-sm text-secondaryText'>{item.username}</h4>
                                <span className='text-xs text-primaryText italic'>{item.date}</span>
                            </div>
                        </div>
                        <p className='px-4 py-2 md:text-sm text-xs text-primaryText text-left'>
                            {item.comment}
                        </p>
                        <button className='flex items-center gap-1 text-sm text-white'>
                            50 <IoHeartOutline size={20}/>
                        </button>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Comment