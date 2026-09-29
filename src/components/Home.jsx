import React, { useState } from 'react';
import './Home.css';

function Home({ categories, allItems, onPlaySong }) {
  const [activeCategory, setActiveCategory] = useState('Tous');

  // We have 4 categories passed from App: "Musique", "Podcasts", "Histoires", "Radios".
  const categoryNames = ['Tous', ...Object.keys(categories)];

  const renderSection = (title, items) => (
    <div className="category-section" key={title}>
      <h2>{title}</h2>
      <div className="cards-container">
        {items.slice(0, 5).map(item => (
          <div className="song-card" key={item.id} onClick={() => onPlaySong(item)}>
            <div className="card-image">
              <img src={item.cover} alt={item.title} />
              <button className="play-button"><i className="fa-solid fa-play"></i></button>
            </div>
            <h4>{item.title}</h4>
            <p>{item.artist}</p>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="home">
      <div className="category-filters">
        {categoryNames.map(cat => (
          <button 
            key={cat} 
            className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="sections-container">
        {activeCategory === 'Tous' ? (
          <>
            {Object.keys(categories).map(catName => renderSection(catName, categories[catName]))}
          </>
        ) : (
          renderSection(activeCategory, categories[activeCategory])
        )}
      </div>
    </div>
  );
}

export default Home;
