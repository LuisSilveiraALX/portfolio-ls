import React from 'react'

const AboutBox = () => {
  return (
    <div className="about__boxes grid">
        <div className="about__box">
                <i className="about__icon icon-briefcase"></i>

                <div>
                <h3 className="about__title">+10</h3>
                <span className="about__subtitle">Proyectos Completos</span>
            </div>
        </div>

        <div className="about__box">
                <i className="about__icon icon-badge"></i>

                <div>
                <h3 className="about__title">+4</h3>
                <span className="about__subtitle">Certificaciones</span>
            </div>
        </div>

        <div className="about__box">
                <i className="about__icon icon-book-open"></i>
                
                <div>
                <h3  className="about__title">+250HS</h3>
                <span className="about__subtitle">Aprendizaje</span>
            </div>
        </div>

        
</div>  
  )
}

export default AboutBox