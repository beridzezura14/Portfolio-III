
import {
  FaFacebookF,
  FaInstagram,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";
import Image from "next/image";


export default function Hero() {
    return (
        <section
            id="hero"
            className="h-[90dvh] pl-8 pr-8 bg-black text-white flex"
        >
            <div className="xl:w-full flex gap-4 items-center justify-between ">
                <div className="hidden xl:flex flex-col gap-5 text-2xl">
                    <a
                        href="https://facebook.com"
                        className="hover:text-blue-600 transition-colors duration-300"
                    >
                        <FaFacebookF />
                    </a>

                    <a
                        href="https://instagram.com"
                        className="hover:text-pink-500 transition-colors duration-300"
                    >
                        <FaInstagram />
                    </a>

                    <a
                        href="https://github.com"
                        className="hover:text-gray-800 transition-colors duration-300"
                    >
                        <FaGithub />
                    </a>

                    <a
                        href="https://linkedin.com"
                        className="hover:text-blue-500 transition-colors duration-300"
                    >
                        <FaLinkedinIn />
                    </a>
                </div>
                <div className="h-[65dvh] mb-[15vh] xl:mb-0 xl:w-250 2xl:w-280 flex flex-col item-center justify-center gap-5">
                    <div className="gravitas relative text-5xl md:text-7xl font-bold mt-5 xl:text-9xl">
                        Hi, Im <span className="text-[#ff4025]">ZURA </span> Web Developer  
                    </div>
                    <div className="text-1.5xl md:text-2xl  mt-3 text-gray-400 xl:w-150">
                        I create fast, modern and responsive websites using
                        React, Next.js and modern web technologies
                    </div> 
                <button  className="xl:hidden bg-[#ff4025] w-50 text-[18px] text-white px-7 py-3 rounded-[10px] hover:bg-[#e6371d] transition cursor-pointer">
                    Lets Talk
                </button> 
                </div>
                <div className="absolute z-10 bottom-0 left-1/2 lg:-ml-13.5 transform -translate-x-1/2 lg:translate-x-0 mb-5 xl:relative xl:left-auto xl:transform-none xl:mb-0 flex flex-col items-center gap-3 cursor-pointer ">
                    <a href="#project" className="mb-4 text-gray-400 xl:rotate-90 xl:mb-18 hover:text-[#e6371d] xl:relative transition-0.5">SCROLL DOWN</a>
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
            <div className="absolute right-12 xl:right-1/3 top-1/5 rounded-[50%] w-100 h-100 2xl:w-175 2xl:w-175 xl:top-1/5 bg-[#ff4025] opacity-10 blur-[80px]"></div>

            <div>
                {/* <h2 className="text-white">asbkahs</h2> */}
            </div>
        </section>
    );
}
