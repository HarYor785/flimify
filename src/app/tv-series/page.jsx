import Container from '@/components/container/Container'
import Heading from '@/components/heading/Heading'
import React from 'react'
import Category from '@/components/category/Category'
import { handleFetch } from '@/lib/data'


export const metadata = {
    title: 'TV Series - Discover and Watch the Latest TV Shows | Flimify',
    description: 'Explore our collection of TV series, including the latest releases and classic favorites. Find detailed information, watch episodes, and stay updated with the newest TV shows on Flimify.',
    keywords: 'TV Series, Latest TV Shows, Watch TV Series, TV Series Reviews, New TV Shows, Popular TV Series',
    authors: [{ name: 'Flimify Tv', url: `${process.env.NEXT_PUBLIC_CLIENT_URL}` }],
    creator: 'Flimify Tv',
    publisher: 'Flimify Tv',
    openGraph: {
        title: 'TV Series - Discover and Watch the Latest TV Shows | Flimify',
        description: 'Explore our collection of TV series, including the latest releases and classic favorites. Find detailed information, watch episodes, and stay updated with the newest TV shows on Flimify.',
        url: `${process.env.NEXT_PUBLIC_CLIENT_URL}/tv-series`,
        image: `${process.env.NEXT_PUBLIC_CLIENT_URL}/images/logo.png`, 
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'TV Series - Discover and Watch the Latest TV Shows | Flimify',
        description: 'Explore our collection of TV series, including the latest releases and classic favorites. Find detailed information, watch episodes, and stay updated with the newest TV shows on Flimify.',
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
        canonical: `${process.env.NEXT_PUBLIC_CLIENT_URL}/tv-series`,
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


export async function fetchMovies(query, page = 1, limit = 30){
    function setIsLoading(){}
    const res = await handleFetch(`/movies?query=${query}&page=${page}&limit=${limit}`,'GET','','',setIsLoading)
    return res?.data
}


export const revalidate = 0

export default async function page(){
    const movieData = await fetchMovies('tv-Series')

  return (
    <>
        <Container>
            <section className='py-10'>
                <div className='w-full flex flex-col gap-10'>
                    <Heading page={'Tv-Series'}/>
                    <Category data={movieData} query={'tv-Series'}/>
                </div>
            </section>
        </Container>
    </>
  )
}
