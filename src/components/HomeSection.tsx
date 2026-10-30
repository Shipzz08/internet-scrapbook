import { useEffect, useRef } from 'react';
import './HomeSection.css';
import HomeShelf from './HomeShelf';

export default function HomeSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const updateShelfLeft = () => {
      if (!sectionRef.current || !taglineRef.current) return;
      const sectionRect = sectionRef.current.getBoundingClientRect();
      const p = taglineRef.current;
      const textNode = p.firstChild;
      if (!textNode || textNode.nodeType !== Node.TEXT_NODE) return;
      const text = textNode.textContent || '';
      const placeIndex = text.indexOf('place');
      if (placeIndex === -1) return;
      // "place" starts at placeIndex, "a" is at placeIndex + 1
      const aIndex = placeIndex + 1;

      try {
        const range = document.createRange();
        range.setStart(textNode, aIndex);
        range.setEnd(textNode, aIndex + 1);
        const rect = range.getBoundingClientRect();
        const leftPx = rect.left - sectionRect.left;
        sectionRef.current.style.setProperty('--shelf-left', `${leftPx}px`);
      } catch {
        // Fallback if range fails
        sectionRef.current.style.setProperty('--shelf-left', '14vw');
      }
    };

    updateShelfLeft();

    const handleResize = () => {
      updateShelfLeft();
    };

    window.addEventListener('resize', handleResize);
    document.fonts.ready.then(() => {
      updateShelfLeft();
    });

    const observer = new ResizeObserver(() => {
      updateShelfLeft();
    });
    if (taglineRef.current) {
      observer.observe(taglineRef.current);
    }

    return () => {
      window.removeEventListener('resize', handleResize);
      observer.disconnect();
    };
  }, []);

  return (
    <section id="home" className="home-section" ref={sectionRef}>
      <div className="home-container">
        <div className="home-text-col">
          <h1 className="home-title">The Internet Scrapbook</h1>
          <p className="home-tagline" ref={taglineRef}>A little place for the little things.</p>
          <p className="home-description">A quiet digital corkboard for everyday moments and short stories.</p>
        </div>
        <div className="home-illustration-col" aria-hidden="true">
          <HomeShelf />
        </div>
      </div>
    </section>
  );
}
