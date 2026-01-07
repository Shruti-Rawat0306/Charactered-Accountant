import React, { useState, useRef } from "react";
import FAQ from "../FrontPage1/FAQ";
import Footer from "../FrontPage1/Footer";
import TopBlog from "../Blog/TopBlog";
import TemplateForResource from "../Template/TemplateForResource";

function ResourceDetails() {
  const [showTemplate, setShowTemplate] = useState(false); // modal state
  const templateRef = useRef(null);

  return (
    <>
      <TopBlog />

      <div className="w-full bg-[#F6EFF9] px-4 sm:px-6 md:px-12 lg:px-20 py-10">

        {/* ================= HERO SECTION ================= */}
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">

          {/* LEFT */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h1 className="text-[#010101] text-2xl sm:text-3xl md:text-4xl font-semibold">
              Free Marketing Plan <br /> Template
            </h1>

            <p className="text-[#101828] text-sm sm:text-base mt-4 leading-relaxed">
              Outline your company's marketing strategy in one simple,
              coherent plan.
            </p>

            {/* Hero Button opens Template modal */}
            <button
              className="bg-[#03137F] px-6 sm:px-8 py-2 sm:py-3 rounded-xl mt-6 text-white text-sm sm:text-base hover:bg-[#04137D] transition"
              onClick={() => setShowTemplate(true)}
            >
              Download for free
            </button>
          </div>

          {/* RIGHT */}
          <div className="w-full lg:w-1/2 mt-6 lg:mt-0">
            <img
              src="../../public/9ca412fa840de131974162b09d68033e23a850b5 (2).jpg"
              alt="template"
              className="w-full max-w-lg mx-auto rounded-xl"
            />
          </div>
        </div>

        {/* ================= OTHER SECTIONS ================= */}
        <div className="mt-20">
          <p className="text-center text-[#010101] text-lg sm:text-xl md:text-3xl font-semibold mb-6">
            Outline your marketing strategy<br/> in a simple template.
          </p>

          <p className="px-34 text-[#101828] font-semibold text-sm sm:text-base mb-4 leading-relaxed">
            With so many different marketing and advertising channels, it's a smart move to equip your marketing team with a plan for what to do and why. 
            That's why we've built a marketing plan for your business. You can use it to lay out your budget, team structure, and channels of choice.
          </p>

          <p className="px-34 text-[#101828] font-semibold text-sm sm:text-base mb-8">
            Download the template now to get started.
          </p>

          <p className="text-[#3F314C] font-light text-center text-lg sm:text-xl mb-2">Frequently Asked Questions</p>  
          <p className="text-[#04137D] text-3xl sm:text-4xl font-bold text-center mb-6">Everything You Need to Know</p>

          <div className="space-y-4 max-w-3xl mx-auto">
            <FAQ />
            <FAQ />
            <FAQ />
            <FAQ />
            <FAQ />
            <FAQ />
          </div>
        </div>
      </div>

      <Footer />

      {/* ================= TEMPLATE MODAL ================= */}
      {showTemplate && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-4 sm:px-6 bg-black/40 overflow-y-auto"
          onClick={() => setShowTemplate(false)}
        >
          <div
            ref={templateRef}
            className="bg-transparent rounded-xl w-full max-w-2xl relative"
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
          >
            {/* Close Button */}
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-2xl font-bold z-50"
              onClick={() => setShowTemplate(false)}
            >
              &times;
            </button>

            {/* Show TemplateForResource inside modal */}
            <TemplateForResource />
          </div>
        </div>
      )}
    </>
  );
}

export default ResourceDetails;
