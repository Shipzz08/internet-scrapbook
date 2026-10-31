import { useEffect, useState, useRef } from 'react';
import './CustomCursor.css';

interface TrailParticle {
  id: number;
  x: number;
  y: number;
  color: string;
  size: number;
  shape: 'star' | 'sparkle' | 'dot';
  rotation: number;
}

const PALETTE = [
  '#FBD271', // Lemonade
  '#0F4E77', // Sea Blue
  '#89A377', // Matcha
  '#E7BD8B', // Honey Drizzle
  '#372516', // Coffee Grounds
  '#FF96A8', // Flamingo Pink
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
  const lastSpawnTime = useRef(0);
  const requestRef = useRef<number>(0);

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
      setPosition({ x: e.clientX, y: e.clientY });

      // Check if hovering interactive element
      const target = e.target as HTMLElement | null;
      if (target) {
        const interactive = target.closest('a, button, [role="button"], input[type="button"], input[type="submit"], select, .book-spine, .scrapboard-item');
        setIsHovered(!!interactive);
      }

      // Spawn trail particle (throttled)
      if (!prefersReducedMotion) {
        const now = performance.now();
        if (now - lastSpawnTime.current > 75) { // spawn every ~75ms during movement
          lastSpawnTime.current = now;
          
          const shapes: ('star' | 'sparkle' | 'dot')[] = ['star', 'sparkle', 'dot'];
          const shape = shapes[Math.floor(Math.random() * shapes.length)];
          const color = PALETTE[Math.floor(Math.random() * PALETTE.length)];
          const size = Math.floor(Math.random() * 8) + 8; // 8px to 15px
          const rotation = Math.random() * 360;

          const newParticle: TrailParticle = {
            id: particleIdCounter.current++,
            x: e.clientX + (Math.random() * 10 - 5),
            y: e.clientY + (Math.random() * 10 - 5),
            color,
            size,
            shape,
            rotation,
          };

          setParticles((prev) => [...prev.slice(-15), newParticle]); // keep max 15 particles
        }
      }
    };

    const handleMouseLeave = () => {
      setPosition({ x: -100, y: -100 });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    const currentReq = requestRef.current;
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      if (currentReq) cancelAnimationFrame(currentReq);
    };
  }, [isPointerDevice, prefersReducedMotion]);

  // Clean up particles over time
  useEffect(() => {
    if (particles.length === 0 || prefersReducedMotion) return;

    const timer = setTimeout(() => {
      setParticles((prev) => prev.slice(1));
    }, 400);

    return () => clearTimeout(timer);
  }, [particles, prefersReducedMotion]);

  if (!isPointerDevice) return null;

  return (
    <div className="custom-cursor-container" aria-hidden="true">
      {/* Whimsical Trail Particles */}
      {!prefersReducedMotion && particles.map((p) => (
        <div
          key={p.id}
          className={`cursor-trail-particle shape-${p.shape}`}
          style={{
            left: `${p.x}px`,
            top: `${p.y}px`,
            backgroundColor: p.shape === 'dot' ? p.color : 'transparent',
            color: p.color,
            width: `${p.size}px`,
            height: `${p.size}px`,
            transform: `translate(-50%, -50%) rotate(${p.rotation}deg)`,
          }}
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
        </div>
      ))}

      {/* Main Pixel-Art Pushpin Cursor */}
      <div
        className={`custom-cursor ${isHovered ? 'hovered' : ''}`}
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        }}
      >
        <svg
          viewBox="0 0 32 32"
          width="28"
          height="28"
          className="pushpin-svg"
          style={{ shapeRendering: 'crispEdges' }}
        >
          {/* Shadow / Outer Outline (Dark Navy / Coffee Grounds) */}
          <path
            d="M 6 4 L 14 4 L 14 6 L 16 6 L 16 8 L 18 8 L 18 10 L 20 10 L 20 12 L 22 12 L 22 14 L 24 14 L 24 16 L 26 16 L 26 18 L 28 18 L 28 20 L 27 21 L 21 27 L 20 28 L 18 28 L 18 26 L 16 26 L 16 24 L 14 24 L 14 22 L 12 22 L 12 20 L 10 20 L 10 18 L 8 18 L 8 16 L 6 16 L 6 14 L 4 14 L 4 12 L 2 12 L 2 10 L 4 10 L 4 8 L 6 8 Z"
            fill="#1E2A78"
          />

          {/* Bright Lime-Green Body (Pixel Pushpin Head) */}
          <path
            d="M 7 5 L 13 5 L 13 7 L 15 7 L 15 9 L 17 9 L 17 11 L 19 11 L 19 13 L 21 13 L 21 15 L 23 15 L 23 17 L 25 17 L 25 19 L 27 19 L 27 20 L 26 21 L 21 26 L 20 27 L 19 27 L 19 25 L 17 25 L 17 23 L 15 23 L 15 21 L 13 21 L 13 19 L 11 19 L 11 17 L 9 17 L 9 15 L 7 15 L 7 13 L 5 13 L 5 11 L 3 11 L 3 10 L 5 10 L 5 8 L 7 8 Z"
            fill="#A8DC5A"
          />

          {/* Highlight (Lighter green / mint) */}
          <rect x="7" y="7" width="4" height="4" fill="#D4F59C" />
          <rect x="11" y="9" width="3" height="3" fill="#D4F59C" />

          {/* Metallic Needle / Point (Grey / Silver pointing to bottom right hotspot) */}
          <path
            d="M 21 21 L 29 29 L 27 31 L 19 23 Z"
            fill="#B0CDFF"
            stroke="#1E2A78"
            strokeWidth="1"
          />
          <rect x="25" y="25" width="3" height="3" fill="#FFFFFF" />
        </svg>
      </div>
    </div>
  );
}
