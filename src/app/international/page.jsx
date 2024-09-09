import Container from '@/components/container/Container';
import Heading from '@/components/heading/Heading';
import React from 'react';
import Category from '@/components/category/Category';
import { dummyMovies } from '@/lib';
import Head from 'next/head';


export const metadata = {
    title: 'International Movies - Discover and Watch Top Hollywood Films | Flimify',
    description: 'Explore our collection of top Hollywood movies, including blockbusters and critically acclaimed films. Find detailed information, watch trailers, and enjoy the best international cinema on Flimify.',
    keywords: 'Hollywood Movies, Top Hollywood Films, Watch Hollywood Movies, International Cinema, Latest Hollywood Films, Blockbuster Movies',
    openGraph: {
        title: 'International Movies - Discover and Watch Top Hollywood Films | Flimify',
        description: 'Explore our collection of top Hollywood movies, including blockbusters and critically acclaimed films. Find detailed information, watch trailers, and enjoy the best international cinema on Flimify.',
        url: `${process.env.NEXT_PUBLIC_CLIENT_URL}/international`,
        image: `${process.env.NEXT_PUBLIC_CLIENT_URL}/images/logo.png`,
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'International Movies - Discover and Watch Top Hollywood Films | Flimify',
        description: 'Explore our collection of top Hollywood movies, including blockbusters and critically acclaimed films. Find detailed information, watch trailers, and enjoy the best international cinema on Flimify.',
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
  

export default async function page() {
  const pageTitle = 'Hollywood Movies - Watch International Blockbusters Online';
    const pageDescription = 'Stream the latest and most popular Hollywood movies. Explore a vast collection of international blockbusters, from action-packed thrillers to heartwarming dramas. Stay updated with new releases and timeless classics, available for online viewing.';
    const pageUrl = `${process.env.NEXT_PUBLIC_CLIENT_URL}/international`; 
    const pageImage = `${process.env.NEXT_PUBLIC_CLIENT_URL}/images/logo.png`;

    const structuredData = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "Hollywood Movies",
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
            <meta name="keywords" content="Hollywood Movies, International Movies, Blockbusters, Watch Hollywood Films, Action Movies, Drama Movies, New Hollywood Releases, Online Movie Streaming, Hollywood Classics" />
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
                    <Heading page={'International'} />
                    <Category data={dummyMovies} />
                </div>
            </section>
        </Container>
    </>
  );
}
