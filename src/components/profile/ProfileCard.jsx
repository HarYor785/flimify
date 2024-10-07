'use client'


import Image from 'next/image'
import React, { useEffect } from 'react'
import avatar from '@images/user.png'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/navigation'

const ProfileCard = () => {
    const {user} = useSelector((state)=>state.user)
    const {push} = useRouter()
    
    useEffect(()=>{
        if(!user?.token){
            push('/')
        }
    },[user])
  return (
    <div className='min-w-max flex items-center gap-3'>
        <Image src={avatar} width={40} height={40}
        alt='User Avatar'
        className='border border-primary rounded-md'/>
        <div className='flex flex-col items-start'>
            <h3 className='md:text-sm text-xs text-secondaryText'>
                {user?.firstName + ' ' + user.lastName}
            </h3>
            <span className='text-xs text-primaryText italic'>
                {user?.code}
            </span>
        </div>
    </div>
  )
}

export default ProfileCard