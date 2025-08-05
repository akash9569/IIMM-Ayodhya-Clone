import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Image1 from "../img/achievement.jpg";
import Image2 from "../img/achievement1.jpg";
import Image3 from "../img/achievement2.jpg";
import Image4 from "../img/achievement3.jpg";


const courses = [
  {
    img: Image1,
    desc: "Student Achievements",
  },
  {
    img: Image2,
    desc: "Institute Achievements",
  },
  {
    img: Image3,
    desc: "Alumni Achievements",
  },
  {
    img: Image4,
    desc: "Faculty Achievements",
  }
];

export default function CardSlider1() {
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
      <h2 className="fw-bold mb-5">
        <span style={{ borderLeft: "5px solid #007bff", paddingLeft: "10px" }}>
          Our Achievements
        </span>
      </h2>
      <Slider {...settings}>
        {courses.map((course, index) => (
          <div key={index} className="px-3">
            <div className="card h-100 shadow-sm course-card">
              <div className="course-img-wrapper">
                <img
                  src={course.img}
                  className="card-img-top zoom-img" style={{height:'15rem'}}
                  alt={course.title}
                />
              </div>
              <div className="card-body">
                <p className="card-text text-center fs-5 fw-bold text-primary">{course.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
