import Container from '@/components/container/Container'
import Posts from '@/components/posts/Posts';
import { moviePosts } from '@/lib';
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

    return (
    <>
        <Container>
            <section className='w-full flex flex-col gap-4'>
                <div className='w-full py-4 relative'>
                    <Posts moviePosts={moviePosts}/>
                </div>
            </section>
        </Container>
    </>
  )
}

export default page