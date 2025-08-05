import React from 'react'
import Image1 from '../img/Logo.png';
import Image2 from '../img/g20.png';

export default function Head() {
    return (
        <div className="row border">
            <div className="container-fluid">
                <div className="row align-items-center text-center">
                    {/* Logo */}
                    <div className="col-lg-2 col-md-3 col-sm-4 text-sm-end mb-3 mb-sm-0">
                        <img
                            src={Image1}
                            className="img-fluid ff p-2"
                            alt="Logo"
                            style={{ maxHeight: "130px" }}
                        />
                    </div>

                    {/* Institute Info */}
                    <div className="col-lg-3 col-md-5 col-sm-4 text-start w100 weww">
                        <h1 className="fw-bold">IIMM, Ayodhya</h1>
                        <h6 className="fw-bold">
                            Indian Institute of Materials Management
                        </h6>
                    </div>

                    {/* G20 + Button */}
                    <div className="col-sm-4 text-center weww">
                        <div className="d-flex justify-content-center justify-content-md-start align-items-center">
                            <img
                                src={Image2}
                                className="img-fluid me-3 me-md-4 mb-2 mb-md-0"
                                alt="G20 Logo"
                                style={{ maxHeight: "60px" }}
                            />
                            <span>
                                <button
                                    className="bnt border border-2 border-secondary p-1 rounded"

                                >
                                    <i className="fa-solid fa-award fs-5"></i>
                                    &nbsp;&nbsp;&nbsp;An Institute Of Eminence
                                </button>
                            </span>
                        </div>
                    </div>

                    {/* Contact */}
                    <div className="col-lg-3 col-md-12 col-sm-12">
                        <div className="justify-content-center justify-content-md-start cc">
                            <span className='fs-6'>
                                <i className="fa-solid fa-phone fa-bounce"></i>
                                &nbsp;Call Us: <span>+91&nbsp;95695&nbsp;81233</span>
                            </span>
                            <br />
                            <span className="text-start fs-6">
                                <i className="fa-regular fa-envelope fa-shake"></i>
                                &nbsp;Mail Us: <span>akashsingh.internship@gmail.com</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
