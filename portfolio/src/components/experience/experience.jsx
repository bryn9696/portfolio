import React from 'react'
import './experience.css'
import {BiBadgeCheck} from 'react-icons/bi'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>My Skills</h5>
      <h1>My Experience</h1>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className='experience__Details'>
              <BiBadgeCheck/>
              <h4>HTML</h4>
              <small className='text-light'>Beginner</small>
            </article>
            <article className='experience__Details'>
              <BiBadgeCheck/>
              <h4>CSS</h4>
              <small className='text-light'>Beginner</small>
            </article>
            <article className='experience__Details'>
              <BiBadgeCheck/>
              <h4>JavaScript</h4>
              <small className='text-light'>Beginner</small>
            </article>
            <article className='experience__Details'>
              <BiBadgeCheck/>
              <h4>Bootstrap</h4>
              <small className='text-light'>Beginner</small>
            </article>
            <article className='experience__Details'>
              <BiBadgeCheck/>
              <h4>React</h4>
              <small className='text-light'>Beginner</small>
            </article>
          </div>
        </div>
        <div className="experience__backend">
        <h3>Backend Development</h3>
          <div className="experience__content">
            <article className='experience__Details'>
              <BiBadgeCheck/>
              <h4>Ruby / Ruby on Rails</h4>
              <small className='text-light'>Intermidiate</small>
            </article>
            <article className='experience__Details'>
              <BiBadgeCheck/>
              <h4>Python</h4>
              <small className='text-light'>Beginner</small>
            </article>
            <article className='experience__Details'>
              <BiBadgeCheck/>
              <h4>JavaScript</h4>
              <small className='text-light'>Beginner</small>
            </article>
            <article className='experience__Details'>
              <BiBadgeCheck/>
              <h4>Node JS</h4>
              <small className='text-light'>Beginner</small>
            </article>
            <article className='experience__Details'>
              <BiBadgeCheck/>
              <h4>C#</h4>
              <small className='text-light'>Beginner</small>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience