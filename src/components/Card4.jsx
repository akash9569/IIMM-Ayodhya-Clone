import React from "react";

const stats = [
  {
    icon: "fa-user-graduate",
    title: "Students",
    value: "500+",
  },
  {
    icon: "fa-users",
    title: "Faculty",
    value: "50+",
  },
  {
    icon: "fa-user",
    title: "Placements",
    value: "90%",
  },
  {
    icon: "fa-building-columns",
    title: "Departments",
    value: "10+",
  },
];

export default function Card4() {
  return (
    <div className="container-fluid bg-primary text-white py-5">
      <div className="row justify-content-center text-center">
        {stats.map((item, index) => (
          <div key={index} className="col-sm-6 col-md-3 mb-4">
            <div className="p-4 border rounded-4 shadow-sm h-100 d-flex flex-column align-items-center justify-content-center bg-primary-subtle text-dark">
              <i className={`fa-solid ${item.icon} fs-1 mb-3 text-primary`}></i>
              <h5 className="fw-bold fs-4">{item.title}</h5>
              <h4 className="fw-bold">{item.value}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
