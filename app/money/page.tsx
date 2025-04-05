import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Blogs from '../../components/Blogs'
import Posts from '../../components/Posts'
import money from '@/constants/money'
import Link from 'next/link'

const Money = () => {
  return (
    <>
    
    
    <div className='bg-gray-200'>
    <Header/>
    <div className='mt-20 pt-8 text-black text-center mx-5 flex flex-col justify-center'>

        
        
        <p className = 'text-2xl t max-w-6xl mx-auto mt-2'>Money is the medium used by people to buy required goods and services. It is used as the source to fulfill basic needs and is also a source of comfort in life. Money is the most important source to live a healthy and prosperous life; however, it cannot be compared with the significance of love and care. Both have their own importance and benefits. Nevertheless, money is a useful and necessary commodity to live</p>
        
        
        
        <Link href="/post/The-Importance-of-Self-Care-Why-Taking-Time-for-Yourself-Matters">
<div className='text-left'>
<Blogs title = "money" mainimg='/articles/Blogheraid26.jpg'
 maintitle='MAKE MONEY' maincontent='The Importance of Self-Care: Why Taking Time for Yourself Matters'
 maindesc='Self-care is more than just a buzzword—its an essential aspect of maintaining physical, mental and emotional life being.' author='Darshan Yewalekar'
 days='' buttontext='' buttoncolor='' buttonhovercolor=''/>
 </div>
 </Link>

<div className='bg-gray-200 mt-4'>
 <div className="grid  grid-cols-1  md:grid-cols-2 xl:grid-cols-4 gap-6 justify-items-center w-full max-w-6xl mx-auto">
  {money.map((post, index) => (
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

export default Money










        