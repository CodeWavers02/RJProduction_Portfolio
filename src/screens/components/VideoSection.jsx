import React, { useState, useRef, useEffect } from 'react';
import './VideoSection.css';

const VideoSection = () => {
  const [activeVideo, setActiveVideo] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const progressIntervalRef = useRef(null);
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const videos = [
    {
      id: 1,
      title: "Project Showcase",
      description: "A complete walkthrough of my latest project highlighting key features and implementation details.",
      duration: "2:45",
      thumbnail: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Development"
    },
    {
      id: 2,
      title: "Development Process",
      description: "Behind-the-scenes look at my development workflow and problem-solving approach.",
      duration: "3:20",
      thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Workflow"
    },
    {
      id: 3,
      title: "UI/UX Design",
      description: "Showcasing user interface designs and user experience considerations.",
      duration: "4:15",
      thumbnail: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Design"
    },
    {
      id: 4,
      title: "Code Review",
      description: "Detailed analysis of code architecture and best practices implementation.",
      duration: "3:50",
      thumbnail: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Development"
    },
    {
      id: 5,
      title: "Final Product",
      description: "Live demonstration of the finished product with all features working together.",
      duration: "5:10",
      thumbnail: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Showcase"
    }
  ];

  // Grid videos (all except active one)
  const gridVideos = videos.filter((_, index) => index !== activeVideo);

  const handleVideoSelect = (index) => {
    setActiveVideo(index);
    setIsPlaying(true);
    setProgress(0);
    
    // Reset and start progress simulation
    if (progressIntervalRef.current) {
      clearInterval(progressIntervalRef.current);
    }
    
    progressIntervalRef.current = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressIntervalRef.current);
          setIsPlaying(false);
          return 0;
        }
        return prev + 1;
      });
    }, 50);
  };

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
    
    if (!isPlaying) {
      progressIntervalRef.current = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(progressIntervalRef.current);
            setIsPlaying(false);
            return 0;
          }
          return prev + 1;
        });
      }, 50);
    } else {
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
      }
    }
  };

  // Intersection Observer to trigger animation when section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.3,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
      }
    };
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isVisible) return;
      
      if (e.key === 'ArrowLeft') {
        setActiveVideo(prev => (prev - 1 + videos.length) % videos.length);
      } else if (e.key === 'ArrowRight') {
        setActiveVideo(prev => (prev + 1) % videos.length);
      } else if (e.key === ' ') {
        e.preventDefault();
        handlePlayPause();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isVisible, isPlaying, activeVideo]);

  return (
    <section 
      className={`video-section ${isVisible ? 'visible' : ''}`} 
      id="videos"
      ref={sectionRef}
    >
      <div className="video-container">
        <div className="section-header">
          <h2 className="section-title">Video Portfolio</h2>
          <p className="section-subtitle">Select a video to watch • Hover for preview</p>
        </div>
        
        <div className="video-layout">
          {/* Left Side - Main Video Player */}
          <div className="main-video-container">
            <div className="main-video-wrapper">
              <div className="video-player-card">
                {/* Video Category */}
                <div className="video-category">
                  {videos[activeVideo].category}
                </div>
                
                {/* Main Video */}
                <div className="main-video">
                  <img 
                    src={videos[activeVideo].thumbnail} 
                    alt={videos[activeVideo].title}
                    className="main-video-thumbnail"
                  />
                  <div className="video-overlay">
                    <button 
                      className={`play-button ${isPlaying ? 'playing' : ''}`}
                      onClick={handlePlayPause}
                      aria-label={isPlaying ? "Pause video" : "Play video"}
                    >
                      <span className="play-icon">▶</span>
                      <span className="pause-icon">⏸</span>
                    </button>
                  </div>
                  
                  {/* Progress bar */}
                  <div className="progress-container">
                    <div 
                      className="progress-bar" 
                      style={{ width: `${progress}%` }}
                    ></div>
                  </div>
                  
                  {/* Video duration */}
                  <span className="video-duration">{videos[activeVideo].duration}</span>
                </div>
                
                {/* Video Info */}
                <div className="video-info">
                  <h3 className="video-title">{videos[activeVideo].title}</h3>
                  <p className="video-description">{videos[activeVideo].description}</p>
                  
                  <div className="video-meta">
                    <div className="current-video-indicator">
                      <span className="current-number">Now Playing</span>
                      <span className="video-count">{activeVideo + 1} / {videos.length}</span>
                    </div>
                    
                    <div className="main-controls">
                      <button 
                        className="nav-btn prev-btn"
                        onClick={() => handleVideoSelect((activeVideo - 1 + videos.length) % videos.length)}
                        aria-label="Previous video"
                      >
                        ←
                      </button>
                      <button 
                        className="nav-btn next-btn"
                        onClick={() => handleVideoSelect((activeVideo + 1) % videos.length)}
                        aria-label="Next video"
                      >
                        →
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Side - Video Grid (2x2) */}
          <div className="video-grid-container">
            
            <div className="video-grid">
              {gridVideos.slice(0, 4).map((video, index) => {
                const originalIndex = videos.findIndex(v => v.id === video.id);
                return (
                  <div 
                    key={video.id}
                    className="grid-video-item"
                    onClick={() => handleVideoSelect(originalIndex)}
                  >
                    <div className="grid-video-thumbnail">
                      <img src={video.thumbnail} alt={video.title} />
                      <div className="grid-overlay">
                        <span className="grid-play-icon">▶</span>
                      </div>
                      <span className="grid-duration">{video.duration}</span>
                    </div>
                    <div className="grid-video-info">
                      <h4>{video.title}</h4>
                      <p className="grid-category">{video.category}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            
            {/* Grid Navigation */}
            <div className="grid-navigation">
              <div className="nav-hints">
                <div className="nav-hint">
                  <span className="hint-key">← →</span>
                  <span>Navigate</span>
                </div>
                <div className="nav-hint">
                  <span className="hint-key">SPACE</span>
                  <span>Play/Pause</span>
                </div>
                <div className="nav-hint">
                  <span className="hint-key">CLICK</span>
                  <span>Select Video</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;