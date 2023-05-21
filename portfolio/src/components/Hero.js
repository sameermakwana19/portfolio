import "./Hero.css"
import photo from "../assests/photo2.jpg";
import {TypeAnimation} from "react-type-animation";

import React from 'react'
import { Link } from "react-router-dom"

function Hero() {
  return (
    <div className="hero">
        <div className="mask">
            <img className="intro-img" src={photo} alt="backgroundImage" />
        </div>
        <div className="content">
            <p>HI, I'M  SAMEER MAKWANA</p>
            {/* <h1>React Develper.</h1> */}
            <h1>
            <TypeAnimation sequence={['DEVELOPER',2000,
                 'DESIGNER',2000,
                'LEARNER',2000,'MARKSMAN' , 2000]}
          speed={50}
          repeat={Infinity}
          wrapper='span'
          />
          </h1>
            <Link to="/projects">
                <button className="btn">Projects</button>
            </Link>
            <Link to="/contact">
                <button className="btn btn-light">Contact</button>
            </Link>
        </div>  
    </div>
  )
}

export default Hero
