import { useState } from "react"
import { Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { Contact } from "./pages/Contact"
import { About } from "./pages/About"
import Navbar from "./components/Navbar.jsx"; 
import "./styles.css"

export default function App(){
  return (
    <>
  <Navbar />
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/about" element={<About />} />
  </Routes>
  </>
  )
  
}

