import React from 'react'
import Navbar from './sections/Navbar/Navbar'
import Home from './sections/Home/Home'
import Collection from './sections/Collection/Collection'
import Shop from './sections/Shop/Shop'
import { shop } from './constants/constants'
import Features from './sections/Features/Features'
import Arrival from './sections/Arrival/Arrival'
import Animation from './sections/Animation/Animation'
import Contact from './sections/Contact/Contact'
import Team from './sections/Team/Team'
import Footer from './sections/Footer/Footer'
import Scroll from './components/Scroll'
const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Collection />
      <Shop shop={shop} />
      <Features />
      <Arrival />
      <Animation />
      <Team />
      <Contact />
      <Footer />
      <Scroll />
    </>
  )
}

export default App
