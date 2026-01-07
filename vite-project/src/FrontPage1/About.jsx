import React from "react";

function About() {
  return (
    <>
      {/* ABOUT SECTION */}
      <div className="min-h-screen w-full bg-[#F6EFF9] px-4 md:px-16 lg:px-28 py-10">
        <h5 className="text-center text-sm md:text-base text-[#3F314C]">ABOUT</h5>

        <h2 className="text-[#031482] pt-3 text-2xl md:text-4xl font-semibold text-center leading-snug">
          Your Globally Trusted Financial <br className="hidden md:block" />
          Growth Partner
        </h2>

        {/* MAIN FLEX CONTAINER */}
        <div className="flex flex-col md:flex-row gap-10 md:gap-20 mt-10 items-center">
          
          {/* LEFT TEXT SECTION */}
          <div className="font-normal text-[#3A3A3A] leading-relaxed md:w-2/3">
            
            <p>
              <b>M/s. Umang Aggarwal & Company, Chartered Accountants,</b> was
              founded in 2023 by <b>Mr. Umang Aggarwal</b> with a vision to deliver{" "}
              <b>quality-driven, ethical, and globally benchmarked professional services.</b> 
              The firm is dedicated to supporting the financial well-being of individuals, 
              businesses, and startups — especially <b>emerging entrepreneurs in India 
              and the UAE.</b>
            </p>

            <br />

            <p>
              We aim to bridge the gap between compliance and business growth by offering{" "}
              <b>practical, technology-enabled solutions</b> in accounting, taxation, 
              and advisory. Our mission is to help startups and SMEs build strong 
              financial systems that scale confidently in today’s competitive environment.
            </p>

            <br />

            <p>
              <b>Mr. Umang Aggarwal</b> is a qualified Chartered Accountant and an active 
              member of the <b>Institute of Chartered Accountants of India (ICAI)</b>. 
              He also holds <b>Bachelor’s degrees in Law and Commerce</b>, giving him a 
              strong multidisciplinary foundation spanning <b>direct & indirect taxation, 
              international business structuring, and startup advisory</b>. This enables 
              the firm to provide <b>end-to-end financial guidance across borders.</b>
            </p>
          </div>

          {/* RIGHT IMAGE SECTION */}
          <div className="md:w-1/3 flex justify-center">
            <img
              src="./fab00ccb8dd3993e5d200ec88d085ebde465b7b1 (1).png"
              alt="About"
              className="w-64 md:w-full max-w-sm rounded-lg object-cover shadow-md"
            />
          </div>

        </div>
      </div>
    </>
  );
}

export default About;
