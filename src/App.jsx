import React from 'react'
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Services from './pages/Services'
import ProtectedRoute from './pages/ProtectedRoute'
import { useEffect } from 'react'
import Admin from './pages/Admin'
import Auth from './pages/Auth'
import Blogs from './pages/Blogs'
import AddBlog from './pages/AddBlog'
import UpdateBlog from './pages/UpdateBlog'
import BlogDetails from './components/BlogItems/BlogDetail'
import AOS from "aos";
import ScrollTop from './components/ScrollTop/ScrollTop'
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
          <ScrollTop />
          <Routes>
              <Route path='/' element={<Home />} exact  />
              <Route path='/about' element={<About />}  />
              <Route path='/contact' element={<Contact />} />
              <Route path='/services' element={<Services />} />
              <Route path='/auth' element={<Auth />} />
              <Route path='/admin' element={<ProtectedRoute><Admin /></ProtectedRoute>} />
              <Route path='/admin/addBlog' element={<ProtectedRoute><AddBlog /></ProtectedRoute>} />
              <Route path='/blogs' element={<Blogs/ >} />
              <Route path='/admin/updateBlog/:id' element={<ProtectedRoute><UpdateBlog /></ProtectedRoute>} />
              <Route path='/blogs/:id' element={<BlogDetails />} />
          </Routes>
      </Router>
    </div>
  )
}

export default App