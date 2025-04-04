import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const Cookies = () => {
  return (
    <>

    <Header/>
    
    <div className="min-h-screen mt-20 text-black bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">Cookies Policy</h1>
        <p className="mb-4">
          This Cookies Policy explains how we use cookies and similar technologies
          to recognize you when you visit our website.
        </p>
        <h2 className="text-xl font-semibold mt-6 mb-2">What Are Cookies?</h2>
        <p className="mb-4">
          Cookies are small data files stored on your device that help us improve
          your experience on our website.
        </p>
        <h2 className="text-xl font-semibold mt-6 mb-2">How We Use Cookies</h2>
        <p className="mb-4">
          We use cookies for various purposes, including analytics, preferences,
          and security.
        </p>
        <h2 className="text-xl font-semibold mt-6 mb-2">Managing Cookies</h2>
        <p className="mb-4">
          You can control or disable cookies through your browser settings.
        </p>
        <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Accept Cookies
        </button>
      </div>
    </div>

<Footer/>
    </>
  )
}

export default Cookies