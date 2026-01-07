import React, { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { gsap } from "gsap";
import QueTopPart3 from "../TopPart/QueTopPart3";

function ServicesTopPart() {
  const [open, setOpen] = useState(false);
  const [showInquire, setShowInquire] = useState(false);
  const inquireRef = useRef(null);

  const handleInquireClick = () => {
    setShowInquire(true);

    setTimeout(() => {
      gsap.fromTo(
        inquireRef.current,
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.4, ease: "power3.out" }
      );
    }, 0);
  };

  return (
    <>
      {/* NAVBAR */}
      <div className="relative w-full bg-[#04137D] z-30">

        {/* TOP BAR */}
        <nav className="flex items-center justify-between px-4 md:px-10 py-4">
          <img src="./image.png" className="w-12 h-10" alt="logo" />

          <ul className="hidden md:flex text-white font-medium gap-8">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/services">Services</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/resources">Resources</NavLink></li>
            <li><NavLink to="/career">Career</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>

          {/* DESKTOP INQUIRE */}
          <button
            onClick={handleInquireClick}
            className="hidden md:block text-white border-2 hover:bg-white hover:text-black border-white px-4 py-1 rounded-2xl"
          >
            Inquire
          </button>

          {/* MOBILE MENU */}
          <button
            className="md:hidden text-white text-3xl"
            onClick={() => setOpen(true)}
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
          <div className="flex items-center justify-between px-4 py-4 border-b border-white/20">
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

          {/* MOBILE INQUIRE */}
          <button
            onClick={handleInquireClick}
            className="mx-6 mt-10 py-2 w-[120px] border border-white rounded-xl"
          >
            Inquire
          </button>
        </div>
      </div>

      {/* INQUIRE MODAL */}
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

export default ServicesTopPart;
