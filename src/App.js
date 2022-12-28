import Navbar from "./Components/Navbar";
import "./App.css"
import Home from "./Components/Home";
import About from "./Components/About";
import Pricing from "./Components/Pricing";
import Program from "./Components/Program";
import { Routes, Route } from "react-router-dom"
import Register from "./Components/Register";

function App() {
  return (
    <>
    <Navbar/>

      <Routes>

        <Route exact path="/" element ={<Home/>}/>

        <Route  path="/about" element={<About/>}/>
        
        <Route path="/pricing" element={<Pricing/>}/>
        
        <Route path="/program" element={<Program/>}/>

        <Route path="/register" element={<Register/>}/>
        
      </Routes>

    </>
  );
}


export default App;
