import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

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
    { name: "Contact", to: "/contact", external: true },
  ];

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      // Account for navbar (72px) + ticker (48px) = 120px
      const totalHeaderHeight = 120;
      const elTop =
        el.getBoundingClientRect().top + window.scrollY - totalHeaderHeight;
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

  useEffect(() => {
    if (location.pathname === "/") {
      setActiveLink("hero");
    } else {
      setActiveLink(location.pathname);
    }
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (location.pathname !== "/") return;

    const onScroll = () => {
      const sections = ["hero", "about"];
      let current = "hero";
      const totalHeaderHeight = 120; // navbar + ticker

      sections.forEach((sec) => {
        const el = document.getElementById(sec);
        if (!el) return;
        const offsetTop = el.offsetTop - totalHeaderHeight - 20;
        if (window.scrollY >= offsetTop) current = sec;
      });

      const footerEl = document.getElementById("contact");
      if (footerEl) {
        const footerTop = footerEl.offsetTop - totalHeaderHeight - 20;
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
    <nav
      className="fixed top-0 left-0 w-full bg-white shadow-md border-b z-50 transition-all duration-300"
      style={{ fontFamily: "Arial, sans-serif", borderBottomColor: "#003A66" }}
    >
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230058A2' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>
      <div className="max-w-7xl mx-auto px-5 py-3 flex items-center justify-between">
        <button
          onClick={() => handleClick({ to: "hero", external: false })}
          aria-label="Go to home"
          className="flex items-center gap-3 group"
        >
          <div className="h-14 w-auto relative">
            <img
              src="/assets/iet-iit.png"
              alt="IET Logo"
              className="h-full object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </button>

        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => {
            const isActive = activeLink === link.to;
            return (
              <button
                key={link.name}
                onClick={() => handleClick(link)}
                className={`relative px-1 py-1 text-sm font-bold tracking-wide uppercase transition-all duration-200`}
                style={{ color: isActive ? "#0058A2" : "#003A66" }}
                onMouseEnter={(e) => (e.target.style.color = "#0058A2")}
                onMouseLeave={(e) =>
                  (e.target.style.color = isActive ? "#0058A2" : "#003A66")
                }
                aria-current={isActive ? "true" : undefined}
              >
                <span>{link.name}</span>
                {hasMotion ? (
                  <motion.span
                    layout
                    initial={{ width: "0%" }}
                    animate={{ width: isActive ? "100%" : "0%" }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                    className="absolute left-0 bottom-0 h-[3px] rounded-full"
                    style={{ backgroundColor: "#0058A2" }}
                  />
                ) : (
                  <span
                    className="absolute left-0 bottom-0 h-[3px] rounded-full"
                    style={{
                      width: isActive ? "100%" : "0%",
                      transition: "width .3s ease",
                      backgroundColor: "#0058A2",
                    }}
                  />
                )}
              </button>
            );
          })}
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setIsOpen((s) => !s)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            className="p-2 rounded-md hover:bg-gray-100 transition-all duration-200"
            style={{ color: "#003A66" }}
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {hasMotion ? (
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="md:hidden bg-white shadow-md border-t"
              style={{ borderTopColor: "#E5E7EB" }}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
            >
              <div className="flex flex-col px-5 py-3 space-y-2">
                {navLinks.map((link) => {
                  const isActive = activeLink === link.to;
                  return (
                    <button
                      key={link.name}
                      onClick={() => handleClick(link)}
                      className={`w-full text-left px-4 py-2 rounded-md text-base font-bold uppercase transition-all duration-200 ${
                        isActive ? "" : "hover:bg-gray-100"
                      }`}
                      style={{
                        color: isActive ? "#0058A2" : "#003A66",
                        backgroundColor: isActive ? "#E8F4F8" : "transparent",
                      }}
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
          <div
            className="md:hidden bg-white shadow-md border-t"
            style={{ borderTopColor: "#E5E7EB" }}
          >
            <div className="flex flex-col px-5 py-3 space-y-2">
              {navLinks.map((link) => {
                const isActive = activeLink === link.to;
                return (
                  <button
                    key={link.name}
                    onClick={() => handleClick(link)}
                    className={`w-full text-left px-4 py-2 rounded-md text-base font-bold uppercase transition-all ${
                      isActive ? "" : "hover:bg-gray-100"
                    }`}
                    style={{
                      color: isActive ? "#0058A2" : "#003A66",
                      backgroundColor: isActive ? "#E8F4F8" : "transparent",
                    }}
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
