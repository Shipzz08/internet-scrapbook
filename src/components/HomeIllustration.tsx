import './HomeIllustration.css';
import sceneUrl from '../assets/home-scene.png';

export default function HomeIllustration() {
  return (
    <div className="home-illustration-wrapper">
      <svg
        viewBox="180 70 486 304"
        preserveAspectRatio="xMidYMid meet"
        role="img"
        aria-label="Illustration of a girl working at a craft desk, with a shelf of books above her"
        className="home-svg"
      >
        {/* Finished PNG scene filling the background behind the shelf */}
        <image
          href={sceneUrl}
          x="0"
          y="0"
          width="666"
          height="374"
          preserveAspectRatio="none"
          aria-hidden="true"
        />

        {/* Shelf Group (Shelf, Brackets, Books, and Plant scaled and positioned above girl's head) */}
        <g id="shelf-group" transform="translate(225, 85) scale(0.56)">
          {/* Shelf Group */}
          <g id="shelf">
            {/* Brackets */}
            <path
              d="M 240 250 L 240 310 L 270 310"
              fill="none"
              stroke="var(--coffee-grounds)"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M 680 250 L 680 310 L 650 310"
              fill="none"
              stroke="var(--coffee-grounds)"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Plank */}
            <path
              d="M 100 230 Q 460 225 820 232 L 820 252 Q 460 257 100 250 Z"
              fill="var(--honey-drizzle)"
              stroke="var(--coffee-grounds)"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>

          {/* Plant Group (on far right end of shelf) */}
          <g id="plant">
            {/* Pot */}
            <path
              d="M 720 190 L 760 190 L 750 230 L 730 230 Z"
              fill="var(--neutral-paper)"
              stroke="var(--coffee-grounds)"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Leaves (Matcha) */}
            <path
              d="M 740 190 Q 720 150 700 160 Q 730 180 740 190 Z"
              fill="var(--matcha)"
              stroke="var(--coffee-grounds)"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M 740 190 Q 750 140 770 150 Q 750 175 740 190 Z"
              fill="var(--matcha)"
              stroke="var(--coffee-grounds)"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M 740 190 Q 780 160 785 180 Q 760 185 740 190 Z"
              fill="var(--matcha)"
              stroke="var(--coffee-grounds)"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>

          {/* Books Group (6 books standing on shelf to the left of plant) */}
          <g id="books">
            <g id="book-1">
              <rect x="130" y="130" width="32" height="100" rx="3" fill="var(--sea-blue)" stroke="var(--coffee-grounds)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
              <line x1="135" y1="145" x2="157" y2="145" stroke="var(--honey-drizzle)" strokeWidth="3" strokeLinecap="round" />
            </g>
            <g id="book-2">
              <rect x="166" y="110" width="26" height="120" rx="3" fill="var(--matcha)" stroke="var(--coffee-grounds)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
              <rect x="171" y="130" width="16" height="25" rx="2" fill="var(--neutral-paper)" stroke="var(--coffee-grounds)" strokeWidth="2.5" />
            </g>
            <g id="book-3">
              <rect x="196" y="145" width="38" height="85" rx="3" fill="var(--honey-drizzle)" stroke="var(--coffee-grounds)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
              <line x1="203" y1="160" x2="227" y2="160" stroke="var(--coffee-grounds)" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="203" y1="168" x2="227" y2="168" stroke="var(--coffee-grounds)" strokeWidth="2.5" strokeLinecap="round" />
            </g>
            <g id="book-4">
              <rect x="238" y="120" width="28" height="110" rx="3" fill="var(--poppy)" stroke="var(--coffee-grounds)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="252" cy="145" r="4" fill="var(--neutral-paper)" stroke="var(--coffee-grounds)" strokeWidth="2" />
            </g>
            <g id="book-5">
              <rect x="270" y="135" width="35" height="95" rx="3" fill="var(--coffee-grounds)" stroke="var(--coffee-grounds)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
              <rect x="277" y="155" width="21" height="30" rx="2" fill="var(--neutral-paper)" stroke="var(--coffee-grounds)" strokeWidth="2.5" />
            </g>
            <g id="book-6" transform="translate(309, 230) rotate(12) translate(-309, -230)">
              <rect x="309" y="125" width="30" height="105" rx="3" fill="var(--sea-blue)" stroke="var(--coffee-grounds)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
              <line x1="314" y1="140" x2="334" y2="140" stroke="var(--honey-drizzle)" strokeWidth="3" strokeLinecap="round" />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}
