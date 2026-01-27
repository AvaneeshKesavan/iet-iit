import { motion } from "framer-motion";

export default function Ticker() {
  const messages = [
    {
      text: "Welcome to IET On Campus IIT",
    },
    {
      text: "Ascend 2026 - Installation Ceremony Coming Soon",
    },
    {
      text: "Cipher 2.0 - Calling for Volunteers",
    },
  ];

  return (
    <div
      className="fixed left-0 right-0 z-40 overflow-hidden"
      style={{
        top: "72px", // Position below navbar (navbar height)
        backgroundColor: "#0058A2",
        borderBottom: "2px solid #22BBE0",
        boxShadow: "0 4px 12px rgba(0, 88, 162, 0.3)",
      }}
    >
      <div className="relative h-12 flex items-center">
        <motion.div
          className="flex items-center gap-16 whitespace-nowrap"
          animate={{
            x: [0, -1920],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
        >
          {[...Array(6)].map((_, groupIndex) => (
            <div key={groupIndex} className="flex items-center gap-16">
              {messages.map((msg, idx) => (
                <div
                  key={`${groupIndex}-${idx}`}
                  className="flex items-center gap-3 text-white font-semibold text-sm tracking-wide"
                >
                  <span style={{ color: "#22BBE0" }}>{msg.icon}</span>
                  <span>{msg.text}</span>
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
