import "./Hero2.css"
import React from 'react'

function Hero2(props) {
    
  return (
    <div className="hero-img">
        <div className="heading">
            <div className="demo"
            style={{backgroundImage:`url("${props.url}")`}}></div>
            <h1>
                {props.heading}
                {/* {props.url} */}
            </h1>
            <p>
                {props.text}
            </p>
        </div>
      
    </div>
  )
}

export default Hero2
