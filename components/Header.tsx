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
    <header className="text-white fixed top-0 left-0 w-full z-50 bg-black body-font shadow-md">
      <div className="container mx-auto flex flex-wrap p-5 flex-row items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-white hover:cursor-pointer text-4xl font-bold">
          <Image src="/articles/logo.png" alt="MensXP Logo" width={163} height={100} />
        </Link>

        {/* Hamburger (visible below lg only) */}
        <div className="lg:hidden text-white text-2xl" onClick={toggleMenu}>
          {menuOpen ? <FiX /> : <FiMenu />}
        </div>

        {/* Desktop Nav (unchanged, visible lg and up) */}
        <div className="hidden lg:mx-auto lg:flex items-center ml-auto space-x-6 text-base">
          <Link href="/etfs" className="hover:text-orange-500">ETFS</Link>
          <Link href="/finance" className="hover:text-orange-500">FINANCE</Link>
          <Link href="/stock" className="hover:text-orange-500">STOCK</Link>
          <Link href="/trading" className="hover:text-orange-500">TRADING</Link>
        </div>
      </div>

      {/* Mobile/Tablet Nav (only shown if menu is open) */}
      {menuOpen && (
        <div className="lg:hidden px-5 pb-4 space-y-4 bg-black shadow-md">
          <nav>
            <ul className="flex flex-col items-center space-y-5 text-base">
              <li><Link href="/etfs" onClick={handleCloseMenu} className="hover:text-orange-500">ETFS</Link></li>
              <li><Link href="/finance" onClick={handleCloseMenu} className="hover:text-orange-500">FINANCE</Link></li>
              <li><Link href="/stock" onClick={handleCloseMenu} className="hover:text-orange-500">STOCK</Link></li>
              <li><Link href="/trading" onClick={handleCloseMenu} className="hover:text-orange-500">TRADING</Link></li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
