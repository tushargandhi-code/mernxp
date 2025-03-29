"use client"

import React from 'react'
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";


const Header = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
  };

  return (
    <div>
       <header className="text-white fixed top-0 left-0 w-full z-50 bg-black body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-row items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-white hover:cursor-pointer text-4xl font-bold">
          mensxp
        </Link>
        
        {/* Mobile Menu Icon */}
        <div className="md:hidden text-white text-2xl" onClick={toggleMenu}>
          {menuOpen ? <FiX /> : <FiMenu />}
        </div>

        {/* Navigation Links */}
        <nav
          className={`absolute md:static top-16 left-0 w-full md:w-auto bg-black md:bg-transparent md:flex items-center md:space-x-6 text-base transition-all ${menuOpen ? "block" : "hidden"}`}
        >
          <ul className="flex flex-col md:flex-row md:items-center md:space-x-6 text-center md:text-left">
            <li><Link href="/Fashion" className="hover:text-orange-500 px-2 py-2 md:py-0">FASHION</Link></li>
            <li><Link href="/Grooming" className="hover:text-orange-500 px-2 py-2 md:py-0">GROOMING</Link></li>
            <li><Link href="/Health" className="hover:text-orange-500 px-2 py-2 md:py-0">HEALTH</Link></li>
            <li><Link href="/Sports" className="hover:text-orange-500 px-2 py-2 md:py-0">SPORTS</Link></li>
            
          </ul>
        </nav>

        {/* Search Bar */}
        <div className="relative">
          {searchOpen ? (
            <form onSubmit={handleSearch} className="flex items-center border border-white rounded-lg p-1">
              <input
                type="text"
                className="bg-black text-white px-2 py-1 outline-none"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button type="submit" className="text-white px-2">🔍</button>
            </form>
          ) : (
            <svg
              className="hover:cursor-pointer"
              onClick={() => setSearchOpen(true)}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="23"
              viewBox="0 0 24 24"
            >
              <g fill="none" fillRule="evenodd">
                <path d="M-20-20h64v63.099h-64z" />
                <path
                  stroke="#fff"
                  strokeWidth="2.127"
                  d="M11.265 20.5C6.148 20.5 2 16.359 2 11.25S6.148 2 11.265 2c5.116 0 9.264 4.141 9.264 9.25s-4.148 9.25-9.264 9.25zm7.411-2.817L23 22z"
                />
              </g>
            </svg>
          )}
        </div>
      </div>
    </header>
    </div>
  )
}

export default Header
