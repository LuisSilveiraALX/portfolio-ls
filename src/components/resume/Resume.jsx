import './resume.css'
import Data from './Data'
import Card from './Card'
import Skills from '../skills/Skills'

const Resume = () => {
  return (
    <section className="resume container section" id="resume">
      <h2 className='section__title'>Education</h2>
      <div className="resume__container grid">
        <div className="timeline grid">
            {Data.map((val, id) => {
              if(val.category === 'education') {
                return (
                  <Card key={id} icon={val.icon} title={val.title} year={val.year} desc={val.desc}    />
                )
              }
            })}
        </div>

        <div className="timeline grid">
            {Data.map((val, index) => {
              if(val.category === 'experience') {
                return (
                  <Card key={index} icon={val.icon} title={val.title} year={val.year} desc={val.desc}    />
                )
              }
            })}
        </div>
        </div>
        <Skills />
    </section>
  )
}

export default Resume