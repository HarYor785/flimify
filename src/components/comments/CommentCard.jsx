import Image from 'next/image'
import React, { useState } from 'react'
import avatar from '@images/user.png'
import { AiOutlineLike, AiFillLike } from "react-icons/ai"
import { LiaReplySolid } from "react-icons/lia";
import moment from 'moment';
import { useRouter } from 'next/navigation';
import { handleFetch } from '@/lib/data';



const CommentCard = ({data, isReply, onclickReply, user, 
    commentId, replyId, movieId, fetchComments
}) => {
    const [isPending, setIsPending] = useState(false)
    const {push} = useRouter()


    const handleLike = async ()=>{
        if(!user?._id){
            const lastUrl = window.location.href
            localStorage.setItem('lastUrl', lastUrl)
            push('/login')
            return
        }
        const newData = {
            commentId,
            replyId,
            movieId,
            userId: user?._id,
        }
        const res = await handleFetch(`/movies/comment`,'DELETE','',newData,setIsPending)
        if(res?.success){
            fetchComments()
        }
    }
// console.log(data)
const isLiked = data?.likes?.find((item)=>String(item) === String(user?._id))
// console.log(isLiked)
  return (
    <div className='w-full flex flex-col gap-1'>
        <div className='w-full flex items-start gap-3'>
            <Image src={avatar}
            alt={data?.user?.userName || data?.name}
            width={50} height={50}
            className='border-2 border-main rounded-full'/>
            <div className='flex flex-col items-start gap-1'>
                <h3 className='text-sm text-secondaryText'>
                    {data?.user?.userName || data?.name}
                </h3>
                <span className='text-xs text-primaryText'>
                    {moment(data?.createdAt).format('DD MMM YYYY, HH:mm:ss')}
                </span>
            </div>
        </div>
        <div className='w-full border border-primary rounded-lg flex 
        flex-col gap-1 mx-2'>
            <p className='text-xs text-secondaryText p-2'>
                {data?.comment || data?.reply}
            </p>
            <hr className='border border-primary'/>
            <div className='w-full py-1 px-4 flex items-center justify-between'>
                <button onClick={handleLike}
                disabled={isPending}
                className='flex items-center gap-2'>
                    {isLiked ? <AiFillLike size={22}/> : <AiOutlineLike size={22}/>}
                    {data?.likes?.length}
                </button>
                {
                    !isReply &&
                    <button onClick={onclickReply}
                    className='text-xs text-main flex items-center gap-1'>
                        <LiaReplySolid size={15} className=' transform scale-x-[-1]'/> reply {data?.replies?.length}
                    </button>
                }
            </div>
        </div>
    </div>
  )
}

export default CommentCard