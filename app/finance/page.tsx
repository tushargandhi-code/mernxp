'use client';

import React, { useState } from 'react';
import CreationDate from '@/components/Date';
import Footer from '../../components/Footer';
import Blogs from '../../components/Blogs';
import Image from 'next/image';
import money from '@/constants/money';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';



const Money = () => {
  const [visiblePosts, setVisiblePosts] = useState(12); // Show 4 initially

  const loadMore = () => {
    setVisiblePosts((prev) => prev + 12); // Load 4 more on each click
  };

  return (
    <>
      <div className='bg-gray-200'>
        <div className='mt-20 pt-8 text-black text-center  flex flex-col justify-center'>

        <div className="max-w-7xl text-black lg:px-40">
       <Breadcrumb />
        </div>
          <p className='text-2xl max-w-6xl text-left hidden lg:block mx-auto mt-2'>
            Finance is the medium used by people to buy required goods and services. It is used as the source to fulfill basic needs and is also a source of comfort in life. Money is the most important source to live a healthy and prosperous life; however, it cannot be compared with the significance of love and care. Both have their own importance and benefits. Nevertheless, money is a useful and necessary commodity to live.
          </p>


          <div className="max-w-7xl mx-auto text-left lg:p-4">
          {money.slice(0,1).map((post,index) => (
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
              {money.slice(0, visiblePosts).map((post, index) => (
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
                    <CreationDate articleNumber={post.articleNumber} />
                  </p>
                </Link>
              ))}
            </div>

            {visiblePosts < money.length && (
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


export default Money;

