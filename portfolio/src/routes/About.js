import React from 'react'
import Footer from '../components/Footer'
import Hero2 from '../components/Hero2'
import Navbar from '../components/Navbar'
import AboutContent from '../components/AboutContent'

export default function About() {
  return (
    <div>
      <Navbar />
      <Hero2 
      heading="ABOUT" 
      text="I'm  a friendly Front-End Developer."
      url="https://images.unsplash.com/photo-1518481852452-9415b262eba4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFib3V0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"/>
      <AboutContent />
      <Footer />
    </div>
  )
}


