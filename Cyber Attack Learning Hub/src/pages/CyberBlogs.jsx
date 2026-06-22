import React, { useState } from 'react';
import { 
  FileText, 
  Users, 
  Calendar, 
  Search, 
  Star, 
  ShieldAlert,
  Lock,
  Shield,
  Cloud,
  Cpu,
  MonitorOff,
  Crosshair,
  LockKeyhole,
  CheckCircle,
  Smartphone,
  X
} from 'lucide-react';
import { blogContents } from '../data/blogContent';
import ZoomableImage from '../components/ZoomableImage';
import './CyberBlogs.css';

const featuredArticles = [
  { id: '01', category: 'AI SECURITY', time: '8 min read', title: 'The Rise of AI-Powered Cyber Attacks in 2026', desc: 'Artificial Intelligence is transforming cybercrime. Discover how attackers use AI for phishing, deepfakes, malware creation, and social engineering.', tags: ['AI Security', 'Deepfake', 'Phishing'], image: 'https://res.cloudinary.com/dfjtvivgv/image/upload/v1781898304/621da498-46d7-4325-8268-47cb693ff87c_pfvggx.png' },
  { id: '02', category: 'MALWARE', time: '10 min read', title: 'Understanding Ransomware: How Modern Attacks Work', desc: 'Learn how ransomware infects systems, encrypts data, and demands payment. Explore real-world incidents and prevention strategies.', tags: ['Ransomware', 'Malware', 'Data Protection'], image: 'https://res.cloudinary.com/dfjtvivgv/image/upload/v1781899032/78af9f8f-086e-41ee-9e76-91effa18719b_nwgnaj.png' },
  { id: '03', category: 'AWARENESS', time: '6 min read', title: 'Top 10 Cybersecurity Threats Every Student Should Know', desc: 'A beginner-friendly guide covering phishing, malware, password attacks, social engineering, and online safety.', tags: ['Students', 'Awareness', 'Security'], image: 'https://res.cloudinary.com/dfjtvivgv/image/upload/v1781898778/70722c4f-49c4-4caa-a12c-82f962510721_slkd7t.png' },
  { id: '04', category: 'EMERGING THREATS', time: '7 min read', title: 'Deepfake Attacks: The New Face of Cybercrime', desc: 'Deepfake technology is becoming a serious security concern. Learn how fake videos and voices are used for fraud and manipulation.', tags: ['Deepfake', 'AI', 'Fraud'], image: 'https://res.cloudinary.com/dfjtvivgv/image/upload/v1781898472/5fcb275e-3790-45a8-86f1-b885091b8e42_ib14mz.png' },
  { id: '05', category: 'WEB SECURITY', time: '9 min read', title: 'SQL Injection Explained', desc: 'Understand one of the oldest yet most dangerous web application attacks and how developers can prevent it.', tags: ['SQLi', 'Web Security', 'OWASP'], image: 'https://res.cloudinary.com/dfjtvivgv/image/upload/v1781898548/9eca0fd9-f2f1-456c-af05-ba13e79af531_c2giy1.png' },
  { id: '06', category: 'CASE STUDY', time: '12 min read', title: 'Inside the WannaCry Ransomware Attack', desc: 'A detailed breakdown of the WannaCry outbreak that affected over 200,000 systems worldwide.', tags: ['WannaCry', 'Incident Analysis', 'Malware'], image: 'https://res.cloudinary.com/dfjtvivgv/image/upload/v1781898095/ff8c9fe2-92f1-4d1d-a93f-b228dc76788e_okscxt.png' },
  { id: '07', category: 'MALWARE', time: '15 min read', title: 'The $10 Billion Heartbreak: How a Rejected Thesis Broke the Internet', desc: 'On May 4, 2000, a digital epidemic began that would fundamentally rewrite the rules of global connectivity. This was the day the world opened a love letter it should have ignored.', tags: ['ILOVEYOU', 'Social Engineering', 'Malware'], image: 'https://res.cloudinary.com/dfjtvivgv/image/upload/v1781897560/cd1c3e4b-1221-4e41-aa80-393ef32f5cc4_lpdgaa.png' },
  { id: '08', category: 'MALWARE', time: '14 min read', title: 'The Virus That Broke the Internet: 5 Surprising Lessons from the 1999 Melissa Outbreak', desc: 'In March 1999, the digital world was a far more trusting place. That changed when a single Microsoft Word document began a silent, high-speed crawl across the globe.', tags: ['Melissa', 'Macro Virus', 'Cyber History'], image: 'https://res.cloudinary.com/dfjtvivgv/image/upload/v1781897681/72425fc3-43c1-4f68-88fc-8c394b483427_ywgvh2.png' },
  { id: '09', category: 'CASE STUDY', time: '16 min read', title: 'The Virus That Broke the Hardware: Lessons from the $1 Billion "Chernobyl" Bug', desc: 'In 1998, the CIH virus proved that a string of malicious bits could do more than just delete a file; it could effectively "kill" a physical machine.', tags: ['CIH', 'Chernobyl', 'Malware'], image: 'https://res.cloudinary.com/dfjtvivgv/image/upload/v1781897139/470f9aca-781d-4c44-b01f-64be012e1ad2_ydevnp.png' },
  { id: '10', category: 'MALWARE', time: '15 min read', title: 'The Unstoppable Digital Plague: 5 Surprising Truths About Mydoom, the Fastest-Spreading Worm in History', desc: 'In 2004, the Mydoom worm struck, bringing the global web to a crawl and holding the record for the fastest-spreading email worm ever.', tags: ['Mydoom', 'Worm', 'Malware'], image: 'https://res.cloudinary.com/dfjtvivgv/image/upload/v1781897325/9e961328-24f9-4567-9012-91b3938d0c49_gcdce6.png' },
  { id: '11', category: 'CASE STUDY', time: '13 min read', title: 'The Patch That Wasn’t: How an 18-Year-Old’s Code Ground the World to a Halt', desc: 'In April 2004, the zero-click Sasser worm triggered global system shutdowns by exploiting an unpatched Windows vulnerability, highlighting the vital need for digital hygiene.', tags: ['Sasser', 'Zero-Click', 'Incident Analysis'], image: 'https://res.cloudinary.com/dfjtvivgv/image/upload/v1781896465/d0302956-26b0-4e95-8565-14125967f594_t7xski.png' },
];

// Simple bug icon helper
const BugIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m8 2 1.88 1.88"/><path d="M14.12 3.88 16 2"/><path d="M9 7.13v-1a3.003 3.003 0 1 1 6 0v1"/><path d="M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6"/><path d="M12 20v-9"/><path d="M6.53 9C4.6 8.8 3 7.1 3 5"/><path d="M6 13H2"/><path d="M3 21c0-2.1 1.7-3.9 3.8-4"/><path d="M20.97 5c0 2.1-1.6 3.8-3.5 4"/><path d="M22 13h-4"/><path d="M17.2 17c2.1.1 3.8 1.9 3.8 4"/></svg>
)

const categories = [
  { name: 'Cybersecurity Basics', icon: <Shield/> },
  { name: 'Malware Analysis', icon: <BugIcon/> },
  { name: 'Ransomware', icon: <LockKeyhole/> },
  { name: 'Threat Intelligence', icon: <Crosshair/> },
  { name: 'AI Security', icon: <Cpu/> },
  { name: 'Web Application Security', icon: <MonitorOff/> },
  { name: 'Cloud Security', icon: <Cloud/> },
  { name: 'Digital Forensics', icon: <Search/> },
  { name: 'Ethical Hacking', icon: <ShieldAlert/> },
  { name: 'Incident Response', icon: <CheckCircle/> },
];

const popularTopics = ['Ransomware', 'Phishing', 'Malware', 'AI Security', 'Cloud Security', 'Threat Intelligence', 'Web Security', 'Data Protection', 'Ethical Hacking', 'Incident Response'];
const popularTags = ['#CyberSecurity', '#Ransomware', '#AIThreats', '#Deepfake', '#Malware', '#Phishing', '#EthicalHacking', '#CloudSecurity', '#ThreatIntel', '#OWASP', '#CyberAwareness', '#DataProtection', '#WebSecurity', '#SQLInjection', '#ZeroDay'];

const CyberBlogs = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [isClosing, setIsClosing] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showAll, setShowAll] = useState(false);

  const filteredArticles = featuredArticles.filter(article => {
    if (!searchQuery) return true;
    const query = searchQuery.toLowerCase();
    return (
      article.title.toLowerCase().includes(query) ||
      article.desc.toLowerCase().includes(query) ||
      article.category.toLowerCase().includes(query) ||
      article.tags.some(tag => tag.toLowerCase().includes(query))
    );
  });

  const articlesToDisplay = (showAll || searchQuery) ? filteredArticles : filteredArticles.slice(0, 4);

  const handleReadMore = (id, e) => {
    e.preventDefault();
    setSelectedBlog(id);
  };

  const closeBlog = () => {
    setIsClosing(true);
    setTimeout(() => {
      setSelectedBlog(null);
      setIsClosing(false);
    }, 700); // Wait for the hand pull animation
  };

  return (
    <div className="page-container blogs-page">
      {(selectedBlog || isClosing) && (
        <div className={`blog-modal-overlay ${isClosing ? 'overlay-closing' : ''}`} onClick={closeBlog}>
          {isClosing && (
            <div className="robotic-hand">
              🦾
            </div>
          )}
          <div className={`blog-modal-content neon-box ${isClosing ? 'modal-pulled-away' : ''}`} onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2 className="text-neon glow-text">{featuredArticles.find(a => a.id === selectedBlog)?.title}</h2>
              <button className="close-btn" onClick={closeBlog}><X size={24} /></button>
            </div>
            <div className="modal-body custom-scrollbar">
              {blogContents[selectedBlog]}
            </div>
          </div>
        </div>
      )}
      <div className="blogs-header grid-sidebar">
        <div className="blogs-main-intro">
          <div className="breadcrumb">Home &gt; Cyber Blogs</div>
          <h1 className="title-main text-neon glow-text">
            CYBER SECURITY<br/>BLOGS
          </h1>
          <p className="subtitle-desc">
            Stay informed with the latest cybersecurity trends, attack analysis, threat intelligence, and security best practices.
          </p>
          
          <div className="blogs-stats-row">
            <div className="blog-stat">
              <FileText className="text-neon" size={24}/>
              <div className="stat-text"><span className="stat-num">200+</span><br/>Blog Articles</div>
            </div>
            <div className="blog-stat">
              <Users className="text-neon" size={24}/>
              <div className="stat-text"><span className="stat-num">50+</span><br/>Expert Authors</div>
            </div>
            <div className="blog-stat">
              <Calendar className="text-neon" size={24}/>
              <div className="stat-text"><span className="stat-num">Updated</span><br/>Weekly</div>
            </div>
          </div>
        </div>

        <div className="blogs-graphic">
           <div className="laptop-wireframe neon-box">
             <div className="screen-content text-neon">
               <FileText size={60} className="glow-text"/>
             </div>
             <div className="keyboard"></div>
           </div>
        </div>
      </div>

      <div className="blogs-layout">
        <div className="blogs-left-col">
          <div className="section-header">
            <h3 className="section-title"><Star size={20}/> FEATURED ARTICLES</h3>
          </div>
          
          <div className="featured-grid">
            {articlesToDisplay.length > 0 ? articlesToDisplay.map(article => (
              <div key={article.id} className="blog-card neon-box">
                <div className="blog-card-img-placeholder" style={article.image ? { padding: 0, overflow: 'hidden' } : {}}>
                  <span className="blog-number" style={article.image ? { zIndex: 10 } : {}}>{article.id}</span>
                  {article.image ? (
                    <ZoomableImage src={article.image} alt={article.title} className="blog-card-full-img" />
                  ) : (
                    <>
                      {/* Pseudo images based on category */}
                      {article.category.includes('AI') && <Cpu size={48} className="placeholder-icon"/>}
                      {article.category.includes('MALWARE') && <Lock size={48} className="placeholder-icon text-danger"/>}
                      {article.category.includes('WEB') && <MonitorOff size={48} className="placeholder-icon"/>}
                      {!['AI SECURITY', 'MALWARE', 'WEB SECURITY'].includes(article.category) && <ShieldAlert size={48} className="placeholder-icon"/>}
                    </>
                  )}
                </div>
                <div className="blog-card-meta">
                  <span className="blog-category text-neon">{article.category}</span>
                  <span className="blog-time">• {article.time}</span>
                </div>
                <h4>{article.title}</h4>
                <p>{article.desc}</p>
                <div className="blog-tags">
                  {article.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
                </div>
                <button className="read-more explore-btn text-neon" style={{marginTop: 'auto'}} onClick={(e) => handleReadMore(article.id, e)}>READ MORE &rarr;</button>
              </div>
            )) : <p style={{ color: 'var(--color-text-muted)', gridColumn: '1 / -1' }}>No articles found matching "{searchQuery}"</p>}
          </div>

          {(!searchQuery && filteredArticles.length > 4) && (
            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
              <button 
                className="explore-btn text-neon neon-box" 
                style={{ background: 'none', cursor: 'pointer', fontFamily: 'inherit', fontSize: '1rem', padding: '0.75rem 2rem' }}
                onClick={(e) => { e.preventDefault(); setShowAll(!showAll); }}
              >
                {showAll ? 'SHOW LESS \u2191' : 'VIEW ALL ARTICLES \u2192'}
              </button>
            </div>
          )}

          <div className="browse-category-section">
            <div className="section-header">
               <h3 className="section-title"><Search size={20}/> BROWSE BY CATEGORY</h3>
            </div>
            <div className="category-icons-grid">
              {categories.map(cat => (
                <div key={cat.name} className="cat-icon-box neon-box">
                  <div className="cat-icon-wrapper text-neon">{cat.icon}</div>
                  <span>{cat.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="most-read-section">
            <div className="section-header">
               <h3 className="section-title"><FileText size={20}/> MOST READ ARTICLES</h3>
               <a href="#" className="explore-link">VIEW ALL POPULAR ARTICLES &rarr;</a>
            </div>
            <div className="most-read-list neon-box">
               <div className="most-read-item">
                 <span className="mr-num">01</span>
                 <div className="mr-info">
                   <h5>What is Phishing? How to Stay Safe from Phishing Attacks</h5>
                   <span className="mr-meta">15 min read • 25.3K views</span>
                 </div>
               </div>
               <div className="most-read-item">
                 <span className="mr-num">02</span>
                 <div className="mr-info">
                   <h5>How Hackers Exploit Weak Passwords (And How to Stop Them)</h5>
                   <span className="mr-meta">10 min read • 18.7K views</span>
                 </div>
               </div>
               <div className="most-read-item">
                 <span className="mr-num">03</span>
                 <div className="mr-info">
                   <h5>Guide to Securing Your Wi-Fi Network</h5>
                   <span className="mr-meta">8 min read • 14.2K views</span>
                 </div>
               </div>
               <div className="most-read-item">
                 <span className="mr-num">04</span>
                 <div className="mr-info">
                   <h5>Zero-Day Exploits: How Hackers Find and Use Them</h5>
                   <span className="mr-meta">11 min read • 12.6K views</span>
                 </div>
               </div>
            </div>
          </div>
        </div>

        <div className="blogs-right-col">
          <div className="search-widget neon-box">
            <h3 className="sidebar-title">SEARCH BLOGS</h3>
            <div className="search-input-wrapper">
              <input 
                type="text" 
                placeholder="Search articles, topics..." 
                className="search-input" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search size={18} className="search-icon" />
            </div>
          </div>

          <div className="topics-widget">
            <h3 className="sidebar-title">POPULAR TOPICS</h3>
            <div className="tags-cloud">
              {popularTopics.map(topic => (
                <span 
                  key={topic} 
                  className="cloud-tag" 
                  onClick={() => setSearchQuery(topic)}
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>

          <div className="recent-headlines-widget neon-box">
            <h3 className="sidebar-title">RECENT HEADLINES</h3>
            <ul className="headlines-list">
              <li>
                <Cpu className="hl-icon text-neon" size={24}/>
                <div className="hl-info">
                  <h5>New AI-Generated Phishing Campaigns Detected</h5>
                  <span>2 hours ago</span>
                </div>
              </li>
              <li>
                <Cloud className="hl-icon text-neon" size={24}/>
                <div className="hl-info">
                  <h5>Rise in Cloud Security Misconfigurations</h5>
                  <span>5 hours ago</span>
                </div>
              </li>
              <li>
                <ShieldAlert className="hl-icon text-neon" size={24}/>
                <div className="hl-info">
                  <h5>Healthcare Sector Targeted by Ransomware Groups</h5>
                  <span>1 day ago</span>
                </div>
              </li>
              <li>
                <Crosshair className="hl-icon text-neon" size={24}/>
                <div className="hl-info">
                  <h5>Supply Chain Attacks Continue to Increase</h5>
                  <span>2 days ago</span>
                </div>
              </li>
              <li>
                <Smartphone className="hl-icon text-neon" size={24}/>
                <div className="hl-info">
                  <h5>Mobile Banking Malware Threats Growing</h5>
                  <span>3 days ago</span>
                </div>
              </li>
            </ul>
            <a href="#" className="explore-link right-align" style={{marginTop: '1rem'}}>VIEW ALL NEWS &rarr;</a>
          </div>

          <div className="tags-widget">
            <div className="section-header">
               <h3 className="sidebar-title"># POPULAR TAGS</h3>
               <a href="#" className="explore-link">VIEW ALL TAGS &rarr;</a>
            </div>
            <div className="tags-cloud hashtags">
              {popularTags.map(tag => <span key={tag} className="cloud-tag hash">{tag}</span>)}
            </div>
          </div>

          <div className="promo-widget neon-box">
             <h3 className="promo-title text-neon">WANT TO BECOME CYBER AWARE?</h3>
             <p className="promo-desc">Explore real-world cyber attacks, learn modern defense techniques, and stay updated with the latest threat intelligence.</p>
             <div className="promo-shield-wrap">
               <Shield size={60} className="text-neon glow-text"/>
               <Lock size={20} className="promo-lock"/>
             </div>
             <button className="btn-primary" style={{width: '100%', marginBottom: '1rem'}}>EXPLORE LEARNING HUB &rarr;</button>
             <button className="btn-secondary" style={{width: '100%'}}>READ LATEST BLOGS &rarr;</button>
          </div>
        </div>
      </div>


    </div>
  );
};

export default CyberBlogs;
