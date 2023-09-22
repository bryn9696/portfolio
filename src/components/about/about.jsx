import React from 'react';
import './about.css';
import ME from '../../assets/shirt.png';
import WIS from '../../assets/wisley.png';
import { FaHeart, FaAward } from 'react-icons/fa';
import { MdPeopleOutline } from 'react-icons/md';
import { AiFillCode } from 'react-icons/ai';

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h1>About Me</h1>

      <div className='container about__container'>
        {/* <div className='about__me'>
          <div className="about__me-image">
            <img src={WIS} alt="About Me Image" />
          </div>
        </div> */}

        <div className="about__content">
          <div className="about__cards">
            <div className="about__card">
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>- Adaptive Financial Consulting</small>
              <br></br>
              <small>- Makers Software Development Bootcamp</small>
            </div>

            <div className="about__card">
              <MdPeopleOutline className='about__icon' />
              <h5>Clients</h5>
              <small>- Adaptive Financial Consulting</small>
              <br></br>
              <small>- Makers Software Development Bootcamp</small>
            </div>

            <div className="about__card">
              <AiFillCode className='about__icon' />
              <h5>Projects</h5>
              <small>- Order Management System</small><br></br>
              <small>- Player Progress Tracker</small><br></br>
              <small>- What Meal?</small><br></br>
              <small>- Snake Game</small><br></br>
              <small>- Minesweeper Game</small><br></br>
              <small>- Dogs App</small><br></br>
              <small>- Makers Software Development Bootcamp</small>
            </div>
          </div>

          <div className="about__text">
            <br></br>
            <p>This is me.</p>
            <br></br>
            <a href='#contact' className='btn btn-primary'>Let's Talk</a>
            <br></br>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
