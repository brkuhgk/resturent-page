import React, { useEffect } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speed: number;
  rotation: number;
  rotationSpeed: number;
  opacity: number;
}

const SpiceParticles = () => {
  useEffect(() => {
    const container = document.getElementById('spice-particles-container');
    if (!container) return;

    // Create canvas element
    const canvas = document.createElement('canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.position = 'absolute';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '1';
    container.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Create particles
    const particles: Particle[] = [];

    function initParticles() {
      for (let i = 0; i < 100; i++) { // Increased particle count for a denser effect
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: 2 + Math.random() * 4, // Small particle size for ash-like effect
          speed: 0.5 + Math.random() * 0.5, // Slow movement for a floating effect
          rotation: Math.random() * 360,
          rotationSpeed: (Math.random() - 0.5) * 0.2,
          opacity: 0.3 + Math.random() * 0.5, // Semi-transparent particles
        });
      }
    }

    function drawParticle(ctx: CanvasRenderingContext2D, p: Particle) {
      ctx.shadowBlur = 15; // Add glow effect
      ctx.shadowColor = `rgba(255, 0, 0, ${p.opacity})`; // Glowing red color
      ctx.fillStyle = `rgba(255, 69, 0, ${p.opacity})`; // Bright red-orange fill

      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rotation * Math.PI) / 180);

      // Draw irregular ash-like particle
      ctx.beginPath();
      ctx.moveTo(-p.size / 2, -p.size / 2);
      ctx.lineTo(p.size / 2, -p.size / 3);
      ctx.lineTo(p.size / 3, p.size / 2);
      ctx.lineTo(-p.size / 3, p.size / 3);
      ctx.closePath();
      ctx.fill();

      ctx.restore();
    }

    function animate() {
      if (!ctx) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        // Move particle
        p.y += p.speed;
        p.rotation += p.rotationSpeed;

        // Reset if off screen
        if (p.y > canvas.height) {
          p.y = -10;
          p.x = Math.random() * canvas.width;
        }

        // Draw particle
        drawParticle(ctx, p);
      });

      requestAnimationFrame(animate);
    }

    // Initialize and start animation
    initParticles();
    animate();

    // Resize handler
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (canvas.parentNode) {
        canvas.parentNode.removeChild(canvas);
      }
    };
  }, []);

  return null; // This component doesn't render anything directly
};

export default SpiceParticles;