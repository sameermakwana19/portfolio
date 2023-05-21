import React from 'react'
import Footer from '../components/Footer'
import Hero2 from '../components/Hero2'
import Navbar from '../components/Navbar'
import Work from '../components/Work'

function Projects() {
  return (
    <div>
      <Navbar />
      <Hero2 
      heading="PROJECTS" 
      text="Some of my most recent works"
      url="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=900&q=60"/>
      <Work />
      <Footer />
    </div>
  )
}

export default Projects
