import React from 'react'
import Navbar from './sections/Navbar/Navbar'
import Home from './sections/Home/Home'
import Collection from './sections/Collection/Collection'
import Shop from './sections/Shop/Shop'
import { shop } from './constants/constants'
import Features from './sections/Features/Features'
import Arrival from './sections/Arrival/Arrival'
const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Collection />
      <Shop shop={shop} />
      <Features />
      <Arrival />
    </>
  )
}

export default App
