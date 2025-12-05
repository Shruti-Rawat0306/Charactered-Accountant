import React from 'react'

function TopPart1() {
  return (
    <>
            <div className='absolute h-90 w-full bg-[#F6EFF9] flex gap-20 pt-8'>
                <div className='leftside flex gap-30 '>
                  <ul className='ml-12' >
                    <li className='text-[#04137D] text-xl font-medium'>Blog</li>
                    <li className='text-[#212121] font-medium mt-3'>Audit & Assurance Services</li>
                    <li className='text-[#212121] font-medium mt-2'>Audit & Assurance Services</li>
                    <li className='text-[#212121] font-medium mt-2'>Audit & Assurance Services</li>
                    <li className='text-[#212121] font-medium mt-2'>Audit & Assurance Services</li>
                    <li className='text-[#212121] font-medium mt-2'>Audit & Assurance Services</li>
                    <li className='text-[#212121] font-medium mt-2'>Audit & Assurance Services</li>
                    <li className='text-[#04137D] mt-2'>See more</li>
                  </ul>
                   <ul>
                    <li className='text-[#04137D] text-xl font-medium'>Resources</li>
                    <li className='text-[#212121] font-medium mt-3'>Audit & Assurance Services</li>
                    <li className='text-[#212121] font-medium mt-2'>Audit & Assurance Services</li>
                    <li className='text-[#212121] font-medium mt-2'>Audit & Assurance Services</li>
                    <li className='text-[#212121] font-medium mt-2'>Audit & Assurance Services</li>
                    <li className='text-[#212121] font-medium mt-2'>Audit & Assurance Services</li>
                    <li className='text-[#212121] font-medium mt-2'>Audit & Assurance Services</li>
                    <li className='text-[#04137D] mt-2'>See more</li>
                  </ul>
                </div>
                <div className='rightside'>
                   <div className='upperside flex gap-8'>
                    <img className='h-35 w-60' src="../../public/009533ddb18880647940253fa905f2a8d6a3a95e.jpg" alt="" />
                      <div>
                        <h2>19 Jan 2022 .30 mins</h2>
                        <h1>Migrating to Linear 101</h1>
                        <p className='text-[#667085]'>Linear helps streamline software<br/> projects, sprints, tasks, and bug<br/>tracking. Here's how to get...</p>
                      </div>
                  </div>

                   <div className='lowerside flex gap-8 mt-4'>
                    <img className='h-35 w-60' src="../../public/c220b565fba3f3369a85cb9bd4d04bf17c85be21 (1).jpg" alt="" />
                      <div>
                        <h2>19 Jan 2022 .30 mins</h2>
                        <h1>Building your API Stack</h1>
                        <p className='text-[#667085]'>The rise of RESTful APIs has been met <br/>by a rise in tools for creating, testing<br/> and manag....</p>
                      </div>
                   </div>
                </div>
            </div>
    </>
  )
}

export default TopPart1