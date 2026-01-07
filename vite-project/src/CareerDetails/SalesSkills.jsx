import React from 'react'
import CareerDetailsContentPart2 from './CareerDetailsContentPart2'
import Footer from '../FrontPage1/Footer';
import { useNavigate } from 'react-router-dom';
import TopBlog from '../Blog/TopBlog';
import { useRef } from 'react';

function SalesSkills() {
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  const handleScroll = () => {
    dropdownRef.current.scrollIntoView({ behavior: "smooth" });
  };  
  return (
    <>
    <TopBlog/>
    <div className='min-h-screen w-full bg-[#F6EFF9] pl-28 pb-20'>
     <div className='pt-10'><h3 onClick={() => navigate("/career")} className="cursor-pointer">BACK</h3></div>
     <div className='first'>
        <div>
          <h3 className='text-[#03137F] pt-8 font-semibold text-4xl'>Design Program Manager, Platform</h3>
        </div>
        
        <div className='flex gap-[600px]'>
       <h6 className='pt-3 text-[#4b4747]'>Dehradun,Uttrakhand.Gurugram,UttarPradesh</h6>
              <div className=''><button className='text-[#F6EFF9] bg-[#03137F] font-semibold h-8 w-22 rounded-3xl' onClick={handleScroll} >Apply</button></div>
        </div>
     </div>
    {/**second */}
      <div className='second pt-4'>
          <h3 className='text-[#010101] font-semibold'>Job Brief:</h3>
          <p className='text-[#161616] font-normal pt-2'>A Sales Executive at UAE is responsible for driving revenue growth by identifying new business opportunities, building <br/> strong client relationships, and closing sales deals. The role focuses on understanding customer needs and offering <br/>suitable products or services to meet business goals.</p>
          <p className='text-[#161616] font-normal pt-2'>
           The Sales Executive ensures consistent communication with clients, effective sales strategies, and accurate reporting.<br/> Strong interpersonal skills, negotiation ability, and a results-driven mindset are essential for achieving high-quality<br/> sales outcomes.</p>
      </div>
        {/**third */}
         <div className='third pt-4'>
                <h3 className='text-[#010101] font-semibold'>Required Skills:</h3>
                <ul className='list-disc pl-5 pt-2'>
                    <li className='text-[#161616] font-normal'>2+ years of experience in sales, business development, or client-facing roles.</li>
                    <li className='text-[#161616] font-normal'>Strong verbal and written communication skills to confidently present products and services.</li>
                    <li className='text-[#161616] font-normal'>Ability to understand customer needs and convert leads into successful sales</li>
                    <li className='text-[#161616] font-normal'>Knowledge of sales techniques, lead generation, and customer relationship management (CRM).</li>
                    <li className='text-[#161616] font-normal'>Ability to negotiate pricing, contracts, and close deals effectively.</li>
                    <li className='text-[#161616] font-normal'>Understanding of market trends, competitors, and customer behavior.</li>
                    <li className='text-[#161616] font-normal'>Ability to work collaboratively with marketing, product, and management teams.</li>
                </ul>
         </div>
        {/**fourth */}
          <div className='fourth pt-4'>
                <h3 className='text-[#010101] font-semibold' >Good to Have:</h3>
                <ul className='list-disc pl-5 pt-2'>
                    <li className='text-[#161616] font-normal'>Experience with CRM tools (Salesforce, HubSpot, Zoho, etc.).</li>
                    <li className='text-[#161616] font-normal'>Basic understanding of digital marketing and lead generation strategies</li>
                    <li className='text-[#161616] font-normal'>Familiarity with sales reporting and analytics tools.</li>
                    <li className='text-[#161616] font-normal'>Exposure to B2B or B2C sales environments.</li>
                </ul>
          </div>

          {/**fifth */}
            <div className='fifth pt-4'>
              <h3 className='text-[#010101] font-semibold'>Responsibilities:</h3>
              <ul  className='list-disc pl-5 pt-2'>
                <li className='text-[#161616] font-normal'>Identify and develop new business opportunities through research and outreach.</li>
                <li className='text-[#161616] font-normal'>Build and maintain strong, long-term relationships with clients.</li>
                <li className='text-[#161616] font-normal'>Present, promote, and sell company products or services to potential customers.</li>
                <li className='text-[#161616] font-normal'>Meet or exceed sales targets and performance goals.</li>
                <li className='text-[#161616] font-normal'>Maintain accurate records of sales activities and customer interactions.</li>
                <li className='text-[#161616] font-normal'>Collaborate with internal teams to improve sales strategies and customer experience.</li>
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

export default  SalesSkills