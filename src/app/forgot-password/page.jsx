import Container from '@/components/container/Container'
import ForgotPassForm from '@/forms/ForgotPassForm'
import React from 'react'

export const metadata = {
  title: {
    default: 'Forgot Password - Flimify | Reset Your Password',
    template: '%s | Flimify',
  },
  description:
    'Forgot your password? Reset it easily and regain access to your Flimify account to continue streaming your favorite movies and TV shows.',
  keywords:
    'Forgot Password, Reset Password, Flimify Password Recovery, Account Recovery, Movie Streaming, Flimify Login Help, Recover Account, Password Assistance',
  authors: [{ name: 'Flimify Tv', url: `${process.env.NEXT_PUBLIC_CLIENT_URL}` }],
  creator: 'Flimify Tv',
  publisher: 'Flimify Tv',
  openGraph: {
    title: 'Forgot Password - Flimify | Reset Your Password',
    description:
      'Easily reset your Flimify password to regain access to your movie account. Follow the simple steps to start watching your favorite films again.',
    url: `${process.env.NEXT_PUBLIC_CLIENT_URL}/forgot-password`,
    image: `${process.env.NEXT_PUBLIC_CLIENT_URL}/images/logo.png`, 
    type: 'website',
    siteName: 'Flimify',
    locale: 'en_US',
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_CLIENT_URL}/forgot-password`,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Forgot Password - Flimify | Reset Your Password',
    description:
      'Need to reset your password? Follow our easy steps to regain access to your Flimify account and continue enjoying unlimited movie streaming.',
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

            <ForgotPassForm/>
        </div>
      </div>
    </Container>
  )
}

export default page