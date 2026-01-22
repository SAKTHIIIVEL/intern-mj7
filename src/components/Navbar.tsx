"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const navItems = ["ABOUT", "PROJECT", "TEAM", "PORTFOLIO", "CONTACT"];
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full h-[64px] lg:h-[120px] bg-black z-50">
        <div
          className="
            h-full flex items-center justify-between
            px-4
            lg:max-w-[1440px] lg:mx-auto lg:px-[90px]
          "
        >
          {/* LOGO */}
          <Link
            href="/"
            className="relative w-[80px] h-[48px] lg:w-[143px] lg:h-[94px]"
          >
            <Image
              src="/navbar_logo.png"
              alt="MJ7 Logo"
              fill
              className="object-contain"
              priority
            />
          </Link>

          {/* DESKTOP MENU (Tablet + Laptop) */}
          <div className="hidden md:flex gap-[51px]">
            {navItems.map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-white text-[20px] uppercase hover:opacity-80"
              >
                {item}
              </Link>
            ))}
          </div>

          {/* HAMBURGER (Mobile only) */}
          <button
            className="md:hidden flex flex-col gap-[6px]"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <span className="w-[26px] h-[2px] bg-red-500"></span>
            <span className="w-[26px] h-[2px] bg-red-500"></span>
            <span className="w-[26px] h-[2px] bg-red-500"></span>
          </button>
        </div>
      </nav>

      {/* MOBILE SLIDE MENU */}
      <div
        className={`fixed top-0 right-0 h-screen w-[85vw] max-w-[360px] bg-black z-[60]
        transform transition-transform duration-300 ease-in-out
        ${menuOpen ? "translate-x-0" : "translate-x-full"}
        pt-[env(safe-area-inset-top)]`}
      >
        <button
          className="absolute top-5 right-5 text-white text-3xl"
          onClick={() => setMenuOpen(false)}
        >
          ✕
        </button>

        <div className="flex flex-col py-[100px] items-start px-6 h-full gap-8">
          {navItems.map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="text-white text-[22px] uppercase"
            >
              {item}
            </Link>
          ))}
        </div>
      </div>

      {/* BACKDROP */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-[55]"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </>
  );
}
