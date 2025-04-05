"use client"
import React from 'react'
import Slider from '../components/Slider'
import Header from '../components/Header'
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

      
      <Header/>

      <p className='text-white tracking-widest mt-20 text-center p-2 bg-sky-400'>INDIAS LARGEST MENS LIFESTYLE DESTINATION</p>

<main >
  
   {/* <Link href='/privacy' passHref> */}
  <Slider/>
  {/* </Link> */}
  
</main>




 
<Link href="/post/Must-Have-Basics-Every-Woman-Needs-in-Her-Closet">
<Blogs title = "politics" mainimg='/articles/Blogheraid41.jpg'
 maintitle='POLITICS' maincontent='Must-Have Basics Every Woman Needs in Her Closet' maindesc='Building a versatile wardrobe starts
  with timeless basics that serve as the foundation for any outfit.These essential pieces ensure that you always have something stylish and functional to wear, no 
  matter  the occasion is. ' author='Rahul Sharma'
 days='' buttontext='See all' buttoncolor='bg-orange-500' buttonhovercolor='hover:bg-blue-600'/>
 </Link>

<div className='bg-gray-200'>
 <div className="grid  grid-cols-1  md:grid-cols-2 xl:grid-cols-4 gap-6 justify-items-center w-full max-w-6xl mx-auto">
  {politics.slice(0, 4).map((post, index) => (
    <Link key={index} href={`/post/${post.title.replace(/[^A-Za-z0-9]+/g, "-")}`} passHref>
      <div className="bg-grey-200 w-[330px]">
        <Posts  
          pimg={`/articles/${post.imgUrl}`} 
          pheading={post.title}  
          pcontent={post.contents} 
        />
      </div>
    </Link>
  ))}
</div>
</div>

<Link href="/post/The-Importance-of-Self-Care-Why-Taking-Time-for-Yourself-Matters">
<Blogs title = "money" mainimg='/articles/Blogheraid26.jpg'
 maintitle='MONEY' maincontent='The Importance of Self-Care: Why Taking Time for Yourself Matters'
 maindesc='Self-care is more than just a buzzword—its an essential aspect of maintaining physical, mental and emotional life being.' author='Darshan Yewalekar'
 days='' buttontext='See all' buttoncolor='bg-orange-500' buttonhovercolor='hover:bg-blue-600'/>
 </Link>

<div className='bg-gray-200'>
 <div className="grid  grid-cols-1   md:grid-cols-2 xl:grid-cols-4 gap-6 justify-items-center w-full max-w-6xl mx-auto">
  {money.slice(0, 4).map((post, index) => (
    <Link key={index} href={`/post/${post.title.replace(/[^A-Za-z0-9]+/g, "-")}`} passHref>
      <div className="bg-grey-200  w-[330px]">
        <Posts  
          pimg={`/articles/${post.imgUrl}`} 
          pheading={post.title}  
          pcontent={post.contents} 
        />
      </div>
    </Link>
  ))}
</div>
</div>

<Link href="/post/Mental-Health-and-Self-Care-How-to-Reduce-Stress-and-Anxiety">
<Blogs title = "usnews" mainimg='/articles/Blogheraid29.jpg'
 maintitle='US RELATED NEWS' maincontent='Mental Health and Self-Care: How to Reduce Stress and Anxiety'
 maindesc='Stress and anxiety have become common issues in modern life, affecting both mental and physical life being.' author='James Carter'
 days='' buttontext='See all' buttoncolor='bg-orange-500' buttonhovercolor='hover:bg-blue-600'/>
 </Link>

<div className='bg-gray-200'>
 <div className="grid  grid-cols-1  md:grid-cols-2 xl:grid-cols-4 gap-6 justify-items-center w-full max-w-6xl mx-auto">
  {usNews.slice(0, 4).map((post, index) => (
    <Link key={index} href={`/post/${post.title.replace(/[^A-Za-z0-9]+/g, "-")}`} passHref>
      <div className="bg-grey-200 w-[330px]">
        <Posts  
          pimg={`/articles/${post.imgUrl}`} 
          pheading={post.title}  
          pcontent={post.contents} 
        />
      </div>
    </Link>
  ))}
</div>
</div>

<Link href="/post/How-to-Start-a-Profitable-Side-Hustle-While-Working-Full-Time">
<Blogs title = "local" mainimg="/articles/Blogheraid2.jpg"
 maintitle='local' maincontent='How to Start a Profitable Side Hustle While Working Full-Time'
 maindesc='Starting a side hustle while working full-time can be a great way to increase your income, build new skills, and create financial security.' author='Rajat Sen'
 days='' buttontext='See all' buttoncolor='bg-orange-500' buttonhovercolor='hover:bg-blue-600'/>
 </Link>

<div className='bg-gray-200'>
 <div className="grid  grid-cols-1  md:grid-cols-2 xl:grid-cols-4 gap-6 justify-items-center w-full max-w-6xl mx-auto">
  {entertainment.slice(0, 4).map((post, index) => (
    <Link key={index} href={`/post/${post.title.replace(/[^A-Za-z0-9]+/g, "-")}`} passHref>
      <div className="bg-grey-200 w-[330px]">
        <Posts  
          pimg={`/articles/${post.imgUrl}`} 
          pheading={post.title}  
          pcontent={post.contents} 
        />
      </div>
    </Link>
  ))}
</div>
</div>

<div className='h-20 bg-gray-200'></div>

<Footer/>

    </div>


  )
}


export default page


