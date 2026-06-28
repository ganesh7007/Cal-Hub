import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Globe, 
  DollarSign, 
  Activity, 
  ShieldAlert, 
  Database,
  Users,
  Clock,
  Briefcase,
  AlertOctagon,
  ArrowUpRight,
  PieChart,
  ShieldCheck,
  TrendingDown,
  Info,
  Lock
} from 'lucide-react';
import './Impact.css';
import { impactDetailsData } from '../data/impactDetails';

const Impact = () => {
  const navigate = useNavigate();
  return (
    <div className="page-container impact-page">
      <div className="impact-header grid-sidebar">
        <div className="impact-nav neon-box">
          <h3 className="section-title">IMPACT OVERVIEW</h3>
          <ul className="side-nav-list">
            <li className="active"><Activity size={16}/> Dashboard Overview</li>
            <li onClick={() => navigate('/impact/financial')}><DollarSign size={16}/> Financial Impact</li>
            <li onClick={() => navigate('/impact/industries')}><Briefcase size={16}/> Industries Affected</li>
            <li onClick={() => navigate('/impact/globalMap')}><Globe size={16}/> Global Impact Map</li>
            <li onClick={() => navigate('/impact/dataBreach')}><Database size={16}/> Data Breach Impact</li>
            <li onClick={() => navigate('/impact/business')}><TrendingDown size={16}/> Business Impact</li>
            <li onClick={() => navigate('/impact/downtime')}><Clock size={16}/> Downtime & Recovery</li>
          </ul>

          <div className="did-you-know">
            <h4><Info size={16}/> DID YOU KNOW?</h4>
            <p>The global cost of cybercrime is predicted to reach <strong className="text-neon">$10.5 TRILLION</strong> annually by 2025.</p>
            <span className="source-text">Source: Cybersecurity Ventures</span>
          </div>

          <div className="impact-score-widget neon-box">
             <h4>GLOBAL IMPACT SCORE</h4>
             <div className="score-circle">
               <span className="score-value">8.7<span className="small">/10</span></span>
               <span className="score-label text-danger">EXTREME</span>
             </div>
          </div>
        </div>

        <div className="impact-main">
              <div className="impact-intro">
                <h1 className="title-main text-neon glow-text">CYBER ATTACK IMPACT</h1>
                <p className="subtitle-desc">
                  Cyber attacks don't just steal data — they disrupt lives, damage reputations, and cost billions. Explore the real-world impact across industries, economies, and society.
                </p>
              </div>

          <div className="impact-kpi-grid">
            <div className="kpi-card neon-box">
              <div className="kpi-icon"><DollarSign size={24}/></div>
              <div className="kpi-data">
                <span className="kpi-label">TOTAL ANNUAL FINANCIAL LOSS</span>
                <span className="kpi-value text-neon">$ 8.44T</span>
                <span className="kpi-trend up"><ArrowUpRight size={14}/> 15.6% vs 2023</span>
              </div>
            </div>
            <div className="kpi-card neon-box">
              <div className="kpi-icon"><ShieldAlert size={24}/></div>
              <div className="kpi-data">
                <span className="kpi-label">TOTAL INCIDENTS (2024)</span>
                <span className="kpi-value">4.1M+</span>
                <span className="kpi-trend up"><ArrowUpRight size={14}/> 22.3% vs 2023</span>
              </div>
            </div>
            <div className="kpi-card neon-box">
              <div className="kpi-icon"><Database size={24}/></div>
              <div className="kpi-data">
                <span className="kpi-label">TOTAL RECORDS COMPROMISED</span>
                <span className="kpi-value">16.2B+</span>
                <span className="kpi-trend up"><ArrowUpRight size={14}/> 28.7% vs 2023</span>
              </div>
            </div>
            <div className="kpi-card neon-box">
              <div className="kpi-icon"><Users size={24}/></div>
              <div className="kpi-data">
                <span className="kpi-label">PEOPLE AFFECTED GLOBALLY</span>
                <span className="kpi-value">3.2B+</span>
                <span className="kpi-trend up"><ArrowUpRight size={14}/> 18.9% vs 2023</span>
              </div>
            </div>
            <div className="kpi-card neon-box">
              <div className="kpi-icon"><DollarSign size={24}/></div>
              <div className="kpi-data">
                <span className="kpi-label">AVERAGE COST PER BREACH</span>
                <span className="kpi-value">$ 4.88M</span>
                <span className="kpi-trend up"><ArrowUpRight size={14}/> 10.4% vs 2023</span>
              </div>
            </div>
          </div>

          <div className="impact-charts-row">
            <div className="chart-box neon-box flex-2">
              <h3 className="section-title">FINANCIAL IMPACT OVER TIME <span className="small-text">(IN TRILLIONS USD)</span></h3>
              <div className="bar-chart-placeholder">
                <div className="bar-wrapper"><div className="bar" style={{height: '38%'}}></div><span>2020</span></div>
                <div className="bar-wrapper"><div className="bar" style={{height: '46%'}}></div><span>2021</span></div>
                <div className="bar-wrapper"><div className="bar" style={{height: '54%'}}></div><span>2022</span></div>
                <div className="bar-wrapper"><div className="bar" style={{height: '66%'}}></div><span>2023</span></div>
                <div className="bar-wrapper"><div className="bar" style={{height: '84%'}}></div><span>2024</span></div>
                <div className="bar-wrapper"><div className="bar text-neon" style={{height: '100%'}}></div><span className="text-neon">2025*</span></div>
              </div>
            </div>
            
            <div className="chart-box neon-box flex-1">
              <h3 className="section-title">IMPACT BREAKDOWN (2024)</h3>
              <div className="donut-chart-container">
                 <div className="donut-chart">
                   <div className="donut-hole">TOTAL<br/>IMPACT</div>
                 </div>
                 <ul className="chart-legend">
                   <li><span className="legend-color c1"></span> Financial Loss 45%</li>
                   <li><span className="legend-color c2"></span> Data Breach 25%</li>
                   <li><span className="legend-color c3"></span> Downtime 15%</li>
                   <li><span className="legend-color c4"></span> Reputation 10%</li>
                   <li><span className="legend-color c5"></span> Legal 5%</li>
                 </ul>
              </div>
            </div>
          </div>

          <div className="impact-details-row grid-3">
             <div className="detail-box neon-box">
               <h3 className="section-title">DOWNTIME & RECOVERY</h3>
               <div className="downtime-stats">
                 <div className="dt-stat">
                   <Clock className="text-neon" size={32}/>
                   <span className="dt-val">24.6 HRS</span>
                   <span className="dt-lbl">Average Downtime per Incident</span>
                 </div>
                 <div className="dt-stat">
                   <DollarSign className="text-warning" size={32}/>
                   <span className="dt-val">$1.85M</span>
                   <span className="dt-lbl">Average Recovery Cost</span>
                 </div>
               </div>
             </div>

             <div className="detail-box neon-box">
               <h3 className="section-title">DATA BREACH IMPACT</h3>
               <div className="breach-stats">
                 <div className="bs-stat">
                   <Database className="text-neon" size={24}/>
                   <span className="bs-val">16.2B+</span>
                   <span className="bs-lbl">Records Compromised</span>
                 </div>
                 <div className="bs-stat">
                   <Users className="text-neon" size={24}/>
                   <span className="bs-val">3.2B+</span>
                   <span className="bs-lbl">Individuals Affected</span>
                 </div>
               </div>
             </div>

             <div className="detail-box neon-box">
               <h3 className="section-title">BUSINESS IMPACT ANALYSIS</h3>
               <ul className="bia-list">
                 <li>
                   <AlertOctagon className="text-danger" size={20}/>
                   <div className="bia-info">
                     <h5>Revenue Loss</h5>
                     <p>Loss of income due to system downtime.</p>
                   </div>
                 </li>
                 <li>
                   <ShieldAlert className="text-warning" size={20}/>
                   <div className="bia-info">
                     <h5>Reputation Damage</h5>
                     <p>Loss of customer trust and brand value.</p>
                   </div>
                 </li>
               </ul>
             </div>
          </div>

        </div>
      </div>
      
      <div className="impact-footer neon-box">
        <div className="footer-actions">
           <div className="action-item">
             <ShieldCheck size={24} className="text-neon"/>
             <span>Assess Risks</span>
           </div>
           <div className="action-item">
             <Lock size={24} className="text-neon"/>
             <span>Strengthen Security</span>
           </div>
           <div className="action-item">
             <Activity size={24} className="text-neon"/>
             <span>Incident Response</span>
           </div>
           <div className="action-item">
             <Briefcase size={24} className="text-neon"/>
             <span>Business Continuity</span>
           </div>
        </div>
        <p className="mono-font glow-text text-neon">Every attack has an impact. Every impact teaches us how to defend. Learn. Stay Aware. Reduce Impact.</p>
      </div>
    </div>
  );
};

export default Impact;
