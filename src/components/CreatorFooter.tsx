import './CreatorFooter.css';

const CreatorFooter = () => {
  return (
    <>
      <section id="creator" className="creator-section">
        <div className="creator-card">
          <div className="tape-creator" aria-hidden="true"></div>
          <h2>Creator's Note</h2>
          <p className="creator-text">
            The Internet Scrapbook was built as a quiet sanctuary away from the noise of modern social media. A little corner of the web dedicated to ordinary beauty, slow photography, and short stories.
          </p>
          <div className="creator-signature">
            <span>Made with care &amp; nostalgia</span>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-content">
          <p>&copy; 2026 The Internet Scrapbook. A quiet digital corkboard.</p>
          <p className="footer-tagline">A little place for the little things.</p>
        </div>
      </footer>
    </>
  );
};

export default CreatorFooter;
