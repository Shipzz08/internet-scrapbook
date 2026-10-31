import { useEffect, useState, useRef } from 'react';
import pushpinImg from '../assets/pushpin.png';
import './CustomCursor.css';

interface TrailParticle {
  id: number;
  x: number;
  y: number;
  color: string;
  size: number;
  shape: 'star' | 'sparkle' | 'dot' | 'diamond';
  rotation: number;
  driftX: number;
  driftY: number;
}

const PALETTE = [
  '#FBD271', // Lemonade
  '#0F4E77', // Sea Blue
  '#89A377', // Matcha
  '#E7BD8B', // Honey Drizzle
  '#372516', // Coffee Grounds
];

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isPointerDevice, setIsPointerDevice] = useState(() => 
    typeof window !== 'undefined' ? window.matchMedia('(pointer: fine)').matches : false
  );
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(() => 
    typeof window !== 'undefined' ? window.matchMedia('(prefers-reduced-motion: reduce)').matches : false
  );
  const [particles, setParticles] = useState<TrailParticle[]>([]);

  const particleIdCounter = useRef(0);
  const lastMousePos = useRef({ x: -100, y: -100 });

  useEffect(() => {
    const pointerQuery = window.matchMedia('(pointer: fine)');
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    const handlePointerChange = (e: MediaQueryListEvent) => setIsPointerDevice(e.matches);
    const handleMotionChange = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);

    pointerQuery.addEventListener('change', handlePointerChange);
    motionQuery.addEventListener('change', handleMotionChange);

    return () => {
      pointerQuery.removeEventListener('change', handlePointerChange);
      motionQuery.removeEventListener('change', handleMotionChange);
    };
  }, []);

  useEffect(() => {
    if (!isPointerDevice) return;

    const handleMouseMove = (e: MouseEvent) => {
      const currentX = e.clientX;
      const currentY = e.clientY;
      setPosition({ x: currentX, y: currentY });

      // Check if hovering interactive element
      const target = e.target as HTMLElement | null;
      if (target) {
        const interactive = target.closest('a, button, [role="button"], input[type="button"], input[type="submit"], select, .book-spine, .scrapboard-item');
        setIsHovered(!!interactive);
      }

      // Distance-based high-density trail spawning
      if (!prefersReducedMotion) {
        const lastX = lastMousePos.current.x;
        const lastY = lastMousePos.current.y;

        if (lastX !== -100 && lastY !== -100) {
          const dist = Math.hypot(currentX - lastX, currentY - lastY);
          const steps = Math.min(Math.floor(dist / 5), 6); // dense spawning
          
          if (steps > 0 || dist > 6) {
            const newParticles: TrailParticle[] = [];
            const count = Math.max(1, Math.min(steps, 4));

            for (let i = 0; i < count; i++) {
              const ratio = i / Math.max(1, count);
              const px = lastX + (currentX - lastX) * ratio + (Math.random() * 14 - 7);
              const py = lastY + (currentY - lastY) * ratio + (Math.random() * 14 - 7);

              const shapes: ('star' | 'sparkle' | 'dot' | 'diamond')[] = ['star', 'sparkle', 'dot', 'diamond'];
              const shape = shapes[Math.floor(Math.random() * shapes.length)];
              const color = PALETTE[Math.floor(Math.random() * PALETTE.length)];
              const size = Math.floor(Math.random() * 12) + 8; // 8px to 20px
              const rotation = Math.random() * 360;
              const driftX = (Math.random() - 0.5) * 24;
              const driftY = (Math.random() - 0.5) * 24 - 12; // slight upward drift

              newParticles.push({
                id: particleIdCounter.current++,
                x: px,
                y: py,
                color,
                size,
                shape,
                rotation,
                driftX,
                driftY,
              });
            }

            setParticles((prev) => [...prev.slice(-50), ...newParticles]); // keep max 55 particles
          }
        }
        lastMousePos.current = { x: currentX, y: currentY };
      }
    };

    const handleMouseLeave = () => {
      setPosition({ x: -100, y: -100 });
      lastMousePos.current = { x: -100, y: -100 };
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isPointerDevice, prefersReducedMotion]);

  // Clean up old particles
  useEffect(() => {
    if (particles.length === 0 || prefersReducedMotion) return;

    const timer = setTimeout(() => {
      setParticles((prev) => prev.slice(1));
    }, 100);

    return () => clearTimeout(timer);
  }, [particles, prefersReducedMotion]);

  if (!isPointerDevice) return null;

  return (
    <div className="custom-cursor-container" aria-hidden="true">
      {/* Whimsical Dense Trail Particles */}
      {!prefersReducedMotion && particles.map((p) => (
        <div
          key={p.id}
          className={`cursor-trail-particle shape-${p.shape}`}
          style={{
            left: `${p.x}px`,
            top: `${p.y}px`,
            color: p.color,
            width: `${p.size}px`,
            height: `${p.size}px`,
            transform: `translate(-50%, -50%) rotate(${p.rotation}deg)`,
            '--drift-x': `${p.driftX}px`,
            '--drift-y': `${p.driftY}px`,
          } as React.CSSProperties}
        >
          {p.shape === 'star' && (
            <svg viewBox="0 0 24 24" fill={p.color} width="100%" height="100%">
              <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
            </svg>
          )}
          {p.shape === 'sparkle' && (
            <svg viewBox="0 0 24 24" fill={p.color} width="100%" height="100%">
              <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
            </svg>
          )}
          {p.shape === 'diamond' && (
            <svg viewBox="0 0 24 24" fill={p.color} width="100%" height="100%">
              <path d="M12 0L24 12L12 24L0 12Z" />
            </svg>
          )}
          {p.shape === 'dot' && (
            <div
              style={{
                width: '100%',
                height: '100%',
                backgroundColor: p.color,
                borderRadius: '50%',
                boxShadow: `0 0 5px ${p.color}`,
              }}
            />
          )}
        </div>
      ))}

      {/* Main Pixel-Art Pushpin Cursor using reference PNG asset */}
      <div
        className={`custom-cursor ${isHovered ? 'hovered' : ''}`}
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        }}
      >
        <img
          src={pushpinImg}
          alt="Pixel art pushpin cursor"
          className="pushpin-img"
        />
      </div>
    </div>
  );
}
