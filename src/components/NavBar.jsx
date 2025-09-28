import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion"; // ensure framer-motion installed

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("hero");
  const navigate = useNavigate();
  const location = useLocation();

  const navLinks = [
    { name: "Home", to: "hero", external: false },
    { name: "About", to: "about", external: false },
    { name: "Our Work", to: "/events", external: true },
    { name: "Team", to: "/team", external: true },
    { name: "Contact", to: "contact", external: false },
  ];

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const navbarEl = document.querySelector("nav");
      const navbarHeight = navbarEl?.offsetHeight || 72;
      const elTop =
        el.getBoundingClientRect().top + window.scrollY - navbarHeight;
      window.scrollTo({ top: elTop, behavior: "smooth" });
      setActiveLink(id);
    }
  };

  const handleClick = (link) => {
    if (link.external) {
      navigate(link.to);
      setActiveLink(link.to);
      setIsOpen(false);
      return;
    }

    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: link.to } });
    } else {
      scrollToSection(link.to);
    }
    setIsOpen(false);
  };

  // Update active link when route changes
  useEffect(() => {
    if (location.pathname === "/") {
      setActiveLink("hero");
    } else {
      setActiveLink(location.pathname);
    }
    setIsOpen(false);
  }, [location.pathname]);

  // Scroll listener for homepage
  useEffect(() => {
    if (location.pathname !== "/") return;

    const onScroll = () => {
      const sections = ["hero", "about"];
      let current = "hero";

      sections.forEach((sec) => {
        const el = document.getElementById(sec);
        if (!el) return;
        const offsetTop = el.offsetTop - 72 - 20; // 72 is navbar height
        if (window.scrollY >= offsetTop) current = sec;
      });

      const footerEl = document.getElementById("contact");
      if (footerEl) {
        const footerTop = footerEl.offsetTop - 72 - 20;
        const scrollBottom = window.scrollY + window.innerHeight;
        if (
          scrollBottom >= footerTop ||
          scrollBottom >= document.body.scrollHeight - 50
        ) {
          current = "contact";
        }
      }

      setActiveLink(current);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [location.pathname]);

  const hasMotion =
    typeof motion !== "undefined" && typeof AnimatePresence !== "undefined";

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => handleClick({ to: "hero", external: false })}
          aria-label="Go to home"
          className="flex items-center gap-3"
        >
          <div className="h-16 w-auto relative">
            <img
              src="/assets/iet-iit.png"
              alt="IET Logo"
              className="h-full object-contain"
            />
          </div>
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => {
            const isActive = activeLink === link.to;
            return (
              <button
                key={link.name}
                onClick={() => handleClick(link)}
                className="relative px-1 py-1 text-sm font-medium text-black hover:text-blue-600 transition-colors"
                aria-current={isActive ? "true" : undefined}
              >
                <span className={isActive ? "text-blue-600" : ""}>
                  {link.name}
                </span>
                {hasMotion ? (
                  <motion.span
                    layout
                    initial={{ width: "0%" }}
                    animate={{ width: isActive ? "100%" : "0%" }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.24 }}
                    className="absolute left-0 bottom-0 h-[2px] bg-blue-600"
                  />
                ) : (
                  <span
                    className="absolute left-0 bottom-0 h-[2px] bg-blue-600"
                    style={{
                      width: isActive ? "100%" : "0%",
                      transition: "width .24s",
                    }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen((s) => !s)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            className="p-2 rounded-md text-black hover:bg-gray-100 transition"
          >
            {isOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {hasMotion ? (
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="md:hidden bg-white shadow-md"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.22 }}
            >
              <div className="flex flex-col px-4 py-3 space-y-2">
                {navLinks.map((link) => {
                  const isActive = activeLink === link.to;
                  return (
                    <button
                      key={link.name}
                      onClick={() => handleClick(link)}
                      className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium transition ${
                        isActive
                          ? "text-blue-600 bg-blue-50"
                          : "text-black hover:bg-gray-100"
                      }`}
                    >
                      {link.name}
                    </button>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      ) : (
        isOpen && (
          <div className="md:hidden bg-white shadow-md">
            <div className="flex flex-col px-4 py-3 space-y-2">
              {navLinks.map((link) => {
                const isActive = activeLink === link.to;
                return (
                  <button
                    key={link.name}
                    onClick={() => handleClick(link)}
                    className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium transition ${
                      isActive
                        ? "text-blue-600 bg-blue-50"
                        : "text-black hover:bg-gray-100"
                    }`}
                  >
                    {link.name}
                  </button>
                );
              })}
            </div>
          </div>
        )
      )}
    </nav>
  );
}
