'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Footer from '../../components/Footer';
import Blogs from '../../components/Blogs';
import CreationDate from '@/components/Date';
import Link from 'next/link';
import usNews from '@/constants/usnews';

const Usnews = () => {
  const [visiblePosts, setVisiblePosts] = useState(8); // Show 4 initially

  const loadMore = () => {
    setVisiblePosts((prev) => prev + 4); // Load 4 more each click
  };

  return (
    <>
      <div className='bg-gray-200'>
        <div className='mt-20 pt-8 text-black text-center  flex flex-col justify-center'>
          <p className='text-2xl max-w-6xl text-left hidden lg:block mx-auto mt-2'>
            U.S. News & World Report is a multifaceted digital media company dedicated to helping consumers, business leaders and policy officials make important decisions in their lives. We use world-class data and technology to publish independent reporting, rankings, journalism and advice that has earned the trust of our readers and users for more than 90 years.
          </p>

          <div className="max-w-7xl text-left mx-auto lg:p-4">
          {usNews.slice(0,1).map((post,index) => (
          <Link key={index} href={`/post/${post.title.replace(/[^A-Za-z0-9]+/g, "-")}`} passHref>
            <Blogs
            maincontent={post.title}
            maindesc= {post.contents[0]}
            mainimg={`/articles/${post.imgUrl}`}
            author={post.authorName}
            days={post.articleNumber}
            title={post.section}
            maintitle={post.section}
            buttontext='see all'
            buttoncolor='bg-orange-500'
            buttonhovercolor='hover:bg-blue-600'
            />
        
            </Link>
         ))}

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 justify-items-center w-full px-6">
              {usNews.slice(0, visiblePosts).map((post, index) => (
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
                    alt='efe'
                    className='h-[250px] xl:h-[200px] object-cover'
                  />
                  <h2 className='mt-3 text-xl text-left font-bold text-black'>{post.title}</h2>
                  <p className="text-gray-500 text-left text-sm p-2">
                    <CreationDate articleNumber={post.articleNumber} />
                  </p>
                </Link>
              ))}
            </div>

            {visiblePosts < usNews.length && (
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
        <Footer />
      </div>
    </>
  );
};

export default Usnews;
