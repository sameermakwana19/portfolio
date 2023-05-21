import "./Skills.css"

import React from 'react'

const Skills = () => {
  return (
    <div className="skills-section"  id="demo">
        <h1 >Skills</h1>
        <div className="skills-container">
            <div className="skill">
                <div className="name">
                    <h4>Html</h4>
                </div>
                <div className="bar">
                    <div className="per" style={{maxWidth:"90%" }} >
                        <p>90%</p>
                    </div>
                </div>
            </div>
            <div className="skill">
                <div className="name">
                    <h4>css</h4>
                </div>
                <div className="bar">
                    <div className="per" style={{maxWidth:"88%" }}>
                        <p>88%</p>
                    </div>
                </div>
            </div>
            <div className="skill">
                <div className="name">
                    <h4>JavaScript</h4>
                </div>
                <div className="bar">
                    <div className="per" style={{maxWidth:"85%" }}>
                        <p>85%</p>
                    </div>
                </div>
            </div>
            <div className="skill">
                <div className="name">
                    <h4>React Js</h4>
                </div>
                <div className="bar">
                    <div className="per" style={{maxWidth:"85%" }}>
                        <p>85%</p>
                    </div>
                </div>
            </div>
            <div className="skill">
                <div className="name">
                    <h4>Node Js</h4>
                </div>
                <div className="bar">
                    <div className="per" style={{maxWidth:"77%" }}>
                        <p>77%</p>
                    </div>
                </div>
            </div>
            <div className="skill">
                <div className="name">
                    <h4>Express JS</h4>
                </div>
                <div className="bar">
                    <div className="per" style={{maxWidth:"75%" }}>
                        <p>75%</p>
                    </div>
                </div>
            </div>
            <div className="skill">
                <div className="name">
                    <h4>DataBase</h4>
                </div>
                <div className="bar">
                    <div className="per" style={{maxWidth:"70%" }}>
                        <p>70%</p>
                    </div>
                </div>
            </div>
            <div className="skill">
                <div className="name">
                    <h4>Team Work</h4>
                </div>
                <div className="bar">
                    <div className="per" style={{maxWidth:"90%" }}>
                        <p>90%</p>
                    </div>
                </div>
            </div>
            
        </div>
      
    </div>
  )
}

export default Skills;
