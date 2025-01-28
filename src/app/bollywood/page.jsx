import Container from '@/components/container/Container';
import Heading from '@/components/heading/Heading';
import React from 'react';
import Category from '@/components/category/Category';
import { handleFetch } from '@/lib/data';

export const metadata = {
    title: 'Bollywood Movies - Discover and Watch Popular Indian Films | Flimify',
    description:
      'Explore our collection of Bollywood movies, featuring popular Indian films, new releases, and classic hits. Find detailed information, watch trailers, and enjoy the best of Indian cinema on Flimify.',
    keywords:
      'Bollywood Movies, Indian Films, Popular Bollywood Movies, Watch Bollywood Movies, Bollywood Cinema, Latest Bollywood Releases',
    authors: [{ name: 'Flimify Tv', url: `${process.env.NEXT_PUBLIC_CLIENT_URL}` }],
    creator: 'Flimify Tv',
    publisher: 'Flimify Tv',
    openGraph: {
      title: 'Bollywood Movies - Discover and Watch Popular Indian Films | Flimify',
      description:
        'Explore our collection of Bollywood movies, featuring popular Indian films, new releases, and classic hits. Find detailed information, watch trailers, and enjoy the best of Indian cinema on Flimify.',
      url: `${process.env.NEXT_PUBLIC_CLIENT_URL}/bollywood`,
      image: `${process.env.NEXT_PUBLIC_CLIENT_URL}/images/logo.png`,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Bollywood Movies - Discover and Watch Popular Indian Films | Flimify',
      description:
        'Explore our collection of Bollywood movies, featuring popular Indian films, new releases, and classic hits. Find detailed information, watch trailers, and enjoy the best of Indian cinema on Flimify.',
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
      canonical: `${process.env.NEXT_PUBLIC_CLIENT_URL}/bollywood`,
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
    const movieData = await fetchMovies('bollywood')

  return (
    <>
    
        <Container>
            <section className='py-10'>
                <div className='w-full flex flex-col gap-10'>
                    <Heading page={'Bollywood'} />
                    <Category data={movieData} query={'bollywood'}/>
                </div>
            </section>
        </Container>
    </>
  );
}
