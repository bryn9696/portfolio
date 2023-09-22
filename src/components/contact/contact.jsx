import React from 'react'
import './footer.css'

import './contact.css'
import {AiOutlineMail} from 'react-icons/ai'

const Contact = () => {
  return (
    <section id='contact'>
          
      <div className="contact__container">
        <div className="titles">
        <h5>Get in Touch</h5>
          <h2>Contact Me</h2>
        </div>

        <div className="contact__options">
          <article className='contact__option'>
            <AiOutlineMail className='contact__option-icon'/>
            {/* <h4>Email</h4>
            <br></br> */}
            {/* <h5>bryn2009@live.co.uk</h5> */}
            <a href="mailto:bryn2009@live.co.uk">Send a Message</a>
          </article>
        </div>
        {/* <form action="">
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name='message' rows='10' placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form> */}
      </div>
    </section>
  
  )
}

export default Contact