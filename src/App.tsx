import Navigation from './components/Navigation';
import BookshelfHero from './components/BookshelfHero';
import CorkboardSection from './components/CorkboardSection';
import AboutSection from './components/AboutSection';
import CreatorFooter from './components/CreatorFooter';

export default function App() {
  return (
    <>
      <Navigation />
      <main>
        <BookshelfHero />
        <CorkboardSection />
        <AboutSection />
      </main>
      <CreatorFooter />
    </>
  );
}
