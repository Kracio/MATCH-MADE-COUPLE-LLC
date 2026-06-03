import React from 'react';

export function BigIslandBeaches() {
  return (
    <>
<section className="section" id="beaches" style={{ background: "var(--dark)" }}>
  <div className="container">
    <span className="section-tag">Coast & Shore</span>
    <h2>Beaches <em>Worth Driving For</em></h2>
    <p className="lead">The Big Island has beaches in green, black, and white — literally. Each one is a different geological story.</p>
    <div className="beach-grid">
      <div className="beach-card">
        <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80" alt="Green sand beach Big Island Papakolea Hawaii" loading="lazy" />
        <span className="beach-badge">Green Sand</span>
        <div className="beach-info">
          <strong>Papakolea</strong>
          <span>5-mile round trip hike. One of only four green sand beaches in the world — olivine crystals from eroding cinder cone.</span>
        </div>
      </div>
      <div className="beach-card">
        <img src="https://images.unsplash.com/photo-1559494007-9f5847c49d94?w=800&q=80" alt="Black sand beach Hawaii Big Island Punaluu sea turtles" loading="lazy" />
        <span className="beach-badge">Black Sand</span>
        <div className="beach-info">
          <strong>Punalu'u</strong>
          <span>Iconic black sand beach where hawksbill and green sea turtles regularly rest. No touching — just observe.</span>
        </div>
      </div>
      <div className="beach-card">
        <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80" alt="Hapuna white sand beach Big Island Hawaii turquoise water" loading="lazy" />
        <span className="beach-badge">White Sand</span>
        <div className="beach-info">
          <strong>Hapuna Beach</strong>
          <span>Half-mile of white sand with calm, swimmable water. Consistently ranked one of the best beaches in the US.</span>
        </div>
      </div>
      <div className="beach-card">
        <img src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80" alt="Kua Bay Maniniowali Beach clear water Big Island Hawaii" loading="lazy" />
        <span className="beach-badge">Crystal Clear</span>
        <div className="beach-info">
          <strong>Kua Bay / Manini'owali</strong>
          <span>Vivid turquoise water ideal for boogie boarding and swimming. Arrive early — parking fills by mid-morning.</span>
        </div>
      </div>
      <div className="beach-card">
        <img src="https://images.unsplash.com/photo-1468581264429-2548ef9eb732?w=800&q=80" alt="Mauna Kea Beach turquoise water Big Island Hawaii" loading="lazy" />
        <span className="beach-badge">Resort Area</span>
        <div className="beach-info">
          <strong>Mauna Kea Beach</strong>
          <span>Fine white sand, turquoise water, and excellent snorkeling. Public access available via the resort path.</span>
        </div>
      </div>
      <div className="beach-card">
        <img src="https://images.unsplash.com/photo-1519451241324-20b4ea2c4220?w=800&q=80" alt="Spencer Beach Park calm family friendly Big Island Hawaii" loading="lazy" />
        <span className="beach-badge">Family Friendly</span>
        <div className="beach-info">
          <strong>Spencer Beach Park</strong>
          <span>Calm, shallow, and gentle on waves. Perfect for families with young kids. Full facilities and easy parking.</span>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  );
}
