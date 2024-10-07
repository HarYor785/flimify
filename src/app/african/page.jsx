import Container from '@/components/container/Container';
import Heading from '@/components/heading/Heading';
import React from 'react';
import Category from '@/components/category/Category';
import { dummyMovies } from '@/lib';
import Head from 'next/head';
import { handleFetch } from '@/lib/data';

export const metadata = {
  title: 'African Movies - Discover and Watch Top African Films | Flimify',
  description: 'Explore a diverse collection of African movies, from timeless classics to the latest releases. Find detailed information, watch trailers, and enjoy top African films on Flimify.',
  keywords: 'African Movies, Top African Films, Watch African Movies, African Cinema, Latest African Films, Classic African Movies',
  openGraph: {
    title: 'African Movies - Discover and Watch Top African Films | Flimify',
    description: 'Explore a diverse collection of African movies, from timeless classics to the latest releases. Find detailed information, watch trailers, and enjoy top African films on Flimify.',
    url: `${process.env.NEXT_PUBLIC_CLIENT_URL}/african`,
    image: `${process.env.NEXT_PUBLIC_CLIENT_URL}/images/logo.png`, 
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'African Movies - Discover and Watch Top African Films | Flimify',
    description: 'Explore a diverse collection of African movies, from timeless classics to the latest releases. Find detailed information, watch trailers, and enjoy top African films on Flimify.',
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
  const movieData = await fetchMovies('african')
  const pageTitle = 'African Movies - Explore the Best of African Cinema';
  const pageDescription = 'Experience the richness of African cinema with our collection of top African movies. Discover films from Nollywood, Ghollywood, and more, spanning genres like drama, comedy, and historical epics. Stay updated with the latest releases and timeless classics from across Africa.';
  const pageUrl = `${process.env.NEXT_PUBLIC_CLIENT_URL}/african`; 
  const pageImage = `${process.env.NEXT_PUBLIC_CLIENT_URL}/images/logo.png`;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "African Movies",
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
          <meta name="keywords" content="African Movies, Nollywood Movies, Ghollywood Movies, Watch African Films, African Cinema, Latest African Movies, African Drama Movies, African Comedy Movies, African Film Classics, Online Movie Streaming" />
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
                <Heading page={'African'} />
                <Category data={movieData} />
              </div>
          </section>
        </Container>
    </>
  );
}
