'use client'


import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import { handleFetch } from '@/lib/data'
import { handleSetUser } from '@/states/userSlice'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'


const LoginForm = () => {
    const [open, setOpen] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const dispatch = useDispatch()
    const {push} = useRouter()
    const {
        register,
        handleSubmit,
        formState:{errors},
        reset
    } = useForm({
        mode: 'onChange'
    })

    const onsubmit = async (data) => {
        const res = await handleFetch(`/auth/login`, 'POST', '', data, setIsLoading)
        if(res?.success){
            toast.success(res?.message)
            reset()
            const lastUrl = localStorage.getItem('lastUrl')
            const newData = {token: res?.token, ...res?.user}
            dispatch(handleSetUser(newData))
            if(lastUrl){
                localStorage.removeItem('lastUrl')
                push(lastUrl)
            }else{
                push('/')
            }
        }else{
            toast.error(res?.message)
        }
    }
  return (
    <form onSubmit={handleSubmit(onsubmit)} 
    className="w-full flex flex-col gap-3">
        <div className='w-full relative flex flex-col gap-3'>
            <Input type={'email'} label={'Email'}
            name="email"
            {...register('email',{
                required: 'Email is required!'
            })}
            >
                {errors.email && <span className='text-xs text-red-600'>
                    {errors.email.message}
                </span>}
            </Input>
            <Input type={open ? 'text' : 'password'} label={'Password'}
            name="password"
            {...register('password',{
                required: 'Password is required!'
            })}
            icon={open ? IoMdEyeOff : IoMdEye}
            iconOnclick={()=>setOpen(!open)}
            >
                {errors.password && <span className='text-xs text-red-600'>
                    {errors.password.message}
                </span>}
            </Input>
        </div>

        <Button title={isLoading ? 'Loading' : 'Continue'} 
        type="submit"
        disabled={isLoading}
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