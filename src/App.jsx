import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";
import { Events } from "./pages/Events";
import { About } from "./pages/About";
import Navbar from "./components/Navbar.jsx";
import "./styles.css";
import background from "./assets/images/mainBackground.jpg";

export default function App() {
  return (
    <>
     
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/events" element={<Events />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}
