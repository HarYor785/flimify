'use client'

import React, { useEffect, useState } from 'react'
import PageBg from '../pageBg/PageBg'
import Image from 'next/image'
import { MdOutlineBookmarkBorder } from 'react-icons/md'
import ShareButton from '../ui/ShareButton'
import DownloadBtn from '../ui/DownloadBtn'
import { MdOutlineStream } from "react-icons/md";
import Comments from '../comments/Comments'
import MovieCard from '../movie/MovieCard'
import moment from 'moment'
import { handleFetch } from '@/lib/data'
import { useRouter } from 'next/navigation'


const streams = [
    {
        "id": 1,
        "name": "Stream 1",
        "link": "https://www.youtube.com/embed/l5Xc-FQUv-Y?si=WicvDYOyeziGU94d",
    },
    {
        "id": 2,
        "name": "Stream 2",
        "link": "https://www.youtube.com/embed/m5zSvMHuCNQ?si=tDmLFFYATxchm66-",
    },
    {
        "id": 3,
        "name": "Stream 3",
        "link": "https://www.youtube.com/embed/kmy_YNhl0mw?si=k_0iWBGPvFAeGbkE",
    },
]

const Player = ({data, moreMovies, slug}) => {
    const [currentStream, setCurrentStream] = useState(data?.stream[0]?.videoLink)
    const [isLoading, setIsLoading] = useState(false)
    const [comments, setComments] = useState([])
    const {push} = useRouter()

    const handleChangeStream = (url) =>{
        setCurrentStream(url)
    }

    const fetchComments = async ()=>{
        const res = await handleFetch(`/movies/comment?id=${data?._id}`,'GET','','',setIsLoading)
        setComments(res?.data)
    }
    useEffect(()=>{
        fetchComments()
    },[data])

    useEffect(()=>{
        if(!slug || slug === '' || slug === 'undefined' || slug === null){
            push('/')
        }
    },[data])


  return (
    <div className='w-full py-2'>
        <PageBg image={data?.imageLink}/>
        <div className='w-full flex flex-col gap-4'>

            {/* MOVIE PLAYER */}
            <div className='w-full relative flex flex-col gap-4 border border-primary p-2'>
                <div className='w-full flex flex-col gap-4'>
                    <h1 className='text-3xl font-bold text-secondaryText'>{data?.title}</h1>
                    <div className='w-full flex items-start gap-5 flex-wrap'>
                        {/* MOVIE IMAGE, RATING AND WATCHLIST BUTTON */}
                        <div className='relative md:w-[250px] md:h-full w-[200px] h-[300px] 
                        overflow-hidden rounded-lg'>
                            <div className='w-full flex items-center'>
                                <span className='w-8 h-8 bg-black bg-opacity-15 border-2 border-green-500 
                                flex items-center justify-center text-xs rounded-full absolute md:top-6 top-3 
                                md:left-6 left-3'>
                                    {data?.rating}
                                </span>
                                {/* ADD TO WATCHLIST BUTTON */}
                                <button className='p-2 flex items-center justify-center bg-secondary 
                                rounded-lg absolute md:top-6 top-3 md:right-6 right-3 shadow-md'>
                                    <MdOutlineBookmarkBorder size={18}/>
                                </button>
                            </div>
                            <Image src={data?.imageLink} alt={data?.title || 'Title'}
                            width={300} height={300}
                            className='w-full h-full md:object-cover object-contain'/>
                        </div>
                        {/* MOVIE DETAILS */}
                        <div className='flex flex-col items-start md:gap-2 gap-1 md:max-w-[250px] w-full'>
                            <h2 className='font-semibold md:text-sm 
                            text-xs text-primaryText'>
                                IMDB ID: {data?.movieId}
                            </h2>
                            <h2 className='flex items-center gap-1 font-semibold md:text-sm 
                            text-xs text-primaryText'>
                                Quality: <span className='text-main'>{data?.graphics}</span>
                            </h2>
                            <h2 className='flex items-start gap-1 font-semibold md:text-sm 
                            text-xs text-primaryText'>
                                Cast: <span className='text-main'>
                                    {data?.cast?.slice(0, 50)}
                                </span>
                            </h2>
                            <h2 className='flex items-center gap-1 font-semibold md:text-sm 
                            text-xs text-primaryText'>
                                Genre: <span className='text-main'>{data?.genre}</span>
                            </h2>
                            <h2 className='font-semibold md:text-sm 
                            text-xs text-primaryText'>
                                Release Date: {moment(data?.releaseData).format('DD MMMM, YYYY')}
                            </h2>
                            <div className='p-3 bg-primary rounded-lg max-h-[150px] 
                            overflow-y-auto text-sm text-primaryText'>
                                {data?.overview}
                            </div>
                            <ShareButton/>
                        </div>
                        {/* MOVIE PLAYER */}
                        <div className='flex-1 flex flex-col items-start gap-3'>
                            <iframe src={currentStream} frameborder="0"
                            className='w-full min-h-[400px] border-2 border-main rounded-lg'></iframe>
                            <div className='w-full flex flex-col items-end justify-end gap-1'>
                                <h1 className='text-sm text-secondaryText font-semibold'>
                                    Video Stream
                                </h1>
                                <div className='w-full flex items-end justify-end gap-2'>
                                    {
                                        data?.stream?.map((item, i)=>(
                                            <button key={i}
                                            onClick={()=>handleChangeStream(item?.videoLink)}
                                            className={`py-2 px-5 text-xs border-2 
                                            border-main rounded-3xl transition-all duration-300 
                                            ease-in-out hover:bg-main flex items-center gap-2 ${
                                                currentStream === item?.videoLink ? 'bg-main text-secondaryText' 
                                                : 'bg-primary text-primaryText'
                                            }`}>
                                                <MdOutlineStream size={16}/>
                                                {item?.title}
                                            </button>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className='w-full flex flex-col items-end gap-1'>
                                <h1 className='text-sm text-secondaryText font-semibold'>
                                    Download Links
                                </h1>
                                <div className='w-full flex items-end justify-end gap-4'>
                                    {
                                        data?.stream?.map((item, i)=>(
                                            <DownloadBtn key={i} title={item?.title} href={item?.downloadLink}/>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* COMMENT AND MORE MOVIES */}
            <div className='w-full mt-6 flex items-start md:flex-row flex-col gap-4'>
                {/* COMMENTS */}
                <div className='flex-1 md:w-fit w-full p-4 flex flex-col gap-4'>
                    <h1 className='md:text-lg text-sm font-bold text-secondaryText w-full 
                    pb-2 border-b border-primary'>
                        Comments
                    </h1>
                    <Comments data={comments} fetchComments={fetchComments} movieId={data?._id}/>
                </div>

                {/* ALSO LIKE */}
                <div className='w-full md:max-w-md p-4 flex flex-col gap-4'>
                    <h1 className='md:text-lg text-sm font-bold text-secondaryText w-full 
                    pb-2 border-b border-primary'>
                        You might also like
                    </h1>
                    <div className='w-full grid grid-cols-2 gap-3
                    border border-primary p-4 rounded-lg'>
                        {moreMovies?.slice(0, 6).map((item, i)=>(
                            <MovieCard data={item} key={i}/>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Player