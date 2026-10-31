import { useState, useEffect } from 'react';
import { CATEGORY_BOOKS, type CategoryBook } from '../data/categories';
import './HomeShelf.css';

export default function HomeShelf() {
  const [cameraHovered, setCameraHovered] = useState(false);

  // DEV-ONLY overlap check
  useEffect(() => {
    if (!import.meta.env.DEV) return;

    const checkOverlaps = () => {
      const bookElements = document.querySelectorAll('.book-spine');
      const rects = Array.from(bookElements).map((el, i) => {
        const box = el.getBoundingClientRect();
        return { id: CATEGORY_BOOKS[i]?.id || i, box };
      });

      for (let i = 0; i < rects.length - 1; i++) {
        const b1 = rects[i].box;
        const b2 = rects[i + 1].box;
        // Check if bounding boxes overlap horizontally beyond slight touch
        if (b1.right > b2.left + 2) {
          console.warn(
            `[DEV] Bookshelf overlap warning: Book "${rects[i].id}" and Book "${rects[i + 1].id}" have intersecting bounding boxes.`
          );
        }
      }
    };

    const timer = setTimeout(checkOverlaps, 600);
    window.addEventListener('resize', checkOverlaps);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', checkOverlaps);
    };
  }, []);

  const handleBookClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    const scroller = document.getElementById('scroller');
    if (targetElement && scroller) {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const behavior = prefersReducedMotion ? 'auto' : 'smooth';
      const panel = targetElement.closest('.scroller-panel') || targetElement;
      if (panel) {
        const leftPos = (panel as HTMLElement).offsetLeft;
        scroller.scrollTo({ left: leftPos, behavior });
      }
    }
  };

  // Split books into two rows for mobile (5 and 5)
  const row1Books = CATEGORY_BOOKS.slice(0, 5);
  const row2Books = CATEGORY_BOOKS.slice(5, 10);

  const renderBookItem = (book: CategoryBook) => {
    const heightCalc = `calc(var(--book-max) * ${book.height / 500})`;
    const tagPosClass = book.tagPosition === 'inside' ? 'tag-pos-inside' : 'tag-pos-above';
    return (
      <li key={book.id} className="bookshelf-item">
        <div className="book-wall-shadow" aria-hidden="true" />
        <div className="book-grounding-shadow" aria-hidden="true" />
        <a
          href="#corkboard"
          className={`book-spine pattern-${book.pattern}`}
          style={
            {
              height: heightCalc,
              width: `${book.width * 0.9}px`,
              backgroundColor: book.color,
              '--tilt': book.tilt,
            } as React.CSSProperties
          }
          onClick={(e) => handleBookClick(e, 'corkboard')}
          aria-label={`${book.spineTitle}, ${book.label} photos, open the Corkboard`}
        >
          <div className="book-spine-shadow" aria-hidden="true" />
          <div className="book-spine-highlight" aria-hidden="true" />
          {book.hasStrip ? (
            <div
              className={`book-label-strip label-pos-${book.labelPosition}`}
              style={{
                transform: `rotate(${book.labelTilt}deg)`,
              }}
            >
              <span
                className="book-label-text"
                style={{
                  fontFamily: book.fontFamily,
                  fontSize: `calc(clamp(16px, calc(var(--book-max) * 0.048), 26px) * ${book.fontScale})`,
                }}
              >
                {book.spineTitle}
              </span>
            </div>
          ) : (
            <div
              className={`book-direct-label label-pos-${book.labelPosition}`}
              style={{
                transform: `rotate(${book.labelTilt}deg)`,
              }}
            >
              <span
                className="book-label-text direct-spine-text"
                style={{
                  fontFamily: book.fontFamily,
                  fontSize: `calc(clamp(16px, calc(var(--book-max) * 0.048), 26px) * ${book.fontScale})`,
                }}
              >
                {book.spineTitle}
              </span>
            </div>
          )}
        </a>
        <div className={`book-hover-tag ${tagPosClass}`} aria-hidden="true">
          {book.label} · Open
        </div>
      </li>
    );
  };

  const renderCamera = () => (
    <div
      className="shelf-camera-wrapper"
      onMouseEnter={() => setCameraHovered(true)}
      onMouseLeave={() => setCameraHovered(false)}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 140 100"
        className="shelf-camera-svg"
        role="img"
        aria-label="Decorative camera"
      >
        {/* Camera body */}
        <rect
          x="10"
          y="30"
          width="120"
          height="65"
          rx="10"
          fill="var(--pastel-blue)"
          stroke="var(--coffee-grounds)"
          strokeWidth="3.5"
          strokeLinejoin="round"
        />
        {/* Top viewfinder bump */}
        <path
          d="M 35 30 L 45 15 L 95 15 L 105 30 Z"
          fill="var(--pastel-blue)"
          stroke="var(--coffee-grounds)"
          strokeWidth="3.5"
          strokeLinejoin="round"
        />
        {/* Shutter button */}
        <rect
          x="95"
          y="8"
          width="16"
          height="9"
          rx="2"
          fill="var(--chocolate-cosmos)"
          stroke="var(--coffee-grounds)"
          strokeWidth="3"
        />
        {/* Flash window */}
        <rect
          x="22"
          y="40"
          width="16"
          height="12"
          rx="2"
          fill="var(--neutral-paper)"
          stroke="var(--coffee-grounds)"
          strokeWidth="2.5"
        />
        {/* Flash blinking light on hover */}
        <circle
          cx="30"
          cy="46"
          r="3.5"
          fill="var(--buttermilk)"
          className={cameraHovered ? 'camera-flash active' : 'camera-flash'}
        />
        {/* Lens rings */}
        <circle
          cx="70"
          cy="62"
          r="22"
          fill="var(--chocolate-cosmos)"
          stroke="var(--coffee-grounds)"
          strokeWidth="3.5"
        />
        <circle
          cx="70"
          cy="62"
          r="15"
          fill="var(--buttermilk)"
          stroke="var(--coffee-grounds)"
          strokeWidth="3"
        />
        <circle
          cx="70"
          cy="62"
          r="8"
          fill="var(--neutral-paper)"
          stroke="var(--coffee-grounds)"
          strokeWidth="2.5"
        />
        <circle
          cx="67"
          cy="59"
          r="2"
          fill="var(--coffee-grounds)"
        />
      </svg>
    </div>
  );

  return (
    <div className="homeshelf-wrapper">
      {/* Desktop Shelf View */}
      <div className="homeshelf-desktop">
        <div className="shelf-content-row">
          {renderCamera()}
          <ul className="bookshelf-list" aria-label="Photo categories">
            {CATEGORY_BOOKS.map(renderBookItem)}
          </ul>
        </div>
        <div className="shelf-plank" aria-hidden="true">
          <div className="shelf-plank-top">
            <div className="shelf-contact-shadow" />
          </div>
          <div className="shelf-plank-front">
            <div className="shelf-end-grain" />
          </div>
        </div>
      </div>

      {/* Mobile Stacked Shelf View (2 rows of 5) */}
      <div className="homeshelf-mobile">
        {/* Row 1 */}
        <div className="shelf-content-row">
          {renderCamera()}
          <ul className="bookshelf-list" aria-label="Photo categories row 1">
            {row1Books.map(renderBookItem)}
          </ul>
        </div>
        <div className="shelf-plank" aria-hidden="true">
          <div className="shelf-plank-top">
            <div className="shelf-contact-shadow" />
          </div>
          <div className="shelf-plank-front">
            <div className="shelf-end-grain" />
          </div>
        </div>

        {/* Row 2 */}
        <div className="shelf-content-row shelf-row-2">
          <ul className="bookshelf-list" aria-label="Photo categories row 2">
            {row2Books.map(renderBookItem)}
          </ul>
        </div>
        <div className="shelf-plank" aria-hidden="true">
          <div className="shelf-plank-top">
            <div className="shelf-contact-shadow" />
          </div>
          <div className="shelf-plank-front">
            <div className="shelf-end-grain" />
          </div>
        </div>
      </div>
    </div>
  );
}
