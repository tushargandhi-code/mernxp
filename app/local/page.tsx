'use client';

import React, { useState } from 'react'
import Footer from '../../components/Footer'
import Blogs from '../../components/Blogs'
import CreationDate from '@/components/Date'
import entertainment from '@/constants/entertainment'
import Link from 'next/link'
import Image from 'next/image'

const Entertainment = () => {
  const [visiblePosts, setVisiblePosts] = useState(8) // Show 4 initially

  const loadMore = () => {
    setVisiblePosts((prev) => prev + 4) // Load 4 more each time
  }

  return (
    <>
      <div className='bg-gray-200'>
        <div className='mt-20 pt-8 text-black text-center  flex flex-col justify-center'>
          <p className='text-2xl max-w-6xl hidden lg:block text-left mx-auto mt-2'>
            Local is an ever-evolving expression of style, blending tradition with modern influences. 
            In 2025, sustainable fashion takes center stage, with eco-friendly materials and ethical production practices 
            becoming essential in the industry. Vibrant colors, oversized silhouettes, and vintage revivals are making a comeback, 
            redefining how we approach everyday wear.
          </p>

          <div className='max-w-7xl mx-auto lg:p-4 text-left'>
            <Link href="/post/How-to-Scale-Your-Side-Hustle-into-a-Full-Time-Business">
              <Blogs 
                title="local" 
                mainimg="/articles/Blogheraid12.jpg"
                maintitle='local'
                maincontent='How to Scale Your Side Hustle into a Full-Time Business'
                maindesc='Scaling a side hustle into a full-time business is an exciting journey that requires strategy, dedication, and careful planning.' 
                author='Rajat Sen'
                days="06 Apr 2025"
                buttontext='See all'
                buttoncolor='bg-orange-500'
                buttonhovercolor='hover:bg-blue-600'
              />
            </Link>


            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 justify-items-center w-full px-6">
              {entertainment.slice(0, visiblePosts).map((post, index) => (
                <Link 
                  key={index} 
                  href={`/post/${post.title.replace(/[^A-Za-z0-9]+/g, "-")}`} 
                  passHref 
                  className='bg-white p-4 rounded-md'
                >
                  <Image 
                    src={`/articles/${post.imgUrl}`} 
                    width={1000} 
                    height={1000} 
                    alt={post.title} 
                    className='h-[250px] xl:h-[200px] object-cover'
                  />
                  <h2 className='mt-3 text-xl text-left font-bold text-black'>{post.title}</h2>
                  <p className="text-gray-500 text-left text-sm p-2">
                    <CreationDate articleNumber={post.articleNumber}/>
                  </p>
                </Link>
              ))}
            </div>


            {visiblePosts < entertainment.length && (
              <div className='flex justify-center mt-8'>
                <button 
                  onClick={loadMore} 
                  className='bg-orange-500 hover:cursor-pointer hover:bg-blue-600 text-white px-6 py-2 rounded-md transition duration-300'
                >
                  Load More
                </button>
              </div>
            )}
          </div>
        </div>

        <div className='h-20 bg-gray-200'></div>
        <Footer/>
      </div>
    </>
  )
}

export default Entertainment
