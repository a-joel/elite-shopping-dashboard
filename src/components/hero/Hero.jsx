import React from 'react'
import './Hero.css'
import { Link } from 'react-router-dom'
function Hero() {
  return (
    <div>
      <div className="main-hero-container">
        <div className="hero-container">
                <h1>Customer satisfaction is our goal</h1>
                <h3>More than <b>Millions</b> of consumer consuming our products </h3>
        </div>
        <div className="button">
                <Link to={'./customers'}><button>Explore our customers</button></Link>
        </div>
      </div>
    </div>
  )
}

export default Hero
