import './contact.css'
import {BsWhatsapp} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {AiOutlineMail} from 'react-icons/ai'
import { useRef } from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_m1nw0cv', 'template_zvycvwz', form.current, 'Mo9X84T6VxGm40bXg')

    e.target.reset()
  };


  return (
    <section className="contact container section" id="contact">
      <h2 className="section__title">Ponerse en Contacto</h2>


      <div className="contact__container grid">
        <div className="contact__info">
        
        <article className='contact__option'>
                <BsWhatsapp className='contact__option-icon'/>
                <h4>Whatsapp</h4>
                <h5>+598-91204595</h5>
                <a href="https://wa.me/59891204595">Contacta conmigo!</a>
              </article>
              <article className='contact__option'>
                <AiOutlineMail className='contact__option-icon'/>
                <h4>Correo</h4>
                <h5>Luissilveirafire@gmail.com</h5>
                <a href="mailto:luissilveirafire@gmail.com">Contacta conmigo!</a>
              </article>
              <article className='contact__option'>
                <BsInstagram className='contact__option-icon'/>
                <h4>Instagram</h4>
                <h5>luissilveiraalx</h5>
                <a href="http://instagram.com/luissilveiraalx">Contacta conmigo!</a>
              </article>
        
        </div>

        <form ref={form} onSubmit={sendEmail} className="contact__form">
          <div className="contact__form-group">
            <div className="contact__form-div">
              <input type="text" className="contact__form-input" placeholder='Nombre Completo'required/>
            </div>

            <div className="contact__form-div">
              <input type="email" className="contact__form-input" placeholder='Tu Correo'required/>
            </div>
          </div>

            <div className="contact__form-div contact__form-area">
            <textarea name="" id="" cols="30" rows="10" className='contact__form-input' placeholder='Tu Mensaje'></textarea>
            
            </div>
            <button className='boton btn'>Enviar Mensaje</button>
        </form>
       
      </div>
    </section>
  )
}

export default Contact