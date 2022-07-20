import React from 'react'
import './about.css'
import ME from '../../assets/shirt.png'
import WIS from '../../assets/wisley.png'
import {FaAward} from 'react-icons/fa'
import {MdPeopleOutline} from 'react-icons/md'
import {AiFillCode} from 'react-icons/ai'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h1>About Me</h1>

      <div className='container about__container'>
        <div className='about__me'>
          <div className="about__me-image">
            <img src={WIS} alt="About Image"/>
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>Makers Software Development Bootcamp</small>
            </article>

            <article className='about__card'>
              <MdPeopleOutline className='about__icon'/>
              <h5>Clients</h5>
              <small>Makers Software Development Bootcamp</small>
            </article>

            <article className='about__card'>
              <AiFillCode className='about__icon'/>
              <h5>Projects</h5>
              <small>Makers Software Development Bootcamp</small>
            </article>

            <p>
              This is me.
            </p>

            <a href='#contact' className='btn btn-primary'>Let's Talk</a>
          </div>
        </div>
      </div>

    </section>
  )
}

export default About