import React from "react";
import { FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Avaneesh Kesavan",
    position: "President",
    image: "/images/team9.jpg",
    email: "kesavan.avaneesh@gmail.com",
    linkedin: "https://lk.linkedin.com/in/avaneesh-kesavan",
  },
  {
    name: "Bosilu Jayasuriya",
    position: "Vice President",
    image: "/images/team9.jpg",
    email: "#",
    linkedin: "https://lk.linkedin.com/in/bosilu-jayasuriya-47666039a",
  },
  {
    name: "Yeheni De Silva",
    position: "Secretary",
    image: "/images/team9.jpg",
    email: "#",
    linkedin: "https://lk.linkedin.com/in/yeheni-de-silva-682714295",
  },
  {
    name: "Madusha Kolambage",
    position: "Treasurer",
    image: "/images/team9.jpg",
    email: "#",
    linkedin: "https://lk.linkedin.com/in/madusha-kolambage-282770333",
  },
  {
    name: "Hasandi Seelarathne",
    position: "Director of Finance",
    image: "/images/team9.jpg",
    email: "#",
    linkedin: "#",
  },
  {
    name: "Sahan Baddegama",
    position: "Director of Events",
    image: "/images/team9.jpg",
    email: "#",
    linkedin: "https://lk.linkedin.com/in/sahan-baddegama-761067319",
  },
  {
    name: "Sulakna Paulus",
    position: "Director of Media",
    image: "/images/team9.jpg",
    email: "#",
    linkedin: "#",
  },
  {
    name: "Malithi Ranaweera",
    position: "Director of Public Relations",
    image: "/images/team9.jpg",
    email: "#",
    linkedin: "#",
  },
  {
    name: "Lavan Saravanabavanan",
    position: "Director of Editorial",
    image: "/images/team9.jpg",
    email: "#",
    linkedin: "#",
  },
  {
    name: "Thinal Fernando",
    position: "Director of Membership",
    image: "/images/team9.jpg",
    email: "#",
    linkedin: "https://lk.linkedin.com/in/thinal-fernando",
  },
];

const coreTeam = teamMembers.slice(0, 4);
const directors = teamMembers.slice(4);

const TeamCard = ({ member, idx }) => (
  <motion.div
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
    className="relative bg-white rounded-xl shadow-md overflow-hidden flex flex-col h-full"
  >
    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

    <div className="relative z-10 p-6 flex flex-col flex-1 items-center">
      <img
        src={member.image}
        alt={member.name}
        className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-md mb-4"
      />

      <h3 className="text-xl font-semibold text-center mb-1 min-h-[3rem]">
        {member.name}
      </h3>

      <p className="text-gray-600 text-center mb-4 min-h-[2rem]">
        {member.position}
      </p>

      <div className="flex gap-4 text-blue-600 mt-auto">
        <a href={`mailto:${member.email}`} className="hover:text-blue-700">
          <FaEnvelope />
        </a>
        <a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-700"
        >
          <FaLinkedinIn />
        </a>
      </div>
    </div>
  </motion.div>
);

export default function TeamPage() {
  return (
    <div className="pt-16 bg-gray-50">
      <section className="py-24 max-w-7xl mx-auto px-4 md:px-8 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold mb-6"
        >
          <span className="bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            OUR TEAM
          </span>
        </motion.h2>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-700 mb-20 max-w-3xl mx-auto"
        >
          Meet the passionate team behind IET On Campus – Informatics Institute of Technology.
        </motion.p>

        {/* Core Team — 4 in one row on wide screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12 mb-20">
          {coreTeam.map((member, idx) => (
            <TeamCard key={idx} member={member} idx={idx} />
          ))}
        </div>

        {/* Directors — 3 per row ONLY on wide screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12">
          {directors.map((member, idx) => (
            <TeamCard key={idx} member={member} idx={idx} />
          ))}
        </div>
      </section>
    </div>
  );
}
