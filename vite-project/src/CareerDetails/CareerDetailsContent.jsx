import React from 'react'

function CareerDetailsContent() {
  return (
    <>
    <div className='min-h-screen w-full bg-[#F6EFF9] pl-28 pb-20'>
     <div className='pt-10'><h3>BACK</h3></div>
     <div className='first'>
        <div>
          <h3 className='text-[#03137F] pt-8 font-semibold text-4xl'>Design Program Manager, Platform</h3>
        </div>
        
        <div className='flex gap-[600px]'>
       <h6 className='pt-3 text-[#4b4747]'>Dehradun,Uttrakhand .Gurugram,UttarPradesh</h6>
              <div className=''><button className='text-[#F6EFF9] bg-[#03137F] font-semibold h-8 w-22 rounded-3xl'>Apply</button></div>
        </div>
     </div>
    {/**second */}
      <div className='second pt-4'>
          <h3 className='text-[#010101] font-semibold'>Job Brief:</h3>
          <p className='text-[#161616] font-normal pt-2'>A Front-End Engineer at UAC is responsible for developing and implementing user-facing components in customized <br/>websites and web applications.</p>
          <p className='text-[#161616] font-normal pt-2'>The Front-End Engineer ensures that user interface componentsa are robust and easy to maintain.Dedication to collaborate<br/>problem-solving,sophisticated design, and quality code development is important.</p>
      </div>
        {/**third */}
         <div className='third pt-4'>
                <h3 className='text-[#010101] font-semibold'>Required Skills:</h3>
                <ul className='list-disc pl-5 pt-2'>
                    <li className='text-[#161616] font-normal'>2+ years of experience in web development with HTML5 & CSS3</li>
                    <li className='text-[#161616] font-normal'>Strong understanding of responsive,device-specific development</li>
                    <li className='text-[#161616] font-normal'>Proficiency with modern JavaScript (ES6+), TypeScript, and frameworks like React, Vue, or Angular</li>
                    <li className='text-[#161616] font-normal'>Proficiency with front-end CSS frameworks (Tailwind) and build tools (e.g. Vite, Nuxt, Next)</li>
                    <li className='text-[#161616] font-normal'>Experience with Git-based repositories (GitHub, GitLab, etc.)</li>
                    <li className='text-[#161616] font-normal'>Knowledge of SEO-friendly development practices</li>
                    <li className='text-[#161616] font-normal'>Proficiency with AI-assisted development tools (e.g. GitHub Copilot, Tabnine, Cursor, Windsurf, etc.)</li>
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
    </>
  )
}

export default CareerDetailsContent