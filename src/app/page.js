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
import Button from "@/components/ui/Button";
import Link from "next/link";

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
  console.log(data)
  
  return (
    <Container>
        <main className="w-full md:py-20 py-3">
          <PageBg image={viewBg}/>
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

        <section  className="mt-12">
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
                      <div>
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
  );
}
