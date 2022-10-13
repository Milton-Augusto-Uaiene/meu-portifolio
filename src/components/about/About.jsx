import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FiAward} from 'react-icons/fi'
import {FiUsers} from 'react-icons/fi'
import {BsFolderCheck} from 'react-icons/bs'

const About = () => {
  return (
    <section id="about">

      <h5>Saiba Mais</h5>
      <h2>Sobre Mim</h2>

      <div className="container about-container">
        <div className="about-me">
          <div className="about-me-img">
            <img src={ME} alt='About Image' />
          </div>
        </div>

        <div className="about-content">
          <div className="about-cards">
            <article className='about-card'>
              <FiAward className='about-icon'/>
              <h5>Experiência</h5>
              <small>+1 Ano de Trabalho</small>
            </article>

            <article className='about-card'>
              <FiUsers className='about-icon'/>
              <h5>Clientes</h5>
              <small>+10 Clientes</small>
            </article>

            <article className='about-card'>
              <BsFolderCheck className='about-icon'/>
              <h5>Projectos</h5>
              <small>+10 Completos</small>
            </article>
          </div>
          <p>
          Meu nome é Milton Augusto Uaiene, sou  formado em Informática e Telecomunicações pela Escola Nacional de Aeronáutica e atualmente estou cursando Desenvolvimento Web (online). Tenho feito alguns projectos individuais e estou em busca de uma primeira oportunidade profissional na área Informática e Desenvolvimento Web. 
          </p>

          <a href='#contact' className='btn btn-primary'>Fale Comigo</a>
        </div>
      </div>

    </section>
  )
}

export default About