import React, { useState, useEffect } from 'react';
import { Globe, Search, Database, ShieldCheck, Shield, Target, Cloud, RefreshCcw, Lock } from 'lucide-react';
import './CyberLoader.css';

const CyberLoader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const duration = 3500; // 3.5 seconds total loading time
    const intervalTime = 50;
    const steps = duration / intervalTime;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const newProgress = Math.min(Math.round((currentStep / steps) * 100), 100);
      setProgress(newProgress);

      if (currentStep >= steps) {
        clearInterval(timer);
        setTimeout(() => {
          if (onComplete) onComplete();
        }, 300);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="cyber-loader-container">
      <div className="loader-background-grid"></div>
      
      {/* Top Left - Scanning Network */}
      <div className="status-box top-left">
        <div className="hexagon-icon">
          <Globe className="neon-icon" size={32} />
        </div>
        <div className="status-text text-neon">SCANNING NETWORK</div>
        <div className="loading-dots">
          <span></span><span></span><span></span><span></span>
        </div>
      </div>

      {/* Top Right - Detecting Threats */}
      <div className="status-box top-right">
        <div className="hexagon-icon">
          <Search className="neon-icon" size={32} />
        </div>
        <div className="status-text text-neon">DETECTING THREATS</div>
        <div className="loading-dots">
          <span></span><span></span><span></span><span></span>
        </div>
      </div>

      {/* Bottom Left - Verifying Data */}
      <div className="status-box bottom-left">
        <div className="hexagon-icon">
          <Database className="neon-icon" size={32} />
        </div>
        <div className="status-text text-neon">VERIFYING DATA</div>
        <div className="loading-dots">
          <span></span><span></span><span></span><span></span>
        </div>
      </div>

      {/* Bottom Right - Securing System */}
      <div className="status-box bottom-right">
        <div className="hexagon-icon">
          <ShieldCheck className="neon-icon" size={32} />
        </div>
        <div className="status-text text-neon">SECURING SYSTEM</div>
        <div className="loading-dots">
          <span></span><span></span><span></span><span></span>
        </div>
      </div>

      {/* Center Radar */}
      <div className="center-radar-container">
        <div className="radar-ring outer-ring"></div>
        <div className="radar-ring middle-ring dashed"></div>
        <div className="radar-ring inner-ring"></div>
        <div className="radar-scanner"></div>
        
        <div className="shield-container">
           <Shield className="shield-outline" size={100} />
           <Lock className="lock-icon" size={40} fill="currentColor" />
        </div>
        
        <div className="binary-bg">
           1010101001<br/>0101110001
        </div>
      </div>

      {/* Loading Bar */}
      <div className="loading-section">
        <h2 className="loading-title text-neon glow-text">LOADING...</h2>
        <p className="loading-subtitle">Securing your digital world</p>
        
        <div className="progress-bar-container">
          <div className="progress-bar-fill" style={{ width: `${progress}%` }}>
            <div className="progress-stripes"></div>
          </div>
          <span className="progress-text">{progress}%</span>
        </div>
      </div>

      {/* Bottom Status Indicators */}
      <div className="bottom-indicators">
        <div className="indicator-item">
          <Shield className="indicator-icon" size={24} />
          <div className="indicator-details">
            <span className="ind-title">PREVENT</span>
            <span className="ind-desc">Threats blocked</span>
          </div>
        </div>
        
        <div className="indicator-item">
          <Target className="indicator-icon" size={24} />
          <div className="indicator-details">
            <span className="ind-title">PROTECT</span>
            <span className="ind-desc">Data encrypted</span>
          </div>
        </div>

        <div className="indicator-item">
          <Cloud className="indicator-icon" size={24} />
          <div className="indicator-details">
            <span className="ind-title">MONITOR</span>
            <span className="ind-desc">System active</span>
          </div>
        </div>

        <div className="indicator-item">
          <RefreshCcw className="indicator-icon" size={24} />
          <div className="indicator-details">
            <span className="ind-title">RESPOND</span>
            <span className="ind-desc">Always ready</span>
          </div>
        </div>
      </div>
      
      <div className="wait-message">Please wait while we keep you safe...</div>
    </div>
  );
};

export default CyberLoader;
