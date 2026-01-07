import React from 'react'
import ServicesTopPart from './Services/ServicesTopPart'
import Services from './FrontPage1/Services'
import Testimonial from './FrontPage1/Testimonial'
import FAQ from './FrontPage1/FAQ'
import Footer from './FrontPage1/Footer'

function FrontPage2() {
  return (
    <>
      <ServicesTopPart />

      {/* HERO CONTENT */}
      <div className="w-full bg-[#F6EFF9] pb-8 px-4 md:px-16">
        <h2 className="pt-8 text-sm text-[#454545]">BACK</h2>

        {/* TOP SECTION */}
        <div className="flex flex-col md:flex-row gap-10 pt-10 items-center">
          <div className="md:w-1/2">
            <h4 className="text-[#454545] text-sm">
              — Trusted Representation in Complex Tax Matters
            </h4>

            <h1 className="text-[#04137D] text-2xl md:text-3xl font-bold mt-2">
              Litigation Support in Direct & <br className="hidden md:block" /> Indirect Taxes
            </h1>

            <p className="text-[#222222] text-sm mt-4">
              At M/s. Umang Aggarwal & Company, we provide end-to-end litigation
              and dispute resolution support in both Direct and Indirect Tax matters.
            </p>

            <p className="text-[#222222] text-sm mt-3">
              Our approach combines in-depth technical expertise and strategic advisory
              to secure favorable outcomes.
            </p>
          </div>

          <img
            className="w-full md:w-[520px] max-w-full"
            src="./dfc82169447f9e11ce33f325ca765f8c7b4b9396.png"
            alt=""
          />
        </div>

        {/* LOWER SECTION */}
        <div className="flex flex-col md:flex-row gap-12 pt-16 flex-wrap">
          
          {/* LEFT MENU */}
          <ul className="md:w-1/4 text-sm space-y-2 shrink-0">
            <li>— Introduction</li>
            <li className="text-[#04137D]">— Our Services Include</li>
            <li>— Why Choose Us</li>
            <li>— Who We Serve</li>
            <li>— Our Services</li>
            <li>— Testimonials</li>
            <li>— FAQs</li>
          </ul>

          {/* RIGHT CONTENT */}
          <div className="md:w-3/4 pl-50 mx-50 w-full">
            <h2 className="text-center text-2xl md:text-3xl font-semibold pb-8">
              Our Services Include
            </h2>

            {/* CARDS GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
              {[
                ["Appeals & Representation", "Drafting and filing appeals before the Commissioner (Appeals), Income Tax Appellate Tribunal (ITAT), and GST Appellate Authorities, supported by comprehensive legal and factual submissions."],
                ["Search & Seizure Cases", "Advisory and representation in cases arising from Search & Seizure (Income Tax) and Survey operations, including preparation of replies, reconciliations, and legal strategy formulation."],
                ["GST SCN & Audit Defense", "Preparation and filing of replies to GST audit queries, departmental notices, and adjudication proceedings with strong documentation and legal backing."],
                ["Tax Dispute Strategy", "End-to-end dispute management from pre-assessment consultation to final appellate representation, ensuring compliance, transparency, and minimized exposure to penalties."],
                ["Assessment Proceedings", "Handling scrutiny and assessment cases under the Income Tax Act and GST law with precision, ensuring proper representation and documentation at every stage."]
              ].map(([title, desc], i) => (
                <div key={i} className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-[#04137D] font-bold">{title}</h3>
                  <p className="text-sm mt-4">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* WHY CHOOSE US */}
        <div className="max-w-5xl mx-auto pt-20 space-y-16">
          {[1, 2].map((_, i) => (
            <div
              key={i}
              className={`flex flex-col md:flex-row items-center gap-6 md:gap-10 ${
                i % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              <img
                className="w-full md:w-[300px] max-w-full"
                src="./ef2e1599479b097ba886de0329583de3409ab3ef.png"
                alt=""
              />
              <div className="text-center md:text-left">
                <h5 className="text-[#04137D] font-semibold">Why Choose Us</h5>
                {[
                  "Deep expertise in Direct & Indirect Tax laws",
                  "Representation at departmental & tribunal levels",
                  "Law + accounting + strategy approach",
                  "Personalized & confidential service"
                ].map((text, idx) => (
                  <p key={idx} className="flex gap-2 text-sm mt-2 justify-center md:justify-start">
                    <img className="w-4 h-4 mt-1" src="./Vector (1).png" alt="" />
                    {text}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <Services />
      <Testimonial />

      {/* FAQ */}
      <div className="bg-[#F6EFF9] py-24 px-4 md:px-16">
        <h3 className="text-center text-[#3F314C]">Frequently Asked Questions</h3>
        <h1 className="text-center text-3xl md:text-4xl font-bold text-[#04137D] mt-3">
          Everything You Need to Know
        </h1>

        <div className="mt-10 space-y-4 max-w-3xl mx-auto">
          <FAQ /><FAQ /><FAQ /><FAQ /><FAQ /><FAQ />
        </div>
      </div>

      <Footer />
    </>
  )
}

export default FrontPage2
