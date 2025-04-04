import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Blogs from '../../components/Blogs'
import Posts from '../../components/Posts'
import Image from 'next/image'
import entertainment from '@/constants/entertainment'
import Link from 'next/link'

const Entertainment = () => {
  return (
    <>
    
    
    <div className='bg-gray-200'>
    <Header/>
    <div className='mt-20 pt-8 text-black text-center mx-5 flex flex-col justify-center'>

        
        <h1 className='text-7xl mt-10 text-left '>ENTERTAINMENT</h1>
        <p className = 'text-2xl tracking-wider text-left mt-2'>Entertainment is an ever-evolving expression of style, blending tradition with modern influences. 
        In 2025, sustainable fashion takes center stage, with eco-friendly materials and ethical production practices 
        becoming essential in the industry. Vibrant colors, oversized silhouettes, and vintage revivals are making a comeback, 
        redefining how we approach everyday wear. </p>
        
        <Image alt='hi'
        width={100}
        height={100}
        className='w-screen h-screen  mt-3' src='https://images.pexels.com/photos/325876/pexels-photo-325876.jpeg?cs=srgb&dl=pexels-pixabay-325876.jpg&fm=jpg'/>
  
  <Link href="/post/How-to-Start-a-Profitable-Side-Hustle-While-Working-Full-Time">     
  <div className='text-left'>
  <Blogs title = "Entertain" mainimg="/articles/Blogheraid2.jpg"

 maintitle='CELEBRITY STYLE' maincontent='How to Start a Profitable Side Hustle While Working Full-Time'
 maindesc='Starting a side hustle while working full-time can be a great way to increase your income, build new skills, and create financial security.' author='Rajat Sen'
 days='5 days ago' buttontext='' buttoncolor='' buttonhovercolor=''/>
 </div>
 </Link>
 
 

<div className='bg-gray-200 mt-5 ml-2'>
 <div className="grid  grid-cols-1  md:grid-cols-2 xl:grid-cols-4 gap-6 justify-items-center w-full max-w-6xl mx-auto">
  {entertainment.map((post, index) => (
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
    <Footer/>

    </div>
    </>
  )
}

export default Entertainment
