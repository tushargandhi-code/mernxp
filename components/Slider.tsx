'use client';

import React from 'react';
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
    content: 'Starting a side hustle is just the beginning;',
    content2: 'marketing it effectively',
  },
  {
    image: '/articles/Blogheraid4.jpg',
    title: 'Turning Your Hobby into a Side Hustle: A Step-by-Step Guide',
    content: 'Sleep Divorce: Why Couples Are Breaking Up',
    content2: 'at Bedtime So They Don’t Break Up for Real',
  },
  {
    image: '/articles/Blogheraid7.jpg',
    title: 'The Most Lucrative Side Hustles with Low Startup Costs',
    content: 'From Vedang Raina To Ali Fazal—',
    content2: 'This Week’s Most Stylish Men',
  },
];

const Slider = () => {
  return (
    <div className="w-full h-auto">
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        navigation={true}
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
            {index === 0 ? (
              <Link href="/post/The-Best-Side-Hustles-to-Make-Extra-Money-in-Your-Spare-Time" className="block relative w-full h-full">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  width={1920}
                  height={1080}
                  className="w-full h-full object-cover"
                  priority
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center text-white font-bold p-4 bg-black/40">
                  <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-center">
                    {slide.title}
                  </h2>
                  <p className="mt-2 text-sm sm:text-lg md:text-2xl lg:text-3xl font-bold tracking-wide text-center">
                    {slide.content}
                  </p>
                  <p className="mt-2 text-sm sm:text-lg md:text-2xl lg:text-3xl font-bold tracking-wide text-center">
                    {slide.content2}
                  </p>
                </div>
              </Link>
            ) : (
              index === 1 ? (
                <Link href="/post/Turning-Your-Hobby-into-a-Side-Hustle-A-Step-by-Step-Guide" className="block relative w-full h-full">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    width={1920}
                    height={1080}
                    className="w-full h-full object-cover"
                    priority
                  />
                  <div className="absolute inset-0 flex flex-col justify-center items-center text-white font-bold p-4 bg-black/40">
                    <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-center">
                      {slide.title}
                    </h2>
                    <p className="mt-2 text-sm sm:text-lg md:text-2xl lg:text-3xl font-bold tracking-wide text-center">
                      {slide.content}
                    </p>
                    <p className="mt-2 text-sm sm:text-lg md:text-2xl lg:text-3xl font-bold tracking-wide text-center">
                      {slide.content2}
                    </p>
                  </div>
                </Link>
              ) :<Link href="/post/The-Most-Lucrative-Side-Hustles-with-Low-Startup-Costs" className="block relative w-full h-full">
              <Image
                src={slide.image}
                alt={slide.title}
                width={1920}
                height={1080}
                className="w-full h-full object-cover"
                priority
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center text-white font-bold p-4 bg-black/40">
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-center">
                  {slide.title}
                </h2>
                <p className="mt-2 text-sm sm:text-lg md:text-2xl lg:text-3xl font-bold tracking-wide text-center">
                  {slide.content}
                </p>
                <p className="mt-2 text-sm sm:text-lg md:text-2xl lg:text-3xl font-bold tracking-wide text-center">
                  {slide.content2}
                </p>
              </div>
            </Link>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
