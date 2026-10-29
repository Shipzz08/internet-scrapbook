import './BookshelfHero.css';

const BookshelfHero = () => {
  return (
    <header id="home" className="bookshelf-hero">
      <div className="hero-paper">
        <div className="tape-top" aria-hidden="true"></div>
        <div className="hero-content">
          <div className="hero-badge">
            <span className="hand-note">A little place for the little things.</span>
          </div>
          <h1>The Internet Scrapbook</h1>
          <p className="hero-tagline">
            A quiet digital corkboard for everyday moments and short stories.
          </p>

          <div className="bookshelf-container" aria-label="Illustrated bookshelf with camera">
            <div className="camera-item" title="A vintage camera for capturing everyday moments">
              <svg className="camera-svg" viewBox="0 0 64 50" aria-hidden="true">
                {/* Camera body */}
                <rect x="6" y="14" width="52" height="32" rx="6" fill="var(--sea-blue)" stroke="var(--coffee-grounds)" strokeWidth="2.5" />
                {/* Top prism / housing */}
                <path d="M22 14 L26 8 H38 L42 14 Z" fill="var(--sea-blue)" stroke="var(--coffee-grounds)" strokeWidth="2.5" strokeLinejoin="round" />
                {/* Shutter button */}
                <rect x="14" y="9" width="6" height="5" rx="1" fill="var(--lemonade)" stroke="var(--coffee-grounds)" strokeWidth="2" />
                {/* Lens outer */}
                <circle cx="32" cy="30" r="11" fill="var(--neutral-paper)" stroke="var(--coffee-grounds)" strokeWidth="2.5" />
                {/* Lens inner */}
                <circle cx="32" cy="30" r="6" fill="var(--sea-blue)" opacity="0.8" />
                <circle cx="29" cy="27" r="2" fill="#FFFFFF" opacity="0.9" />
                {/* Viewfinder / flash window */}
                <rect x="44" y="18" width="8" height="6" rx="2" fill="var(--lemonade)" stroke="var(--coffee-grounds)" strokeWidth="2" />
              </svg>
            </div>

            <div className="bookshelf-shelf">
              <div className="books-row">
                {/* Book 1: Matcha */}
                <div className="book book-matcha" style={{ height: '130px', width: '38px' }} title="Matcha book">
                  <span className="book-title">Quiet Days</span>
                </div>
                {/* Book 2: Lemonade */}
                <div className="book book-lemonade" style={{ height: '155px', width: '44px' }} title="Lemonade book">
                  <span className="book-title">Sunlight</span>
                </div>
                {/* Book 3: Sea Blue */}
                <div className="book book-seablue" style={{ height: '120px', width: '34px' }} title="Sea Blue book">
                  <span className="book-title">Ocean</span>
                </div>
                {/* Book 4: Honey Drizzle */}
                <div className="book book-honey" style={{ height: '145px', width: '40px' }} title="Honey Drizzle book">
                  <span className="book-title">Memories</span>
                </div>
                {/* Book 5: Coffee Grounds */}
                <div className="book book-coffee" style={{ height: '135px', width: '46px' }} title="Coffee book">
                  <span className="book-title">Café</span>
                </div>
                {/* Book 6: Matcha leaning */}
                <div className="book book-matcha-alt leaning" style={{ height: '125px', width: '36px' }} title="Leaning book">
                  <span className="book-title">Notes</span>
                </div>
              </div>
              <div className="shelf-plank"></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default BookshelfHero;
