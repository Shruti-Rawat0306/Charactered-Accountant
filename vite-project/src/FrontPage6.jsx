import React from 'react'
import TopContact from './Contact/TopContact'
import Contact from './FrontPage1/Contact'
import FAQ from './FrontPage1/FAQ'
import Footer from './FrontPage1/Footer'

function FrontPage6() {
  return (
    <>
      <TopContact/>
      <div className='min-h-screen w-full bg-[#F6EFF9]'>
       <Contact/>
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
      </div>
      <Footer/>
    </>
  )
}

export default FrontPage6