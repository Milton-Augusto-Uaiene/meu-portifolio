import React from 'react'
import './header.css'
import CTA from './CTA'
import Me from '../../assets/me.jpg'
import HeaderSocial from './HeaderSocial'

const Header = () => {
  return (
    <header>

      <div className="container header-container">
        <h5>Oi, eu sou</h5>
        <h1>Milton Uaiene</h1>
        <h5 className="text-light">Desenvolvedor Frontend</h5>
        
        <CTA />

        <HeaderSocial />

        <div className='me'>
          <img src={Me} alt='me'/>
        </div>

        <a href='#contact' className='scroll-down'>
            Rolar Para Baixo
        </a>

      </div> 

    </header>
  )
}

export default Header