import Container from '@/components/container/Container';
import Heading from '@/components/heading/Heading';
import React from 'react';
import Category from '@/components/category/Category';
import { handleFetch } from '@/lib/data';

export const metadata = {
  title: 'Animation Movies - Discover and Watch the Best Animated Films | Flimify',
  description:
    'Explore our curated selection of the best animated movies. From classic animations to the latest releases, find everything you need to enjoy the world of animation. Discover new films, read reviews, and watch trailers on Flimify.',
  keywords:
    'Animation Movies, Animated Films, Best Animated Movies, Watch Animation, Animated Films Reviews, Latest Animated Releases',
    authors: [{ name: 'Flimify Tv', url: `${process.env.NEXT_PUBLIC_CLIENT_URL}` }],
    creator: 'Flimify Tv',
    publisher: 'Flimify Tv',
    openGraph: {
    title: 'Animation Movies - Discover and Watch the Best Animated Films | Flimify',
    description:
      'Explore our curated selection of the best animated movies. From classic animations to the latest releases, find everything you need to enjoy the world of animation. Discover new films, read reviews, and watch trailers on Flimify.',
    url: `${process.env.NEXT_PUBLIC_CLIENT_URL}/animations`,
    image: `${process.env.NEXT_PUBLIC_CLIENT_URL}/images/logo.png`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Animation Movies - Discover and Watch the Best Animated Films | Flimify',
    description:
      'Explore our curated selection of the best animated movies. From classic animations to the latest releases, find everything you need to enjoy the world of animation. Discover new films, read reviews, and watch trailers on Flimify.',
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
    canonical: `${process.env.NEXT_PUBLIC_CLIENT_URL}/animations`,
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
  const movieData = await fetchMovies('animation')

  return (
    <>
      
      <Container>
        <section className='py-10'>
          <div className='w-full flex flex-col gap-10'>
            <Heading page={'Animation'} />
            <Category data={movieData} />
          </div>
        </section>
      </Container>
    </>
  );
}
