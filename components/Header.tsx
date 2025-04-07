"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import Image from "next/image";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleCloseMenu = () => setMenuOpen(false);

  return (
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

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-6">
          <nav className="flex mr-[500px] space-x-6 text-base">
            <Link href="/politics" className="ml-4 hover:text-orange-500">POLITICS</Link>
            <Link href="/money" className="ml-4 hover:text-orange-500">MONEY</Link>
            <Link href="/usnews" className="ml-4 hover:text-orange-500">US-NEWS</Link>
            <Link href="/local" className="ml-4 hover:text-orange-500">LOCAL</Link>
          </nav>
        </div>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="md:hidden px-5 pb-4 space-y-4">
          <nav>
            <ul className="flex flex-col space-y-2 text-center">
              <li>
                <Link href="/politics" onClick={handleCloseMenu} className="hover:text-orange-500">
                  POLITICS
                </Link>
              </li>
              <li>
                <Link href="/money" onClick={handleCloseMenu} className="hover:text-orange-500">
                  MONEY
                </Link>
              </li>
              <li>
                <Link href="/usnews" onClick={handleCloseMenu} className="hover:text-orange-500">
                  US-NEWS
                </Link>
              </li>
              <li>
                <Link href="/local" onClick={handleCloseMenu} className="hover:text-orange-500">
                  LOCAL
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
