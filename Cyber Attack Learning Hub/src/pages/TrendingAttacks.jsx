import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Cpu,
  UserX,
  Lock,
  MailWarning,
  CloudLightning,
  Link2,
  Smartphone,
  Code,
  Coins,
  Bug,
  Activity,
  AlertTriangle,
  Fingerprint,
  ShieldCheck,
  X,
  ChevronRight
} from 'lucide-react';
import { trendingDetails } from '../data/trendingDetails';

import './TrendingAttacks.css';

const trendingAttacks = [
  { id: 1, name: 'AI-POWERED ATTACKS', icon: <Cpu/>, desc: 'Attackers leverage AI/ML to automate, adapt, and evades detection.', level: 5 },
  { id: 2, name: 'DEEPFAKE ATTACKS', icon: <UserX/>, desc: 'Use of deepfake technology for identity theft, fraud and misinformation.', level: 4 },
  { id: 3, name: 'RANSOMWARE', icon: <Lock/>, desc: 'Malicious software that locks systems and demands ransom for access.', level: 5 },
  { id: 4, name: 'BUSINESS EMAIL COMPROMISE (BEC)', icon: <MailWarning/>, desc: 'Fraudulent emails targeting businesses to steal money or sensitive data.', level: 4 },
  { id: 5, name: 'CLOUD ATTACKS', icon: <CloudLightning/>, desc: 'Exploits targeting cloud infrastructure, misconfigurations and services.', level: 4 },
  { id: 6, name: 'SUPPLY CHAIN ATTACKS', icon: <Link2/>, desc: 'Attacks through third-party vendors to compromise entire organizations.', level: 5 },
  { id: 7, name: 'MOBILE MALWARE', icon: <Smartphone/>, desc: 'Malicious apps and exploits targeting smartphones and mobile devices.', level: 3 },
  { id: 8, name: 'API ATTACKS', icon: <Code/>, desc: 'Exploiting insecure APIs to access data, disrupt services or escalate access.', level: 4 },
  { id: 9, name: 'CRYPTOJACKING', icon: <Coins/>, desc: 'Unauthorized use of systems to mine cryptocurrency.', level: 3 },
  { id: 10, name: 'ZERO-DAY EXPLOITS', icon: <Bug/>, desc: 'Exploiting unknown vulnerabilities before vendors can patch.', level: 5 },
];

const renderThreatLevel = (level) => {
  return (
    <div className="threat-level-dots">
      {[1,2,3,4,5].map(i => (
        <span key={i} className={`dot ${i <= level ? 'active' : ''}`}></span>
      ))}
    </div>
  );
};

const TrendingAttacks = () => {
  const [selectedAttack, setSelectedAttack] = useState(null);
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setSelectedAttack(null);
      setIsClosing(false);
    }, 700); // Wait for the hand pull animation
  };

  const renderModal = () => {
    if (!selectedAttack && !isClosing) return null;
    const details = trendingDetails[selectedAttack];

    return (
      <div className={`attack-modal-overlay ${isClosing ? 'overlay-closing' : ''}`} onClick={handleClose}>
        {isClosing && (
          <div className="robotic-hand">
            🦾
          </div>
        )}
        <div className={`attack-modal-content neon-box ${isClosing ? 'modal-pulled-away' : ''}`} onClick={(e) => e.stopPropagation()}>
          <div className="modal-header">
            <h2 className="text-neon glow-text">{details?.title}</h2>
            <button className="close-btn" onClick={handleClose}><X size={24} /></button>
          </div>
          <div className="modal-body custom-scrollbar">
            <p style={{ color: 'var(--color-text-secondary)', fontStyle: 'italic', marginBottom: '1.5rem', lineHeight: '1.6' }}>{details?.whatItIs}</p>
            
            <div className="modal-section">
              <h3 className="section-title"><Bug size={18}/> Types</h3>
              <ul>{details?.types.map((item, i) => <li key={i}><ChevronRight size={14} className="text-neon inline-icon"/> {item}</li>)}</ul>
            </div>
            <div className="modal-section">
              <h3 className="section-title"><Activity size={18}/> History</h3>
              <ul>{details?.history.map((item, i) => <li key={i}><ChevronRight size={14} className="text-neon inline-icon"/> {item}</li>)}</ul>
            </div>
            <div className="modal-section">
              <h3 className="section-title"><AlertTriangle size={18}/> Impact</h3>
              <ul>{details?.impact.map((item, i) => <li key={i}><ChevronRight size={14} className="text-neon inline-icon"/> {item}</li>)}</ul>
            </div>
            <div className="modal-section">
              <h3 className="section-title"><ShieldCheck size={18}/> Prevention</h3>
              <ul>{details?.prevention.map((item, i) => <li key={i}><ChevronRight size={14} className="text-neon inline-icon"/> {item}</li>)}</ul>
            </div>
            <div className="modal-section">
              <h3 className="section-title"><Code size={18}/> Programming / Techniques</h3>
              <ul>{details?.programming.map((item, i) => <li key={i}><ChevronRight size={14} className="text-neon inline-icon"/> {item}</li>)}</ul>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="page-container trend-page">
      {renderModal()}
      <div className="trend-header grid-sidebar">
        <div className="trend-main-intro">
          <div className="breadcrumb">Home &gt; Trending Attacks</div>
          <h1 className="title-main text-neon glow-text">
            TRENDING CYBER<br/>ATTACKS.
          </h1>
          <p className="subtitle-desc">
            Stay ahead of the curve. Explore the most significant and emerging cyber threats targeting organizations and individuals worldwide.
          </p>
          
          <div className="trend-stats-row">
            <div className="trend-stat-badge neon-box">
              <Bug className="text-neon" size={20}/>
              <div><span className="trend-stat-num">120+</span><br/>Emerging Attack Types</div>
            </div>
            <div className="trend-stat-badge neon-box">
              <Activity className="text-neon" size={20}/>
              <div><span className="trend-stat-num">85%</span><br/>Increase in Sophistication</div>
            </div>
            <div className="trend-stat-badge neon-box">
              <Activity className="text-neon" size={20}/>
              <div><span className="trend-stat-num">2026</span><br/>High Impact Forecast</div>
            </div>
            <div className="trend-stat-badge neon-box highlight">
              <AlertTriangle className="text-warning" size={20}/>
              <div><span className="trend-stat-num text-warning">HIGH</span><br/>Threat Landscape</div>
            </div>
          </div>
        </div>

        <div className="trend-graphic neon-box image-graphic-container">
           <img src="https://res.cloudinary.com/dfjtvivgv/image/upload/v1782651860/2140b756-d704-4bdf-ba00-c1f83f4fa45a_ihvlao.png" alt="Trending Attacks Overview" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'inherit' }} />
        </div>
      </div>

      <div className="trend-attacks-grid">
        <div className="section-header">
          <h3 className="section-title">TOP TRENDING ATTACKS</h3>
          <select className="sort-dropdown">
            <option>Sort by: Threat Level</option>
            <option>Sort by: Name</option>
          </select>
        </div>
        <div className="grid-5-auto">
          {trendingAttacks.map((attack) => (
            <div key={attack.id} className="trend-card neon-box">
              <div className="trend-icon-wrapper">{attack.icon}</div>
              <h4>{attack.name}</h4>
              <p>{attack.desc}</p>
              <div className="threat-level-container">
                <span className="level-label">THREAT LEVEL</span>
                {renderThreatLevel(attack.level)}
              </div>
              <button className="explore-link explore-btn" onClick={() => setSelectedAttack(attack.id)}>
                LEARN MORE &rarr;
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="trend-content-layout">
        <div className="timeline-section">
          <h3 className="section-title">TRENDING ATTACKS TIMELINE</h3>
          <div className="horizontal-timeline neon-box">
            <div className="ht-line"></div>
            <div className="ht-items">
              {['2020','2021','2022','2023','2024','2025','2026'].map((year, index) => (
                <div key={year} className="ht-item">
                  <div className="ht-dot"></div>
                  <div className="ht-year">{year}</div>
                  <div className="ht-desc">
                    {index === 0 && 'Ransomware attacks surge globally'}
                    {index === 1 && 'Supply chain attacks gain traction'}
                    {index === 2 && 'Cloud infrastructure attacks rise'}
                    {index === 3 && 'API & AI based attacks emerge'}
                    {index === 4 && 'Deepfakes used for fraud'}
                    {index === 5 && 'AI powered malware becomes real'}
                    {index === 6 && 'Autonomous cyber attacks predicted'}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="real-world-box neon-box" style={{marginTop: '2rem'}}>
            <h3 className="section-title">REAL-WORLD INCIDENTS</h3>
            <ul className="trend-incident-list">
               <li>
                 <span className="year-badge">2024</span>
                 <div className="incident-details">
                   <h5 className="text-neon">Change Healthcare Ransomware Attack</h5>
                   <p>A ransomware attack impacted millions of users and sensitive healthcare data.</p>
                 </div>
               </li>
               <li>
                 <span className="year-badge">2023</span>
                 <div className="incident-details">
                   <h5 className="text-neon">MOVEit Transfer Breach</h5>
                   <p>A critical vulnerability exploited, affecting thousands of organizations worldwide.</p>
                 </div>
               </li>
               <li>
                 <span className="year-badge">2022</span>
                 <div className="incident-details">
                   <h5 className="text-neon">Colonial Pipeline Attack</h5>
                   <p>Ransomware attack disrupted fuel supply across the United States.</p>
                 </div>
               </li>
               <li>
                 <span className="year-badge">2021</span>
                 <div className="incident-details">
                   <h5 className="text-neon">SolarWinds Supply Chain Attack</h5>
                   <p>Attackers compromised Orion software update mechanism.</p>
                 </div>
               </li>
            </ul>
            <Link to="/blogs" className="explore-link right-align">VIEW ALL INCIDENTS &rarr;</Link>
          </div>
        </div>

        <div className="intelligence-sidebar">
          <div className="live-intel-box neon-box">
            <div className="intel-header">
              <h3 className="section-title">LIVE THREAT INTELLIGENCE</h3>
              <span className="live-indicator"><span className="pulse"></span> LIVE</span>
            </div>
            <ul className="threat-list">
              {/* Similar to Home page feed, but more detailed */}
               <li className="threat-item">
                <Lock className="threat-icon danger" />
                <div className="threat-info">
                  <h4>Ransomware Campaign Detected</h4>
                  <span>Targeting Healthcare Sector</span>
                </div>
                <div className="threat-meta">
                  <span className="threat-time">2m ago</span>
                  <span className="threat-badge high">HIGH</span>
                </div>
              </li>
              <li className="threat-item">
                <Cpu className="threat-icon warning" />
                <div className="threat-info">
                  <h4>AI-Generated Phishing Sites</h4>
                  <span>Financial Institutions Targeted</span>
                </div>
                <div className="threat-meta">
                  <span className="threat-time">5m ago</span>
                  <span className="threat-badge medium">MEDIUM</span>
                </div>
              </li>
              <li className="threat-item">
                <CloudLightning className="threat-icon danger" />
                <div className="threat-info">
                  <h4>Cloud Misconfiguration Exploit</h4>
                  <span>Multiple Organizations Affected</span>
                </div>
                <div className="threat-meta">
                  <span className="threat-time">12m ago</span>
                  <span className="threat-badge high">HIGH</span>
                </div>
              </li>
               <li className="threat-item">
                <Link2 className="threat-icon danger" />
                <div className="threat-info">
                  <h4>Supply Chain Breach</h4>
                  <span>Software Update Compromised</span>
                </div>
                <div className="threat-meta">
                  <span className="threat-time">18m ago</span>
                  <span className="threat-badge high">HIGH</span>
                </div>
              </li>
            </ul>
            <a href="#" className="explore-link right-align" style={{marginTop: '1rem'}}>VIEW FULL THREAT FEED &rarr;</a>
          </div>

          <div className="trend-stats-box neon-box" style={{marginTop: '2rem'}}>
             <h3 className="section-title">TRENDING ATTACK STATISTICS</h3>
             <div className="circular-stats-grid">
                <div className="circular-stat">
                  <div className="circle-chart">78%</div>
                  <p>Increase in Ransomware Attacks</p>
                </div>
                <div className="circular-stat">
                  <div className="circle-chart">62%</div>
                  <p>AI Based Attacks Growth (2024-2026)</p>
                </div>
                <div className="circular-stat">
                  <div className="circle-chart">45%</div>
                  <p>Cloud Related Incidents</p>
                </div>
                <div className="circular-stat">
                  <div className="circle-chart">70%</div>
                  <p>Attacks Targeting Small & Medium Businesses</p>
                </div>
             </div>
             <a href="#" className="explore-link right-align">VIEW DETAILED STATISTICS &rarr;</a>
          </div>
        </div>
      </div>

      <div className="protect-footer neon-box">
        <h3 className="section-title">HOW TO PROTECT AGAINST TRENDING ATTACKS</h3>
        <div className="grid-5-icons">
           <div className="protect-item">
             <ShieldCheck className="text-neon" size={24}/>
             <span>Keep Systems & Software Updated</span>
           </div>
           <div className="protect-item">
             <Lock className="text-neon" size={24}/>
             <span>Enable Multi-Factor Authentication (MFA)</span>
           </div>
           <div className="protect-item">
             <UserX className="text-neon" size={24}/>
             <span>Employee Security Awareness Training</span>
           </div>
           <div className="protect-item">
             <Activity className="text-neon" size={24}/>
             <span>Monitor & Detect Threats in Real-time</span>
           </div>
           <div className="protect-item">
             <Fingerprint className="text-neon" size={24}/>
             <span>Use Zero Trust Security Model</span>
           </div>
        </div>
      </div>

      <footer className="footer-quote text-neon mono-font glow-text">
        "The best way to predict the future is to prepare for it." - Stay Informed. Stay Secure.
      </footer>
    </div>
  );
};

export default TrendingAttacks;
