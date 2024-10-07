'use client'

import React, {useState, useEffect} from 'react'
import Pagination from '@/components/pagination/Pagination'
import { useDispatch, useSelector } from 'react-redux'
import { handleFetch } from '@/lib/data'
import { handleAddWatchlist } from '@/states/userSlice'
import MovieCard from "@/components/movie/MovieCard";


const WatchList = () => {
    const {user, watchlist} = useSelector((state)=>state.user)
    const [newData, setNewData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const dispatch = useDispatch()


    const fetchMovies = async ()=>{
        const res = await handleFetch(`/watchlist`,'GET',user?.token,'',setIsLoading)
        setNewData(res?.data)
        dispatch(handleAddWatchlist(res?.data))
    }

    useEffect(()=>{
        fetchMovies()
    },[])


  return (
    <div className='w-full flex flex-col gap-10'>
        
        <div className='w-full relative grid grid-cols-2 md:grid-cols-6 
        sm:grid-cols-4 gap-6 animate-zoom-in'>
            {
                newData?.map((item, i)=>(
                    <MovieCard data={item?.movie} key={i}
                    fetchMovies={fetchMovies}/>
                ))
            }
        </div>
        <Pagination data={watchlist} setData={setNewData} itemsPerPage={12}/>
    </div>
  )
}

export default WatchList