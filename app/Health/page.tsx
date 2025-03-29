import React from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'
import Blogs from '../component/Blogs'

import Image from 'next/image'

const Health = () => {
  return (
    <>
    <Header/>
    
    <div className='mt-40 text-black text-center mx-5 flex flex-col justify-center'>

        
        <h1 className='text-7xl'>Health</h1>
        <p className = 'text-2xl italic mt-2'>Health is a state of physical, mental, and emotional well-being, not just the absence of illness or disease. Maintaining good health requires a balanced diet, regular exercise, proper hydration, and adequate rest. Mental health is equally important, as stress management and emotional stability contribute to overall wellness. Preventive healthcare, such as regular check-ups and vaccinations, helps detect and prevent potential health issues. A healthy lifestyle enhances energy levels, boosts the immune system, and improves quality of life. Prioritizing health allows individuals to live longer, happier, and more productive lives.</p>
        
        <Image
        width={100}
        height={100}
         alt='hi' className='w-full  mt-3' src='https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhbHRofGVufDB8fDB8fHww'/>
        <Blogs title = "HEALTH" mainimg='https://img.mensxp.com/media/content/2025/Mar/header_67e3d6a3c00f4.jpeg?w=688&h=480&cc=1'
 maintitle='DIET & NUTRITION' maincontent='Mosambi Juice Benefits: Why Drinking Mosambi Juice Is Good for Your Body' author='Darshan Yewalekar'
 days='21 hours ago'/>

<div className="flex flex-wrap mr-32 -mt-16  justify-center gap-x-4">
 
 

 
</div>
    </div>
    <Footer/>
    </>
  )
}

export default Health
