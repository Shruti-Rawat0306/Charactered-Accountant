import React, { useState } from 'react';
import API from '../api/api'; // adjust path if needed

function CareerDetailsContentPart2() {

  const [formData, setFormData] = useState({
    applyingFor: "",
    name: "",
    email: "",
    contact: "",
    experience: "",
    currentSalary: "",
    expectedSalary: "",
    location: "",
    message: ""
  });

  const [resume, setResume] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async () => {
    const data = new FormData();

    // Map frontend fields to backend required fields
    data.append("jobTitle", formData.applyingFor);
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("contact", formData.contact);
    data.append("experience", formData.experience);
    data.append("currentSalary", formData.currentSalary);
    data.append("expectedSalary", formData.expectedSalary);
    data.append("location", formData.location);
    data.append("additionalInfo", formData.message);

    if (resume) {
      data.append("resume", resume);
    }

    try {
      const res = await API.post("/api/job-applications/apply", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (res.status === 200 || res.status === 201) {
        alert("We will contact you soon ✅");
      } else {
        alert("Something went wrong ❌");
      }
    } catch (error) {
      alert("Server error ❌");
      console.error(error);
    }
  };

  return (
    <>
      <div className='pl-34 pt-10'>
        <h3 className='text-[#010101] font-semibold text-xl'>Apply for this job</h3>
      </div>

      <div className='min-h-screen w-full bg-[#FFFFFF] flex items-center justify-center pt-4'>
        <div>
          <div>

            <label className='text-[#000000] text-sm font-normal'>Applying For</label>
            <div className='first flex pt-2'>
              <input
                className='relative h-9 w-[1000px] text-[#46464A] font-normal text-sm pl-3 bg-[#F6F8FF]'
                type="text"
                name="applyingFor"
                value={formData.applyingFor}
                onChange={handleChange}
                placeholder='Front-End Engineer'
              />
              <img className='absolute mx-[950px] py-2' src="../../public/ri_arrow-drop-down-line.png" alt="" />
            </div>

            <div className='second flex gap-4 pt-3'>
              <div>
                <label className='text-[#000000] text-sm font-normal'>Name</label><br />
                <div className='pt-2'>
                  <input
                    className='bg-[#F6F8FF] w-[490px] h-9 text-[#46464A] font-normal text-sm pl-3'
                    type="text"
                    name="name"
                    onChange={handleChange}
                    placeholder='John'
                  />
                </div>
              </div>

              <div>
                <label className='text-[#000000] text-sm font-normal'>Email</label><br />
                <div className='pt-2'>
                  <input
                    className='bg-[#F6F8FF] w-[490px] h-9 text-[#46464A] font-normal text-sm pl-3'
                    type="email"
                    name="email"
                    onChange={handleChange}
                    placeholder='abc@gmail.com'
                  />
                </div>
              </div>
            </div>

            <div className='third flex gap-4 pt-3'>
              <div>
                <label className='text-[#000000] text-sm font-normal'>Contact</label><br />
                <div className='pt-2'>
                  <input
                    className='bg-[#F6F8FF] w-[490px] h-9 text-[#46464A] font-normal text-sm pl-3'
                    type="tel"
                    name="contact"
                    onChange={handleChange}
                    placeholder='+91 91874 34323'
                  />
                </div>
              </div>

              <div>
                <label className='text-[#000000] text-sm font-normal'>Experience (In Years)</label><br />
                <div className='pt-2'>
                  <input
                    className='bg-[#F6F8FF] w-[490px] h-9 text-[#46464A] font-normal text-sm pl-3'
                    type="number"
                    name="experience"
                    onChange={handleChange}
                    placeholder='2 years'
                  />
                </div>
              </div>
            </div>

            <div className='fourth flex gap-4 pt-3'>
              <div>
                <label className='text-[#000000] text-sm font-normal'>Current Salary (Per Annum)</label><br />
                <div className='pt-2'>
                  <input
                    className='bg-[#F6F8FF] w-[490px] h-9 text-[#46464A] font-normal text-sm pl-3'
                    type="number"
                    name="currentSalary"
                    onChange={handleChange}
                    placeholder='5 LPA'
                  />
                </div>
              </div>

              <div>
                <label className='text-[#000000] text-sm font-normal'>Expected Salary (Per Annum)</label><br />
                <div className='pt-2'>
                  <input
                    className='bg-[#F6F8FF] w-[490px] h-9 text-[#46464A] font-normal text-sm pl-3'
                    type="number"
                    name="expectedSalary"
                    onChange={handleChange}
                    placeholder='8 LPA'
                  />
                </div>
              </div>
            </div>

            <div className="relative fifth flex pt-3">
              <div>
                <label className="text-[#000000] text-sm font-normal">Location</label><br />
                <div className="relative w-[1000px] mt-2">
                  <input
                    type="text"
                    name="location"
                    onChange={handleChange}
                    placeholder="Shubash Nagar Dehradun"
                    className="h-9 w-full bg-[#F6F8FF] text-[#46464A] font-normal text-sm pl-3 pr-10 rounded-md focus:outline-none"
                  />
                  <img
                    src="../../public/ri_arrow-drop-down-line.png"
                    alt="dropdown"
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 cursor-pointer"
                  />
                </div>
              </div>
            </div>

            <div className='sixth pt-3'>
              <div>
                <label className='text-[#000000] text-sm font-normal'>Additional Information</label><br />
                <div className='pt-2'>
                  <textarea
                    name="message"
                    onChange={handleChange}
                    placeholder="Write Message"
                    className="w-[1000px] h-32 p-3 border border-[#F6F8FF] bg-[#F6F8FF] text-[#46464A] font-normal text-sm pl-3 rounded-lg"
                  ></textarea>
                </div>
              </div>
            </div>

            <div className='seventh pt-3'>
              <div>
                <label className='text-[#000000] text-sm font-normal'>Upload Resume</label><br />
                <div className='flex'>
                  <label></label>
                  <div className='pt-2'>
                    <input
                      className='bg-[#F6F8FF] w-[1000px] h-9 pt-2 text-[#46464A] font-normal text-sm pl-3'
                      type="file"
                      onChange={(e) => setResume(e.target.files[0])}
                    />
                  </div>
                </div>
                <p className='text-[#646465] text-xs'>
                  Accepted file types: pdf, doc, docx, Max. file size: 5 MB.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className='flex items-center justify-center pt-5 pb-14'>
        <button
          onClick={handleSubmit}
          className='text-[#F6EFF9] bg-[#03137F] font-semibold h-8 w-42 rounded-3xl'
        >
          Submit Apply
        </button>
      </div>
    </>
  )
}

export default CareerDetailsContentPart2;
