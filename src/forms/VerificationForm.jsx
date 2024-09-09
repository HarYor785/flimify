'use client'


import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import Link from 'next/link'
import React from 'react'
import { useForm } from 'react-hook-form'

const VerificationForm = () => {
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
        <p className='text-xs text-primaryText text-center'>
            Enter verification code sent to your email to continue
        </p>
        <div className='w-full relative flex flex-col gap-3'>
            <Input type={'text'} label={'Code'}
            {...register('code',{
                required: 'Code is required!'
            })}
            >
                {errors.code && <span className='text-xs text-red-600'>
                    {errors.code.message}
                </span>}
            </Input>
        </div>

        <Button title={'Submit'} 
            type="submit"
            className={'self-start mt-4 min-w-[150px]'}/>
    </form>
  )
}

export default VerificationForm