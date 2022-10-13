import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'


const Experience = () => {
  return (
    <section id="experience">

      <h5>Minhas Formações</h5>
      <h2>Minhas Experiência</h2>

      <div className="container experience-container">
        <div className="experience-frontend">
          <h3>Tecnologias Frontent</h3>
          <div className="experience-content">
            <article className='experience-details'>
            <BsPatchCheckFill className='experience-details-icon' />
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experiente</small>
              </div>
            </article>

            <article className='experience-details'>
              <BsPatchCheckFill className='experience-details-icon' />
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Intermediario</small>
              </div>
            </article>

            <article className='experience-details'>
            <BsPatchCheckFill className='experience-details-icon' />
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Intermediario</small>
              </div>
            </article>

            <article className='experience-details'>
            <BsPatchCheckFill className='experience-details-icon' />
              <div>
                <h4>ReactJs</h4>
                <small className='text-light'>Intermediario</small>
              </div>
            </article>

            <article className='experience-details'>
            <BsPatchCheckFill className='experience-details-icon' />
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Experiente</small>
              </div>
            </article>

            <article className='experience-details'>
            <BsPatchCheckFill className='experience-details-icon' />
              <div>
                <h4>Wordpress</h4>
                <small className='text-light'>Intermediario</small>
              </div>
            </article>

            <article className='experience-details'>
            <BsPatchCheckFill className='experience-details-icon' />
              <div>
                <h4>Tailwind</h4>
                <small className='text-light'>Experiente</small>
              </div>
            </article>
          </div> 
        </div>

        <div className="experience-backend">
          <h3>Outros Serviços</h3>
          <div className="experience-content">
            <article className='experience-details'>
            <BsPatchCheckFill className='experience-details-icon' />
              <div>
                <h4>Digitador <br/>de Dados</h4>
                <small className='text-light'>Experiente</small>
              </div>
            </article>

            <article className='experience-details'>
            <BsPatchCheckFill className='experience-details-icon' />
              <div>
                <h4>Gestão de <br/>Redes Sociais</h4>
                <small className='text-light'>Intermediário</small>
              </div>
            </article>

            <article className='experience-details'>
            <BsPatchCheckFill className='experience-details-icon' />
              <div>
               <h4>Gestão de <br/>Base de Dados</h4>
              <small className='text-light'>Intermediário</small>
              </div>
            </article>

          </div> 
        </div>
      </div>

    </section>
  )
}

export default Experience