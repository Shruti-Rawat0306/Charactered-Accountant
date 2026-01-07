import React from "react"; 
import Footer from "../FrontPage1/Footer";
import { useNavigate } from "react-router-dom";

function ResourceContent() {
  const navigate = useNavigate();

  const data = Array.from({ length: 9 }, (_, i) => ({
    id: i + 1,
    img: "/009e5d6c0504989f9530585eff801292cc051c7c.png",
    heading: "Strategic plan template",
    paragraph:
      "Define your strategy, refine your approach, and align across teams."
  }));

  const handleCardClick = (id) => {
    navigate(`/resource-details`);
  };

  return (
    <>
      <div className="min-h-screen w-full bg-[#F6EFF9] px-4 sm:px-6 md:px-12 lg:px-20 py-12">

        {/* ================= HEADER ================= */}
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-[#031482]">
            Accounting Resources
          </h1>
          <p className="text-sm sm:text-base text-[#3F314C]">
            Access essential study guides, templates, tax forms, and professional
            documents to boost your accounting knowledge.
          </p>
        </div>

        {/* ================= RESOURCE GRID ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {data.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition cursor-pointer"
              onClick={() => handleCardClick(item.id)}
            >
              {/* IMAGE */}
              <img
                src={item.img}
                alt="resource"
                className="w-full h-56 sm:h-64 md:h-72 object-cover"
              />

              {/* CONTENT */}
              <div className="p-4">
                <h2 className="font-semibold text-lg sm:text-xl text-[#101828] mb-1">
                  {item.heading}
                </h2>
                <p className="text-sm sm:text-base text-[#3F314C]">
                  {item.paragraph}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default ResourceContent;
