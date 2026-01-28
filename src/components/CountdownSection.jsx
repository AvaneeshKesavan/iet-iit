import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaCalendarAlt,
  FaClock,
  FaHourglassHalf,
  FaMapMarkerAlt,
  FaArrowRight,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function CountdownSection({ event }) {
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    if (!event?.date) return;

    const updateCountdown = () => {
      const eventDate = new Date(event.date).getTime();
      const now = new Date().getTime();
      const diff = eventDate - now;

      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / (1000 * 60)) % 60),
          seconds: Math.floor((diff / 1000) % 60),
        });
      } else {
        setTimeLeft(null);
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [event?.date]);

  const iconMap = {
    days: <FaCalendarAlt className="text-2xl mb-2" />,
    hours: <FaClock className="text-2xl mb-2" />,
    minutes: <FaClock className="text-xl mb-2" />,
    seconds: <FaHourglassHalf className="text-xl mb-2" />,
  };

  if (!event) return null;

  return (
    <section
      className="relative py-20 px-4 overflow-hidden bg-white"
      style={{ fontFamily: "Arial, sans-serif" }}
    >
      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
            style={{ color: "#003A66" }}
          >
            {event.title}
          </h2>

          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            {event.description}
          </p>

          {/* Event Details */}
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            <div className="flex items-center gap-2">
              <FaCalendarAlt style={{ color: "#0058A2" }} />
              <span className="font-semibold" style={{ color: "#003A66" }}>
                {new Date(event.date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt style={{ color: "#0058A2" }} />
              <span className="font-semibold" style={{ color: "#003A66" }}>
                IIT Campus
              </span>
            </div>
          </div>
        </motion.div>

        {timeLeft ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto mb-10"
          >
            {["days", "hours", "minutes", "seconds"].map((unit, index) => (
              <motion.div
                key={unit}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="relative rounded-2xl p-6 md:p-8 shadow-xl flex flex-col items-center justify-center border-2 transition-all duration-300"
                style={{
                  backgroundColor: "#0058A2",
                  borderColor: "#22BBE0",
                }}
              >
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(34, 187, 224, 0.3) 0%, rgba(0, 88, 162, 0.3) 100%)",
                  }}
                />
                <div className="relative z-10 flex flex-col items-center">
                  <span style={{ color: "#22BBE0" }}>{iconMap[unit]}</span>
                  <span className="text-5xl md:text-6xl font-bold text-white mb-2">
                    {String(timeLeft[unit] || 0).padStart(2, "0")}
                  </span>
                  <span className="uppercase text-sm md:text-base font-bold tracking-wider text-gray-200">
                    {unit}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center py-12 rounded-2xl max-w-2xl mx-auto mb-10 border-2 shadow-xl"
            style={{
              backgroundColor: "#0058A2",
              borderColor: "#22BBE0",
            }}
          >
            <h3 className="text-3xl font-bold text-white mb-2">
              Event Starting Soon!
            </h3>
            <p className="text-gray-200">The countdown has completed</p>
          </motion.div>
        )}

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <motion.button
            onClick={() => navigate(event.link)}
            whileHover={{
              boxShadow: "0 10px 30px rgba(0, 88, 162, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-10 py-5 rounded-xl font-bold text-lg uppercase tracking-wide text-white shadow-xl transition-all"
            style={{
              backgroundColor: "#0058A2",
            }}
          >
            View Event Details
            <FaArrowRight className="text-xl" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
