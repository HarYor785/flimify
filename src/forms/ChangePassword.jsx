'use client'

import React, { useState } from 'react'
import Input from '@/components/ui/Input'
import { useForm } from 'react-hook-form'
import Button from '@/components/ui/Button'
import { handleFetch } from '@/lib/data'
import { toast } from 'react-toastify'


const ChangePassword = ({user}) => {
    const [isLoading, setIsLoading] = useState(false)
    const {register, handleSubmit, formState:{errors},reset,getValues} = useForm({
        mode: "onChange"
    })
    const onsubmit = async (data) => {
        const res = await handleFetch(`/profile`,'POST',user?.token,data,setIsLoading)
        if(res?.success){
            toast.success(res?.message)
            reset()
        }else{
            toast.error(res?.message)
        }
    }
  return (
    <div className='w-full relative'>
        <form onSubmit={handleSubmit(onsubmit)}
        className='w-full flex flex-col gap-3'>
            {/* OLD PASSWORD */}
            <Input type="password" name="oldPassword"
            label="Old Password" placeHolder="*******"
            {...register('oldPassword',{
                required: 'This field is required!'
            })}>
                {errors.oldPassword && 
                <span className='text-xs text-red-600'>
                    {errors.oldPassword.message}
                </span>}
            </Input>
            {/* USERNAMD AND GENDER */}
            <div className='w-full flex items-center gap-3'>
                {/* NEW PASSWORD */}
                <Input type="password" name="newPassword"
                label="New Password" placeHolder="*******"
                {...register('newPassword',{
                    required: 'This field is required!'
                })}>
                    {errors.newPassword && 
                    <span className='text-xs text-red-600'>
                        {errors.newPassword.message}
                    </span>}
                </Input>
                {/* CONFIRM NEW PASSWORD */}
                <Input type="password" name="cNewPassword"
                label="Confirm New Password" placeHolder="*******"
                {...register('cNewPassword',{
                    validate: (value) => {
                        const {newPassword} = getValues()
                        if(newPassword !== value){
                            return 'Passwords do not match'
                        }
                    }
                })}>
                    {errors.cNewPassword && 
                    <span className='text-xs text-red-600'>
                        {errors.cNewPassword.message}
                    </span>}
                </Input>
            </div>

            <Button title={isLoading ? 'Loading' : 'Submit'} 
            disabled={isLoading}
            className={'mt-8 self-start w-fit'}/>
        </form>
    </div>
  )
}

export default ChangePassword