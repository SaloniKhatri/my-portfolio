import React from 'react'
import Card from '../Components/Card'
import { motion } from 'framer-motion';
import { GoDotFill } from "react-icons/go";
import { FaArrowRightLong } from "react-icons/fa6";
import Mine from '../assets/sk.jpg';
import Project1 from '../assets/Project1.png';
import Project2 from '../assets/Project2.png';
import Project3 from '../assets/Project3.png';
import { Link } from 'react-router-dom';

const Projects = () => {
    return (
        <>
            <section className='bg-black text-white'>

                <div className='pt-42 ps-16 text-8xl font-semibold border-b border-gray-800 pb-10 '>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }} 
                        className=' text-8xl md:text-8xl mx-5 mb-6 md:mb-0 text-purple-500'
                    >My Projects</motion.div>

                </div>

                <div className='m-10 border border-gray-800 rounded-md px-6'>
                    <div className='grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-6 my-10 p-12 '>
                        <div className='ps-16'>
                            <h1 className='text-4xl font-semibold'>Todos App</h1>
                            <h2 className=' py-2 text-xl text-gray-300 border-b border-gray-700'>React</h2>
                            <p className='mt-5 text-xl'>Developed a dynamic and responsive To-Do application using React.js that allows users to manage daily tasks with ease. Implemented features including task creation, completion toggling, and deletion, all with real-time UI updates through state management. <br />
                                Target Audience: <br />

                                - Students managing assignments, deadlines, and study schedules <br />

                                - Professionals organizing daily tasks, meetings, and project milestones <br />
                            </p>
                            <a href="https://salonikhatri.github.io/Todos-App/">
                                <button className=' mt-8 rounded-full border border-gray-800 p-4 w-100 text-lg font-medium'>Visit</button>
                            </a>

                        </div>

                        <div>
                            <div className=" w-[650px] m-auto">
                                <div className="max-w-4xl mx-auto shadow-lg rounded-xl border-2 border-gray-800">
                                    <img src={Project1} alt="" />

                                </div>

                            </div>

                        </div>

                    </div>
                </div>

                <div className='m-10 border border-gray-800 rounded-md px-6'>
                    <div className='grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-6 my-10 p-12'>
                        <div>
                            <div className=" w-[650px] m-auto">
                                <div className="max-w-4xl mx-auto shadow-lg rounded-xl border-2 border-gray-800">
                                    <img src={Project2} alt="" />

                                </div>

                            </div>

                        </div>
                        <div className='ps-16'>
                            <h1 className='text-4xl font-semibold'>Bakery Website</h1>
                            <h2 className=' py-2 text-xl text-gray-300 border-b border-gray-700'>React</h2>
                            <p className='mt-3 text-xl'>Designed and developed a visually appealing, fully responsive bakery website using React.js to showcase products, promote brand identity, and enhance user engagement. Focused on component-based architecture, interactive UI, and smooth user navigation. <br />
                                Target Audience: <br />

                                - Local customers seeking freshly baked goods and custom cakes <br />


                                - Casual visitors browsing for daily bakery items or seasonal specials <br />
                                - Mobile users who want quick access to menus, pricing, and contact info <br />



                            </p>
                            <a href="https://salonikhatri.github.io/bakery-website/">
                                <button className=' mt-8 rounded-full border border-gray-800 p-4 w-100 text-lg font-medium'>Visit</button>
                            </a>

                        </div>

                    </div>
                </div>

                <div className='mx-10 mt-10 border border-gray-800 rounded-md px-6'>
                    <div className='grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-6 my-10 p-12 '>
                        <div className='ps-16'>
                            <h1 className='text-4xl font-semibold'>Uber Clone</h1>
                            <h2 className=' py-2 text-xl text-gray-300 border-b border-gray-700'>React, Express, MongoDB</h2>
                            <p className='mt-3 text-xl'>The Uber Clone is a full-stack ride-booking web application that replicates the core functionalities of Uber. It allows users to book a ride, track driver location in real-time, and calculate fare dynamically based on distance. <br />

                            </p>
                            <a href="https://github.com/SaloniKhatri/Uber-Clone">
                                <button className=' mt-8 rounded-full border border-gray-800 p-4 w-100 text-lg font-medium'>Visit</button>
                            </a>

                        </div>

                        <div>
                            <div className=" w-[650px] m-auto">
                                <div className="max-w-4xl mx-auto shadow-lg rounded-xl border-2 border-gray-800">
                                    <img src={Project3} alt="" />

                                </div>

                            </div>

                        </div>

                    </div>
                </div>

            </section>


        </>
    )
}

export default Projects