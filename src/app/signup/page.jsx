import Container from '@/components/container/Container'
import SignupForm from '@/forms/SignupForm'
import React from 'react'

const page = () => {
  return (
    <Container>
        <div className='w-full h-screen flex items-center justify-center'>
            <div className='md:w-[450px] w-full h-fit p-4 bg-secondary rounded-md
            flex flex-col items-center gap-6 shadow-lg'>
                <h1 className='md:text-3xl text-xl text-primaryText uppercase font-bold'>
                    <span className='text-main'>Fli</span>mify
                </h1>

                <SignupForm/>
            </div>
        </div>
    </Container>
  )
}

export default page