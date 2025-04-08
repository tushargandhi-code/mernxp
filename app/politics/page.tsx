'use client';

import React, { useState } from 'react';
import Footer from '../../components/Footer';
import Blogs from '../../components/Blogs';
import Image from 'next/image';
import CreationDate from '@/components/Date';
import politics from '@/constants/politics';
import Link from 'next/link';

const Politics = () => {
  const [visiblePosts, setVisiblePosts] = useState(8); // Number of posts shown initially

  const loadMore = () => {
    setVisiblePosts((prev) => prev + 4); // Show 4 more on each click
  };

  return (
    <>
      <div className='bg-gray-200'>
        <div className='mt-20 pt-8 text-black text-center  flex flex-col justify-center'>
          <p className='text-2xl max-w-6xl hidden lg:block text-left mx-auto mt-2'>
            When we hear the term politics, we usually think of the government, politicians and political parties. For a country to have an organized government and work as per specific guidelines, we require a certain organization. This is where politics comes in, as it essentially forms the government. Every country, group and organization use politics to instrument various ways to organize their events, prospects and more.
          </p>

          <div className="max-w-7xl mx-auto text-left lg:p-4">
          {politics.slice(0,1).map((post,index) => (
      <Link key={index} href={`/post/${post.title.replace(/[^A-Za-z0-9]+/g, "-")}`} passHref>
        <Blogs
        maincontent={post.title}
        maindesc= {post.contents[0]}
        mainimg={`/articles/${post.imgUrl}`}
        author={post.authorName}
        days={post.articleNumber}
        title={post.section}
        maintitle={post.section}
        buttontext=''
        buttoncolor=''
        buttonhovercolor=''
    />

    </Link>
 ))}

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 justify-items-center w-full px-6">
              {politics.slice(0, visiblePosts).map((post, index) => (
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

            {visiblePosts < politics.length && (
              <div className='flex justify-center mt-8'>
                <button
                  onClick={loadMore}
                  className='bg-orange-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md transition duration-300'
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

export default Politics;
