import React from 'react'
import Container from '@/components/container/Container'
import Heading from '@/components/heading/Heading'
import WatchListBox from './WatchListBox'

const page = () => {
  return (
    <Container>
        <section className='py-10'>
            <div className='w-full flex flex-col gap-10'>
                <Heading page={'Watchlist'} />
                <WatchListBox/>
            </div>
        </section>
    </Container>
  )
}

export default page