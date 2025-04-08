"use client"
import React from 'react'
import Slider from '../components/Slider'

import Blogs from '../components/Blogs'
import Posts from '../components/Posts'
import Footer from '../components/Footer'



import entertainment from '@/constants/entertainment'
import money from '@/constants/money'
import politics from '@/constants/politics'
import usNews from '@/constants/usnews'


import Link from "next/link";




const page = () => {

  


  return (
    <div>

      
   

      <p className='text-white tracking-widest mt-20 text-center p-2 bg-sky-400'>INDIAS LARGEST MENS LIFESTYLE DESTINATION</p>

<main >
   
  <Slider/>
    
</main>

<div className="bg-gray-200">
<div className="max-w-7xl mx-auto lg:p-4">


<div className='mt-10'>
{/* <Link href="/post/The-Art-of-Layering-Mastering-Seasonal-Fashion-with-Essentials">
<Blogs title = "politics" mainimg='/articles/Blogheraid50.jpg'
 maintitle='POLITICS' maincontent='The Art of Layering: Mastering Seasonal Fashion with Essentials'
  maindesc='Layering is an essential skill when it comes to mastering seasonal fashion. By combining different pieces thoughtfully, you'
   author='Samantha Lee'
 days="06 Apr 2025" buttontext='See all' buttoncolor='bg-orange-500' buttonhovercolor='hover:bg-blue-600'/>
 </Link> */}

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
    buttontext='see all'
    buttoncolor='bg-orange-500'
    buttonhovercolor='hover:bg-blue-600'
    />

    </Link>
 ))}

<div className='bg-gray-200'>
 <div className="grid  grid-cols-1  md:grid-cols-2 xl:grid-cols-4 gap-6 justify-items-center w-full max-w-6xl mx-auto">
  {politics.slice(1, 5).map((post, index) => (
    <Link key={index} href={`/post/${post.title.replace(/[^A-Za-z0-9]+/g, "-")}`} passHref>
      <div className="bg-grey-200 w-[330px]">
        <Posts  
          pimg={`/articles/${post.imgUrl}`} 
          pheading={post.title}  
          pcontent={post.contents} 
          articleNumber={post.articleNumber}
        />
      </div>
    </Link>
  ))}
</div>
</div>
</div>

<div className='mt-10'>
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

<div className='bg-gray-200'>
 <div className="grid  grid-cols-1   md:grid-cols-2 xl:grid-cols-4 gap-6 justify-items-center w-full max-w-6xl mx-auto">
  {money.slice(1, 5).map((post, index) => (
    <Link key={index} href={`/post/${post.title.replace(/[^A-Za-z0-9]+/g, "-")}`} passHref>
      <div className="bg-grey-200  w-[330px]">
        <Posts  
          pimg={`/articles/${post.imgUrl}`} 
          pheading={post.title}  
          articleNumber={post.articleNumber}
          pcontent={post.contents} 
        />
      </div>
    </Link>
  ))}
</div>
</div>
</div>

<div className='mt-10'>
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

<div className='bg-gray-200'>
 <div className="grid  grid-cols-1  md:grid-cols-2 xl:grid-cols-4 gap-6 justify-items-center w-full max-w-6xl mx-auto">
  {usNews.slice(0, 4).map((post, index) => (
    <Link key={index} href={`/post/${post.title.replace(/[^A-Za-z0-9]+/g, "-")}`} passHref>
      <div className="bg-grey-200 w-[330px]">
        <Posts  
          pimg={`/articles/${post.imgUrl}`} 
          pheading={post.title}  
          pcontent={post.contents} 
          articleNumber={post.articleNumber}
        />
      </div>
    </Link>
  ))}
</div>
</div>
</div>

<div className='mt-10'>
{entertainment.slice(0,1).map((post,index) => (
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

<div className='bg-gray-200'>
 <div className="grid  grid-cols-1  md:grid-cols-2 xl:grid-cols-4 gap-6 justify-items-center w-full max-w-6xl mx-auto">
  {entertainment.slice(1, 5).map((post, index) => (
    <Link key={index} href={`/post/${post.title.replace(/[^A-Za-z0-9]+/g, "-")}`} passHref>
      <div className="bg-grey-200 w-[330px]">
        <Posts  
          pimg={`/articles/${post.imgUrl}`} 
          pheading={post.title}  
          pcontent={post.contents} 
          articleNumber={post.articleNumber}
        />
      </div>
    </Link>
  ))}
</div>
</div>
</div>
</div>
</div>
<div className='h-20 bg-gray-200'></div>

<Footer/>

    </div>


  )
}


export default page


