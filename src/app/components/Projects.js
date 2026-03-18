import { publishedWeb, portfolioList } from "../data/portfolioList";

export default function About() {
  const projects = publishedWeb.concat(portfolioList);
  return (
    <section className="relative z-10 w-[90%] lg:w-[80%] max-w-[1150px] mx-auto mt-10 py-10">
      {/* Header */}
      <div className="flex justify-between items-center border-b border-gray-600 pb-5 mb-8">
        <h3 className="uppercase text-sm tracking-widest text-[18px] share-tech">
          [WHAT I DO]
        </h3>
        <h3 className="uppercase text-sm tracking-widest text-[18px] share-tech cursor-pointer text-[#e6371d] hover:underline">
          [VIEW ALL PROJECTS]
        </h3>
      </div>

      {/* Paragraph */}
      <div className="pt-2 mb-10">
        <p className="share-tech text-justify text-[18px] md:text-2xl xl:text-4xl text-gray-200">
          <span className="pl-10 md:pl-16 xl:pl-32">I</span> build responsive
          and interactive websites using modern front-end frameworks like{" "}
          React.js, Next.js, and Tailwind CSS. I also develop full-stack
          applications with the MERN stack and integrate backend solutions such
          as Supabase. Additionally, I enhance user experiences with dynamic
          animations using GSAP and ensure projects are efficiently styled and
          maintainable.
        </p>
      </div>

<div className="flex flex-col gap-12 py-14 bg-[#000000] text-[#FFFFFF]">
  {projects.map((project, index) => (
    <div
      key={project.id}
      className="group bg-[#0a0a0a] border border-white/5 rounded-3xl p-8 xl:px-12 xl:py-16  transition-all duration-500 hover:border-[#e6371d]/20"
    >
      {/* layout */}
      <div
        className={`flex flex-col md:flex-row items-center gap-16 ${
          index % 2 !== 0 ? "md:flex-row-reverse" : ""
        }`}
      >
        {/* --- სურათი --- */}
        <div className="relative w-full md:w-1/2 cursor-pointer">
          
          {/* glow */}
          <div className="absolute inset-0 bg-[#e6371d]/15 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

          <div className="relative overflow-hidden rounded-3xl bg-white shadow-[0_15px_45px_rgba(0,0,0,0.6)]">
            
            {/* image */}
            <img
              src={project.img}
              alt={project.name}
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* overlay (DESKTOP ONLY) */}
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex absolute inset-0 items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-500"
            >
              <div className="w-24 h-24 rounded-full border border-white/30 flex items-center justify-center text-white text-sm uppercase bg-[#e6371d] transition-all duration-500 scale-75 group-hover:scale-100">
                View
              </div>
            </a>
          </div>
        </div>

        {/* --- ტექსტი --- */}
        <div className="flex flex-col gap-10 w-full md:w-1/2">
          
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter uppercase leading-tight">
            {project.name}
            <span className="block h-1.5 w-28 bg-[#e6371d] mt-2.5 rounded-full" />
          </h2>

          <div className="flex flex-wrap gap-x-6 gap-y-3">
            {project.language.map((lang, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <span className="block w-2.5 h-2.5 rounded-full bg-[#e6371d]" />
                <span className="text-sm font-medium tracking-wide uppercase text-gray-200">
                  {lang}
                </span>
              </div>
            ))}
          </div>

          <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
            {project.shortDescription}
          </p>

          {/* BUTTON (MOBILE & TABLET ONLY) */}
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="md:hidden inline-flex items-center justify-center px-6 py-3 bg-[#e6371d] text-white text-sm font-semibold rounded-xl w-fit transition hover:scale-105 active:scale-95"
          >
            View Project
          </a>
        </div>
      </div>
    </div>
  ))}
</div>
    </section>
  );
}
