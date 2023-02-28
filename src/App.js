import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import Share from "./components/Pages/Share";
import Login from "./components/Pages/Login";
import Stats from "./components/Pages/Stats";
import Signup from "./components/Pages/Signup";
import PageNotFound from "./components/Pages/PageNotFound";
import { Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/share" element={<Share />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/stats" element={<Stats />}></Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
