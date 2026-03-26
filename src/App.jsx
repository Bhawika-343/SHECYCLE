import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import HealthLibrary from './pages/HealthLibrary';
import Calculators from './pages/Calculators';
import About from './pages/About';
import ForClinicians from './pages/ForClinicians';
import './App.css';

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Navbar />
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/library" element={<HealthLibrary />} />
            <Route path="/calculators" element={<Calculators />} />
            <Route path="/about" element={<About />} />
            <Route path="/clinicians" element={<ForClinicians />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
