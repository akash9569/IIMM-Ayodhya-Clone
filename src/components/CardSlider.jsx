import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Image1 from "../img/coruse.jpg";
import Image2 from "../img/courses1.jpg";
import Image3 from "../img/course2.jpg";
import Image4 from "../img/course3.jpg";
import Image5 from "../img/couses4.jpg";
import Image6 from "../img/courseslast.jpg";

import "./CardSlider.css"; // 👈 Custom CSS file import

const courses = [
  {
    title: "Financial Analysis and Management",
    img: Image1,
    desc: "A Post Graduate Diploma in Materials Management focuses on procurement, inventory control, logistics, supply chain strategies, and warehouse management.",
  },
  {
    title: "Operations Management",
    img: Image2,
    desc: "A Post Graduate Diploma in Materials Management focuses on procurement, inventory control, logistics, supply chain strategies, and warehouse management.",
  },
  {
    title: "Business Analytics",
    img: Image3,
    desc: "A Post Graduate Diploma in Materials Management focuses on procurement, inventory control, logistics, supply chain strategies, and warehouse management.",
  },
  {
    title: "Human Resource Management",
    img: Image4,
    desc: "A Post Graduate Diploma in Materials Management focuses on procurement, inventory control, logistics, supply chain strategies, and warehouse management.",
  },
  {
    title: "Project Management",
    img: Image5,
    desc: "A Post Graduate Diploma in Materials Management focuses on procurement, inventory control, logistics, supply chain strategies, and warehouse management.",
  },
  {
    title: "International Business",
    img: Image6,
    desc: "A Post Graduate Diploma in Materials Management focuses on procurement, inventory control, logistics, supply chain strategies, and warehouse management.",
  },
];

export default function CardSlider() {
  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    dots: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="container mb-5 mt-4">
      <h2 className="fw-bold mb-4">
        <span style={{ borderLeft: "5px solid #007bff", paddingLeft: "10px" }}>
          Study @ IIMM Ayodhya
        </span>
      </h2>
      <Slider {...settings}>
        {courses.map((course, index) => (
          <div key={index} className="px-3">
            <div className="card h-100 shadow-sm course-card">
              <div className="bg-primary text-white p-2 text-center course-title">
                {course.title}
              </div>
              <div className="course-img-wrapper mt-2">
                <img
                  src={course.img}
                  className="card-img-top zoom-img"
                  alt={course.title}
                />
              </div>
              <div className="card-body mb-3">
                <p className="card-text text-justify">{course.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
