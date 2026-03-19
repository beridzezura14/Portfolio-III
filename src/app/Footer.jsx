// import { FiArrowUp } from "react-icons/fi";

export const socialLinks = [
  {
    id: 1,
    name: "Facebook",
    url: "https://facebook.com",
  },
  {
    id: 2,
    name: "Instagram",
    url: "https://instagram.com",
  },
  {
    id: 3,
    name: "Twitter",
    url: "https://twitter.com",
  },
  {
    id: 4,
    name: "LinkedIn",
    url: "https://linkedin.com",
  },
];

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16 xl:py-30">
      <div className="w-[90%] max-w-[1150px] mx-auto flex flex-col items-center gap-6 border-b border-gray-600 pb-16">
        <h4>READY TO START A PROJECT?</h4>
        <h2 className="text-5xl md:text-8xl">
          LET{"'"}S{" "}
          <span className="text-[#e6371d] forum-regular">CONNECT</span>
        </h2>

        <div className="flex gap-2 text-white ">
          {socialLinks.map((item, index) => (
            <span key={item.id} className="flex items-center">
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#e6371d] transition share-tech uppercase text-sm"
              >
                {item.name}
              </a>
              {index !== socialLinks.length - 1 && (
                <span className="ml-2">-</span>
              )}
            </span>
          ))}
        </div>
      </div>
      <div className="w-[90%] max-w-[1150px] pt-16 lg:pt-6 mx-auto flex flex-col items-center gap-1 text-sm text-gray-300 lg:flex-row lg:justify-between">
        <p className="text-[16px]">© 2026. All Rights Reserved Zura</p>
        <div className="hidden lg:block">
          <a
            href="#hero"
            className="text-white text-3xl hover:text-white transition py-1 px-3 bg-[#e6371d] rounded-lg ml-14" 
          >
             ↑
          </a>
        </div>

        <div>
          <a className="text-[16px] mr-2" href="/terms-and-conditions">
            Terms & Conditions
          </a>
          |
          <a className="text-[16px] ml-2" href="/privacy-policy">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
