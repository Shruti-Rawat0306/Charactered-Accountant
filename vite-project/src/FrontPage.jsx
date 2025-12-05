import { NavLink } from "react-router-dom";
import FAQ from "./FrontPage1/FAQ";
import Testimonial from "./FrontPage1/Testimonial";
import Services from "./FrontPage1/Services";
import About from "./FrontPage1/About";
import Contact from "./FrontPage1/Contact";
import Achievements from "./FrontPage1/Achievements";
import Blog from "./FrontPage1/Blog";
import Footer from "./FrontPage1/Footer";
import TopPart1 from "./TopPart/TopPart1";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

function FrontPage() {
  const imgRef = useRef(null);
  const topRef = useRef(null);

  // Sidebar State
  const [open, setOpen] = useState(false);

  // Image fade animation
  const imageClick = () => {
    gsap.to(imgRef.current, {
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    });
  };

  // Slide TopPart on load
  useEffect(() => {
    gsap.set(topRef.current, { y: -200, opacity: 0 });
  }, []);

  const handleNavClick = () => {
    gsap.to(topRef.current, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power3.out",
    });

    gsap.to(imgRef.current, {
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    });
  };

  return (
    <>
      {/* HERO SECTION */}
      <div className="relative min-h-screen w-full bg-[#031482] overflow-hidden">

        {/* TOP NAVBAR */}
        <nav className="flex items-center justify-between px-4 md:px-10 py-4 bg-[#04137D] relative z-30">
          {/* Logo */}
          <img src="./image.png" className="w-12 h-10" alt="logo" />

          {/* Desktop Menu */}
          <ul className="hidden md:flex text-white font-medium gap-8">
            <li><NavLink to="/" onClick={handleNavClick}>Home</NavLink></li>
            <li><NavLink to="/services">Services</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/resources">Resources</NavLink></li>
            <li><NavLink to="/career">Career</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>

          {/* Desktop Inquire Button */}
          <button className="hidden md:block text-white border-2 border-white py-1 px-4 rounded-2xl">
            Inquire
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-white text-3xl"
          >
            ☰
          </button>
        </nav>

        {/* MOBILE SIDEBAR OVERLAY */}
        <div
          className={`fixed inset-0 bg-black bg-opacity-50 z-20 transition-opacity duration-300 ${
            open ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
          onClick={() => setOpen(false)}
        ></div>

        {/* MOBILE SIDEBAR */}
        <div
          className={`fixed top-0 left-0 h-full w-64 bg-[#04137D] text-white z-40 transform transition-transform duration-300 ${
            open ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex justify-between items-center px-4 py-4 border-b border-white/20">
            <h2 className="text-xl font-semibold">Menu</h2>
            <button onClick={() => setOpen(false)} className="text-2xl">✕</button>
          </div>

          <ul className="flex flex-col gap-6 text-lg px-6 mt-6">
            <li><NavLink to="/" onClick={() => setOpen(false)}>Home</NavLink></li>
            <li><NavLink to="/services" onClick={() => setOpen(false)}>Services</NavLink></li>
            <li><NavLink to="/about" onClick={() => setOpen(false)}>About</NavLink></li>
            <li><NavLink to="/resources" onClick={() => setOpen(false)}>Resources</NavLink></li>
            <li><NavLink to="/career" onClick={() => setOpen(false)}>Career</NavLink></li>
            <li><NavLink to="/contact" onClick={() => setOpen(false)}>Contact</NavLink></li>
          </ul>

          <button className="mx-6 mt-10 w-[120px] py-2 border border-white rounded-xl">
            Inquire
          </button>
        </div>

        {/* ANIMATED TOP SECTION */}
        <div ref={topRef}>
          <TopPart1 />
        </div>

        {/* BACKGROUND IMAGE */}
        <img
          ref={imgRef}
          onClick={imageClick}
          src="./b5357229cb62c07cf85d58a5e0c3a7aefdb4f6df (3).png"
          className="absolute bottom-0 left-0 w-full h-full object-cover opacity-20"
          alt="bg"
        />

        {/* HERO TEXT */}
        <div className="relative z-10 text-center px-4 md:px-0 mt-20 md:mt-36">
          <h2 className="text-white text-3xl md:text-5xl font-bold leading-snug">
            Trusted Chartered Accountants <br className="hidden md:block" />
            for Your Business Growth
          </h2>

          <h4 className="text-white mt-4 md:mt-6 text-sm md:text-lg max-w-2xl mx-auto">
            From tax filings to audits, we simplify finance and compliance for individuals and enterprises.
          </h4>

          <div className="mt-6 flex flex-col md:flex-row justify-center gap-4 md:gap-6">
            <button className="text-white border-2 rounded-3xl border-white py-2 px-6 w-full md:w-[150px]">
              Book Consultation
            </button>
            <button className="text-white border-2 rounded-3xl border-white py-2 px-6 w-full md:w-[150px]">
              Explore Services
            </button>
          </div>
        </div>
      </div>

      {/* OTHER SECTIONS */}
      <About />
      <Services />
      <Blog />
      <Achievements />
      <Contact />
      <Testimonial />

      {/* FAQ SECTION */}
      <div className="min-h-screen w-full bg-[#F6EFF9] pb-24 px-4">
        <h3 className="text-center pt-8 text-[#3F314C] text-lg">Frequently Asked Questions</h3>
        <h1 className="text-center pt-2 pb-4 text-2xl md:text-4xl text-[#04137D] font-bold">
          Everything You Need to Know
        </h1>

        <div className="max-w-4xl mx-auto">
          <FAQ /><FAQ /><FAQ /><FAQ /><FAQ /><FAQ />
        </div>
      </div>

      <Footer />
    </>
  );
}

export default FrontPage;
