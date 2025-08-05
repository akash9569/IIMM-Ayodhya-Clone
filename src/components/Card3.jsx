import React from "react";

const events = [
  {
    date: "27 July",
    year: "2024",
    time: "3:00 PM",
    title: "National Seminar on - Supply Chain Management Basic 2 Robotic",
  },
  {
    date: "29 August",
    year: "2024",
    time: "11:00 AM",
    title: "Workshop on AI & Data Analytics in Logistics",
  },
];

export default function Card3() {
  return (
    <div className="container-fluid bg-light py-5">
      <div className="container">
        {/* Heading */}
        <h2 className="fw-bold mb-4 border-start border-4 ps-3 border-primary">
          Events At IIMM Ayodhya
        </h2>

        {/* Events */}
        <div className="row g-4">
          {events.map((event, index) => (
            <div key={index} className="col-sm-6">
              <div className="card shadow-sm h-100">
                <div className="d-flex">
                  {/* Left: Date */}
                  <div
                    className="text-bg-primary text-white d-flex flex-column align-items-center justify-content-center p-3"
                  >
                    <i className="fa-solid fa-calendar-days fs-1 mb-2"></i>
                    <h5 className="mb-0 fw-bold text-center">{event.date}</h5>
                  </div>

                  {/* Right: Info */}
                  <div className="flex-grow-1 p-3 bg-white">
                    <h6 className="fw-semibold mb-2">{event.title}</h6>
                    <div className="d-flex justify-content-between text-muted small">
                      <span>{event.year}</span>
                      <span>{event.time}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
