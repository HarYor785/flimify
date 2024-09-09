import Container from '@/components/container/Container'
import Heading from '@/components/heading/Heading'
import { dummyMovies } from '@/lib'
import Image from 'next/image'
import React from 'react'
import avatar from '@images/user.png'
import Tabs from '@/components/tabs/Tabs'
import Button from '@/components/ui/Button'
import ProfileBox from '@/components/profile/ProfileBox'
import WatchList from '@/components/watchList/WatchList'
import UsersPosts from '@/components/userPosts/UsersPosts'


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

const page = () => {
  return (
    <Container>
         <section className='py-10'>
            <div className='w-full flex flex-col gap-10'>
                <Heading page={'Profile'} />
                <div className='w-full flex flex-col gap-3'>
                    <div className='w-full flex items-start justify-between 
                    pb-3 border-b border-primary'>
                        <div className='w-full flex items-start gap-10 '>
                            <div className='min-w-max flex items-center gap-3'>
                                <Image src={avatar} width={40} height={40}
                                alt='User Avatar'
                                className='border border-primary rounded-md'/>
                                <div className='flex flex-col items-start'>
                                    <h3 className='md:text-sm text-xs text-secondaryText'>
                                        Glen Simmons
                                    </h3>
                                    <span className='text-xs text-primaryText italic'>
                                        48774834
                                    </span>
                                </div>
                            </div>
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