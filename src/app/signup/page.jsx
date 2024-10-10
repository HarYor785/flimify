import Container from '@/components/container/Container'
import SignupForm from '@/forms/SignupForm'
import React from 'react'

export const metadata = {
  title: {
    default: 'Sign Up - Flimify | Join and Start Streaming Today',
    template: '%s | Flimify',
  },
  description:
    'Create your Flimify account and join the world of unlimited movie streaming. Sign up today to discover, watch, and enjoy movies from Hollywood, Bollywood, K-Drama, and more.',
  keywords:
    'Sign Up, Create Account, Join Flimify, Movie Streaming, Watch Movies, Free Sign Up, Unlimited Movies, Online Movies, Register Account, Flimify Signup, Create Profile',
  authors: [{ name: 'Flimify Tv', url: `${process.env.NEXT_PUBLIC_CLIENT_URL}` }],
  creator: 'Flimify Tv',
  publisher: 'Flimify Tv',
  openGraph: {
    title: 'Sign Up - Flimify | Join and Start Streaming Today',
    description:
      'Join Flimify today and enjoy unlimited access to your favorite movies and TV shows. Create your account in seconds and start watching.',
    url: `${process.env.NEXT_PUBLIC_CLIENT_URL}`,
    image: `${process.env.NEXT_PUBLIC_CLIENT_URL}/images/logo.png`, 
    type: 'website',
    siteName: 'Flimify',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sign Up - Flimify | Join and Start Streaming Today',
    description:
      'Sign up for Flimify and unlock access to the latest movies and TV shows. Create your profile and enjoy personalized movie recommendations.',
    image: `${process.env.NEXT_PUBLIC_CLIENT_URL}/images/logo.png`, 
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
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
    {
      name: 'theme-color',
      content: '#1a191f',
    },
  ],
  icons: {
    icon: '/favicon.ico',
    appleTouchIcon: '/favicon.ico',
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: `${process.env.NEXT_PUBLIC_CLIENT_URL}/search?search_query={search_term_string}`,
    'query-input': 'required name=search_term_string',
  },
  // manifest: '/site.webmanifest',
};

const page = () => {
  return (
    <Container>
        <div className='w-full h-screen flex items-center justify-center'>
            <div className='md:w-[450px] w-full h-fit p-4 bg-secondary rounded-md
            flex flex-col items-center gap-6 shadow-lg'>
                <h1 className='md:text-3xl text-xl text-primaryText uppercase font-bold'>
                    <span className='text-main'>Fli</span>mify
                </h1>

                <SignupForm/>
            </div>
        </div>
    </Container>
  )
}

export default page