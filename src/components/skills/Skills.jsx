import './skills.css'
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

const Skills = () => {
  return (
    <>
<h2 className='section__title2'>¿whats are my skills?</h2>
  <div className="container experience__container grid">
      <div className="experience__frontend">
      <h3>Technology Frontend</h3>
      <div className="experience__content">
        <article className='experience__details'>
          <AiFillHtml5 className='experience__details-icon'/>
          <div><h4>HTML</h4>
    </div>
        </article>

        <article className='experience__details'>
          <DiCss3 className='experience__details-icon'/>
          <div><h4>CSS</h4>
        </div>
        </article>

        <article className='experience__details'>
          <SiJavascript className='experience__details-icon'/>
          <div><h4>Javascript</h4>
          </div>
        </article>

        <article className='experience__details'>
          <FaBootstrap className='experience__details-icon'/>
          <div><h4>Bootstrap</h4>
          </div>
        </article>

        <article className='experience__details'>
          <GrReactjs className='experience__details-icon'/>
          <div><h4>React</h4>
          </div>
        </article>

        <article className='experience__details'>
          <SiTailwindcss className='experience__details-icon'/>
          <div><h4>Tailwinds</h4>
        </div>
        </article>
      </div>
    </div>


    <div className="experience__backend">
      <h3>Technology Backend</h3>
      <div className="experience__content">
        <article className='experience__details'>
          <FaNodeJs className='experience__details-icon'/>
          <div><h4>Node JS</h4>
        </div>
        </article>

        <article className='experience__details'>
          <DiMongodb className='experience__details-icon'/>
          <div><h4>MongoDB</h4>
          </div>
        </article>

        <article className='experience__details'>
          <GrMysql className='experience__details-icon'/>
          <div><h4>MySQL</h4>
          </div>
        </article>
        <article className='experience__details'>
          <SiExpress className='experience__details-icon'/>
          <div><h4>Express</h4>
        </div>
        </article>

      </div>
    </div>
  </div>
    </>
  )
}

export default Skills