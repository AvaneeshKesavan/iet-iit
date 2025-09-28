import React from "react";
import { FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Suruthisha Sundareswaran",
    position: "President",
    image: "/images/team1.jpeg",
    email: "Suruthisha@example.com",
    linkedin: "https://lk.linkedin.com/in/suruthisha-sundareswaran",
  },
  {
    name: "Dhulinde Thevarapperuma",
    position: "Vice President",
    image: "/images/team2.jpeg",
    email: "Dhulinde@example.com",
    linkedin: "https://linkedin.com/in/Dhulinde-Thevarapperuma",
  },
  {
    name: "Sumuthna Herath",
    position: "Secretary",
    image: "/images/team3.jpeg",
    email: "Sumuthna@example.com",
    linkedin: "https://lk.linkedin.com/in/sumuthna-herath",
  },
  {
    name: "Lihini Hewavissa",
    position: "Treasurer",
    image: "/images/team4.jpeg",
    email: "Lihini@example.com",
    linkedin: "https://linkedin.com/in/Lihini-Hewavissa",
  },
  {
    name: "James Motha",
    position: "Director of Finance",
    image: "/images/team5.jpeg",
    email: "James@example.com",
    linkedin: "https://lk.linkedin.com/in/jamesmotha",
  },
  {
    name: "Sunera Manimendra",
    position: "Director of Events",
    image: "/images/team6.jpeg",
    email: "Sunera@example.com",
    linkedin: "https://lk.linkedin.com/in/sunera-manimendra",
  },
  {
    name: "Anusigan Sivananthan",
    position: "Director of Media",
    image: "/images/team7.jpeg",
    email: "Anusigan@example.com",
    linkedin: "https://lk.linkedin.com/in/anusigan-sivananthan",
  },
  {
    name: "Ravindi Welagedara",
    position: "Director of Public Relations",
    image: "/images/team8.jpeg",
    email: "Ravindi@example.com",
    linkedin: "https://lk.linkedin.com/in/ravindi-welagedara",
  },
];

export default function TeamPage() {
  return (
    <div className="pt-16 bg-gray-50">
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight"
          >
            <span className="bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              OUR TEAM
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl font-medium text-gray-700 mb-16 max-w-3xl mx-auto"
          >
            Meet the passionate team behind IET On Campus – Informatics
            Institute of Technology.
          </motion.p>

          {/* Team Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
            {teamMembers.map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{
                  rotateX: 5,
                  rotateY: 5,
                  scale: 1.05,
                  transition: { type: "spring", stiffness: 300, damping: 20 },
                }}
                className="relative bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
              >
                {/* Gradient border on hover */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 opacity-0 hover:opacity-100 pointer-events-none transition-opacity duration-300"></div>

                {/* Profile Picture & Info */}
                <div className="relative z-10 p-6 flex flex-col items-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-md mb-4"
                  />
                  <h3 className="text-xl font-semibold mb-1 text-black">
                    {member.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{member.position}</p>

                  {/* Icons */}
                  <div className="flex space-x-4 text-lg text-blue-600">
                    <a
                      href={`mailto:${member.email}`}
                      className="hover:text-blue-700 transition"
                    >
                      <FaEnvelope />
                    </a>
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-700 transition"
                    >
                      <FaLinkedinIn />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
