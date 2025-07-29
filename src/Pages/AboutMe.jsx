import React from 'react'
import { useNavigate } from 'react-router-dom'
import Card2 from '../Components/Card2'
import { motion } from 'framer-motion';
import { GoDotFill } from "react-icons/go";
import { FaArrowRightLong } from "react-icons/fa6";
import Mine from '../assets/sk.jpg';
import { Link } from 'react-router-dom';


const AboutMe = () => {
    return (
        <>
            <section className='bg-black text-white'>

                <motion.div
                    className='pt-42 ps-16 text-8xl font-semibold border-b border-gray-800 pb-10'
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    viewport={{ once: true }}
                >
                    <motion.h1
                        className='text-pink-600'
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        Hello! I'm Saloni Khatri...
                    </motion.h1>

                    <motion.h1
                        className='mt-4 ps-18'
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        Crafting Code with Heart 💻💗
                    </motion.h1>
                </motion.div>


                <motion.div
                    className='bg-black text-white px-8 py-20'
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    viewport={{ once: true }}
                >
                    <div className='flex flex-col lg:flex-row justify-between items-start mt-8 gap-10'>
                        <motion.div
                            className='text-white text-2xl lg:text-3xl mx-5  leading-snug'
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            As a Full Stack Web Developer,
                            focused on <br /> clean architecture and 
                            optimized performance, <br /> I deliver 
                            web solutions that scale with <br />simplicity.
                        </motion.div>

                        <motion.div
                            className='text-gray-300 text-lg lg:text-xl max-w-xl font-serif leading-relaxed'
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            viewport={{ once: true }}
                        >
                            I bring websites to life with the <br />
                            perfect mix of design sense, code logic, <br />
                            and user interaction.
                        </motion.div>
                    </div>
                </motion.div>

                <div>
                    <Card2 />
                </div>

                <div className='bg-black text-white p-8'>
                    <span className='flex justify-end mt-4 me-30'>
                        <span className='text-gray-300 text-2xl md:text-2xl max-w-3xl font-serif'>
                            <span className='flex justify-items-center items-center border-2 rounded-full px-8 py-3   bg-cyan-700 text-white font-semibold  shadow-md hover:bg-cyan-800 hover:scale-105 transition-all duration-300 ease-in-out'>

                                <span className=''>
                                    <button > Contact Me </button>
                                </span>
                                <span className='ps-4'> <FaArrowRightLong /></span>
                            </span>
                        </span>
                    </span>

                </div>

            </section>





        </>
    )
}

export default AboutMe