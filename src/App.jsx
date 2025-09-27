import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import EventsSection from "./components/EventsSection";
import Footer from "./components/Footer";
import TeamPage from "./pages/TeamPage";
import EventsPage from "./pages/EventsPage";
import BackToTop from "./components/BackToTop";

function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const id = location.state.scrollTo;
      const el = document.getElementById(id);
      if (el) {
        const navbarHeight = 72;
        const elTop =
          el.getBoundingClientRect().top + window.scrollY - navbarHeight;
        window.scrollTo({ top: elTop, behavior: "smooth" });
      }
    }
  }, [location.state]);

  return (
    <main className="pt-16">
      <section id="hero">
        <HeroSection />
      </section>

      <section id="about">
        <AboutSection />
      </section>

      <section id="events">
        <EventsSection />
      </section>

      <section id="contact">
        <Footer />
      </section>

      <BackToTop />
    </main>
  );
}

export default function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/team"
          element={
            <>
              <TeamPage />
              <Footer />
              <BackToTop />
            </>
          }
        />
        <Route
          path="/events"
          element={
            <>
              <EventsPage />
              <Footer />
              <BackToTop />
            </>
          }
        />
      </Routes>
    </Router>
  );
}
