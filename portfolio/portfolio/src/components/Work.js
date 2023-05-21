import React from 'react'
import "./Work.css";
import WorkCard from './WorkCard';
import Data from "./WorkData.js"
const Work = () => {
  return (
    <div>
        <h1 className='project-heading'>PROJECTS</h1>
        <div className='project-container'>
        {Data.map((value,index)=>{
            return <WorkCard
                key={index} 
                title = {value.title} 
                url = {value.url}
                desc = {value.desc}
                view={value.view}
                source={value.source}
                />})}
        </div>
      
    </div>
  )
}

export default Work

