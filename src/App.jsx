import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useEffect, useState } from "react";
import { Analytics } from "@vercel/analytics/react";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import Countdown from "./components/CountdownSection";
import Ticker from "./components/Ticker";
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
import Ascend2026 from "./pages/Ascend-2026";
import Cipher2 from "./pages/Cipher-2.0";
import ContactPage from "./pages/ContactPage";
import BackToTop from "./components/BackToTop";
import Preloader from "./components/Preloader";

// Import events data
import eventsData from "./data/events.json";

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

  // Find the next upcoming event for countdown (Ascend 2026)
  const upcomingEvent = eventsData.find(
    (event) => event.status === "Coming Soon" && event.title === "Ascend 2026",
  );

  useEffect(() => {
    if (location.state?.scrollTo) {
      const id = location.state.scrollTo;
      const el = document.getElementById(id);
      if (el) {
        // Account for navbar (72px) + ticker (48px) = 120px
        const navbarHeight = 120;
        const elTop =
          el.getBoundingClientRect().top + window.scrollY - navbarHeight;
        window.scrollTo({ top: elTop, behavior: "smooth" });
      }
    }
  }, [location.state]);

  return (
    <>
      {/* Ticker is fixed below navbar */}
      <Ticker />

      <main>
        <section id="hero">
          <HeroSection />
        </section>

        {/* Only show countdown if there's an upcoming event */}
        {upcomingEvent && (
          <section id="countdown">
            <Countdown event={upcomingEvent} />
          </section>
        )}

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
    </>
  );
}

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {/* Preloader */}
      <Preloader onLoadingComplete={() => setIsLoading(false)} />

      {/* Main App - Hidden while loading */}
      <div style={{ display: isLoading ? "none" : "block" }}>
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
            <Route path="/events/Ascend-2026" element={<Ascend2026 />} />
            <Route path="/events/Cipher-2.0" element={<Cipher2 />} />
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
          <Analytics />
        </Router>
      </div>
    </>
  );
}
