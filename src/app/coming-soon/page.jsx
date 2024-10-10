import Container from '@/components/container/Container'
import Heading from '@/components/heading/Heading'
import { fetchComingSoon } from '@/lib/data'
import moment from 'moment'
import Image from 'next/image'
import React from 'react'


export const metadata = {
    title: "Coming Soon Movies | Upcoming Releases & Trailers",
    description:
        "Discover the most anticipated upcoming movies and their release dates. Get a sneak peek into the latest trailers, plot details, and star-studded casts of films hitting theaters soon. Stay updated with the most awaited movies across genres, including action, drama, sci-fi, and more.",
    keywords: [
        "coming soon movies",
        "upcoming movie releases",
        "movie trailers",
        "new movies",
        "movie release dates",
        "anticipated movies",
        "future movie releases",
        "upcoming films",
        "latest movie trailers",
        "new films",
    ],
    openGraph: {
        title: "Coming Soon Movies | Upcoming Releases & Trailers",
        description:
            "Stay in the loop with the latest movies coming soon to theaters. Watch trailers, read plot details, and find out which films are set to hit the big screen next.",
        url: "${process.env.NEXT_PUBLIC_CLIENT_URL}/coming-soon",
        type: "website",
        image: `${process.env.NEXT_PUBLIC_CLIENT_URL}/images/logo.png`, 
    },
    twitter: {
        card: "summary_large_image",
        title: "Coming Soon Movies | Upcoming Releases & Trailers",
        description:
            "Check out the latest movies that are coming soon. Watch trailers, read plot details, and get excited for upcoming releases.",
            image: `${process.env.NEXT_PUBLIC_CLIENT_URL}/images/logo.png`, 
    },
    alternates: {
        canonical: `${process.env.NEXT_PUBLIC_CLIENT_URL}/coming-soon`,
    },
};


export const revalidate = 0
export default async function page (){
    const data = await fetchComingSoon()
  return (
    <Container>
        <section className='py-10'>
            <div className='w-full flex flex-col gap-10'>
                <Heading page={'Coming Soon'} />
                <div className='w-full grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4'>
                    {
                        data?.slice(0, 18)?.map((item,i)=>(
                            <div key={i} className="flex flex-col gap-3 items-start">
                            <Image src={`https://image.tmdb.org/t/p/w200${item?.poster_path}`}
                            width={200} height={200} alt={item?.original_title}
                            className="rounded-md w-full h-full object-contain"/>
                            <div className="flex flex-col items-start gap-1">
                                <h1 className="text-sm text-secondaryText">
                                {item?.original_title}
                                </h1>
                                <span className="text-xs text-main">
                                {moment(item?.release_date).format('DD MMM YYYY')}
                                </span>
                            </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    </Container>
  )
}

