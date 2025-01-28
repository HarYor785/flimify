'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaPlay } from "react-icons/fa6";
import { MdBookmark, MdOutlineBookmarkBorder } from "react-icons/md"
import { useDispatch, useSelector } from 'react-redux'
import { handleFetch } from '@/lib/data'
import { handleSetUser, handleRemoveUser } from '@/states/userSlice'
import {toast} from 'react-toastify'

const MovieCard = ({data, fetchMovies, isPlaying}) => {
    const {user} = useSelector((state)=>state.user)
    const [isLoading, setIsLoading] = useState(false)
    const dispatch = useDispatch()

    const handleWatchlist = async (id)=>{
        try {
            const res = await handleFetch(`/watchlist?id=${id}`,'POST',user?.token,'',setIsLoading)
            if(res?.message?.includes('Authorization failed')){
                dispatch(handleRemoveUser())
                toast.info('Kindly login to add a movie to watchlist')
            }
            if(res?.success){
                const newData = {token: res?.token, ...res?.user}
                dispatch(handleSetUser(newData))
                if(fetchMovies){
                    fetchMovies()
                }
                toast.info(res?.message)
            }
        } catch (error) {
            console.log(error)
            toast.error("Error, try again!")
        }
    }

    const isWatchlist = user?.watchlist && data?._id ? user?.watchlist?.find((item) => {
        if(String(item) === String(data?._id)){
            return true
        }else{
            return false
        }
    }) : null;
    
  return (
    <div className='w-full max-w-[200px] h-fit rounded-md overflow-hidden relative
    flex flex-col gap-2 group'>
        <div className='w-full relative'>
            <Image src={data?.posterLink} 
            width={300} height={300}
            className='w-full h-full 
            object-contain rounded-md'
            alt={data?.title}
            loading="lazy"/>
            {/* PLAY AND WATCHLIST BUTTON */}
            <div className='absolute w-full h-full top-0 left-0 bg-black bg-opacity-35 
            hidden group-hover:flex items-center justify-center z-[1000] transition-all duration-300 
            ease-in-out animate-fade-in'>
                {/* ADD TO WATCHLIST BUTTON */}
                <button onClick={()=>handleWatchlist(data?._id)}
                disabled={isLoading}
                className='p-2 flex items-center justify-center bg-secondary 
                rounded-lg absolute md:top-6 top-3 md:right-6 right-3 shadow-md'>
                    {isWatchlist ? (
                        <MdBookmark size={18} className='text-main' />
                    ) : (
                        <MdOutlineBookmarkBorder size={18} />
                    )}
                </button>
                {/* PLAY BUTTON */}
                {
                    !isPlaying &&
                    <Link href={`/movie/${data?.slug}?d=${data?._id}${data?.season ? `&s=${data?.season}` : ''}`}
                    className='relative md:w-14 w-10 md:h-14 h-10 bg-white flex items-center justify-center 
                    rounded-full before:absolute before:md:top-[-0.5rem] before:top-[-0.9rem] 
                    before:md:left-[-0.5rem] before:left-[-0.8rem] before:content-[""] 
                    before:md:w-[4.5rem] before:md:h-[4.5rem] before:bg-white before:bg-opacity-30 
                    before:z-[-1] before:rounded-full before:transition-all before:duration-300 
                    before:ease-in-out hover:before:bg-main hover:before:bg-opacity-60 before:w-[4rem] 
                    before:h-[4rem]'>
                        <FaPlay size={20} className='text-main'/>
                    </Link>
                }
            </div>
        </div>
        {   
            !isPlaying &&
            <div className='w-full flex flex-col items-start gap-0'>
                <Link href={`/movie/${data?.slug}?d=${data?._id}${data?.season ? `&s=${data?.season}` : ''}`}
                className='md:text-base text-sm text-secondaryText transition-all 
                duration-300 ease-linear hover:text-main w-full overflow-hidden 
                whitespace-nowrap text-ellipsis font-SourceCodePro'>
                    {data?.season ? `S${data?.season}:` : ""} {data?.title}
                </Link>
                <p className='text-xs text-main'>
                    {data?.genre}
                </p>
            </div>
        }
        
        <span className='w-8 h-8 bg-black bg-opacity-15 border-2 border-green-500 
        flex items-center justify-center text-xs rounded-full absolute md:top-6 top-3 
        md:left-6 left-3'>
            {data?.rating?.slice(0, 1) || "N/A"}
        </span>
    </div>
  )
}

export default MovieCard