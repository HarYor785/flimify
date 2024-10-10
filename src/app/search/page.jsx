import Container from '@/components/container/Container'
import Heading from '@/components/heading/Heading'
import { handleFetch } from '@/lib/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export async function fetchMovies(query){
    function setIsLoading(){}
    const res = await handleFetch(`/movies?query=${query}`,'POST','','',setIsLoading)
    return res?.data
}

  export async function generateMetadata({ params, searchParams }) {
    const query = searchParams.search_query;
    const pageUrl = `${process.env.NEXT_PUBLIC_CLIENT_URL}/search?q=${query}`;

    return {
        title: `${query ? `${query} - Search Results` : 'Search'} | Flimify`,
        description: `Find movies and TV shows related to "${query}" on Flimify. Search through our diverse collection including Hollywood, Bollywood, K-Drama, and more.`,
        keywords: `Search, ${query}, Movies, Hollywood, Bollywood, K-Drama, Movie Search, Search Results`,
        authors: [{ name: 'Flimify Tv', url: `${process.env.NEXT_PUBLIC_CLIENT_URL}` }],
        creator: 'Flimify Tv',
        publisher: 'Flimify Tv',
        openGraph: {
            title: `${query ? `${query} - Search Results` : 'Search'} | Flimify`,
            description: `Discover movies and TV shows related to "${query}" on Flimify. Explore a vast library including Hollywood, Bollywood, K-Drama, and more.`,
            url: pageUrl,
            image: `${process.env.NEXT_PUBLIC_CLIENT_URL}/images/logo.png`,
            type: 'website',
            siteName: 'Flimify',
        },
        twitter: {
            card: 'summary_large_image',
            title: `${query ? `${query} - Search Results` : 'Search'} | Flimify`,
            description: `Explore movies and TV shows matching "${query}" on Flimify. Discover new favorites from Hollywood, Bollywood, and beyond.`,
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
            canonical: pageUrl,
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
            target: `${process.env.NEXT_PUBLIC_CLIENT_URL}/search?q={search_term_string}`,
            'query-input': 'required name=search_term_string',
        },
    };
}

export const revalidate = 0

export default async function page({ params, searchParams }){
    const data = await fetchMovies(searchParams.search_query?.toLowerCase())
    return (
        <Container>
            <section className='py-10'>
                <div className='w-full flex flex-col gap-10'>
                    <Heading page={'Search'} />
                    {
                        data?.length > 0 ? (
                            <div className={`w-full grid grid-cols-1 ${data?.length > 1 
                                ? 'md:grid-cols-2' : 'md:grid-cols-1'} gap-4`}>
                                {data?.map((item, i)=>(
                                    <div key={i}
                                    className='w-full flex items-start md:gap-4 gap-2'>
                                        <Link href={`/movie/${item?.slug}`}
                                        className=''>
                                            <Image 
                                            src={item?.imageLink}
                                            alt={item?.title}
                                            width={200}
                                            height={200}
                                            className='object-cover'/>
                                        </Link>
                                        <div className='w-full flex flex-col gap-3'>
                                            <div className='w-full flex flex-col items-start gap-2'>
                                                <Link href={`/movie/${item?.slug}`}
                                                className='md:text-2xl text-lg font-semibold 
                                                text-secondaryText underline'>
                                                    {item?.title}
                                                </Link>
                                                <span className='md:text-sm text-xs text-primaryText italic'>
                                                    {item?.genre}
                                                </span>
                                                <p className='md:text-sm text-xs text-primaryText'>
                                                    {item?.overview}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ):(
                            <div className='w-full flex items-center justify-center'>
                                <p className='text-lg font-bold text-center text-primaryText'>
                                    No result for {searchParams.q}
                                </p>
                            </div>
                        )
                    }
                </div>
            </section>
        </Container>
    )
}
