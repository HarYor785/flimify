import Container from '@/components/container/Container';
import Heading from '@/components/heading/Heading';
import React from 'react';
import Category from '@/components/category/Category';
import { handleFetch } from '@/lib/data';


export const metadata = {
    title: 'International Movies - Discover and Watch Top Hollywood Films | Flimify',
    description:
      'Dive into our extensive collection of top Hollywood movies, featuring blockbusters and critically acclaimed films. Discover detailed information, watch trailers, and immerse yourself in the best of international cinema on Flimify.',
    keywords:
      'Hollywood Movies, Top Hollywood Films, Watch Hollywood Movies, International Cinema, Latest Hollywood Films, Blockbuster Movies, Film Recommendations, Movie Trailers',
    authors: [{ name: 'Flimify Tv', url: `${process.env.NEXT_PUBLIC_CLIENT_URL}` }],
    creator: 'Flimify Tv',
    publisher: 'Flimify Tv',
    openGraph: {
      title: 'International Movies - Discover and Watch Top Hollywood Films | Flimify',
      description:
        'Explore our extensive collection of top Hollywood movies, including blockbusters and critically acclaimed films. Find detailed information, watch trailers, and enjoy the best international cinema on Flimify.',
      url: `${process.env.NEXT_PUBLIC_CLIENT_URL}/international`,
      image: `${process.env.NEXT_PUBLIC_CLIENT_URL}/images/logo.png`,
      type: 'website',
      siteName: 'Flimify',
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'International Movies - Discover and Watch Top Hollywood Films | Flimify',
      description:
        'Explore our extensive collection of top Hollywood movies, including blockbusters and critically acclaimed films. Discover detailed information, watch trailers, and enjoy the best of international cinema on Flimify.',
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
      canonical: `${process.env.NEXT_PUBLIC_CLIENT_URL}/international`,
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
  
  

export async function fetchMovies(query){
    function setIsLoading(){}
    const res = await handleFetch(`/movies?query=${query}`,'GET','','',setIsLoading)
    return res?.data
}

export const revalidate = 0
export default async function page() {
    const movieData = await fetchMovies('hollywood')

  return (
    <>
        
        <Container>
            <section className='py-10'>
                <div className='w-full flex flex-col gap-10'>
                    <Heading page={'International'} />
                    <Category data={movieData} />
                </div>
            </section>
        </Container>
    </>
  );
}
