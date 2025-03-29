import React from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'
import Blogs from '../component/Blogs'
import Posts from '../component/Posts'
import Image from 'next/image'
import fashion from '@/constants/fashion'

const Fashion = () => {
  return (
    <>
    <Header/>
    
    <div className='mt-40 text-black text-center mx-5 flex flex-col justify-center'>

        
        <h1 className='text-7xl'>Fashion</h1>
        <p className = 'text-2xl italic mt-2'>Fashion is an ever-evolving expression of style, blending tradition with modern influences. 
        In 2025, sustainable fashion takes center stage, with eco-friendly materials and ethical production practices 
        becoming essential in the industry. Vibrant colors, oversized silhouettes, and vintage revivals are making a comeback, 
        redefining how we approach everyday wear. Whether its bold statement pieces or minimalist elegance, 
        fashion remains a powerful form of self-expression. Fashion is a dynamic and ever-evolving form of self-expression that reflects culture, individuality, and creativity. It blends tradition with modern trends, shaping the way people present themselves to the world. From haute couture to street style, fashion encompasses a wide range of styles, fabrics, and designs that cater to diverse tastes. In recent years, sustainability has become a key focus, with eco-friendly materials and ethical production gaining importance. Whether it’s bold statement pieces, timeless classics, or minimalist aesthetics, fashion continues to inspire and empower individuals, allowing them to showcase their personality and confidence through clothing and accessories.</p>
        
        <Image alt='hi'
        width={100}
        height={100}
         className='w-full  mt-3' src='https://images.pexels.com/photos/325876/pexels-photo-325876.jpeg?cs=srgb&dl=pexels-pixabay-325876.jpg&fm=jpg'/>
        <Blogs title = "FASHION" mainimg='https://img.mensxp.com/media/content/2025/Mar/Image-Header-Template-11_67dbf7cab0cbf.jpeg?w=1100&h=513&cc=1'
 maintitle='CELEBRITY STYLE' maincontent='From Vedang Raina To Ali Fazal—This Week’s Most Stylish Men' author='Moksha Shivlani'
 days='5 days ago'/>

<div className="flex flex-wrap mr-32 -mt-16  justify-center gap-x-4">

{fashion.slice(0, 4).map((post , index)=>(

<Posts key = {index} pimg={`/images/${post.imgUrl}`}
pheading={post.title}  pcontent={post.contents} />

))}
 
</div>
    </div>
    <Footer/>
    </>
  )
}

export default Fashion
