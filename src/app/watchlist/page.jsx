import Category from '@/components/category/Category'
import Container from '@/components/container/Container'
import Heading from '@/components/heading/Heading'
import { dummyMovies } from '@/lib'
import React from 'react'

const page = () => {
  return (
    <Container>
         <section className='py-10'>
            <div className='w-full flex flex-col gap-10'>
                <Heading page={'Watchlist'} />
                <Category data={dummyMovies} />
            </div>
        </section>
    </Container>
  )
}

export default page