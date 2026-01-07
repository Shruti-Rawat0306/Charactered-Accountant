import React from 'react'

function Testimonial() {
  return (
    <>
      {/* Testimonial */}
      <div className="min-h-screen w-full bg-[#FFFFFF] pt-10 pb-18 px-4 md:px-16">
        <h3 className="text-center text-[#3F314C]">TESTIMONIAL</h3>
        <h1 className="text-center text-[#04137D] font-bold text-3xl md:text-5xl mt-2">
          What Our Clients Says
        </h1>

        {/* Testimonial Cards Container */}
        <div className="flex flex-col md:flex-row gap-4 mt-10">

          {/* Column 1 */}
          <div className="flex flex-col gap-4 md:pl-7">
            <div className="bg-gradient-to-r from-[#e0d7e0] to-[#6c74b3] rounded-2xl p-4">
              <p className="text-sm md:text-base">
                Lorem ipsum dolor sit amet, consectetur<br/> adipiscing elit, sed do eiusmod tempor incididunt <br/>
                ut labore et dolore magna aliqua. Ut enim ad <br/> minim verste wrt abore et dolore magna aliqua.<br/> Ut enim ad minim verste wrt
              </p>
              <p className="pt-3 text-[#04137D]">- Robert Fox, Redtape</p>
            </div>
            <div className="bg-gradient-to-r from-[#e0d7e0] to-[#6c74b3] rounded-2xl p-4">
              <p className="text-sm md:text-base">
                Lorem ipsum dolor sit amet, consectetur<br/> adipiscing elit, sed do eiusmod tempor incididunt<br/>
                ut labore et dolore magna aliqua. Ut enim ad<br/> minim verste wrt abore et dolore magna aliqua.<br/>
                Ut enim ad minim verste wrtelit, sed do eiusmod<br/> tempor incididunt ut labore et dolore magna<br/> aliqua. Ut enim ad minim verste wrt abore et <br/>dolore magna aliqua. Ut enim ad minim verste<br/> wrt
              </p>
              <p className="pt-2 text-[#04137D]">- Robert Fox, Redtape</p>
            </div>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-4 pt-4">
            <div className="bg-gradient-to-r from-[#e0d7e0] to-[#6c74b3] rounded-2xl p-4">
              <p className="text-sm md:text-base">
                Lorem ipsum dolor sit amet, consectetur <br/>adipiscing elit, sed do eiusmod tempor incididunt<br/>
                ut labore et dolore magna aliqua. Ut enim ad<br/> minim verste wrt abore et dolore magna aliqua.<br/>
                Ut enim ad minim verste wrtelit, sed do eiusmod<br/> tempor incididunt ut labore et dolore magna<br/>
                aliqua. Ut enim ad minim verste wrt abore et<br/> dolore magna aliqua. Ut enim ad minim verste<br/> wrt
              </p>
              <p className="pt-2 text-[#04137D]">- Robert Fox, Redtape</p>
            </div>
            <div className="bg-gradient-to-r from-[#e0d7e0] to-[#6c74b3] rounded-2xl p-4">
              <p className="text-sm md:text-base">
                Lorem ipsum dolor sit amet, consectetur <br/>adipiscing elit, sed do eiusmod tempor incididunt<br/>
                ut labore et dolore magna aliqua. Ut enim ad<br/> minim verste wrt abore et dolore magna aliqua.<br/>
                Ut enim ad minim verste wrt
              </p>
              <p className="pt-3 text-[#04137D]">- Robert Fox, Redtape</p>
            </div>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-4 pt-4">
            <div className="bg-gradient-to-r from-[#e0d7e0] to-[#6c74b3] rounded-2xl p-4">
              <p className="text-sm md:text-base">
                Lorem ipsum dolor sit amet, consectetur<br/> adipiscing elit, sed do eiusmod tempor incididunt<br/>
                ut labore et dolore magna aliqua. Ut enim ad <br/> minim verste wrt abore et dolore magna aliqua.<br/> Ut enim ad minim verste wrt
              </p>
              <p className="pt-3 text-[#04137D]">- Robert Fox, Redtape</p>
            </div>
            <div className="bg-gradient-to-r from-[#e0d7e0] to-[#6c74b3] rounded-2xl p-4">
              <p className="text-sm md:text-base">
                Lorem ipsum dolor sit amet, consectetur<br/> adipiscing elit, sed do eiusmod tempor incididunt<br/>
                ut labore et dolore magna aliqua. Ut enim ad<br/> minim verste wrt abore et dolore magna aliqua.<br/>
                Ut enim ad minim verste wrtelit, sed do eiusmod<br/> tempor incididunt ut labore et dolore magna<br/>
                aliqua. Ut enim ad minim verste wrt abore et<br/> dolore magna aliqua. Ut enim ad minim verste<br/> wrt
              </p>
              <p className="pt-2 text-[#04137D]">- Robert Fox, Redtape</p>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Testimonial
