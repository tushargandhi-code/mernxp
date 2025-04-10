import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

import { Metadata } from "next";

export const metadata : Metadata = {
    title: "Terms And Condition",
}

const Terms = () => {
  return (
    <>

    <Header/>
    
    <div className="max-w-4xl mt-20 mx-auto p-6 text-gray-700">
      <h1 className="text-3xl font-bold mb-4">Terms and Conditions</h1>
      <p className="mb-4">Welcome to usnewsinsider! By accessing and using our website, you agree to comply with the following terms and conditions.</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">1. Acceptance of Terms</h2>
      <p className="mb-4">By using this website, you acknowledge that you have read, understood, and agree to be bound by these terms.</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">2. Use of the Website</h2>
      <p className="mb-4">You agree to use the website only for lawful purposes and in a way that does not infringe the rights of others.</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">3. Intellectual Property</h2>
      <p className="mb-4">All content on this website, including text, images, and logos, is owned by usnewsinsider or its licensors and is protected by intellectual property laws.</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">4. User-Generated Content</h2>
      <p className="mb-4">Any content you submit must not violate any laws or rights of others. We reserve the right to remove inappropriate content.</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">5. Disclaimer</h2>
      <p className="mb-4">usnewsinsider does not guarantee the accuracy, reliability, or completeness of the content. Use the information at your own risk.</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">6. Limitation of Liability</h2>
      <p className="mb-4">We are not liable for any damages arising from the use or inability to use our website.</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">7. Changes to Terms</h2>
      <p className="mb-4">We reserve the right to update these terms at any time. Continued use of the site constitutes acceptance of the new terms.</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">8. Contact Us</h2>
      <p className="mb-4">If you have any questions about these terms, please contact us at contact@usnewsinsider.com.</p>
    </div>

<Footer/>
    </>
  )
}

export default Terms
