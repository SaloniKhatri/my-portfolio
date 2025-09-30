// src/components/Hero.jsx
import React from 'react';
import Card from '../Components/Card'
import { motion } from 'framer-motion';
import { GoDotFill } from "react-icons/go";
import { FaArrowRightLong } from "react-icons/fa6";

import { Link } from 'react-router-dom';
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";

const projectVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const techs = [
    'HTML', 'CSS', 'Bootstrap', 'Tailwind CSS',
    'JavaScript', 'React', 'Node',
    'Express', 'MongoDB', 'Python',
    'VS Code', 'GitHub',
];

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.05,
            duration: 0.4,
        },
    }),
};

const Hero = () => {
    return (
        <>

            <section className="min-h-screen bg-black text-white flex flex-col justify-center items-center text-center px-4">
                {/* starting */}
                <div className=''>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="text-xl md:text-3xl font-semibold leading-tight max-w-3xl ms-2"
                    >
                        <span> <span className='text-white'>res.end</span>( <span className='text-green-400'>"Hello World!" </span> ); </span>
                        {/* res.end('Hello world!'); */}



                    </motion.h1>

                </div>
                {/* Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className=""
                > <span className='flex justify-items-center items-center'>
                        <span className='mx-4'>
                            <img src="https://i.pinimg.com/736x/96/3e/6c/963e6cf28bffe1c7efc238de9d7e0915.jpg" alt="" className="w-25 h-auto rounded-full" />
                        </span>
                        <span className='text-gray-300 text-2xl md:text-3xl font-semibold leading-tight max-w-3xl py-2 px-5 border border-gray-500 rounded-full cursor-pointer font-serif'>
                            <span >Hey, I'm  Saloni</span>
                        </span>
                    </span>

                </motion.h1>

                {/* Subheading*/}
                <motion.h4
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, delay: 0.2 }}
                    className="text-lg md:text-8xl text-gray-300"
                >
                    <span className='font-bold'>
                        <span className='text-purple-500'>DIGITAL</span> <br />
                        <span className='text-yellow-200'>EXPERIENCE</span> <br />
                        <span className='flex justify-items-center items-center'>
                            <span>DESIGNER</span>
                            <span className=' ms-5 mt-3 py-3 px-5 text-2xl border border-gray-500 rounded-full cursor-pointer font-serif'>
                                <div >
                                    <span className='flex justify-items-center items-center'>
                                        <span> <GoDotFill className="text-green-500 text-3xl" />
                                        </span>
                                        <span className=''>
                                            <Link to="/contact" className="hover:text-cyan-400">
                                                <button >  Let's Connect</button>
                                            </Link>
                                        </span>
                                    </span>
                                </div>
                            </span>
                        </span>


                        <span>&</span>
                        <span className='text-pink-700'> DEVELOPER.</span>
                    </span>
                    {/* Full Stack Developer */}
                </motion.h4>

                {/* Paragraph */}
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, delay: 0.4 }}
                    className="text-sm md:text-3xl text-white mt-4 max-w-2xl"
                >
                    I build things for the web that borders on <br /> <span className='text-purple-500' >efficiency</span>, <span className='text-yellow-200'> aesthetics</span> and <span className='text-pink-500'>functionality</span>.
                </motion.p>
            </section>

            {/* 2. contact */}

            <div className="bg-black text-white border-t border-gray-800">
                <div className=" sm:px-6 lg:px-8 py-3">
                    <div className="flex items-center justify-between ">

                        {/* start */}
                        <div className=" font-semibold">
                            <span > //Design, Code, Engage</span>
                        </div>

                        {/* Mid Items */}
                        <div className=" md:flex md:items-center space-x-10 font-semibold text-3xl border border-gray-800 rounded-full py-4 px-15 ">
                            <Link to="https://github.com/SaloniKhatri" className="hover:text-cyan-400">
                                <FaGithub />
                                {/* github */}
                            </Link>
                            <Link to="/https://www.linkedin.com/in/saloni-khatri-sk24/" className="hover:text-cyan-400">
                                <FaLinkedin />

                                {/* linkedin */}
                            </Link>
                            <Link to="/" className="hover:text-cyan-400">
                                <FaInstagram />

                                {/* instagram */}
                            </Link>
                            <Link to="/" className="hover:text-cyan-400">
                                <FaTelegram />
                                {/* telegram */}
                            </Link>

                        </div>
                        {/* End */}
                        <div className=" md:flex md:items-center font-semibold text-lg">

                            <Link to="/contact" className="hover:text-cyan-400">salonikhatri2402@gmail.com</Link>
                        </div>

                    </div>
                </div>


            </div>


            <div className='bg-black text-white p-8'>
                <div className='flex flex-col md:flex-row justify-between items-start mt-8'>

                    {/* Left Big Text */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }} // Run only once
                        className='text-white text-3xl md:text-5xl mx-5 mb-6 md:mb-0'
                    >
                        Empowering success in the digital landscape. <br />
                        Together, we shape a visionary future, delivering <br />
                        on promises and continuously pioneering <br />
                        innovation.
                    </motion.div>

                    {/* Right Small Text */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        viewport={{ once: true }}
                        className='text-gray-300 text-lg md:text-xl max-w-3xl font-serif mx-5'
                    >
                        My blend of design, coding, and interaction <br />
                        expertise distinguishes me within the tech <br />
                        industry.
                    </motion.div>
                </div>
            </div>

            <div className='bg-black p-8'>
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className='text-green-500 text-3xl md:text-4xl mx-4 font-bold border-b border-gray-800 pb-8'
                >
                    Coding the Future <br />
                    Architecting Innovation
                </motion.div>
            </div>

            <div className='bg-black text-white text-3xl pb-4'>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className='bg-black text-white text-2xl md:text-3xl ps-8 md:ps-12 pb-4 leading-relaxed'
                >
                    I specialize in engineering bespoke solutions, <br />
                    consistently pushing the limits in each project, <br />
                    with an unwavering dedication to prioritizing <br />
                    excellence.
                </motion.div>            </div>

            <div className='bg-black text-white p-8'>
                <span className='flex justify-end mt-8 me-30'>
                    <span className='text-gray-300 text-2xl md:text-2xl max-w-3xl font-serif'>
                        <span className='flex justify-items-center items-center border-2 rounded-full px-8 py-3   bg-cyan-700 text-white font-semibold  shadow-md hover:bg-cyan-800 hover:scale-105 transition-all duration-300 ease-in-out'>

                            <span className=''>
                                <Link to="/about" className="">
                                    <button >  About Me</button>
                                </Link>
                            </span>
                            <span className='ps-4'> <FaArrowRightLong /></span>
                        </span>
                    </span>
                </span>

            </div>

            <div>
                <Card />
            </div>

            <div className="py-16 px-4 bg-black">
                <motion.span
                    className="flex justify-start mt-8 border-b border-gray-800 pb-8"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={projectVariants}
                >
                    <span className='flex justify-start mt-8  pb-4 '>
                        <span className=' font-bold text-3xl md:text-3xl max-w-3xl font-serif'>
                            <span className='flex justify-items-center items-center'>
                                <span className=' text-pink-700 text-5xl'>
                                    <button >  My Projects </button>
                                </span>
                                <span className='ps-4'> </span>
                            </span>
                        </span>
                    </span>
                </motion.span>

                <span className=''>
                    <span className='px-22 font-bold  max-w-3xl font-serif'>
                        <span className='text-white flex justify-between items-center border-b border-gray-800 p-15'>

                            <span className='text-4xl md:text-4xl'>
                                <a href=''>Todos App </a>
                            </span>
                            <span className='text-xl md:text-xl'> Developed a dynamic and responsive To-Do application using React.js <br />that allows users to manage daily tasks with ease. <br /> Implemented features including task creation, completion toggling, <br /> and deletion, all with real-time UI updates through state management.</span>
                        </span>
                    </span>
                </span>
                <span className=''>
                    <span className='px-22 font-bold  max-w-3xl font-serif'>
                        <span className='text-white flex justify-between items-center border-b border-gray-800 p-15'>

                            <span className='text-4xl md:text-4xl'>
                                <a href=''>Bakery Website </a>
                            </span>
                            <span className='text-xl md:text-xl'> Designed and developed a visually appealing, fully responsive <br /> bakery website  using React.js to showcase products, promote <br /> brand identity, and
                                enhance user engagement. Focused on <br /> component-based architecture, interactive UI, and smooth user <br /> navigation.</span>
                        </span>
                    </span>
                </span>
                <span className=''>
                    <span className='px-22 font-bold  max-w-3xl font-serif'>
                        <span className='text-white flex justify-between items-center border-b border-gray-800 p-15'>

                            <span className='text-4xl md:text-4xl'>
                                <a href=''>Uber Clone </a>
                            </span>
                            <span className='text-xl md:text-xl'> The Uber Clone is a full-stack ride-booking web application <br /> that replicates the core functionalities of Uber. It allows <br />users to book a ride, track driver location in real-time, <br /> and calculate fare dynamically based on distance.</span>
                        </span>
                    </span>
                </span>

                <div className='bg-black text-white p-8'>
                    <span className='flex justify-center mt-8'>
                        <span className='text-gray-300 text-2xl md:text-2xl max-w-3xl font-serif'>
                            <span className='flex justify-items-center items-center border-2 rounded-full px-8 py-3  bg-cyan-700 text-white font-semibold  shadow-md hover:bg-cyan-800 hover:scale-105 transition-all duration-300 ease-in-out'>
                                <span className="">
                                  <Link to="/projects" className="">
                                                <button >Load More</button>
                                            </Link>

                                </span>
                                <span className='ps-4'> <FaArrowRightLong /></span>
                            </span>
                        </span>
                    </span>

                </div>
            </div>

            {/* <div className=" bg-black">
                <h2 className="text-4xl font-bold text-center mb-5 text-pink-700 font-serif">My Tech Stack</h2>
                <div className='text-4xl text-center p-2 '>
                    <span className='text-white'>My expertise spans a diverse range of <span className='text-yellow-200'>technologies</span>, enabling me to deliver <br />
                        comprehensive and <span className=''>cutting-edge solutions</span> across various platforms.
                    </span>

                </div>
                <div className="grid grid-cols-1 sm:grid-cols-5 lg:grid-cols-12 max-w-8xl ms-16 py-26 text-purple-400 text-2xl">
                    <span>HTML</span>
                    <span>CSS</span>
                    <span>Bootstrap</span>
                    <span>Tailwind CSS</span>
                    <span>JavaScript</span>
                    <span>React</span>
                    <span>Node</span>
                    <span>Express</span>
                    <span>MongoDB</span>
                    <span>Python</span>
                    <span>VS Code</span>
                    <span>Github</span>

                </div>
            </div> */}
            <div className="bg-black py-16 px-4 ">
                {/* Heading */}
                <motion.h2
                    className="text-5xl font-bold text-center mb-5 text-pink-700 font-serif"
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    My Tech Stack
                </motion.h2>

                {/* Description */}
                <motion.div
                    className="text-3xl text-center text-white px-4 md:px-20 mb-22 leading-relaxed"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    My expertise spans a diverse range of <span className="text-yellow-300 font-semibold">technologies</span>, enabling me to deliver <br />
                    comprehensive and <span className="text-cyan-400 font-semibold">cutting-edge solutions</span> across various platforms.
                </motion.div>

                {/* Tech Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-6xl mx-auto text-purple-300 text-center text-xl font-semibold">
                    {techs.map((tech, i) => (
                        <motion.div
                            key={tech}
                            className="p-4 border border-gray-700 rounded-lg hover:bg-purple-800 hover:text-white transition-all duration-300"
                            custom={i}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={itemVariants}
                        >
                            {tech}
                        </motion.div>
                    ))}
                </div>
            </div>

        </>

    );
};

export default Hero;
