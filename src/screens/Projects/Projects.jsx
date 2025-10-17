import React, { useState, useEffect } from "react";
import "./projects.css";

// Import project images
import project1 from "../../assets/img1.jpeg";
import project2 from "../../assets/img2.jpg";
import project3 from "../../assets/img3.jpeg";
import project4 from "../../assets/img4.jpeg";
import project5 from "../../assets/img5.jpeg";
import project6 from "../../assets/img6.jpeg";
import project7 from "../../assets/img7.jpeg";
import project8 from "../../assets/img8.jpeg";
import project9 from "../../assets/img9.png";
// You can reuse images or add more specific ones

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [isVisible, setIsVisible] = useState(false);

  const categories = [
    { id: "all", name: "All Projects", count: 9 },
    { id: "web", name: "Web Development", count: 4 },
    { id: "marketing", name: "Digital Marketing", count: 2 },
    { id: "design", name: "Creative Design", count: 2 },
    { id: "photography", name: "Photography", count: 1 }
  ];

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A fully responsive e-commerce platform with advanced filtering, cart functionality, and secure payment integration.",
      category: "web",
      image: project1, // Use the imported variable directly
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      client: "Fashion Retail Co.",
      duration: "3 months",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/username/project",
      featured: true,
      results: ["Increased conversions by 40%", "Improved load time by 60%"]
    },
    {
      id: 2,
      title: "Social Media Campaign",
      description: "Comprehensive social media marketing campaign that increased engagement and brand awareness across multiple platforms.",
      category: "marketing",
      image: project2,
      technologies: ["Instagram", "Facebook", "Google Analytics"],
      client: "Tech Startup Inc.",
      duration: "2 months",
      liveUrl: "https://instagram.com/client",
      results: ["200% engagement increase", "50K+ new followers", "300% ROI"]
    },
    {
      id: 3,
      title: "Brand Identity Design",
      description: "Complete brand identity package including logo design, color palette, typography, and brand guidelines.",
      category: "design",
      image: project3,
      technologies: ["Adobe Illustrator", "Photoshop", "Figma"],
      client: "Modern Cafe Chain",
      duration: "1 month",
      deliverables: ["Logo Design", "Brand Guidelines", "Marketing Materials"]
    },
    {
      id: 4,
      title: "Product Photography",
      description: "Professional product photography for an online store, showcasing products in lifestyle and studio settings.",
      category: "photography",
      image: project4,
      technologies: ["Canon R5", "Studio Lighting", "Photoshop"],
      client: "Luxury Watch Brand",
      duration: "2 weeks",
      deliverables: ["50+ Product Images", "Lifestyle Shots", "Edited Photos"]
    },
    {
      id: 5,
      title: "Corporate Website",
      description: "Modern corporate website with CMS integration, blog functionality, and lead generation forms.",
      category: "web",
      image: project5,
      technologies: ["Next.js", "Contentful", "Tailwind CSS"],
      client: "Financial Services Ltd.",
      duration: "2 months",
      liveUrl: "https://clientwebsite.com",
      results: ["35% more leads", "Improved SEO ranking"]
    },
    {
      id: 6,
      title: "SEO Optimization",
      description: "Complete SEO overhaul including technical SEO, content strategy, and link building.",
      category: "marketing",
      image: project6,
      technologies: ["Google Search Console", "Ahrefs", "SEMrush"],
      client: "Local Business Network",
      duration: "3 months",
      results: ["#1 Google ranking for 5 keywords", "150% organic traffic increase"]
    },
    {
      id: 7,
      title: "Mobile App UI/UX",
      description: "User interface and experience design for a fitness tracking mobile application.",
      category: "design",
      image: project7,
      technologies: ["Figma", "Adobe XD", "Prototyping"],
      client: "Health Tech Startup",
      duration: "6 weeks",
      deliverables: ["Wireframes", "Mockups", "Interactive Prototype"]
    },
    {
      id: 8,
      title: "Architecture Photography",
      description: "Architectural photography for a luxury real estate developer's portfolio.",
      category: "photography",
      image: project8,
      technologies: ["Drone Photography", "Wide-angle Lens", "Lightroom"],
      client: "Premium Builders Inc.",
      duration: "1 month",
      deliverables: ["30 Property Photos", "Aerial Shots", "Virtual Tour"]
    },
    {
      id: 9,
      title: "SaaS Dashboard",
      description: "Complex dashboard interface for a SaaS product with real-time analytics and reporting.",
      category: "web",
      image: project9,
      technologies: ["React", "D3.js", "WebSocket", "Firebase"],
      client: "Analytics Platform",
      duration: "4 months",
      liveUrl: "https://saasdashboard.com",
      featured: true
    }
  ];

  const filteredProjects = activeCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="projects-section">
      {/* Background Elements */}
      <div className="projects-bg-grid"></div>
      <div className="projects-floating-shapes">
        <div className="projects-shape shape-1"></div>
        <div className="projects-shape shape-2"></div>
        <div className="projects-shape shape-3"></div>
      </div>

      <div className="projects-container">
        {/* Header Section */}
        <div className={`projects-header ${isVisible ? 'visible' : ''}`}>
          <div className="projects-badge">Portfolio</div>
          <h1 className="projects-title">
            My <span className="text-gradient">Creative Work</span>
          </h1>
          <p className="projects-subtitle">
            A collection of projects where I've transformed ideas into 
            successful digital solutions for clients worldwide.
          </p>
        </div>

        {/* Category Filter */}
        <div className="projects-filter">
          {categories.map(category => (
            <button
              key={category.id}
              className={`filter-btn ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              <span className="filter-text">{category.name}</span>
              <span className="filter-count">{category.count}</span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>

        {/* Call to Action */}
        <div className="projects-cta">
          <h2 className="cta-title">Ready to Start Your Project?</h2>
          <p className="cta-subtitle">
            Let's discuss how we can bring your ideas to life with innovative digital solutions.
          </p>
          <div className="cta-buttons">
            <button className="cta-btn primary">
              Start a Project
              <span className="btn-arrow">→</span>
            </button>
            <button className="cta-btn secondary">
              View All Services
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// Project Card Component
const ProjectCard = ({ project, index, isVisible }) => {
  const [isHovered, setIsHovered] = useState(false);

  const getCategoryColor = (category) => {
    const colors = {
      web: "#0077ff",
      marketing: "#00c6ff",
      design: "#764ba2",
      photography: "#ff6b6b"
    };
    return colors[category] || "#0077ff";
  };

  return (
    <div 
      className={`project-card ${isVisible ? 'visible' : ''} ${project.featured ? 'featured' : ''}`}
      style={{ 
        animationDelay: `${index * 0.1}s`,
        '--category-color': getCategoryColor(project.category)
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Featured Badge */}
      {project.featured && (
        <div className="featured-badge">
          <span>⭐ Featured</span>
        </div>
      )}

      {/* Project Image */}
      <div className="project-image-container">
        <div 
          className="project-image"
          style={{
            backgroundImage: `url(${project.image})`, // Now this will work
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="project-overlay"></div>
          
          {/* Hover Actions */}
          <div className={`project-actions ${isHovered ? 'visible' : ''}`}>
            {project.liveUrl && (
              <a 
                href={project.liveUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="action-btn live"
              >
                <span>🌐 Live Demo</span>
              </a>
            )}
            {project.githubUrl && (
              <a 
                href={project.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="action-btn github"
              >
                <span>💻 Code</span>
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Project Content */}
      <div className="project-content">
        {/* Category Tag */}
        <div className="project-category">
          <span 
            className="category-tag"
            style={{ background: getCategoryColor(project.category) }}
          >
            {project.category === 'web' && '💻 Web Dev'}
            {project.category === 'marketing' && '📱 Marketing'}
            {project.category === 'design' && '🎨 Design'}
            {project.category === 'photography' && '📸 Photography'}
          </span>
        </div>

        {/* Project Title & Description */}
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>

        {/* Client & Duration */}
        <div className="project-meta">
          <div className="meta-item">
            <span className="meta-label">Client:</span>
            <span className="meta-value">{project.client}</span>
          </div>
          <div className="meta-item">
            <span className="meta-label">Duration:</span>
            <span className="meta-value">{project.duration}</span>
          </div>
        </div>

        {/* Technologies/Tools */}
        <div className="project-technologies">
          {project.technologies && project.technologies.map((tech, techIndex) => (
            <span key={techIndex} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>

        {/* Results/Deliverables */}
        {(project.results || project.deliverables) && (
          <div className="project-results">
            <h4 className="results-title">
              {project.results ? 'Key Results:' : 'Deliverables:'}
            </h4>
            <ul className="results-list">
              {(project.results || project.deliverables).map((item, itemIndex) => (
                <li key={itemIndex} className="result-item">
                  <span className="result-bullet">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Project Links */}
        <div className="project-links">
          {project.liveUrl && (
            <a 
              href={project.liveUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="project-link live"
            >
              View Live
            </a>
          )}
          {project.githubUrl && (
            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="project-link github"
            >
              Source Code
            </a>
          )}
        </div>
      </div>

      {/* Card Glow Effect */}
      <div className="project-glow"></div>
    </div>
  );
};

export default Projects;