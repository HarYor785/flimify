import React from 'react'
import Container from '@/components/container/Container'
import Heading from '@/components/heading/Heading'
import WatchListBox from './WatchListBox'

export const metadata = {
  title: {
    default: 'Your Watchlist - Flimify | Save and Enjoy Your Favorite Movies',
    template: '%s | Flimify',
  },
  description:
    'Keep track of your favorite movies and TV shows with Flimify’s Watchlist feature. Save titles for later viewing and never miss a great movie again!',
  keywords:
    'Watchlist, Favorite Movies, Save Movies, Watch Later, Movie Watchlist, TV Show Watchlist, Flimify Watchlist, Movie Collection, Stream Movies, Favorite Shows',
  authors: [{ name: 'Flimify Tv', url: `${process.env.NEXT_PUBLIC_CLIENT_URL}` }],
  creator: 'Flimify Tv',
  publisher: 'Flimify Tv',
  openGraph: {
    title: 'Your Watchlist - Flimify | Save and Enjoy Your Favorite Movies',
    description:
      'Create and manage your personal Watchlist on Flimify. Save your favorite movies and TV shows for later, and enjoy them at your convenience.',
    url: `${process.env.NEXT_PUBLIC_CLIENT_URL}/watchlist`,
    image: `${process.env.NEXT_PUBLIC_CLIENT_URL}/images/logo.png`, 
    type: 'website',
    siteName: 'Flimify',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Your Watchlist - Flimify | Save and Enjoy Your Favorite Movies',
    description:
      'Manage your Watchlist on Flimify to keep track of the movies and TV shows you want to watch later. Enjoy seamless movie watching anytime.',
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
  return (
    <Container>
        <section className='py-10'>
            <div className='w-full flex flex-col gap-10'>
                <Heading page={'Watchlist'} />
                <WatchListBox/>
            </div>
        </section>
    </Container>
  )
}

export default page