
import  { useRef, useEffect } from 'react';

const BgAnimation_2 = () => {
  const canvasRef = useRef(null);
  let animationId;

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    // Set canvas dimensions
    canvas.width = 1600;
    canvas.height = 150;

    let offset = 0;

    const animate = () => {
      // Clear the canvas
      context.clearRect(0, 0, canvas.width, canvas.height);

      // Create gradient
      const gradient = context.createLinearGradient(offset, 0, offset + canvas.width, 0);
      gradient.addColorStop(0, '#070B14');
      gradient.addColorStop(0.5, '#0A0F1E');
      gradient.addColorStop(1, '#070B14');

      // Fill canvas with gradient
      context.fillStyle = gradient;
      context.fillRect(0, 0, canvas.width, canvas.height);

      // Update offset for animation
      offset -= 1;
      if (offset < -canvas.width) {
        offset = 0;
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[-1] bg-gradient-to-b from-[#070B14] via-[#0A0F1E] to-[#070B14]"
      style={{ opacity: 1, height: '150px' }}
    />
  );
};

export default BgAnimation_2;