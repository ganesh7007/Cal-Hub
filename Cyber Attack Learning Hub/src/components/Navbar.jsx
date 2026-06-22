import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Home, ShieldAlert, Bug, Activity, Info, FileText } from 'lucide-react';
import logoImg from '../assets/images/logo.jpg';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src={logoImg} alt="CAL Hub Logo" className="brand-icon-img" />
        <div className="brand-text">
          <h1>CAL Hub</h1>
          <span>Cyber Attack Learning Hub</span>
        </div>
      </div>

      <div className="navbar-links">
        <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
          <Home size={16} /> Home
        </NavLink>
        <NavLink to="/traditional" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
          <Activity size={16} /> Traditional Attacks
        </NavLink>
        <NavLink to="/trending" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
          <ShieldAlert size={16} /> Trending Attacks
        </NavLink>
        <NavLink to="/impact" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
          <Activity size={16} /> Impact
        </NavLink>
        <NavLink to="/blogs" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
          <FileText size={16} /> Cyber Blogs
        </NavLink>
      </div>

    </nav>
  );
};

export default Navbar;
