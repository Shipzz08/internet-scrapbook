import './Navigation.css';

export default function Navigation() {
  return (
    <nav aria-label="Main" className="navigation">
      <div className="nav-content">
        <a href="#home" className="nav-brand">
          The Internet Scrapbook
        </a>
        <ul className="nav-links">
          <li><a href="#home" className="nav-link">Home</a></li>
          <li><a href="#corkboard" className="nav-link">Corkboard</a></li>
          <li><a href="#about" className="nav-link">About</a></li>
          <li><a href="#creator" className="nav-link">Creator</a></li>
        </ul>
      </div>
    </nav>
  );
}
