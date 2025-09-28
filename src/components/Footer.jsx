import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaUsers,
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-t from-white via-blue-50 to-white text-black relative z-10">
      {/* Gradient Top Line */}
      <div className="h-1 w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 grid md:grid-cols-3 gap-12">
        {/* Contact Info */}
        <div className="flex flex-col space-y-8">
          <h3 className="text-xl font-extrabold mb-4 bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Contact Us
          </h3>

          <p className="flex items-center gap-3 group">
            <FaMapMarkerAlt className="text-blue-500 group-hover:text-purple-500 transition" />
            <a
              href="https://maps.app.goo.gl/upjLstw8FFMrbFLL7"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline hover:text-blue-600 transition-colors duration-300"
            >
              Informatics Institute of Technology, Colombo, Sri Lanka
            </a>
          </p>

          <p className="flex items-center gap-3 group">
            <FaPhoneAlt className="text-blue-500 group-hover:text-purple-500 transition" />
            <a
              href="tel:+94123456789"
              className="hover:underline hover:text-blue-600 transition-colors duration-300"
            >
              +94 123 456 789
            </a>
          </p>

          <p className="flex items-center gap-3 group">
            <FaEnvelope className="text-blue-500 group-hover:text-purple-500 transition" />
            <a
              href="mailto:info@ietiit.lk"
              className="hover:underline hover:text-blue-600 transition-colors duration-300"
            >
              info@ietiit.lk
            </a>
          </p>

          <p className="flex items-center gap-3 group">
            <FaUsers className="text-blue-500 group-hover:text-purple-500 transition" />
            <a
              href="https://forms.gle/YOUR_GOOGLE_FORM_LINK"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline hover:text-blue-600 transition-colors duration-300 font-medium"
            >
              Join Our Community
            </a>
          </p>

          {/* Social Icons */}
          <div className="flex space-x-8 mt-16 text-xl">
            {[
              {
                icon: FaFacebookF,
                link: "https://web.facebook.com/IETOnCampusIIT",
                color: "hover:text-blue-600",
              },
              {
                icon: FaLinkedinIn,
                link: "https://www.linkedin.com/company/iet-on-campus-club-iit",
                color: "hover:text-blue-500",
              },
              {
                icon: FaInstagram,
                link: "https://www.instagram.com/iet.iit/",
                color: "hover:text-pink-500",
              },
            ].map((social, idx) => (
              <motion.a
                key={idx}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
                className={`${social.color} transition-transform duration-200`}
              >
                <social.icon />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Empty space for balance */}
        <div></div>

        {/* Copyright */}
        <div className="text-center md:text-right flex flex-col justify-center space-y-12">
          <p className="text-gray-600 font-medium">
            © 2025 IET On Campus – Informatics Institute of Technology. All
            rights reserved.
          </p>
          <p className="text-gray-500 text-sm">
            IET On Campus IIT is a student-led initiative in collaboration with the
            Institution of Engineering and Technology (IET), UK. At IIT, we aim
            to inspire innovation, foster professional growth, and bridge the
            gap between academia and industry through events, workshops, and
            collaborative projects.
          </p>
        </div>
      </div>

      {/* Logos at the bottom */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mt-10 mb-16 flex justify-center items-end gap-16">
        {[
          { src: "/assets/iet-iit.png", alt: "IET On Campus IIT" },
          {
            src: "/assets/iit_logo.png",
            alt: "IIT Logo",
            link: "https://www.iit.ac.lk/",
          },
          {
            src: "/assets/iet-logo.jpeg",
            alt: "IET Logo",
            link: "https://www.theiet.org/",
          },
        ].map((logo, idx) => (
          <motion.a
            key={idx}
            href={logo.link || "/"}
            target={logo.link ? "_blank" : "_self"}
            rel={logo.link ? "noopener noreferrer" : undefined}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className={`object-contain ${
                idx === 0 ? "h-16 translate-y-2" : "h-12"
              }`}
            />
          </motion.a>
        ))}
      </div>
    </footer>
  );
}
