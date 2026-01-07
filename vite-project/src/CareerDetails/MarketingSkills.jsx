import React from 'react'
import CareerDetailsContentPart2 from './CareerDetailsContentPart2'
import Footer from '../FrontPage1/Footer';
import TopBlog from '../Blog/TopBlog';
import { useNavigate } from 'react-router-dom';
import { useRef } from "react";

function MarketingSkills() {
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
          <p className='text-[#161616] font-normal pt-2'>A Marketing Executive at UAE is responsible for planning, executing, and managing marketing strategies to promote the company’s<br/> products and services</p>
          <p className='text-[#161616] font-normal pt-2'>
            The Marketing Executive ensures that brand communication and promotional campaigns are impactful, consistent, and easy to scale.<br/> A strong commitment to collaboration, creative problem-solving, market analysis, and data-driven decision-making is essential for <br/>delivering high-quality marketing outcomes.</p>
      </div>
        {/**third */}
         <div className='third pt-4'>
                <h3 className='text-[#010101] font-semibold'>Required Skills:</h3>
                <ul className='list-disc pl-5 pt-2'>
                    <li className='text-[#161616] font-normal'>2+ years of experience in Ability to clearly convey ideas through written, verbal, and visual communication.</li>
                    <li className='text-[#161616] font-normal'>Thinking of innovative ideas for campaigns, branding, and promotions.</li>
                    <li className='text-[#161616] font-normal'>Understanding customer behavior, market trends, and competitor strategies.</li>
                    <li className='text-[#161616] font-normal'>Basic understanding of social media, SEO, email marketing, and online advertising.</li>
                    <li className='text-[#161616] font-normal'>Creating engaging content such as posts, blogs, ads, and promotional material.</li>
                    <li className='text-[#161616] font-normal'>Analyzing campaign performance using data to improve future strategies.</li>
                    <li className='text-[#161616] font-normal'>Working effectively with sales, design, and management teams to achieve goals.</li>
                </ul>
         </div>
        {/**fourth */}
          <div className='fourth pt-4'>
                <h3 className='text-[#010101] font-semibold' >Good to Have:</h3>
                <ul className='list-disc pl-5 pt-2'>
                    <li className='text-[#161616] font-normal'>Experience with UI/UX design tools (Figma, Photoshop)</li>
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

export default  MarketingSkills