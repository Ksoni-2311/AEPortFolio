import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header.jsx'
import Home from './components/home'
import Project from './components/Projects'
import Contactus from './components/Contactus'
import OurPlans from './components/OurPlans'
import Footer from './components/Footer.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <Home />
    <Project />
    <Contactus />
    <OurPlans />
    <Footer />
    </>
  )
}

export default App
