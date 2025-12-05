import React from 'react'

function Contact() {
  return (
    <>
     {/**Contact us */}
      <div className="min-h-screen w-full bg-[#F6EFF9] flex flex-col items-center pt-10">
        {/* Top Text */}
        <div className="first">
          <p className="text-[#3F314C] text-sm tracking-wide text-center">
            SOLUTION FOR EVERY NEED
          </p>
        </div>

        <div className="second mt-2">
          <p className="font-bold text-[#04137D] text-4xl text-center">
            Contact us for every financial <br />
            question you have
          </p>
        </div>

        {/* White Box with Blue Box Inside */}
        <div className="relative mt-10 pb-12">
          <div className="mx-auto h-[480px] w-[1040px] bg-white rounded-3xl shadow-lg flex items-start justify-start p-10">
            <div className="leftside">
              <div className="relative bg-[#3E2D94] h-[420px] w-[400px] -mt-2 -ml-3">
                <h1 className="text-[#FAF7FF] font-bold  pt-5 text-3xl pl-8">Contact Information</h1>
                <p className='text-[#EAE8F4] font-normal pl-8 pt-3'>
                   Reach out to our CA experts for any tax, audit, or <br />
                  registration service.
                </p>
                <div className="flex pl-8 gap-1 pt-7">
                <img  className="w-5 h-5 mt-1" src="./bxs_phone-call.png" alt="" /> <p className='text-[#FFFFFF] font-normal'>+91 76680 89802</p>
                </div>
                <p className="pl-14 text-[#FFFFFF] font-normal">+91 99274 68646</p>
                <div className="flex pl-8 gap-1 pt-4">
                  <img className="w-5 h-5 mt-1" src="./ic_sharp-email.png" alt="" />
                <h2 className='text-[#FFFFFF] font-normal'>umang.uacca@gmail.com</h2>
                </div>
                 <div className="flex pl-8 gap-1 pt-4">
                  <img className="h-5 mt-1 w-5" src="./Vector.png" alt="" />
                <h2 className='text-[#FFFFFF] font-normal'>
                  First Floor, Haripuram, GMS Road,
                  <br /> Dehradun, Uttarakhand – 248001
                </h2>
                </div>
                <img
                  className="absolute right-0 bottom-0 h-[130px] w-auto"
                  src="./Group 1000001767.png"
                  alt=""
                />
              </div>
            </div>
            <div className="rightside pl-8">
              <form action="" className="flex flex-col gap-4">
                {/* First Row */}
                <div className="flex gap-8">
                  <div className="flex flex-col">
                    <label>First Name</label>
                    <input type="text" className="w-[250px] h-8 bg-[#F6F8FF]" />
                  </div>
                  <div className="flex flex-col">
                    <label>Last Name</label>
                    <input type="text" className="w-[250px] h-8 bg-[#F6F8FF]" />
                  </div>
                </div>

                {/* Second Row */}
                <div className="flex gap-8">
                  <div className="flex flex-col">
                    <label>Email</label>
                    <input
                      type="email"
                      className="w-[250px] h-8 bg-[#F6F8FF]"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label>Contact</label>
                    <input
                      type="number"
                      className="w-[250px] h-8 bg-[#F6F8FF]"
                    />
                  </div>
                </div>
                {/**Third row */}
                <div className="flex gap-8">
                  <div className="flex flex-col">
                    <label>What service are you interested in</label>
                    <input
                      type="text"
                      placeholder="Select Services"
                      className="w-[530px] pl-2 h-8 bg-[#F6F8FF]"
                    />
                  </div>
                </div>
                {/**Fourth row */}
                <div className="flex gap-8">
                  <div className="flex flex-col">
                    <label>Message</label>
                    <textarea
                      className="w-[530px] h-[120px] p-3 bg-[#F6F8FF] rounded-lg"
                      placeholder="Write Message"
                    ></textarea>
                    <button className="w-[530px] h-8 bg-[#3E2D94] mt-3 text-[#FFFFFF]">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact