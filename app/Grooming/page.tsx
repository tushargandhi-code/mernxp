import React from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'
import Blogs from '../component/Blogs'
import Posts from '../component/Posts'
import Image from 'next/image'

const Grooming = () => {
  return (
    <>
    <Header/>
    
    <div className='mt-40 text-black text-center mx-5 flex flex-col justify-center'>

        
        <h1 className='text-7xl'>Grooming</h1>
        <p className = 'text-2xl italic mt-2'>Grooming is the practice of maintaining personal hygiene and appearance through regular care of hair, skin, nails, and overall cleanliness. It includes activities such as bathing, haircuts, shaving, skincare, and wearing neat, appropriate clothing. Good grooming habits not only enhance one’s physical appearance but also contribute to self-confidence and personal well-being. Additionally, proper grooming is important in professional and social settings, as it creates a positive impression on others. Developing a consistent grooming routine ensures that one looks and feels their best at all times.</p>
        
        <Image alt='hi' className='w-full  mt-3' src='https://www.thegroomingclinic.com/cdn/shop/collections/anthony_skincare_for_men_987860cb-06be-4d9f-a188-186c6586b54d.jpg?v=1665063115'/>
        <Blogs title = "GROOMING" mainimg='https://img.mensxp.com/media/content/2025/Mar/Header_67d163fdac56a.jpeg?w=688&h=480&cc=1'
 maintitle='SKINCARE' maincontent='This Part Of Your Body 
        Needs the Most Post-Holi Skin Care: Feet!' author='Moksha Shivlani'
 days='2 weeks ago'/>

<div className="flex flex-wrap mr-32 -mt-16  justify-center gap-x-4">
 
 <Posts pimg='https://img.mensxp.com/media/content/2025/Feb/Image-Header-Template-11-10_67bf0b95052c8.jpeg?w=325&h=483&cc=1'
 pheading='WELLNESS'  pcontent1=' Effortless Elegance: ' pcontent2='How to Look Expensive'
  pcontent3=' Without Trying'/>


<Posts pimg='https://img.mensxp.com/media/content/2025/Mar/Image-Header-Template-11-41_67c6ec38d2b9f.jpeg?w=325&h=483&cc=1'
 pheading='SKINCARE'  pcontent1='Why Are Your Lips Darker' pcontent2='Than Your Coffee? '
  pcontent3='5 Reasons & How to Fix Them'/>


<Posts pimg='https://img.mensxp.com/media/content/2025/Feb/Image-Header-Template-11-11_67beef9ec0d6e.jpeg?w=325&h=483&cc=1'
 pheading=' CELEBRITY GROOMING'  pcontent1=' Orry’s Sunburned Cheeks: The ' pcontent2='Glow That’s Got Everyone Asking,'
  pcontent3='‘What’s Your Highlighter?’'/>

<Posts pimg='https://img.mensxp.com/media/content/2025/Feb/Image-Header-Template-11-32_679fadc071805.jpeg?w=325&h=483&cc=1'
 pheading='GROOMING TIPS & ADVICE'  pcontent1='10 Tattoos Women' pcontent2='Really Don’t Want'
  pcontent3=''/>

 
</div>
    </div>
    <Footer/>
    </>
  )
}

export default Grooming
