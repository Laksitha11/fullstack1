import './App.css';
import Home from "./components/FunctionalComponents/Home";
import About from "./components/FunctionalComponents/About";
import Contact from "./components/FunctionalComponents/Contact";
import Gallery from "./components/FunctionalComponents/Gallery";
import NavBar from "./components/FunctionalComponents/NavBar";
import "./assets/css/Home.css";
import "./assets/css/NavBar.css";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
function App() {
  return (
    <div>
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/About" element={<About college="Kongu Engineering College"clg1="Kongu Arts"clg2="Kongu Naturopathy"/>}/>
        <Route path="/Gallery" element={<Gallery/>}/>
        <Route path="/Contact" element={<Contact/>}/></Routes></BrowserRouter>
     
    </div>
  );
}

export default App;