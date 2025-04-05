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
    <div className="flex-grow flex flex-wrap md:pl-20 ml-20 -mb-10 pt-8 md:mt-0 mt-10 md:text-left text-center">

    <div className="lg:w-1/4 md:w-1/2 w-full ml-0 md:ml-48 mx-auto md:mx-0 text-center md:text-left ">
      <h2 className='text-xl -mt-7 mb-2 font-bold'>CATEGORIES</h2>
        <nav className="list-none mb-10">
          <li>
          <Link href='/local' className="text-white text-md  hover:underline hover:cursor-pointer">Local</Link>
          </li>
          <li>
          <Link href='/politics' className="text-white text-md  hover:underline hover:cursor-pointer">Politics</Link>
          </li>
          <li>
          <Link href='/money' className="text-white text-md  hover:underline hover:cursor-pointer">Money</Link>
          </li>
          <li>
          <Link href='/usnews' className="text-white text-md  hover:underline hover:cursor-pointer">Us news</Link>
          </li>
          
          
        </nav>
      </div>

      <div className="lg:w-1/4 md:w-1/2  w-full px-4">
         <h2 className='text-xl -mt-7 mb-2 font-bold'>QUICK LINKS</h2>
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
      <h2 className='text-xl -mt-7 mb-2 font-bold'>LEGAL</h2>
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
    
      <p className="text-white ml-auto text-sm text-center sm:text-left">© 2009 - 2025 US News Insider Pvt Limited | ALL RIGHTS RESERVED
       
      </p>
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
        <a className="text-gray-500 hover:cursor-pointer" href=''>
          <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
          </svg>
        </a>
        <a className="ml-3 hover:cursor-pointer text-gray-500">
        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
          </svg>
        </a>
        <a className="ml-3 hover:cursor-pointer text-gray-500">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
          </svg>
        </a>
        <a className="ml-3 hover:cursor-pointer text-gray-500">
          <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
            <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
            <circle cx="4" cy="4" r="2" stroke="none"></circle>
          </svg>
        </a>
      </span>
    </div>
  </div>
</footer>
    </div>
  )
}

export default Footer
