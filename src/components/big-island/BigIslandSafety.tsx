import React from 'react';

export function BigIslandSafety() {
  return (
    <>
<div className="safety-strip">
  <div className="container">
    <span className="section-tag">Before You Go</span>
    <div className="safety-items">
      <div className="safety-item">
        <strong>Mauna Kea Altitude</strong>
        <span>Real risk of altitude sickness at 13,796 ft. Stop at the Visitor Information Station (9,200 ft) for at least 30 minutes before continuing. Bring serious cold-weather layers.</span>
      </div>
      <div className="safety-item">
        <strong>Mauna Loa: Experienced Only</strong>
        <span>Requires state + NPS permits, high-clearance 4x4, prior high-altitude experience, and full backcountry prep. Not a casual hike — plan accordingly.</span>
      </div>
      <div className="safety-item">
        <strong>Volcanoes NP: Dress for Cold</strong>
        <span>The park sits at 4,000 ft. Wind, rain, and cool temperatures are common year-round. A light jacket minimum, rain layer preferred.</span>
      </div>
      <div className="safety-item">
        <strong>Scuba Divers: 24-Hour Rule</strong>
        <span>If you plan to dive and then ascend to altitude (Mauna Kea or Mauna Loa), wait a full 24 hours after your last dive before ascending above 8,000 ft.</span>
      </div>
    </div>
  </div>
</div>
    </>
  );
}
