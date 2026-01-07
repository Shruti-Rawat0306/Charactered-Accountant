import React from 'react'
import CareerDetailsContentPart2 from './CareerDetailsContentPart2'
import Footer from '../FrontPage1/Footer';
import TopBlog from '../Blog/TopBlog';
import { useNavigate } from 'react-router-dom';
import { useRef } from "react";

function DesignSkills() {
    const navigate = useNavigate();
     const dropdownRef = useRef(null);

     const handleScroll = () => {
    dropdownRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
    <TopBlog/>
    <div className='min-h-screen w-full bg-[#F6EFF9] pl-28 pb-20'>
     <div className='pt-10'><h3 className='cursor-pointer' onClick={()=>navigate('/career')} >BACK</h3></div>
     <div className='first'>
        <div>
          <h3 className='text-[#03137F] pt-8 font-semibold text-4xl'>Design Program Manager, Platform</h3>
        </div>
        
        <div className='flex gap-[600px]'>
       <h6 className='pt-3 text-[#4b4747]'>Dehradun,Uttrakhand .Gurugram,UttarPradesh</h6>
              <div className=''><button className='text-[#F6EFF9] bg-[#03137F] font-semibold h-8 w-22 rounded-3xl' onClick={handleScroll} >Apply</button></div>
        </div>
     </div>
    {/**second */}
      <div className='second pt-4'>
          <h3 className='text-[#010101] font-semibold'>Job Brief:</h3>
          <p className='text-[#161616] font-normal pt-2'>A Design Professional at UAE is responsible for creating creative, functional, and visually appealing designs that support the<br/> company’s brand, products, and digital presence. The role focuses on translating ideas and requirements into effective design<br/> solutions that enhance user engagement and brand recognition.</p>
          <p className='text-[#161616] font-normal pt-2'>
            The Design professional ensures visual consistency, usability, and innovation across all design deliverables. Strong creativity,<br/> collaboration, and attention to detail are essential for producing high-quality design outcomes.</p>
      </div>
        {/**third */}
         <div className='third pt-4'>
                <h3 className='text-[#010101] font-semibold'>Required Skills:</h3>
                <ul className='list-disc pl-5 pt-2'>
                    <li className='text-[#161616] font-normal'>2+ years of experience in Ability to clearly convey ideas through written, verbal, and visual communication.</li>
                    <li className='text-[#161616] font-normal'>Strong understanding of design fundamentals such as color theory, typography, layout, and composition.</li>
                    <li className='text-[#161616] font-normal'>Ability to clearly communicate ideas through visual and creative storytelling.</li>
                    <li className='text-[#161616] font-normal'>Proficiency in design tools such as Figma, Adobe Photoshop, Illustrator, or similar tools.</li>
                    <li className='text-[#161616] font-normal'>Creating engaging content such as posts, blogs, ads, and promotional material.</li>
                    <li className='text-[#161616] font-normal'>Analyzing campaign performance using data to improve future strategies.</li>
                    <li className='text-[#161616] font-normal'>Working effectively with sales, design, and management teams to achieve goals.</li>
                </ul>
         </div>
        {/**fourth */}
          <div className='fourth pt-4'>
                <h3 className='text-[#010101] font-semibold' >Good to Have:</h3>
                <ul className='list-disc pl-5 pt-2'>
                    <li className='text-[#161616] font-normal'>2+ years of experience in design (graphic, UI/UX, visual, or related fields).</li>
                    <li className='text-[#161616] font-normal'>Understanding of REST API patterns</li>
                    <li className='text-[#161616] font-normal'>Exposure to Blazor framework</li>
                </ul>
          </div>

          {/**fifth */}
            <div className='fifth pt-4'>
              <h3 className='text-[#010101] font-semibold'>Responsibilities:</h3>
              <ul  className='list-disc pl-5 pt-2'>
                <li className='text-[#161616] font-normal'>Analyze project requirements, identify challenges, and suggest improvements</li>
                <li className='text-[#161616] font-normal'>Write clean, maintainable code following best practices (linting, code reviews, Git workflows)</li>
                <li className='text-[#161616] font-normal'>Ensure accessibility compliance (WCAG/ARIA)</li>
                <li className='text-[#161616] font-normal'>Use AI-powered tools to enhance development, testing, and UI prototyping</li>
                <li className='text-[#161616] font-normal'>Participate in sprint reviews and effectively present deliverables to clients</li>
              </ul>
            </div>
    </div>
    <div ref={dropdownRef}>
    <CareerDetailsContentPart2/>
    </div>
    <Footer/>
    </>
  )
}

export default DesignSkills;