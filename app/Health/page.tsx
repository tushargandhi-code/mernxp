import React from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'
import Blogs from '../component/Blogs'
import Posts from '../component/Posts'

const Health = () => {
  return (
    <>
    <Header/>
    
    <div className='mt-40 text-black text-center mx-5 flex flex-col justify-center'>

        
        <h1 className='text-7xl'>Health</h1>
        <p className = 'text-2xl italic mt-2'>Health is a state of physical, mental, and emotional well-being, not just the absence of illness or disease. Maintaining good health requires a balanced diet, regular exercise, proper hydration, and adequate rest. Mental health is equally important, as stress management and emotional stability contribute to overall wellness. Preventive healthcare, such as regular check-ups and vaccinations, helps detect and prevent potential health issues. A healthy lifestyle enhances energy levels, boosts the immune system, and improves quality of life. Prioritizing health allows individuals to live longer, happier, and more productive lives.</p>
        
        <img className='w-full  mt-3' src='https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhbHRofGVufDB8fDB8fHww'/>
        <Blogs title = "HEALTH" mainimg='https://img.mensxp.com/media/content/2025/Mar/header_67e3d6a3c00f4.jpeg?w=688&h=480&cc=1'
 maintitle='DIET & NUTRITION' maincontent='Mosambi Juice Benefits: Why Drinking Mosambi Juice Is Good for Your Body' author='Darshan Yewalekar'
 days='21 hours ago'/>

<div className="flex flex-wrap mr-32 -mt-16  justify-center gap-x-4">
 
 <Posts pimg='https://img.mensxp.com/media/content/2025/Mar/header_67da9b5ee5b22.jpeg?w=325&h=483&cc=1'
 pheading='DIET & NUTRITION'  pcontent1='Benefits of Drinking' pcontent2='Amla Juice: Why'
  pcontent3='Amla Juice Is Good For Health'/>


<Posts pimg='https://img.mensxp.com/media/content/2025/Mar/mufid-majnun-oI20ehIGNd4-unsplash_67dd513337d8e.jpeg?w=325&h=483&cc=1'
 pheading='HEALTH CONDITIONS'  pcontent1='Exploring the Potential ' pcontent2='of MOTS-c Peptide in'
  pcontent3='Cellular and Metabolic Research'/>


<Posts pimg='https://img.mensxp.com/media/content/2025/Mar/header_67d15ede7c516.jpeg?w=325&h=483&cc=1'
 pheading='DIET & NUTRITION'  pcontent1='Sugarcane Juice Health' pcontent2=' Benefits: How Drinking '
  pcontent3='Sugarcane Juice Is Good’'/>

<Posts pimg='https://img.mensxp.com/media/content/2025/Mar/header_67c824c6973bd.jpeg?w=325&h=483&cc=1'
 pheading='DIET & NUTRITION'  pcontent1='Benefits of Curd to' pcontent2='the Human Body: How'
  pcontent3='Eating Curd Is Good for Health'/>

 
</div>
    </div>
    <Footer/>
    </>
  )
}

export default Health
