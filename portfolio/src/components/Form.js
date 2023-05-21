import "./Form.css"

import React from 'react'

const Form = () => {
  return (
    <div className="form">
        <form action="https://formspree.io/f/meqwdypb" method="POST">
            <label> Your Name </label>
            <input type="text" name="name"></input>
            <label> Email </label>
            <input type="email" name="email"></input>
            <label> Subject </label>
            <input type="text" name="subject"></input>
            <label> Message </label>
            <textarea rows="6" placeholder="Type your messsage here" name="message"></textarea>
            <button type="submit" className="btn">Submit</button>
        </form>
      
    </div>
  )
}

export default Form
