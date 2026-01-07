import React, { useState } from "react";
import API from "../api/api";

function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
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

    // EMPTY FIELD CHECK
    for (let key in formData) {
      if (!formData[key]) {
        alert("Please fill all fields");
        return;
      }
    }

    // EMAIL VALIDATION
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert("Please enter a valid email address");
      return;
    }

    // CONTACT NUMBER VALIDATION
    const contactRegex = /^[0-9]{10}$/;
    if (!contactRegex.test(formData.contact)) {
      alert("Please enter a valid 10-digit contact number");
      return;
    }

    try {
      const res = await API.post("/api/contact/create", formData);

      if (res.data.success) {
        alert("Form submitted successfully");

        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          contact: "",
          service: "",
          message: "",
        });
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    }
  };

  return (
    <>
      <div className="min-h-screen w-full bg-[#F6EFF9] flex flex-col items-center px-4 py-10">
        <p className="text-[#3F314C] text-sm tracking-wide text-center">
          SOLUTION FOR EVERY NEED
        </p>

        <h1 className="font-bold text-[#04137D] text-2xl sm:text-3xl md:text-4xl text-center mt-2">
          Contact us for every financial <br className="hidden sm:block" />
          question you have
        </h1>

        <div className="mt-10 w-full max-w-6xl bg-white rounded-3xl shadow-lg p-6 md:p-10">
          <div className="flex flex-col md:flex-row gap-8">
            {/* LEFT SIDE */}
            <div className="bg-[#3E2D94] rounded-2xl p-6 text-white md:w-1/3 relative">
              <h2 className="font-bold text-2xl">Contact Information</h2>

              <p className="text-[#EAE8F4] mt-2 text-sm">
                Reach out to our CA experts for any tax, audit, or registration service.
              </p>

              <div className="mt-6 space-y-3 text-sm">
                <p>📞 +91 76680 89802</p>
                <p>📞 +91 99274 68646</p>
                <p>📧 umang.uacca@gmail.com</p>
                <p>
                  📍 First Floor, Haripuram, GMS Road,
                  <br />
                  Dehradun, Uttarakhand – 248001
                </p>
              </div>
            </div>

            {/* RIGHT SIDE FORM */}
            <div className="md:w-2/3">
              <form
                onSubmit={handleSubmit}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              >
                <div className="flex flex-col">
                  <label>First Name</label>
                  <input
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="bg-[#F6F8FF] h-9 px-2 rounded"
                  />
                </div>

                <div className="flex flex-col">
                  <label>Last Name</label>
                  <input
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="bg-[#F6F8FF] h-9 px-2 rounded"
                  />
                </div>

                <div className="flex flex-col">
                  <label>Email</label>
                  <input
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-[#F6F8FF] h-9 px-2 rounded"
                  />
                </div>

                <div className="flex flex-col">
                  <label>Contact</label>
                  <input
                    name="contact"
                    value={formData.contact}
                    onChange={handleChange}
                    className="bg-[#F6F8FF] h-9 px-2 rounded"
                  />
                </div>

                <div className="flex flex-col sm:col-span-2">
                  <label>Service</label>
                  <input
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="bg-[#F6F8FF] h-9 px-2 rounded"
                  />
                </div>

                <div className="flex flex-col sm:col-span-2">
                  <label>Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="bg-[#F6F8FF] h-28 p-3 rounded"
                  ></textarea>

                  <button className="mt-4 h-10 bg-[#3E2D94] text-white rounded">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
