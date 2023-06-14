import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// pages
import Inicio from "./pages/Inicio/Inicio";
import Contato from "./pages/Contato/Contato";

// components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

require('dotenv').config()

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <div className="container">      
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
