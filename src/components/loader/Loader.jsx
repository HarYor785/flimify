import React from 'react'

const Loader = () => {
  return (
    <div className='w-full relative'>
        <div className='w-full h-1 transition-all duration-300 
        ease-in-out animate-pulse bg-main'></div>
    </div>
  )
}

export default Loader