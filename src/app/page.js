import Container from "@/components/container/Container";
import Image from "next/image";
import viewBg from '@images/view-bg.png'
import PageBg from "@/components/pageBg/PageBg";
import CustomSwiper from "@/components/swiper/CustomSwiper";
import MovieCard from "@/components/movie/MovieCard";
import { dummyMovies } from "@/lib";
import Tabs from "@/components/tabs/Tabs";
import { fetchComingSoon } from "@/lib/data";
import moment from "moment";
import Link from "next/link";
import Head from "next/head";


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
    appleTouchIcon: '/apple-touch-icon.png', 
  },
  manifest: '/site.webmanifest', 
};

const TabContent = ({movie}) =>{

  return(
    <div className="grid grid-cols-2 md:grid-cols-6 sm:grid-cols-4 
    md:gap-6 gap-4">
      {
        movie.map((item, i)=>(
          <MovieCard data={item} key={i}/>
        ))
      }
    </div>
  )
}

const tabsArray = [
  {
    title: 'Movies',
    content: <TabContent movie={dummyMovies}/>
  },
  {
    title: 'African',
    content: <TabContent movie={dummyMovies}/>
  },
  {
    title: 'Animations',
    content: <TabContent movie={dummyMovies}/>
  },
  {
    title: 'Bollywood',
    content: <TabContent movie={dummyMovies}/>
  },
]

export const revalidate = 0
export default async function Home() {
  const data = await fetchComingSoon()
  
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
      "target": `${pageUrl}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };
  return (
    <>
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
    <Container>
        <main className="w-full md:py-20 py-3 flex flex-col">
          <PageBg image={viewBg}/>
            <a href="https://doodstream.com/join/54lfhgm1uoes"
            target='_blank' className="self-center md:!-mt-14 mb-3">
                <Image 
                style={{width:"100%",height: "auto",}} 
                src="https://i.doodcdn.com/img/728x90.gif" 
                alt="DoodStream - Upload videos share & make money"
                width={200} height={200}/>
            </a>
            <div className="w-full flex flex-col items-start gap-10">
              <h1 className="md:text-3xl text-xl font-bold text-secondaryText uppercase">
                <span className="text-main">New</span> Trending Movies
              </h1>
              <CustomSwiper>
                {
                  dummyMovies.map((item,i)=>(
                    <MovieCard data={item} key={i}/>
                  ))
                }
              </CustomSwiper>
            </div>
        </main>

        <section className="md:mt-0 mt-8">
          <h1 className="md:text-2xl text-xl font-bold text-secondaryText uppercase">
            Movie Categories
          </h1>
          <Tabs tabs={tabsArray} defaultTab={'Movies'} type={'movie'}/>
        </section>

        <section className="w-full mt-12">
          <div className="w-full flex flex-col items-start gap-10">
            <div className="min-w-full flex items-center justify-between">
              <h1 className="md:text-2xl text-xl font-bold text-secondaryText uppercase">
                Coming soon
              </h1>
              <Link href={'/coming-soon'}
              className="p-3 text-secondaryText bg-primary rounded-md text-xs uppercase 
              mr-32 mt-2 transition-all duration-300 ease-in-out hover:text-main">
                View all
              </Link>
            </div>
              <CustomSwiper>
                {
                  data?.slice(0, 15)?.map((item,i)=>(
                    <div key={i} className="flex flex-col gap-3 items-start">
                      <Image src={`https://image.tmdb.org/t/p/w200${item?.poster_path}`}
                      width={300} height={300} alt={item?.original_title}
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
              </CustomSwiper>
            </div>
        </section>
    </Container>
    </>
  );
}
