import React from 'react'

function CareerDetailsContentPart2() {
 /* const data=[{name:"Shruti RAwat",age:"22",dob:"3/06/2003"},{name:"Shruti RAwat",age:"22",dob:"3/06/2003"},{name:"Shruti RAwat",age:"22",dob:"3/06/2003"}]**/
  return (
     <>
        
       <div className='pl-34 pt-10'><h3 className='text-[#010101] font-semibold text-xl'>Apply for this job</h3></div>
          <div className='min-h-screen w-full bg-[#FFFFFF] flex items-center justify-center pt-4'>
           <div>
               <div>
                 <label className='text-[#000000] text-sm font-normal'>Applying For</label>
                 <div className='first flex pt-2'>
                 <input className='relative h-9 w-[1000px] text-[#46464A] font-normal text-sm pl-3 bg-[#F6F8FF]' type="text" placeholder='Front-End Engineer'/><img className='absolute mx-[950px] py-2' src="../../public/ri_arrow-drop-down-line.png" alt="" />
                 </div>
                  
                   <div className='second flex gap-4 pt-3'>
                     <div>                  
                     <label className='text-[#000000] text-sm font-normal'>Name</label><br/>
                       <div className='pt-2'>
                       <input className='bg-[#F6F8FF]  w-[490px] h-9 text-[#46464A] font-normal text-sm pl-3' type="text" placeholder='John' />
                        </div>
                     </div>
                     <div>
                     <label className='text-[#000000] text-sm font-normal'>Email</label><br/>
                    <div className='pt-2'>
                   <input className='bg-[#F6F8FF] w-[490px] h-9 text-[#46464A] font-normal text-sm pl-3' type="email" placeholder='abc@gmail.com' />
                     </div>
                     </div>
                   </div>

                    <div className='third flex gap-4 pt-3'>
                     <div>                  
                    <label className='text-[#000000] text-sm font-normal'>Contact</label><br/>
                     <div className='pt-2'>
                     <input className='bg-[#F6F8FF] w-[490px] h-9 text-[#46464A] font-normal text-sm pl-3' type="tel" placeholder='+91 91874 34323' />
                     </div>
                     </div>
                     <div>
                     <label className='text-[#000000] text-sm font-normal'>Experience (In Years)</label><br/>
                     <div className='pt-2'>
                     <input className='bg-[#F6F8FF] w-[490px] h-9 text-[#46464A] font-normal text-sm pl-3' type="number" placeholder='2 years' />
                     </div>
                     </div>
                   </div>

                     <div className='fourth flex gap-4 pt-3'>
                     <div>                  
                    <label className='text-[#000000] text-sm font-normal'>Current Salary (Per Annum)</label><br/>
                     <div className='pt-2'>
                     <input className='bg-[#F6F8FF] w-[490px] h-9 text-[#46464A] font-normal text-sm pl-3' type="number" placeholder='5 LPA' />
                     </div>
                     </div>
                     <div>
                     <label className='text-[#000000] text-sm font-normal'>Expected Salary (Per Annum)</label><br/>
                     <div className='pt-2'>
                     <input className='bg-[#F6F8FF] w-[490px] h-9 text-[#46464A] font-normal text-sm pl-3' type="number" placeholder='8 LPA' />
                     </div>
                     </div>
                   </div>  

                  <div className="relative fifth flex pt-3">
  <div>
    <label className="text-[#000000] text-sm font-normal">Location</label><br />

    <div className="relative w-[1000px] mt-2">
      <input
        type="text"
        placeholder="Shubash Nagar Dehradun"
        className="h-9 w-full bg-[#F6F8FF] text-[#46464A] font-normal text-sm pl-3 pr-10 rounded-md focus:outline-none"
      />
      <img
        src="../../public/ri_arrow-drop-down-line.png"
        alt="dropdown"
        className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 cursor-pointer"
      />
    </div>

  </div>
</div>
                 

                     <div className='sixth pt-3'>
                   <div>
                     <label className='text-[#000000] text-sm font-normal'>Additional Information</label><br/>
                   <div className='pt-2'>
                      <textarea 
                    placeholder="Write Message" 
                      className="w-[1000px] h-32 p-3 border border-[#F6F8FF] bg-[#F6F8FF] text-[#46464A] font-normal text-sm pl-3 rounded-lg "
                       ></textarea>
                       </div>
                     </div>
                   </div>

                    <div className='seventh pt-3'>
                     <div>
                     <label className='text-[#000000] text-sm font-normal'>Upload Resume</label><br/>
                     <div className='flex'>
                       <label></label>
                       <div className='pt-2'>
                       <input className='bg-[#F6F8FF] w-[1000px] h-9 pt-2 text-[#46464A] font-normal text-sm pl-3' type="file" placeholder='No file Choose'/>  
                      </div>
                      </div>
                       <p className='text-[#646465] text-xs'>Accepted file types: pdf, doc, docx, Max. file size: 5 MB.</p>
                     </div>
                   </div>          
                   </div>
           </div>
          </div>
            <div className='flex items-center justify-center pt-5 pb-14'><button className='text-[#F6EFF9] bg-[#03137F] font-semibold h-8 w-42 rounded-3xl'>Submit Apply</button></div>
     </>

   /**
     <>
    {data.map((item,index)=>{
       return  <div key={index}>
           {item.name}
         </div>
    })}
    <h2>hey</h2>
    </>
    */
  )
}

export default CareerDetailsContentPart2