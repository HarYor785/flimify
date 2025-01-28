import Container from "@/components/container/Container";
import Image from "next/image";
import viewBg from '@images/view-bg.png'
import PageBg from "@/components/pageBg/PageBg";
import CustomSwiper from "@/components/swiper/CustomSwiper";
import MovieCard from "@/components/movie/MovieCard";
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

export async function fetchMovies(query, page = 1, limit = 10){
  function setIsLoading(){}
  const res = await handleFetch(`/movies?query=${query}&page=${page}&limit=${limit}`,'GET','','',setIsLoading)
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
  const latestMovies = await fetchMovies('latest')

  const [hollywood, bollywood, animation, african, series] = await Promise.all([ 
    fetchMovies('Hollywood', 1, 10),
    fetchMovies('Bollywood', 1, 10),
    fetchMovies('Animation', 1, 10),
    fetchMovies('African', 1, 10),
    fetchMovies('Tv-Series', 1, 10)
  ])

  const bannerr1 = ads?.filter((item)=>item?.size === '728x90')


  
  return (
    <Container>
        <main className="w-full md:py-10 py-3 flex flex-col">
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
                latestMovies?.movies?.length > 0 &&
                <CustomSwiper slides={5} space={30}>
                  {
                    latestMovies?.movies?.map((item,i)=>(
                      <MovieCard data={item} key={i}/>
                    ))
                  }
                </CustomSwiper>
              }
            </div>
        </main>
        
        {/* ACTION MOVIES */}
        <section className="relative my-4">
          <div className="min-w-full flex items-center justify-between 
          mb-4 pb-1 border-b border-primary">
            <h1 className="md:text-xl text-lg font-bold 
            text-secondaryText uppercase">
              Action movies
            </h1>
            <Link href={'/international'}
            className="p-3 text-secondaryText bg-primary rounded-md 
            text-xs uppercase transition-all duration-300 mr-32 
            ease-in-out hover:text-main">
              View all
            </Link>
          </div>
          {
                hollywood?.movies?.length > 0 &&
                <CustomSwiper slides={6} space={20}>
                  {
                    hollywood?.movies?.map((item,i)=>(
                      <MovieCard data={item} key={i}/>
                    ))
                  }
                </CustomSwiper>
              }
        </section>

        {/* ANIMATIONS */}
        <section className="relative my-4">
          <div className="min-w-full flex items-center justify-between 
          mb-4 pb-1 border-b border-primary">
            <h1 className="md:text-xl text-lg font-bold 
            text-secondaryText uppercase">
              Animations
            </h1>
            <Link href={'/animations'}
            className="p-3 text-secondaryText bg-primary rounded-md 
            text-xs uppercase transition-all duration-300 mr-32 
            ease-in-out hover:text-main">
              View all
            </Link>
          </div>
          {
                animation?.movies?.length > 0 &&
                <CustomSwiper slides={6} space={20}>
                  {
                    animation?.movies?.map((item,i)=>(
                      <MovieCard data={item} key={i}/>
                    ))
                  }
                </CustomSwiper>
              }
        </section>

        {/* SERIES */}
        <section className="relative my-4">
          <div className="min-w-full flex items-center justify-between 
          mb-4 pb-1 border-b border-primary">
            <h1 className="md:text-xl text-lg font-bold 
            text-secondaryText uppercase">
              Tv Series
            </h1>
            <Link href={'/international'}
            className="p-3 text-secondaryText bg-primary rounded-md 
            text-xs uppercase transition-all duration-300 mr-32 
            ease-in-out hover:text-main">
              View all
            </Link>
          </div>
          {
            series?.movies?.length > 0 &&
            <CustomSwiper slides={6} space={20}>
              {
                series?.movies?.map((item,i)=>(
                  <MovieCard data={item} key={i}/>
                ))
              }
            </CustomSwiper>
          }
        </section>

        {/* AFRICAN */}
        <section className="relative my-4">
          <div className="min-w-full flex items-center justify-between 
          mb-4 pb-1 border-b border-primary">
            <h1 className="md:text-xl text-lg font-bold 
            text-secondaryText uppercase">
              Made In Africa
            </h1>
            <Link href={'/africa'}
            className="p-3 text-secondaryText bg-primary rounded-md 
            text-xs uppercase transition-all duration-300 mr-32 
            ease-in-out hover:text-main">
              View all
            </Link>
          </div>
          {
                african?.movies?.length > 0 &&
                <CustomSwiper slides={6} space={20}>
                  {
                    african?.movies?.map((item,i)=>(
                      <MovieCard data={item} key={i}/>
                    ))
                  }
                </CustomSwiper>
              }
        </section>

        {/* BOLLYWOOD */}
        <section className="relative my-4">
          <div className="min-w-full flex items-center justify-between 
          mb-4 pb-1 border-b border-primary">
            <h1 className="md:text-xl text-lg font-bold 
            text-secondaryText uppercase">
              Bollywood
            </h1>
            <Link href={'/bollywood'}
            className="p-3 text-secondaryText bg-primary rounded-md 
            text-xs uppercase transition-all duration-300 mr-32 
            ease-in-out hover:text-main">
              View all
            </Link>
          </div>
          {
                bollywood?.movies?.length > 0 &&
                <CustomSwiper slides={6} space={20}>
                  {
                    bollywood?.movies?.map((item,i)=>(
                      <MovieCard data={item} key={i}/>
                    ))
                  }
                </CustomSwiper>
              }
        </section>


        {/* COMING SOON */}
        <section className="w-full mt-12">
          <div className="min-w-full flex items-center justify-between 
          mb-4 pb-1 border-b border-primary">
            <h1 className="md:text-2xl text-xl font-bold 
            text-secondaryText uppercase">
              Coming soon
            </h1>
            <Link href={'/coming-soon'}
            className="p-3 text-secondaryText bg-primary rounded-md 
            text-xs uppercase transition-all duration-300 mr-32 
            ease-in-out hover:text-main">
              View all
            </Link>
          </div>
          <CustomSwiper slides={6} space={20}>
            {
              data?.slice(0, 15)?.map((item,i)=>(
                <div key={i} 
                className="w-full max-w-[200px] h-fit flex flex-col gap-3 items-start">
                  <Image src={`https://image.tmdb.org/t/p/w200${item?.poster_path}`}
                  width={300} height={300} 
                  alt={item?.original_title}
                  className="rounded-md w-full h-full 
                  object-contain"
                  loading="lazy"
                  />
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
        </section>
    </Container>
  );
}
