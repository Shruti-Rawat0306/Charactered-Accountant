import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CareerRole from "./CareerRole";
import TopBlog from "../Blog/TopBlog";

function CareerContent() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("All Job Category");
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const options = [
    "Frontend Development",
    "Marketing",
    "Design",
    "Sales"
  ];

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false);

    // Navigate if "Frontend Development" is selected
    if (option === "Frontend Development") {
      navigate("/careers/frontend");
    }
    // Navigate if "Marketing" is selected
    if(option==="Marketing"){
      navigate("/careers/marketing");
    }
    // Navigate if "Sales" is selected
    if(option==="Sales"){
      navigate("/careers/sales");
    }
    // Navigate if "Design" is selected
     if(option==="Design"){
      navigate("/careers/design");
    }
      
  };

  return (
  
    <div className="min-h-screen w-full bg-[#F6EFF9]">
      
      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10 px-6 md:px-16 lg:px-24 pt-12">
        <div className="max-w-xl">
          <h1 className="text-[#04137D] text-3xl md:text-4xl font-semibold mb-4">
            Join Our Team
          </h1>
          <p className="text-[#010101] text-sm md:text-base leading-relaxed">
            At UAC, we believe that great ideas come from passionate people. We're<br/>
            not just building products or services - we're building a culture of<br/>
            innovation, collaboration, and growth. If you're looking for a place to<br/>
            make a real impact and grow your career, you've come to the right place.  
          </p>
        </div>

        <img
          src="../../public/c220b565fba3f3369a85cb9bd4d04bf17c85be21 (1).jpg"
          alt=""
          className="w-full max-w-md rounded-xl object-cover"
        />
      </div>

      {/* Open Roles Header + Dropdown */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 px-6 md:px-16 lg:px-24 mt-16">
        <h3 className="text-[#04137D] text-2xl md:text-3xl font-semibold">
          Open Roles at UAC
        </h3>

        <div className="relative w-full md:w-56" ref={dropdownRef}>
          <div
            className="flex items-center justify-between p-2 border border-gray-300 rounded-lg shadow-sm cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="text-gray-700">{selected}</span>
            <img
              src="../../public/ri_arrow-drop-down-line.png"
              alt="dropdown arrow"
              className={`w-5 transition-transform duration-200 ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </div>

          {isOpen && (
            <ul className="absolute z-50 mt-1 w-full max-h-60 overflow-y-auto border border-gray-300 bg-white rounded-lg shadow-lg">
              {options.map((option, index) => (
                <li
                  key={index}
                  className="p-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleSelect(option)}
                >
                  {option}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Job Cards */}
      <div className="mt-12 pb-20 space-y-10 px-4 md:px-12 lg:px-10">
        <CareerRole />
        <CareerRole />
        <CareerRole />
      </div>
    </div>
  );
}

export default CareerContent;
