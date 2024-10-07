import Container from '@/components/container/Container';
import Heading from '@/components/heading/Heading';
import React from 'react';
import Category from '@/components/category/Category';
import { dummyMovies } from '@/lib';
import Head from 'next/head';
import { handleFetch } from '@/lib/data';

export const metadata = {
    title: 'Bollywood Movies - Discover and Watch Popular Indian Films | Flimify',
    description: 'Explore our collection of Bollywood movies, featuring popular Indian films, new releases, and classic hits. Find detailed information, watch trailers, and enjoy the best of Indian cinema on Flimify.',
    keywords: 'Bollywood Movies, Indian Films, Popular Bollywood Movies, Watch Bollywood Movies, Bollywood Cinema, Latest Bollywood Releases',
    openGraph: {
        title: 'Bollywood Movies - Discover and Watch Popular Indian Films | Flimify',
        description: 'Explore our collection of Bollywood movies, featuring popular Indian films, new releases, and classic hits. Find detailed information, watch trailers, and enjoy the best of Indian cinema on Flimify.',
        url: `${process.env.NEXT_PUBLIC_CLIENT_URL}/bollywood`,
        image: `${process.env.NEXT_PUBLIC_CLIENT_URL}/images/logo.png`, 
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Bollywood Movies - Discover and Watch Popular Indian Films | Flimify',
        description: 'Explore our collection of Bollywood movies, featuring popular Indian films, new releases, and classic hits. Find detailed information, watch trailers, and enjoy the best of Indian cinema on Flimify.',
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

export async function fetchMovies(query){
    function setIsLoading(){}
    const res = await handleFetch(`/movies?query=${query}`,'GET','','',setIsLoading)
    return res?.data
  }

export default async function page() {
    const movieData = await fetchMovies('bollywood')
    const pageTitle = 'Bollywood Movies - Watch Indian Blockbusters Online';
    const pageDescription = 'Dive into the world of Bollywood with our collection of the latest and greatest Indian movies. Enjoy a wide range of genres, from romantic dramas to thrilling action films. Watch new releases and classic hits from the heart of Indian cinema.';
    const pageUrl = `${process.env.NEXT_PUBLIC_CLIENT_URL}/bollywood`; 
    const pageImage = `${process.env.NEXT_PUBLIC_CLIENT_URL}/images/logo.png`;

    const structuredData = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "Bollywood Movies",
        "description": pageDescription,
        "url": pageUrl,
        "image": pageImage,
        "mainEntity": dummyMovies.map(movie => ({
            "@type": "Movie",
            "name": movie?.title,
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
            <meta name="keywords" content="Bollywood Movies, Indian Movies, Watch Bollywood Films, Hindi Cinema, Latest Bollywood Releases, Bollywood Action Movies, Romantic Bollywood Movies, Indian Blockbusters, Online Movie Streaming" />
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
                    <Heading page={'Bollywood'} />
                    <Category data={movieData} />
                </div>
            </section>
        </Container>
    </>
  );
}
