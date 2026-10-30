import './Navigation.css';

export default function Navigation() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
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

  return (
    <nav aria-label="Main" className="navigation">
      <div className="nav-content">
        <a href="#home" className="nav-brand" onClick={(e) => handleNavClick(e, 'home')}>
          The Internet Scrapbook
        </a>
        <ul className="nav-links">
          <li><a href="#home" className="nav-link" onClick={(e) => handleNavClick(e, 'home')}>Home</a></li>
          <li><a href="#corkboard" className="nav-link" onClick={(e) => handleNavClick(e, 'corkboard')}>Corkboard</a></li>
          <li><a href="#about" className="nav-link" onClick={(e) => handleNavClick(e, 'about')}>About</a></li>
          <li><a href="#creator" className="nav-link" onClick={(e) => handleNavClick(e, 'creator')}>Creator</a></li>
        </ul>
      </div>
    </nav>
  );
}
