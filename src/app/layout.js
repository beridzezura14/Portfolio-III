"use client";
import { useState, useEffect } from "react";
import Menu from "./Menu";
import Footer from "./Footer";
import "./globals.css";

export default function RootLayout({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // simulate font loading / initial setup
    const timer = setTimeout(() => setIsLoading(false), 500); // ან რეალურად font load event-ს მიჰყევი
    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en">
      <body>
        {isLoading ? (
          <div className="fixed inset-0 flex items-center justify-center bg-black text-white z-50">
            Loading...
          </div>
        ) : (
          <>
            <Menu />
            {children}
            <Footer />
          </>
        )}
      </body>
    </html>
  );
}