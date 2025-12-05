import React from 'react'

function Achievements() {
  return (
    <>
     {/**Our Achievers */}
      <div className="min-h-screen w-full bg-[#FAFAFA] flex gap-38 pt-18">
        {/* Left Side */}
        <div className="ml-10">
          <h1 className="text-[#04137D] text-4xl font-bold">
            Our Achievements
          </h1>
          <p className="font-normal text-[#3F314C] pt-4">
            From industry recognitions to community milestones — <br />
            every award and event reminds us of our dedication to <br />
            quality, innovation, and impact.
          </p>
        </div>

        {/* Right Side (All Cards) */}
        <div className="rightside flex flex-col gap-6 pb-20">
          {/* Card 1 */}
          <div className="flex gap-5 items-start">
            <img
              className="w-100 h-60"
              src="./dd8dfa18466e2a26fd5920350a7f6dd4fdadbb99 (1).png"
              alt=""
            />
            <div className="py-20">
              <h3 className="text-[#101828] font-semibold">
                Business Growth Summit
              </h3>
              <p className="text-[#484C55] font-normal text-sm">
                The rise of RESTful APIs has been met
                <br />
                by a rise in tools for creating, testing
              </p>
              <h3 className="text-[#6941C6] text-sm">June 2023</h3>
            </div>
          </div>

          <div className="flex gap-5 items-start">
            <img
              className="w-100 h-60"
              src="./dd8dfa18466e2a26fd5920350a7f6dd4fdadbb99 (1).png"
              alt=""
            />
            <div className="py-20">
              <h3 className="text-[#101828] font-semibold">
                Business Growth Summit
              </h3>
              <p className="text-[#484C55] font-normal text-sm">
                The rise of RESTful APIs has been met
                <br />
                by a rise in tools for creating, testing
              </p>
              <h3 className="text-[#6941C6] text-sm">Aug 2023</h3>
            </div>
          </div>

          <div className="flex gap-5 items-start">
            <img
              className="w-100 h-60"
              src="./dd8dfa18466e2a26fd5920350a7f6dd4fdadbb99 (1).png"
              alt=""
            />
            <div className="py-20">
              <h3 className="text-[#101828] font-semibold">
                Business Growth Summit
              </h3>
              <p className="text-[#484C55] font-normal text-sm">
                The rise of RESTful APIs has been met
                <br />
                by a rise in tools for creating, testing
              </p>
              <h3 className="text-[#6941C6] text-sm">Oct 2023</h3>
            </div>
          </div>
        </div>
      </div>

    
    </>
  )
}

export default Achievements