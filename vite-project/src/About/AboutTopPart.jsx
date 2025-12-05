import React from 'react'
import { NavLink } from 'react-router-dom'
function AboutTopPart() {
  return (
    <>
  <div className="flex items-center bg-[#04137D] justify-between px-10 py-5 relative z-10">
          <img src="./image.png" className="w-[54px] h-10" alt="logo" />
          <ul className="flex text-white font-medium gap-8">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/services">Services</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/resources">Resources</NavLink>
            </li>
            <li>
              <NavLink to="/career">Career</NavLink>
            </li>
            <li>
              <NavLink to="/contact"> Contact</NavLink>
            </li>
          </ul>
          <button className="text-white text-center top-2 py-1 rounded-2xl border-2 border-white w-20">
            Inquire
          </button>
        </div>
           
    </>
  )
}

export default AboutTopPart