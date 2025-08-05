import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import Image1 from "../img/card5.jpg";
import Image2 from "../img/card6.jpg";
import Image3 from "../img/card7.jpg";
import Image4 from "../img/card8.jpg";

const courses = [
    {
        img: Image1
    },
    {
        img: Image2
    },
    {
        img: Image3
    },
    {
        img: Image4
    }
];

export default function Card5() {
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
            <h2 className="fw-bold mb-4 mt-5 fs-1">
                <span style={{ borderLeft: "5px solid #007bff", paddingLeft: "10px" }}>
                    Life of IIMM
                </span>
            </h2>
            <Slider {...settings}>
                {courses.map((course, index) => (
                    <div key={index} className="px-3">
                        <div className="card h-100 shadow-sm course-card mt-4">
                            <div className="course-img-wrapper rounded">
                                <img
                                    src={course.img}
                                    className="card-img-top zoom-img" style={{ height: '15rem' }}
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
            <div className="container d-flex justify-content-center mt-2 pt-5">
                <i class="fa-solid fa-landmark-flag fw-bold fs-4 pe-2"></i>
                <h4 className='fw-bold fs-4'>Explore life of IIMM</h4>
            </div>
            <div className="bg-primary rounded text-center mt-2">
                <button type="button" className="btn btn-primary container fw-bold p-2">See All <i class="fa-solid fa-eye"></i></button>
            </div>
        </div>
    )
}
