"use client";

import { useEffect, useRef } from "react";
import { FaFacebookF, FaInstagram, FaGithub, FaLinkedinIn } from "react-icons/fa";
import Image from "next/image";
import gsap from "gsap";

export default function Hero() {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonRef = useRef(null);
  const socialsRef = useRef([]);
  const arrowRef = useRef(null);
  const glowRef = useRef(null);

  // push element to socials array
  const addToSocials = (el) => {
    if (el && !socialsRef.current.includes(el)) socialsRef.current.push(el);
  };

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // HIDE everything initially
    gsap.set([titleRef.current, subtitleRef.current, buttonRef.current, socialsRef.current, arrowRef.current], {
      opacity: 0,
      y: 100,
    });

    tl.to(titleRef.current, { y: 0, opacity: 1, duration: 1.3 })
      .to(subtitleRef.current, { y: 0, opacity: 1, duration: 1.3 }, "-=1.2")
      .to(buttonRef.current, { y: 0, opacity: 1, duration: 0.8 }, "-=0.8")
      .to(socialsRef.current, { y: 0, opacity: 1, stagger: 0.2, duration: 0.8 }, "-=0.8")
      .to(arrowRef.current, { y: 0, opacity: 1, duration: 0.8 }, "-=0.6");

    // Glow pulse separately
    gsap.to(glowRef.current, {
      opacity: 0.2,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <section
      id="hero"
      className="h-[100vh] pt-[68px] pl-8 pr-8 bg-black text-white flex relative overflow-hidden"
    >
      <div className="xl:w-full flex gap-4 items-center justify-between">
        {/* SOCIALS */}
        <div className="hidden xl:flex flex-col gap-5 text-2xl">
          <a ref={addToSocials} href="https://facebook.com" className="hover:text-blue-600 transition-colors duration-300">
            <FaFacebookF />
          </a>
          <a ref={addToSocials} href="https://instagram.com" className="hover:text-pink-500 transition-colors duration-300">
            <FaInstagram />
          </a>
          <a ref={addToSocials} href="https://github.com" className="hover:text-gray-800 transition-colors duration-300">
            <FaGithub />
          </a>
          <a ref={addToSocials} href="https://linkedin.com" className="hover:text-blue-500 transition-colors duration-300">
            <FaLinkedinIn />
          </a>
        </div>

        {/* TEXT */}
        <div className="h-[100vh] mb-[18vh] xl:mb-0 xl:w-250 2xl:w-280 flex flex-col item-center justify-center gap-5">
          <div className="overflow-hidden pb-5">
            <div ref={titleRef} className="gravitas relative text-4xl md:text-7xl font-bold mt-5 xl:text-9xl">
              Hi, I{`'`}m <span className="text-[#ff4025]">ZURA </span> Web Developer
            </div>
          </div>
          <div className="overflow-hidden">
            <div ref={subtitleRef} className="text-1.5xl md:text-2xl mt-3 text-gray-400 xl:w-150 forum-regular">
                I create fast, modern and responsive websites using React, Next.js and modern web technologies
            </div>
          </div>

          <button ref={buttonRef} className="xl:hidden bg-[#ff4025] w-50 text-[18px] text-white px-7 py-3 rounded-[10px] hover:bg-[#e6371d] transition cursor-pointer">
            Lets Talk
          </button>
        </div>

        {/* SCROLL */}
        <div ref={arrowRef} className="absolute z-10 bottom-0 left-1/2 lg:-ml-13.5 transform -translate-x-1/2 lg:translate-x-0 mb-5 xl:relative xl:left-auto xl:transform-none xl:mb-0 flex flex-col items-center gap-3 cursor-pointer">
          <a href="#project" className="mb-4 text-gray-400 xl:rotate-90 xl:mb-18 hover:text-[#e6371d] xl:relative transition-0.5">
            SCROLL DOWN
          </a>
          <div className="relative arrow w-5 h-22.5">
            <Image
              src="/img/arr.png"
              alt="Example"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* background glow */}
      <div
        ref={glowRef}
        className="absolute right-12 xl:right-1/3 top-1/5 rounded-[50%] w-100 h-100 2xl:w-175 2xl:w-175 xl:top-1/5 bg-[#ff4025] opacity-10 blur-[80px]"
      />
    </section>
  );
}