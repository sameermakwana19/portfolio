import React from 'react'
import Footer from '../components/Footer'
import Form from '../components/Form'
import Hero2 from '../components/Hero2'
import Navbar from '../components/Navbar'

function Contact() {
  return (
    <div>
      <Navbar />
      <Hero2 
      heading="CONTACT" 
      text="Lets have a chat"
      url="https://images.unsplash.com/photo-1551590192-8070a16d9f67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGNvbnRhY3QlMjB1c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"/>
      <Form />
      <Footer />
      
    </div>
  )
}

export default Contact
