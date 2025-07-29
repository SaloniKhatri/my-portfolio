
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TiHome } from "react-icons/ti";
import { BsBagHeartFill } from "react-icons/bs";
import { FaRegIdCard } from "react-icons/fa";
import { BiSolidContact } from "react-icons/bi";


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white border-b border-gray-800">
      <div className=" px-4 sm:px-6 lg:px-8 py-3 ">
        <div className="flex items-center justify-between h-16">

          {/* Brand */}
          <div className="flex-shrink-0 text-xl font-bold">
            <Link to="/">saloniKhatri</Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2}
                viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Menu Items */}
          <div className="hidden md:flex md:items-center space-x-10 font-semibold text-xl border border-gray-600 rounded-full py-4 px-15 ">
            <Link to="/" className="hover:text-cyan-400 active:text-cyan-400">
              <div className='flex items-center space-x-2'>
                <div><TiHome /></div>
                <div>Home</div>
              </div>
            </Link>
            <Link to="/projects" className="hover:text-cyan-400 ">
              <div className='flex items-center space-x-2'>
                <div><BsBagHeartFill /></div>
                <div> My Projects</div>
              </div>
            </Link>
            <Link to="/about" className="hover:text-cyan-400">
              <div className='flex items-center space-x-2'>
                <div><FaRegIdCard /></div>
                <div>About Me</div>
              </div>
            </Link>
          </div>
          <div className="hidden md:flex md:items-center font-semibold text-xl">

            <Link to="/contact" className="hover:text-cyan-400">
              <div className='flex items-center space-x-2'>
                <div><BiSolidContact /></div>
                <div>Contact Me</div>
              </div></Link>
          </div>

        </div>
      </div>

      {/* Mobile Menu Items */}
      {isOpen && (
        <div className="md:hidden px-4 pt-2 pb-4 space-y-2 font-medium text-base bg-black">
          <Link to="/" className="hover:text-cyan-400 block">
            <div className='flex items-center space-x-2'>
              <div><TiHome /></div>
              <div>Home</div>
            </div>
          </Link>
          <Link to="/projects" className="hover:text-cyan-400 block">
            <div className='flex items-center space-x-2'>
              <div><BsBagHeartFill /></div>
              <div> My Projects</div>
            </div>
          </Link>
          <Link to="/about" className="block hover:text-cyan-400">
            <div className='flex items-center space-x-2'>
              <div><FaRegIdCard /></div>
              <div>About Me</div>
            </div>
          </Link>
          <Link to="/contact" className="hover:text-cyan-400 block">
            <div className='flex items-center space-x-2'>
              <div><BiSolidContact /></div>
              <div>Contact Me</div>
            </div>
          </Link>       
         </div>
      )}
    </nav>
  );
}

export default Navbar;
