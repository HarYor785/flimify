import Container from '@/components/container/Container'
import Heading from '@/components/heading/Heading'
import { dummyMovies } from '@/lib'
import Image from 'next/image'
import React from 'react'
import Tabs from '@/components/tabs/Tabs'
import Button from '@/components/ui/Button'
import ProfileBox from '@/components/profile/ProfileBox'
import WatchList from '@/components/watchList/WatchList'
import UsersPosts from '@/components/userPosts/UsersPosts'
import ProfileCard from '@/components/profile/ProfileCard'



const page = () => {
    const tabs = [
        {
            title: 'Profile',
            content: <ProfileBox/>
        },
        {
            title: 'Watchlist',
            content: <WatchList/>
        },
        {
            title: 'Posts',
            content: <UsersPosts/>
        },
    ]
  return (
    <Container>
         <section className='py-10'>
            <div className='w-full flex flex-col gap-10'>
                <Heading page={'Profile'} />
                <div className='w-full flex flex-col gap-3'>
                    <div className='w-full flex items-start justify-between 
                    pb-3 border-b border-primary'>
                        <div className='w-full flex items-start gap-10 '>
                            <ProfileCard/>
                        </div>
                        <Button title={'Logout'}/>
                    </div>
                    <Tabs tabs={tabs} defaultTab={'Profile'}/>
                </div>
            </div>
        </section>
    </Container>
  )
}

export default page