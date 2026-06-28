import React, { useState, useEffect } from 'react';
import { WifiOff, AlertTriangle } from 'lucide-react';
import './OfflinePopup.css';

const OfflinePopup = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  if (isOnline) return null;

  return (
    <div className="offline-popup-overlay">
      <div className="offline-popup-box neon-box danger-glow">
        <div className="offline-header">
          <AlertTriangle className="text-danger" size={28} />
          <h3 className="text-danger glow-text-danger">CONNECTION LOST</h3>
        </div>
        <div className="offline-body">
          <WifiOff size={48} className="text-danger mb-3" style={{ margin: '0 auto', display: 'block' }} />
          <p>Network not connected. Please check your internet connection to continue accessing the Cyber Attack Learning Hub.</p>
          <div className="offline-scanning">
            <span>Attempting to reconnect</span>
            <div className="loading-dots danger">
              <span></span><span></span><span></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfflinePopup;
