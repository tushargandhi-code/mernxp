import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Blogs from '../../components/Blogs'
import Posts from '../../components/Posts'

import politics from '@/constants/politics'
import Link from 'next/link'

const Politics = () => {
  return (
    <>
    
    
    <div className='bg-gray-200'>
    <Header/>
    <div className='mt-20 pt-8 text-black text-center mx-5 flex flex-col justify-center'>

        
        
        <p className = 'text-2xl text-center max-w-6xl mx-auto mt-2'>When we hear the term politics, we usually think of the government, politicians and political parties. For a country to have an organized government and work as per specific guidelines, we require a certain organization. This is where politics comes in, as it essentially forms the government. Every country, group and organization use politics to instrument various ways to organize their events, prospects and more.</p>
        
        
        
        <Link href="/post/Must-Have-Basics-Every-Woman-Needs-in-Her-Closet">
        <div className='text-left'>
        <Blogs title = "politics" mainimg='/articles/Blogheraid41.jpg'
 maintitle='SKINCARE' maincontent='Must-Have Basics Every Woman Needs in Her Closet' maindesc='Building a versatile wardrobe starts
  with timeless basics that serve as the foundation for any outfit.These essential pieces ensure that you always 
   ' author='Rahul Sharma'
 days='' buttontext='' buttoncolor='' buttonhovercolor=''/>
 </div>
 </Link>
<div className='bg-gray-200 mt-4'>
 <div className="grid  grid-cols-1  md:grid-cols-2 xl:grid-cols-4 gap-6 justify-items-center w-full max-w-6xl mx-auto">
  {politics.map((post, index) => (
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

export default Politics






