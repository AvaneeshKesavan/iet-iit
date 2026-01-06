import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaUsers,
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer
      className="bg-white text-black relative z-10 border-t-4"
      style={{ fontFamily: "Arial, sans-serif", borderTopColor: "#0058A2" }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 grid md:grid-cols-3 gap-8">
        <div className="flex flex-col space-y-5">
          <h3
            className="text-lg font-bold mb-2 uppercase"
            style={{ color: "#003A66" }}
          >
            Contact Us
          </h3>

          <p className="flex items-center gap-3 group text-sm">
            <FaMapMarkerAlt
              className="transition"
              style={{ color: "#0058A2" }}
            />
            <a
              href="https://maps.app.goo.gl/upjLstw8FFMrbFLL7"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline transition-colors duration-300"
              style={{ color: "#003A66" }}
              onMouseEnter={(e) => (e.target.style.color = "#0058A2")}
              onMouseLeave={(e) => (e.target.style.color = "#003A66")}
            >
              Informatics Institute of Technology, Colombo, Sri Lanka
            </a>
          </p>

          <p className="flex items-center gap-3 group text-sm">
            <FaPhoneAlt className="transition" style={{ color: "#0058A2" }} />
            <a
              href="tel:+94768887795"
              className="hover:underline transition-colors duration-300"
              style={{ color: "#003A66" }}
              onMouseEnter={(e) => (e.target.style.color = "#0058A2")}
              onMouseLeave={(e) => (e.target.style.color = "#003A66")}
            >
              +94 76 888 7795
            </a>
          </p>

          <p className="flex items-center gap-3 group text-sm">
            <FaEnvelope className="transition" style={{ color: "#0058A2" }} />
            <a
              href="mailto:ietoncampus@iit.ac.lk"
              className="hover:underline transition-colors duration-300"
              style={{ color: "#003A66" }}
              onMouseEnter={(e) => (e.target.style.color = "#0058A2")}
              onMouseLeave={(e) => (e.target.style.color = "#003A66")}
            >
              ietoncampus@iit.ac.lk
            </a>
          </p>

          <p className="flex items-center gap-3 group text-sm">
            <FaUsers className="transition" style={{ color: "#0058A2" }} />
            <a
              href="https://forms.gle/13rS5iqqSHh3rWSv9"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline transition-colors duration-300 font-bold"
              style={{ color: "#003A66" }}
              onMouseEnter={(e) => (e.target.style.color = "#0058A2")}
              onMouseLeave={(e) => (e.target.style.color = "#003A66")}
            >
              Join Our Community
            </a>
          </p>

          <div className="flex space-x-6 mt-8 text-lg">
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
              {
                icon: FaYoutube,
                link: "https://www.youtube.com/@ietoncampusiit",
                color: "hover:text-red-600",
              },
            ].map((social, idx) => (
              <motion.a
                key={idx}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
                className={`${social.color} transition-transform duration-200`}
              >
                <social.icon />
              </motion.a>
            ))}
          </div>
        </div>

        <div></div>

        <div className="text-center md:text-right flex flex-col justify-center space-y-6">
          <p
            className="font-bold text-sm leading-relaxed"
            style={{ color: "#003A66" }}
          >
            © 2026 IET On Campus – Informatics Institute of Technology. All
            rights reserved.
          </p>
          <p className="text-gray-600 text-xs leading-relaxed">
            IET On Campus IIT is a student-led initiative in collaboration with
            the Institution of Engineering and Technology (IET), UK. We inspire
            innovation and bridge the gap between academia and industry through
            workshops and collaborative projects.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 mt-2 mb-6 flex justify-center items-end gap-4 md:gap-16 scale-110">
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
                idx === 0 ? "h-12 translate-y-1" : "h-10"
              }`}
            />
          </motion.a>
        ))}
      </div>
    </footer>
  );
}
