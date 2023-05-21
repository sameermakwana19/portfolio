import "./footer.css"
import React from 'react'
import {Link } from "react-router-dom"
import { FaFacebook, FaGithub, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa"


function Footer() {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <div>
                        <FaHome size={20} style={{color:"#fff",marginRight:"2rem"}} />
                    </div>
                    <div><p>L D College Of Engineering , University Area, Ahmedabad.</p></div>  
                </div>
                <div className="phone">
                    
                        <div>
                        <h4>
                        <FaPhone size={20} style={{color:"#fff",marginRight:"2rem"}} />
                        </h4>
                        </div>
                        <div>
                        <h4>
                        1-2323-343-23
                        </h4>
                        </div>
                </div>
                <div className="email">
                    <div>
                        <h4>
                        <FaMailBulk size={20} style={{color:"#fff",marginRight:"2rem"}} />
                        </h4>
                    </div>
                    <div>
                        <h4>
                        sameermakwana07@gmail.com
                        </h4>
                    </div>
                </div>
            </div>
            <div className="right">
                <h4>
                    About Me
                </h4>
                <p>
                I'm Sameer Makwana, a React developer with a passion for problem-solving and a hunger for learning. I love tackling challenges, staying up-to-date with industry trends, and collaborating with others.
                </p>
                <div className="social">
                    <Link to="https://www.facebook.com/Sohil.Makwana.009" target="_blank" >
                    <FaFacebook size={30}
                    style={{color:"#fff" , marginRight:"1rem"}}
                    />
                    </Link>
                    <Link to="https://twitter.com/SAMEERMAKWANA19?t=9oi9Ji45AVlTd819gx1Y1g&s=08" target="_blank" >
                    <FaTwitter size={30}
                    style={{color:"#fff" , marginRight:"1rem"}}
                    />
                    </Link>
                    <Link to="https://www.linkedin.com/in/sameer-makwana-b37b68265" target="_blank" >
                    <FaLinkedin size={30}
                    style={{color:"#fff" , marginRight:"1rem"}}
                    />
                    </Link>
                    <Link to="https://github.com/sameermakwana19" target="_blank" >
                    <FaGithub size={30}
                    style={{color:"#fff" , marginRight:"1rem"}}
                    />
                    </Link>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Footer
