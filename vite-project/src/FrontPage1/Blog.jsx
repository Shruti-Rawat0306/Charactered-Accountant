import React from 'react'

function Blog() {
  return (
    <>    
     {/**Blog */}
      <div className="min-h-screen w-full bg-[#F6EFF9]">
        <h2 className="text-3xl font-semibold text-center text-[#04137D] pt-6">
          Blog
        </h2>
        <h5 className="text-center pt-2">
          Expert insights and pratical tips to keep your business financially{" "}
          <br />
          healthy and legally safe.
        </h5>
        <h1 className="font-semibold pl-10 text-xl">Recent Blog Post</h1>
        <div className="flex gap-8 mt-6">
          <div className="leftside">
            <img
              className="h-[300px] w-[600px] pl-10"
              src="./9ca412fa840de131974162b09d68033e23a850b5 (2).jpg"
              alt=""
            />
            <div className="pl-10">
              <h5 className="text-[#6941C6] font-medium mt-4">
                19 jan 2022 30min
              </h5>
              <h4 className="font-semibold mt-2">UX review presentations</h4>
              <p className="text-sm text-[#667085] mt-2">
                How do you create compelling presentations that wow your
                colleagues and <br /> impress your managers?
              </p>
            </div>
          </div>

          <div className="rightside">
            <div className="flex">
              <img
                className="h-50 w-90"
                src="./009533ddb18880647940253fa905f2a8d6a3a95e.jpg"
                alt=""
              />
              <div className="ml-6">
                <h5 className="text-[#6941C6] font-medium ">
                  19 jan 2022 30 min
                </h5>
                <h4 className="font-semibold mt-2">Migrating to Linear 101</h4>
                <p className="text-sm text-[#667085] mt-1">
                  Linear helps streamline software <br />
                  projects, sprints, tasks, and bug <br />
                  tracking. Here’s how to get...
                </p>
              </div>
            </div>
            <div className="flex mt-6">
              <img
                className="h-50 w-90"
                src="./c220b565fba3f3369a85cb9bd4d04bf17c85be21 (1).jpg"
                alt=""
              />
              <div className="ml-6">
                <h5 className="text-[#6941C6] font-medium">
                  19 jan 2022 30 min
                </h5>
                <h4 className="font-semibold mt-2">Building your API Stack</h4>
                <p className="text-sm text-[#667085] mt-1">
                  The rise of RESTful APIs has been met <br /> by a rise in
                  tools for creating, testing,
                  <br /> and manag...
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="pb-10">
          <button className="block mx-auto text-[#04137E] border border-[#04137E] px-4 py-2 rounded-3xl font-semibold mt-10 ">
            Explore Blog
          </button>
        </div>
      </div>
</>
  )
}

export default Blog