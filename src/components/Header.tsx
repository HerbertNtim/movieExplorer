"use client";

import { navLinks } from "@/constants";
import Link from "next/link";
import React, { useState } from "react";
import SwitchTheme from "./SwitchTheme";
import { RiMenu5Fill } from "react-icons/ri";
import { LiaTimesSolid } from "react-icons/lia";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="h-[90px] px-16 py-8 flex justify-between items-center relative">
      {/* Desktop Menu */}
      <div className="hidden lg:flex gap-8 text-xl">
        {navLinks.map((link) => (
          <Link href={link.href} key={link.name} className="md:text-md hover:text-gray-500">
            {link.name}
          </Link>
        ))}
      </div>

      {/* Mobile Menu Toggle Button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className={`lg:hidden text-4xl cursor-pointer z-20`}
      >
        {isMenuOpen ? <LiaTimesSolid /> : <RiMenu5Fill />}
      </button>

      {/* MOBILE RESPONSIVE MENU */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white dark:bg-gray-800 flex flex-col items-center justify-center gap-8 text-2xl z-10 lg:hidden">
          {navLinks.map((link) => (
            <Link
              href={link.href}
              key={link.name}
              className="hover:text-gray-500"
              onClick={() => setIsMenuOpen(false)} 
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}

      {/* Right Section: Theme Switch and Movies */}
      <div className={`flex gap-8 text-lg items-center`}>
        <SwitchTheme />
        <span>Movies</span>
      </div>
    </header>
  );
};

export default Header;
