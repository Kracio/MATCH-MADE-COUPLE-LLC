import React from 'react';

export function BigIslandFooter() {
  return (
    <>
<footer>
  <div className="footer-top">
    <div>
      <div className="footer-brand">Match Made Couple LLC</div>
      <span className="footer-tagline">Matching outfits, unmatched adventures</span>
    </div>
    <div className="footer-links">
      <a href="https://matchmadecouple.com/">Home</a>
      <a href="https://matchmadecouple.com/the-islands-of-hawaii/">All Islands</a>
      <a href="https://matchmadecouple.com/marketing-and-media-production/">Work With Us</a>
      <a href="https://www.instagram.com/matchmadeadventures/" target="_blank" rel="noopener">Instagram</a>
      <a href="https://www.facebook.com/matchmadeadventures/" target="_blank" rel="noopener">Facebook</a>
      <a href="https://www.amazon.com/shop/matchmadecouple" target="_blank" rel="noopener">Amazon Shop</a>
      <a href="https://matchmadecouple.com/privacy-policy/">Privacy Policy</a>
    </div>
  </div>
  <div className="footer-bottom">
    <span className="footer-copy">© 2026 Match Made Couple LLC. All rights reserved.</span>
    <span className="footer-copy" style={{ fontFamily: "'Cormorant Garamond',serif", fontStyle: 'italic', opacity: 0.4 }}>The Big Island · The Land of Lava · 19.8° N, 155.7° W</span>
  </div>
</footer>
    </>
  );
}
