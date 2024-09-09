'use client'

import { moviePosts } from '@/lib'
import React, { useState } from 'react'
import PostCard from '../postCard/PostCard'

const UsersPosts = () => {

  return (
    <div className='w-full flex flex-col items-start gap-6'>
        <h1 className='md:text-lg text-sm text-secondaryText'>
            My Posts
        </h1>
        {/* POSTS */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 place-items-start">
            {
                moviePosts.length > 0 ? (
                moviePosts.map((item, i)=>(
                    <PostCard key={i} item={item} id={item.id}/>
                ))
            ) : (
                <div className='w-full flex items-center justify-center'>
                    <p>No posts yet</p>
                </div>
            )
        }
        </div>
    </div>
  )
}

export default UsersPosts