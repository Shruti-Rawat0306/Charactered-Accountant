import React from 'react'
import ServicesTopPart from './Services/ServicesTopPart'
import Services from './FrontPage1/Services'
import Testimonial from './FrontPage1/Testimonial'
import FAQ from './FrontPage1/FAQ'
import Footer from './FrontPage1/Footer'
function FrontPage2() {

  return (
    <>
    <ServicesTopPart/>
    <div className='min-h-screen w-full bg-[#F6EFF9] pb-4'>
    <div className='pt-10 pl-15 text-[#454545] text-sm'><h2>BACK</h2></div>
      <div className='flex pt-10 pl-15 gap-24 pb-18' >
        <div className=''>
          <h4 className='text-[#454545] text-m'>—Trusted Representation in Complex Tax Matters</h4>
          <h1 className='text-[#04137D] text-3xl font-bold mt-2'>Litigation Support in Direct & <br/>Indirect Taxes</h1>
          <p className='text-[#222222] text-m mt-3'>At M/s. Umang Aggarwal & Company,we provide end-to-end litigation<br/>and dispute resolution support in both Direct and Indirect Tax matters,<br/>ensuring our clients are well-represented before tax authorities and <br/>appeliate bodies.</p>
          <p className='text-[#222222] text-m mt-3'>Our approach combines in-depth technical expertise,strategic,advisory,<br/>and hands-on representation to secure the most favourable outcomes for <br/>individual and businesses.</p>
        </div>
        <div>
          <img className='w-140 h-80 mt-2' src="./dfc82169447f9e11ce33f325ca765f8c7b4b9396.png" alt="" />
        </div>
      </div>

      {/**Lower Part */}
        <div className='flex gap-24'>
          <div className='leftside pl-25 pt-6'>
            <ul className='text-red cursor-pointer'>
              <li className='font-normal text-sm'>— Introduction</li>
              <li className='font-normal text-sm text-[#04137D]'>— Our Services Include</li>
              <li className='font-normal text-sm'>— Why Choose Us</li>
              <li className='font-normal text-sm'>— Who We Serve</li>
              <li className='font-normal text-sm'>— Our Services</li>
              <li className='font-normal text-sm'>— Testimonials</li>
              <li className='font-normal text-sm'>— Faqs</li>
            </ul>
          </div>
          <div className='rightside pl-20'>
               <div className='text-center'><h2 className='text-[#010101] font-semibold text-3xl pb-6'>Our Services Include</h2></div>            
               <div className='flex gap-4 pt-4'>
              <div className='w-100 h-50 bg-[#FDFFFE] pt-6 pl-8'>
                <h1 className='text-[#04137D] font-bold text-xl'>Appeals & Representation</h1>
                <p className='text-sm font-normal pt-8'>Drafting and filing appeals before the Commissioner<br/> (Appeals), Income Tax Appellate Tribunal (ITAT), and<br/> GST Appellate Authorities, supported by<br/> comprehensive legal and factual submissions.</p>
              </div>
               <div className='w-100 h-50 bg-[#FDFFFE] pt-6 pl-8'>
                <h1 className='text-[#04137D] font-bold text-xl'>Search, Seizure & Survey Cases</h1>
                <p className='text-sm font-normal pt-8'>Advisory and representation in cases arising from <br/>Search & Seizure (Income Tax) and Survey operations,<br/> including preparation of replies, reconciliations, and<br/> legal strategy formulation.</p>
            </div>
            </ div>
              

              <div className='flex gap-4 pt-4'>
              <div className='w-100 h-50 bg-[#FDFFFE] pt-6 pl-8'>
                <h1 className='text-[#04137D] font-bold text-xl'>GST Show Cause Notices (SCN)<br/> & Audit Defense</h1>
                <p className='text-sm font-normal pt-8'>Preparation and filing of replies to GST audit queries,<br/> departmental notices, and adjudication proceedings<br/> with strong documentation and legal backing.</p>
              </div>
               <div className='w-100 h-50 bg-[#FDFFFE] pt-6 pl-8'>
                <h1 className='text-[#04137D] font-bold text-xl'>Tax Dispute Resolution &<br/> Strategy</h1>
                <p className='text-sm font-normal pt-8'>End-to-end dispute management from pre-assessment <br/>consultation to final appellate representation, ensuring<br/> compliance, transparency, and minimized exposure to<br/> penalties.</p>
              </div>
            </div>

              <div className='flex pt-4'>
              <div className='w-100 h-50 bg-[#FDFFFE] pt-6 pl-8'>
                <h1 className='text-[#04137D] font-bold text-xl'>Assessment & Scrutiny<br/> Proceedings</h1>
                <p className='text-sm font-normal pt-8'>Handling scrutiny and assessment cases under the<br/> Income Tax Act and GST law with precision, ensuring<br/> proper representation and documentation at every<br/> stage.</p>
              </div>
            </div>
          </div>
        </div>
        {/**Why Choose Us?*/}
       <div className='ml-[420px] pb-12 pt-12'>
        <div className='flex gap-10' >  
          <img className='w-70 h-50' src="./ef2e1599479b097ba886de0329583de3409ab3ef.png" alt="" />
          <div>
          <h5 className='text-[#04137D] font-semibold'>Why Choose Us</h5>
          <p className='flex font-medium text-[#222222] text-sm pt-1 gap-2'><img className='w-4 h-4 mt-1'src="./Vector (1).png" alt="" />Deep expertise in both direct (Income Tax) and indirect (GST)<br/>laws</p>
          <p className='flex font-medium text-[#222222] text-sm pt-1 gap-2'><img className='w-4 h-4 mt-1' src="./Vector (1).png" alt="" />Proven experience in representation at departmental and<br/> tribunal levels</p>
          <p className='flex font-medium text-[#222222] text-sm pt-1 gap-2'><img className='w-4 h-4 mt-1' src="./Vector (1).png" alt="" />Insight-driven approach combining law, accounting, and<br/> strategy</p>
          <p className='flex font-medium text-[#222222] text-sm pt-1 gap-2'><img className='w-4 h-4 mt-1' src="./Vector (1).png" alt="" />Personalized attention with strict confidentiality and <br/>professionalism</p>
        </div>
        </div>
          <div className='flex gap-10 pt-16'>  
          <div>
          <h5 className='text-[#04137D] font-semibold'>Why Choose Us</h5>
          <p className='flex font-medium text-[#222222] text-sm pt-1 gap-2'><img className='w-4 h-4 mt-1'src="./Vector (1).png" alt="" />Deep expertise in both direct (Income Tax) and indirect (GST)<br/>laws</p>
          <p className='flex font-medium text-[#222222] text-sm pt-1 gap-2'><img className='w-4 h-4 mt-1' src="./Vector (1).png" alt="" />Proven experience in representation at departmental and<br/> tribunal levels</p>
          <p className='flex font-medium text-[#222222] text-sm pt-1 gap-2'><img className='w-4 h-4 mt-1' src="./Vector (1).png" alt="" />Insight-driven approach combining law, accounting, and<br/> strategy</p>
          <p className='flex font-medium text-[#222222] text-sm pt-1 gap-2'><img className='w-4 h-4 mt-1' src="./Vector (1).png" alt="" />Personalized attention with strict confidentiality and <br/>professionalism</p>
        </div>
        <img className='w-70 h-50' src="./ef2e1599479b097ba886de0329583de3409ab3ef.png" alt="" />
        </div>
       </div>
    </div>

   
    <Services/>
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

export default FrontPage2