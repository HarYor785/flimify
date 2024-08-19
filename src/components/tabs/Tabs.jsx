'use client'

import React, { useEffect, useState } from 'react'
import Button from '../ui/Button'
import { useRouter } from 'next/navigation'

const Tabs = ({tabs, defaultTab, type}) => {
    const [tab, setTab] = useState(defaultTab)
    const {push} = useRouter()

    useEffect(()=>{
        setTab(defaultTab)
    },[defaultTab])

    const handleNavigate = () => {
        if(tab === 'Movies'){
            push(`/category/international`)
        }else{
            push(`/category/${tab.toLowerCase()}`)
        }
    }

  return (
    <div className='w-full relative flex flex-col'>
        <div className='w-full py-2 flex items-center flex-wrap md:gap-6 gap-3 border-b border-primary'>
            {
                tabs.map((item, i)=>(
                    <button key={i} 
                    onClick={()=>setTab(item.title)}
                    className={`md:text-xs text-[10px] uppercase relative transition-all 
                        duration-300 ease-in-out hover:text-main before:content-[""] 
                        before:w-full before:h-[2px] before:absolute before:bottom-[-0.5rem] before:left-0
                        before:bg-main before:rounded-md ${tab === item.title ? 'text-main before:visible' 
                        : 'text-secondaryText before:hidden'}`}>
                        {item.title}
                    </button>
                ))
            }
        </div>
        {/* TAB CONTENTS */}
        <div className='w-full flex flex-col gap-8 py-4 transition-all duration-300 
        ease-in-out animate-fade-in'>
            {tabs.find(item=>item.title === tab).content}
            {
                type === 'movie' && 
                <Button title={'View all'} className={'px-12 mx-auto'} onClick={handleNavigate}/>
            }
        </div>
    </div>
  )
}

export default Tabs