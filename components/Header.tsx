"use client"

import React, { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import Image from "next/image";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const handleSearch = (e: React.SyntheticEvent) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
  };

  return (
    <div>
      <header className="text-white fixed top-0 left-0 w-full z-50 bg-black body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-row items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-white hover:cursor-pointer text-4xl font-bold">
            <Image src="/articles/logo.png" alt="MensXP Logo" width={163} height={100} />
          </Link>

          {/* Mobile Menu Icon */}
          <div className="md:hidden text-white text-2xl" onClick={toggleMenu}>
            {menuOpen ? <FiX /> : <FiMenu />}
          </div>

          {/* Desktop Nav and Search */}
          <div className="hidden md:flex items-center space-x-6">
            <nav className="flex mr-[500px] space-x-6 text-base">
              <Link href="/politics" className=" ml-4 hover:text-orange-500">POLITICS</Link>
              <Link href="/money" className="hover:text-orange-500 ml-4">MONEY</Link>
              <Link href="/usnews" className="hover:text-orange-500 ml-4">US-NEWS</Link>
              <Link href="/local" className="hover:text-orange-500 ml-4">LOCAL</Link>
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
        </div>

        {/* Mobile Nav + Search */}
        {menuOpen && (
          <div className="md:hidden px-5 pb-4 space-y-4">
            <nav>
              <ul className="flex flex-col space-y-2 text-center">
                <li><Link href="/politics" className="hover:text-orange-500">POLITICS</Link></li>
                <li><Link href="/money" className="hover:text-orange-500">MONEY</Link></li>
                <li><Link href="/usnews" className="hover:text-orange-500">US-NEWS</Link></li>
                <li><Link href="/local" className="hover:text-orange-500">LOCAL</Link></li>
              </ul>
            </nav>

            {/* Mobile Search Bar */}
            <div className="relative">
              {searchOpen ? (
                <form onSubmit={handleSearch} className="flex items-center border border-white rounded-lg p-1">
                  <input
                    type="text"
                    className="bg-black text-white px-2 py-1 outline-none w-full"
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
        )}
      </header>
    </div>
  );
};

export default Header;
