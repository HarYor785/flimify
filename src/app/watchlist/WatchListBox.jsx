'use client'

import React, {useState, useEffect} from 'react'
import Pagination from '@/components/pagination/Pagination'
import { useDispatch, useSelector } from 'react-redux'
import { handleFetch } from '@/lib/data'
import { handleAddWatchlist } from '@/states/userSlice'
import MovieCard from "@/components/movie/MovieCard";
import { toast } from 'react-toastify'
import Loader from '@/components/loader/Loader'


const WatchListBox = () => {
    const {user, watchlist} = useSelector((state)=>state.user)
    const [newData, setNewData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const dispatch = useDispatch()
    const [currentPage, setCurrentPage] = useState(1)
    const [pageSize] = useState(30)
    const [totalPages, setTotalPages] = useState(0)

    useEffect(()=>{
        if(!user?.token){
            window.location.href = '/login'
        }
    },[user])

    const fetchMovies = async (page)=>{
        if(page){
            try {
                const res = await handleFetch(`/watchlist?page=${page}&limit=${pageSize}`,'GET', user?.token,'',setIsLoading)
                setNewData(res?.data?.watchlist)
                dispatch(handleAddWatchlist(res?.data?.watchlist))
                setTotalPages(res.data?.totalPages)
                setCurrentPage(res.data?.currentPage)
            } catch (error) {
                console.log(error)
                toast.error("Error fetching movies")
            }
        }
    }

    useEffect(()=>{
        fetchMovies(currentPage)
    },[currentPage])

    const handlePageChange = (pageNumber) => {
        if(pageNumber < 1 || pageNumber > totalPages) return
        setCurrentPage(pageNumber)
    }
  return (
    <div className='w-full flex flex-col gap-10'>
        {isLoading && <Loader/>}
        <div className='w-full relative grid grid-cols-2 md:grid-cols-6 
        sm:grid-cols-4 gap-6 animate-zoom-in'>
            {
                newData?.map((item, i)=>(
                    <MovieCard data={item?.movie} key={i}
                    fetchMovies={fetchMovies}
                    />
                ))
            }
        </div>
        <Pagination totalPages={totalPages} 
        currentPage={currentPage} 
        onPageChange={handlePageChange}/>
    </div>

  )
}

export default WatchListBox