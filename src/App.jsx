import "./App.css";
// import {slides} from "./assets/data/carouselData.json"
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import { Routes,Route } from "react-router-dom";
import CardProducts from "./components/CardProducts/CardProducts";
import ContactPage from "./components/ContactPage/ContactPage";
import About from "./components/About/About";

function App() {

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<CardProducts/>}></Route>
      <Route path="/aboutus" element={<About/>}></Route>
      <Route path="/contactus" element={<ContactPage/>}></Route>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
