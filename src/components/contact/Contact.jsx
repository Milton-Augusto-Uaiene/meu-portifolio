import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_jjmmtgw', 'template_orhgpma', form.current, 'Hrg7-tt_NgdMdLgpE')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset()
  };

  return (
    <section id="contact">
      <h5>Disponivel</h5>
      <h2>Contacte Me</h2>

      <div className="container contact-container">
        <div className="contact-options">
          <article className="contact-option">
            <MdOutlineEmail className='contact-option-icon'/>
            <h4>Email</h4>
            <h5>miltonaugusto137@gmail.com</h5>
            <a href='#tu'>Enviar Menssagem</a>
          </article>

          <article className="contact-option">
            <BsMessenger className='contact-option-icon'/>
            <h4>Facebook</h4>
            <h5>Facebook.com</h5>
            <a href='https://www.facebook.com/miltonaugusto.torronto/'>Enviar Menssagem</a>
          </article>

          <article className="contact-option">
            <BsWhatsapp className='contact-option-icon'/>
            <h4>Whatsapp</h4>
            <h5>(+258) 84 555 1452</h5>
            <a href='https://api.whatsapp.com/send?phone+258845551452'>Enviar Menssagem</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input name='name' placeholder=' Seu Nome Completo' required id='tu'/>
          <input type="email" name='email' placeholder='Seu Email' required />
          <textarea name='message' placeholder='Sua Menssagem' required rows='7'></textarea>
          <button type='submit' className='btn btn-primary'>Enviar Menssagem</button>
        </form>
      </div>
    </section>
  )
}

export default Contact