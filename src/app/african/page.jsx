import Container from '@/components/container/Container';
import Heading from '@/components/heading/Heading';
import React from 'react';
import Category from '@/components/category/Category';
import { handleFetch } from '@/lib/data';

export const metadata = {
  title: 'African Movies - Discover and Watch Top African Films | Flimify',
  description:
    'Explore a diverse collection of African movies, from timeless classics to the latest releases. Find detailed information, watch trailers, and enjoy top African films on Flimify.',
  keywords:
    'African Movies, Top African Films, Watch African Movies, African Cinema, Latest African Films, Classic African Movies',
  authors: [{ name: 'Flimify Tv', url: `${process.env.NEXT_PUBLIC_CLIENT_URL}` }],
  creator: 'Flimify Tv',
  publisher: 'Flimify Tv',
  openGraph: {
    title: 'African Movies - Discover and Watch Top African Films | Flimify',
    description:
      'Explore a diverse collection of African movies, from timeless classics to the latest releases. Find detailed information, watch trailers, and enjoy top African films on Flimify.',
    url: `${process.env.NEXT_PUBLIC_CLIENT_URL}/african`,
    image: `${process.env.NEXT_PUBLIC_CLIENT_URL}/images/logo.png`,
    type: 'website',
    siteName: 'Flimify',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'African Movies - Discover and Watch Top African Films | Flimify',
    description:
      'Explore a diverse collection of African movies, from timeless classics to the latest releases. Find detailed information, watch trailers, and enjoy top African films on Flimify.',
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
    canonical: `${process.env.NEXT_PUBLIC_CLIENT_URL}/african`,
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
  const movieData = await fetchMovies('african')
  

  return (
      <>
        <Container>
          <section className='py-10'>
              <div className='w-full flex flex-col gap-10'>
                <Heading page={'African'} />
                <Category data={movieData} query={'african'}/>
              </div>
          </section>
        </Container>
    </>
  );
}
