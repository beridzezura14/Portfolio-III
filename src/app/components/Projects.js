export default function About() {
  return (
    <div className="relative z-10 w-[90%] lg:w-[80%] max-w-287.5 mx-auto mt-10 py-10">
      {/* Header */}
      <div className="flex justify-between border-b border-gray-600 pb-5">
        <h3 className="uppercase text-sm tracking-widest text-[18px] share-tech">
          [WHAT I DO]
        </h3>
        <h3 className="uppercase text-sm tracking-widest text-[18px] share-tech">
          [VIEW ALL PROJECTS]
        </h3>
      </div>

      {/* Text */}
      <div className="pt-6">
        <p className="share-tech text-justify text-[18px] md:text-2xl xl:text-4xl ">
          <span className="pl-10 md:pl-16 xl:pl-32">I</span> build responsive and interactive websites using modern front-end frameworks like React.js, Next.js, and Tailwind CSS. 
    I also develop full-stack applications with the MERN stack and integrate backend solutions such as Supabase. 
    Additionally, I enhance user experiences with dynamic animations using GSAP and ensure projects are efficiently styled and highly maintainable.
        </p>
      </div>
    </div>
  );
}
