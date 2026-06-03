import React from 'react';
import Head from 'next/head';
import { BigIslandNav } from '@/components/big-island/BigIslandNav';
import { BigIslandHero } from '@/components/big-island/BigIslandHero';
import { BigIslandIntro } from '@/components/big-island/BigIslandIntro';
import { BigIslandOverview } from '@/components/big-island/BigIslandOverview';
import { BigIslandExperiences } from '@/components/big-island/BigIslandExperiences';
import { BigIslandKona } from '@/components/big-island/BigIslandKona';
import { BigIslandMantas } from '@/components/big-island/BigIslandMantas';
import { BigIslandVolcanoes } from '@/components/big-island/BigIslandVolcanoes';
import { BigIslandHilo } from '@/components/big-island/BigIslandHilo';
import { BigIslandBeaches } from '@/components/big-island/BigIslandBeaches';
import { BigIslandSafety } from '@/components/big-island/BigIslandSafety';
import { BigIslandFood } from '@/components/big-island/BigIslandFood';
import { BigIslandPromo } from '@/components/big-island/BigIslandPromo';
import { BigIslandFooter } from '@/components/big-island/BigIslandFooter';

export const metadata = {
  title: "The Big Island — The Land of Lava | Match Made Couple",
  description: "The youngest, largest, and most geologically alive island on Earth.",
};

export default function BigIslandPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

:root {
  --black:    #0a0a09;
  --dark:     #111110;
  --dark2:    #1a1a18;
  --dark3:    #242422;
  --gold:     #c9a96e;
  --gold2:    #e8c98a;
  --cream:    #f4efe6;
  --cream2:   #e8dfd0;
  --text:     #d4cfc6;
  --muted:    #8a8680;
  --border:   rgba(201,169,110,0.18);
  --lava:     #c0392b;
  --lava2:    #e74c3c;
  --radius:   4px;
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

/* ── NAV ── */
nav {
  position: fixed; top: 0; left: 0; right: 0; z-index: 100;
  display: flex; align-items: center; justify-content: space-between;
  padding: 20px 48px;
  background: linear-gradient(to bottom, rgba(10,10,9,0.95) 0%, transparent 100%);
  border-bottom: 1px solid rgba(201,169,110,0.08);
}
.nav-logo {
  font-family: 'Cormorant Garamond', serif;
  font-size: 13px; font-weight: 400;
  letter-spacing: 0.25em; text-transform: uppercase;
  color: var(--gold); text-decoration: none;
}
.nav-links { display: flex; gap: 28px; }
.nav-links a {
  font-size: 10px; font-weight: 500;
  letter-spacing: 0.18em; text-transform: uppercase;
  color: var(--muted); text-decoration: none;
  transition: color 0.3s;
}
.nav-links a:hover { color: var(--gold); }

/* ── HERO ── */
.hero {
  position: relative;
  height: 100vh; min-height: 700px;
  display: flex; flex-direction: column; justify-content: flex-end;
  padding: 0 80px 80px;
  overflow: hidden;
}
.hero-bg {
  position: absolute; inset: 0;
  background-image: url('https://images.unsplash.com/photo-1526512340740-9217d0159da9?w=1800&q=80');
  background-size: cover; background-position: center 40%;
  filter: brightness(0.4);
}
.hero-bg::after {
  content: '';
  position: absolute; inset: 0;
  background: linear-gradient(to top, rgba(10,10,9,0.97) 0%, rgba(10,10,9,0.3) 50%, rgba(10,10,9,0.1) 100%);
}
.hero-coords {
  position: absolute; top: 120px; right: 80px;
  font-size: 10px; letter-spacing: 0.2em;
  color: var(--gold); opacity: 0.7;
  writing-mode: vertical-rl; text-orientation: mixed;
}
.hero-content { position: relative; max-width: 700px; }
.hero-tag {
  display: inline-block;
  font-size: 10px; font-weight: 500;
  letter-spacing: 0.3em; text-transform: uppercase;
  color: var(--gold);
  margin-bottom: 20px;
  padding-bottom: 12px;
  border-bottom: 1px solid var(--gold);
}
.hero h1 {
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(64px, 9vw, 110px);
  font-weight: 300;
  line-height: 0.9;
  color: var(--cream);
  letter-spacing: -2px;
  margin-bottom: 24px;
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
  line-height: 1.6;
  color: rgba(212,207,198,0.8);
  max-width: 520px;
}
.hero-scroll {
  position: absolute; bottom: 80px; right: 80px;
  display: flex; align-items: center; gap: 12px;
  font-size: 9px; letter-spacing: 0.25em; text-transform: uppercase;
  color: var(--muted);
}
.hero-scroll::before {
  content: ''; display: block;
  width: 40px; height: 1px;
  background: var(--gold); opacity: 0.4;
}

/* ── SECTION BASE ── */
.section { padding: 100px 80px; }
.container { max-width: 1100px; margin: 0 auto; }
.section-tag {
  font-size: 10px; font-weight: 500;
  letter-spacing: 0.3em; text-transform: uppercase;
  color: var(--gold);
  display: block; margin-bottom: 20px;
}
h2 {
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(36px, 5vw, 58px);
  font-weight: 300;
  color: var(--cream);
  line-height: 1.1;
  letter-spacing: -0.5px;
  margin-bottom: 20px;
}
h2 em { font-style: italic; color: var(--gold2); }
.lead {
  font-family: 'Cormorant Garamond', serif;
  font-size: 18px; font-style: italic;
  color: rgba(212,207,198,0.75);
  line-height: 1.7;
  max-width: 640px;
  margin-bottom: 48px;
}
p.body-text {
  font-size: 13px; font-weight: 300;
  color: var(--muted);
  line-height: 1.9;
  max-width: 620px;
  margin-bottom: 16px;
}

/* ── DIVIDER ── */
.divider {
  width: calc(100% - 160px); height: 1px;
  background: var(--border);
  margin: 0 80px;
}
.gold-line {
  display: flex; align-items: center; gap: 20px;
  margin-bottom: 60px;
}
.gold-line::before, .gold-line::after {
  content: ''; flex: 1; height: 1px;
  background: var(--border);
}
.gold-line span {
  font-size: 9px; letter-spacing: 0.3em; text-transform: uppercase;
  color: var(--gold); opacity: 0.7;
}

/* ── BUTTONS ── */
.btn {
  display: inline-block;
  padding: 13px 28px;
  font-family: 'Montserrat', sans-serif;
  font-size: 10px; font-weight: 500;
  letter-spacing: 0.2em; text-transform: uppercase;
  text-decoration: none;
  transition: all 0.3s; cursor: pointer;
}
.btn-gold { background: var(--gold); color: var(--black); border: 1px solid var(--gold); }
.btn-gold:hover { background: var(--gold2); border-color: var(--gold2); }
.btn-outline { background: transparent; color: var(--gold); border: 1px solid rgba(201,169,110,0.5); }
.btn-outline:hover { border-color: var(--gold); background: rgba(201,169,110,0.08); }
.btn-ghost { background: transparent; color: var(--muted); border: 1px solid rgba(138,134,128,0.3); }
.btn-ghost:hover { color: var(--cream); border-color: var(--muted); }
.btn-group { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 28px; }

/* ── INTRO SPLIT ── */
.intro-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px; align-items: center;
}
.intro-image {
  position: relative;
  aspect-ratio: 3/4; overflow: hidden;
}
.intro-image img {
  width: 100%; height: 100%;
  object-fit: cover;
  filter: brightness(0.85);
  transition: transform 0.8s ease;
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
  color: rgba(201,169,110,0.06);
  line-height: 1; margin-bottom: -30px;
}

/* ── VOLCANOS ZONE MAP ── */
.zone-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2px;
  margin-top: 56px;
}
.zone-card {
  background: var(--dark2);
  padding: 32px 24px;
  border: 1px solid var(--border);
  transition: background 0.3s, border-color 0.3s;
}
.zone-card:hover { background: var(--dark3); border-color: rgba(201,169,110,0.35); }
.zone-badge {
  font-size: 9px; font-weight: 500;
  letter-spacing: 0.2em; text-transform: uppercase;
  color: var(--gold); display: block; margin-bottom: 14px;
}
.zone-card h4 {
  font-family: 'Cormorant Garamond', serif;
  font-size: 20px; font-weight: 400;
  color: var(--cream); margin-bottom: 10px; line-height: 1.2;
}
.zone-card p { font-size: 12px; color: var(--muted); line-height: 1.7; }

/* ── BUCKET LIST ── */
.bucket-section { background: var(--dark); }
.bucket-items { display: flex; flex-direction: column; gap: 2px; margin-top: 60px; }
.bucket-item {
  display: grid;
  grid-template-columns: 80px 1fr 320px;
  gap: 48px; align-items: start;
  padding: 44px 0;
  border-top: 1px solid var(--border);
  transition: border-color 0.3s;
}
.bucket-item:last-child { border-bottom: 1px solid var(--border); }
.bucket-item:hover { border-color: rgba(201,169,110,0.35); }
.bucket-num {
  font-family: 'Cormorant Garamond', serif;
  font-size: 48px; font-weight: 300;
  color: rgba(201,169,110,0.25); line-height: 1;
}
.bucket-body h3 {
  font-family: 'Cormorant Garamond', serif;
  font-size: 28px; font-weight: 400;
  color: var(--cream); line-height: 1.2; margin-bottom: 12px;
}
.bucket-body p { font-size: 13px; font-weight: 300; color: var(--muted); line-height: 1.8; }
.bucket-image { position: relative; aspect-ratio: 4/3; overflow: hidden; }
.bucket-image img {
  width: 100%; height: 100%;
  object-fit: cover;
  filter: brightness(0.75);
  transition: transform 0.6s ease, filter 0.6s ease;
}
.bucket-item:hover .bucket-image img { transform: scale(1.05); filter: brightness(0.9); }

/* ── REGIONS ── */
.region { border-top: 1px solid var(--border); }
.region-hero {
  position: relative;
  height: 60vh; min-height: 480px;
  display: flex; align-items: flex-end;
  padding: 60px 80px; overflow: hidden;
}
.region-hero-bg {
  position: absolute; inset: 0;
  background-size: cover; background-position: center;
  filter: brightness(0.35);
}
.region-hero-bg::after {
  content: ''; position: absolute; inset: 0;
  background: linear-gradient(to top, rgba(10,10,9,0.9) 0%, transparent 60%);
}
.region-hero-content { position: relative; }
.region-tag {
  font-size: 10px; letter-spacing: 0.3em; text-transform: uppercase;
  color: var(--gold); display: block; margin-bottom: 12px;
}
.region-hero h2 { font-size: clamp(40px, 6vw, 72px); margin-bottom: 8px; }
.region-desc {
  font-family: 'Cormorant Garamond', serif;
  font-size: 17px; font-style: italic;
  color: rgba(212,207,198,0.7); max-width: 560px;
}
.region-body { padding: 72px 80px; background: var(--dark); }
.region-cols {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 60px;
}
.region-col-title {
  font-size: 9px; font-weight: 600;
  letter-spacing: 0.25em; text-transform: uppercase;
  color: var(--gold);
  padding-bottom: 14px;
  border-bottom: 1px solid var(--border);
  margin-bottom: 24px; display: block;
}
.region-item { margin-bottom: 20px; }
.region-item strong {
  display: block;
  font-size: 13px; font-weight: 500;
  color: var(--cream); margin-bottom: 3px;
}
.region-item span { font-size: 12px; color: var(--muted); line-height: 1.6; }
.region-item .btn-group { margin-top: 14px; }

/* ── HIGHLIGHT BOX ── */
.highlight-box {
  margin-top: 48px; padding: 36px;
  border: 1px solid var(--border);
  background: rgba(201,169,110,0.04);
}
.highlight-box .kicker {
  font-size: 9px; letter-spacing: 0.25em; text-transform: uppercase;
  color: var(--gold); display: block; margin-bottom: 12px;
}
.highlight-box h4 {
  font-family: 'Cormorant Garamond', serif;
  font-size: 22px; font-weight: 400; font-style: italic;
  color: var(--cream); margin-bottom: 10px;
}
.highlight-box p { font-size: 13px; color: var(--muted); line-height: 1.8; }

/* ── BEACHES GRID ── */
.beach-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2px; margin-top: 56px;
}
.beach-card {
  position: relative; aspect-ratio: 3/4; overflow: hidden;
}
.beach-card img {
  width: 100%; height: 100%;
  object-fit: cover; filter: brightness(0.6);
  transition: transform 0.7s ease, filter 0.6s ease;
}
.beach-card:hover img { transform: scale(1.06); filter: brightness(0.8); }
.beach-info {
  position: absolute; bottom: 0; left: 0; right: 0;
  padding: 24px;
  background: linear-gradient(to top, rgba(10,10,9,0.9) 0%, transparent 100%);
}
.beach-info strong {
  font-family: 'Cormorant Garamond', serif;
  font-size: 20px; font-weight: 400;
  color: var(--cream); display: block; margin-bottom: 4px;
}
.beach-info span { font-size: 11px; color: var(--muted); }
.beach-badge {
  position: absolute; top: 16px; left: 16px;
  font-size: 9px; letter-spacing: 0.15em; text-transform: uppercase;
  color: var(--gold);
  background: rgba(10,10,9,0.7);
  padding: 5px 10px;
}

/* ── FOOD SECTION ── */
.food-section { background: var(--black); }
.food-zones {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 48px; margin-top: 56px;
}
.food-zone-title {
  font-size: 10px; font-weight: 600;
  letter-spacing: 0.25em; text-transform: uppercase;
  color: var(--gold);
  padding-bottom: 14px;
  border-bottom: 1px solid var(--border);
  margin-bottom: 20px; display: block;
}
.food-item {
  padding: 14px 0;
  border-bottom: 1px solid rgba(201,169,110,0.07);
}
.food-item strong {
  font-size: 13px; font-weight: 500;
  color: var(--cream); display: block; margin-bottom: 2px;
}
.food-item span { font-size: 12px; color: var(--muted); }

/* ── SAFETY STRIP ── */
.safety-strip {
  background: rgba(201,169,110,0.05);
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
  padding: 48px 80px;
}
.safety-strip .section-tag { margin-bottom: 28px; }
.safety-items {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
}
.safety-item strong {
  font-size: 12px; font-weight: 500;
  color: var(--cream); display: block; margin-bottom: 6px;
}
.safety-item span { font-size: 11px; color: var(--muted); line-height: 1.7; }

/* ── PROMO STRIP ── */
.promo-strip {
  background: var(--gold);
  padding: 60px 80px;
  display: flex; align-items: center; justify-content: space-between;
  gap: 40px;
}
.promo-strip h3 {
  font-family: 'Cormorant Garamond', serif;
  font-size: 36px; font-weight: 400;
  color: var(--black); line-height: 1.1;
}
.promo-strip p { font-size: 12px; color: rgba(10,10,9,0.65); margin-top: 8px; }
.btn-black { background: var(--black); color: var(--gold); border: 1px solid var(--black); white-space: nowrap; }
.btn-black:hover { background: var(--dark2); }

/* ── FOOTER ── */
footer {
  background: var(--dark);
  padding: 64px 80px 40px;
  border-top: 1px solid var(--border);
}
.footer-top {
  display: flex; align-items: flex-start; justify-content: space-between;
  gap: 60px; margin-bottom: 48px;
}
.footer-brand {
  font-family: 'Cormorant Garamond', serif;
  font-size: 22px; font-weight: 400;
  color: var(--cream); letter-spacing: 0.05em;
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
  border-top: 1px solid var(--border);
  padding-top: 28px;
  display: flex; justify-content: space-between; align-items: center;
}
.footer-copy { font-size: 11px; color: rgba(138,134,128,0.5); }

/* ── RESPONSIVE ── */
@media (max-width: 900px) {
  nav { padding: 18px 24px; }
  .nav-links { display: none; }
  .hero { padding: 0 24px 60px; }
  .hero-coords { display: none; }
  .section { padding: 72px 24px; }
  .divider { margin: 0 24px; width: calc(100% - 48px); }
  .intro-grid { grid-template-columns: 1fr; gap: 40px; }
  .intro-num { font-size: 80px; }
  .zone-grid { grid-template-columns: 1fr 1fr; }
  .bucket-item { grid-template-columns: 60px 1fr; }
  .bucket-image { display: none; }
  .region-hero { padding: 40px 24px; }
  .region-body { padding: 48px 24px; }
  .region-cols { grid-template-columns: 1fr; gap: 36px; }
  .beach-grid { grid-template-columns: 1fr; }
  .food-zones { grid-template-columns: 1fr; }
  .safety-strip { padding: 48px 24px; }
  .safety-items { grid-template-columns: 1fr 1fr; gap: 28px; }
  .promo-strip { flex-direction: column; padding: 48px 24px; }
  footer { padding: 48px 24px 32px; }
  .footer-top { flex-direction: column; gap: 32px; }
  .footer-bottom { flex-direction: column; gap: 16px; text-align: center; }
}
      `}} />
      <div className="big-island-wrapper">
        <BigIslandNav />
        <BigIslandHero />
        <BigIslandIntro />
        <BigIslandOverview />
        <BigIslandExperiences />
        <BigIslandKona />
        <BigIslandMantas />
        <BigIslandVolcanoes />
        <BigIslandHilo />
        <BigIslandBeaches />
        <BigIslandSafety />
        <BigIslandFood />
        <BigIslandPromo />
        <BigIslandFooter />
      </div>
    </>
  );
}
