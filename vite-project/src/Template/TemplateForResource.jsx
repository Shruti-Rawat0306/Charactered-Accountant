import React, { useState } from "react";
import API from "../api/api"; // adjust path if needed

function TemplateForResource() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ✅ EMPTY CHECK
    if (!formData.fullName || !formData.email) {
      alert("Please fill all fields");
      return;
    }

    // ✅ EMAIL FORMAT CHECK
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert("Please enter a valid email address");
      return;
    }

    try {
      const res = await API.post("/api/resource/create", formData);

      if (res.status === 200 || res.status === 201) {
        alert("Template link will be sent to your email 📧");

        setFormData({
          fullName: "",
          email: "",
        });
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong ❌");
    }
  };

  return (
    <>
      <div className="w-full flex justify-center items-center py-10 px-4">
        <div className="bg-[#f2f7f2] rounded-xl p-6 md:p-10 w-full max-w-md">
          
          {/* Header */}
          <div className="text-center">
            <h1 className="text-[#010101] font-bold text-2xl sm:text-3xl pt-4">
              Get Your Free Marketing <br /> Plan Template
            </h1>
            <p className="text-[#010101] font-normal text-sm sm:text-base pt-3">
              Enter your details below and we will send the download <br />
              link straight to your inbox
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 pt-6">
            
            {/* Full Name */}
            <div className="flex flex-col">
              <label className="text-sm mb-1">Full Name</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="John"
                className="w-full h-10 bg-[#d1d6e7] pl-2 rounded-md"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label className="text-sm mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="abc@gmail.com"
                className="w-full h-10 bg-[#d1d6e7] pl-2 rounded-md"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-[#3E2D94] text-white font-semibold py-2 mt-4 rounded-md w-full hover:bg-[#33267a] transition"
            >
              Send Me The Template
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default TemplateForResource;
