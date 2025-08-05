import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Image1 from "../img/card1.jpg";
import Image2 from "../img/card2.jpg";
import Image3 from "../img/card3.jpg";
import Image4 from "../img/card4.jpg";


const courses = [
  {
    img: Image1,
    desc: '"First General Body Meet held to elect new Branch Executive Committee for IIMM Ayodhya."',
  },
  {
    img: Image2,
    desc: '"New Branch Executive Committee Members of IIMM Ayodhya created and announced."',
  },
  {
    img: Image3,
    desc: '"IIMM Raebareli team, including VV Chaturvedi, hands over 37 paid Life Members for Ayodhya branch creation."',
  },
  {
    img: Image4,
    desc: '"IIMM Raebareli team, including VV Chaturvedi, hands over 37 paid Life Members for Ayodhya branch creation."',
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
        breakpoint: 550,
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
          <div key={index} className="px-2">
            <div className="card h-100 shadow-sm course-card">
              <div className="course-img-wrapper" >
                <img
                  src={course.img}
                  className="card-img-top zoom-img" style={{height:'25vh'}}
                  alt={course.title}
                />
              </div>
              <div className="card-body">
                <p className="card-text text-start">{course.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
