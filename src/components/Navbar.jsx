import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary p-0">
            <div className="container-fluid bg-primary p-0">
                <button
                    data-mdb-collapse-init
                    className="navbar-toggler"
                    type="button"
                    data-mdb-target="#navbarCenteredExample"
                    aria-controls="navbarCenteredExample"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <i className="fas fa-bars"></i>
                </button>

                
                <div
                    className="collapse navbar-collapse justify-content-evenly m-2"
                    id="navbarCenteredExample"
                > 
                    <ul className="navbar-nav mb-2 mb-lg-0 text-light fw-bold ">
                        <li className="nav-item d-flex  pe-3">
                            <Link className="nav-link active pe-3 " aria-current="page" to="/">Home</Link>
                            <p className='m-auto'>|</p>
                        </li>
                        <li className="nav-item d-flex pe-3">
                            <Link className="nav-link active pe-3 " aria-current="page" to="/institute">This Institute</Link>
                            <p className='m-auto'>|</p>
                        </li>
                        <li className="nav-item d-flex pe-3">
                            <Link className="nav-link active pe-3 " aria-current="page" to="/education">Education</Link>
                            <p className='m-auto'>|</p>
                        </li>
                        <li className="nav-item d-flex pe-3">
                            <Link className="nav-link active pe-3 " aria-current="page" to="/events">Events</Link>
                            <p className='m-auto'>|</p>
                        </li>
                        <li className="nav-item d-flex pe-3">
                            <Link className="nav-link active pe-3 " aria-current="page" to="/knowledge">Knowledge Bank</Link>
                            <p className='m-auto'>|</p>
                        </li>
                        <li className="nav-item d-flex pe-3">
                            <Link className="nav-link active pe-3 " aria-current="page" to="/member">Membership</Link>
                            <p className='m-auto'>|</p>
                        </li>
                        <li className="nav-item d-flex pe-3">
                            <Link className="nav-link active pe-3 " aria-current="page" to="/mmr">MMR</Link>
                            <p className='m-auto'>|</p>
                        </li>
                        <li className="nav-item d-flex pe-3">
                            <Link className="nav-link active pe-3 " aria-current="page" to="/link">Useful Links</Link>
                            <p className='m-auto'>|</p>
                        </li>
                        <li className="nav-item d-flex pe-3">
                            <Link className="nav-link active " aria-current="page" to="/contact">Contact Us</Link>
                        </li>

                    </ul>
                    
                </div>
                
            </div>
            
        </nav>
    );
}
