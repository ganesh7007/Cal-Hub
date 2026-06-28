import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import TraditionalAttacks from './pages/TraditionalAttacks';
import TrendingAttacks from './pages/TrendingAttacks';
import Impact from './pages/Impact';
import ImpactDetail from './pages/ImpactDetail';
import CyberBlogs from './pages/CyberBlogs';
import CyberLoader from './components/CyberLoader';
import OfflinePopup from './components/OfflinePopup';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  if (isLoading) {
    return <CyberLoader onComplete={() => setIsLoading(false)} />;
  }

  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/traditional" element={<TraditionalAttacks />} />
            <Route path="/trending" element={<TrendingAttacks />} />
            <Route path="/impact" element={<Impact />} />
            <Route path="/impact/:id" element={<ImpactDetail />} />
            <Route path="/blogs" element={<CyberBlogs />} />
          </Routes>
        </main>
        <OfflinePopup />
      </div>
    </Router>
  );
}

export default App;
