// WhatIDo.jsx
import { Code, Server, Database, Globe } from 'lucide-react'
import { motion } from 'framer-motion';


const services = [
  {
    icon: <Code size={40} className="text-cyan-500" />,
    title: "Frontend Development",
    desc: "Building responsive, user-friendly interfaces using HTML, CSS, Tailwind CSS, JavaScript & React.",
  },
  {
    icon: <Server size={40} className="text-cyan-500" />,
    title: "Backend Development",
    desc: "Creating RESTful APIs and scalable backend logic using Node.js and Express.",
  },
  {
    icon: <Database size={40} className="text-cyan-500" />,
    title: "Database Management",
    desc: "Managing MongoDB & SQL databases to ensure efficient data handling.",
  },
  {
    icon: <Globe size={40} className="text-cyan-500" />,
    title: "Full Stack Projects & Deployment",
    desc: "Delivering complete apps and deploying them using GitHub, Vercel & Render.",
  }
];
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function WhatIDo() {
  return (
    <section className="py-16 px-4 bg-black">
      <motion.h2
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold text-center mb-12 text-pink-700 font-serif"
      >
        What I Do
      </motion.h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 max-w-8xl mx-auto mt-22"
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="flex flex-col p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 text-white border border-gray-800 h-86 bg-[#0e0f0f]"
          >
            <div className="mb-5 mt-24">{service.icon}</div>
            <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
            <p className="text-yellow-200 text-md">{service.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
