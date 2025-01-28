'use client'

import React, { useEffect, useState } from 'react'
import MovieCard from '../movie/MovieCard'
import Pagination from '../pagination/Pagination'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { handleFetch } from '@/lib/data'



const Category = ({data, query}) => {
    const {user} = useSelector((state)=>state.user)
    const [newData, setNewData] = useState(data || [])
    const [isLoading, setIsLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [pageSize] = useState(30)
    const [totalPages, setTotalPages] = useState(0)

    const fetchMovies = async (page)=>{
        if(page){
            try {
                const res = await handleFetch(`/movies?query=${query}&page=${page}&limit=${pageSize}`,'GET', user?.token,'',setIsLoading)
                setNewData(res?.data?.movies)
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
        
        <div className='w-full relative grid grid-cols-2 md:grid-cols-6 
        sm:grid-cols-4 gap-6 animate-zoom-in'>
            {
                newData?.length > 0 && newData?.map((item, i)=>(
                    <MovieCard data={item} key={i}/>
                ))
            }
        </div>
        <Pagination totalPages={totalPages} 
        currentPage={currentPage} 
        onPageChange={handlePageChange}/>
    </div>
  )
}

export default Category