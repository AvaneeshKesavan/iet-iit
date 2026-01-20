import { useState, useEffect } from "react";
import { FiArrowUp } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

export default function BackToTop() {
  const [scrollY, setScrollY] = useState(0);
  const [visible, setVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / docHeight) * 100;
      setScrollY(Math.min(scrolled, 100)); 
      setVisible(scrollTop > 300);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{ 
            type: "spring", 
            stiffness: 300, 
            damping: 25,
            duration: 0.3 
          }}
          className="fixed bottom-6 right-6 z-50"
        >
          <motion.button
            onClick={scrollToTop}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="relative w-14 h-14 rounded-full cursor-pointer overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
            aria-label="Scroll to top"
            style={{
              background: `conic-gradient(
                from 0deg,
                #0058A2 ${scrollY * 3.6}deg,
                rgba(0, 88, 162, 0.2) ${scrollY * 3.6}deg
              )`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-full"></div>
            
            <div className="absolute inset-0 flex items-center justify-center">
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="rgba(255, 255, 255, 0.3)"
                  strokeWidth="2"
                  strokeDasharray="283"
                  strokeDashoffset="0"
                />
              </svg>
            </div>

            <motion.div 
              className="absolute inset-2 rounded-full bg-gradient-to-br from-blue-700 to-blue-900 flex items-center justify-center"
              animate={{ 
                scale: isHovering ? 0.9 : 1,
                rotate: isHovering ? 180 : 0 
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                animate={{ y: isHovering ? -2 : 0 }}
                transition={{ duration: 0.2, repeat: isHovering ? Infinity : 0, repeatType: "reverse" }}
              >
                <FiArrowUp 
                  size={24} 
                  className="text-white drop-shadow-sm" 
                />
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ 
                opacity: isHovering ? 1 : 0,
                y: isHovering ? 0 : 10 
              }}
              transition={{ duration: 0.2 }}
              className="absolute right-full mr-3 top-1/2 -translate-y-1/2"
            >
              <div className="relative">
                <div className="bg-gray-900 text-white text-xs font-medium px-3 py-2 rounded-lg whitespace-nowrap">
                  Scroll to top
                  <div className="text-xs text-gray-300 mt-1">
                    {Math.round(scrollY)}% scrolled
                  </div>
                </div>
                <div className="absolute left-full top-1/2 -translate-y-1/2 w-0 h-0 border-t-4 border-b-4 border-l-4 border-t-transparent border-b-transparent border-l-gray-900"></div>
              </div>
            </motion.div>
          </motion.button>

          <div className="absolute inset-0 w-20 h-20 -m-3 pointer-events-none opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute inset-0 border-2 border-blue-500/30 rounded-full animate-ping"></div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}