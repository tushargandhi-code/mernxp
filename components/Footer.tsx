import React from 'react'

import Link from "next/link";
import Image from 'next/image';

const Footer = () => {
  return (
    <div>
      <footer className=" bg-black flex-col   body-font">
  <div className="container  px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
  <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
  <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
    <Link href="/">
      <Image 
        src="/articles/logo.png" 
        alt="MensXP Logo" 
        className="mx-auto lg:ml-44 md:mx-0" 
        width={300} 
        height={300} 
      />
    </Link>
  </a>
</div>
<div className="flex-grow flex flex-wrap justify-center md:pl-20 ml-0 md:ml-20 -mb-10 pt-8 md:mt-0 mt-10 text-center md:text-left">


    <div className="lg:w-1/4 md:w-1/2 w-full ml-0 md:ml-48 mx-auto md:mx-0 text-center md:text-left ">
      <h2 className='text-xl -mt-7 mb-2 md:mr-2  text-white sm:text-white sm:font-bold font-bold'>CATEGORIES</h2>
        <nav className="list-none mb-10">
          <li>
          <Link href='/etfs' className="text-white text-md  hover:underline hover:cursor-pointer">ETFS</Link>
          </li>
          <li>
          <Link href='/finance' className="text-white text-md  hover:underline hover:cursor-pointer">Finance</Link>
          </li>
          <li>
          <Link href='/stock' className="text-white text-md  hover:underline hover:cursor-pointer">Stock</Link>
          </li>
          <li>
          <Link href='/trading' className="text-white text-md  hover:underline hover:cursor-pointer">Trading</Link>
          </li>
          
          
        </nav>
      </div>

      <div className="lg:w-1/4 md:w-1/2  w-full px-4">
         <h2 className='text-xl -mt-7 mb-2 text-white sm:text-white sm:font-bold font-bold'>QUICK LINKS</h2>
        <nav className="list-none mb-10">
         
          <li>
            <Link href='/Privacy' className="text-white text-md hover:underline hover:cursor-pointer">Privacy Policy</Link>
          </li>
          <li>
          <Link href='/Contact' className="text-white text-md hover:underline hover:cursor-pointer">Contact Us</Link>
          </li>
          <li>
          <Link href='/About' className="text-white text-md hover:underline hover:cursor-pointer">About Us</Link>
          </li>
          
        </nav>
      </div>
      
      
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
      <h2 className='text-xl -mt-7 mb-2 text-white sm:text-white sm:font-bold font-bold'>LEGAL</h2>
        <nav className="list-none mb-10">
          <li>
          <Link href='/Terms' className="text-white text-md hover:underline hover:cursor-pointer">Terms And Conditions</Link>
          </li>
          <li>
          <Link href='/DMCA' className="text-white text-md hover:underline hover:cursor-pointer">DMCA</Link>
          </li>
          <li>
          <Link href='/Cookies' className="text-white text-md hover:underline hover:cursor-pointer">Cookies Policy</Link>
          </li>
          
        </nav>
      </div>
      
      
    </div>
  </div>
  <div className="bg-black">
    <div className="container mx-auto py-4 px-5 flex  flex-wrap flex-col sm:flex-row">
    
      <p className="text-white ml-auto text-sm mx-auto  sm:text-left">2025 US News Insider | ALL RIGHTS RESERVED
       
      </p>
      
    </div>
  </div>
</footer>
    </div>
  )
}

export default Footer
