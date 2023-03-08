import React from 'react'

const AboutBox = () => {
  return (
    <div className="about__boxes grid">
        <div className="about__box">
                <i className="about__icon icon-briefcase"></i>

                <div>
                <h3 className="about__title">+10</h3>
                <span className="about__subtitle">Complete Projects</span>
            </div>
        </div>

        <div className="about__box">
                <i className="about__icon icon-badge"></i>

                <div>
                <h3 className="about__title">+5</h3>
                <span className="about__subtitle">Certifications</span>
            </div>
        </div>

        <div className="about__box">
                <i className="about__icon icon-book-open"></i>
                
                <div>
                <h3  className="about__title">+350HS</h3>
                <span className="about__subtitle">Learning</span>
            </div>
        </div>

        
</div>  
  )
}

export default AboutBox