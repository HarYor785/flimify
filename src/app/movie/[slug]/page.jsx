import Container from '@/components/container/Container'
import Player from '@/components/player/Player'
import { fetchWatchMovies, handleFetch } from '@/lib/data'
import React from 'react'


export async function fetchMovies(query, page = 1, limit = 20){
  function setIsLoading(){}
  const res = await handleFetch(`/movies?query=${query}&page=${page}&limit=${limit}`,'GET','','',setIsLoading)
  return res?.data
}


export async function generateMetadata({ params }){
  const { slug } = params;
  
  const movie = await fetchWatchMovies(slug); 
  
  return {
    title: {
      default: `${movie?.title} - Flimify`,
      template: '%s | Flimify',
    },
    description: `${movie?.overview}`,
    keywords: `${movie?.genre}, Watch ${movie?.title}, ${movie?.casts}, Movies, Hollywood, Bollywood, K-Drama, African Movies`,
    authors: [{ name: 'Flimify Tv', url: `${process.env.NEXT_PUBLIC_CLIENT_URL}` }],
    creator: 'Flimify Tv',
    publisher: 'Flimify Tv',
    openGraph: {
      title: `${movie?.title} - Flimify`,
      description: `Stream ${movie?.title} in ${movie?.genre} on Flimify. Enjoy high-quality streaming from various genres, including Hollywood, Bollywood, and more.`,
      url: `${process.env.NEXT_PUBLIC_CLIENT_URL}/movie/${slug}`,
      image: `${movie?.posterImage}`, 
      type: 'video.movie',
      siteName: 'Flimify',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${movie?.title} - Flimify`,
      description: `Watch ${movie?.title} online on Flimify, your ultimate movie destination.`,
      image: `${movie?.posterImage}`, 
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
};

export const revalidate = 0
export default async function page({params: {slug}, searchParams: {d}}){
  const data = await fetchWatchMovies(d)

  let filterMovie;
  if(data?.category){
    const moreMovies = await fetchMovies(data?.category === "Tv-Series" ? "tv-Series" : data?.category?.toLowerCase())
    filterMovie = moreMovies?.movies?.filter((item)=>item?._id !== data?._id)
  }
  return (
    <Container>
      <Player data={data} moreMovies={filterMovie || []} 
      slug={slug}/>
    </Container>
  )
}

