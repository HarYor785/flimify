import React, {useState} from 'react'
import CommentCard from './CommentCard'
import Pagination from '../pagination/Pagination'
import Input from '../ui/Input'
import Button from '../ui/Button'
import { useForm } from 'react-hook-form'

const Comments = ({data}) => {
    const [newData, setNewData] = useState([])
    const [openReply, setOpenReply] = useState('')
    const {register, handleSubmit, formState:{errors}} = useForm({
        mode: 'onChange'
    })

    const handleOpenReply = (val) =>{
        if(openReply === val){
            setOpenReply('')
        }else{
            setOpenReply(val)
        }
    }

    const handleSubmitComment = async (data)=>{
        console.log(data)
    }
  return (
    <div className='w-full flex flex-col gap-6 border border-primary p-4 rounded-lg'>
        {
            newData?.map((item, i)=>(
                <div key={i} className='w-full flex flex-col gap-4'>
                    <CommentCard data={item} isReply={false} 
                    onclickReply={()=>handleOpenReply(item?.id)}/>
                    {
                        openReply === item?.id && (
                        <div className="md:pl-8 pl-2 flex flex-col gap-3">
                            <div className='w-full flex items-center gap-3'>
                                <Input type="text" placeHolder="Enter a message"/>
                                <Button title={'Submit'}/>
                            </div>
                            <div className='w-full flex flex-col gap-2'>
                                {
                                    item?.replies?.map((reply, i)=>(
                                        <CommentCard key={i} data={reply} isReply={true}/>
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
        <Pagination data={data} setData={setNewData} itemsPerPage={2}/>

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
            <div className='w-full grid grid-cols-1 md:grid-cols-2 md:gap-4 gap-3'>
                <Input type="text" label="Name"
                {...register('name',{
                    required: 'This field is required'
                })}
                placeHolder="John Doe">
                    <span className='text-xs text-red-700'>
                        error
                    </span>
                </Input>
                <Input type="email" label="Email"
                {...register('email',{
                    required: 'This field is required'
                })}
                placeHolder="example@email.com">
                    <span className='text-xs text-red-700'>
                        error
                    </span>
                </Input>
            </div>

            <Button title={'Submit'} className={'!max-w-fit'}/>
        </form>
    </div>
  )
}

export default Comments