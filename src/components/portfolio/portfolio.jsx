import React from 'react'
import './portfolio.css'
import SCREEN from '../../assets/screen.png'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Personal Work</h5>
      <h2>Portfolio</h2>
      <div className="portfolio__container">

      <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={SCREEN} alt=""/>
          </div>
          <h3>Player Progress Tracker</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/bryn9696/PlayerTracker" className='btn' target='_blank'>GitHub</a>
            {/* <a href="https://github.com/bryn9696/portfolio" className='btn btn-primary' target='_blank'>Live Demo</a> */}
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={SCREEN} alt=""/>
          </div>
          <h3>Order Management System</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/bryn9696/OrderManagementSystem" className='btn' target='_blank'>GitHub</a>
            {/* <a href="https://github.com/bryn9696/portfolio" className='btn btn-primary' target='_blank'>Live Demo</a> */}
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={SCREEN} alt=""/>
          </div>
          <h3>Crosswordle</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/jessgordon/crosswordle" className='btn' target='_blank'>GitHub</a>
            <a href="https://crosswordle-production.herokuapp.com/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={SCREEN} alt=""/>
          </div>
          <h3>Snake Game</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/bryn9696/Snake-in-Ruby" className='btn' target='_blank'>GitHub</a>
            {/* <a href="https://github.com/bryn9696/portfolio" className='btn btn-primary' target='_blank'>Live Demo</a> */}
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={SCREEN} alt=""/>
          </div>
          <h3>Minesweeper Game</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/bryn9696/minesweeper" className='btn' target='_blank'>GitHub</a>
            {/* <a href="https://github.com/bryn9696/portfolio" className='btn btn-primary' target='_blank'>Live Demo</a> */}
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={SCREEN} alt=""/>
          </div>
          <h3>What Meal?</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/bryn9696/What-Meal-Python" className='btn' target='_blank'>GitHub</a>
            {/* <a href="https://github.com/bryn9696/portfolio" className='btn btn-primary' target='_blank'>Live Demo</a> */}
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={SCREEN} alt=""/>
          </div>
          <h3>Dogs App</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/bryn9696/dogsApp" className='btn' target='_blank'>GitHub</a>
            {/* <a href="https://github.com/bryn9696/portfolio" className='btn btn-primary' target='_blank'>Live Demo</a> */}
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio