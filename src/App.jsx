import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Features from './components/Features'
import Testimonials from './components/Testimonials'
import Collection from './components/Collection'
import Footer from './components/Footer'
import RouterConfig from './config/RouterConfig'

function App() {

  return (
    <>
      <div>
          <RouterConfig/>
          <Footer/>
      </div>
    </>
  )
}

export default App
