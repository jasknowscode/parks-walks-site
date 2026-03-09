import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";

import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";

import "./App.css";

export default function App() {
  return (
    <div
      style={{
        cursor: `url(${process.env.PUBLIC_URL}/assets/paw-cursor.png) 16 16, auto`,
      }}
    >
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}