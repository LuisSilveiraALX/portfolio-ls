import './resume.css'
import './experience.css'
import Data from './Data'
import Card from './Card'
import {AiFillHtml5} from 'react-icons/ai'
import {SiJavascript} from 'react-icons/si'
import {GrReactjs} from 'react-icons/gr'
import {DiCss3} from 'react-icons/di'
import {FaBootstrap} from 'react-icons/fa'
import {FaNodeJs} from 'react-icons/fa'
import {DiMongodb} from 'react-icons/di'
import {GrMysql} from 'react-icons/gr'
import {SiTailwindcss} from 'react-icons/si'
import {SiExpress} from 'react-icons/si'



const Resume = () => {
  return (
    <section className="resume container section" id="resume">
      <h2 className='section__title'>Educación</h2>


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
        <h2 className='section__title2'>¿Cuales son mis habilidades?</h2>
        <div className="container experience__container grid">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <AiFillHtml5 className='experience__details-icon'/>
              <div><h4>HTML</h4>
              <small className='text-light'>Intermedio</small></div>
            </article>

            <article className='experience__details'>
              <DiCss3 className='experience__details-icon'/>
              <div><h4>CSS</h4>
              <small className='text-light'>Intermedio</small></div>
            </article>

            <article className='experience__details'>
              <SiJavascript className='experience__details-icon'/>
              <div><h4>Javascript</h4>
              <small className='text-light'>Intermedio</small></div>
            </article>

            <article className='experience__details'>
              <FaBootstrap className='experience__details-icon'/>
              <div><h4>Bootstrap</h4>
              <small className='text-light'>Intermedio</small></div>
            </article>

            <article className='experience__details'>
              <GrReactjs className='experience__details-icon'/>
              <div><h4>React</h4>
              <small className='text-light'>Intermedio</small></div>
            </article>

            <article className='experience__details'>
              <SiTailwindcss className='experience__details-icon'/>
              <div><h4>Tailwinds</h4>
              <small className='text-light'>Principiante</small></div>
            </article>
          </div>
        </div>

        <div className="experience__backend">
        <h3>Backend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <FaNodeJs className='experience__details-icon'/>
              <div><h4>Node JS</h4>
              <small className='text-light'>Principiante</small></div>
            </article>

            <article className='experience__details'>
              <DiMongodb className='experience__details-icon'/>
              <div><h4>MongoDB</h4>
              <small className='text-light'>Principiante</small></div>
            </article>

            <article className='experience__details'>
              <GrMysql className='experience__details-icon'/>
              <div><h4>MySQL</h4>
              <small className='text-light'>Principiante</small></div>
            </article>
            <article className='experience__details'>
              <SiExpress className='experience__details-icon'/>
              <div><h4>Express</h4>
              <small className='text-light'>Principiante</small></div>
            </article>

          </div>
      </div>

      </div>
    </section>
  )
}

export default Resume