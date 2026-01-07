import React, { useEffect, useRef } from 'react';
import './StarBackground.css';

const StarBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Star properties - Smaller and slower
    const stars = [];
    const starCount = 200; // More stars for better coverage
    
    // Create stars
    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1.2 + 0.3, // Smaller stars: 0.3px to 1.5px
        speed: Math.random() * 0.2 + 0.05, // Slower movement: 0.05 to 0.25
        opacity: Math.random() * 0.6 + 0.2, // More subtle opacity
        twinkleSpeed: Math.random() * 0.03 + 0.01, // Slower twinkling
        twinkleDirection: Math.random() > 0.5 ? 1 : -1
      });
    }

    // Animation
    let animationId;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw stars
      stars.forEach(star => {
        // Update star position - much slower
        star.y += star.speed;
        if (star.y > canvas.height) {
          star.y = 0;
          star.x = Math.random() * canvas.width;
        }
        
        // Twinkle effect - slower
        star.opacity += star.twinkleSpeed * star.twinkleDirection;
        if (star.opacity > 0.8 || star.opacity < 0.2) {
          star.twinkleDirection *= -1;
        }
        
        // Draw star
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.fill();
        
        // Add glow for larger stars only (more rare now)
        if (star.size > 1.0) {
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.size * 1.5, 0, Math.PI * 2);
          const gradient = ctx.createRadialGradient(
            star.x, star.y, 0,
            star.x, star.y, star.size * 1.5
          );
          gradient.addColorStop(0, `rgba(102, 126, 234, ${star.opacity * 0.2})`);
          gradient.addColorStop(1, 'rgba(102, 126, 234, 0)');
          ctx.fillStyle = gradient;
          ctx.fill();
        }
      });
      
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <div className="star-background">
      <canvas 
        ref={canvasRef} 
        className="star-canvas"
      />
      {/* Optional: Add some larger floating particles - also smaller and slower */}
      <div className="floating-particles">
        <div className="particle particle-1"></div>
        <div className="particle particle-2"></div>
        <div className="particle particle-3"></div>
        <div className="particle particle-4"></div>
        <div className="particle particle-5"></div>
      </div>
    </div>
  );
};

export default StarBackground;