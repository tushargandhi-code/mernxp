import React from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'
import Blogs from '../component/Blogs'

import Image from 'next/image'

const Grooming = () => {
  return (
    <>
    <Header/>
    
    <div className='mt-40 text-black text-center mx-5 flex flex-col justify-center'>

        
        <h1 className='text-7xl'>Grooming</h1>
        <p className = 'text-2xl italic mt-2'>Grooming is the practice of maintaining personal hygiene and appearance through regular care of hair, skin, nails, and overall cleanliness. It includes activities such as bathing, haircuts, shaving, skincare, and wearing neat, appropriate clothing. Good grooming habits not only enhance one’s physical appearance but also contribute to self-confidence and personal well-being. Additionally, proper grooming is important in professional and social settings, as it creates a positive impression on others. Developing a consistent grooming routine ensures that one looks and feels their best at all times.</p>
        
        <Image alt='hi'
        width={100}
        height={100}
         className='w-full  mt-3' src='https://www.thegroomingclinic.com/cdn/shop/collections/anthony_skincare_for_men_987860cb-06be-4d9f-a188-186c6586b54d.jpg?v=1665063115'/>
        <Blogs title = "GROOMING" mainimg='https://img.mensxp.com/media/content/2025/Mar/Header_67d163fdac56a.jpeg?w=688&h=480&cc=1'
 maintitle='SKINCARE' maincontent='This Part Of Your Body 
        Needs the Most Post-Holi Skin Care: Feet!' author='Moksha Shivlani'
 days='2 weeks ago'/>


    </div>
    <Footer/>
    </>
  )
}

export default Grooming
