import React from "react";
import TopBlog from "./Blog/TopBlog";
import BlogPost from "./Blog/BlogPost";
import Footer from "./FrontPage1/Footer";

function FrontPage4() {
  return (
    <>
      <TopBlog />

      {/* Blog */}
      <div className="min-h-screen w-full bg-[#F6EFF9] px-4 sm:px-6 md:px-10">

        <h2 className="text-3xl font-semibold text-center text-[#04137D] pt-6">
          Blog
        </h2>

        <h5 className="text-center pt-2 text-sm sm:text-base">
          Expert insights and pratical tips to keep your business financially
          <br />
          healthy and legally safe.
        </h5>

        <h1 className="font-semibold text-xl mt-10 mb-6 sm:pl-10 text-center sm:text-left">
          Recent Blog Post
        </h1>

        {/* Main Layout */}
        <div className="flex flex-col lg:flex-row gap-8 mt-6">

          {/* LEFT SIDE */}
          <div className="flex flex-col items-center sm:items-start">
            <img
              className="h-[300px] w-[600px] sm:pl-10"
              src="./9ca412fa840de131974162b09d68033e23a850b5 (2).jpg"
              alt=""
            />

            <div className="sm:pl-10 text-center sm:text-left">
              <h5 className="text-[#6941C6] font-medium mt-4">
                19 jan 2022 30min
              </h5>

              <h4 className="font-semibold mt-2">
                UX review presentations
              </h4>

              <p className="text-sm text-[#667085] mt-2">
                How do you create compelling presentations that wow your
                colleagues <br className="hidden sm:block" />
                and impress your managers?
              </p>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex flex-col gap-6 items-center sm:items-start">

            {/* Card 1 */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left">
              <img
                className="h-50 w-90"
                src="./009533ddb18880647940253fa905f2a8d6a3a95e.jpg"
                alt=""
              />

              <div className="sm:ml-6 mt-4 sm:mt-0">
                <h5 className="text-[#6941C6] font-medium">
                  19 jan 2022 30 min
                </h5>

                <h4 className="font-semibold mt-2">
                  Migrating to Linear 101
                </h4>

                <p className="text-sm text-[#667085] mt-1">
                  Linear helps streamline software <br className="hidden sm:block" />
                  projects, sprints, tasks, and bug <br className="hidden sm:block" />
                  tracking. Here’s how to get...
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left">
              <img
                className="h-50 w-90"
                src="./c220b565fba3f3369a85cb9bd4d04bf17c85be21 (1).jpg"
                alt=""
              />

              <div className="sm:ml-6 mt-4 sm:mt-0">
                <h5 className="text-[#6941C6] font-medium">
                  19 jan 2022 30 min
                </h5>

                <h4 className="font-semibold mt-2">
                  Building your API Stack
                </h4>

                <p className="text-sm text-[#667085] mt-1">
                  The rise of RESTful APIs has been met <br className="hidden sm:block" />
                  by a rise in tools for creating, testing,
                  <br className="hidden sm:block" />
                  and manag...
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

      <BlogPost />
      <Footer />
    </>
  );
}

export default FrontPage4;
