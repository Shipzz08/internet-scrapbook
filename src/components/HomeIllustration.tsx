import './HomeIllustration.css';

export default function HomeIllustration() {
  return (
    <div className="home-illustration-wrapper">
      <svg
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMax slice"
        role="img"
        aria-label="Illustration of a scrapbooker's desk with a shelf above it"
        className="home-svg"
      >
        {/* Wall Background */}
        <rect width="1200" height="800" fill="var(--lemonade)" />

        {/* Desk Tabletop spanning full width 0 to 1200 (outside translate group so it touches both edges) */}
        <g id="desk">
          <path
            d="M 0 560 Q 600 555 1200 562 L 1200 592 Q 600 597 0 590 Z"
            fill="var(--sea-blue)"
            stroke="var(--coffee-grounds)"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>

        <g transform="translate(200, 0)">
          {/* Shelf Group (Extended 1.5x, x=100 to x=820) */}
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

          {/* Plant Group (moved to right end of extended shelf, around x=740) */}
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
            {/* Book 1: Sea Blue, x=130, w=32, h=100 (y=130 to 230) */}
            <g id="book-1">
              <rect x="130" y="130" width="32" height="100" rx="3" fill="var(--sea-blue)" stroke="var(--coffee-grounds)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
              <line x1="135" y1="145" x2="157" y2="145" stroke="var(--honey-drizzle)" strokeWidth="3" strokeLinecap="round" />
            </g>

            {/* Book 2: Matcha, x=166, w=26, h=120 (y=110 to 230) */}
            <g id="book-2">
              <rect x="166" y="110" width="26" height="120" rx="3" fill="var(--matcha)" stroke="var(--coffee-grounds)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
              <rect x="171" y="130" width="16" height="25" rx="2" fill="var(--neutral-paper)" stroke="var(--coffee-grounds)" strokeWidth="2.5" />
            </g>

            {/* Book 3: Honey Drizzle, x=196, w=38, h=85 (y=145 to 230) */}
            <g id="book-3">
              <rect x="196" y="145" width="38" height="85" rx="3" fill="var(--honey-drizzle)" stroke="var(--coffee-grounds)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
              <line x1="203" y1="160" x2="227" y2="160" stroke="var(--coffee-grounds)" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="203" y1="168" x2="227" y2="168" stroke="var(--coffee-grounds)" strokeWidth="2.5" strokeLinecap="round" />
            </g>

            {/* Book 4: Poppy, x=238, w=28, h=110 (y=120 to 230) */}
            <g id="book-4">
              <rect x="238" y="120" width="28" height="110" rx="3" fill="var(--poppy)" stroke="var(--coffee-grounds)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="252" cy="145" r="4" fill="var(--neutral-paper)" stroke="var(--coffee-grounds)" strokeWidth="2" />
            </g>

            {/* Book 5: Coffee Grounds with cream label, x=270, w=35, h=95 (y=135 to 230) */}
            <g id="book-5">
              <rect x="270" y="135" width="35" height="95" rx="3" fill="var(--coffee-grounds)" stroke="var(--coffee-grounds)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
              <rect x="277" y="155" width="21" height="30" rx="2" fill="var(--neutral-paper)" stroke="var(--coffee-grounds)" strokeWidth="2.5" />
            </g>

            {/* Book 6: Sea Blue leaning, x=309, w=30, h=105 (y=125 to 230), rotated ~12 deg */}
            <g id="book-6" transform="translate(309, 230) rotate(12) translate(-309, -230)">
              <rect x="309" y="125" width="30" height="105" rx="3" fill="var(--sea-blue)" stroke="var(--coffee-grounds)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
              <line x1="314" y1="140" x2="334" y2="140" stroke="var(--honey-drizzle)" strokeWidth="3" strokeLinecap="round" />
            </g>
          </g>

          {/* Desk Legs (positioned relative to translated desk) */}
          <g id="desk-legs">
            <path
              d="M 160 592 L 140 760 L 170 760 L 190 592 Z"
              fill="var(--honey-drizzle)"
              stroke="var(--coffee-grounds)"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M 640 597 L 610 760 L 640 760 L 660 597 Z"
              fill="var(--honey-drizzle)"
              stroke="var(--coffee-grounds)"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>

          {/* Lamp Group (on left of desk) */}
          <g id="lamp">
            {/* Base */}
            <path
              d="M 160 545 Q 180 535 200 545 L 210 560 L 150 560 Z"
              fill="var(--sea-blue)"
              stroke="var(--coffee-grounds)"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Arm */}
            <path
              d="M 175 540 L 170 460 L 220 420"
              fill="none"
              stroke="var(--coffee-grounds)"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Shade */}
            <path
              d="M 210 400 L 260 450 L 240 460 L 195 435 Z"
              fill="var(--honey-drizzle)"
              stroke="var(--coffee-grounds)"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>

          {/* Mug Group (on right of desk) */}
          <g id="mug">
            {/* Body */}
            <path
              d="M 580 505 L 620 505 L 615 560 L 585 560 Z"
              fill="var(--neutral-paper)"
              stroke="var(--coffee-grounds)"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Handle */}
            <path
              d="M 620 515 Q 640 530 620 545"
              fill="none"
              stroke="var(--coffee-grounds)"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Steam */}
            <path
              d="M 595 490 Q 600 480 595 470"
              fill="none"
              stroke="var(--coffee-grounds)"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}
