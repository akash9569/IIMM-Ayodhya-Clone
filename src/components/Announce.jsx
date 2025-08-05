import React from 'react'
import Image3 from '../img/star.gif'

export default function Announce() {
  return (
    <div className="container-fluid p-0 m-0">
        <div className="row">
            <div className="col-sm-12">
                <div className="row">
                    <div className="col-sm-2 text-bg-primary p-1">
                        <h5 className='text-center pt-1'>Announcements <i class="fa-solid fa-caret-right ms-4"></i></h5>
                    </div>
                    <div className="col-sm-10 p-0 my-auto">
                        <p className='my-auto fst-italic'>
                        <marquee behavior="scroll" direction="left">
                            <span><img src={Image3} height="35px" alt=""/>Admission Open</span>
                            <span className='ms-1'>||</span>

                            <span><img src={Image3} height="35px" alt=""/>Exam Time Table</span>
                            <span className='ms-1'>||</span>

                            <span><img src={Image3} height="35px" alt=""/>Workshop at IIMM</span>
                            <span className='ms-1'>||</span>

                            <span><img src={Image3} height="35px" alt=""/>Apply Scholarship</span>
                            <span className='ms-1'>||</span>

                            <span><img src={Image3} height="35px" alt=""/>Date Sheet</span>
                            <span className='ms-1'>||</span>
                        </marquee>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
