import Container from "@/components/container/Container";
import Image from "next/image";
import viewBg from '@images/view-bg.png'
import PageBg from "@/components/pageBg/PageBg";
import CustomSwiper from "@/components/swiper/CustomSwiper";
import MovieCard from "@/components/movie/MovieCard";
import { getLatestMoviesByCategory } from "@/lib";
import Tabs from "@/components/tabs/Tabs";
import { fetchComingSoon, handleFetch } from "@/lib/data";
import moment from "moment";
import Link from "next/link";


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


const TabContent = ({movie}) =>{

  return(
    <div className="grid grid-cols-2 md:grid-cols-6 sm:grid-cols-4 
    md:gap-6 gap-4">
      {
        movie?.map((item, i)=>(
          <MovieCard data={item} key={i}/>
        ))
      }
    </div>
  )
}

export async function fetchMovies(query){
  function setIsLoading(){}
  const res = await handleFetch(`/movies?query=${query}`,'GET','','',setIsLoading)
  return res?.data
}

export async function fetchCampaign(page){
  function setIsLoading(){}
  const res = await handleFetch(`/campaign?page=${page}`,'GET','','',setIsLoading)
  return res?.data
}

export const revalidate = 0
export default async function Home() {
  const data = await fetchComingSoon()
  const ads = await fetchCampaign('homepage')
  const movieData = await fetchMovies('all')
  const latestMovies = getLatestMoviesByCategory(movieData)

  const bannerr1 = ads?.filter((item)=>item?.size === '728x90')
  const hollywoodMovie  = movieData?.filter((item)=>item?.category === 'Hollywood')
  const bollywoodMovie  = movieData?.filter((item)=>item?.category === 'Bollywood')
  const animationMovie  = movieData?.filter((item)=>item?.category === 'Animation')
  const africaMovie  = movieData?.filter((item)=>item?.category === 'African')

  const tabsArray = [
    {
      title: 'Movies',
      content: <TabContent movie={hollywoodMovie}/>
    },
    {
      title: 'African',
      content: <TabContent movie={africaMovie}/>
    },
    {
      title: 'Animations',
      content: <TabContent movie={animationMovie}/>
    },
    {
      title: 'Bollywood',
      content: <TabContent movie={bollywoodMovie}/>
    },
  ]
  
  return (
    <>
      
    <Container>
        <main className="w-full md:py-20 py-3 flex flex-col">
          <PageBg image={viewBg}/>
          {
            bannerr1?.length > 0 && 
            <a href={bannerr1[0]?.targetUrl}
              target='_blank'>
                  <Image 
                  style={{width:"100%",height: "auto", maxWidth: "720px"}} 
                  src={bannerr1[0]?.content} 
                  alt={bannerr1[0]?.title}
                  width={200} height={200}/>
            </a>
          }
            <div className="w-full flex flex-col items-start gap-10">
              <h1 className="md:text-3xl text-xl font-bold text-secondaryText uppercase">
                <span className="text-main">New</span> Trending Movies
              </h1>
              {
                latestMovies &&
                <CustomSwiper>
                  {
                    latestMovies?.map((item,i)=>(
                      <MovieCard data={item} key={i}/>
                    ))
                  }
                </CustomSwiper>
              }
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
