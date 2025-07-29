import React from 'react'
import Mine from '../assets/sk.jpg';
import { Link } from 'react-router-dom';
import { FaArrowRightLong } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";
import { TiHome } from "react-icons/ti";
import { BsBagHeartFill } from "react-icons/bs";
import { FaRegIdCard } from "react-icons/fa";
import { BiSolidContact } from "react-icons/bi";

const Footer = () => {
    return (
        <>
            <footer className='bg-black text-white pt-10 px-10 '>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-8xl border-t border-s border-e border-gray-800 rounded-md">
                    <div className='p-10 font-bold text-3xl'>
                        <span>Where <span className='text-pink-400'>aesthetics</span>  & <br /> <span className='text-blue-400'>functionality</span> meet </span>
                    </div>
                    <div className='flex flex-col p-8 ms-22 font-semibold'>
                        <p className='text-orange-500 text-2xl'>Explore</p>
                        <div className='text-xl pt-5'>
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


                    </div>
                    <div className='flex flex-col p-8 font-semibold'>
                        <p className='text-blue-500 text-2xl'>Follow Me</p>
                        <div className='text-xl pt-5'>
                            <Link to="https://github.com/SaloniKhatri" className="hover:text-cyan-400 block">
                                <div className='flex items-center space-x-2'>
                                    <div>  <FaGithub /></div>
                                    <div>Github</div>
                                </div>
                            </Link>
                            <Link to="/projects" className="hover:text-cyan-400 block">
                                <div className='flex items-center space-x-2'>
                                    <div>   <FaLinkedin /></div>
                                    <div> LinkedIn</div>
                                </div>
                            </Link>
                            <Link to="/about" className="block hover:text-cyan-400">
                                <div className='flex items-center space-x-2'>
                                    <div><FaInstagram /></div>
                                    <div>
                                        Instagram
                                    </div>
                                </div>
                            </Link>
                            <Link to="/contact" className="hover:text-cyan-400 block">
                                <div className='flex items-center space-x-2'>
                                    <div><FaTelegram /></div>
                                    <div>Telegram</div>
                                </div>
                            </Link>

                        </div>


                    </div>
                    <div className='pt-8'>
                        <div className='bg-black text-white  '>
                            <span className='flex justify-end me-30'>
                                <span className='text-gray-300 text-2xl md:text-2xl max-w-3xl'>
                                    <span className='flex justify-items-center items-center px-8 py-1 hover:text-cyan-400 hover:scale-105 transition-all duration-300 ease-in-out'>

                                        <span className=''>
                                            <Link to="/contact" ><button className='font-bold' >Contact Me</button></Link>


                                        </span>
                                        <span className='ps-4'> <FaArrowRightLong /></span>
                                    </span>
                                    <p className='text-sm p-1 text-gray-400 ps-6 pb-2 mx-3'>Say Hello!</p>
                                </span>
                            </span>

                        </div>
                        <hr className='ms-24 me-30 text-gray-800 my-2' />
                        <div className='bg-black text-white'>
                            <span className='flex justify-end me-30'>
                                <span className='text-gray-300 text-2xl md:text-2xl max-w-3xl'>
                                    <span className='flex justify-items-center items-center px-8 py-1  hover:text-cyan-400 hover:scale-105 transition-all duration-300 ease-in-out '>

                                        <span className=' font-bold'>
                                            <Link to="/projects" ><button className='font-bold' > My Projects</button></Link>

                                        </span>
                                        <span className='ps-4'> <FaArrowRightLong /></span>
                                    </span>
                                    <p className='text-sm p-1 text-gray-400 ps-6 pb-2 mx-3'>Explore Projects</p>
                                </span>
                            </span>

                        </div>

                    </div>
                </div>
                <div className='border-b border-s border-e border-gray-800 rounded-md px-6'>
                    <img src={Mine} alt="my image" className='text-center' />
                </div>



                <div>
                    <span className=''>
                        <span className='px-22 font-bold  max-w-3xl'>
                            <span className='text-white flex justify-between items-center px-15'>

                                <span className='text-2xl md:text-2xl'>
                                    <a href=''>salonikhatri ©2025 - Privacy Policy </a>
                                </span>
                                <span className='text-xl md:text-xl'> saloniKhatri</span>
                            </span>
                        </span>
                    </span>

                </div>
            </footer>

        </>
    )
}

export default Footer