import Container from '@/components/container/Container';
import Heading from '@/components/heading/Heading';
import React from 'react';
import Category from '@/components/category/Category';

export const metadata = {
    title: 'K-Drama - Discover and Watch the Best Korean Dramas | Flimify',
    description: 'Dive into the world of K-Dramas with our curated collection of the best Korean dramas. Find detailed information, watch episodes, and explore new and popular K-Dramas on Flimify.',
    keywords: 'K-Drama, Korean Dramas, Best K-Dramas, Watch K-Drama, K-Drama Reviews, Popular Korean Dramas',
    authors: [{ name: 'Flimify Tv', url: `${process.env.NEXT_PUBLIC_CLIENT_URL}` }],
    creator: 'Flimify Tv',
    publisher: 'Flimify Tv',
    openGraph: {
        title: 'K-Drama - Discover and Watch the Best Korean Dramas | Flimify',
        description: 'Dive into the world of K-Dramas with our curated collection of the best Korean dramas. Find detailed information, watch episodes, and explore new and popular K-Dramas on Flimify.',
        url: `${process.env.NEXT_PUBLIC_CLIENT_URL}/k-drama`,
        image: `${process.env.NEXT_PUBLIC_CLIENT_URL}/images/logo.png`, 
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'K-Drama - Discover and Watch the Best Korean Dramas | Flimify',
        description: 'Dive into the world of K-Dramas with our curated collection of the best Korean dramas. Find detailed information, watch episodes, and explore new and popular K-Dramas on Flimify.',
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
        canonical: `${process.env.NEXT_PUBLIC_CLIENT_URL}/k-drama`,
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
export default async function page() {
    const movieData = await fetchMovies('k-drama')

  return (
    <>
    
        <Container>
            <section className='py-10'>
                <div className='w-full flex flex-col gap-10'>
                    <Heading page={'K-Drama'} />
                    <Category data={movieData} query={'k-drama'}/>
                </div>
            </section>
        </Container>
    </>
  );
}
