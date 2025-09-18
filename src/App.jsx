import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomeMain from './Components/HomeMain'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'      
import About from './pages/About'
import Contact from './pages/Contact'
import BlogHeader from './pages/BlogHeader'
import BlogDeatailsHeader from './pages/BlogDeatailsHeader'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeMain />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs" element={<BlogHeader/>} />
        <Route path="/blog/:id" element={<BlogDeatailsHeader/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App
