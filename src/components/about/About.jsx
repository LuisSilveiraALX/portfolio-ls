import React from 'react'
import './about.css'
import Image from '../../assets/avatar-2.png'
import AboutBox from './AboutBox'
import CV from '../../assets/CV.pdf'

const About = () => {
  return (
    <section className="about container section" id="about">
      <h2 className='section__title'>Sobre Mí</h2>

      <div className="about__container grid">
        <img src={Image} alt="" className="about__img" />

        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">Mi nombre es luis Silveira, actualmente vivo en Uruguay, soy estudiante de programación el cual disfruto el resolver problemas del mundo real a través de código. En cuanto a mi educación, es muy autodidacta como a través de cursos en la plataforma Udemy.
            </p>
              <a href={CV} className="btn">Descargar CV</a>
          </div>

          <div className="about_skills grid">
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Development</h3>
                  <span className="skills__number ">90%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage development"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Creatividad</h3>
                  <span className="skills__number">80%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage creative"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">UI/UX Design</h3>
                  <span className="skills__number">70%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage ui_design"></span>
              </div>
            </div>

            
          </div>
        </div>
      </div>
      <AboutBox />
    </section>
  )
}

export default About