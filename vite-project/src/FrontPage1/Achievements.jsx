import React from "react";

function Achievements() {
  return (
    <>
      {/* Achievements Section */}
      <div className="w-full bg-[#FAFAFA] py-12 px-4">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">

          {/* Left Side */}
          <div className="lg:w-1/3">
            <h1 className="text-[#04137D] text-2xl sm:text-3xl md:text-4xl font-bold">
              Our Achievements
            </h1>

            <p className="text-[#3F314C] mt-4 text-sm sm:text-base">
              From industry recognitions to community milestones —
              every award and event reminds us of our dedication to
              quality, innovation, and impact.
            </p>
          </div>

          {/* Right Side */}
          <div className="lg:w-2/3 flex flex-col gap-8">

            {/* Card */}
            <div className="flex flex-col sm:flex-row gap-6 items-start">
              <img
                src="./dd8dfa18466e2a26fd5920350a7f6dd4fdadbb99 (1).png"
                alt=""
                className="w-full sm:w-60 h-48 object-cover rounded-lg"
              />

              <div className="flex flex-col justify-center">
                <h3 className="text-[#101828] font-semibold">
                  Business Growth Summit
                </h3>

                <p className="text-[#484C55] text-sm mt-2">
                  The rise of RESTful APIs has been met by a rise
                  in tools for creating and testing.
                </p>

                <h3 className="text-[#6941C6] text-sm mt-2">
                  June 2023
                </h3>
              </div>
            </div>

            {/* Card */}
            <div className="flex flex-col sm:flex-row gap-6 items-start">
              <img
                src="./dd8dfa18466e2a26fd5920350a7f6dd4fdadbb99 (1).png"
                alt=""
                className="w-full sm:w-60 h-48 object-cover rounded-lg"
              />

              <div className="flex flex-col justify-center">
                <h3 className="text-[#101828] font-semibold">
                  Business Growth Summit
                </h3>

                <p className="text-[#484C55] text-sm mt-2">
                  The rise of RESTful APIs has been met by a rise
                  in tools for creating and testing.
                </p>

                <h3 className="text-[#6941C6] text-sm mt-2">
                  Aug 2023
                </h3>
              </div>
            </div>

            {/* Card */}
            <div className="flex flex-col sm:flex-row gap-6 items-start">
              <img
                src="./dd8dfa18466e2a26fd5920350a7f6dd4fdadbb99 (1).png"
                alt=""
                className="w-full sm:w-60 h-48 object-cover rounded-lg"
              />

              <div className="flex flex-col justify-center">
                <h3 className="text-[#101828] font-semibold">
                  Business Growth Summit
                </h3>

                <p className="text-[#484C55] text-sm mt-2">
                  The rise of RESTful APIs has been met by a rise
                  in tools for creating and testing.
                </p>

                <h3 className="text-[#6941C6] text-sm mt-2">
                  Oct 2023
                </h3>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default Achievements;
