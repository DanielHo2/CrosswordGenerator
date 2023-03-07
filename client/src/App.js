import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import Share from "./components/Pages/Share";
import Faq from "./components/Pages/Faq";
import Login from "./components/Pages/Login";
import { Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/share" element={<Share />}></Route>
        <Route path="/faq" element={<Faq />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
