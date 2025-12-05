import React from 'react'

function QueTopPart3() {
  return (
    <>
    <div className='h-115 w-120 bg-[#E8E8EB] ml-100 rounded-xl pl-10'>
       <div>
        <h1 className='text-[#010101] font-bold text-xl text-center pt-2'>Have a Question?</h1>
        <p className='text-[#010101] font-medium text-center text-sm pt-1'>Fill out the form below and our team will get back to you<br/> within 24 hours.</p>
       </div>
       <div>
        <form action="" className="flex flex-col gap-4 pt-1">
                {/* First Row */}
                <div className="flex gap-8">
                  <div className="flex flex-col">
                    <label className='text-sm'>First Name</label>
                    <input type="text" className="w-[180px] h-8 bg-[#F6F8FF]" />
                  </div>
                  <div className="flex flex-col">
                    <label className='text-sm'>Last Name</label>
                    <input type="text" className="w-[180px] h-8 bg-[#F6F8FF]" />
                  </div>
                </div>

                {/* Second Row */}
                <div className="flex gap-8">
                  <div className="flex flex-col">
                    <label className='text-sm'>Email</label>
                    <input
                      type="email"
                      className="w-[180px] h-8 bg-[#F6F8FF]"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className='text-sm'>Contact</label>
                    <input
                      type="number"
                      className="w-[180px] h-8 bg-[#F6F8FF]"
                    />
                  </div>
                </div>
                {/**Third row */}
                <div className="flex gap-8">
                  <div className="flex flex-col">
                    <label className='text-sm'>What service are you interested in</label>
                    <input
                      type="text"
                      placeholder="Select Services"
                      className="w-[390px] pl-2 h-8 bg-[#F6F8FF]"
                    />
                  </div>
                </div>
                {/**Fourth row */}
                <div className="flex gap-8">
                  <div className="flex flex-col">
                    <label className='text-sm'>Message</label>
                    <textarea
                      className="w-[390px] h-[80px] p-3 bg-[#F6F8FF] rounded-lg"
                      placeholder="Write Message"
                    ></textarea>
                    <button className="w-[390px] h-8 bg-[#3E2D94] mt-3 text-[#FFFFFF]">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
       </div>
    </div>
    </>
  )
}

export default QueTopPart3