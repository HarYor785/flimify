'use client'


import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import Link from 'next/link'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { IoMdEye, IoMdEyeOff } from "react-icons/io";


const LoginForm = () => {
    const [open, setOpen] = useState(false)
    const {
        register,
        handleSubmit,
        formState:{errors},
    } = useForm({
        mode: 'onChange'
    })

    const onsubmit = (data) => {
        console.log(data)
    }
  return (
    <form onSubmit={handleSubmit(onsubmit)} 
    className="w-full flex flex-col gap-3">
        <div className='w-full relative flex flex-col gap-3'>
            <Input type={'text'} label={'Email'}
            {...register('email',{
                required: 'Email is required!'
            })}
            >
                {errors.email && <span className='text-xs text-red-600'>
                    {errors.email.message}
                </span>}
            </Input>
            <Input type={'password'} label={'Password'}
            {...register('Password',{
                required: 'Password is required!'
            })}
            icon={open ? IoMdEyeOff : IoMdEye}
            iconOnclick={()=>setOpen(!open)}
            >
                {errors.Password && <span className='text-xs text-red-600'>
                    {errors.Password.message}
                </span>}
            </Input>
        </div>

        <Button title={'Continue'} 
        type="submit"
        className={'self-start mt-4 min-w-[150px]'}/>

        <p className='text-sm text-secondaryText flex items-center gap-3 
        justify-center my-3'>
            Don't have an account?
            <Link href={'/signup'}
            className='text-main self-center text-center'>
                Signup
            </Link>
        </p>
        <Link href={'/forgot-password'}
        className='text-xs text-main self-center text-center'>
            Forgot password?
        </Link>
    </form>
  )
}

export default LoginForm