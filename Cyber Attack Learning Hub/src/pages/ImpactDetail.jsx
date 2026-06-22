import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { impactDetailsData } from '../data/impactDetails';
import './Impact.css';

const ImpactDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const content = impactDetailsData[id];

  if (!content) {
    return (
      <div className="page-container impact-page" style={{ textAlign: 'center', paddingTop: '100px' }}>
        <h2 className="text-neon">Impact Not Found</h2>
        <button className="btn-primary" onClick={() => navigate('/impact')} style={{ marginTop: '2rem' }}>
          <ArrowLeft size={18} style={{ marginRight: '0.5rem', display: 'inline' }}/> BACK TO OVERVIEW
        </button>
      </div>
    );
  }

  return (
    <div className="page-container impact-page" style={{ maxWidth: '900px', margin: '0 auto' }}>
      <div style={{ marginBottom: '2rem' }}>
        <button 
          className="explore-btn text-neon neon-box" 
          onClick={() => navigate('/impact')}
          style={{ 
            background: 'rgba(0, 0, 0, 0.4)', 
            border: '1px solid var(--color-neon-green)', 
            cursor: 'pointer', 
            padding: '0.75rem 1.5rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}
        >
          <ArrowLeft size={18}/> BACK TO IMPACT OVERVIEW
        </button>
      </div>
      
      <div className="impact-detail-wrapper neon-box p-4" style={{ padding: '2rem', background: 'rgba(0,0,0,0.4)' }}>
        {content}
      </div>
    </div>
  );
};

export default ImpactDetail;
