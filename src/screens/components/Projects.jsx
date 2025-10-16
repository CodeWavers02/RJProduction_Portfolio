import { useState, useRef, useEffect } from 'react';
import './Projects.css';

const Projects = () => {
  const [activeCard, setActiveCard] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const modalRef = useRef(null);

  const projects = [
    {
      id: 1,
      title: "E-Commerce SEO Campaign",
      description: "360° SEO strategy that increased organic traffic by 240% for fashion retail client.",
      fullDescription: "Comprehensive SEO campaign focusing on technical SEO, content strategy, and link building. Implemented structured data markup, optimized site architecture, and created pillar content strategy. Results included 240% increase in organic traffic, 180% increase in organic revenue, and first-page rankings for 35+ high-value keywords within 6 months.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
      services: ["Technical SEO", "Content Strategy", "Link Building", "Analytics"],
      results: ["240% Traffic Increase", "180% Revenue Growth", "35+ Top Rankings"],
      client: "Fashion Retail Brand",
      duration: "6 Months",
      liveLink: "https://example.com/seo-case-study",
      metrics: {
        traffic: "240%",
        revenue: "180%",
        rankings: "35+"
      }
    },
    {
      id: 2,
      title: "Social Media Transformation",
      description: "Rebranded social presence resulting in 300% engagement growth for tech startup.",
      fullDescription: "Complete social media overhaul including platform strategy, content calendar development, and community management. Created viral content series, implemented influencer partnerships, and developed UGC campaigns. Achieved 300% increase in engagement rate, 150% growth in followers, and 400% increase in website referrals from social platforms.",
      image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=500&h=300&fit=crop",
      services: ["Content Strategy", "Community Management", "Influencer Marketing", "Performance Analytics"],
      results: ["300% Engagement", "150% Follower Growth", "400% Referral Increase"],
      client: "SaaS Startup",
      duration: "4 Months",
      liveLink: "https://example.com/social-case-study",
      metrics: {
        engagement: "300%",
        followers: "150%",
        referrals: "400%"
      }
    },
    {
      id: 3,
      title: "PPC Lead Generation",
      description: "Google Ads campaign generating 500+ qualified leads monthly for B2B service.",
      fullDescription: "Strategic PPC campaign across Google Ads and LinkedIn targeting enterprise decision-makers. Implemented advanced bid strategies, created conversion-optimized landing pages, and developed sophisticated audience segmentation. Campaign consistently generated 500+ qualified leads monthly with 35% lower CPA than industry average and 400% ROI on ad spend.",
      image: "https://images.unsplash.com/photo-1664575602554-2087b04935a5?w=500&h=300&fit=crop",
      services: ["Google Ads", "LinkedIn Ads", "Conversion Optimization", "Landing Pages"],
      results: ["500+ Monthly Leads", "35% Lower CPA", "400% ROI"],
      client: "B2B Software Company",
      duration: "Ongoing",
      liveLink: "https://example.com/ppc-case-study",
      metrics: {
        leads: "500+",
        cpa: "35%",
        roi: "400%"
      }
    },
    {
      id: 4,
      title: "Content Marketing Engine",
      description: "Scaled content production driving 15,000 monthly organic visitors.",
      fullDescription: "Built complete content marketing engine from strategy to execution. Developed content pillars, implemented SEO-focused writing process, and created distribution strategy. Produced 50+ premium articles, 15 whitepapers, and launched industry podcast. Results included 15,000 monthly organic visitors, 200+ backlinks from authority sites, and 45% increase in lead quality.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop",
      services: ["Content Strategy", "SEO Writing", "Link Outreach", "Performance Tracking"],
      results: ["15K Monthly Visitors", "200+ Backlinks", "45% Lead Quality"],
      client: "Digital Agency",
      duration: "8 Months",
      liveLink: "https://example.com/content-case-study",
      metrics: {
        visitors: "15K",
        backlinks: "200+",
        leadQuality: "45%"
      }
    },
    {
      id: 5,
      title: "Email Marketing Automation",
      description: "Multi-channel automation driving 25% revenue from email channels.",
      fullDescription: "Designed and implemented complete email marketing automation system including lead nurturing, customer onboarding, and retention sequences. Integrated with CRM for personalized messaging and behavioral triggers. Achieved 25% of total revenue from email channels, 45% open rates, and 8% conversion rates across automated sequences while reducing manual effort by 60%.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=300&fit=crop",
      services: ["Automation Strategy", "CRM Integration", "A/B Testing", "Revenue Tracking"],
      results: ["25% Revenue", "45% Open Rate", "60% Time Saved"],
      client: "E-commerce Store",
      duration: "3 Months",
      liveLink: "https://example.com/email-case-study",
      metrics: {
        revenue: "25%",
        openRate: "45%",
        timeSaved: "60%"
      }
    }
  ];

  const handleCardClick = (projectId) => {
    setActiveCard(projectId);
    setTimeout(() => setModalOpen(true), 300);
  };

  const closeModal = () => {
    setModalOpen(false);
    setTimeout(() => setActiveCard(null), 300);
  };

  const handleBackdropClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      closeModal();
    }
  };

  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [modalOpen]);

  const activeProject = projects.find(project => project.id === activeCard);

  return (
    <section className="projects-section">
      <div className="projects-container">
        <h1 className="projects-title">
          <span className="title-text">Marketing Success Stories</span>
          <span className="title-underline"></span>
        </h1>
        <p className="projects-subtitle">Real results for real clients. See how we drive growth.</p>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`project-card ${activeCard === project.id ? 'flipped' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => handleCardClick(project.id)}
            >
              <div className="card-inner">
                <div className="card-front">
                  <div className="card-number">0{index + 1}</div>
                  <div className="card-client">{project.client}</div>
                  <h3 className="card-title">{project.title}</h3>
                  <p className="card-description">{project.description}</p>
                  <div className="card-metrics">
                    {Object.entries(project.metrics).map(([key, value]) => (
                      <div key={key} className="metric-pill">
                        <span className="metric-value">{value}</span>
                      </div>
                    ))}
                  </div>
                  <div className="card-hint">Click for case study</div>
                </div>
                <div className="card-back">
                  <div className="loading-spinner"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {modalOpen && activeProject && (
          <div className="modal-backdrop" onClick={handleBackdropClick}>
            <div 
              className={`modal-content ${modalOpen ? 'modal-enter' : ''}`}
              ref={modalRef}
            >
              <button className="close-button" onClick={closeModal}>
                <span></span>
                <span></span>
              </button>
              
              <div className="modal-header">
                <div className="client-info">
                  <span className="client-badge">{activeProject.client}</span>
                  <span className="duration-badge">{activeProject.duration}</span>
                </div>
                <h2 className="modal-title">{activeProject.title}</h2>
                <div className="results-showcase">
                  {activeProject.results.map((result, index) => (
                    <div key={index} className="result-item">
                      <div className="result-dot"></div>
                      <span>{result}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="modal-body">
                <div className="modal-image">
                  <img src={activeProject.image} alt={activeProject.title} />
                  <div className="image-overlay"></div>
                </div>
                
                <div className="modal-text">
                  <div className="services-section">
                    <h3>Services Provided</h3>
                    <div className="services-grid">
                      {activeProject.services.map((service, index) => (
                        <div key={index} className="service-tag">
                          {service}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="description-section">
                    <h3>Campaign Overview</h3>
                    <p className="modal-description">{activeProject.fullDescription}</p>
                  </div>

                  <div className="metrics-grid">
                    {Object.entries(activeProject.metrics).map(([key, value]) => (
                      <div key={key} className="metric-card">
                        <div className="metric-value">{value}</div>
                        <div className="metric-label">
                          {key.split(/(?=[A-Z])/).join(' ')}
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="modal-actions">
                    <a 
                      href={activeProject.liveLink} 
                      className="action-button primary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>View Full Case Study</span>
                      <svg viewBox="0 0 24 24" width="16" height="16">
                        <path fill="currentColor" d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z" />
                      </svg>
                    </a>
                    <button className="action-button secondary">
                      <span>Get Similar Results</span>
                      <svg viewBox="0 0 24 24" width="16" height="16">
                        <path fill="currentColor" d="M13.5,8H12V13L16.28,15.54L17,14.33L13.5,12.25V8M13,3A9,9 0 0,0 4,12H1L4.96,16.03L9,12H6A7,7 0 0,1 13,5A7,7 0 0,1 20,12A7,7 0 0,1 13,19C11.07,19 9.32,18.21 8.06,16.94L6.64,18.36C8.27,20 10.5,21 13,21A9,9 0 0,0 22,12A9,9 0 0,0 13,3" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;