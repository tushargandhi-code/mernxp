'use client';

import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link';

const slides = [
  {
    image: '/articles/Blogheraid1.jpg',
    title: 'The Best Side Hustles to Make Extra Money in Your Spare Time',
  },
  {
    image: '/articles/Blogheraid4.jpg',
    title: 'Turning Your Hobby into a Side Hustle: A Step-by-Step Guide',
  },
  {
    image: '/articles/Blogheraid7.jpg',
    title: 'The Most Lucrative Side Hustles with Low Startup Costs',
  },
];

const Slider = () => {
  const [showNavigation, setShowNavigation] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setShowNavigation(window.innerWidth >= 768); // md breakpoint
    };

    handleResize(); // Run once on mount
    window.addEventListener('resize', handleResize); // Re-run on resize
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="w-full h-auto">
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        navigation={
          showNavigation
            ? {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              }
            : false
        }
        modules={[Navigation]}
        autoplay={{ delay: 3000 }}
        preventClicks={false}
        preventClicksPropagation={false}
        touchStartPreventDefault={false}
        simulateTouch={true}
        className="relative mySwiper h-[70vh] md:h-[80vh] lg:h-[90vh]"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative">
            <Link
              href={
                index === 0
                  ? '/post/The-Best-Side-Hustles-to-Make-Extra-Money-in-Your-Spare-Time'
                  : index === 1
                  ? '/post/Turning-Your-Hobby-into-a-Side-Hustle-A-Step-by-Step-Guide'
                  : '/post/The-Most-Lucrative-Side-Hustles-with-Low-Startup-Costs'
              }
              className="block relative w-full h-full"
            >
              <Image
                src={slide.image}
                alt={slide.title}
                width={1920}
                height={1080}
                className="w-full h-full object-cover"
                priority
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center text-white font-bold p-4 bg-black/40">
                <h2 className="text-2xl sm:text-3xl md:text-2xl lg:text-4xl font-semibold text-center">
                  {slide.title}
                </h2>
              </div>
            </Link>
          </SwiperSlide>
        ))}

        {/* Navigation Arrows */}
        {showNavigation && (
          <>
            <div className="swiper-button-prev text-white" />
            <div className="swiper-button-next text-white" />
          </>
        )}
      </Swiper>
    </div>
  );
};

export default Slider;
