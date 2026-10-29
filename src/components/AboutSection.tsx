import { useState } from 'react';
import './AboutSection.css';

const AboutSection = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        {/* Title Tile */}
        <div className="about-tile title-tile">
          <h2>About the Project</h2>
        </div>

        {/* Asymmetrical Grid */}
        <div className="about-grid">
          {/* Split Tile (Slot 1) divided into two unequal parts side-by-side */}
          <div className="about-tile split-tile" role="group" aria-label="Project highlights">
            <div className="split-left">
              <span className="split-label">Nostalgia</span>
              <p>Handmade warmth</p>
            </div>
            <div className="split-right">
              <span className="split-label">Mindful</span>
              <p>Quiet moments</p>
            </div>
          </div>

          {/* Main Central Feature Tile */}
          <div className={`about-tile feature-tile ${expanded ? 'expanded' : ''}`}>
            <span className="feature-badge">A little place for the little things.</span>
            <h3>A quiet digital corkboard for everyday moments and short stories.</h3>
            <p className="feature-desc">
              The Internet Scrapbook is designed to feel like looking through a personal camera roll or a dusty photo album on a rainy afternoon. No follower counts, no infinite feeds—just ordinary moments worth keeping.
            </p>
            {expanded && (
              <div className="expanded-content">
                <p>
                  Every photograph here is accompanied by a short story or memory from its creator. Whether it's morning light on a city sidewalk, a sleepy cat in a sunbeam, or mist over a mountain ridge, these are the little things that make everyday life extraordinary.
                </p>
                <p>
                  Built with care, warmth, and nostalgia using Vite, React, and TypeScript.
                </p>
              </div>
            )}
            <button
              className="read-more-btn"
              onClick={() => setExpanded(!expanded)}
              aria-expanded={expanded}
            >
              {expanded ? 'Show Less' : 'Read More'}
            </button>
          </div>

          {/* Decorative Supporting Tiles */}
          <div className="about-tile deco-tile tile-lemonade">
            <span className="deco-text">Ordinary &bull; Honest &bull; Warm</span>
          </div>

          <div className="about-tile deco-tile tile-matcha">
            <span className="deco-text">Unhurried spaces</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
