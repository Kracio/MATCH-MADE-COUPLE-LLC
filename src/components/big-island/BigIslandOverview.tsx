import React from 'react';

export function BigIslandOverview() {
  return (
    <>
<section className="section" style={{ background: "var(--dark)" }} id="zones">
  <div className="container">
    <span className="section-tag">Island Overview</span>
    <h2>Know the <em>Zones</em></h2>
    <p className="lead">The Big Island is enormous — plan by region so you're not driving four hours between activities.</p>
    <div className="zone-grid">
      <div className="zone-card">
        <span className="zone-badge">West Coast</span>
        <h4>Kona</h4>
        <p>Coffee farms, snorkeling, the famous manta ray night dives, parasailing, and a real submarine ride.</p>
      </div>
      <div className="zone-card">
        <span className="zone-badge">North</span>
        <h4>Kohala</h4>
        <p>Oldest volcano on the island. Ziplines over waterfalls, black sand beaches, and Pololu Valley lookout.</p>
      </div>
      <div className="zone-card">
        <span className="zone-badge">East Coast</span>
        <h4>Hilo</h4>
        <p>Rainforest waterfalls, tsunami history, botanical gardens, and the island's most authentic local culture.</p>
      </div>
      <div className="zone-card">
        <span className="zone-badge">Summit</span>
        <h4>Mauna Kea</h4>
        <p>13,796 ft above sea level. Sunrise above the clouds is one of the most surreal experiences on Earth.</p>
      </div>
      <div className="zone-card">
        <span className="zone-badge">Mid-Island</span>
        <h4>Umauma</h4>
        <p>Adventure hub — ziplines, ATV rides, waterfall rappelling, and private waterfall swims all in one place.</p>
      </div>
      <div className="zone-card">
        <span className="zone-badge">Crater Rim</span>
        <h4>Volcano Village</h4>
        <p>Charming, artistic, and perfectly positioned as your base for Hawai'i Volcanoes National Park.</p>
      </div>
      <div className="zone-card">
        <span className="zone-badge">National Park</span>
        <h4>Volcanoes NP</h4>
        <p>Kilauea — the world's most active volcano. Plan a full day minimum for trails, lava tubes, and overlooks.</p>
      </div>
      <div className="zone-card">
        <span className="zone-badge">Active Volcano</span>
        <h4>Hualalai</h4>
        <p>Guided hike only. Native cloud forest, craters, and lava tubes on an active volcano — unlike anything else.</p>
      </div>
    </div>
  </div>
</section>
<div className="divider"></div>
    </>
  );
}
