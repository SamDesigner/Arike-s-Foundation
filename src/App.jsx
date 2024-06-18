import React from 'react'
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Services from './pages/Services'
import { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import './App.css'
const App = () => {
  useEffect(() => {
    AOS.init({
        
    });
  }, []);
  return (
    <div>
      <Router>
          <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/services' element={<Services />} />
          </Routes>
      </Router>
    </div>
  )
}

export default App