import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link';

const slides = [
    {
        image: '/articles/Blogheraid6.jpg',
        title: 'How to Market Your Side Hustle and Attract More Customers',
        content: 'Starting a side hustle is just the beginning;',
        content2: 'marketing it effectively',
        
    },
    {
        image: 'https://img.mensxp.com/media/content/2025/Mar/Image-Header-Template-11_67e0ca6aa5cea.jpeg?w=1100&h=513&cc=1',
        title: 'Relationship Tips & Advice',
        content: 'Sleep Divorce: Why Couples Are Breaking Up',
        content2: 'at Bedtime So They Don’t Break Up for Real',
    },
    {
        image: 'https://img.mensxp.com/media/content/2025/Mar/Image-Header-Template-11_67dbf7cab0cbf.jpeg?w=1100&h=513&cc=1',
        title: 'Celebrity Style',
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
                className="relative mySwiper h-[70vh] md:h-[80vh] lg:h-[90vh]"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index} className="relative">
                        <div className="relative h-full w-full">
                            {index === 0 ? (
                                <Link href='/privacy'>
                                    <Image
                                        src={slide.image}
                                        alt={slide.title}
                                        width={100}
                                        height={100}
                                        className="w-full h-full object-cover cursor-pointer"
                                    />
                                </Link>
                            ) : (
                                <Image
                                    src={slide.image}
                                    alt={slide.title}
                                    width={100}
                                    height={100}
                                    className="w-full h-full object-cover"
                                />
                            )}
                            <div className="absolute inset-0 flex flex-col justify-center items-center text-white font-bold p-4 bg-black/40">
                                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-center">{slide.title}</h2>
                                <p className="mt-2 text-sm sm:text-lg md:text-2xl lg:text-3xl font-bold tracking-wide text-center">{slide.content}</p>
                                <p className="mt-2 text-sm sm:text-lg md:text-2xl lg:text-3xl font-bold tracking-wide text-center">{slide.content2}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Slider;
