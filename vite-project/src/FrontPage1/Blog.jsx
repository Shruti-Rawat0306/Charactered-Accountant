import React from "react";
import { useNavigate } from "react-router-dom";

function Blog() {
  const navigate = useNavigate();

  const handleExploreBlog = () => {
    navigate("/blog"); // FrontPage4 route
  };

  return (
    <>
      {/* Blog Section */}
      <div className="min-h-screen w-full bg-[#F6EFF9] px-4 md:px-10">
        <h2 className="text-3xl font-semibold text-center text-[#04137D] pt-6">
          Blog
        </h2>

        <h5 className="text-center pt-2 text-sm md:text-base">
          Expert insights and practical tips to keep your business financially
          <br className="md:hidden" />
          healthy and legally safe.
        </h5>

        <h1 className="font-semibold pl-0 md:pl-10 text-xl mt-6">
          Recent Blog Post
        </h1>

        <div className="flex flex-col md:flex-row gap-8 mt-6">
          {/* Left Side */}
          <div className="flex-shrink-0 md:w-1/2">
            <img
              className="w-full md:w-[600px] h-64 md:h-[300px] object-cover"
              src="./9ca412fa840de131974162b09d68033e23a850b5 (2).jpg"
              alt=""
            />
            <div className="mt-4">
              <h5 className="text-[#6941C6] font-medium text-sm md:text-base">
                19 Jan 2022 30min
              </h5>
              <h4 className="font-semibold mt-2 text-lg md:text-xl">
                UX review presentations
              </h4>
              <p className="text-sm text-[#667085] mt-2">
                How do you create compelling presentations that wow your
                colleagues
                <br className="md:hidden" />
                and impress your managers?
              </p>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex flex-col gap-6 md:w-1/2">
            <div className="flex flex-col md:flex-row gap-4 md:items-start">
              <img
                className="w-full md:w-36 h-40 md:h-50 object-cover"
                src="./009533ddb18880647940253fa905f2a8d6a3a95e.jpg"
                alt=""
              />
              <div>
                <h5 className="text-[#6941C6] font-medium text-sm md:text-base">
                  19 Jan 2022 30 min
                </h5>
                <h4 className="font-semibold mt-2 text-lg md:text-xl">
                  Migrating to Linear 101
                </h4>
                <p className="text-sm text-[#667085] mt-1">
                  Linear helps streamline software
                  <br className="md:hidden" />
                  projects, sprints, tasks, and bug
                  <br className="md:hidden" />
                  tracking. Here’s how to get...
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4 md:items-start">
              <img
                className="w-full md:w-36 h-40 md:h-50 object-cover"
                src="./c220b565fba3f3369a85cb9bd4d04bf17c85be21 (1).jpg"
                alt=""
              />
              <div>
                <h5 className="text-[#6941C6] font-medium text-sm md:text-base">
                  19 Jan 2022 30 min
                </h5>
                <h4 className="font-semibold mt-2 text-lg md:text-xl">
                  Building your API Stack
                </h4>
                <p className="text-sm text-[#667085] mt-1">
                  The rise of RESTful APIs has been met
                  <br className="md:hidden" />
                  by a rise in tools for creating, testing,
                  <br className="md:hidden" />
                  and managing...
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Explore Blog Button */}
        <div className="pb-10 mt-6">
          <button
            onClick={handleExploreBlog}
            className="block mx-auto text-[#04137E] border border-[#04137E] px-6 py-2 rounded-3xl font-semibold"
          >
            Explore Blog
          </button>
        </div>
      </div>
    </>
  );
}

export default Blog;
