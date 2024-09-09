import Container from '@/components/container/Container'
import Heading from '@/components/heading/Heading'
import React from 'react'
import Category from '@/components/category/Category'
import { dummyMovies } from '@/lib'
import Head from 'next/head'


export const metadata = {
    title: 'TV Series - Discover and Watch the Latest TV Shows | Flimify',
    description: 'Explore our collection of TV series, including the latest releases and classic favorites. Find detailed information, watch episodes, and stay updated with the newest TV shows on Flimify.',
    keywords: 'TV Series, Latest TV Shows, Watch TV Series, TV Series Reviews, New TV Shows, Popular TV Series',
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
    ],
};
  

export default async function page(){
    const pageTitle = 'Tv-Series - Watch Online';
    const pageDescription = 'Explore the latest and most popular TV series on Flimify. Watch your favorite shows online from a variety of genres.';
    const pageUrl = `${process.env.NEXT_PUBLIC_CLIENT_URL}/tv-series`; 
    const pageImage = `${process.env.NEXT_PUBLIC_CLIENT_URL}/images/logo.png`;

    const structuredData = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "Tv-Series",
        "description": pageDescription,
        "url": pageUrl,
        "image": pageImage,
        "mainEntity": dummyMovies.map(movie => ({
            "@type": "Movie",
            "name": movie.title,
            "url": `${pageUrl}`,
            "image": movie?.image,
            "genre": movie?.genre,
            "description": movie?.description,
        }))
    };
  return (
    <>
        <Head>
            <title>{pageTitle}</title>
            <meta name="description" content={pageDescription} />
            <meta name="keywords" content="TV Series, Watch Online, Popular TV Shows, Latest TV Series, Flimify, Free Movies, " />
            <meta name="robots" content="index, follow" />
            <link rel="canonical" href={pageUrl} />
            <meta property="og:title" content={pageTitle} />
            <meta property="og:description" content={pageDescription} />
            <meta property="og:image" content={pageImage} />
            <meta property="og:url" content={pageUrl} />
            <meta property="og:type" content="website" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={pageTitle} />
            <meta name="twitter:description" content={pageDescription} />
            <meta name="twitter:image" content={pageImage} />
            <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
            />
        </Head>

        <Container>
            <section className='py-10'>
                <div className='w-full flex flex-col gap-10'>
                    <Heading page={'Tv-Series'}/>
                    <Category data={dummyMovies}/>
                </div>
            </section>
        </Container>
    </>
  )
}
