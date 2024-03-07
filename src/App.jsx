import React from 'react'
import Navbar from './sections/Navbar/Navbar'
import Home from './sections/Home/Home'
import Collection from './sections/Collection/Collection'
import Shop from './sections/Shop/Shop'
import { shop } from './constants/constants'
const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Collection />
      <Shop shop={shop}/>
    </>
  )
}

export default App
