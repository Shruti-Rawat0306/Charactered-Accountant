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
import QueTopPart3 from "./TopPart/QueTopPart3";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { useNavigate } from "react-router-dom";

function FrontPage() {
  const imgRef = useRef(null);
  const topRef = useRef(null);
  const servicesRef = useRef(null);
 const navigate = useNavigate();

  const handleExploreServices = () => {
  servicesRef.current.scrollIntoView({
    behavior: "smooth",
  });
};


  // ✅ Ref and state for Inquire modal
  const inquireRef = useRef(null);
  const [showInquire, setShowInquire] = useState(false);

  // Sidebar State
  const [open, setOpen] = useState(false);

  const imageClick = () => {
    gsap.to(imgRef.current, {
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    });
  };

  // Initial position of TopPart1
  useEffect(() => {
    gsap.set(topRef.current, { y: -120, opacity: 0 });
  }, []);

  const handleNavClick = () => {
    gsap.to(topRef.current, {
      y: -70,
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
      {/* HERO SECTION */}
      <div className="relative min-h-screen w-full bg-[#031482] overflow-hidden">

        {/* NAVBAR */}
        <nav className="flex items-center justify-between px-4 md:px-10 py-4 bg-[#04137D] relative z-30">
          <img src="./image.png" className="w-12 h-10" alt="logo" />

          <ul className="hidden md:flex text-white font-medium gap-8">
            <li><NavLink to="/" onClick={handleNavClick}>Home</NavLink></li>
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

          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-white text-3xl"
          >
            ☰
          </button>
        </nav>

        {/* MOBILE OVERLAY */}
        <div
          className={`fixed inset-0 bg-black bg-opacity-50 z-20 transition-opacity duration-300 ${open ? "opacity-100 visible" : "opacity-0 invisible"}`}
          onClick={() => setOpen(false)}
        ></div>

        {/* MOBILE SIDEBAR */}
        <div
          className={`fixed top-0 left-0 h-full w-64 bg-[#04137D] text-white z-40 transform transition-transform duration-300 ${open ? "translate-x-0" : "-translate-x-full"}`}
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

        {/* TOP PART + HERO CONTENT */}
        <div className="relative z-10 flex flex-col items-center">
          <div ref={topRef} className="w-full">
            <TopPart1 />
          </div>

          <div className="text-center px-4 md:px-0 py-30">
            <h2 className="text-white text-3xl md:text-5xl font-bold leading-snug">
              Trusted Chartered Accountants <br className="hidden md:block" />
              for Your Business Growth
            </h2>

            <h4 className="text-white mt-4 md:mt-6 text-sm md:text-lg max-w-2xl mx-auto">
              From tax filings to audits, we simplify finance and compliance for individuals and enterprises.
            </h4>

            <div className="mt-6 flex flex-col md:flex-row justify-center gap-4 md:gap-6">
              <button onClick={() => navigate("/book-consultation")} className="text-white border-2 rounded-3xl border-white py-2 hover:bg-white hover:text-black px-6 w-full md:w-[150px]">
                Book Consultation
              </button>
              <button onClick={handleExploreServices} className="text-white border-2 rounded-3xl border-white py-2 px-6 w-full md:w-[150px] hover:bg-white hover:text-black cursor-pointer">
                Explore Services
              </button>
            </div>
          </div>
        </div>

        {/* BACKGROUND IMAGE */}
        <img
          ref={imgRef}
          onClick={imageClick}
          src="./b5357229cb62c07cf85d58a5e0c3a7aefdb4f6df (3).png"
          className="absolute bottom-0 left-0 w-full h-full object-cover opacity-20"
          alt="bg"
        />
      </div>

      {/* OTHER SECTIONS */}
      <About />
      <div ref={servicesRef}>
         <Services />
      </div>

      <Blog />
      <Achievements />
      <Contact />
      <Testimonial />

      {/* FAQ */}
      <div className="min-h-screen w-full bg-[#F6EFF9] pb-24 px-4">
        <h3 className="text-center pt-8 text-[#3F314C] text-lg">
          Frequently Asked Questions
        </h3>
        <h1 className="text-center pt-2 pb-4 text-2xl md:text-4xl text-[#04137D] font-bold">
          Everything You Need to Know
        </h1>

        <div className="max-w-4xl mx-auto">
          <FAQ /><FAQ /><FAQ /><FAQ /><FAQ /><FAQ />
        </div>
      </div>

      <Footer />

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

export default FrontPage;
