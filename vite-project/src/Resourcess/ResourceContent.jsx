import React from 'react'
import Footer from '../FrontPage1/Footer'

function ResourceContent() {

  // Create 20 copies of the same item
  const data = Array.from({ length: 9 }, (_, i) => ({
    id: i + 1,
    img: "/009e5d6c0504989f9530585eff801292cc051c7c.png", 
    heading: "Strategic plan template ",
    paragraph:`Define your strategy, refine your approach, and align across teams.`
  }));

  return (
    <>
      <div className='min-h-screen w-full bg-[#F6EFF9] p-10 pb-15'>

        <div className='mb-10 text-center'>
          <h1 className='text-4xl font-bold mb-3 text-[#031482]'>Accounting Resources</h1>
          <p>
            Access essential study guides, template, tax forms, and professional <br />
            documents to boost your accounting knowledge.
          </p>
        </div>
  

        <div className='grid grid-cols-3 gap-6'>
        {data.map((item) => {
          return (
            <div key={item.id}>
              <img src={item.img} alt="resource" className='h-[420px] w-[400px]' />
              <h1 className='font-semibold text-[20px] text-[#101828] mt-2'>{item.heading}</h1>
              <p className='font-normal text-sm text-[#3F314C] mt-1'>{item.paragraph}</p>
            </div>);
        })}
            </div>
      </div>
      <Footer/>
    </>
  );
}

export default ResourceContent;
