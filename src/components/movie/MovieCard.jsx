import React from 'react'
import movie1 from '@images/movie2.webp'
import Image from 'next/image'
import Link from 'next/link'
import { FaPlay } from "react-icons/fa6";
import { MdOutlineBookmarkBorder } from "react-icons/md"

const MovieCard = ({data}) => {
  return (
    <div className='w-full h-fit rounded-md overflow-hidden relative
    flex flex-col gap-2 group'>
        <div className='w-full relative'>
            <Image src={data.image} width={300} height={300}
            className='w-full h-full object-contain rounded-md'
            alt={data.title}/>
            {/* PLAY AND WATCHLIST BUTTON */}
            <div className='absolute w-full h-full top-0 left-0 bg-black bg-opacity-35 
            hidden group-hover:flex items-center justify-center z-50 transition-all duration-300 
            ease-in-out animate-fade-in'>
                {/* ADD TO WATCHLIST BUTTON */}
                <button className='p-2 flex items-center justify-center bg-secondary 
                rounded-lg absolute md:top-6 top-3 md:right-6 right-3 shadow-md'>
                    <MdOutlineBookmarkBorder size={18}/>
                </button>
                {/* PLAY BUTTON */}
                <Link href={`/movie/${data?.slug}`}
                className='relative md:w-14 w-10 md:h-14 h-10 bg-white flex items-center justify-center 
                rounded-full before:absolute before:top-[-0.5rem] before:left-[-0.5rem] before:content-[""] 
                before:md:w-[4.5rem] before:md:h-[4.5rem] before:bg-white before:bg-opacity-30 
                before:z-[-1] before:rounded-full before:transition-all before:duration-300 
                before:ease-in-out hover:before:bg-main hover:before:bg-opacity-60 before:w-[4rem] 
                before:h-[4rem'>
                    <FaPlay size={20} className='text-main'/>
                </Link>
            </div>
        </div>
        <div className='w-full flex flex-col items-start gap-0'>
            <Link href={`/movie/${data?.slug}`} className='md:text-lg text-sm text-secondaryText transition-all 
            duration-300 ease-linear hover:text-main w-full overflow-hidden 
            whitespace-nowrap text-ellipsis font-SourceCodePro'>
                {data.title}
            </Link>
            <p className='text-xs text-main'>
                {data.genre}
            </p>
        </div>
        <span className='w-8 h-8 bg-black bg-opacity-15 border-2 border-green-500 
        flex items-center justify-center text-xs rounded-full absolute md:top-6 top-3 
        md:left-6 left-3'>
            {data.rating}
        </span>
    </div>
  )
}

export default MovieCard