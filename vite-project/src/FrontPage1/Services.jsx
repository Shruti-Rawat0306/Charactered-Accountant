import React from 'react'

function Services() {
  const servicesTop = [
    {
      img: "./bd0f2cc4c0858bddb94ca671d00388a20c432f83.png",
      title: "Start-up & Growth Advisory",
    },
    {
      img: "./ad60a57cb58a2ff282cc717f75e9f821fdd62ff5.png",
      title: "Taxation & Compliance Consulting",
    },
    {
      img: "./9a0d4ba6404721925e17165c763a31baf24f78ba.png",
      title: "Accounting & Financial Management",
    },
  ];

  const servicesBottom = [
    {
      img: "./e0d19892bf34cd57a60690cbb6b70978a7067457.png",
      title: "Corporate & Legal Solutions",
    },
    {
      img: "./bcd953023b9edff270376ec09e05f6a9609e8a22.png",
      title: "Industry-Focused Solutions",
    },
  ];

  return (
    <>
      <div className="min-h-screen w-full mb-14 px-4">
        <h2 className="text-3xl font-semibold text-center text-[#04137D] mt-6">
          Services
        </h2>
        <h5 className="text-center text-[#3F314C] mt-2 max-w-2xl mx-auto">
          With years of experience and a result-focused approach, we empower
          <br /> business to navigate complexity and achieve their goals.
        </h5>

        {/* Top images */}
        <div className="flex flex-col md:flex-row gap-3 mt-5">
          {servicesTop.map((service, index) => (
            <div key={index} className="relative flex-1">
              <img className="w-full h-auto" src={service.img} alt={service.title} />
              <p className="absolute bottom-4 left-4 text-white text-sm font-semibold flex flex-wrap items-center">
                {service.title}{" "}
                <img className="w-4 h-4 ml-2" src="../../public/Frame (5).png" alt="arrow" />
              </p>
            </div>
          ))}
        </div>

        {/* Bottom images */}
        <div className="flex flex-col md:flex-row gap-3 mt-3">
          {servicesBottom.map((service, index) => (
            <div key={index} className="relative flex-1">
              <img className="w-full h-auto" src={service.img} alt={service.title} />
              <p className="absolute bottom-4 left-4 text-white text-sm font-semibold flex flex-wrap items-center">
                {service.title}{" "}
                <img className="w-4 h-4 ml-2" src="../../public/Frame (5).png" alt="arrow" />
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Services
