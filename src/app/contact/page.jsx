import Container from '@/components/container/Container'
import Heading from '@/components/heading/Heading'
import ContactForm from '@/forms/ContactForm'
import Link from 'next/link'
import React from 'react'
import { FaFacebookF, FaTiktok, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { TbBrandYoutube } from "react-icons/tb";

export const metadata = {
  title: {
    default: 'Contact Us - Flimify | Get in Touch with Us',
    template: '%s | Flimify',
  },
  description:
    'Get in touch with Flimify! Whether you have questions, feedback, or inquiries, we are here to assist. Reach out to our team for any movie-related inquiries or support.',
  keywords:
    'Contact Flimify, Customer Support, Movie Platform Inquiries, Feedback, Get in Touch, Movie Platform Support, Streaming Support',
  authors: [{ name: 'Flimify Tv', url: `${process.env.NEXT_PUBLIC_CLIENT_URL}` }],
  creator: 'Flimify Tv',
  publisher: 'Flimify Tv',
  openGraph: {
    title: 'Contact Us - Flimify | Get in Touch with Us',
    description:
      'Need help or have feedback? Contact Flimify today for assistance with any movie-related queries, support, or partnership inquiries.',
    url: `${process.env.NEXT_PUBLIC_CLIENT_URL}/contact`,
    image: `${process.env.NEXT_PUBLIC_CLIENT_URL}/images/logo.png`, 
    type: 'website',
    siteName: 'Flimify',
    locale: 'en_US',
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_CLIENT_URL}/contact`,
},
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us - Flimify | Get in Touch with Us',
    description:
      'Contact Flimify for assistance or inquiries. We are here to help with any movie or platform-related support you need.',
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