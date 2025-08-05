import React from 'react'
import Navbar from '../components/Navbar'

export default function About() {
  return (
    <div className="container-fluid">
        <div className="row">
            <div className="col-sm-12">
                <Navbar />
            </div>
        </div>
        <div className="row">
            <div className="col-sm-12">
                <h1>Hello About</h1>
            </div>
        </div>
    </div>
  )
}
