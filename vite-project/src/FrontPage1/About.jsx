import React from 'react'

function About() {
  return (
    <>
     {/**About */}
      <div className="min-h-screen w-full bg-[#F6EFF9]">
        <h5 className="text-center pt-10">ABOUT</h5>
        <h2 className="text-[#031482] pt-3 text-4xl text-center">
          Your Globally Trusted Financial <br />
          Growth Partner
        </h2>
        <div className="flex gap-20 mt-7">
          <div className="leftside font-normal pl-30 pt-3 mb-20">
            <p>
              <b>M/s. Umang Aggarwal & Company, Chartered Accountants,</b> was
              founded in 2023 by{" "}
              <b>
                <b>Mr.</b>
                <br /><b>Umang Aggarwal</b>
              </b>{" "}
              with a vision to deliver<b>quality-driven, ethical, and globally
              <br />
              benchmarked professional services.</b> The firm is dedicated to
              supporting the financial
              <br /> well-being of individuals, businesses, and startups — with
              a special focus on <b>emerging
              <br />
              entrepreneurs in India and the UAE.</b>
            </p>{" "}
            <br />
            <p>
              We aim to bridge the gap between compliance and business growth by
              offering <b>practical,
              <br /> technology-enabled solutions</b> in accounting, taxation, and
              advisory. Our goal is to help <br />
              startups and SMEs build strong financial systems that can scale
              confidently in today’s
              <br />
              competitive and regulated business environment.
            </p>
            <br />
            <p>
             <b>Mr. Umang Aggarwal</b> is a qualified Chartered Accountant and an
              active member of <br />
              the<b>Institute of Chartered Accountants of India (ICAI)</b>. He also
              holds <b>Bachelor’s degrees in <br /> Law and Commerce</b>, providing a
              multidisciplinary foundation across taxation, corporate
              <br /> law, and financial management. His expertise spans<b> direct
              and indirect taxation,
              <br /> international business structuring, and startup advisory</b>,
              allowing the firm to provide
              <br /> <b>end-to-end financial guidance for growing enterprises
              across borders</b>.
            </p>
          </div>
          <div className="rightside h-40 w-70">
            <img
              src="./fab00ccb8dd3993e5d200ec88d085ebde465b7b1 (1).png"
              alt=""
            />
          </div>
        </div>
      </div>
    
    </>
  )
}

export default About