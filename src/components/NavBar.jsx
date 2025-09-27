import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("hero");
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "Home", to: "hero", external: false },
    { name: "About", to: "about", external: false },
    { name: "Our Work", to: "/events", external: true },
    { name: "Team", to: "/team", external: true },
    { name: "Contact", to: "contact", external: false },
  ];

  const scrollToSection = (id) => {
    const navbarHeight = 72;
    const el = document.getElementById(id);
    if (el) {
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
    } else {
      if (location.pathname !== "/") {
        // Navigate to home first, then scroll
        navigate("/", { state: { scrollTo: link.to } });
      } else {
        scrollToSection(link.to);
      }
    }
    setIsOpen(false);
  };

  // Update active link on scroll
  useEffect(() => {
    if (location.pathname !== "/") return;

    const handleScroll = () => {
      const sections = ["hero", "about"];
      let current = "hero";
      const navbarHeight = 72;

      sections.forEach((sec) => {
        const el = document.getElementById(sec);
        if (el) {
          const offsetTop = el.offsetTop - navbarHeight - 20;
          if (window.scrollY >= offsetTop) current = sec;
        }
      });

      // Contact section near footer or bottom
      const footerEl = document.getElementById("contact");
      if (footerEl) {
        const footerTop = footerEl.offsetTop - navbarHeight - 20;
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

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location]);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <button onClick={() => handleClick({ to: "hero", external: false })}>
          <img src="/assets/iet-logo.jpeg" alt="IET Logo" className="h-12" />
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleClick(link)}
              className={`font-medium transition ${
                activeLink === link.to
                  ? "text-blue-600"
                  : "text-black hover:text-blue-600"
              }`}
            >
              {link.name}
            </button>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-black focus:outline-none"
          onClick={toggleMenu}
        >
          {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleClick(link)}
              className={`block w-full text-left px-4 py-3 transition ${
                activeLink === link.to
                  ? "text-blue-600"
                  : "text-black hover:bg-gray-100"
              }`}
            >
              {link.name}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
