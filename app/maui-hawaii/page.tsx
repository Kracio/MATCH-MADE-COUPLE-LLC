import React from 'react';
import { MauiNav } from '@/components/maui/MauiNav';
import { MauiHero } from '@/components/maui/MauiHero';
import { MauiIntro } from '@/components/maui/MauiIntro';
import { MauiCategories } from '@/components/maui/MauiCategories';
import { MauiSnorkel } from '@/components/maui/MauiSnorkel';
import { MauiPromo } from '@/components/maui/MauiPromo';
import { MauiFooter } from '@/components/maui/MauiFooter';

export const metadata = {
  title: "Maui — The Valley Isle | Match Made Couple",
  description: "Volcanic landscapes, untouched natural beauty, and ocean adventures that redefine what a Hawaiian island can be.",
};

export default function MauiPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

:root {
  --black:  #0a0a09;
  --dark:   #111110;
  --dark2:  #1a1a18;
  --dark3:  #242422;
  --gold:   #c9a96e;
  --gold2:  #e8c98a;
  --cream:  #f4efe6;
  --text:   #d4cfc6;
  --muted:  #8a8680;
  --border: rgba(201,169,110,0.18);
}

html { scroll-behavior: smooth; }
body {
  font-family: 'Montserrat', sans-serif;
  font-weight: 300;
  font-size: 14px;
  line-height: 1.8;
  color: var(--text);
  background: var(--black);
  overflow-x: hidden;
}

::-webkit-scrollbar { width: 4px; }
::-webkit-scrollbar-track { background: var(--dark); }
::-webkit-scrollbar-thumb { background: var(--gold); }

/* NAV */
nav {
  position: fixed; top: 0; left: 0; right: 0; z-index: 100;
  display: flex; align-items: center; justify-content: space-between;
  padding: 20px 48px;
  background: linear-gradient(to bottom, rgba(10,10,9,0.95), transparent);
  border-bottom: 1px solid rgba(201,169,110,0.08);
}
.nav-logo {
  font-family: 'Cormorant Garamond', serif;
  font-size: 13px; font-weight: 400;
  letter-spacing: 0.25em; text-transform: uppercase;
  color: var(--gold); text-decoration: none;
}
.nav-links { display: flex; gap: 32px; }
.nav-links a {
  font-size: 10px; font-weight: 500;
  letter-spacing: 0.2em; text-transform: uppercase;
  color: var(--muted); text-decoration: none;
  transition: color 0.3s;
}
.nav-links a:hover { color: var(--gold); }

/* HERO */
.hero {
  position: relative; height: 100vh; min-height: 700px;
  display: flex; flex-direction: column; justify-content: flex-end;
  padding: 0 80px 80px; overflow: hidden;
}
.hero-bg {
  position: absolute; inset: 0;
  background-image: url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1800&q=80');
  background-size: cover; background-position: center 40%;
  filter: brightness(0.4);
}
.hero-bg::after {
  content: ''; position: absolute; inset: 0;
  background: linear-gradient(to top, rgba(10,10,9,0.97) 0%, rgba(10,10,9,0.25) 55%, rgba(10,10,9,0.05) 100%);
}
.hero-coords {
  position: absolute; top: 120px; right: 80px;
  font-size: 10px; letter-spacing: 0.2em; color: var(--gold); opacity: 0.65;
  writing-mode: vertical-rl;
}
.hero-content { position: relative; max-width: 700px; }
.hero-tag {
  display: inline-block;
  font-size: 10px; font-weight: 500;
  letter-spacing: 0.3em; text-transform: uppercase;
  color: var(--gold); margin-bottom: 20px;
  padding-bottom: 12px; border-bottom: 1px solid var(--gold);
}
.hero h1 {
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(72px, 10vw, 120px);
  font-weight: 300; line-height: 0.9;
  color: var(--cream); letter-spacing: -2px; margin-bottom: 24px;
}
.hero h1 em { font-style: italic; color: var(--gold2); }
.hero-sub {
  font-size: 12px; font-weight: 400;
  letter-spacing: 0.15em; text-transform: uppercase;
  color: var(--muted); margin-bottom: 32px;
}
.hero-desc {
  font-family: 'Cormorant Garamond', serif;
  font-size: 19px; font-weight: 300; font-style: italic;
  line-height: 1.6; color: rgba(212,207,198,0.8); max-width: 520px;
}
.hero-scroll {
  position: absolute; bottom: 80px; right: 80px;
  display: flex; align-items: center; gap: 12px;
  font-size: 9px; letter-spacing: 0.25em; text-transform: uppercase; color: var(--muted);
}
.hero-scroll::before {
  content: ''; display: block; width: 40px; height: 1px;
  background: var(--gold); opacity: 0.4;
}

/* LAYOUT */
.section { padding: 100px 80px; }
.container { max-width: 1100px; margin: 0 auto; }
.section-tag {
  font-size: 10px; font-weight: 500;
  letter-spacing: 0.3em; text-transform: uppercase;
  color: var(--gold); display: block; margin-bottom: 20px;
}
h2 {
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(36px, 5vw, 58px); font-weight: 300;
  color: var(--cream); line-height: 1.1; letter-spacing: -0.5px; margin-bottom: 20px;
}
h2 em { font-style: italic; color: var(--gold2); }
.lead {
  font-family: 'Cormorant Garamond', serif;
  font-size: 18px; font-style: italic;
  color: rgba(212,207,198,0.75); line-height: 1.7;
  max-width: 640px; margin-bottom: 48px;
}
p.body-text {
  font-size: 13px; font-weight: 300;
  color: var(--muted); line-height: 1.9;
  max-width: 620px; margin-bottom: 16px;
}

/* DIVIDER */
.divider {
  height: 1px; background: var(--border);
  margin: 0 80px; width: calc(100% - 160px);
}
.gold-line {
  display: flex; align-items: center; gap: 20px; margin-bottom: 60px;
}
.gold-line::before, .gold-line::after {
  content: ''; flex: 1; height: 1px; background: var(--border);
}
.gold-line span {
  font-size: 9px; letter-spacing: 0.3em; text-transform: uppercase;
  color: var(--gold); opacity: 0.7;
}

/* BUTTONS */
.btn {
  display: inline-block; padding: 13px 28px;
  font-family: 'Montserrat', sans-serif;
  font-size: 10px; font-weight: 500;
  letter-spacing: 0.2em; text-transform: uppercase;
  text-decoration: none; transition: all 0.3s; cursor: pointer;
}
.btn-gold { background: var(--gold); color: var(--black); border: 1px solid var(--gold); }
.btn-gold:hover { background: var(--gold2); border-color: var(--gold2); }
.btn-outline { background: transparent; color: var(--gold); border: 1px solid rgba(201,169,110,0.5); }
.btn-outline:hover { border-color: var(--gold); background: rgba(201,169,110,0.08); }
.btn-black { background: var(--black); color: var(--gold); border: 1px solid var(--black); white-space: nowrap; }
.btn-black:hover { background: var(--dark2); }
.btn-group { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 28px; }

/* INTRO SPLIT */
.intro-grid {
  display: grid; grid-template-columns: 1fr 1fr;
  gap: 80px; align-items: center;
}
.intro-image {
  position: relative; aspect-ratio: 3/4; overflow: hidden;
}
.intro-image img {
  width: 100%; height: 100%; object-fit: cover;
  filter: brightness(0.85); transition: transform 0.8s ease;
}
.intro-image:hover img { transform: scale(1.04); }
.intro-image-label {
  position: absolute; bottom: 24px; left: 24px;
  font-size: 10px; letter-spacing: 0.2em; text-transform: uppercase;
  color: var(--gold); opacity: 0.8;
}
.intro-num {
  font-family: 'Cormorant Garamond', serif;
  font-size: 120px; font-weight: 300;
  color: rgba(201,169,110,0.06); line-height: 1; margin-bottom: -30px;
}

/* CATEGORY GRID */
.cat-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2px; margin-top: 60px;
}
.cat-card {
  position: relative; aspect-ratio: 4/5; overflow: hidden;
  cursor: default;
}
.cat-card.wide { grid-column: span 2; aspect-ratio: 8/5; }
.cat-card img {
  width: 100%; height: 100%; object-fit: cover;
  filter: brightness(0.45);
  transition: transform 0.7s ease, filter 0.7s ease;
}
.cat-card:hover img { transform: scale(1.06); filter: brightness(0.6); }
.cat-card-content {
  position: absolute; inset: 0;
  display: flex; flex-direction: column; justify-content: flex-end;
  padding: 32px 28px;
  background: linear-gradient(to top, rgba(10,10,9,0.85) 0%, transparent 60%);
}
.cat-num {
  font-family: 'Cormorant Garamond', serif;
  font-size: 11px; font-weight: 400;
  letter-spacing: 0.2em; color: var(--gold); opacity: 0.7;
  margin-bottom: 8px;
}
.cat-card h3 {
  font-family: 'Cormorant Garamond', serif;
  font-size: 26px; font-weight: 400;
  color: var(--cream); line-height: 1.1; margin-bottom: 10px;
}
.cat-card h3 em { font-style: italic; color: var(--gold2); }
.cat-card p {
  font-size: 12px; font-weight: 300;
  color: rgba(212,207,198,0.72); line-height: 1.6; margin-bottom: 16px;
}
.cat-tag {
  font-size: 9px; font-weight: 500;
  letter-spacing: 0.2em; text-transform: uppercase;
  color: var(--gold); opacity: 0.6;
  display: block; margin-bottom: 6px;
}

/* HIGHLIGHT STRIP */
.highlight {
  background: var(--dark);
  display: grid; grid-template-columns: 1fr 1fr;
  min-height: 560px;
}
.highlight-image {
  position: relative; overflow: hidden;
}
.highlight-image img {
  width: 100%; height: 100%; object-fit: cover;
  filter: brightness(0.6);
  transition: transform 0.8s ease;
}
.highlight:hover .highlight-image img { transform: scale(1.04); }
.highlight-body {
  padding: 80px 64px;
  display: flex; flex-direction: column; justify-content: center;
}
.highlight-body .section-tag { margin-bottom: 16px; }
.highlight-body h2 { font-size: clamp(30px, 4vw, 48px); margin-bottom: 20px; }
.highlight-body p {
  font-size: 13px; color: var(--muted); line-height: 1.9; margin-bottom: 16px;
}

/* PROMO STRIP */
.promo-strip {
  background: var(--gold);
  padding: 60px 80px;
  display: flex; align-items: center; justify-content: space-between; gap: 40px;
}
.promo-strip h3 {
  font-family: 'Cormorant Garamond', serif;
  font-size: 36px; font-weight: 400;
  color: var(--black); line-height: 1.1;
}
.promo-strip p { font-size: 12px; color: rgba(10,10,9,0.65); margin-top: 8px; }

/* FOOTER */
footer {
  background: var(--dark); padding: 64px 80px 40px;
  border-top: 1px solid var(--border);
}
.footer-top {
  display: flex; align-items: flex-start; justify-content: space-between;
  gap: 60px; margin-bottom: 48px;
}
.footer-brand {
  font-family: 'Cormorant Garamond', serif;
  font-size: 22px; font-weight: 400; color: var(--cream); letter-spacing: 0.05em;
}
.footer-tagline {
  font-size: 10px; letter-spacing: 0.2em; text-transform: uppercase;
  color: var(--gold); display: block; margin-top: 6px;
}
.footer-links { display: flex; gap: 32px; flex-wrap: wrap; }
.footer-links a {
  font-size: 10px; letter-spacing: 0.15em; text-transform: uppercase;
  color: var(--muted); text-decoration: none; transition: color 0.3s;
}
.footer-links a:hover { color: var(--gold); }
.footer-bottom {
  border-top: 1px solid var(--border); padding-top: 28px;
  display: flex; justify-content: space-between; align-items: center;
}
.footer-copy { font-size: 11px; color: rgba(138,134,128,0.5); }

/* RESPONSIVE */
@media (max-width: 900px) {
  nav { padding: 18px 24px; }
  .nav-links { display: none; }
  .hero { padding: 0 24px 60px; }
  .hero-coords, .hero-scroll { display: none; }
  .section { padding: 72px 24px; }
  .divider { margin: 0 24px; width: calc(100% - 48px); }
  .intro-grid { grid-template-columns: 1fr; gap: 40px; }
  .intro-num { font-size: 80px; }
  .cat-grid { grid-template-columns: 1fr 1fr; }
  .cat-card.wide { grid-column: span 2; }
  .highlight { grid-template-columns: 1fr; }
  .highlight-image { aspect-ratio: 16/9; }
  .highlight-body { padding: 48px 24px; }
  .promo-strip { flex-direction: column; padding: 48px 24px; }
  footer { padding: 48px 24px 32px; }
  .footer-top { flex-direction: column; gap: 32px; }
  .footer-bottom { flex-direction: column; gap: 16px; text-align: center; }
}
@media (max-width: 600px) {
  .cat-grid { grid-template-columns: 1fr; }
  .cat-card.wide { grid-column: span 1; aspect-ratio: 4/5; }
}
      `}} />
      <div className="maui-wrapper">
        <MauiNav />
        <MauiHero />
        <MauiIntro />
        <MauiCategories />
        <MauiSnorkel />
        <MauiPromo />
        <MauiFooter />
      </div>
    </>
  );
}
