"use client";

import { useRef, useState, useEffect } from "react";
import { FiSend } from "react-icons/fi";
import emailjs from "@emailjs/browser";
import {
  FaFacebookF,
  FaInstagram,
  FaGithub,
  FaLinkedinIn,
  FaWhatsapp
} from "react-icons/fa";

export default function Contact() {
  const form = useRef();
  const contactSection = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [showWhatsApp, setShowWhatsApp] = useState(false);
  const [consent, setConsent] = useState(false); // GDPR consent

  const phone = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;

  const sendWhatsApp = () => {
    if (!phone) return;
    const message = `Hello! I am interested in contacting you.`;
    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${phone}?text=${encodedMessage}`;
    window.open(url, "_blank");
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (!consent) {
      alert("Please consent to data processing before sending.");
      return;
    }

    setLoading(true);
    setSuccess(false);
    setError(false);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          setSuccess(true);
          form.current.reset();
          setConsent(false);
        },
        () => {
          setLoading(false);
          setError(true);
        }
      );
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setShowWhatsApp(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (contactSection.current) observer.observe(contactSection.current);
    return () => {
      if (contactSection.current) observer.unobserve(contactSection.current);
    };
  }, []);

  return (
    <section ref={contactSection} className="bg-[#111111] relative">
      <div className="w-[90%] max-w-[1150px] mx-auto py-20 xl:pt-20 xl:pb-2 text-white">
        {/* Header */}
        <div className="flex justify-between items-center border-b border-gray-600 pb-5 mb-8">
          <h3 className="uppercase text-[14px] tracking-widest lg:text-[18px] play-regular">
            [Contact]
          </h3>
          <h3 className="uppercase text-[14px] tracking-widest lg:text-[18px] play-regular">
            [Send me message]
          </h3>
        </div>

        {/* Title */}
        <div className="pt-2 mb-10">
          <h2 className="text-5xl md:text-8xl xl:text-9xl text-center google-sans-flex">
            Contact <span className="forum-regular text-[#ff4025]">Me</span>
          </h2>
        </div>

        <div className="lg:flex align-start justify-start xl:my-30">
          {/* Info section */}
          <div className="mb-12 grid gap-5 lg:gap-0 border-b border-gray-600 pb-10 lg:w-1/2 lg:mb-0 lg:border-b-0 lg:border-r-2 lg:pr-6">
            <h3 className="text-[23px] xl:text-[27px] font-semibold mb-4 decoration-[#ff4025] underline decoration-3">
              Feel free to get in touch with me. I am always open to discussing new projects or creative ideas.
            </h3>
            <div>
              <h4 className="text-xl font-bold mb-2 text-[#ff4025]">STAY UP TO DATE</h4>
              <p>+995 558 29 43 64</p>
              <p>zuraberidze12@gmail.com</p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-2 text-[#ff4025]">ADDRESS</h4>
              <p>Tbilisi, Georgia</p>
            </div>
            <div className="flex gap-3 mt-6">
              <a className="flex items-center justify-center w-10 h-10 bg-[#ff4025] rounded-full text-white hover:opacity-80"><FaFacebookF /></a>
              <a className="flex items-center justify-center w-10 h-10 bg-[#ff4025] rounded-full text-white hover:opacity-80"><FaInstagram /></a>
              <a className="flex items-center justify-center w-10 h-10 bg-[#ff4025] rounded-full text-white hover:opacity-80"><FaGithub /></a>
              <a className="flex items-center justify-center w-10 h-10 bg-[#ff4025] rounded-full text-white hover:opacity-80"><FaLinkedinIn /></a>
            </div>
          </div>

          {/* Contact Form */}
          <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-6 rounded-2xl shadow-lg lg:w-1/2 lg:ml-6">
            <input type="text" name="name" placeholder="Your Name" className="w-full px-4 py-3 border-b border-[#e6371d] text-white focus:outline-none focus:border-[#ffffff]" required />
            <input type="email" name="email" placeholder="Your Email" className="w-full px-4 py-3 border-b border-[#e6371d] text-white focus:outline-none focus:border-[#ffffff]" required />
            <input type="text" name="subject" placeholder="Subject" className="w-full px-4 py-3 border-b border-[#e6371d] text-white focus:outline-none focus:border-[#ffffff]" required />
            <textarea name="message" placeholder="Your Message" rows="6" className="w-full px-4 py-3 border-b border-[#e6371d] text-white focus:outline-none focus:border-[#ffffff]" required />

            {/* Hidden time input */}
            <input type="hidden" name="time" value={new Date().toLocaleString()} />

            {/* GDPR consent */}
            <label className="flex items-start gap-2 mt-2">
              <input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} className="accent-[#ff4025] mt-1.5" />
              I consent to my data being processed according to the privacy policy.
            </label>

            <button type="submit" className="bg-[#242424] p3 w-[130px] h-[130px] rounded-full hover:scale-105 transition flex items-center justify-center gap-3 cursor-pointer" disabled={loading}>
              {loading ? "Sending..." : (
                <>
                  Send <FiSend className="text-[#e6371d] text-xl rotate-20" />
                </>
              )}
            </button>

            {success && <p className="text-green-400 mt-2">Message sent successfully!</p>}
            {error && <p className="text-red-500 mt-2">Something went wrong. Please try again.</p>}
          </form>
        </div>
      </div>

      {/* Fixed WhatsApp button */}
      {showWhatsApp && phone && (
        <button onClick={sendWhatsApp} className="fixed bottom-8 right-8 z-50 bg-[#25D366] w-16 h-16 rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition">
          <FaWhatsapp className="text-4xl" />
        </button>
      )}
    </section>
  );
}