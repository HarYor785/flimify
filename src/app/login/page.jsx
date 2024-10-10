import Container from '@/components/container/Container'
import LoginForm from '@/forms/loginForm'
import React from 'react'

export const metadata = {
  title: {
    default: 'Login - Flimify | Access Your Movie Account',
    template: '%s | Flimify',
  },
  description:
    'Log in to your Flimify account to access your personalized movie library. Stream movies, manage your watchlist, and enjoy the latest releases from Hollywood, Bollywood, K-Drama, and more.',
  keywords:
    'Login, Flimify Login, Access Account, Watch Movies, Movie Streaming, Sign In, Movie Library, Manage Watchlist, Online Movies, Flimify Account, User Login',
  authors: [{ name: 'Flimify Tv', url: `${process.env.NEXT_PUBLIC_CLIENT_URL}` }],
  creator: 'Flimify Tv',
  publisher: 'Flimify Tv',
  openGraph: {
    title: 'Login - Flimify | Access Your Movie Account',
    description:
      'Sign in to your Flimify account to watch your favorite movies and TV shows. Manage your watchlist and stay updated with the latest releases.',
    url: `${process.env.NEXT_PUBLIC_CLIENT_URL}/login`,
    image: `${process.env.NEXT_PUBLIC_CLIENT_URL}/images/logo.png`, 
    type: 'website',
    siteName: 'Flimify',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Login - Flimify | Access Your Movie Account',
    description:
      'Log in to Flimify and enjoy access to your movie library, personalized recommendations, and manage your watchlist for a seamless streaming experience.',
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

                <LoginForm/>
            </div>
        </div>
    </Container>
  )
}

export default page