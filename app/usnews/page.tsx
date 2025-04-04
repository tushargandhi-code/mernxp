import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Blogs from '../../components/Blogs'
import Posts from '../../components/Posts'
import Image from 'next/image'
import Link from 'next/link'
import usNews from '@/constants/usnews'

const Usnews = () => {
  return (
    <>
    
    
    <div className='bg-gray-200'>
    <Header/>
    <div className='mt-20 pt-8 text-black text-center mx-5 flex flex-col justify-center'>

        
        
        <p className = 'text-2xl  max-w-6xl mx-auto mt-2'>U.S. News & World Report is a multifaceted digital media company dedicated to helping consumers, business leaders and policy officials make important decisions in their lives. We use world-class data and technology to publish independent reporting, rankings, journalism and advice that has earned the trust of our readers and users for more than 90 years.</p>
        
        
        
        <Link href="/post/Mental-Health-and-Self-Care-How-to-Reduce-Stress-and-Anxiety">
         <div className='text-left'>
        <Blogs title = "USNEWS" mainimg='/articles/Blogheraid29.jpg'
         maintitle='US RELATED NEWS' maincontent='Mental Health and Self-Care: How to Reduce Stress and Anxiety'
         maindesc='Stress and anxiety have become common issues in modern life, affecting both mental and physical life being.' author='James Carter'
         days='' buttontext='' buttoncolor='' buttonhovercolor=''/>
         </div>
         </Link>

<div className='bg-gray-200 mt-4'>

 <div className="grid  grid-cols-1  md:grid-cols-2 xl:grid-cols-4 gap-6 justify-items-center w-full max-w-6xl mx-auto">
  {usNews.map((post, index) => (
    <Link key={index} href={`/post/${post.title.replace(/[^A-Za-z0-9]+/g, "-")}`} passHref>
      <div className="bg-grey-200 -mt-18 w-[330px]">
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

    </div>

    <div className='h-20 bg-gray-200'></div>

    <Footer/>
    
    </div>
    </>
  )
}

export default Usnews





