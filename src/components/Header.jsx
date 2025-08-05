import React from 'react'

export default function Header() {
    return (
        <div className="container-fluid p-0 m-0">
            <div className="row justify-content-evenly">
                <div className="col-sm-12 text-bg-primary">
                    <div className='d-flex justify-content-between p-1'>
                        <div className='fw-bold ms-4'>
                            Welcome IIMM Ayodhya
                        </div>
                        <div className='me-5'>
                            <a href="/" className='text-light link-offset-2 link-underline link-underline-opacity-0 pe-2'>Home</a>
                            <span>|</span>
                            <a href="/" className='text-light link-offset-2 link-underline link-underline-opacity-0 ps-2 pe-2'>IIMM Branches</a>
                            <span>|</span>
                            <a href="/" className='text-light link-offset-2 link-underline link-underline-opacity-0 ps-2'>AICTE Corner</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
