import React from "react";

function Footer() {
  return (
    <>
      <footer className="w-full bg-[#ECF5FF] px-6 py-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10">

          {/* Left Side - Logo */}
          <div className="flex justify-center md:justify-start">
            <img src="./Frame (4).png" alt="Logo" className="h-12" />
          </div>

          {/* Right Side - Links */}
          <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 text-sm">

            <div>
              <ul>
                <li className="font-bold text-[#002656] mb-2">Quick Links</li>
                <li className="text-[#002755]">Home</li>
                <li className="text-[#002755]">About</li>
                <li className="text-[#002755]">Services</li>
                <li className="text-[#002755]">Testimonial</li>
                <li className="text-[#002755]">Career</li>
              </ul>
            </div>

            <div>
              <ul>
                <li className="font-bold text-[#002656] mb-2">Resources</li>
                <li className="text-[#002755]">Blog</li>
                <li className="text-[#002755]">Resource Downloads</li>
              </ul>
            </div>

            <div>
              <ul>
                <li className="font-bold text-[#002656] mb-2">Social Links</li>
                <li className="text-[#002755]">Instagram</li>
                <li className="text-[#002755]">X (Twitter)</li>
                <li className="text-[#002755]">Facebook</li>
                <li className="text-[#002755]">LinkedIn</li>
              </ul>
            </div>

            <div>
              <ul>
                <li className="font-bold text-[#002656] mb-2">Support</li>
                <li className="text-[#002755]">FAQ</li>
                <li className="text-[#002755]">Contact</li>
              </ul>
            </div>

          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
