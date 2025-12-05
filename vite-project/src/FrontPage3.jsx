import React from 'react'
import AboutTopPart from './About/AboutTopPart'
import About from './FrontPage1/About'
import Achievements from './FrontPage1/Achievements'
import Testimonial from './FrontPage1/Testimonial'
import FAQ from './FrontPage1/FAQ'
import Footer from './FrontPage1/Footer'

function FrontPage3() {
  return (
    <>
   <AboutTopPart/>
   <div className='h-full w-full bg-[#F6EFF9]'>
   <About/>
    <div className='relative w-[900px] h-[300px] mx-auto bg-[#5520FF] rounded-xl overflow-hidden mb-20'>
  {/* Top-left image */}
  <img
    src="./b5357229cb62c07cf85d58a5e0c3a7aefdb4f6df (4).png"
    alt=""
    className="absolute top-[-30px] left-[-30px] w-[300px] h-[120px]"
  />
   {/*Content on middle**/}
     <div>
        <h4 className='text-[#F1F1F1] font-normal text-m text-center pt-18'>Our Philosophy</h4>
        <p className='text-[#FFFFFF] font-bold text-3xl text-center pt-4'>Deliver reliable solutions, uphold professional<br/> ethics, and build long-term trust through<br/> measurable value.</p>
     </div>
  {/* Bottom-right image */}
  <img
    src="./b5357229cb62c07cf85d58a5e0c3a7aefdb4f6df (4).png"
    alt=""
    className="absolute bottom-[-30px] right-[-30px] w-[300px] h-[120px]"
  />
</div>
   {/**Mission */}
   <div className='flex pl-45 pb-12'>
    <div className='leftside'>
        <img className='width-[400px] h-[300px]' src="./dfc82169447f9e11ce33f325ca765f8c7b4b9396 (1).png" alt="" /></div>
    <div className='rightside pl-18'>
        <h1 className='text-[#04137D] font-bold text-2xl mt-18'>Our Mission</h1>
        <p className='text-[#010101] font-normal pt-4'>To empower businesses and startups in <b>India and the UAE</b><br/> with reliable, technology-driven accounting, tax, and advisory<br/> services that foster compliance, financial stability, and long-<br/>term growth.</p>
        <p className='text-[#010101] font-normal pt-4'>We strive to simplify complex financial regulations through <br/>transparent guidance, timely support, and unwavering<br/> professional integrity.</p>
    </div>
   </div>
   </div>

     <div className='h-120 w-full bg-[#FDFFFE] flex pl-30 pt-14'> 
        <div className='leftside pt-14'>
            <h3 className='text-[#04137D] font-bold  text-2xl'>Our Vision</h3>
            <p className='text-[#010101] pt-4'>To be a <b>trusted global accounting and advisory partner</b><br/> recognized for quality, ethics, and innovation — enabling<br/> entrepreneurs to focus on growth while we safeguard their<br/> financial foundation.</p>
            <p className='text-[#010101] pt-3'>We aspire to bridge the gap between <b>Indian expertise and<br/> international business opportunities</b>, helping startups<br/> expand confidently across borders.</p>
        </div>
       <div className="relative w-[400px] h-[330px] mx-auto">
  {/* First image (top-right) */}
  <img
    src="./329ff3fdc2f8f67accf96b8359cde22877f6abd0.png"
    alt=""
    className="w-[350px] h-[220px] absolute top-0 right-0 z-10"
  />

  {/* Second image (bottom-left, overlaps first) */}
  <img
    src="../public/910fafd8ef9f60d82a724f311dbdf9d4ee6f1010.png"
    alt=""
    className="w-[350px] h-[220px] absolute bottom-[-30px] left-[-30px] z-20"
  />
</div>
     </div>
     <Achievements/>
     <Testimonial/>
      {/**Frequently Asked Questions */}
      <div className="min-h-screen w-full bg-[#F6EFF9] pb-24">
        <h3 className="text-center pt-8 text-[#3F314C] font-400">Frequently Asked Question</h3>
        <h1 className="text-center pt-3 pb-3 text-4xl text-[#04137D] font-bold">Everything You Need to Know</h1>
        <FAQ/>
        <FAQ/>
        <FAQ/>
        <FAQ/>
        <FAQ/>
        <FAQ/>
      </div>
    <Footer/>
   </>
  )
}

export default FrontPage3