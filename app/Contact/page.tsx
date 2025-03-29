import React from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'

const Contact = () => {
  return (
    <>

    <Header/>
    <div className="max-w-7xl mt-20 mx-auto p-6 text-black min-h-screen">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Contact Us</h2>
      
      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Send us a message</h3>
          <form>
            <label className="block mb-2 text-gray-700">Name</label>
            <input type="text" className="w-full p-2 border rounded-lg mb-4" placeholder="Your Name" />
            
            <label className="block mb-2 text-gray-700">Email</label>
            <input type="email" className="w-full p-2 border rounded-lg mb-4" placeholder="Your Email" />
            
            <label className="block mb-2 text-gray-700">Message</label>
            <textarea className="w-full p-2 border rounded-lg mb-4"  placeholder="Your Message"></textarea>
            
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Send Message</button>
          </form>
        </div>
        
        {/* Contact Info */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
          <p className="text-gray-700 mb-2"><strong>Address:</strong> XYZ Street, New Delhi, India</p>
          <p className="text-gray-700 mb-2"><strong>Email:</strong> support@mensxp.com</p>
          <p className="text-gray-700 mb-4"><strong>Phone:</strong> +91 12345 67890</p>
          
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-blue-600 hover:text-blue-800">Facebook</a>
            <a href="#" className="text-blue-400 hover:text-blue-600">Twitter</a>
            <a href="#" className="text-pink-600 hover:text-pink-800">Instagram</a>
          </div>
        </div>
      </div>
    </div>

<Footer/>
    </>
  )
}

export default Contact
