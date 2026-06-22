import React, { useState } from 'react';
import { ArrowRight, Shield, Globe, Lock, AlertTriangle, Bug, Activity, ShieldAlert, ChevronDown, ChevronUp, Info } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroHackerImg from '../assets/images/hero-hacker.png';
import './Home.css';

const OverviewCard = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="overview-card neon-box" style={{ marginTop: '2rem', marginBottom: '2rem', transition: 'all 0.3s ease' }}>
      <div 
        className="overview-header" 
        onClick={() => setIsExpanded(!isExpanded)}
        style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Info className="text-neon" size={24}/>
          <h3 style={{ margin: 0, fontSize: '1.2rem', color: 'var(--color-text-primary)' }}>CYBER ATTACK OVERVIEW</h3>
        </div>
        <button className="btn-secondary" style={{ padding: '0.5rem 1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', pointerEvents: 'none' }}>
          LEARN MORE {isExpanded ? <ChevronUp size={16}/> : <ChevronDown size={16}/>}
        </button>
      </div>
      
      {isExpanded && (
        <div className="overview-content" style={{ marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid var(--color-border)', animation: 'fadeIn 0.5s ease-in-out' }}>
          <h4 className="text-neon" style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>Cyber attack: Meaning & definition</h4>
          <p style={{ marginBottom: '1rem', lineHeight: '1.6', color: 'var(--color-text-secondary)' }}>A cyber attack is the process of attempting to steal data or gaining unauthorized access to computers and networks using one or more computers. A cyber attack is often the first step an attacker takes in gaining unauthorized access to individual or business computers or networks before carrying out a data breach.</p>
          <p style={{ marginBottom: '1rem', lineHeight: '1.6', color: 'var(--color-text-secondary)' }}>The goal of a cyber attack is either to disable the target computer and take it offline or gain access to the computer’s data and infiltrate connected networks and systems. Cyber attacks also differ broadly in their sophistication, with cyber criminals launching both random and targeted attacks on businesses. Attackers deploy a wide range of methods to begin a cyber attack, such as denial of service, malware, phishing, and ransomware.</p>
          <p style={{ marginBottom: '2rem', lineHeight: '1.6', color: 'var(--color-text-secondary)' }}>An example is CMA CGM, one of the largest container shipping companies in the world. The firm suffered a cyber attack that originally targeted its servers, which then led to a data breach. The September 2020 attack occurred as malware was used to target the firm’s peripheral servers, which led to CMA CGM taking down access to its online services.</p>
          
          <h4 className="text-neon" style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>Evolution of cyber attacks</h4>
          <p style={{ marginBottom: '1rem', lineHeight: '1.6', color: 'var(--color-text-secondary)' }}>From ransomware to AI-driven threats, cyber attacks are surging. Attackers are using advanced tactics to exploit sensitive data. Here’s the timeline of how it evolved over the years.</p>
          
          <ul style={{ listStyle: 'none', paddingLeft: 0, marginBottom: '2rem' }}>
            <li style={{ marginBottom: '1rem', padding: '1rem', background: 'rgba(0,0,0,0.3)', borderLeft: '3px solid var(--color-warning)' }}><strong className="text-warning">2009-2012:</strong> Advanced Persistent Threats (APTs) focused on long-term, stealthy data theft. Operation Aurora in 2010, which targeted Google and other companies, is proof.</li>
            <li style={{ marginBottom: '1rem', padding: '1rem', background: 'rgba(0,0,0,0.3)', borderLeft: '3px solid var(--color-warning)' }}><strong className="text-warning">2013-2016:</strong> Ransomware became widespread, with attackers encrypting files and demanding ransoms. WannaCry ransomware (2017) spread rapidly across 150+ countries, impacting hospitals, businesses, and government systems.</li>
            <li style={{ marginBottom: '1rem', padding: '1rem', background: 'rgba(0,0,0,0.3)', borderLeft: '3px solid var(--color-warning)' }}><strong className="text-warning">2017-2020:</strong> IoT and AI-powered threats increased during this time. The Mirai Botnet infected IoT devices using weak credentials, bringing down services like Twitter and Netflix.</li>
            <li style={{ marginBottom: '1rem', padding: '1rem', background: 'rgba(0,0,0,0.3)', borderLeft: '3px solid var(--color-warning)' }}><strong className="text-warning">2021-2022:</strong> Supply chain and Ransomware-as-a-Service (RaaS) attacks increased. SolarWinds attackers compromised software updates, infiltrating corporate networks.</li>
            <li style={{ marginBottom: '1rem', padding: '1rem', background: 'rgba(0,0,0,0.3)', borderLeft: '3px solid var(--color-warning)' }}><strong className="text-warning">2022-Present:</strong> At present, deepfake and synthetic identity fraud have grown as threats. Attackers are misusing data to create false identities and commit financial fraud. Learning from recent major cyber attacks on global enterprises also highlights how these evolving tactics are reshaping security priorities across industries.</li>
          </ul>

          <h4 className="text-neon" style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>What are examples of a cyber attack?</h4>
          <p style={{ marginBottom: '1rem', lineHeight: '1.6', color: 'var(--color-text-secondary)' }}>What is a cyber attack within the context of a business’s daily operations? The prevailing cyber attack definition can be very broad, depending on the kind of assault criminals decide to launch. Here are a couple of example scenarios:</p>
          <ul style={{ listStyle: 'disc', paddingLeft: '2rem', color: 'var(--color-text-secondary)', marginBottom: '1.5rem' }}>
            <li style={{ marginBottom: '0.75rem', lineHeight: '1.6' }}><strong className="text-primary" style={{color: '#e0ffe0'}}>Malware:</strong> A company does not take the appropriate cyber attack prevention steps and allows its employees to visit any website they like. An employee goes to a fake site that automatically downloads malware onto their computer. The malware sets up a backdoor for a future ransomware attack.</li>
            <li style={{ marginBottom: '0.75rem', lineHeight: '1.6' }}><strong className="text-primary" style={{color: '#e0ffe0'}}>Phishing:</strong> A phishing email, one of the most common cyber attack types, gets sent to an employee telling them they need to update their bank account password. They are led to a fake site, and a hacker collects all the information they put in.</li>
          </ul>
          <p style={{ lineHeight: '1.6', color: 'var(--color-text-secondary)' }}>These cyber attack examples are fairly simple—not the sophisticated types some criminal syndicates unleash—but they are still some of the most common methods malicious actors use to exploit companies and their employees.</p>
        </div>
      )}
    </div>
  );
};

const Home = () => {
  return (
    <div className="page-container home-page">
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="title-main text-neon glow-text">
            KNOW THE THREATS.<br/>
            STAY SECURE.
          </h1>
          <p className="hero-description">
            Explore common traditional and trending cyber attacks, viruses, and their real-world impact. Learn. Protect. Stay ahead.
          </p>
          <div className="hero-actions">
            <Link to="/traditional" className="btn-primary">
              EXPLORE ATTACKS <ArrowRight size={18} />
            </Link>
            <a href="https://cyberwolf.pro" target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{textDecoration: 'none'}}>
              LEARN MORE <AlertTriangle size={16} />
            </a>
          </div>
        </div>
        
        <div className="hero-graphic">
           <img src={heroHackerImg} alt="System Compromised" className="hero-img-graphic" />
        </div>

        <div className="live-threat-feed neon-box">
          <h3 className="section-title text-neon">LIVE THREAT FEED</h3>
          <ul className="threat-list">
            <li className="threat-item">
              <Bug className="threat-icon danger" />
              <div className="threat-info">
                <h4>RANSOMWARE ATTACK</h4>
                <span>Target: Healthcare Sector</span>
                <span>Location: USA</span>
              </div>
              <span className="threat-time">2m ago</span>
            </li>
            <li className="threat-item">
              <AlertTriangle className="threat-icon warning" />
              <div className="threat-info">
                <h4>PHISHING CAMPAIGN</h4>
                <span>Target: Financial Sector</span>
                <span>Location: UK</span>
              </div>
              <span className="threat-time">5m ago</span>
            </li>
            <li className="threat-item">
              <Activity className="threat-icon danger" />
              <div className="threat-info">
                <h4>MALWARE DETECTED</h4>
                <span>Type: Info Stealer</span>
                <span>Location: India</span>
              </div>
              <span className="threat-time">8m ago</span>
            </li>
          </ul>
          <Link to="/trending" className="view-all-link">VIEW ALL <ArrowRight size={14}/></Link>
        </div>
      </div>

      <div className="categories-grid grid-4">
        <Link to="/traditional" className="category-card neon-box">
          <Bug size={40} className="category-icon" />
          <h3>TRADITIONAL ATTACKS</h3>
          <p>Viruses, Worms, Trojans, Phishing, DoS & more.</p>
          <span className="explore-link">Explore <ArrowRight size={14}/></span>
        </Link>
        <Link to="/trending" className="category-card neon-box">
          <Activity size={40} className="category-icon" />
          <h3>TRENDING ATTACKS</h3>
          <p>Ransomware, AI Attacks, Deepfakes, Supply Chain & more.</p>
          <span className="explore-link">Explore <ArrowRight size={14}/></span>
        </Link>
        <Link to="/traditional" className="category-card neon-box">
          <ShieldAlert size={40} className="category-icon" />
          <h3>VIRUSES & MALWARE</h3>
          <p>Explore different types of malware and how they work.</p>
          <span className="explore-link">Explore <ArrowRight size={14}/></span>
        </Link>
        <Link to="/impact" className="category-card neon-box">
          <Globe size={40} className="category-icon" />
          <h3>IMPACT & STATISTICS</h3>
          <p>Real-world impact, global stats and case studies.</p>
          <span className="explore-link">Explore <ArrowRight size={14}/></span>
        </Link>
      </div>

      <OverviewCard />

      <div className="bottom-section grid-sidebar">
        <div className="stats-section neon-box">
          <h3 className="section-title"><Activity size={20}/> CYBER THREAT STATISTICS</h3>
          <div className="grid-4 stats-grid">
            <div className="stat-item">
              <Globe className="stat-icon" />
              <div className="stat-value">8.4B+</div>
              <div className="stat-label">Malware Attacks in 2024</div>
            </div>
            <div className="stat-item">
              <AlertTriangle className="stat-icon" />
              <div className="stat-value">2.8M+</div>
              <div className="stat-label">Phishing Sites Detected</div>
            </div>
            <div className="stat-item">
              <Lock className="stat-icon" />
              <div className="stat-value">$9.5T</div>
              <div className="stat-label">Cybercrime Damage by 2025</div>
            </div>
            <div className="stat-item">
              <Shield className="stat-icon" />
              <div className="stat-value">70%</div>
              <div className="stat-label">Attacks Targeting Small Businesses</div>
            </div>
          </div>
        </div>

        <div className="how-it-works neon-box">
           <h3 className="section-title">HOW IT WORKS</h3>
           <div className="steps-container">
             <div className="step">
               <div className="step-icon-wrapper"><Activity size={24}/></div>
               <div className="step-text">
                 <h4>1. EXPLORE</h4>
                 <p>Browse different types of attacks and threats.</p>
               </div>
             </div>
             {/* We'd map out the rest of the steps here */}
           </div>
        </div>
      </div>
      
      <footer className="footer-quote text-neon mono-font glow-text">
        "CYBER SECURITY IS NOT JUST AN IT ISSUE, IT'S A BUSINESS ISSUE."
      </footer>
    </div>
  );
};

export default Home;
