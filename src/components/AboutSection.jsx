import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative py-28 bg-gradient-to-b from-white via-gray-50 to-white text-black overflow-hidden"
    >
      {/* Subtle background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 -left-32 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-40 animate-pulse"></div>
        <div className="absolute bottom-0 -right-32 w-96 h-96 bg-pink-100 rounded-full blur-3xl opacity-40 animate-pulse"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-6 md:px-12">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold mb-8 tracking-tight text-center"
        >
          <span className="bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-sm">
            ABOUT US
          </span>
        </motion.h2>

        {/* Subheading */}
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg md:text-xl font-semibold mb-14 text-gray-700 text-center max-w-3xl mx-auto leading-relaxed"
        >
          The Institution of Engineering and Technology on Campus – Informatics
          Institute of Technology
        </motion.h3>

        {/* Two-column layout */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <p className="text-lg leading-relaxed text-gray-800 backdrop-blur-sm transition-all duration-300">
              IET On Campus – Informatics Institute of Technology (IIT) is a
              vibrant student chapter affiliated with the prestigious
              Institution of Engineering and Technology (IET). Our mission is to
              empower the next generation of engineers, technologists, and
              innovators by bridging the gap between academic knowledge and
              real-world applications.
              <br />
              <br />
              At IIT, we create an engaging environment where students can
              thrive through hands-on workshops, technical talks, industry
              exposure, and collaborative projects. From cutting-edge tech
              events to professional networking sessions, we provide a platform
              for students to enhance their skills, explore emerging
              technologies, and grow as future leaders in engineering.
              <br />
              <br />
              We believe in fostering a passion for innovation, encouraging
              teamwork, and nurturing career development through continuous
              learning. Join us in our journey to inspire, innovate, and make a
              meaningful impact in the world of technology.
            </p>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative group">
              <img
                src="/assets/IETlogo.svg"
                alt="About IET IIT"
                className="w-full max-w-md drop-shadow-md transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-pink-500/10 rounded-3xl blur-2xl opacity-50 group-hover:opacity-70 transition-all duration-500"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
