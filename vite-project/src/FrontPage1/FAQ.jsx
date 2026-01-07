import React, { useState } from "react";

function FAQ() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      // Optional: scroll into view when opening
      document.getElementById("faq-answer")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div
        className="
          bg-white
          w-full
          max-w-4xl
          mx-auto
          mt-4
          px-4
          py-4
          flex
          items-center
          justify-between
          rounded-xl
          shadow-sm
          cursor-pointer
        "
        onClick={handleToggle}
      >
        <h1
          className="
            text-[#170F49]
            font-semibold
            text-sm
            sm:text-base
            md:text-lg
          "
        >
          What services does your firm offer?
        </h1>

        <img
          className={`h-5 w-5 sm:h-6 sm:w-6 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
          src="./Button.png"
          alt="toggle"
        />
      </div>

      {/* Answer Section */}
      {isOpen && (
        <div
          id="faq-answer"
          className="bg-[#F6EFF9] max-w-4xl mx-auto mt-2 px-4 py-3 rounded-xl shadow-inner text-[#3E2D94]"
        >
          <p>
            Our firm offers a wide range of services including accounting,
            auditing, taxation, financial advisory, company registration, GST
            compliance, and business consulting to help individuals and
            businesses manage their finances efficiently.
          </p>
        </div>
      )}
    </>
  );
}

export default FAQ;
