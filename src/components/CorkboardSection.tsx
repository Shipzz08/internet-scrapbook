import { useState } from 'react';
import { CATEGORIES, SCRAPBOOK_PHOTOS, type ScrapbookPhoto } from '../data/scrapbookData';
import './CorkboardSection.css';

const CorkboardSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Moments");
  const [activePhoto, setActivePhoto] = useState<ScrapbookPhoto | null>(null);

  const filteredPhotos = selectedCategory === "All Moments"
    ? SCRAPBOOK_PHOTOS
    : SCRAPBOOK_PHOTOS.filter(p => p.category === selectedCategory);

  return (
    <section id="corkboard" className="corkboard-section">
      <div className="corkboard-header">
        <h2>The Corkboard</h2>
        <p className="corkboard-subtitle">A quiet digital album of everyday moments and short stories.</p>
      </div>

      {/* Category Filter Pills */}
      <div className="category-filter-wrap" role="region" aria-label="Photo categories">
        <div className="category-pills">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              className={`category-pill ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Corkboard Grid / Open Album */}
      <div className="corkboard-board">
        <div className="photos-grid">
          {filteredPhotos.map((photo) => (
            <article
              key={photo.id}
              className="scrapbook-card"
              style={{ transform: `rotate(${photo.rotation || 0}deg)` }}
              onClick={() => setActivePhoto(photo)}
            >
              <div className="tape-corner top-left" aria-hidden="true"></div>
              <div className="tape-corner top-right" aria-hidden="true"></div>
              <div className="photo-frame">
                <img src={photo.imageUrl} alt={photo.title} loading="lazy" />
                <span className="photo-category-tag">{photo.category}</span>
              </div>
              <div className="photo-caption">
                <h3>{photo.title}</h3>
                <p className="photo-story">"{photo.story}"</p>
                <div className="photo-meta">
                  <span className="photo-creator">Photo by {photo.creator}</span>
                  <span className="photo-date">{photo.date}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Photo Lightbox / Detail Modal */}
      {activePhoto && (
        <div className="modal-backdrop" onClick={() => setActivePhoto(null)}>
          <div className="modal-scrapbook-card" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setActivePhoto(null)} aria-label="Close photo view">×</button>
            <div className="modal-image-wrap">
              <img src={activePhoto.imageUrl} alt={activePhoto.title} />
            </div>
            <div className="modal-content">
              <span className="modal-badge">{activePhoto.category}</span>
              <h2>{activePhoto.title}</h2>
              <p className="modal-story">"{activePhoto.story}"</p>
              <div className="modal-meta">
                <span>Captured by <strong>{activePhoto.creator}</strong></span>
                <span>{activePhoto.date}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default CorkboardSection;
