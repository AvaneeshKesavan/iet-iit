import React from "react";
import { FaLinkedinIn, FaEnvelope } from "react-icons/fa";

const teamMembers = [
  {
    name: "Surruthisha Sundareswaran",
    position: "President",
    image: "/images/team1.jpeg",
    email: "alice@example.com",
    linkedin: "https://linkedin.com/in/alice",
  },
  {
    name: "Dhulinde Thevarapperuma",
    position: "Vice President",
    image: "/images/team2.jpeg",
    email: "bob@example.com",
    linkedin: "https://linkedin.com/in/bob",
  },
  {
    name: "Sumuthna Herath",
    position: "Secretary",
    image: "/images/team3.jpeg",
    email: "charlie@example.com",
    linkedin: "https://linkedin.com/in/charlie",
  },
  {
    name: "Lihini Hewavissa",
    position: "Treasurer",
    image: "/images/team4.jpeg",
    email: "diana@example.com",
    linkedin: "https://linkedin.com/in/diana",
  },
  {
    name: "James Motha",
    position: "Director of Finance",
    image: "/images/team5.jpeg",
    email: "ethan@example.com",
    linkedin: "https://linkedin.com/in/ethan",
  },
  {
    name: "Sunera Manimendra",
    position: "Director of Events",
    image: "/images/team6.jpeg",
    email: "fiona@example.com",
    linkedin: "https://linkedin.com/in/fiona",
  },
  {
    name: "Anusigan Sivananthan",
    position: "Director of Media",
    image: "/images/team7.jpeg",
    email: "george@example.com",
    linkedin: "https://linkedin.com/in/george",
  },
  {
    name: "Ravindi Welagedara",
    position: "Director of Public Relations",
    image: "/images/team8.jpeg",
    email: "hannah@example.com",
    linkedin: "https://linkedin.com/in/hannah",
  },
];

export default function TeamPage() {
  return (
    <div className="pt-16 bg-gray-50">
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-black">
            OUR TEAM
          </h2>
          <p className="text-lg md:text-xl font-medium text-gray-700 mb-16 max-w-3xl mx-auto">
            Meet the passionate team behind IET On Campus – Informatics
            Institute of Technology.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
            {teamMembers.map((member, idx) => (
              <div
                key={idx}
                className="relative bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                {/* Gradient border on hover */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 opacity-0 hover:opacity-100 pointer-events-none"></div>

                {/* Profile Picture */}
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
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
