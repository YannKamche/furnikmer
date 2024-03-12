import React from 'react'
import Navbar from './sections/Navbar/Navbar'
import Home from './sections/Home/Home'
import Collection from './sections/Collection/Collection'
import Shop from './sections/Shop/Shop'
import { shop } from './constants/constants'
import Features from './sections/Features/Features'
const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Collection />
      <Shop shop={shop} />
      <Features />
    </>
  )
}

export default App
