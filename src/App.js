import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css"
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Pricing from "./components/Pricing";
import Program from "./components/Program";
import Signup from "./components/Signup";
import Details from "./components/Details";
import Footer from "./components/Footer";



export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/about" element={<About />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/program" element={<Program />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/details" element={<Details />} />
        <Route path="/footer" element={ <Footer/>} />

      </Routes>
      <Footer/>

    </>
  );
}
