import React from 'react'
import Card from '../Components/Card'
import { motion } from 'framer-motion';
import { GoDotFill } from "react-icons/go";
import { FaArrowRightLong } from "react-icons/fa6";
import Mine from '../assets/sk.jpg';
import { Link } from 'react-router-dom';
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";

const ContactMe = () => {
    return (
        <>
            <section className='bg-black text-white pt-30'>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 px-6 py-24 bg-black text-white">

                    <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="flex flex-col justify-center ps-8"
                    >
                        <h1 className="text-6xl lg:text-7xl font-bold mb-6">Let's Connect...</h1>
                        <p className="text-2xl text-gray-300 leading-relaxed">
                            Whether you're looking to collaborate on a project, need a solution to a challenging problem,
                            or just want to talk tech — feel free to reach out. Together, we can turn ideas into reality.
                        </p>
                    </motion.div>

                   
                    <motion.div
                        initial={{ y: 80, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="w-full max-w-3xl mx-auto"
                    >
                        <form
                            id="contactForm"
                            name="contactForm"
                            className="bg-[#121212] border border-gray-700 rounded-xl shadow-lg p-10 space-y-8"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                               
                                <div>
                                    <label htmlFor="name" className="block text-lg text-gray-200 mb-1">Full Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder="Enter your name"
                                        className="w-full px-4 py-2 bg-black border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 text-white"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-lg text-gray-200 mb-1">Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="mail@example.com"
                                        className="w-full px-4 py-2 bg-black border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 text-white"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="phone" className="block text-lg text-gray-200 mb-1">Phone Number</label>
                                    <input
                                        type="text"
                                        id="phone"
                                        name="phone"
                                        placeholder="+91 98765 43210"
                                        className="w-full px-4 py-2 bg-black border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 text-white"
                                        required
                                    />
                                </div>

                             
                                <div>
                                    <label htmlFor="subject" className="block text-lg text-gray-200 mb-1">Subject</label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        placeholder="Subject"
                                        className="w-full px-4 py-2 bg-black border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 text-white"
                                        required
                                    />
                                </div>
                            </div>

                      
                            <div>
                                <label htmlFor="message" className="block text-lg text-gray-200 mb-1">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="5"
                                    placeholder="Write your message..."
                                    className="w-full px-4 py-2 bg-black border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 text-white"
                                    required
                                ></textarea>
                            </div>

                         
                            <div>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    type="submit"
                                    className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-md text-lg transition-all"
                                >
                                    Send Message
                                </motion.button>
                            </div>
                        </form>
                    </motion.div>
                </div>


            </section>



        </>
    )
}

export default ContactMe