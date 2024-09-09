import Container from '@/components/container/Container';
import Heading from '@/components/heading/Heading';
import React from 'react';
import Category from '@/components/category/Category';
import { dummyMovies } from '@/lib';
import Head from 'next/head';

export const metadata = {
    title: 'K-Drama - Discover and Watch the Best Korean Dramas | Flimify',
    description: 'Dive into the world of K-Dramas with our curated collection of the best Korean dramas. Find detailed information, watch episodes, and explore new and popular K-Dramas on Flimify.',
    keywords: 'K-Drama, Korean Dramas, Best K-Dramas, Watch K-Drama, K-Drama Reviews, Popular Korean Dramas',
    openGraph: {
        title: 'K-Drama - Discover and Watch the Best Korean Dramas | Flimify',
        description: 'Dive into the world of K-Dramas with our curated collection of the best Korean dramas. Find detailed information, watch episodes, and explore new and popular K-Dramas on Flimify.',
        url: `${process.env.NEXT_PUBLIC_CLIENT_URL}/k-drama`,
        image: `${process.env.NEXT_PUBLIC_CLIENT_URL}/images/logo.png`, 
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'K-Drama - Discover and Watch the Best Korean Dramas | Flimify',
        description: 'Dive into the world of K-Dramas with our curated collection of the best Korean dramas. Find detailed information, watch episodes, and explore new and popular K-Dramas on Flimify.',
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
    const pageTitle = 'K-Drama - Watch Korean Dramas Online';
    const pageDescription = 'Discover and stream the latest and most popular Korean dramas (K-Drama). Enjoy a wide selection of romantic, thriller, and historical K-Dramas with English subtitles. Stay updated with new episodes and trending shows.';
    const pageUrl = `${process.env.NEXT_PUBLIC_CLIENT_URL}/k-drama`; 
    const pageImage = `${process.env.NEXT_PUBLIC_CLIENT_URL}/images/logo.png`;

    const structuredData = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "K-Drama",
        "description": pageDescription,
        "url": pageUrl,
        "image": pageImage,
        "mainEntity": dummyMovies.map(movie => ({
            "@type": "TVSeries",
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
            <meta name="keywords" content="K-Drama, Watch Korean Dramas, Korean TV Series, Latest K-Dramas, K-Drama Online, Korean Drama Streaming, Romantic K-Dramas, Thriller K-Dramas, Historical K-Dramas, Korean Dramas with English Subtitles" />
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
                    <Heading page={'K-Drama'} />
                    <Category data={dummyMovies} />
                </div>
            </section>
        </Container>
    </>
  );
}
