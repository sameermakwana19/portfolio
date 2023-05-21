import "./AboutContent.css"

import React from 'react'
import { Link } from "react-router-dom"
import ReactPhoto from "../assests/react.png"
import node from "../assests/node.png"
import express from "../assests/Express.png"
import mongo from "../assests/mongo.png"

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>
                Who Am I?
            </h1>
            <p>
            I'm Sameer Makwana, a React developer with a passion for problem-solving and a hunger for learning. I thrive on creating intuitive web applications and enjoy diving deep into the React ecosystem. I love tackling challenges, staying up-to-date with industry trends, and collaborating with others.
            </p>
            <Link to="/contact">
                <button className="btn">Contact</button>
            </Link>

        </div>
        <div className="right">
            <div className="img-container">
                <div className="image1">
                    <img src={ReactPhoto} className="img" alt="true" />
                </div>
                <div className="image2">
                    <img src={node} className="img" alt="true" />
                </div>
                <div className="image3">
                    <img src={mongo} className="img" alt="true" />
                </div>
                <div className="image4">
                    <img src={express} className="img" alt="true" />
                </div>
               
            </div>
        </div>
    </div>
  )
}

export default AboutContent
