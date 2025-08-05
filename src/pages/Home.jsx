import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Head from '../components/Head'
import Slider from '../components/Slider'
import Announce from '../components/Announce'
import Card from '../components/Card'
import CardSlider from '../components/CardSlider'
import CardSlider1 from '../components/CardSlider1'
import Card2 from '../components/Card2'
import NameCard from '../components/NameCard'
import Card3 from '../components/Card3'
import Card4 from '../components/Card4'
import Card5 from '../components/Card5'
import Footer from '../components/Footer'

export default function Home() {
    return (
        <div className="container-fluid p-0 overflow-hidden">
            <div className="row">
                <div className="col-sm-12">
                    <Header />
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12">
                    <Head />
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12">
                    <Navbar />
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12">
                    <Slider />
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12">
                    <Announce />
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12">
                    <Card />
                </div>
            </div>
            <div className="row bg-dark-subtle">
                <div className="col-sm-12">
                    <CardSlider />
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12 bg-primary pb-4">
                    <h4 className='ps-5 fs-1 mt-4 mb-4 fw-bold text-light'>| About IIMM Ayodhya</h4>
                    <p className='ps-5 pe-5 me-5 text-light text-justify'>The Indian Institute of Materials Management (IIMM) has approved a new branch in Ayodhya, the city of Lord Ram, to support the "Ek Bharat Shresth Bharat" initiative. The inauguration will be an illustrious event featuring prominent figures from the healthcare industry, academic institutions, hotel and hospitality sectors, and other industries, along with IIMM dignitaries. This initiative aims to enhance the nation's growth and development. The event promises to be memorable and impactful, highlighting the importance of collaboration across various sectors. Learners, researchers, scholars, and professionals interested in contributing to nation-building are invited to engage with this new branch. For more information and to get involved, individuals can contact the Branch Executive Members or visit the IIMM website at [www.iimm.org](http://www.iimm.org).
                    </p>
                    <br />
                    <p className='ps-5 text-light text-justify pe-5 me-5'><b>Target Group:</b> Working Professionals in the field of Stores, Purchase, SCM, Finance, Accounts, Logistics, Materials Management etc and students pursuing their UG/PG degree or diploma.</p>
                </div>
            </div>
            <div className="row bg-info-subtle">
                <div className="col-sm-12">
                    <CardSlider1 />
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12">
                    <Card2 />
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12">
                    <NameCard />
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12">
                    <Card3 />
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12">
                    <Card4 />
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12">
                    <Card5 />
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12">
                    <Footer />
                </div>
            </div>
        </div>
    )
}
