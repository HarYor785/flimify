import Container from '@/components/container/Container';
import Heading from '@/components/heading/Heading';
import React from 'react';
import Category from '@/components/category/Category';
import { dummyMovies } from '@/lib';
import Head from 'next/head';

export const metadata = {
  title: 'Animation Movies - Discover and Watch the Best Animated Films | Flimify',
  description: 'Explore our curated selection of the best animated movies. From classic animations to the latest releases, find everything you need to enjoy the world of animation. Discover new films, read reviews, and watch trailers on Flimify.',
  keywords: 'Animation Movies, Animated Films, Best Animated Movies, Watch Animation, Animated Films Reviews, Latest Animated Releases',
  openGraph: {
    title: 'Animation Movies - Discover and Watch the Best Animated Films | Flimify',
    description: 'Explore our curated selection of the best animated movies. From classic animations to the latest releases, find everything you need to enjoy the world of animation. Discover new films, read reviews, and watch trailers on Flimify.',
    url: `${process.env.NEXT_PUBLIC_CLIENT_URL}/animations`,
    image: `${process.env.NEXT_PUBLIC_CLIENT_URL}/images/logo.png`, 
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Animation Movies - Discover and Watch the Best Animated Films | Flimify',
    description: 'Explore our curated selection of the best animated movies. From classic animations to the latest releases, find everything you need to enjoy the world of animation. Discover new films, read reviews, and watch trailers on Flimify.',
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
  const pageTitle = 'Animation Movies - Watch the Best Animated Films Online';
  const pageDescription = 'Discover a fantastic collection of animated movies, from family-friendly adventures to visually stunning masterpieces. Explore a wide range of animation styles, including 2D, 3D, and stop-motion, featuring beloved classics and the latest releases from top studios.';
  const pageUrl = `${process.env.NEXT_PUBLIC_CLIENT_URL}/animations`; 
  const pageImage = `${process.env.NEXT_PUBLIC_CLIENT_URL}/images/logo.png`;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Animation Movies",
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
        <meta name="keywords" content="Animation Movies, Animated Films, Family Movies, 2D Animation, 3D Animation, Stop-Motion Movies, Animated Classics, Latest Animation Releases, Watch Animation Online, Animated Adventures" />
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
            <Heading page={'Animation'} />
            <Category data={dummyMovies} />
          </div>
        </section>
      </Container>
    </>
  );
}
