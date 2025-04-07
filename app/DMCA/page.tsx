'use client'

import React, { useState } from 'react'

import Footer from '../../components/Footer'

const DMCA = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    work: '',
    url: '',
    details: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const { name, email, work, url } = formData

    // Basic validation
    if (!name || !email || !work || !url) {
      alert('Please fill in all required fields.')
      return
    }

    // Show success
    alert('Submitted successfully!')

    // Optionally: clear form
    setFormData({
      name: '',
      email: '',
      work: '',
      url: '',
      details: '',
    })
  }

  return (
    <>
    

      <div className='mt-20'>
        <title>DMCA Takedown Policy</title>
      </div>

      <div className="min-h-screen text-black p-6">
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold mb-4">DMCA Takedown Policy</h1>
          <p className="mb-4 text-gray-700">
            We respect the intellectual property rights of others and comply with the Digital Millennium Copyright Act (DMCA).
            If you believe that content on our website infringes your copyright,
            please submit a takedown request.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-2">Filing a DMCA Complaint</h2>
          <p className="text-gray-700 mb-4">
            To file a DMCA complaint, provide the following information:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li>Your full name and contact information.</li>
            <li>A description of the copyrighted work you claim has been infringed.</li>
            <li>The URL of the infringing content.</li>
            <li>A statement that you have a good-faith belief the content is unauthorized.</li>
            <li>A statement under penalty of perjury that the information is accurate.</li>
            <li>Your electronic or physical signature.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6 mb-2">Submit Your Complaint</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              name="name"
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
            <input
              name="email"
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
            <input
              name="work"
              type="text"
              placeholder="Copyrighted Work (Description)"
              value={formData.work}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
            <input
              name="url"
              type="url"
              placeholder="URL of Infringing Content"
              value={formData.url}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
            <textarea
              name="details"
              placeholder="Additional Details"
              value={formData.details}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            ></textarea>
            <button
              type="submit"
              className="bg-blue-600 hover:cursor-pointer text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Submit Complaint
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default DMCA
