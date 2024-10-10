import { Inter } from "next/font/google";
import "../styles/globals.css"
import ReduxProvider from './ReduxProvider'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: 'Flimify - Discover, Watch, and Enjoy Movies from Around the World',
    template: '%s | Flimify',
  },
  description:
    'Welcome to Flimify, your ultimate destination for discovering, watching, and enjoying movies from Hollywood, Bollywood, K-Drama, and beyond. Stay updated with the latest movie news, reviews, and community discussions.',
  keywords:
    'Movies, Watch Movies, Hollywood, Bollywood, K-Drama, African Movies, Animation, International Movies, Movie Reviews, Latest Movies, Movie News',
  authors: [{ name: 'Flimify Tv', url: `${process.env.NEXT_PUBLIC_CLIENT_URL}` }],
  creator: 'Flimify Tv',
  publisher: 'Flimify Tv',
  openGraph: {
    title: 'Flimify - Discover, Watch, and Enjoy Movies from Around the World',
    description:
      'Explore a diverse collection of movies from Hollywood, Bollywood, K-Drama, African cinema, and more. Join our community for the latest movie news, reviews, and discussions.',
    url: `${process.env.NEXT_PUBLIC_CLIENT_URL}`, 
    image: `${process.env.NEXT_PUBLIC_CLIENT_URL}/images/logo.png`,
    type: 'website',
    siteName: 'Flimify',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Flimify - Discover, Watch, and Enjoy Movies from Around the World',
    description:
      'Discover a diverse collection of movies, watch trailers, and join discussions on the latest film releases from Hollywood, Bollywood, and beyond.',
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
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_CLIENT_URL}`,
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
    appleTouchIcon: '/apple-touch-icon.png',
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: `${process.env.NEXT_PUBLIC_CLIENT_URL}/search?search_query={search_term_string}`,
    'query-input': 'required name=search_term_string',
  },
  // manifest: '/site.webmanifest',
};


export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}
