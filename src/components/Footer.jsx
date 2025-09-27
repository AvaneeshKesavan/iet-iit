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

export default function Footer() {
  return (
    <footer className="bg-white text-black relative">
      {/* Gradient Top Line */}
      <div className="h-1 w-full bg-gradient-to-r from-blue-400 to-blue-700"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 grid md:grid-cols-3 gap-12">
        {/* Contact Info */}
        <div className="flex flex-col space-y-8">
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>

          <p className="flex items-center gap-3">
            <FaMapMarkerAlt className="text-blue-500" />
            <a
              href="https://maps.app.goo.gl/upjLstw8FFMrbFLL7"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition"
            >
              Informatics Institute of Technology, Colombo, Sri Lanka
            </a>
          </p>

          <p className="flex items-center gap-3">
            <FaPhoneAlt className="text-blue-500" />
            <a
              href="tel:+94123456789"
              className="hover:text-blue-600 transition"
            >
              +94 123 456 789
            </a>
          </p>

          <p className="flex items-center gap-3">
            <FaEnvelope className="text-blue-500" />
            <a
              href="mailto:info@ietiit.lk"
              className="hover:text-blue-600 transition"
            >
              info@ietiit.lk
            </a>
          </p>

          {/* Join Community */}
          <p className="flex items-center gap-3">
            <FaUsers className="text-blue-500" />
            <a
              href="https://forms.gle/YOUR_GOOGLE_FORM_LINK"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition font-medium"
            >
              Join Our Community
            </a>
          </p>

          {/* Social Links */}
          <div className="flex space-x-10 mt-16 text-xl">
            <a
              href="https://web.facebook.com/IETOnCampusIIT"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.linkedin.com/company/iet-on-campus-club-iit"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://www.instagram.com/iet.iit/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 transition"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Empty space for balance */}
        <div></div>

        {/* Copyright */}
        <div className="text-center md:text-right flex flex-col justify-center space-y-16">
          <p className="text-gray-600 font-medium">
            © 2025 IET On Campus – Informatics Institute of Technology. All
            rights reserved.
          </p>
          <p className="text-gray-500 text-sm">
            IET On Campus is a student-led initiative in collaboration with the
            Institution of Engineering and Technology (IET), UK. At IIT, we aim
            to inspire innovation, foster professional growth, and bridge the
            gap between academia and industry through events, workshops, and
            collaborative projects.
          </p>
        </div>
      </div>

      {/* Logos at the bottom */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mt-10 mb-16 flex justify-center items-end gap-16">
        <a
          href="/"
          className="hover:scale-105 transition-transform duration-200"
        >
          <img
            src="/assets/iet-logo.jpeg"
            alt="IET On Campus IIT"
            className="h-12 object-contain"
          />
        </a>
        <a
          href="https://www.iit.ac.lk/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-105 transition-transform duration-200"
        >
          <img
            src="/assets/iit_logo.png"
            alt="IIT Logo"
            className="h-12 object-contain"
          />
        </a>
        <a
          href="https://www.theiet.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-105 transition-transform duration-200"
        >
          <img
            src="/assets/iet-logo.jpeg"
            alt="IET Logo"
            className="h-12 object-contain"
          />
        </a>
      </div>
    </footer>
  );
}
