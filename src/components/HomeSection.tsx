import './HomeSection.css';

export default function HomeSection() {
  return (
    <section id="home" className="home-section">
      <div className="home-container">
        <div className="home-text-col">
          <h1 className="home-title">The Internet Scrapbook</h1>
          <p className="home-tagline">A little place for the little things.</p>
          <p className="home-description">A quiet digital corkboard for everyday moments and short stories.</p>
        </div>
        <div className="home-illustration-col" aria-hidden="true">
          {/* TEMP: illustration goes here */}
          <div className="illustration-placeholder"></div>
        </div>
      </div>
    </section>
  );
}
