import React from 'react'
import CareerRole from './CareerRole'

function CareerContent() {
  return (
    <>
    <div className='min-h-screen w-full bg-[#F6EFF9]'>
        <div className='first flex justify-around pt-10'>
        <div className='leftside'>
            <div>
                <h1 className='text-[#04137D] text-3xl font-semibold pt-20'>Join Our Team</h1>
                <p className='text-[#010101] text-m font-normal pt-4'>At UAC, we believe that great ideas come from passionate people. We're <br/>not
                 just building products or services - we're building a culture of <br/>innovation,growth,and collaboration. If you're driven by curiosity,<br/>creativity,and impact, you'll feel right at home here.</p>
            </div>
         </div>
         <div className='rightside'>
             <img className='w-100 h-80' src="../../public/c220b565fba3f3369a85cb9bd4d04bf17c85be21 (1).jpg" alt="" />
         </div>
         </div>

         <div className='second pt-18 pb-6'>
               <div className='flex justify-between'>
                    <div className='pl-25 text-[#04137D] text-3xl font-semibold'><h3>Open Roles at UAC</h3></div>        
                    <div className='flex mr-24 pt-1'>
                      <input className="relative w-[200px] p-1 border border-gray-300 rounded-lg shadow-sm  placeholder-gray-400" type="text" placeholder='All Job Category' />
                      <img className='absolute pl-42 py-2' src="../../public/ri_arrow-drop-down-line.png" alt="" />
                      </div>       
              </div>                   
         </div>
             
                <CareerRole/>
                <CareerRole/>
            
        <div className="third flex mt-3 justify-center pb-30">
      <div className='flex gap-3'>
    <div className="w-[360px] bg-[#F6EFF9] border-2 border-[#7985DB] rounded-2xl p-6">
     <h3 className="text-xl font-semibold text-[#010101] mb-2">Sr. Accountant</h3>
     <p className="text-[#373636] text-sm mb-4">
      A Front-End Engineer at UAC is responsible for
      developing and implementing user-facing components in customized websites and web,
      implementing user-facing components in customized websites and web implementing
      user-facing components in customized websites and web.
     </p>
     <h2 className="text-[#7985DB] font-semibold cursor-pointer hover:underline">
      View Detail
    </h2>
  </div>
   <div className="w-[360px] bg-[#F6EFF9] border-2 border-[#7985DB] rounded-2xl p-6">
     <h3 className="text-xl font-semibold text-[#010101] mb-2">Sr. Accountant</h3>
     <p className="text-[#373636] text-sm  mb-4">
      A Front-End Engineer at UAC is responsible for
      developing and implementing user-facing components in customized websites and web,
      implementing user-facing components in customized websites and web implementing
      user-facing components in customized websites and web.
     </p>
     <h2 className="text-[#7985DB] font-semibold cursor-pointer hover:underline">
      View Detail
    </h2>
  </div>
   <div className="w-[360px] bg-[#F6EFF9] border-2 border-[#7985DB] rounded-2xl p-6" >
     <h3 className="text-xl font-semibold text-[#010101] mb-2">Sr. Accountant</h3>
     <p className="text-[#373636] text-sm mb-4">
      A Front-End Engineer at UAC is responsible for
      developing and implementing user-facing components in customized websites and web,
      implementing user-facing components in customized websites and web implementing
      user-facing components in customized websites and web.
     </p>
     <h2 className="text-[#7985DB] font-semibold cursor-pointer hover:underline">
      View Detail
    </h2>
  </div>
</div>
</div>
        
    </div>
    </>
  )
}

export default CareerContent