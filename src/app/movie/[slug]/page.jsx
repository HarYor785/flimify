import Container from '@/components/container/Container'
import Player from '@/components/player/Player'
import { dummyMovies } from '@/lib'
import React from 'react'

const page = () => {
  return (
    <Container>
      <Player data={dummyMovies[0]}/>
    </Container>
  )
}

export default page