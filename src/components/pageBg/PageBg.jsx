import Image from 'next/image'
import React from 'react'

const PageBg = ({image}) => {
  return (
    <div className="w-full h-full absolute top-0 left-0 mb-7 z-[-1]">
        <Image src={image} alt="Your Image" 
        width={500} height={500}
        className="w-full h-auto object-cover"/>
        <div className="absolute inset-0 bg-gradient-to-t from-secondary to-secondary/90"></div>
    </div>
  )
}

export default PageBg