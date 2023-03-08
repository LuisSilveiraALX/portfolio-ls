import React from 'react'
import './about.css'
import Image from '../../assets/avatar-2.png'
import AboutBox from './AboutBox'
import CV from '../../assets/CV.pdf'

const About = () => {
  return (
    <section className="about container section" id="about">
      <h2 className='section__title'>About me</h2>

      <div className="about__container grid">
        <img src={Image} alt="" className="about__img" id='levitating-effect'/>
        <div className="about__data grid" >
          <div className="about__info">
            <p className="about__description">I'm a Front End developer and Ui designer based in Uruguay with a passion for design and code. Currently studying the career of Analyst Programmer at ORT University and love solve problems through code and looking for my first formal work experience.
            </p>
              <a href={CV} className="btn">Download CV</a>
          </div>
        </div>
      </div>
      
    </section>
  )
}

export default About