import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';


import { Hero } from './components/template/pocket/Hero'
import { Header } from './components/template/pocket/Header'
import { PrimaryFeatures } from './components/template/pocket/PrimaryFeatures'
import { Team } from './components/template/keynote/Speakers'
import { Footer } from './components/template/pocket/Footer'

import { SecondaryFeatures } from './components/template/pocket/SecondaryFeatures'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>  
      <Routes>
        <Route path="/" element={
          <>
            <Header />
            <Hero />
            <PrimaryFeatures />
            <SecondaryFeatures />
            <Team />
            <Footer />
          </>
        } />
        {/* Redirect all other routes to / */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  )
}

export default App
