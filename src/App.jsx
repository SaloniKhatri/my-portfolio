import React from "react";
import { Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import About from './Pages/AboutMe';
import Contact from './Pages/ContactMe';
import Footer from './Components/Footer';


function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
       
      </Routes>

      <Footer/>

    </>

  )
}
export default App;