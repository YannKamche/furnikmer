import React from 'react'
import { home } from '../../constants/constants'
import './Home.css'

const Home = () => {
  return (
    <div className='big-bg' id={home.id}>
      <div className='bg-content'>
        <h1>{home.title1} <br /> {home.title2}</h1>
        <p>{home.desc1} <br /> {home.desc2}</p>

        <div className='bg-link'>
          <a href="#">{home.link}</a>
        </div>
      </div>
    </div>
  )
}

export default Home
