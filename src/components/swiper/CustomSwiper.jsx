'use client'

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const CustomSwiper = ({ children }) => {
  return (
    <div className="relative w-full">
        <Swiper
            modules={[Navigation]}
            navigation={{
                prevEl: '.swiper-button-prev',
                nextEl: '.swiper-button-next',
            }}
            loop={true}
            className="mySwiper pt-8"
            spaceBetween={30}
            slidesPerView={2}
            breakpoints={{
                640: {
                    slidesPerView: 2,
                    spaceBetween: 5,
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                },
                1024: {
                    slidesPerView: 5,
                    spaceBetween: 30,
                },
            }}
        >
             {React.Children.map(children, (child, index) => (
                <SwiperSlide key={index}>{child}</SwiperSlide>
            ))}
        </Swiper>

        <div className="absolute top-[-4rem] right-[2rem] flex items-center gap-16 p-2 z-10">
            <button className="swiper-button-next bg-primary text-white 
            rounded-sm px-4 py-1 !h-8 flex items-center justify-center !-mr-4">
            </button>
            <button className="swiper-button-prev bg-primary text-white 
            rounded-sm px-4 py-1 !h-8 flex items-center justify-center !-ml-16">
            </button>
        </div>
        
    </div>
  );
};

export default CustomSwiper;
