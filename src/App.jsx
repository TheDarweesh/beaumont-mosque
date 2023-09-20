import { useState } from "react"
import { Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { Contact } from "./pages/Contact"
import { About } from "./pages/About"


export default function App(){
  return (
    <>
    <nav>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    </nav>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/about" element={<About />} />
  </Routes>
  </>
  )
  
}

