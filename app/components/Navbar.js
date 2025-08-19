"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react"; // hamburger & close icons
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const showNavbar = ["/"].includes(pathname);

  if (!showNavbar) return null;

  const [show, setShow] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  // hide navbar on scroll down
  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShow(false); // hide on scroll down
      } else {
        setShow(true); // show on scroll up
      }
      lastScrollY = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed w-full z-50 transition-transform duration-300 "
      style={{ transform: show ? "translateY(0)" : "translateY(-100%)" }}
    >
      {/* Top Yellow Bar */}
      <div className="w-full bg-[#d2e823] text-[#254f1a] text-center py-2  text-sm md:text-base pb-[20px]">
        Time to convert clicks into customers.{" "}
        <span className="underline cursor-pointer">
          Linktree's new growth tools are here.
        </span>
      </div>

      {/* Main Navbar */}
      <nav className="flex items-center justify-between bg-white px-6 py-3 md:px-12 mx-4  mt-5  md:mx-8  rounded-[99px]">
        {/* Logo */}
        
          <div className="flex items-center">
              <Link href="/">
            <img
              src="https://cdn.prod.website-files.com/666255f7f2126f4e8cec6f8f/66634daccb34e6d65a41c76d_download.svg"
              alt="Linktree"
              className="h-6 md:h-8"
            />
            </Link>

          </div>
        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-6 text-black">
          <a href="#" className="hover:underline">Products</a>
          <a href="#" className="hover:underline">Templates</a>
          <a href="#" className="hover:underline">Marketplace</a>
          <a href="#" className="hover:underline">Learn</a>
          <a href="#" className="hover:underline">Pricing</a>
        </div>

        {/* Buttons */}
        <div className="hidden lg:flex items-center space-x-4">
          {/* Use Link with className instead of nesting a <button> to avoid passing client-side handlers as props */}
          <Link href="/login" className="bg-[#eff0ec] text-black px-4 py-2 rounded-lg font-semibold inline-block">
            Log in
          </Link>
          <Link href="/signup" className="bg-black text-white px-4 py-2 rounded-full font-semibold inline-block">
            Sign up free
          </Link>
        </div>


        {/* Mobile Hamburger */}
        <div className="lg:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X className="text-white" /> : <Menu className="text-white" />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="bg-[#1e4216] text-white flex flex-col items-center space-y-4 py-4 lg:hidden">
          <a href="#" onClick={() => setMenuOpen(false)}>Products</a>
          <a href="#" onClick={() => setMenuOpen(false)}>Templates</a>
          <a href="#" onClick={() => setMenuOpen(false)}>Marketplace</a>
          <a href="#" onClick={() => setMenuOpen(false)}>Learn</a>
          <a href="#" onClick={() => setMenuOpen(false)}>Pricing</a>
          <button className="bg-[#eff0ec] text-black px-4 py-2 rounded-full font-semibold">
            Log in
          </button>
          <button className="bg-black text-white px-4 py-2 rounded-full font-semibold">
            Sign up free
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
