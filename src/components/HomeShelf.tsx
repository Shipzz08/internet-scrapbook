import { useState } from 'react';
import { CATEGORY_BOOKS, type CategoryBook } from '../data/categories';
import './HomeShelf.css';

export default function HomeShelf() {
  const [cameraHovered, setCameraHovered] = useState(false);

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
    return (
      <li key={book.id} className="bookshelf-item">
        <a
          href="#corkboard"
          className={`book-spine pattern-${book.pattern}`}
          style={{
            height: heightCalc,
            width: `${book.width}px`,
            backgroundColor: book.color,
          }}
          onClick={(e) => handleBookClick(e, 'corkboard')}
          aria-label={`${book.label}, open the Corkboard`}
        >
          <div className="book-hover-tag" aria-hidden="true">
            Open →
          </div>
          <div className="book-label-strip">
            <span
              className="book-label-text"
              style={{
                fontFamily: book.fontFamily,
                fontSize: `calc(clamp(15px, calc(var(--book-max) * 0.042), 22px) * ${book.fontScale})`,
              }}
            >
              {book.label}
            </span>
          </div>
        </a>
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
          <div className="shelf-plank-strip" />
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
          <div className="shelf-plank-strip" />
        </div>

        {/* Row 2 */}
        <div className="shelf-content-row shelf-row-2">
          <ul className="bookshelf-list" aria-label="Photo categories row 2">
            {row2Books.map(renderBookItem)}
          </ul>
        </div>
        <div className="shelf-plank" aria-hidden="true">
          <div className="shelf-plank-strip" />
        </div>
      </div>
    </div>
  );
}
