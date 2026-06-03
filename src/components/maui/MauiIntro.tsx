import React from 'react';

export function MauiIntro() {
  return (
    <>
      <section className="section" id="intro" style={{ background: "var(--black)" }}>
        <div className="container">
          <div className="intro-grid">
            <div>
              <div className="intro-num">01</div>
              <span className="section-tag">The Valley Isle</span>
              <h2>Golden <em>Epiphany</em></h2>
              <p className="body-text">Maui feels like all the Hawaiian islands in one. Volcanic landscapes like the Big Island, a perfect balance of shopping like O'ahu, and untouched natural beauty like Kaua'i. If we had to choose just one island, Maui would always be our pick.</p>
              <p className="body-text">After years of exploring it and chasing its most unforgettable adventures, we've organized everything into easy categories — from bucket-list summits to hidden ocean encounters. Dive in and discover your Maui.</p>
            </div>
            <div className="intro-image">
              <img src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&q=80" alt="Maui Hawaii tropical landscape" loading="lazy" />
              <span className="intro-image-label">Maui · The Valley Isle</span>
            </div>
          </div>
        </div>
      </section>
      <div className="divider"></div>
    </>
  );
}
