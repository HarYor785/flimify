import Container from '@/components/container/Container'
import VerificationForm from '@/forms/VerificationForm'
import React from 'react'

export const metadata = {
  title: {
    default: 'Account Verification - Flimify | Secure Your Movie Experience',
    template: '%s | Flimify',
  },
  description:
    'Verify your Flimify account to unlock a secure and personalized movie-watching experience. Ensure your profile is protected and access premium features today.',
  keywords:
    'Account Verification, Verify Account, Secure Account, Flimify Account, User Verification, Secure Login, Verify Email, Protect Account, Movie Streaming Security',
  authors: [{ name: 'Flimify Tv', url: `${process.env.NEXT_PUBLIC_CLIENT_URL}` }],
  creator: 'Flimify Tv',
  publisher: 'Flimify Tv',
  openGraph: {
    title: 'Account Verification - Flimify | Secure Your Movie Experience',
    description:
      'Complete your Flimify account verification to enjoy a secure, customized movie experience. Protect your profile and gain access to exclusive features.',
    url: `${process.env.NEXT_PUBLIC_CLIENT_URL}/verification`,
    image: `${process.env.NEXT_PUBLIC_CLIENT_URL}/images/logo.png`, 
    type: 'website',
    siteName: 'Flimify',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Account Verification - Flimify | Secure Your Movie Experience',
    description:
      'Verify your Flimify account to enhance your movie streaming security and access personalized features. Ensure your profile is protected today.',
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

            <VerificationForm/>
        </div>
      </div>
    </Container>
  )
}

export default page