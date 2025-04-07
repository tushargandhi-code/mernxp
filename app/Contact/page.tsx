"use client";
import React, { useState } from "react";

import Footer from "../../components/Footer";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface Errors {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<Errors>({
    name: "",
    email: "",
    message: "",
  });

  // Add Type Annotations for Event
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));

    let errorMsg = "";
    if (name === "name" || name === "message") {
      if (/\d/.test(value)) {
        errorMsg = "Must not contain numbers";
      }
    }
    if (name === "email") {
      if (!/^\S+@\S+\.\S+$/.test(value)) {
        errorMsg = "Enter a valid email";
      }
    }

    setErrors((prev) => ({ ...prev, [name]: errorMsg }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert("All fields are required!");
      return;
    }

    if (errors.name || errors.email || errors.message) {
      alert("Please fix the errors before submitting.");
      return;
    }

    alert("Submitted Successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <>
    
      <div className="max-w-7xl mt-20 mx-auto p-6 text-black min-h-screen">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Contact Us
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Send us a message</h3>
            <form onSubmit={handleSubmit}>
              <label className="block mb-2 text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                className="w-full p-2 border rounded-lg mb-2"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <p className="text-red-500 mb-2">{errors.name}</p>}

              <label className="block mb-2 text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                className="w-full p-2 border rounded-lg mb-2"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <p className="text-red-500 mb-2">{errors.email}</p>}

              <label className="block mb-2 text-gray-700">Message</label>
              <textarea
                name="message"
                className="w-full p-2 border rounded-lg mb-2"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
              />
              {errors.message && (
                <p className="text-red-500 mb-2">{errors.message}</p>
              )}

              <button
                type="submit"
                className="bg-blue-600 hover:cursor-pointer text-white px-4 py-2 rounded-lg hover:bg-blue-700"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <p className="text-gray-700 mb-2">
              <strong>Address:</strong> New York, Carmel, 10512
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Email:</strong> support@usnewsinsider.com
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Contact;
