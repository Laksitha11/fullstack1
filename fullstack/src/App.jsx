import './App.css';
import Home from "./components/FunctionalComponents/Home";
import Signup from "./components/FunctionalComponents/Signup";
import Login from "./components/FunctionalComponents/Login";
import About from "./components/FunctionalComponents/About";
import Contact from "./components/FunctionalComponents/Contact";
import Gallery from "./components/FunctionalComponents/Gallery";
import UseEffect from "./components/FunctionalComponents/UseEffect";
import UseRef from "./components/FunctionalComponents/UseRef";
import UseContext from "./components/FunctionalComponents/UseContext";
import UseMemo from "./components/FunctionalComponents/UseMemo";
import Footer from "./components/FunctionalComponents/Footer";
import NavBar from "./components/FunctionalComponents/NavBar"; 
import "./assets/css/Home.css";
import "./assets/css/NavBar.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        <NavBar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/About" element={<About college="Kongu Engineering College" clg1="Kongu Arts" clg2="Kongu Naturopathy" />} />
            <Route path="/Gallery" element={<Gallery />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/UseEffect" element={<UseEffect />} />
            <Route path="/UseRef" element={<UseRef />} />
            <Route path="/UseContext" element={<UseContext />} />
            <Route path="/UseMemo" element={<UseMemo />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
