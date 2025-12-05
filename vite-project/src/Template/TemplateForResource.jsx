import React from 'react'

function TemplateForResource() {
  return (
    <>
       <div className='h-100 w-120 bg-[#f2f7f2] ml-100 rounded-xl pl-10'>
       <div>
        <h1 className='text-[#010101] font-bold text-2xl text-center pt-8'>Get Your Free Marketing <br/>Plan Template</h1>
        <p className='text-[#010101] font-normal text-center text-sm pt-3'>Enter your details below and we will send the download <br/>link straight to your inbox</p>
       </div>
       <div>
        <form action="" className="flex flex-col gap-4 pt-3">
                {/* First Row */}
                <div className="flex gap-8">
                  <div className="flex flex-col">
                    <label className='text-sm'>Full Name</label>
                    <input type="text" placeholder='John' className="w-[400px] h-8 bg-[#d1d6e7]  pl-2 rounded-sm mt-2" />
                  </div>
                </div>

                {/* Second Row */}
                <div className="flex gap-8">
                  <div className="flex flex-col">
                    <label className='text-sm'>Email</label>
                    <input
                      type="email" placeholder='abc@gmail.com'
                      className="w-[400px] h-8 bg-[#d1d6e7] pl-2 rounded-sm mt-2"
                    />
                  </div>
                </div>
                   <button className='bg-[#3E2D94] font-semibold text-m w-[400px] h-10 mt-3 text-white'>Send Me The Template</button>
              </form>
       </div>
    </div>
    </>
  )
}

export default TemplateForResource