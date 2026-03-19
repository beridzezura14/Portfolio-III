"use client";

import { useState } from "react";
import { publishedWeb, portfolioList } from "../data/portfolioList";

export default function About() {
  const projects = publishedWeb.concat(portfolioList);

  const [visibleCount, setVisibleCount] = useState(4);

  return (
    <section className="relative z-10 w-[90%] lg:w-[80%] max-w-[1150px] mx-auto mt-10 py-10">
      
      {/* Header */}
      <div className="flex justify-between items-center border-b border-gray-600 pb-5 mb-8">
        <h3 className="uppercase text-sm tracking-widest text-[18px] share-tech">
          [WHAT I DO]
        </h3>
        <h3 className="uppercase text-sm tracking-widest text-[18px] share-tech">
          [VIEW ALL PROJECTS]
        </h3>
      </div>

      {/* Paragraph */}
      <div className="pt-2 mb-10">
        <p className="share-tech text-justify text-[18px] md:text-2xl xl:text-4xl text-gray-200">
          <span className="pl-10 md:pl-16 xl:pl-32">I</span> build responsive
          and interactive websites using modern front-end frameworks like React.js,
          Next.js, and Tailwind CSS. I also develop full-stack applications with
          the MERN stack and integrate backend solutions such as Supabase.
          Additionally, I enhance user experiences with dynamic animations using
          GSAP and ensure projects are efficiently styled and maintainable.
        </p>
      </div>

      {/* PROJECTS */}
      <div className="flex flex-col gap-12 py-14 bg-[#000000] text-[#FFFFFF]">
        
        {projects.slice(0, visibleCount).map((project, index) => (
          <div
            key={project.id}
            className="group bg-[#0a0a0a] border border-white/5 rounded-2xl p-4 sm:p-6 lg:p-8 transition-all duration-500 hover:border-[#e6371d]/20"
          >
            {/* layout */}
            <div
              className={`flex flex-col lg:flex-row items-center gap-6 lg:gap-16 ${
                index % 2 !== 0 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* --- IMAGE --- */}
              <div className="relative w-full lg:w-1/2 cursor-pointer rounded-xl overflow-hidden">
                
                {/* glow */}
                <div className="absolute inset-0 bg-[#e6371d]/15 blur-2xl rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                <div className="relative w-full overflow-hidden rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
                  
                  <img
                    src={project.img}
                    alt={project.name}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105 rounded-xl"
                  />

                  {/* overlay desktop */}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden lg:flex absolute inset-0 items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-500"
                  >
                    <div className="w-20 h-20 rounded-full border border-white/30 flex items-center justify-center text-white text-sm uppercase bg-[#e6371d] transition-all duration-500 scale-75 group-hover:scale-100">
                      View
                    </div>
                  </a>
                </div>
              </div>

              {/* --- TEXT --- */}
              <div className="flex flex-col gap-6 w-full lg:w-1/2">
                
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight uppercase leading-tight">
                  {project.name}
                  <span className="block h-1.5 w-24 bg-[#e6371d] mt-2 rounded-full" />
                </h2>

                <div className="flex flex-wrap gap-3">
                  {project.language.map((lang, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <span className="block w-2 h-2 rounded-full bg-[#e6371d]" />
                      <span className="text-xs sm:text-sm font-medium tracking-wide uppercase text-gray-200">
                        {lang}
                      </span>
                    </div>
                  ))}
                </div>

                <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                  {project.shortDescription}
                </p>

                {/* ACTIONS */}
                <div className="flex flex-wrap items-center gap-3">
                  
                  {/* mobile button */}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="lg:hidden inline-flex items-center justify-center px-4 sm:px-5 py-2 sm:py-3 bg-[#e6371d] text-white text-xs sm:text-sm font-semibold rounded-lg sm:rounded-xl transition hover:scale-105 active:scale-95"
                  >
                    View Project
                  </a>

                  {/* source */}
                  {project.source && (
                    <a
                      href={project.source}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-3 border border-white/10 text-white text-xs sm:text-sm font-medium rounded-lg sm:rounded-xl hover:border-[#e6371d]/40 hover:text-[#e6371d] transition"
                    >
                      {/* icon */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.85 10.91.57.1.78-.25.78-.55v-2.02c-3.19.69-3.86-1.54-3.86-1.54-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.68 1.25 3.33.96.1-.74.4-1.25.72-1.54-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.45.11-3.02 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.57.23 2.73.11 3.02.73.81 1.18 1.84 1.18 3.1 0 4.43-2.68 5.4-5.24 5.69.41.35.77 1.04.77 2.1v3.11c0 .3.21.66.79.55C20.71 21.38 24 17.08 24 12 24 5.65 18.85.5 12 .5z" />
                      </svg>
                      Source
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* SHOW MORE */}
        {visibleCount < projects.length && (
          <div className="flex justify-center mt-6">
            <button
              onClick={() => setVisibleCount((prev) => prev + 4)}
              className="px-6 py-3 bg-[#e6371d] text-white text-sm font-semibold rounded-xl transition hover:scale-105 active:scale-95"
            >
              Show More
            </button>
          </div>
        )}

      </div>
    </section>
  );
}