import React from 'react';

export function MauiCategories() {
  return (
    <>
      <section className="section" id="categories" style={{ background: "var(--black)", paddingTop: "80px", paddingBottom: "0" }}>
        <div className="container">
          <div className="gold-line"><span>Top Experiences</span></div>
          <span className="section-tag">Maui Activities</span>
          <h2>Best Things <em>To Do</em></h2>
          <p className="lead">Every adventure on the island, organized for you. Click any experience to explore it fully.</p>
        </div>
      </section>

      <div style={{ padding: "0 80px 100px", background: "var(--black)" }} id="cat-grid-wrap">
        <div className="container">
          <div className="cat-grid">

            {/* Molokini */}
            <div className="cat-card">
              <img src="https://images.unsplash.com/photo-1498503182468-3b51cbb6cb24?w=800&q=80" alt="Molokini crater snorkeling clear water" loading="lazy" />
              <div className="cat-card-content">
                <span className="cat-num">01 · Marine</span>
                <h3>Molokini <em>Crater</em></h3>
                <p>A crescent-shaped volcanic caldera half-submerged in the Pacific. One of only three sites of its kind on Earth, with crystal-clear waters and vibrant marine life.</p>
              </div>
            </div>

            {/* Haleakala - wide */}
            <div className="cat-card wide" id="haleakala">
              <img src="https://images.unsplash.com/photo-1589308078059-be1415eab4c3?w=1400&q=80" alt="Haleakala volcano summit sunrise Maui" loading="lazy" />
              <div className="cat-card-content">
                <span className="cat-num">03 · Volcano</span>
                <h3>Haleakalā — <em>House of the Sun</em></h3>
                <p>A dormant volcano with some of the most breathtaking scenery on Earth. Renowned for its sunrise and sunset, this sacred site is filled with experiences that make it truly unforgettable.</p>
              </div>
            </div>

            {/* Road to Hana - wide */}
            <div className="cat-card wide" id="road">
              <img src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1400&q=80" alt="Road to Hana waterfall bamboo forest Maui" loading="lazy" />
              <div className="cat-card-content">
                <span className="cat-num">04 · Road Trip</span>
                <h3>Road to <em>Hana</em></h3>
                <p>Hawaii's most famous road trip, leading you through waterfalls, bamboo forests, colorful sand beaches, and countless surprises along the way. A journey as legendary as the destination.</p>
              </div>
            </div>

            {/* Whale Watching */}
            <div className="cat-card">
              <img src="https://images.unsplash.com/photo-1568430462989-44163eb1752f?w=800&q=80" alt="Humpback whale breaching Hawaii ocean" loading="lazy" />
              <div className="cat-card-content">
                <span className="cat-num">02 · Wildlife</span>
                <h3>Whale <em>Watching</em></h3>
                <p>Maui is home to Hawaii's greatest gathering of humpback whales, protected by some of the strongest marine laws in the islands. Best sightings: December to March.</p>
              </div>
            </div>

            {/* Sailing - wide */}
            <div className="cat-card wide">
              <img src="https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=1400&q=80" alt="Sailing catamaran sunset ocean Hawaii" loading="lazy" />
              <div className="cat-card-content">
                <span className="cat-num">05 · Ocean</span>
                <h3>Sailing <em>Experiences</em></h3>
                <p>Ocean breeze, panoramic island views, and sunsets that stop time. An unforgettable way to experience Hawaii from the sea.</p>
              </div>
            </div>

            {/* Helicopter */}
            <div className="cat-card">
              <img src="https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=800&q=80" alt="Helicopter tour aerial view Maui rainforest waterfalls" loading="lazy" />
              <div className="cat-card-content">
                <span className="cat-num">07 · Aerial</span>
                <h3>Helicopter <em>Tours</em></h3>
                <p>Lush rainforests, cascading waterfalls, dramatic sea cliffs, and hidden valleys — all from the sky. The most unforgettable way to see the Valley Isle.</p>
              </div>
            </div>

            {/* Zipline & ATV */}
            <div className="cat-card">
              <img src="https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&q=80" alt="Zipline adventure aerial green valley Maui" loading="lazy" />
              <div className="cat-card-content">
                <span className="cat-num">08 · Adventure</span>
                <h3>Zipline &amp; <em>ATV</em></h3>
                <p>Soar above valleys, forests, and volcanic landscapes — or ride through muddy jungle trails for a whole new perspective of the island.</p>
              </div>
            </div>

            {/* Beyond Tourist Trail */}
            <div className="cat-card wide">
              <img src="https://images.unsplash.com/photo-1518684079-3c830dcef090?w=1400&q=80" alt="Hidden beach Maui beyond tourist trail" loading="lazy" />
              <div className="cat-card-content">
                <span className="cat-num">09 · Hidden</span>
                <h3>Beyond the <em>Tourist Trail</em></h3>
                <p>Go beyond the typical tourist stops and discover Maui's hidden adventures. These unique experiences reveal a completely different side of the Valley Isle — one most visitors never see.</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
