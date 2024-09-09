import Container from '@/components/container/Container'
import Heading from '@/components/heading/Heading';
import Posts from '@/components/posts/Posts';
import { moviePosts } from '@/lib';
import Head from 'next/head';
import React from 'react'


export const metadata = {
    title: 'Flimify Movie Community - Latest News and Discussions',
    description: 'Join our movie community to read news, share posts, and engage in discussions about the latest films and trends. Post, comment, and like content related to movies.',
    keywords: 'Movie Community, Movie News, Discussions, User Posts',
    openGraph: {
        title: 'Flimify Movie Community - Latest News and Discussions',
        description: 'Join our movie community to read news, share posts, and engage in discussions about the latest films and trends. Post, comment, and like content related to movies.',
        url: `${process.env.NEXT_PUBLIC_CLIENT_URL}/community`,
        image: `${process.env.NEXT_PUBLIC_CLIENT_URL}/images/logo.png`,
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Flimify Movie Community - Latest News and Discussions',
        description: 'Join our movie community to read news, share posts, and engage in discussions about the latest films and trends. Post, comment, and like content related to movies.',
        image: `${process.env.NEXT_PUBLIC_CLIENT_URL}/images/logo.png`,
    }
  };

const page = () => {
    const pageTitle = 'Flimify Movie Community - Latest News, Posts, and Discussions';
    const pageDescription = 'Join our vibrant movie community where you can read the latest movie news, share posts, comment on discussions, and engage with fellow movie enthusiasts. Stay updated with industry trends, share your opinions, and participate in conversations about your favorite films and stars.';
    const pageUrl = `${process.env.NEXT_PUBLIC_CLIENT_URL}/community`; 
    const pageImage = `${process.env.NEXT_PUBLIC_CLIENT_URL}/images/logo.png`; 

    const structuredData = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Flimify Movie Community",
        "description": pageDescription,
        "url": pageUrl,
        "image": pageImage,
        "mainEntity": {
            "@type": "DiscussionForum",
            "name": "Movie Community Forum",
            "description": pageDescription,
            "url": pageUrl,
            "comment": {
                "@type": "Comment",
                "text": "Join the discussion about the latest movie news and share your opinions."
            }
        }
      };
  return (
    <>
        <Head>
            <title>{pageTitle}</title>
            <meta name="description" content={pageDescription} />
            <meta name="keywords" content="Movie Community, Movie News, Film Discussions, User Posts, Comment on Movies, Like and Share Movie Posts, Movie Enthusiasts" />
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
            <section className='w-full flex flex-col gap-4'>
                {/* <Heading page={'Community'}/> */}
                <div className='w-full py-4 relative'>
                    <Posts moviePosts={moviePosts}/>
                </div>
            </section>
        </Container>
    </>
  )
}

export default page