// WhatIDo.jsx
import { Code, Server, Globe } from 'lucide-react'

const services = [
  {
    icon: <Code size={40} className="text-cyan-500" />,
    title: "Frontend Development",
    desc: "I specialize in building interactive, user-friendly, and responsive web interfaces using modern frontend technologies. With a strong command over HTML, CSS, JavaScript,Bootstrap,Tailwind CSS, and React.js, I ensure seamless user experiences across all devices. My focus is on clean design, smooth functionality, and performance optimization, ensuring every website is both attractive and fast.",
  },
  {
    icon: <Server size={40} className="text-cyan-500" />,
    title: "Backend Development",
    desc: "I develop robust and scalable backend systems using modern technologies like Node.js, Express.js, and MongoDB. My focus is on writing clean, secure, and maintainable APIs, handling authentication, database design, and server-side logic. I ensure smooth communication between the frontend and backend through RESTful APIs and follow best practices for performance, error handling, and security.",
  },

  {
    icon: <Globe size={40} className="text-cyan-500" />,
    title: "The Full Package",
    desc: "What sets me apart is my ability to deliver complete full-stack applications from concept to implementation. My keen eye for design, along with my expertise in frontend and backend development, including database integration, allows me to create exceptional projects",
  }
];

export default function WhatIDo() {
  return (
    <section className="py-18 px-4 bg-black">
      <h2 className="text-5xl font-bold text-center mb-15 text-purple-500 font-serif">I can help you with...</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-8xl mx-auto">
        {services.map((service, index) => (
          <div key={index} className="flex flex-col justify-items-start p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 text-white border border-gray-800 ">
            {/* bg-#0e0f0f */}
            <div className="mb-5 mt-10">{service.icon}</div>
            <h3 className="text-3xl font-semibold mb-3">{service.title}</h3>
            <p className="text-white text-lg pb-6">{service.desc}</p>
          </div>
        ))}
      </div>
     
    </section>
  )
}
