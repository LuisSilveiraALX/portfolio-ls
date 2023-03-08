import './contact.css'
import {BsWhatsapp} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {AiOutlineMail} from 'react-icons/ai'
import { useRef } from 'react'
import emailjs from 'emailjs-com'



const Contact = () => {
  return (
    <section className="contact container section" id="contact">
      <h2 className="section__title">Contact</h2>
        <div className="contact__container grid">
            <div className="contact__content" id='levitating-effect'> 
                <AiOutlineMail className='contact__option-icon'/>
                  <h5>luissil363@gmail.com</h5>
                  <a href="mailto:luissil363@gmail.com" className='btn__contact'>Contact me!</a>
            </div>
            <div className="contact__content" id='levitating-effect'>
              <AiOutlineLinkedin className='contact__option-icon'/>
              <h5>Luissilveirafire@gmail.com</h5>
              <a href="mailto:luissilveirafire@gmail.com" className='btn__contact'>Contact me!</a>
            </div>
            <div className="contact__content" id='levitating-effect'>
              <BsInstagram className='contact__option-icon'/>
              <h5>Luissilveiraalx</h5>
              <a href="http://instagram.com/luissilveiraalx" className='btn__contact'>Contact me!</a>
            </div>
        </div>
      
    </section>
  )
}

export default Contact