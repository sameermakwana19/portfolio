import React from 'react'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Skills from "../components/Skills"

import Work from '../components/Work'

function Home() {
  window.scrollTo(0,0);
  return (
    <div>
        <Navbar />
        <Hero />
        <Work />
        <Skills/>
        <Footer />
    </div>
  )
}

export default Home
