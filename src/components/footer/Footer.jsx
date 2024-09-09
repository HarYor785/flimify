'use client'

import Link from 'next/link'
import React from 'react'
import { HiArrowNarrowUp } from "react-icons/hi";
import { FaSquareFacebook, FaSquareXTwitter, FaSquareInstagram,FaYoutube } from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";


import Button from '../ui/Button';

const Footer = () => {
  const handleScrollToTop = ()=>{
    window.scrollTo({top:0,behavior:'smooth'})
  }

  return (
    <footer className='relative w-full py-3 md:px-8 px-6 border-t-2 border-primary
    flex flex-col items-center justify-center gap-2'>

      <div className='w-full md:container md:px-12 flex md:flex-row flex-col 
      md:items-center items-start md:justify-between md:gap-1 gap-4'>
        {/* LOGO */}
        <Link href={'/'} 
        className="text-3xl text-secondaryText font-bold uppercase">
          FLI<span className="text-main">MIFY</span>
        </Link>

        {/* CUSTOM LINKS */}
        <div className='flex md:flex-row flex-col md:items-center items-start 
        gap-6'>
          <Link href={'/about'} className='text-[11px] text-primaryText 
          transition-all duration-300 ease-in-out hover:text-main uppercase'>
            About Us
          </Link>
          <Link href={'/'} className='text-[11px] text-primaryText 
          transition-all duration-300 ease-in-out hover:text-main uppercase'>
            Advertise
          </Link>
          <Link href={'/contact'} className='text-[11px] text-primaryText 
          transition-all duration-300 ease-in-out hover:text-main uppercase'>
            Contact Us
          </Link>
          <Link href={'/dmca'} className='text-[11px] text-primaryText 
          transition-all duration-300 ease-in-out hover:text-main uppercase'>
            DMCA
          </Link>
          <Link href={'/privacy-policy'} className='text-[11px] text-primaryText 
          transition-all duration-300 ease-in-out hover:text-main uppercase'>
            Privacy Policy
          </Link>
          <Button icon={HiArrowNarrowUp} onClick={handleScrollToTop}/>
        </div>
      </div>
      {/* SOCIAL LINKS */}
      <div className='flex flex-col items-center gap-2'>
        <div className='flex items-center gap-3'>
          <Link href={'/'} 
          className='text-xl text-primaryText transition-all duration-300 
          ease-in-out hover:text-main uppercase'>
            <AiFillTikTok/>
          </Link>
          <Link href={'/'} 
          className='text-xl text-primaryText transition-all duration-300 
          ease-in-out hover:text-main uppercase'>
            <FaSquareFacebook/>
          </Link>
          <Link href={'/'} 
          className='text-xl text-primaryText transition-all duration-300 
          ease-in-out hover:text-main uppercase'>
            <FaSquareXTwitter/>
          </Link>
          <Link href={'/'} 
          className='text-xl text-primaryText transition-all duration-300 
          ease-in-out hover:text-main uppercase'>
            <FaSquareInstagram />
          </Link>
          <Link href={'/'} 
          className='text-xl text-primaryText transition-all duration-300 
          ease-in-out hover:text-main uppercase'>
            <FaYoutube  />
          </Link>
        </div>
        <span className='text-primaryText text-[10px]'>
          &copy; {new Date().getFullYear()} FLIMIFY. All rights reserved.
        </span>
      </div>
    </footer>
  )
}

export default Footer