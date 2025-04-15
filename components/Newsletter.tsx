'use client';

import React, { useState } from 'react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thanks for subscribing with ${email}!`);
    setEmail('');
  };

  return (
    <section className="bg-white/80 max-w-4xl mx-auto mt-12 px-6 py-12 rounded-3xl shadow-xl border border-gray-300">
      <div className="text-center">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
          Stay in the Loop
        </h2>
        <p className="text-lg text-gray-700 mb-2">
          Join our newsletter to get the latest updates, tips, and stories.
        </p>
        <p className="text-lg text-gray-700 mb-8">
          No spam. Only good stuff, straight to your inbox.
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row justify-center items-center gap-4"
        >
          <input
            type="email"
            required
            placeholder="Enter your email"
            className="w-full sm:w-[300px] px-5 py-3 rounded-xl border border-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            type="submit"
            className="bg-orange-600 hover:cursor-pointer hover:bg-orange-700 text-white font-semibold px-6 py-3 rounded-xl transition duration-300 shadow-md hover:scale-105"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
