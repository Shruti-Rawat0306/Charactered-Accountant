import React from 'react'

function Services() {
  return (
    <>
     {/**Services */}
      <div className="min-h-screen w-full mb-14">
        <h2 className="text-3xl font-semibold text-center text-[#04137D] mt-6">
          Services
        </h2>
        <h5 className="text-center text-[#3F314C] mt-2">
          With years of experience and a result-focused approach, we empower
          <br /> business to navigate complexity and achieve their goals.
        </h5>
        <div className="topimages flex gap-3 mt-5 ml-10 mr-10">
           <div className='relative'>
          <img
            className="w-150 h-100"
            src="./bd0f2cc4c0858bddb94ca671d00388a20c432f83.png"
            alt="" />
             <p className='absolute bottom-8 left-6 text-white text-sm font-semibold b flex'>Start-up & Growth<br/> Advisory <img className='w-4 h-4 mt-1 ml-[200px] font-semibold' src="../../public/Frame (5).png" alt="" /></p>
          </div>
          <div className='relative'>
          <img
            className="w-150 h-100"
            src="./ad60a57cb58a2ff282cc717f75e9f821fdd62ff5.png"
            alt=""
          /> <p className='absolute bottom-8 left-6 text-white text-sm font-semibold b flex'>Taxation & Compliance<br/> Consulting<img className='w-4 h-4 mt-1  ml-[200px] font-semibold' src="../../public/Frame (5).png" alt="" /> </p>
           </div>

           <div className='relative'>
          <img
            className="w-150 h-100"
            src="./9a0d4ba6404721925e17165c763a31baf24f78ba.png"
            alt=""
          /> <p className='absolute bottom-8 left-6 text-white text-sm font-semibold b flex'>Accounting & Financial<br/> Management<img className='w-4 h-4 mt-1  ml-[200px] font-semibold' src="../../public/Frame (5).png" alt="" /></p>
          </div>
        </div>
         <div className="bottomimages flex gap-3 ml-10 mt-3">
          <div className='relative'>
          <img
            className="w-151 h-100"
            src="./e0d19892bf34cd57a60690cbb6b70978a7067457.png"
            alt=""
          /> <p className='absolute bottom-8 left-6 text-white text-sm font-semibold b flex'>Corporate & Legal Solutions <img className='w-4 h-4 mt-1  ml-[350px] font-semibold' src="../../public/Frame (5).png" alt="" /> </p>
          </div>

          <div className='relative'>
          <img
            className="w-151 h-100"
            src="./bcd953023b9edff270376ec09e05f6a9609e8a22.png"
            alt=""
          /> <p className='absolute bottom-8 left-6 text-white text-sm font-semibold b flex'>Industry-Focused Solutions<img className='w-4 h-4 mt-1 ml-[350px] font-semibold' src="../../public/Frame (5).png" alt="" /></p>
          </div>
        </div>
      </div>
    
    </>
  )
}

export default Services