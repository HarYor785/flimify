import Container from '@/components/container/Container'
import Heading from '@/components/heading/Heading'
import React from 'react'
import Tabs from '@/components/tabs/Tabs'
import Button from '@/components/ui/Button'
import ProfileBox from '@/components/profile/ProfileBox'
import WatchList from '@/components/watchList/WatchList'
import UsersPosts from '@/components/userPosts/UsersPosts'
import ProfileCard from '@/components/profile/ProfileCard'

export const metadata = {
    title: 'User Profile - Manage Your Preferences and Watchlist | Flimify',
    description: 'View and manage your profile on Flimify. Update your preferences, explore your watchlist, and discover new movies and shows tailored to your taste.',
    keywords: 'User Profile, Manage Profile, Watchlist, Flimify User, Profile Settings',
    authors: [{ name: 'Flimify Tv', url: `${process.env.NEXT_PUBLIC_CLIENT_URL}` }],
    creator: 'Flimify Tv',
    publisher: 'Flimify Tv',
    openGraph: {
        title: 'User Profile - Manage Your Preferences and Watchlist | Flimify',
        description: 'View and manage your profile on Flimify. Update your preferences, explore your watchlist, and discover new movies and shows tailored to your taste.',
        url: `${process.env.NEXT_PUBLIC_CLIENT_URL}/profile`,
        image: `${process.env.NEXT_PUBLIC_CLIENT_URL}/images/logo.png`, 
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'User Profile - Manage Your Preferences and Watchlist | Flimify',
        description: 'View and manage your profile on Flimify. Update your preferences, explore your watchlist, and discover new movies and shows tailored to your taste.',
        image: `${process.env.NEXT_PUBLIC_CLIENT_URL}/images/logo.png`, 
    },
    robots: {
        index: true,
        follow: true,
        nocache: false,
        googleBot: {
            index: true,
            follow: true,
            noimageindex: false,
            'max-snippet': -1,
            'max-image-preview': 'large',
            'max-video-preview': -1,
        },
    },
    alternates: {
        canonical: `${process.env.NEXT_PUBLIC_CLIENT_URL}/profile`,
    },
    additionalMetaTags: [
        {
            name: 'author',
            content: 'Flimify',
        },
        {
            name: 'viewport',
            content: 'width=device-width, initial-scale=1',
        },
        {
            name: 'theme-color',
            content: '#1a191f',
        },
    ],
    icons: {
        icon: '/favicon.ico',
        appleTouchIcon: '/favicon.ico',
    },
    potentialAction: {
        '@type': 'SearchAction',
        target: `${process.env.NEXT_PUBLIC_CLIENT_URL}/search?search_query={search_term_string}`,
        'query-input': 'required name=search_term_string',
    },
    // manifest: '/site.webmanifest',
};


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
                <Heading page={'Profile'} profile={true}/>
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