import Navigation from './components/Navigation';
import HomeSection from './components/HomeSection';
import HorizontalScroller from './components/HorizontalScroller';
import CustomCursor from './components/CustomCursor';

export default function App() {
  return (
    <>
      <CustomCursor />
      <Navigation />
      <HorizontalScroller>
        <div id="home" className="scroller-panel">
          <HomeSection />
        </div>

        {/* TEMP: remove when real section is built */}
        <div id="corkboard" className="scroller-panel" style={{ background: 'var(--neutral-paper)', padding: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ textAlign: 'center' }}>
            <h1>Corkboard Section (Placeholder)</h1>
            <p>Scroll horizontally between sections or vertically if content overflows.</p>
          </div>
        </div>

        {/* TEMP: remove when real section is built */}
        <div id="about" className="scroller-panel" style={{ background: 'var(--neutral-cream)', padding: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ textAlign: 'center' }}>
            <h1>About Section (Placeholder)</h1>
            <p>Scroll horizontally between sections or vertically if content overflows.</p>
          </div>
        </div>

        {/* TEMP: remove when real section is built */}
        <div id="creator" className="scroller-panel" style={{ background: 'var(--neutral-paper)', padding: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ textAlign: 'center' }}>
            <h1>Creator Section (Placeholder)</h1>
            <p>Scroll horizontally between sections or vertically if content overflows.</p>
          </div>
        </div>
      </HorizontalScroller>
    </>
  );
}
