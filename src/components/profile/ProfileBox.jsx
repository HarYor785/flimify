'use client'

import React from 'react'
import ProfileForm from '@/forms/ProfileForm'
import ChangePassword from '@/forms/ChangePassword'
import { useSelector } from 'react-redux'

const ProfileBox = () => {
    const {user} = useSelector((state)=>state.user)
  return (
    <div className='w-full flex md:flex-row flex-col md:items-start 
    items-center md:justify-between justify-center gap-6'>
        {/* LEFT */}
        <div className='w-full p-6 border border-primary rounded-lg
        flex flex-col items-start gap-2'>
            <h1 className='md:text-lg text-base text-secondaryText'>
                Profile
            </h1>
            <ProfileForm user={user}/>
        </div>
        {/* RIGHT */}
        <div className='w-full p-6 border border-primary rounded-lg
        flex flex-col items-start gap-6'>
            <h1 className='md:text-lg text-base text-secondaryText'>
                Change Password
            </h1>
            <ChangePassword user={user}/>
        </div>
    </div>
  )
}

export default ProfileBox