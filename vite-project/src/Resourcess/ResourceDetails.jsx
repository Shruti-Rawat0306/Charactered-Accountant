import React from 'react'
import TopBlog from '../Blog/TopBlog'
import FAQ from '../FrontPage1/FAQ';
import Footer from '../FrontPage1/Footer';

function ResourceDetails() {
       const data = Array.from({ length: 5 }, (_, i) => ({
    id: i + 1,
    img: "../../public/Ellipse 800.png"
  }));
  return (
    <>
        <TopBlog/>
        <div className='min-h-screen w-full bg-[#F6EFF9] pl-20 pt-15'>
              <div><h5 className='text-[#667085]'>BACK</h5></div>
        <div className='flex gap-40'>
        <div className='leftside pt-18'>
            <h1 className='text-[#010101] text-4xl font-semibold pt-4'>Free Marketing Plan<br/> Template</h1>
            <p className='text-[#101828] font-normal text-m pt-4'>Outline your company's marketing strategy in one simple.<br/>coherent plan.</p>  
            <button className='bg-[#03137F] w-45 h-10 rounded-xl mt-6 text-white'>Download for free</button>  
        </div>
        <div className='rightside pt-10'>
            <img className='w-140 h-70' src="../../public/9ca412fa840de131974162b09d68033e23a850b5 (2).jpg" alt="" /> 
        </div>
        </div>
        
        {/**second part */}
        <div className='mt-22 flex gap-30 pb-12'>
            <div className='leftside pl-20'>
                 <div className='flex gap-3'>
                <img src="../../public/Frame (6).png" alt="left-arrow" className='w-6 h-6 pt-1 mt-45 bg-white rounded-4xl'/>
                <img src="../../public/36a4ac04d9a4dc418f4a9ee6b46839cc23214d23.png" alt="" className='w-[300px] h-[400px]'/>
                <img src="../../public/Frame (7).png" alt="right-arrow" className='w-6 h-6 pt-1 mt-45 bg-white rounded-4xl'/>
                </div>
                  <div className='flex gap-3 pl-33 mt-3 overflow-x-auto'>
                  {data.map((item)=>
                    {return <div>
                        <img className='w-3' src={item.img} alt="" />
                    </div>})}
                    </div>
            </div>
            <div className='rightside mt-10'>
                <p className='text-[#010101] text-4xl font-bold'>This template includes <br/>sections for:</p>
                <ul className='mt-3'>
                     <li className='flex mt-1'><img src="../../public/Frame (8).png" alt="" />Business Summary</li>
                     <li className='flex mt-1'><img src="../../public/Frame (8).png" alt="" />Business Initiatives</li>
                     <li className='flex mt-1'><img src="../../public/Frame (8).png" alt="" />Target Market</li>
                     <li className='flex mt-1'><img src="../../public/Frame (8).png" alt="" />Market Strategy</li>
                     <li className='flex mt-1'><img src="../../public/Frame (8).png" alt="" />Budget</li>
                     <li className='flex mt-1'><img src="../../public/Frame (8).png" alt="" />Marketing Channels</li>
                     <li className='flex mt-1'><img src="../../public/Frame (8).png" alt="" />Marketing Technology</li>
                </ul>
            </div>
        </div>

         {/**third */}
         <div className='pb-20'>
            <p className='font-bold text-center text-4xl'>Outline your marketing strategy <br/>in a simple template.</p>
            <p className='font-medium pl-22 pt-6'>With so many different marketing and advertising channels, it's a smart move to equip your marketing team with a plan for<br/> what to do and why.That's why we've built a marketing plan for your business. You can use it to lay out your budget, team<br/> structure, and channels of choice.</p>
            <p className='font-medium pl-22 pt-4'>Download the template now to start organizing and mapping out your marketing strategy.</p>
         </div>
         
        </div>
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

export default ResourceDetails