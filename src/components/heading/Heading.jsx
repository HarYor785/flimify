import Link from 'next/link';
import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";

const Heading = ({page}) => {
  return (
    <div className='w-full flex items-center justify-between pb-4 border-b border-primary'>
        <h1 className='md:text-4xl text-2xl text-secondaryText font-semibold'>
            Category
        </h1>
        <div className='flex items-center gap-3'>
            <Link href={'/'}
            className='text-xs text-primaryText capitalize transition-all 
            duration-300 ease-in-out hover:text-main'>
                Home
            </Link>
            <FaLongArrowAltRight size={15}/>
            <span className='text-xs text-secondaryText capitalize'>
                {page}
            </span>
        </div>
    </div>
  )
}

export default Heading