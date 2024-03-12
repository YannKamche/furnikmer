import React from 'react'
import './Features.css'
import { features } from '../../constants/constants'

const Features = () => {
  return (
    <div className='big-product' id='features'>
      <div className='product-title'>
        <p>{features.title}</p>
        <h2>{ features.title}</h2>
      </div>

      <div className='product-flex'>
        {
          features.images.map(content => (
            <div className='product-one'>
              <div className='product-image'>
                <img src={content.img} alt="" />
                <div className='overlay'>
                  <i className='fas fa-shopping-bag'></i>
                  <i className="far fa-heart"></i>
                  <i className="fas fa-search"></i>
                </div>
              </div>
              <div className="content">
                <div className="left">
                  <h4>{ content.title}</h4>
                </div>
                <div className="right">
                  <section>{ content.price}</section>
                </div>
              </div>
              <article>{ content.article}</article>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Features
