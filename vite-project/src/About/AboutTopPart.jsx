import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import QueTopPart3 from "../TopPart/QueTopPart3";
import { gsap } from "gsap";

function AboutTopPart() {
  const [open, setOpen] = useState(false);

  // ✅ Inquire modal state and ref
  const inquireRef = useRef(null);
  const [showInquire, setShowInquire] = useState(false);

  // Animate Inquire modal
  useEffect(() => {
    if (showInquire && inquireRef.current) {
      gsap.fromTo(
        inquireRef.current,
        { opacity: 0, scale: 0.85 },
        { opacity: 1, scale: 1, duration: 0.4, ease: "power3.out" }
      );
    }
  }, [showInquire]);

  return (
    <>
      {/* NAVBAR */}
      <nav className="flex items-center justify-between px-4 md:px-10 py-4 bg-[#04137D] relative z-30">
        {/* Logo */}
        <img src="./image.png" className="w-12 h-10" alt="logo" />

        {/* Desktop Menu */}
        <ul className="hidden md:flex text-white font-medium gap-8">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/services">Services</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/resources">Resources</NavLink></li>
          <li><NavLink to="/career">Career</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>

        {/* Desktop Inquire */}
        <button
          onClick={() => setShowInquire(true)}
          className="hidden md:block text-white border-2 hover:bg-white hover:text-black border-white py-1 px-4 rounded-2xl"
        >
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

      {/* OVERLAY */}
      <div
        className={`fixed inset-0 bg-black/50 z-20 transition-opacity duration-300 ${
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
        {/* Header */}
        <div className="flex justify-between items-center px-4 py-4 border-b border-white/20">
          <h2 className="text-xl font-semibold">Menu</h2>
          <button onClick={() => setOpen(false)} className="text-2xl">✕</button>
        </div>

        {/* Links */}
        <ul className="flex flex-col gap-6 text-lg px-6 mt-6">
          <li><NavLink to="/" onClick={() => setOpen(false)}>Home</NavLink></li>
          <li><NavLink to="/services" onClick={() => setOpen(false)}>Services</NavLink></li>
          <li><NavLink to="/about" onClick={() => setOpen(false)}>About</NavLink></li>
          <li><NavLink to="/resources" onClick={() => setOpen(false)}>Resources</NavLink></li>
          <li><NavLink to="/career" onClick={() => setOpen(false)}>Career</NavLink></li>
          <li><NavLink to="/contact" onClick={() => setOpen(false)}>Contact</NavLink></li>
        </ul>

        {/* Mobile Inquire */}
        <button
          onClick={() => {
            setShowInquire(true);
            setOpen(false);
          }}
          className="mx-6 mt-10 w-[120px] py-2 border border-white rounded-xl"
        >
          Inquire
        </button>
      </div>

      {/* ✅ Inquire Modal */}
      {showInquire && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
          onClick={() => setShowInquire(false)}
        >
          <div
            ref={inquireRef}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            onClick={(e) => e.stopPropagation()}
          >
            <QueTopPart3 />
          </div>
        </div>
      )}
    </>
  );
}

export default AboutTopPart;
