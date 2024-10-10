import Container from '@/components/container/Container'
import Posts from '@/components/posts/Posts';
import { moviePosts } from '@/lib';
import { handleFetch } from '@/lib/data';
import React from 'react'
''

export const metadata = {
    title: 'Flimify Movie Community - Latest News and Discussions',
    description:
      'Join our vibrant movie community to read the latest news, share posts, and engage in lively discussions about trending films. Connect with fellow movie enthusiasts, post your thoughts, and like content related to your favorite movies.',
    keywords:
      'Movie Community, Movie News, Film Discussions, User Posts, Movie Trends, Cinema News, Movie Enthusiasts',
    authors: [{ name: 'Flimify Tv', url: `${process.env.NEXT_PUBLIC_CLIENT_URL}` }],
    creator: 'Flimify Tv',
    publisher: 'Flimify Tv',
    openGraph: {
      title: 'Flimify Movie Community - Latest News and Discussions',
      description:
        'Engage with our movie community! Read news, share your insights, and participate in discussions about the latest films and trends. Connect, comment, and like posts related to movies.',
      url: `${process.env.NEXT_PUBLIC_CLIENT_URL}/community`,
      image: `${process.env.NEXT_PUBLIC_CLIENT_URL}/images/logo.png`,
      type: 'website',
      siteName: 'Flimify',
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Flimify Movie Community - Latest News and Discussions',
      description:
        'Join our movie community to read the latest news, share posts, and engage in discussions about trending films. Connect with fellow enthusiasts and contribute to the conversation!',
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
        canonical: `${process.env.NEXT_PUBLIC_CLIENT_URL}/community`,
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

export async function fetchPosts(){
    function setIsLoading(){}
    const res = await handleFetch(`/post`,'GET','','',setIsLoading)
    return res?.data
}

export const revalidate = 0
export default async function page(){
    const data = await fetchPosts()
    return (
    <>
        <Container>
            <section className='w-full flex flex-col gap-4'>
                <div className='w-full py-4 relative'>
                    <Posts moviePosts={data} fetchPosts={fetchPosts}/>
                </div>
            </section>
        </Container>
    </>
  )
}

