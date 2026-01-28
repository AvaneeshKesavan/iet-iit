import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const stageVariants = {
  hidden: {
    opacity: 0,
    y: 20,
    pointerEvents: "none",
  },
  visible: {
    opacity: 1,
    y: 0,
    pointerEvents: "auto",
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Preloader({ onLoadingComplete }) {
  const [stage, setStage] = useState(1);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setStage(2), 2400);
    const t2 = setTimeout(() => setStage(3), 6800);
    const t3 = setTimeout(
      () => {
        setDone(true);
        onLoadingComplete?.();
      },
      2400 + 6800 + 2200,
    );

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [onLoadingComplete]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-white overflow-hidden"
          style={{ fontFamily: "Arial, sans-serif" }}
        >
          {/* Background grid */}
          <div className="absolute inset-0 opacity-5">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230058A2' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            />
          </div>

          {/* ---------- STAGE 1 ---------- */}
          <motion.div
            variants={stageVariants}
            initial="hidden"
            animate={stage === 1 ? "visible" : "hidden"}
            className="absolute text-center px-6"
          >
            <div className="flex flex-col items-center gap-4">
              <motion.h1
                className="text-5xl md:text-7xl font-bold"
                style={{ color: "#003A66" }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Empowering
              </motion.h1>

              <motion.h1
                className="text-5xl md:text-7xl font-bold"
                style={{ color: "#0058A2" }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                Innovation
              </motion.h1>
            </div>

            <motion.div
              className="h-1 mx-auto rounded-full mt-8"
              style={{ backgroundColor: "#22BBE0" }}
              initial={{ width: 0 }}
              animate={{ width: "200px" }}
              transition={{ duration: 0.8, delay: 0.8 }}
            />
          </motion.div>

          {/* ---------- STAGE 2 ---------- */}
          <motion.div
            variants={stageVariants}
            initial="hidden"
            animate={stage === 2 ? "visible" : "hidden"}
            className="absolute w-full overflow-hidden"
          >
            <motion.div
              className="whitespace-nowrap"
              animate={{
                x: ["100%", "-100%"],
              }}
              transition={{
                duration: 7.8,
                ease: "linear",
              }}
            >
              <h1
                className="text-6xl md:text-8xl font-bold inline-block"
                style={{ color: "#003A66" }}
              >
                IET On Campus Informatics Institute of Technology
              </h1>
            </motion.div>

            {/* Edge fade */}
            <div
              className="absolute inset-y-0 left-0 w-32 pointer-events-none"
              style={{
                background: "linear-gradient(to right, white, transparent)",
              }}
            />
            <div
              className="absolute inset-y-0 right-0 w-32 pointer-events-none"
              style={{
                background: "linear-gradient(to left, white, transparent)",
              }}
            />
          </motion.div>

          {/* ---------- STAGE 3 ---------- */}
          <motion.div
            variants={stageVariants}
            initial="hidden"
            animate={stage === 3 ? "visible" : "hidden"}
            className="absolute flex flex-col items-center"
          >
            <motion.img
              src="/assets/iet-iit.png"
              alt="IET On Campus IIT"
              className="h-32 md:h-40 w-auto object-contain"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 0.8,
                ease: [0.43, 0.13, 0.23, 0.96],
              }}
            />

            <div className="flex gap-2 mt-10">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: "#0058A2" }}
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </div>
          </motion.div>

          {/* Corner accents */}
          <motion.div
            className="absolute top-0 left-0 w-24 h-24 border-t-2 border-l-2 rounded-tl-xl"
            style={{ borderColor: "#0058A2" }}
            initial={{ opacity: 0, x: -30, y: -30 }}
            animate={{ opacity: 0.2, x: 0, y: 0 }}
            transition={{ duration: 1 }}
          />
          <motion.div
            className="absolute bottom-0 right-0 w-24 h-24 border-b-2 border-r-2 rounded-br-xl"
            style={{ borderColor: "#22BBE0" }}
            initial={{ opacity: 0, x: 30, y: 30 }}
            animate={{ opacity: 0.2, x: 0, y: 0 }}
            transition={{ duration: 1 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
