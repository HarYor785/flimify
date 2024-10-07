import { Inter } from "next/font/google";
import "../styles/globals.css"
import ReduxProvider from './ReduxProvider'
import Head from "next/head";

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
  openGraph: {
    title: 'Flimify - Discover, Watch, and Enjoy Movies from Around the World',
    description:
      'Explore a diverse collection of movies from Hollywood, Bollywood, K-Drama, African cinema, and more. Join our community for the latest movie news, reviews, and discussions.',
    url: 'https://yourdomain.com',
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

export default function RootLayout({ children }) {

  const pageTitle = 'Flimify - Watch the Best Movies Online';
  const pageDescription = 'Welcome to your ultimate destination for watching movies online. Explore a vast collection of movies across all genres including action, drama, comedy, thriller, and more. Stay updated with the latest releases, trending movies, and classic hits from around the world.';
  const pageUrl = process.env.NEXT_PUBLIC_CLIENT_URL; 
  const pageImage = `${process.env.NEXT_PUBLIC_CLIENT_URL}/images/logo.png`;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Website",
    "name": "Flimify",
    "url": pageUrl,
    "description": pageDescription,
    "image": pageImage,
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${pageUrl}/search?query={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <html lang="en">
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content="Flimify, Movies, Watch Movies Online, Streaming Movies, Latest Releases, Classic Movies, Action Movies, Drama Movies, Comedy Movies, Movie Website" />
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
      <body className={inter.className}>
        <ReduxProvider>
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}
