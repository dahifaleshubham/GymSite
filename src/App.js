import Navbar from "./Components/Navbar";
import "./App.css"
import "./Components/footer.css"
import Home from "./Components/Home";
import About from "./Components/About";
import Pricing from "./Components/Pricing";
import Program from "./Components/Program";
import { Routes, Route } from "react-router-dom"
import Footer from "./Components/Footer";
import SignUp from "./Components/SignUp";
import Details from "./Components/details";
import Knowmore from "./Components/Knowmore";

function App() {
  return (
    <>
      <Navbar />


      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        <Route path="/pricing" element={<Pricing />} />

        <Route path="/program" element={<Program />} />

        <Route path="/signup" element={<SignUp />} />
        <Route path="/view" element={<Details />} />
        <Route path="/knowmore" element={<Knowmore/>}/>
      </Routes>

      {/*  */}
      <Footer />



    </>
  );
}


export default App;
