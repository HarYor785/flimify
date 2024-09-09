import Container from '@/components/container/Container'
import Heading from '@/components/heading/Heading'
import React from 'react'
import { MdOutlineLiveTv } from "react-icons/md";
import { FaPeopleGroup, FaDownload } from "react-icons/fa6";
import Link from 'next/link';
import mixdrop from '@images/mixdrop.png'
import doodstream from '@images/doodstream.png'
import upstream from '@images/upstream.png'
import Image from 'next/image';


const page = () => {
  return (
    <Container>
        <section className='py-10'>
            <div className='w-full flex flex-col gap-10'>
                <Heading page={'About Us'} />

                <div className='w-full flex flex-col gap-8'>

                    <div className='w-full flex flex-col items-start gap-4'>
                        <h1 className='md:text-4xl text-2xl text-secondaryText'>
                            Flimify – Best Place for Movies
                        </h1>
                        <p className='md:text-sm text-xs text-primaryText'>
                            Flimify is more than just a movie platform; it's a 
                            community for movie lovers. We believe in 
                            delivering a seamless viewing experience 
                            that brings the magic of cinema right to 
                            your screen. Our platform is designed with 
                            the user in mind, offering an extensive 
                            library of high-quality movies, all in 
                            one place, accessible anytime and anywhere.
                        </p>
                    </div>

                    <div className='w-full grid grid-cols-1 sm:grid-cols-2 
                    md:grid-cols-3 gap-6'>
                        <div className='flex items-start gap-6'>
                            <span>
                                <MdOutlineLiveTv 
                                className='text-main md:text-5xl text-3xl'/>
                            </span>
                            <div className='flex flex-col items-start gap-3'>
                                <h1 className='md:text-lg text-sm font-semibold'>
                                    Unlimited Streaming
                                </h1>
                                <p className='md:text-sm text-xs text-primaryText'>
                                    Enjoy unlimited access to thousands of movies across 
                                    various genres, including action, drama, comedy, 
                                    romance, thriller, and more. Stream your favorite 
                                    films without interruption on any device, whether 
                                    you're at home or on the go.
                                </p>
                            </div>
                        </div>
                        <div className='flex items-start gap-6'>
                            <span>
                                <FaDownload 
                                className='text-main md:text-5xl text-3xl'/>
                            </span>
                            <div className='flex flex-col items-start gap-3'>
                                <h1 className='md:text-lg text-sm font-semibold'>
                                    Easy Downloads
                                </h1>
                                <p className='md:text-sm text-xs text-primaryText'>
                                    Prefer to watch offline? No problem! Flimify 
                                    provides easy download options so you can take your movies 
                                    with you wherever you are. Download in high quality and 
                                    watch at your convenience without buffering or ads.
                                </p>
                            </div>
                        </div>
                        <div className='flex items-start gap-6'>
                            <span>
                                <FaPeopleGroup 
                                className='text-main md:text-5xl text-3xl'/>
                            </span>
                            <div className='flex flex-col items-start gap-3'>
                                <h1 className='md:text-lg text-sm font-semibold'>
                                    Community and Interaction
                                </h1>
                                <p className='md:text-sm text-xs text-primaryText'>
                                    Join our vibrant community of movie enthusiasts! Engage with 
                                    fellow users through comments, likes, and sharing your 
                                    thoughts on the latest releases. Stay updated with movie 
                                    news, reviews, and discussions on our community page.
                                </p>
                            </div>
                        </div>

                    </div>

                    <div className='w-full flex flex-col items-start gap-6 mt-8'>
                        <h2 className='md:text-2xl text-xl text-secondaryText'>
                            Our Partners
                        </h2>
                        <p className='md:text-sm text-xs text-primaryText'>
                            At Flimify, we believe in the power of collaboration to bring 
                            the best movie-watching experience to our audience. Our partners 
                            are an integral part of our journey, helping us expand our library, 
                            enhance our technology, and deliver high-quality content that keeps 
                            our users entertained.
                        </p>
                        <div className='w-full flex flex-wrap items-center gap-4'>
                            <Link href={'https://mixdrop.ag'} target='_blank'>
                                <Image src={mixdrop} height={100} width={100}
                                alt='Mixdrop'/>
                            </Link>
                            <Link href={'https://upstream.to'} target='_blank'>
                                <Image src={upstream} height={100} width={100}
                                alt='Upstream' className='bg-gray-300 p-2 rounded-lg'/>
                            </Link>
                            <Link href={'https://doodstream.com/join/54lfhgm1uoes'} target='_blank'>
                                <Image src={doodstream} height={100} width={100}
                                alt='Doodstream' className='bg-gray-300 rounded-lg'/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </Container>
  )
}

export default page