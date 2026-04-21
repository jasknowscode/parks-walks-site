import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ScrollToTop from "./components/ScrollToTop";

import "./App.css";



export default function App() {
  return (
    <div
      style={{
        cursor: `url(${process.env.PUBLIC_URL}/assets/paw-cursor.png) 16 16, auto`,
      }}
    >
      <>
        <ScrollToTop />

        <NavBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </>
    </div>
  );
}