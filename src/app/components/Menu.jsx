"use client";

import Link from "next/link";
import { useState } from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaFacebookF,
  FaInstagram,
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
} from "react-icons/fa";

export default function Menu() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <header className="z-50 fixed w-full" >
      {/* Navbar */}
      <nav className="bg-black text-white shadow">

        <div className="max-w-full mx-auto flex justify-between items-center py-5 px-8 xl:px-12">

          {/* Logo */}
          <Link href="/" className="logo text-xl sm:text-2xl font-bold">
            Zura.Dev
          </Link>

          {/* Desktop menu */}
          <div className="hidden lg:flex gap-8 font-medium items-center">

            <Link href="/" className="p-2.5 text-[18px] hover:text-[#ff4025] transition">
                Home
            </Link>

            <Link
              href="/about"
              className="p-2.5 text-[18px] hover:text-[#ff4025] transition"
            >
                About
            </Link>
            <Link
              href="/projects"
              className="p-2.5 text-[18px] hover:text-[#ff4025] transition"
            >
                Projects
            </Link>
            <Link
              href="/contact"
              className="p-2.5 text-[18px] hover:text-[#ff4025] transition"
            >
                Contact
            </Link>
            <Link
              href="/blogs"
              className="p-2.5 pr-10 text-[18px] hover:text-[#ff4025] transition"
            >
              Blogs
            </Link>

            {/* Contact button */}
            <div className="flex items-center gap-3">

              <button className="bg-[#ff4025] text-[18px] text-white px-7 py-3 rounded-[10px] hover:bg-[#e6371d] transition cursor-pointer">
                Lets Talk
              </button>

              <button
                className="flex flex-col justify-between w-12 h-11.5 cursor-pointer ml-2 bg-[#FFFFFF] py-3.5 px-3 rounded"
                onClick={() => setContactOpen(true)}
              >
                <span className="block h-0.5 w-full bg-black rounded"></span>
                <span className="block h-0.5 w-full bg-black rounded"></span>
                <span className="block h-0.5 w-full bg-black rounded"></span>
              </button>

            </div>
          </div>

          {/* Mobile hamburger */}
          <div
            className="lg:hidden flex flex-col justify-between w-8 h-6 cursor-pointer z-50"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <span
              className={`block h-1 w-full bg-white rounded transform transition duration-300 ${
                mobileOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>

            <span
              className={`block h-1 w-full bg-white transition duration-300 ${
                mobileOpen ? "opacity-0" : ""
              }`}
            ></span>

            <span
              className={`block h-1 w-full bg-white rounded transform transition duration-300 ${
                mobileOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </div>

        </div>

        {/* Mobile menu */}
        <div
        className={`lg:hidden fixed top-0 left-0 h-full w-[77%] bg-[#111111] text-white shadow-lg transform transition-transform duration-300 ${
            mobileOpen ? "translate-x-0" : "-translate-x-full"
        } z-50`}
        >
        <div className="flex flex-col h-full px-6 py-15 font-medium">

            {/* TOP CONTENT */}
            <div className="flex flex-col gap-4">

            <Link
                href="/"
                onClick={() => setMobileOpen(false)}
                className="py-2 rounded hover:text-[#ff4025]"
            >
                Home
            </Link>

            <Link
                href="/about"
                onClick={() => setMobileOpen(false)}
                className="py-2 rounded hover:text-[#ff4025]"
            >
                About
            </Link>
            <Link
                href="/projects"
                onClick={() => setMobileOpen(false)}
                className="py-2 rounded hover:text-[#ff4025]"
            >
                Projects
            </Link>
            <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="py-2 rounded hover:text-[#ff4025]"
            >
                Contact
            </Link>
            <Link
                href="/blogs"
                onClick={() => setMobileOpen(false)}
                className="py-2 rounded hover:text-[#ff4025]"
            >
                Blogs
            </Link>

            <button className="border border-[#ff4025] text-[#ff4025] py-2 px-4 rounded w-full hover:bg-[#ff4025] hover:text-white transition">
                Contact Us
            </button>

            <button className="bg-[#ff4025] text-white py-2 px-4 rounded w-full hover:bg-[#e6371d] transition">
                Download CV
            </button>

            </div>

            {/* BOTTOM CONTENT */}
            <div className="mt-auto">

            <hr className="border-gray-800 my-6" />

            <div className="flex flex-col gap-3 text-sm text-gray-300">

                <div className="flex items-center gap-2">
                <FaMapMarkerAlt />Tbilisi, Georgia
                </div>

                <div className="flex items-center gap-2">
                <FaPhoneAlt />+995 558 29 43 64
                </div>

                <div className="flex items-center gap-3">
                <FaEnvelope />zuraberidze12@gmail.ge
                </div>

            </div>

            {/* Social */}
            <div className="flex gap-3 mt-6">

                <a className="flex items-center justify-center w-10 h-10 bg-[#ff4025] rounded-full text-white hover:opacity-80">
                <FaFacebookF />
                </a>

                <a className="flex items-center justify-center w-10 h-10 bg-[#ff4025] rounded-full text-white hover:opacity-80">
                <FaInstagram />
                </a>

                <a className="flex items-center justify-center w-10 h-10 bg-[#ff4025] rounded-full text-white hover:opacity-80">
                <FaGithub />
                </a>
                <a className="flex items-center justify-center w-10 h-10 bg-[#ff4025] rounded-full text-white hover:opacity-80">
                <FaLinkedinIn />
                </a>

            </div>

            </div>

        </div>
        </div>

        {/* Contact slide panel */}
        <div className="fixed inset-0 pointer-events-none">

          <div
            className={`absolute inset-0 bg-black transition-opacity duration-300 ${
              contactOpen ? "opacity-50 pointer-events-auto" : "opacity-0"
            }`}
            onClick={() => setContactOpen(false)}
          ></div>

          <div
            className={`absolute top-0 right-0 h-full w-[50%] xl:w-[40%] 2xl:w-[30%] bg-[#111111] text-white shadow-lg transform transition-transform duration-300 ${
              contactOpen
                ? "translate-x-0 pointer-events-auto"
                : "translate-x-full pointer-events-none"
            }`}
          >
            <div className="flex flex-col h-full justify-center p-6">

              <h1 className="logo text-6xl font-bold tracking-[2px]">
                Zura.Dev
              </h1>

              <div className="flex flex-col gap-4 mt-8">

                <div className="flex items-center gap-2">
                  <FaMapMarkerAlt />Tbilisi, Georgia
                </div>

                <div className="flex items-center gap-2">
                  <FaPhoneAlt />+995 558 29 43 64
                </div>

                <div className="flex items-center gap-3">
                  <FaEnvelope />zuraberidze12@gmail.com
                </div>

                <div className="flex gap-3 mt-4">

                  <a className="flex items-center justify-center w-10 h-10 bg-[#ff4025] rounded-full text-white hover:opacity-80">
                    <FaFacebookF />
                  </a>

                  <a className="flex items-center justify-center w-10 h-10 bg-[#ff4025] rounded-full text-white hover:opacity-80">
                    <FaInstagram />
                  </a>

                  <a className="flex items-center justify-center w-10 h-10 bg-[#ff4025] rounded-full text-white hover:opacity-80">
                    <FaGithub />
                  </a>
                  <a className="flex items-center justify-center w-10 h-10 bg-[#ff4025] rounded-full text-white hover:opacity-80">
                    <FaLinkedinIn />
                  </a>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* Mobile overlay */}
        {mobileOpen && (
          <div
            className="fixed inset-0 bg-black opacity-40 z-40"
            onClick={() => setMobileOpen(false)}
          ></div>
        )}

      </nav>
    </header>
  );
}