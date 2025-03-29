"use client"

import React from 'react'
import Image from 'next/image';

const Blogs = ({
  title,
  mainimg,
  maintitle,
  maincontent,
  author,
  days
}: {
  title: string;
  mainimg: string;
  maintitle: string;
  maincontent: string;
  author: string;
  days: string;
}) => {
  return (
    <div className='pt-20 px-4 md:px-8 lg:px-16 xl:px-24'>
      {/* Title and Button */}
      <div className='flex flex-col md:flex-row  justify-around items-center'>
        <span className='text-3xl mr-60 md:text-5xl hover:underline cursor-pointer text-black font-bold'>
          {title}
        </span>
        <button className='mt-4 md:mt-0 px-6   lg:ml-96 py-2 bg-orange-500 text-white rounded-lg transition duration-300 hover:bg-orange-600'>
          See all
        </button>
      </div>

      {/* Main Blog Section */}
      <section className='text-gray-600 body-font overflow-hidden mt-10'>
        <div className='container mx-auto px-4 md:px-8 lg:px-16 xl:px-24 py-12'>
          <div className='flex flex-col lg:flex-row items-center lg:items-start gap-8'>
            <Image 
              alt='blog image' 
              className='w-full lg:w-1/2 h-64 md:h-96 object-cover rounded-lg shadow-lg'
              src={mainimg} 
            />
            
            <div className='lg:w-1/2 w-full p-6 bg-white rounded-lg shadow-md'>
              <h2 className='text-sm font-semibold text-gray-500 uppercase tracking-wide'>{maintitle}</h2>
              <h1 className='text-gray-900 text-2xl md:text-4xl mt-4 font-bold tracking-wide mb-4'>
                {maincontent}
              </h1>
              <div className='mt-6'>
                <p className='text-black font-medium text-lg md:text-xl'>{author}</p>
                <p className='text-gray-600 text-sm md:text-base'>{days}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Blogs
