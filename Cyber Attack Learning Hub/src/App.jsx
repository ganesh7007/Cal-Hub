import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import TraditionalAttacks from './pages/TraditionalAttacks';
import TrendingAttacks from './pages/TrendingAttacks';
import Impact from './pages/Impact';
import ImpactDetail from './pages/ImpactDetail';
import CyberBlogs from './pages/CyberBlogs';
import './App.css';

function App() {
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
      </div>
    </Router>
  );
}

export default App;
