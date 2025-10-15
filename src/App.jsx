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
import FusionNxt from "./pages/FusioNxt";
import SummerSchool from "./pages/SummerSchool";
import Cipher from "./pages/Cipher";
import Dansala from "./pages/Dansala";
import Installation from "./pages/Installation";
import UOWContest from "./pages/UOWContest";
import ContactPage from "./pages/ContactPage"; // NEW
import BackToTop from "./components/BackToTop";

// ScrollToTop component
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
}

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
      <ScrollToTop />
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
        <Route path="/events/fusioNxt" element={<FusionNxt />} />
        <Route path="/events/summerschool" element={<SummerSchool />} />
        <Route path="/events/cipher" element={<Cipher />} />
        <Route path="/events/dansala" element={<Dansala />} />
        <Route path="/events/installation" element={<Installation />} />
        <Route path="/events/uowcontest" element={<UOWContest />} />

        {/* CONTACT PAGE ROUTE */}
        <Route
          path="/contact"
          element={
            <>
              <ContactPage />
              <Footer />
              <BackToTop />
            </>
          }
        />
      </Routes>
    </Router>
  );
}
