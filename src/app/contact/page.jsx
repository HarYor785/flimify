import Container from '@/components/container/Container'
import Heading from '@/components/heading/Heading'
import ContactForm from '@/forms/ContactForm'
import Link from 'next/link'
import React from 'react'
import { FaFacebookF, FaTiktok, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { TbBrandYoutube } from "react-icons/tb";



const page = () => {
  
  return (
    <Container>
        <section className='py-10'>
            <div className='w-full flex flex-col gap-10'>
                <Heading page={'Contact'} />

                <div className='w-full flex md:flex-row flex-col-reverse 
                items-start gap-6'>

                    <div className='w-full flex flex-col items-start gap-4'>
                      <h1 className='md:text-3xl text-xl text-secondaryText'>
                        Contact Us
                      </h1>
                      <ContactForm/>
                    </div>

                    <div className='md:w-[450px] w-full flex flex-col items-start gap-4'>
                      <h1 className='md:text-3xl text-xl text-secondaryText'>
                        Get in Touch
                      </h1>
                      <div className='w-full flex flex-col items-start gap-4'>
                        <p className='md:text-sm text-xs text-primaryText'>
                          We are always happy to help and provide more information 
                          about our services. You can contact us through email, phone, 
                          or by filling out the form on our website.
                        </p>
                        <Link href={'tel:+234094784738'}
                        className='text-sm text-secondaryText transition-all duration-300 
                        ease-in-out hover:text-main'>
                          +234094784738
                        </Link>
                        <Link href={'mailto:support@flimify.com'}
                        className='text-sm text-secondaryText transition-all duration-300 
                        ease-in-out hover:text-main'>
                          support@flimify.com
                        </Link>

                        <div className='w-full flex items-center gap-4'>
                          <Link href={'#'}
                          className='text-xl text-secondaryText transition-all duration-300 
                          ease-in-out hover:text-main'>
                            <FaFacebookF/>
                          </Link>
                          <Link href={'#'}
                          className='text-xl text-secondaryText transition-all duration-300 
                          ease-in-out hover:text-main'>
                            <FaXTwitter/>
                          </Link>
                          <Link href={'#'}
                          className='text-xl text-secondaryText transition-all duration-300 
                          ease-in-out hover:text-main'>
                            <FaTiktok />
                          </Link>
                          <Link href={'#'}
                          className='text-xl text-secondaryText transition-all duration-300 
                          ease-in-out hover:text-main'>
                            <FaInstagram  />
                          </Link>
                          <Link href={'#'}
                          className='text-xl text-secondaryText transition-all duration-300 
                          ease-in-out hover:text-main'>
                            <TbBrandYoutube  />
                          </Link>
                        </div>

                      </div>
                    </div>
                </div>
            </div>
        </section>
    </Container>
  )
}

export default page