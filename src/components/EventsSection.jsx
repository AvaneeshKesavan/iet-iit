import { useState, useEffect } from "react";
import eventsData from "../data/events.json"; // your events JSON file

export default function EventsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const eventsToShow = 3;

  // Auto-scroll every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % eventsData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Get visible events
  const visibleEvents = [];
  for (let i = 0; i < eventsToShow; i++) {
    visibleEvents.push(eventsData[(currentIndex + i) % eventsData.length]);
  }

  return (
    <section id="ourwork" className="py-28 bg-white text-black">
      <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold mb-16 tracking-tight text-black">
          OUR WORKS
        </h2>

        {/* Subheading */}
        <p className="text-lg md:text-xl font-medium text-gray-700 mb-16 max-w-3xl mx-auto">
          Explore our diverse range of events and initiatives designed to
          inspire, educate, and empower students in engineering and technology.
        </p>

        {/* Carousel */}
        <div className="flex justify-center gap-6">
          {visibleEvents.map((event, idx) => (
            <div key={idx} className="flex-shrink-0 w-full md:w-1/3 px-2">
              <div className="bg-white border-2 border-blue-400 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-56 object-cover"
                />
                <div className="p-6 flex flex-col gap-2">
                  <h3 className="text-xl font-semibold text-black">
                    {event.title}
                  </h3>
                  <p className="text-gray-700">{event.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Events Button */}
        <div className="text-center mt-24">
          <a
            href="/events"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded font-semibold transition-colors duration-300"
          >
            View All Events
          </a>
        </div>
      </div>
    </section>
  );
}
