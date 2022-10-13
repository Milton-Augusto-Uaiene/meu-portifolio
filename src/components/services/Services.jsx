import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id="services">
      <h2>Meus Serviços </h2>
      <h5>O que tenho a oferecer</h5>
      <h2></h2>
      <div className="container services-container">
        <article className="service">
          <div className="service-head">
            <h3>Geral</h3>
          </div>

          <ul className="service-list">
            <li>
              <BiCheck className='service-list-icon'/>
              <p>Design Moderno de Websites</p>
            </li>

            <li>
              <BiCheck className='service-list-icon'/>
              <p>Conhecimento Mínimo de Photoshop</p>
            </li>

            <li>
              <BiCheck className='service-list-icon'/>
              <p>Getão de Base de Dados</p>
            </li>

            <li>
              <BiCheck className='service-list-icon'/>
              <p>Getão de Redes Sociais</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service-head">
            <h3>Frontend</h3>
          </div>

          <ul className="service-list">
            <li>
              <BiCheck className='service-list-icon'/>
              <p>Design Moderno de Websites</p>
            </li>

            <li>
              <BiCheck className='service-list-icon'/>
              <p>Conhecimento das Principais Tecnologias do Mercado</p>
            </li>

            <li>
              <BiCheck className='service-list-icon'/>
              <p>Conhecimento das Bibliotecas Frontend</p>
            </li>

            <li>
              <BiCheck className='service-list-icon'/>
              <p>Responsividade de websites</p>
            </li>

            <li>
              <BiCheck className='service-list-icon'/>
              <p>Boas Práticas no Desenvolvimento de Websites</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service-head">
            <h3>CMS's</h3>
          </div>

          <ul className="service-list">
            <li>
              <BiCheck className='service-list-icon'/>
              <p>Desenvolvimento de Websites com Wordpress</p>
            </li>

            <li>
              <BiCheck className='service-list-icon'/>
              <p>Gestor de Websites</p>
            </li>

            <li>
              <BiCheck className='service-list-icon'/>
              <p>Instalação de Temas e Plugin</p>
            </li>

            <li>
              <BiCheck className='service-list-icon'/>
              <p>Apto para Aprender Novas Tecnologias</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services