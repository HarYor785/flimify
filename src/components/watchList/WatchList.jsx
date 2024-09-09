'use client'

import React, { useState } from 'react'
import MovieCard from '../movie/MovieCard'
import Pagination from '../pagination/Pagination'
import { dummyMovies } from '@/lib'



const WatchList = () => {
    const [newData, setNewData] = useState([])


  return (
    <div className='w-full flex flex-col gap-10'>
        
        <div className='w-full relative grid grid-cols-2 md:grid-cols-6 
        sm:grid-cols-4 gap-6 animate-zoom-in'>
            {
                newData?.map((item, i)=>(
                    <MovieCard data={item} key={i}/>
                ))
            }
        </div>
        <Pagination data={dummyMovies} setData={setNewData} itemsPerPage={12}/>
    </div>
  )
}

export default WatchList