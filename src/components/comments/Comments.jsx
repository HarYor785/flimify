import React, {useEffect, useState} from 'react'
import CommentCard from './CommentCard'
import Pagination from '../pagination/Pagination'
import Input from '../ui/Input'
import Button from '../ui/Button'
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import { handleFetch } from '@/lib/data'
import { toast } from 'react-toastify'

const Comments = ({data, fetchComments, movieId}) => {
    const {user} = useSelector((state)=>state.user)
    const [newData, setNewData] = useState([])
    const [openReply, setOpenReply] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [isPending, setIsPending] = useState(false)
    const [value, setValue] = useState('')
    const [replyError, setReplyError] = useState('')
    const {register, handleSubmit, formState:{errors}, reset} = useForm({
        mode: 'onChange'
    })
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(()=>{
        setNewData(data)
    },[data])

    const handleOpenReply = (val) =>{
        if(openReply === val){
            setOpenReply('')
        }else{
            setOpenReply(val)
        }
    }

    const handleSubmitComment = async (data)=>{
        const newData = {
            movieId,
            userId: user?._id,
            ...data
        }
        const res = await handleFetch(`/movies/comment`,'POST','',newData,setIsLoading)
        if(res?.success){
            toast.success(res?.message)
            fetchComments()
            reset()
        }else{
            toast.error(res?.message)
        }
    }

    const handleReplyComment = async (id)=>{
        if(!value || value === ''){
            setReplyError(true)
            return
        }
        const newData = {
            movieId,
            userId: user?._id,
            commentId: id,
            reply: value
        }
        const res = await handleFetch(`/movies/comment`,'PUT','',newData,setIsPending)
        setReplyError(false)
        if(res?.success){
            toast.success(res?.message)
            fetchComments()
            setValue('')
        }else{
            toast.error(res?.message)
        }
    }


  return (
    <div className='w-full flex flex-col gap-4 border border-primary p-4 rounded-lg'>
        {
            newData?.map((item, i)=>(
                <div key={i} className='w-full flex flex-col gap-2'>
                    <CommentCard data={item} isReply={false} 
                    onclickReply={()=>handleOpenReply(item?._id)} 
                    user={user} commentId={item?._id} movieId={movieId}
                    fetchComments={fetchComments} replyId={''}/>
                    {
                        openReply === item?._id && (
                        <div className="md:pl-8 pl-2 flex flex-col gap-3">
                            <div className='w-full flex items-center gap-3'>
                                <Input type="text" placeHolder="Enter a message"
                                className={`${replyError ? ' !outline-red-700' : ''}`}
                                value={value} onChange={(e)=>setValue(e.target.value)}/>
                                <Button title={isPending ? 'Loading' : 'Submit'}
                                disabled={isPending}
                                onClick={()=>handleReplyComment(item?._id)}/>
                            </div>
                            <div className='w-full flex flex-col gap-2'>
                                {
                                    item?.replies?.map((reply, i)=>(
                                        <CommentCard key={i} data={reply} isReply={true} 
                                        user={user} replyId={reply?._id} movieId={movieId}
                                        fetchComments={fetchComments} commentId={''}/>
                                    ))
                                }
                            </div>
                        </div>

                        )
                    }
                </div>
            ))
        }

        {/* PAGINATION */}
        {
            newData?.length > 5 &&
            <Pagination data={newData} setData={setNewData} itemsPerPage={5}/>
        }

        {/* CREATE COMMENT */}
        <form onSubmit={handleSubmit(handleSubmitComment)}
        className='w-full p-4 flex flex-col gap-3 border border-primary rounded-lg'>
            <textarea name="comment" id="" cols={5} rows={5}
            {...register('comment',{
                required: 'This field is required'
            })}
            className='w-full text-xs text-secondaryText p-3 bg-primary
            rounded-lg transition-all duration-300 ease-in-out focus-within:border-2 
            focus-within:border-main border-2 border-primary outline-none resize-none'
            placeholder='Add comment'></textarea>
            {
                !user?.token && mounted && 
                <div className='w-full grid grid-cols-1 md:grid-cols-2 md:gap-4 gap-3'>
                    <Input type="text" label="Name"
                    {...register('name',{
                        required: 'This field is required'
                    })}
                    placeHolder="John Doe">
                        {errors?.name && <span className='text-xs text-red-700'>
                            {errors?.name?.message}
                        </span>}
                    </Input>
                    <Input type="email" label="Email"
                    {...register('email',{
                        required: 'This field is required'
                    })}
                    placeHolder="example@email.com">
                        {errors?.email && <span className='text-xs text-red-700'>
                            {errors?.email?.message}
                        </span>}
                    </Input>
                </div>
            }

            <Button title={isLoading ? 'Loading' : 'Submit'}
            disabled={isLoading} 
            className={'!max-w-fit'}/>
        </form>
    </div>
  )
}

export default Comments