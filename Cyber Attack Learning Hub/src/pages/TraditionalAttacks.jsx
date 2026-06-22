import React, { useState } from 'react';
import { 
  Bug, 
  Database, 
  Terminal, 
  Globe, 
  ShieldAlert, 
  MonitorOff, 
  Lock, 
  Key,
  BookOpen,
  CheckCircle,
  Clock,
  Skull,
  DollarSign,
  ArrowDownCircle,
  AlertOctagon,
  Gavel,
  ShieldCheck,
  Activity,
  X,
  ChevronRight
} from 'lucide-react';
import { traditionalDetails } from '../data/traditionalDetails';
import './TraditionalAttacks.css';

const attackTypes = [
  { id: 1, name: 'VIRUS', icon: <Bug size={32}/>, desc: 'Malicious programs that attach to files and spread when the infected file is executed.' },
  { id: 2, name: 'WORM', icon: <Terminal size={32}/>, desc: 'Self-replicating malware that spreads across networks without user interaction.' },
  { id: 3, name: 'TROJAN HORSE', icon: <Globe size={32}/>, desc: 'Disguised as legitimate software to gain unauthorized access and steal data.' },
  { id: 4, name: 'PHISHING', icon: <ShieldAlert size={32}/>, desc: 'Deceptive attempts to steal sensitive information using fake emails or websites.' },
  { id: 5, name: 'DOS ATTACK', icon: <MonitorOff size={32}/>, desc: 'Overwhelms a system or network with traffic to make it unavailable.' },
  { id: 6, name: 'SQL INJECTION', icon: <Database size={32}/>, desc: 'Exploits vulnerabilities in databases to access, modify or delete data.' },
  { id: 7, name: 'XSS ATTACK', icon: <Terminal size={32}/>, desc: 'Injects malicious scripts into websites viewed by other users.' },
  { id: 8, name: 'PASSWORD ATTACKS', icon: <Key size={32}/>, desc: 'Attempts to gain access by guessing, brute forcing or stealing passwords.' },
];

const TraditionalAttacks = () => {
  const [selectedAttack, setSelectedAttack] = useState(null);
  const [isClosing, setIsClosing] = useState(false);

  const closeModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      setSelectedAttack(null);
      setIsClosing(false);
    }, 700); // Wait for the hand pull animation
  };

  const renderModal = () => {
    if (!selectedAttack && !isClosing) return null;
    const details = traditionalDetails[selectedAttack];
    if (!details && !isClosing) return null;

    return (
      <div className={`attack-modal-overlay ${isClosing ? 'overlay-closing' : ''}`} onClick={closeModal}>
        {isClosing && (
          <div className="robotic-hand">
            🦾
          </div>
        )}
        <div className={`attack-modal-content neon-box ${isClosing ? 'modal-pulled-away' : ''}`} onClick={(e) => e.stopPropagation()}>
          <div className="modal-header">
            <h2 className="text-neon glow-text">{details.title}</h2>
            <button className="close-btn" onClick={closeModal}><X size={24} /></button>
          </div>
          <div className="modal-body custom-scrollbar">
            <div className="modal-section">
              <h3 className="section-title"><Bug size={18}/> Types</h3>
              <ul>{details.types.map((item, i) => <li key={i}><ChevronRight size={14} className="text-neon inline-icon"/> {item}</li>)}</ul>
            </div>
            <div className="modal-section">
              <h3 className="section-title"><Clock size={18}/> History</h3>
              <ul>{details.history.map((item, i) => <li key={i}><ChevronRight size={14} className="text-neon inline-icon"/> {item}</li>)}</ul>
            </div>
            <div className="modal-section">
              <h3 className="section-title"><Activity size={18}/> Impact</h3>
              <ul>{details.impact.map((item, i) => <li key={i}><ChevronRight size={14} className="text-neon inline-icon"/> {item}</li>)}</ul>
            </div>
            <div className="modal-section">
              <h3 className="section-title"><ShieldCheck size={18}/> Prevention</h3>
              <ul>{details.prevention.map((item, i) => <li key={i}><ChevronRight size={14} className="text-neon inline-icon"/> {item}</li>)}</ul>
            </div>
            <div className="modal-section">
              <h3 className="section-title"><Terminal size={18}/> Programming / Techniques</h3>
              <ul>{details.programming.map((item, i) => <li key={i}><ChevronRight size={14} className="text-neon inline-icon"/> {item}</li>)}</ul>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="page-container ta-page">
      {renderModal()}
      <div className="ta-header grid-sidebar">
        <div className="ta-main-intro">
          <div className="breadcrumb">Home &gt; Traditional Attacks</div>
          <h1 className="title-main text-neon glow-text">
            TRADITIONAL<br/>CYBER ATTACKS
          </h1>
          <p className="subtitle-desc">
            Explore the most common and traditional types of cyber attacks that have been used by attackers for years to exploit systems, steal data, and disrupt operations.
          </p>
          
          <div className="ta-stats-row">
            <div className="ta-stat-badge neon-box">
              <BookOpen className="text-neon" size={24}/>
              <div>
                <span className="ta-stat-num">8</span> Types of Attacks Covered
              </div>
            </div>
            <div className="ta-stat-badge neon-box">
              <CheckCircle className="text-neon" size={24}/>
              <div>
                <span className="ta-stat-num">100+</span> Real World Examples Included
              </div>
            </div>
          </div>
        </div>

        <div className="ta-about-box neon-box">
          <h3 className="section-title">ABOUT TRADITIONAL ATTACKS <InfoIcon /></h3>
          <p>Traditional attacks are the foundation of modern cyber threats. Understanding these attacks helps in building strong defenses and staying secure.</p>
          <ul className="custom-list">
            <li>Easy to execute</li>
            <li>Widely used by attackers</li>
            <li>High impact on systems</li>
            <li>Evolving in modern ways</li>
          </ul>
        </div>
      </div>

      <div className="ta-content-layout">
        <div className="ta-attacks-grid">
          <h3 className="section-title"><Lock size={20}/> TYPES OF TRADITIONAL ATTACKS</h3>
          <div className="grid-4">
            {attackTypes.map((attack) => (
              <div key={attack.id} className="attack-card neon-box">
                <div className="attack-card-header">
                  <span className="attack-num">{attack.id}. {attack.name}</span>
                </div>
                <div className="attack-card-body">
                  <div className="attack-icon-wrapper">{attack.icon}</div>
                  <p>{attack.desc}</p>
                </div>
                <div className="attack-card-footer">
                  <button className="explore-link explore-btn" onClick={() => setSelectedAttack(attack.id)}>
                    Learn More &rarr;
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="ta-sidebar">
          <div className="timeline-box neon-box">
            <h3 className="section-title"><Clock size={20}/> ATTACK TIMELINE</h3>
            <div className="timeline">
              <div className="timeline-item">
                <span className="timeline-year">1980s</span>
                <span className="timeline-desc">Virus & Worms emerged</span>
              </div>
              <div className="timeline-item">
                <span className="timeline-year">1990s</span>
                <span className="timeline-desc">Trojans became popular</span>
              </div>
              <div className="timeline-item">
                <span className="timeline-year">2000s</span>
                <span className="timeline-desc">Phishing & DoS attacks rise</span>
              </div>
              <div className="timeline-item">
                <span className="timeline-year">2010s</span>
                <span className="timeline-desc">SQL Injection & XSS grow</span>
              </div>
              <div className="timeline-item">
                <span className="timeline-year">2020s</span>
                <span className="timeline-desc">Advanced & automated attacks</span>
              </div>
            </div>
            <a href="#" className="explore-link right-align">View Evolution &rarr;</a>
          </div>

          <div className="incidents-box neon-box">
            <h3 className="section-title"><Globe size={20}/> REAL WORLD INCIDENTS</h3>
            <ul className="incident-list">
              <li><span>ILOVEYOU Virus Outbreak</span> <span className="incident-year text-neon">2000</span></li>
              <li><span>MyDoom Email Worm</span> <span className="incident-year text-neon">2004</span></li>
              <li><span>Conficker Worm</span> <span className="incident-year text-neon">2008</span></li>
              <li><span>Sony PSN Outage (DoS)</span> <span className="incident-year text-neon">2011</span></li>
              <li><span>Yahoo Data Breach (Phishing)</span> <span className="incident-year text-neon">2014</span></li>
            </ul>
            <a href="#" className="explore-link right-align">View All Incidents &rarr;</a>
          </div>
        </div>
      </div>

      <div className="ta-bottom-row grid-sidebar">
        <div className="impact-section neon-box">
          <h3 className="section-title"><Activity size={20}/> IMPACT OF TRADITIONAL ATTACKS</h3>
          <div className="grid-5-icons">
            <div className="impact-item">
              <Skull className="impact-icon text-danger" size={32}/>
              <h4>Data Theft</h4>
              <p>Loss of sensitive information</p>
            </div>
            <div className="impact-item">
              <DollarSign className="impact-icon text-warning" size={32}/>
              <h4>Financial Loss</h4>
              <p>Huge monetary damages</p>
            </div>
            <div className="impact-item">
              <ArrowDownCircle className="impact-icon text-neon" size={32}/>
              <h4>Downtime</h4>
              <p>System & network unavailability</p>
            </div>
            <div className="impact-item">
              <AlertOctagon className="impact-icon text-warning" size={32}/>
              <h4>Reputation Damage</h4>
              <p>Loss of trust and brand value</p>
            </div>
            <div className="impact-item">
              <Gavel className="impact-icon text-danger" size={32}/>
              <h4>Legal Consequences</h4>
              <p>Fines, compliance and penalties</p>
            </div>
          </div>
        </div>

        <div className="protect-section neon-box">
          <h3 className="section-title"><ShieldCheck size={20}/> HOW TO PROTECT YOURSELF</h3>
          <ul className="protect-list">
            <li><CheckCircle size={16} className="text-neon"/> Keep your systems and software updated</li>
            <li><CheckCircle size={16} className="text-neon"/> Use strong passwords and enable 2FA</li>
            <li><CheckCircle size={16} className="text-neon"/> Be cautious of suspicious links and emails</li>
            <li><CheckCircle size={16} className="text-neon"/> Use antivirus and firewall protection</li>
            <li><CheckCircle size={16} className="text-neon"/> Regularly backup important data</li>
          </ul>
        </div>
      </div>
      
      <footer className="footer-quote text-neon mono-font glow-text">
        "KNOWLEDGE IS YOUR BEST DEFENSE - LEARN TODAY, SECURE TOMORROW."
      </footer>
    </div>
  );
};

const InfoIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
);

export default TraditionalAttacks;
