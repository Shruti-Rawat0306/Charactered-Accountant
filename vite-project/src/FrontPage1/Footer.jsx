import React from 'react'

function Footer() {
  return (
    <>
      <div className='h-80 w-full bg-[#ECF5FF] flex justify-between'>
        <div className='leftside ml-20 mt-14'>
            <img src="./Frame (4).png" alt="" />
        </div>
       
       <div className='rightside flex gap-20 mt-14'>
          <div>
            <ul>
                <li className='font-bold text-[#002656]'>Quick Links</li>
                <li className='mt-2 text-[#002755]'>Home</li>
                <li className='mt-1 text-[#002755]'>About</li>
                <li className='mt-1 text-[#002755]'>Services</li>
                <li className='mt-1 text-[#002755]'>Testimonial</li>
                <li className='mt-1 text-[#002755]'>Career</li>
            </ul>
          </div>

              <div>
                <ul>
                <li className='font-bold text-[#002656]'>Resources</li>
                <li className='mt-2 text-[#002755]'>Blog</li>
                <li className='mt-1 text-[#002755]'>Resorce Downloads</li>
            </ul>
          </div>


            <div>
            <ul>
                <li className='font-bold text-[#002656]'>Social Links</li>
                <li className='mt-2 text-[#002755]'>Instagram</li>
                <li className='mt-1 text-[#002755]'>X (Twitter)</li>
                <li className='mt-1 text-[#002755]'>Facebook</li>
                <li className='mt-1 text-[#002755]'>LinkedIn</li>
            </ul>
          </div>
            <div className='mr-23'>
            <ul>
                <li className='font-bold text-[#002656]'>Support</li>
                <li className='mt-2 text-[#002755]'>FAQ</li>
                <li className='mt-1 text-[#002755]'>Contact</li>
            </ul>
          </div>

       </div>

      </div>
    </>
  )
}

export default Footer