import { useState, useEffect } from "react";
import { FiArrowUp } from "react-icons/fi";

export default function BackToTop() {
  const [scrollY, setScrollY] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / docHeight) * 100;
      setScrollY(scrolled);
      setVisible(scrollTop > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return visible ? (
    <div
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 w-14 h-14 rounded-full flex items-center justify-center cursor-pointer shadow-lg hover:shadow-xl transition-transform hover:scale-110 active:scale-95 z-50"
      style={{
        background: `conic-gradient(from 0deg, #0058A2 ${
          scrollY * 3.6
        }deg, #22BBE0 0deg)`,
      }}
    >
      <FiArrowUp size={26} className="text-white" />
    </div>
  ) : null;
}
