import React from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'
import Blogs from '../component/Blogs'
import Posts from '../component/Posts'
import Image from 'next/image'

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
        
        <Image alt='hi' className='w-full  mt-3' src='https://images.pexels.com/photos/325876/pexels-photo-325876.jpeg?cs=srgb&dl=pexels-pixabay-325876.jpg&fm=jpg'/>
        <Blogs title = "FASHION" mainimg='https://img.mensxp.com/media/content/2025/Mar/Image-Header-Template-11_67dbf7cab0cbf.jpeg?w=1100&h=513&cc=1'
 maintitle='CELEBRITY STYLE' maincontent='From Vedang Raina To Ali Fazal—This Week’s Most Stylish Men' author='Moksha Shivlani'
 days='5 days ago'/>

<div className="flex flex-wrap mr-32 -mt-16  justify-center gap-x-4">

  <Posts pimg='https://img.mensxp.com/media/content/2025/Mar/Image-Header-Template-11-44_67da8e21c8cc9.jpeg?w=325&amp;h=483&amp;cc=1'
  pheading='FASHION TIPS & ADVICE'  pcontent1='Bling, Pearls & Scarves:' pcontent2='‘Women’s’ Accessories'
   pcontent3=' Better then Men'/>


<Posts pimg='https://img.mensxp.com/media/content/2025/Mar/Image-Header-Template-11-46_67e24ab5a3c15.jpeg?w=325&h=483&cc=1'
  pheading='FASHION TIPS & ADVICE'  pcontent1='Corp-Core, But Make It Cool:' pcontent2='How Men Are'
   pcontent3='Redefining Workwear'/>


<Posts pimg='https://img.mensxp.com/media/content/2025/Mar/Header_67d2df02d092a.jpeg?w=325&h=483&cc=1'
  pheading='CELEBRITY STYLE'  pcontent1='From Shah Rukh Khan To Hardik ' pcontent2='Pandya—This Week’s'
   pcontent3='Most Stylish Men'/>

<Posts pimg='https://img.mensxp.com/media/content/2025/Mar/Image-Header-Template-11-1_67d119497275b.jpeg?w=325&h=483&cc=1'
  pheading='CELEBRITY STYLE'  pcontent1='What To Wear This Holi Ft.' pcontent2='The Gen Z Boys'
   pcontent3=''/>
 
</div>
    </div>
    <Footer/>
    </>
  )
}

export default Fashion
