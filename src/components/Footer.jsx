import React from "react";

export default function Footer() {
    return (
        <footer className="footer-section pb-5 text-bg-primary text-light">
            <div className="container">
                {/* Top Contact Info */}
                <div className="row text-white pt-5 py-4">
                    {/* Address */}
                    <div className="col-md-4 d-flex">
                        <i className="fas fa-map-marker-alt fs-3 me-3"></i>
                        <div>
                            <h5 className="fw-bold">Find us:</h5>
                            <p className="">
                                Khurdahi Bazar, Sultanpur Road <br />
                                (Near Shukla Medical), Lucknow - 226002
                            </p>
                        </div>
                    </div>
                    {/* Phone */}
                    <div className="col-md-4 d-flex">
                        <i className="fas fa-phone fs-3 me-3"></i>
                        <div>
                            <h5 className="fw-bold">Call us</h5>
                            <p className="mb-0">+91 95695 81233</p>
                            <p>+91 85738 20247</p>
                        </div>
                    </div>
                    {/* Email */}
                    <div className="col-md-4 d-flex">
                        <i className="far fa-envelope-open fs-3 me-3"></i>
                        <div>
                            <h5 className="fw-bold">Mail us</h5>
                            <p className="mb-0">akcollegeuse2025@gmail.com</p>
                            <p>abhi8573@gmail.com</p>
                        </div>
                    </div>
                </div>

                <hr className="text-black" />

                {/* Footer Bottom */}
                <div className="row text-white pt-3 pb-5">
                    {/* About Section */}
                    <div className="col-md-4 mb-4">
                        <h4 className="fw-bold">Welcome To IIMM</h4>
                        <hr className="text-black w-75" />
                        <p>
                            IIMM is dedicated to the promotion of the profession of Materials
                            Management and with its multifarious activities, including EDP,
                            seminars, workshops, in-house training programs and consultancy
                            assignment.
                        </p>
                        <div className="mt-3">
                            <p className="mb-3 fw-semibold">Follow us</p>
                            <a href="#" className="text-white me-3 rounded-circle p-2 bg-danger">
                                <i className="fab fa-facebook-f fs-5"></i>
                            </a>
                            <a href="#" className="text-white me-3 rounded-circle p-2 bg-danger">
                                <i className="fab fa-twitter fs-5"></i>
                            </a>
                            <a href="#" className="text-white rounded-circle p-2 bg-danger">
                                <i className="fab fa-google-plus-g fs-5"></i>
                            </a>
                        </div>
                    </div>

                    {/* Useful Links */}
                    <div className="col-md-4 mb-4">
                        <h4 className="fw-bold">Useful Links</h4>
                        <hr className="text-black w-25" />
                        <div className="d-flex lh-lg">
                            <ul className="list-unstyled me-5">
                                <li><a href="#" className="text-white text-decoration-underline">Home</a></li>
                                <li><a href="#" className="text-white text-decoration-underline">Services</a></li>
                                <li><a href="#" className="text-white text-decoration-underline">Contact</a></li>
                                <li><a href="#" className="text-white text-decoration-underline">Our Services</a></li>
                                <li><a href="#" className="text-white text-decoration-underline">Contact Us</a></li>
                            </ul>
                            <ul className="list-unstyled">
                                <li><a href="#" className="text-white text-decoration-underline">About</a></li>
                                <li><a href="#" className="text-white text-decoration-underline">Portfolio</a></li>
                                <li><a href="#" className="text-white text-decoration-underline">About Us</a></li>
                                <li><a href="#" className="text-white text-decoration-underline">Expert Team</a></li>
                                <li><a href="#" className="text-white text-decoration-underline">Latest News</a></li>
                            </ul>
                        </div>
                    </div>

                    {/* Subscribe */}
                    <div className="col-md-4 mb-4">
                        <h4 className="fw-bold">Subscribe</h4>
                        <hr className="text-black w-25" />
                        <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
                        <form className="d-flex">
                            <input
                                type="email"
                                className="form-control me-3"
                                placeholder="Email Address"
                            />
                            <button type="submit" className="btn btn-warning">
                                <i className="fab fa-telegram-plane text-white fs-5"></i>
                            </button>
                        </form>
                    </div>
                </div>

                <div className="pt-3 text-center text-white d-flex flex-wrap justify-content-between">
                    <p className="mb-2 mb-lg-0">
                        © Copyright 2025 Designed & Developed By | <a href="https://devilucifer.netlify.app/" className="text-white">Devilucifer Company</a> .
                    </p>
                    <ul className="list-inline mb-0">
                        <li className="list-inline-item"><a href="#" className="text-white text-decoration-underline">Home</a></li>
                        <li className="list-inline-item"><a href="#" className="text-white text-decoration-underline">Terms</a></li>
                        <li className="list-inline-item"><a href="#" className="text-white text-decoration-underline">Privacy</a></li>
                        <li className="list-inline-item"><a href="#" className="text-white text-decoration-underline">Policy</a></li>
                        <li className="list-inline-item"><a href="#" className="text-white text-decoration-underline">Contact</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}
