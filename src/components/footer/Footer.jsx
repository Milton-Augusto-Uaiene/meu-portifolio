import React from 'react'
import './footer.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer-logo'>Milton</a>

      <ul className='perma-link'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>Sobre</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#portifolio'>Portifolio</a></li>
        <li><a href='#contact'>contact</a></li>
      </ul>

      <div className="footer-socials">
        <a href='facebook.com'><MdOutlineEmail /></a>
        <a href='https://www.facebook.com/miltonaugusto.torronto/'><BsMessenger /></a>
        <a href='https://api.whatsapp.com/send?phone+258845551452'><BsWhatsapp /></a>
      </div>

      <div className="footer-copyright">
        <small>Milton Augusto Uaiene</small>
      </div>

    </footer>
  )
}

export default Footer