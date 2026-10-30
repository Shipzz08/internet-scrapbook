import Navigation from './components/Navigation';
import HomeSection from './components/HomeSection';

export default function App() {
  return (
    <>
      <Navigation />
      <main style={{ width: '100%' }}>
        <HomeSection />

        {/* TEMP: remove when real section is built */}
        <section id="corkboard" style={{ minHeight: '100vh', background: 'var(--neutral-paper)', padding: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', borderBottom: '1px solid var(--border)' }}>
          <h1>Corkboard Section (Placeholder)</h1>
        </section>

        {/* TEMP: remove when real section is built */}
        <section id="about" style={{ minHeight: '100vh', background: 'var(--neutral-cream)', padding: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', borderBottom: '1px solid var(--border)' }}>
          <h1>About Section (Placeholder)</h1>
        </section>

        {/* TEMP: remove when real section is built */}
        <section id="creator" style={{ minHeight: '100vh', background: 'var(--neutral-paper)', padding: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <h1>Creator Section (Placeholder)</h1>
        </section>
      </main>
    </>
  );
}
