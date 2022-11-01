import React from 'react'
import './portifolio.css'
import IMG1 from '../../assets/web.jpg'
import IMG2 from '../../assets/pizza.jpg'
import IMG3 from '../../assets/relogio.jpg'
import IMG4 from '../../assets/star.jpg'
import IMG5 from '../../assets/web.jpg'
import IMG6 from '../../assets/clima.jpg'



const Portifolio = () => {
  return (
    <section id="portifolio">
      <h5>Trabalhos Feitos</h5>
      <h2>Portfolio</h2>

      <div className="container portifolio-container">
        <article className='portifolio-item'>
          <div className="portifolio-item-img">
            <img src={IMG6} />
          </div>
          <h3>Meteorologia em tempo Real</h3>
          <div className="portifolio-item-cta">
            <a href='https://milton-augusto-uaiene.github.io/clima/' className='btn'>Github</a>

          </div>
        </article>

        <article className='portifolio-item'>
          <div className="portifolio-item-img">
            <img src={IMG2} />
          </div>
          <h3>Pizzaria</h3>
          <div className="portifolio-item-cta">
            <a href='https://milton-augusto-uaiene.github.io/pizza/' className='btn'>Github</a>
            
          </div>
        </article>

        <article className='portifolio-item'>
          <div className="portifolio-item-img">
            <img src={IMG3} />
          </div>
          <h3>Relogio Digital e Analógico</h3>
          <div className="portifolio-item-cta">
            <a href='https://milton-augusto-uaiene.github.io/relogio/' className='btn'>Github</a>
          </div>
        </article>

        <article className='portifolio-item'>
          <div className="portifolio-item-img">
            <img src={IMG4} />
          </div>
          <h3>Starbug</h3>
          <div className="portifolio-item-cta">
            <a href='https://milton-augusto-uaiene.github.io/starbug/' className='btn'>Github</a>
          </div>
        </article>

        <article className='portifolio-item'>
          <div className="portifolio-item-img">
            <img src={IMG5} />
          </div>
          <h3>Template Simples</h3>
          <div className="portifolio-item-cta">
            <a href='https://milton-augusto-uaiene.github.io/webawax/' className='btn'>Github</a>
            
          </div>
        </article>

        <article className='portifolio-item'>
          <div className="portifolio-item-img">
            <img src={IMG6} />
          </div>
          <h3>Meteorologia em tempo Real</h3>
          <div className="portifolio-item-cta">
            <a href='https://milton-augusto-uaiene.github.io/clima/' className='btn'>Github</a>
            
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portifolio