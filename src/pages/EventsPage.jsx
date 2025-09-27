import React from "react";
import eventsData from "../data/events.json";

export default function EventsPage() {
  return (
    <div className="pt-16 bg-gray-50">
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-black tracking-tight">
            ALL EVENTS
          </h2>

          {/* Subheading */}
          <p className="text-lg md:text-xl font-medium text-gray-700 mb-16 max-w-3xl mx-auto">
            Explore our diverse range of events and initiatives designed to
            inspire, educate, and empower students in engineering and
            technology.
          </p>

          {/* Event Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
            {eventsData.map((event, idx) => {
              // Random sample date
              const randomDate =
                event.date ||
                `2025-${String(Math.floor(Math.random() * 12 + 1)).padStart(
                  2,
                  "0"
                )}-${String(Math.floor(Math.random() * 28 + 1)).padStart(
                  2,
                  "0"
                )}`;

              return (
                <div
                  key={idx}
                  className="relative bg-white rounded-lg overflow-hidden shadow-md transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                  style={{
                    backgroundClip: "padding-box",
                  }}
                >
                  {/* Gradient border wrapper */}
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 opacity-0 hover:opacity-100 pointer-events-none"></div>

                  {/* Event Image with hover overlay */}
                  <div className="relative z-10">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-52 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 relative z-10">
                    <h3 className="text-xl font-semibold mb-2 text-black">
                      {event.title}
                    </h3>
                    <p className="text-gray-700 text-sm md:text-base mb-4">
                      {event.description}
                    </p>

                    {/* Bottom flex for badge and date */}
                    <div className="flex justify-between items-center mt-4">
                      <span
                        className={`px-3 py-1 rounded-full text-white text-sm font-semibold ${
                          event.status === "Completed"
                            ? "bg-green-600"
                            : event.status === "Happening"
                            ? "bg-blue-600"
                            : "bg-gray-500"
                        }`}
                      >
                        {event.status}
                      </span>
                      <span className="px-3 py-1 rounded-full border border-gray-400 text-sm font-medium text-gray-800">
                        {randomDate}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
