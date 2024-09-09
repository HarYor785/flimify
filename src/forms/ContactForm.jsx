'use client'

import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import React from 'react'
import { useForm } from 'react-hook-form'

const ContactForm = () => {
    const {register, handleSubmit, formState:{errors}, reset} = useForm({
        mode: "onChange"
    })

    const onsubmit = async (data)=>{
        console.log(data)
    }
  return (
    <form onSubmit={handleSubmit(onsubmit)}
    className='p-6 flex flex-col w-full gap-4 items-start border 
    border-primary rounded-lg'>
        <div className='w-full grid grid-cols-1 md:grid-cols-2 md:gap-5 gap-4'>
            <Input type="text" label="Name" placeHolder="John"
            {...register('name',{
                required: 'This field is required'
            })}
            >
                {errors.name && (
                    <span className='text-xs text-red-700'>
                        {errors?.name?.message}
                    </span>
                )}
            </Input>
            <Input type="email" label="Email" placeHolder="example@email.com"
            {...register('email',{
                required: 'This field is required'
            })}
            >
                {errors.email && (
                    <span className='text-xs text-red-700'>
                        {errors?.email?.message}
                    </span>
                )}
            </Input>
        </div>
        <Input type="text" label="Subject" placeHolder="Advertise"
        {...register('subject',{
            required: 'This field is required'
        })}
        >
            {errors.subject && (
                <span className='text-xs text-red-700'>
                    {errors?.subject?.message}
                </span>
            )}
        </Input>
        <div className='w-full flex flex-col items-start gap-1'>
            <label htmlFor="message" className='md:text-sm text-xs text-primaryText'>
                Message
            </label>    
            <textarea name="Message" id="" cols={5} rows={5}
            {...register('message',{
                required: 'This field is required'
            })}
            className='w-full text-xs text-secondaryText p-3 bg-primary
            rounded-lg transition-all duration-300 ease-in-out focus-within:border-2 
            focus-within:border-main border-2 border-primary outline-none resize-none'
            placeholder='Type your message'></textarea>
            {errors.message && (
                <span className='text-xs text-red-700'>
                    {errors?.message?.message}
                </span>
            )}
        </div>

        <Button title={'Submit'}/>
    </form>
  )
}

export default ContactForm