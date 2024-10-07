import React, { useState } from 'react'
import avatar from '@images/user.png'
import Image from 'next/image'
import Input from '@/components/ui/Input'
import { useForm } from 'react-hook-form'
import Select from '@/components/ui/Select'
import { RiImageAddLine } from "react-icons/ri";
import Button from '@/components/ui/Button'
import { handleFetch } from '@/lib/data'
import { handleSetUser } from '@/states/userSlice'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import axios from 'axios'

const ProfileForm = ({user}) => {
    const [image, setImage] = useState(null)
    const [imageUrl, setImageUrl] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const dispatch = useDispatch()
    const {register, handleSubmit, formState:{errors},reset} 
    = useForm({
        mode: "onChange",
        defaultValues:{
            firstName: user?.firstName,
            lastName: user?.lastName,
            userName: user?.userName,
            email: user?.email,
            phone: user?.phone,
            gender: user?.gender,
        }
    })

    const handleSelectImg = (e)=>{
        setImage(e.target.files[0])
        setImageUrl(URL.createObjectURL(e.target.files[0]))
    }
    const onsubmit = async (data) => {
        let img;
        if(image){
            setIsLoading(true)
            const uploadData = new FormData()
            uploadData.append('file', image)
            uploadData.append('upload_preset', 'flimify')
            const res = await axios.post(`${process.env.NEXT_PUBLIC_CLOUDINARY_URL}`,uploadData)
            img = res?.data?.secure_url
        }
        const profileData = {picture: img, ...data}
        const res = await handleFetch(`/profile`,'PUT',user?.token,profileData,setIsLoading)
        if(res?.success){
            toast.success(res?.message)
            const newData = {token: res?.token, ...res?.user}
            dispatch(handleSetUser(newData))
        }else{
            toast.error(res?.message)
        }

        setIsLoading(false)
    }
  return (
    <div className='w-full flex flex-col items-center gap-4 relative'>
        <div className='w-fit relative'>
            <Image src={user?.picture ? user?.picture : (imageUrl ? imageUrl : avatar)} 
            width={100} height={100}
            alt='User Avatar' className='w-32 h-32 rounded-full border-2 
            border-main'/>
            <label htmlFor="uploadImage" 
            className='absolute right-0 text-xl cursor-pointer  
            rounded-full text-secondaryText z-50 p-2 bg-main shadow-md'
            style={{bottom: '5px'}}>
                <input type="file" id="uploadImage" accept="image/*" hidden
                onChange={(e)=>handleSelectImg(e)}/>
                <RiImageAddLine />
            </label>
        </div>
        <form onSubmit={handleSubmit(onsubmit)}
        className='w-full flex flex-col gap-3'>
            {/* FIRST AND LAST NAME */}
            <div className='w-full flex items-center gap-3'>
                <Input type="text" name="firstName"
                label="First Name" placeHolder="John Doe"
                {...register('firstName',{
                    required: 'This field is required!'
                })}>
                    {errors.firstName && 
                    <span className='text-xs text-red-600'>
                        {errors.firstName.message}
                    </span>}
                </Input>
                <Input type="text" name="lastName"
                label="Last Name" placeHolder="John Doe"
                {...register('lastName',{
                    required: 'This field is required!'
                })}>
                    {errors.lastName && 
                    <span className='text-xs text-red-600'>
                        {errors.lastName.message}
                    </span>}
                </Input>
            </div>
            {/* USERNAMD AND GENDER */}
            <div className='w-full flex items-center gap-3'>
                <Input type="text" name="userName"
                label="User Name" placeHolder="John Doe"
                {...register('userName',{
                    required: 'This field is required!'
                })}>
                    {errors.userName && 
                    <span className='text-xs text-red-600'>
                        {errors.userName.message}
                    </span>}
                </Input>
                <Select label="Gender" errors={errors.gender?.message}
                {...register('gender',{
                    required: 'This field is required!'
                })}
                className="bg-primary text-primaryText">
                    <option value="Female">Female</option>
                    <option value="Male">Male</option>
                </Select>
            </div>
            {/* EMAIL AND PHONE */}
            <div className='w-full flex items-center gap-3'>
                <Input type="text" name="email"
                label="Email" placeHolder="example@gmail.com"
                {...register('email',{
                    required: 'This field is required!'
                })}>
                    {errors.email && 
                    <span className='text-xs text-red-600'>
                        {errors.email.message}
                    </span>}
                </Input>
                <Input type="text" name="phone"
                label="Phone" placeHolder="+234985973782"
                {...register('phone',{
                    required: 'This field is required!'
                })}>
                    {errors.phone && 
                    <span className='text-xs text-red-600'>
                        {errors.phone.message}
                    </span>}
                </Input>
            </div>

            <Button title={isLoading ? 'Loading' : 'Submit'} 
            className={'mt-8 self-start w-fit'}
            disabled={isLoading}/>
        </form>
    </div>
  )
}

export default ProfileForm