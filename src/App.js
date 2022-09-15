import "./App.css";
import Nav from "./Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import News from "./News";
import About from "./about";
import Inventory from "./inventory";
import Contact from "./contact";
import Footer from "./Footer";
import Staff from "./staff";
function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/News" element={<News />} />
        <Route path="/about" element={<About />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/staff" element={<Staff />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
