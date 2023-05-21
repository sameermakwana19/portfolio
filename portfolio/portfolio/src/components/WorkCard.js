import React from 'react'
import "./WorkCard.css"
import pro1 from "../assests/photo1.jpg"
import { NavLink } from 'react-router-dom'

function WorkCard(props) {
  return (
    <div className='project-card'>
      <img src={props.url} alt="image" />
      <h2 className='project-title'>{props.title}</h2>
      <div className='project-details'>
        <p>{props.desc}</p>
      </div>
      <div className='project-btn'>
        <NavLink to={`${props.view}`} className="btn" target="_blank">
          View
        </NavLink>
        <NavLink to={`${props.source}`} className="btn" target="_blank">
          Source
        </NavLink>
      </div>
    </div>
  )
}

export default WorkCard
