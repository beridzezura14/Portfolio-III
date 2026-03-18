import Image from "next/image";
import { SiNextdotjs, SiTailwindcss, SiSupabase } from "react-icons/si";

const Hotspot = ({ top, left, label, percentage, icon: Icon }) => (
  <div
    className="absolute group z-20"
    style={{ top: `${top}%`, left: `${left}%` }}
  >
    <div className="relative flex items-center justify-center">
      <div className="w-4 h-4 bg-white rounded-full border-2 border-gray-400 cursor-pointer shadow-lg transition-transform duration-300 group-hover:scale-125" />
      <div className="absolute w-4 h-4 bg-white rounded-full animate-ping opacity-75" />
    </div>

    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
      <div className="bg-white px-4 py-5 rounded-lg shadow-xl flex items-center gap-3 whitespace-nowrap">
        {Icon && <Icon className="text-[#020202] w-5 h-5" />}
        <span className="font-bold text-gray-800">{label}</span>
        <span className="bg-[#ff4025] text-white text-xs px-2 py-0.5 rounded-full">
          {percentage}%
        </span>
        <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-white" />
      </div>
    </div>
  </div>
);

const startYear = 2024;
const currentYear = new Date().getFullYear();
const experience = currentYear - startYear;

const personalInfo = [
  { label: "Born In", value: "Khasuri, Georgia" },
  { label: "Experience", value: `${experience}+ Years of Experience` },
  { label: "Date of Birth", value: "14 May, 1997" },
  { label: "Language", value: "Georgia, English" },
];

export default function About() {
  return (
    <section className="relative pt-30 2xl:pt-10">
      {/* Background split */}
      <div className="absolute top-0 left-0 w-full h-1/4 xl:h-1/2 bg-black"></div>
      <div className="absolute bottom-0 left-0 w-full h-5/6 xl:h-2/3 bg-[#1a1a1a]"></div>

      {/* MAIN CONTAINER */}
      <div className="relative z-10 w-[90%] lg:w-[80%] max-w-287.5 mx-auto">
        {/* IMAGE */}
        <div className="relative w-full aspect-video rounded-xl overflow-hidden">
          <Image
            src="/img/me.jpeg"
            alt="my-img"
            fill
            className="object-cover transition-transform duration-700 hover:scale-[1.02]"
            priority
          />

          {/* Hotspots */}
          <Hotspot
            top={25}
            left={20}
            label="Next.js"
            percentage={100}
            icon={SiNextdotjs}
          />
          <Hotspot
            top={25}
            left={80}
            label="Tailwind"
            percentage={60}
            icon={SiTailwindcss}
          />
          <Hotspot
            top={80}
            left={50}
            label="Supabase"
            percentage={30}
            icon={SiSupabase}
          />
        </div>

        {/* ABOUT BOX */}
        <div className="bg-[#1a1a1a] mt-10 py-10">
          {/* Header */}
          <div className="flex justify-between border-b border-gray-600 pb-5">
            <h3 className="uppercase text-sm tracking-widest text-[18px] share-tech">
              [About Me]
            </h3>
            <h3 className="uppercase text-sm tracking-widest text-[18px] share-tech">
              [Explore Me]
            </h3>
          </div>

          {/* Text */}
          <div className="pt-6">
            <p className="share-tech text-justify text-[18px] md:text-2xl xl:text-4xl ">
              <span className="pl-10 md:pl-16 xl:pl-32">I</span> am Zura, a Web developer from Georgia. I make websites that look nice, work well, and are easy for people to use. I try to keep web experiences simple, clear, and attractive. My goal is to build websites that are useful and enjoyable for everyone who visits them.
            </p>
          </div>

          {/* INFO GRID */}
          <div className="mt-10 md:mt-14">
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              {personalInfo.map((item, index) => (
                <div
                  key={index}
                  className="p-6 rounded-lg border border-gray-600 hover:border-[#e6371d] transition"
                >
                  <h4 className="text-gray-400 text-sm">{item.label}</h4>
                  <p className="text-gray-100 text-lg">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="relative overflow-hidden  bg-[#e6371d] mt-10">       
        {/* gradient edges */}
        {/* <div className="pointer-events-none absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-[#e6371d] to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-[#e6371d] to-transparent z-10" /> */}

        <div className="flex w-max marquee gap-16">
          <span className="text-white uppercase text-2xl xl:text-5xl py-6 xl:py-8">
            HTML <span className="px-10">&#8277;</span> CSS <span className="px-10">&#8277;</span> JavaScript <span className="px-10">&#8277;</span> React.js <span className="px-10">&#8277;</span> MERN Stack <span className="px-10">&#8277;</span> Next.js <span className="px-10">&#8277;</span> Supabase <span className="px-10">&#8277;</span> GSAP <span className="px-10">&#8277;</span> Tailwind CSS <span className="px-10">&#8277;</span> HTML <span className="px-10">&#8277;</span> CSS <span className="px-10">&#8277;</span> JavaScript <span className="px-10">&#8277;</span> React.js <span className="px-10">&#8277;</span> MERN Stack <span className="px-10">&#8277;</span> Next.js <span className="px-10">&#8277;</span> Supabase <span className="px-10">&#8277;</span> GSAP <span className="px-10">&#8277;</span> Tailwind CSS <span className="px-10">&#8277;</span> HTML <span className="px-10">&#8277;</span> CSS <span className="px-10">&#8277;</span> JavaScript <span className="px-10">&#8277;</span> React.js <span className="px-10">&#8277;</span> MERN Stack <span className="px-10">&#8277;</span> Next.js <span className="px-10">&#8277;</span> Supabase <span className="px-10">&#8277;</span> GSAP <span className="px-10">&#8277;</span> Tailwind CSS <span className="px-10">&#8277;</span> HTML <span className="px-10">&#8277;</span> CSS <span className="px-10">&#8277;</span> JavaScript <span className="px-10">&#8277;</span> React.js <span className="px-10">&#8277;</span> MERN Stack <span className="px-10">&#8277;</span> Next.js <span className="px-10">&#8277;</span> Supabase <span className="px-10">&#8277;</span> GSAP <span className="px-10">&#8277;</span> Tailwind CSS <span className="px-10">&#8277;</span> HTML <span className="px-10">&#8277;</span> CSS <span className="px-10">&#8277;</span> JavaScript <span className="px-10">&#8277;</span> React.js <span className="px-10">&#8277;</span> MERN Stack <span className="px-10">&#8277;</span> Next.js <span className="px-10">&#8277;</span> Supabase <span className="px-10">&#8277;</span> GSAP <span className="px-10">&#8277;</span> Tailwind CSS
          </span>  
        </div>
      </div>
    </section>
  );
}
