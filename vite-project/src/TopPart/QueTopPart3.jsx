import React, { useState } from "react";
import API from "../api/api"; // adjust path if needed

function QueTopPart3() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contactNumber: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/api/inquiries", formData);

      if (res.status === 200 || res.status === 201) {
        alert("We will contact you soon");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          contactNumber: "",
          service: "",
          message: "",
        });
      }
    } catch (error) {
      console.error(error);
      alert("Server error");
    }
  };

  return (
    <>
      <div className="h-115 w-120 bg-[#E8E8EB] mx-auto rounded-xl pl-10">
        <div>
          <h1 className="text-[#010101] font-bold text-xl text-center pt-2">
            Have a Question?
          </h1>
          <p className="text-[#010101] font-medium text-center text-sm pt-1">
            Fill out the form below and our team will get back to you
            <br /> within 24 hours.
          </p>
        </div>

        <div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 pt-1">
            {/* First Row */}
            <div className="flex gap-8">
              <div className="flex flex-col">
                <label className="text-sm">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-[180px] h-8 bg-[#F6F8FF]"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-[180px] h-8 bg-[#F6F8FF]"
                />
              </div>
            </div>

            {/* Second Row */}
            <div className="flex gap-8">
              <div className="flex flex-col">
                <label className="text-sm">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-[180px] h-8 bg-[#F6F8FF]"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm">Contact</label>
                <input
                  type="number"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleChange}
                  className="w-[180px] h-8 bg-[#F6F8FF]"
                />
              </div>
            </div>

            {/* Third Row */}
            <div className="flex gap-8">
              <div className="flex flex-col">
                <label className="text-sm">
                  What service are you interested in
                </label>
                <input
                  type="text"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  placeholder="Select Services"
                  className="w-[390px] pl-2 h-8 bg-[#F6F8FF]"
                />
              </div>
            </div>

            {/* Fourth Row */}
            <div className="flex gap-8">
              <div className="flex flex-col">
                <label className="text-sm">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-[390px] h-[80px] p-3 bg-[#F6F8FF] rounded-lg"
                  placeholder="Write Message"
                ></textarea>

                <button
                  type="submit"
                  className="w-[390px] h-8 bg-[#3E2D94] mt-3 text-[#FFFFFF]"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default QueTopPart3;
