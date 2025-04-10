import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about Nexus News and what we do.",
  keywords: ["Stock Market", "About", "Trading", "ETFS", "Finance"],
};

const About = () => {
  return (
    <>

    <Header/>
    
        <title>About Us - UsNewsInsider</title>
        <meta name="description" content="Learn more about MensXP, our vision, and our journey." />
      
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About UsNewsInsider</h1>
          <p className="text-gray-600 text-lg">
            Welcome to <span className="font-semibold">UsNewsinsider</span>, the ultimate destination for modern men. 
            From grooming and style to relationships and fitness, we bring you content that inspires and empowers.
          </p>
          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-gray-800">Our Vision</h2>
            <p className="text-gray-600">
              At UsNewsinsider, we believe in redefining masculinity and celebrating individuality. 
              Our goal is to create a space where men can learn, grow, and stay ahead of the curve.
            </p>
          </div>
          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-gray-800">Our Journey</h2>
            <p className="text-gray-600">
              Since our launch, we have grown into one of the largest lifestyle platforms for men, 
              reaching millions with our authentic and engaging content.
            </p>
          </div>
        </div>
      </div>

<Footer/>
    </>
  )
}

export default About
