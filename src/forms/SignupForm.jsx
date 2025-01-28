'use client'


import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import Link from 'next/link'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { IoMdEye, IoMdEyeOff } from "react-icons/io";



const SignupForm = () => {
    const [open, setOpen] = useState(false)
    const {
        register,
        handleSubmit,
        formState:{errors},
        getValues,
        reset
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
            <Input type={'text'} label={'Username'}
            placeHolder="John Doe"
            {...register('username',{
                required: 'Username is required!'
            })}
            >
                {errors.username && <span className='text-xs text-red-600'>
                    {errors.username.message}
                </span>}
            </Input>
            <Input type={'text'} label={'Email'}
            placeHolder="email@example.com"
            {...register('email',{
                required: 'Email is required!'
            })}
            >
                {errors.email && <span className='text-xs text-red-600'>
                    {errors.email.message}
                </span>}
            </Input>
            <Input type={open ? 'text' : 'password'} 
            label={'Password'}
            placeHolder="***************"
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
            <Input type={open ? 'text' : 'password'} 
            label={'Confirm Password'}
            placeHolder="***************"
            {...register('cPassword',{
                validate: (value) => {
                    const {password} = getValues()
                    return value === password || 'Passwords do not match!'
                }
            })}
            icon={open ? IoMdEyeOff : IoMdEye}
            iconOnclick={()=>setOpen(!open)}
            >
                {errors.cPassword && <span className='text-xs text-red-600'>
                    {errors.cPassword.message}
                </span>}
            </Input>
        </div>

        <Button title={'Continue'} 
            type="submit"
            className={'self-start mt-4 min-w-[150px]'}
        />
        <p className='text-sm text-secondaryText flex items-center gap-3 
        justify-center my-3'>
            Already have an account?
            <Link href={'/login'}
            className='text-main self-center text-center'>
                Login
            </Link>
        </p>
    </form>
  )
}

export default SignupForm