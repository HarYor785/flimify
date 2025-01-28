'use client'

import React, { useEffect, useState } from 'react'
import PageBg from '../pageBg/PageBg'
import Image from 'next/image'
import { MdOutlineBookmarkBorder } from 'react-icons/md'
import ShareButton from '../ui/ShareButton'
import DownloadBtn from '../ui/DownloadBtn'
import Comments from '../comments/Comments'
import MovieCard from '../movie/MovieCard'
import moment from 'moment'
import { handleFetch } from '@/lib/data'
import { useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { FaPlay } from "react-icons/fa6";



const Player = ({data, moreMovies, slug}) => {
    const [currentStream, setCurrentStream] = useState(data?.stream[0]?.videoLink || data?.trailer)
    const [isLoading, setIsLoading] = useState(false)
    const [comments, setComments] = useState([])
    const router = useRouter()
    const param = useSearchParams()
    const episode = param.get('episode')
    const movieId = param.get('d')
    const season = param.get('s')


    const handleEpisodeChange = (episode) => {
        router.push(`/movie/${slug}?d=${movieId}&s=${season}&episode=${episode}`)
    };

    const fetchComments = async ()=>{
        const res = await handleFetch(`/movies/comment?id=${data?._id}`,'GET','','',setIsLoading)
        setComments(res?.data)
    }

    useEffect(()=>{
        if(data?._id){
            fetchComments()
        }
    },[data])

    useEffect(()=>{
        if(episode){
            const episodeStream = data?.episodes?.find((item)=>
                Number(item?.episodeNo) === Number(episode) && Number(item?.season) === Number(season)
            )
            setCurrentStream(episodeStream?.streams[0]?.videoLink)
        }else{
            setCurrentStream(data?.trailer)
        }
    },[episode, season])

    useEffect(()=>{
        if(!slug || slug === '' || slug === 'undefined' || slug === null || !movieId){
            router.push('/')
        }
    },[data])


  return (
    <div className='w-full py-2'>
        <PageBg image={data?.imageLink}/>
        <div className='w-full flex flex-col gap-4'>
            {/* MOVIE PLAYER */}
            <div className='w-full relative flex flex-col gap-4 border 
            border-primary p-2'>
                <div className='w-full flex flex-col gap-4'>
                    <h1 className='text-3xl font-bold text-secondaryText'>
                        {data?.title}
                    </h1>
                    <div className='player_container w-full flex md:flex-row flex-col items-start gap-5'>
                        <div className='md:max-w-[750px] w-full relative'>
                            <iframe
                                src={currentStream}
                                loading="lazy"
                                allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;" 
                                allowfullscreen="true"
                                className='w-full md:h-[400px] h-[300px] border-2 border-main rounded-lg'>
                            </iframe>
                        </div>
                        {/* DISCLAIMER */}{console.log(data?.episodes)}
                        <div className='relative md:max-w-[350px] w-full md:p-4 p-2 
                        bg-secondary rounded-lg h-full flex flex-col gap-4'>
                            <h3 className='p-2 bg-primary text-white
                            text-left text-sm font-bold uppercase rounded-md'>
                                Disclaimer
                            </h3>
                            <p className='text-[13px] text-primaryText'>
                                All content provided on this website is intended for 
                                informational and entertainment purposes only. We do 
                                not host or store any video files on our servers. 
                                Any external links or embedded content are the 
                                responsibility of their respective owners.
                            </p>
                            <p className='text-[13px] text-primaryText'>
                                If you believe that copyrighted material has been 
                                uploaded or a link to copyrighted material has been 
                                shared without authorization, please contact us at 
                                support@flimify.com with the relevant details, 
                                and we will take appropriate action promptly.
                            </p>
                            <h3 className='p-2 bg-primary text-white
                            text-left text-sm font-bold uppercase rounded-md'>
                                Advertisement
                            </h3>
                            <Link href={'mailto:advert@flimify.com'} 
                            className='text-[13px] text-main -mt-2'>
                                advert@flimify.com
                            </Link>
                        </div>
                    </div>
                    {/* MOVIE DETAILS */}
                    <div className='w-full p-4 bg-secondary rounded-xl flex 
                    md:flex-row flex-col items-start gap-4'>
                        {/* IMAGE */}
                        <MovieCard data={data} isPlaying={true}/>
                        {/* DETAILS */}
                        <div className='w-full flex md:flex-row flex-col items-start md:gap-6 gap-3'>
                            <div className='w-full flex flex-col gap-4'>
                                {/* QUANLITY */}
                                <div className='flex items-center gap-4 flex-wrap w-full'>
                                    <h2 className='font-semibold md:text-sm 
                                    text-xs text-primaryText'>
                                        IMDB ID: {data?.movieId}
                                    </h2>
                                    <h2 className='flex items-center gap-1 font-semibold md:text-sm 
                                    text-xs text-primaryText'>
                                        Quality: <span className='text-main'>{data?.graphics}</span>
                                    </h2>
                                </div>
                                {/* SEASON */}
                                {
                                    data?.relatedSeasons && 
                                    <div className='flex items-center gap-2'>
                                        <h2 className='font-semibold md:text-sm 
                                        text-xs text-primaryText'>
                                            SEASON: 
                                        </h2>
                                        {
                                            data?.relatedSeasons?.map((item, index)=>(
                                                <button
                                                onClick={()=>router.push(`/movie/${slug}?d=${item}&s=${index + 1}`)}
                                                disabled={index + 1 === Number(data?.season)}
                                                className={`text-sm p-2 rounded-lg 
                                                text-center w-[40px] transition-all 
                                                duration-300 ease-in-out hover:opacity-35
                                                ${index + 1 === Number(season) 
                                                ? "bg-primary cursor-not-allowed" : "bg-main"}`}>
                                                    {index + 1}
                                                </button>
                                            ))
                                        }
                                    </div>
                                }
                                <h2 className='font-semibold md:text-sm 
                                text-xs text-primaryText'>
                                    Release Date: {moment(data?.releaseDate).format('DD-MM-YYYY')}
                                </h2>
                                {/* GENRE */}
                                <h2 className='flex items-center gap-1 font-semibold md:text-sm 
                                text-xs text-primaryText'>
                                    Genre: <span className='text-main'>{data?.genre}</span>
                                </h2>
                                {/* OVERVIEW */}
                                <div className='p-2 border border-primary rounded-xl max-h-[100px] 
                                overflow-y-auto text-sm text-primaryText'>
                                    {data?.overview}
                                </div>
                                {/* DOWNLOAD & SHARE BUTTON*/}
                                <div className='w-full flex items-center gap-4 flex-wrap mt-4'>
                                    <ShareButton/>
                                    <DownloadBtn href={data?.stream[0]?.downloadLink}/>
                                </div>
                            </div>
                            {/* EPISODES */}
                            {
                                data?.episodes?.length > 0 &&
                                <div className='md:max-w-md w-full flex flex-col p-4 border-2 
                                border-primary rounded-lg gap-3'>
                                    <h1 className='text-sm text-primaryText font-bold'>
                                        Episodes({data?.episodes?.length})
                                    </h1>
                                    <div className='w-full max-h-[300px] overflow-y-auto flex 
                                    flex-col gap-3'>
                                        {
                                            data?.episodes?.map((item, index) => (
                                                <div key={index}
                                                className='w-full flex flex-col items-center gap-2'>
                                                    <div className='w-full flex items-center gap-3'>
                                                        <div 
                                                        onClick={()=>handleEpisodeChange(index + 1)}
                                                        disabled={index + 1 === Number(episode)}
                                                        className={`w-fit relative  
                                                        ${index + 1 === Number(episode) 
                                                        ? 'cursor-not-allowed' 
                                                        : 'cursor-pointer'}`}>
                                                            <Image
                                                            src={item?.stillPath}
                                                            alt={item?.title}
                                                            width={100}
                                                            height={100}
                                                            className=''
                                                            />
                                                            <span 
                                                                className={`absolute inset-0 flex items-center justify-center
                                                                ${index + 1 === Number(episode) ? 'playing-animation' : ''}`}
                                                            >
                                                                {
                                                                    index + 1 === Number(episode) ? (
                                                                        <div className='h-4 w-4 border-2 border-t-transparent 
                                                                        border-secondaryText rounded-full animate-spin' />
                                                                    ) : (
                                                                        <FaPlay size={20}/>
                                                                    )
                                                                }
                                                            </span>
                                                        </div>
                                                        <div className='flex flex-col items-start gap-0'>
                                                            <span className='text-xs text-primaryText'>
                                                                Episode: {index + 1}
                                                            </span>
                                                            <span className='text-xs text-primaryText'>
                                                                {item?.runtime}m
                                                            </span>
                                                            <h2 className='text-xs text-secondaryText'>
                                                                {item?.title}
                                                            </h2>
                                                            {/* <h2 className='text-xs text-primaryText'>
                                                                {moment(item?.releaseDate).format('DD-MM-YYYY')}
                                                            </h2> */}
                                                        </div>
                                                    </div>
                                                    <p className='text-xs text-primaryText max-h-[35px] 
                                                    overflow-y-auto'>
                                                        {item?.overview}
                                                    </p>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                    {/* CASTS */}
                    <div className='w-full flex flex-col items-start gap-1'>
                        <h2 className='font-semibold md:text-sm 
                        text-xs text-primaryText'>
                            Casts: ({data?.cast?.length})
                        </h2>
                        <div className='w-full flex items-start gap-2 overflow-x-auto snap-start'>
                            {
                                Array.isArray(data?.cast) 
                                && data?.cast?.length > 0 
                                && data?.cast.map((item, index) => (
                                    <div key={index}
                                    className='w-[100px] flex flex-col items-center gap-1'>
                                        <Image
                                        src={`https://image.tmdb.org/t/p/w200${item?.picture}`}
                                        width={50}
                                        height={50}
                                        alt={item?.name}
                                        className='w-[70px] h-[70px] rounded-full object-cover'
                                        />
                                        <h2 className='text-[11px] text-primaryText text-center'>
                                            {item?.name}
                                        </h2>
                                        <span className='text-[10px] text-primaryText text-center'>
                                            {item?.character}
                                        </span>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>

            {/* COMMENT AND MORE MOVIES */}
            <div className='w-full mt-6 flex items-start md:flex-row 
            flex-col-reverse gap-4'>
                {/* COMMENTS */}
                <div className='w-full p-4 flex flex-col gap-4'>
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