/**
 * TFO Private — Monday client presentation
 * Generates: docs/TFO-Private-Proposal.pptx
 */
const PptxGenJS = require('pptxgenjs');
const path = require('path');

const pptx = new PptxGenJS();
pptx.defineLayout({ name: 'WIDE', width: 13.333, height: 7.5 });
pptx.layout = 'WIDE';
pptx.author = 'TFO Private Delivery';
pptx.title = 'TFO Private — Project Proposal & Architecture';
pptx.subject = 'Monday client presentation';

const C = {
  basalt: '080B0E',
  panel: '0C1017',
  card: '0B0F15',
  champagne: 'C5A880',
  white: 'FFFFFF',
  muted: '94A3B8',
  soft: 'CBD5E1',
  line: '1E293B',
  amberBg: '1C1917',
};

function addBg(slide) {
  slide.addShape(pptx.shapes.RECTANGLE, {
    x: 0, y: 0, w: 13.333, h: 7.5,
    fill: { color: C.basalt },
  });
}

function addFooter(slide, page, total = 14) {
  slide.addShape(pptx.shapes.RECTANGLE, {
    x: 0.6, y: 7.05, w: 12.1, h: 0.01,
    fill: { color: C.line },
  });
  slide.addText('TFO PRIVATE  ·  CONFIDENTIAL', {
    x: 0.6, y: 7.15, w: 6, h: 0.25,
    fontSize: 9, fontFace: 'Arial', color: C.muted,
    charSpacing: 2,
  });
  slide.addText(`${page} / ${total}`, {
    x: 11.2, y: 7.15, w: 1.5, h: 0.25,
    fontSize: 9, fontFace: 'Arial', color: C.muted, align: 'right',
  });
}

function eyebrow(slide, text, y = 0.45) {
  slide.addText(text, {
    x: 0.7, y, w: 12, h: 0.3,
    fontSize: 11, fontFace: 'Arial', color: C.champagne, bold: true,
    charSpacing: 3,
  });
}

function card(slide, opts) {
  slide.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
    x: opts.x, y: opts.y, w: opts.w, h: opts.h,
    fill: { color: opts.fill || C.card },
    line: { color: opts.border || C.line, width: 1 },
    rectRadius: 0.08,
  });
}

// ─── 1. Title ───────────────────────────────────────────────
{
  const s = pptx.addSlide();
  addBg(s);
  s.addShape(pptx.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.12, h: 7.5, fill: { color: C.champagne },
  });
  s.addText('TFO PRIVATE', {
    x: 0.9, y: 1.8, w: 11, h: 0.4,
    fontSize: 14, fontFace: 'Arial', color: C.champagne, bold: true, charSpacing: 6,
  });
  s.addText('Project Proposal &\nDesign Blueprint', {
    x: 0.9, y: 2.3, w: 11, h: 1.6,
    fontSize: 44, fontFace: 'Georgia', color: C.white,
  });
  s.addText('Three specialist brands. One seamless standard.\nFrom runway to road.', {
    x: 0.9, y: 4.2, w: 10, h: 0.7,
    fontSize: 16, fontFace: 'Arial', color: C.muted,
  });
  s.addText('Monday presentation  ·  Live demo + scope + investment', {
    x: 0.9, y: 5.3, w: 10, h: 0.35,
    fontSize: 13, fontFace: 'Arial', color: C.champagne,
  });
  addFooter(s, 1);
}

// ─── 2. Agenda ──────────────────────────────────────────────
{
  const s = pptx.addSlide();
  addBg(s);
  eyebrow(s, 'AGENDA');
  s.addText('How we’ll walk through today', {
    x: 0.7, y: 0.85, w: 12, h: 0.55,
    fontSize: 32, fontFace: 'Georgia', color: C.white,
  });

  const items = [
    ['01', 'How the ecosystem was designed', 'The thinking behind three sites under one luxury standard'],
    ['02', 'Architecture blueprint', 'Topology, booking journey, and design system'],
    ['03', 'What’s included', 'Scope of work, support, and domain transition'],
    ['04', 'Investment', 'Package pricing and friendship rate'],
    ['05', 'Next steps', 'Approval path to launch'],
  ];

  items.forEach((item, i) => {
    const y = 1.7 + i * 0.9;
    s.addText(item[0], {
      x: 0.7, y, w: 1, h: 0.55,
      fontSize: 22, fontFace: 'Georgia', color: C.champagne,
    });
    s.addText(item[1], {
      x: 1.9, y, w: 10, h: 0.35,
      fontSize: 18, fontFace: 'Arial', color: C.white, bold: true,
    });
    s.addText(item[2], {
      x: 1.9, y: y + 0.32, w: 10, h: 0.3,
      fontSize: 13, fontFace: 'Arial', color: C.muted,
    });
  });
  addFooter(s, 2);
}

// ─── 3. How I came up with it ───────────────────────────────
{
  const s = pptx.addSlide();
  addBg(s);
  eyebrow(s, 'DESIGN THINKING');
  s.addText('How I came up with this', {
    x: 0.7, y: 0.85, w: 12, h: 0.55,
    fontSize: 32, fontFace: 'Georgia', color: C.white,
  });
  s.addText('Before building screens, I mapped the business as one luxury ecosystem — then designed each brand as a specialist house under TFO Private.', {
    x: 0.7, y: 1.5, w: 11.5, h: 0.7,
    fontSize: 15, fontFace: 'Arial', color: C.muted,
  });

  const steps = [
    { t: '1. One journey', d: 'Guests move from aircraft to chauffeur. The digital experience should feel connected — without mixing the brands into one confusing form.' },
    { t: '2. Three clear houses', d: 'Private = umbrella. Jets = aviation. Limousine = ground. Each site has its own job, voice, and conversion path.' },
    { t: '3. Blueprint first', d: 'I documented topology, booking flow, components, design tokens, and data shapes — so the build follows a clear system, not random pages.' },
    { t: '4. Luxury by restraint', d: 'Basalt + champagne, editorial type, calm motion, and a story-style booking ritual — premium without noise.' },
  ];

  steps.forEach((st, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const x = 0.7 + col * 6.2;
    const y = 2.4 + row * 2.0;
    card(s, { x, y, w: 5.9, h: 1.8, border: i === 0 ? C.champagne : C.line });
    s.addText(st.t, {
      x: x + 0.3, y: y + 0.25, w: 5.3, h: 0.35,
      fontSize: 16, fontFace: 'Arial', color: C.champagne, bold: true,
    });
    s.addText(st.d, {
      x: x + 0.3, y: y + 0.7, w: 5.3, h: 0.9,
      fontSize: 13, fontFace: 'Arial', color: C.soft,
    });
  });
  addFooter(s, 3);
}

// ─── 4. Blueprint title ─────────────────────────────────────
{
  const s = pptx.addSlide();
  addBg(s);
  s.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
    x: 0.7, y: 2.0, w: 5.2, h: 0.4,
    fill: { color: '292524' },
    line: { color: '92400E', width: 1 },
    rectRadius: 0.15,
  });
  s.addText('PRINCIPAL UI/UX ARCHITECT  ·  SYSTEM BLUEPRINT', {
    x: 0.85, y: 2.05, w: 5, h: 0.3,
    fontSize: 10, fontFace: 'Courier New', color: 'FCD34D',
  });
  s.addText('Multi-Site Digital\nEcosystem Architecture', {
    x: 0.7, y: 2.7, w: 11.5, h: 1.5,
    fontSize: 36, fontFace: 'Georgia', color: C.white,
  });
  s.addText('Blueprint integrating Iceland Limousine (ground) and TFO Jets (aviation) under a unified “From Runway to Road” luxury portal.', {
    x: 0.7, y: 4.4, w: 11, h: 0.7,
    fontSize: 15, fontFace: 'Arial', color: C.muted,
  });
  s.addText('This is the thinking layer behind the live demo.', {
    x: 0.7, y: 5.3, w: 11, h: 0.35,
    fontSize: 14, fontFace: 'Arial', color: C.champagne,
  });
  addFooter(s, 4);
}

// ─── 5. Blueprint pillars (tabs) ────────────────────────────
{
  const s = pptx.addSlide();
  addBg(s);
  eyebrow(s, 'BLUEPRINT STRUCTURE');
  s.addText('Five layers I designed before shipping', {
    x: 0.7, y: 0.85, w: 12, h: 0.5,
    fontSize: 28, fontFace: 'Georgia', color: C.white,
  });

  const tabs = [
    ['01', 'Ecosystem Topology', 'How the 3 sites relate and route guests'],
    ['02', 'Booking UX Flow', 'Step-by-step chauffeur booking ritual'],
    ['03', 'Component Architecture', 'Reusable building blocks across brands'],
    ['04', 'Design System', 'Colors, type, and luxury visual rules'],
    ['05', 'Data Shapes', 'What a booking / enquiry carries'],
  ];

  tabs.forEach((t, i) => {
    const y = 1.6 + i * 0.95;
    card(s, { x: 0.7, y, w: 12, h: 0.85, fill: C.panel, border: i === 0 ? C.champagne : C.line });
    s.addText(t[0], {
      x: 0.95, y: y + 0.22, w: 0.8, h: 0.4,
      fontSize: 18, fontFace: 'Georgia', color: C.champagne,
    });
    s.addText(t[1], {
      x: 2.0, y: y + 0.12, w: 10, h: 0.35,
      fontSize: 16, fontFace: 'Arial', color: C.white, bold: true,
    });
    s.addText(t[2], {
      x: 2.0, y: y + 0.45, w: 10, h: 0.3,
      fontSize: 13, fontFace: 'Arial', color: C.muted,
    });
  });
  addFooter(s, 5);
}

// ─── 6. Ecosystem topology (from screenshot) ────────────────
{
  const s = pptx.addSlide();
  addBg(s);
  eyebrow(s, '1 · ECOSYSTEM TOPOLOGY & LAYOUTS');
  s.addText('Multi-site sitemap & routing', {
    x: 0.7, y: 0.8, w: 12, h: 0.45,
    fontSize: 28, fontFace: 'Georgia', color: C.white,
  });

  const sites = [
    {
      badge: 'UMBRELLA PORTAL',
      title: 'TFO Private Landing',
      body: 'High-converting luxury umbrella brand. Merges private aviation and VIP ground into one synchronized experience.',
      bullets: ['Hero — “The Journey, Handled”', '4 Global Trust Indicators', 'Dual Split-Card Navigation', 'Runway-to-Road Simulator'],
      gold: true,
    },
    {
      badge: 'SUB-SITE 1 · GROUND',
      title: 'Iceland Limousine',
      body: 'Modernized VIP ground platform — interactive luxury booking instead of flat legacy pages.',
      bullets: ['Step-by-step Booking Engine', 'AWD Iceland Fleet Specs', 'Private Day Tours', 'KEF / BIRK Tarmac Escort'],
      gold: false,
    },
    {
      badge: 'SUB-SITE 2 · AVIATION',
      title: 'TFO Jets',
      body: 'Private jet charters, transatlantic ferry flights, and oceanic flight dispatch operations.',
      bullets: ['Route Distance Estimator', 'Oceanic Ferry Logistics', 'ULR & Light Jet Focus', 'Crew Placement Support'],
      gold: false,
    },
  ];

  sites.forEach((site, i) => {
    const x = 0.55 + i * 4.2;
    card(s, {
      x, y: 1.45, w: 4.0, h: 5.2,
      border: site.gold ? C.champagne : C.line,
      fill: C.card,
    });
    s.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
      x: x + 0.25, y: 1.65, w: site.gold ? 2.0 : 2.55, h: 0.32,
      fill: { color: site.gold ? C.champagne : '1E293B' },
      rectRadius: 0.05,
    });
    s.addText(site.badge, {
      x: x + 0.25, y: 1.68, w: 3.4, h: 0.28,
      fontSize: 9, fontFace: 'Arial', bold: true,
      color: site.gold ? C.basalt : C.white, charSpacing: 1,
    });
    s.addText(site.title, {
      x: x + 0.25, y: 2.15, w: 3.5, h: 0.55,
      fontSize: 18, fontFace: 'Georgia', color: C.white,
    });
    s.addText(site.body, {
      x: x + 0.25, y: 2.75, w: 3.5, h: 1.2,
      fontSize: 12, fontFace: 'Arial', color: C.muted,
    });
    site.bullets.forEach((b, bi) => {
      s.addText('●  ' + b, {
        x: x + 0.25, y: 4.1 + bi * 0.45, w: 3.5, h: 0.4,
        fontSize: 12, fontFace: 'Arial', color: C.soft,
      });
    });
  });
  addFooter(s, 6);
}

// ─── 7. Strategic pillars ───────────────────────────────────
{
  const s = pptx.addSlide();
  addBg(s);
  eyebrow(s, 'WHY THIS STRUCTURE WORKS');
  s.addText('Built for continuity across runway and road', {
    x: 0.7, y: 0.85, w: 12, h: 0.5,
    fontSize: 26, fontFace: 'Georgia', color: C.white,
  });

  const pillars = [
    {
      t: 'Connected guest experience',
      d: 'Preferences and journey details can travel with the guest across aviation and ground — discreet, not fragmented.',
    },
    {
      t: 'Instant brand switching',
      d: 'Moving between Private, Jets, and Limousine feels seamless — no broken flow, no lost enquiry mid-way.',
    },
    {
      t: 'Clear pricing language',
      d: 'Transparent multi-currency presentation (USD, EUR, GBP, ISK) so international guests always know what they’re looking at.',
    },
  ];

  pillars.forEach((p, i) => {
    const x = 0.7 + i * 4.15;
    card(s, { x, y: 1.8, w: 3.95, h: 4.2, fill: C.panel });
    s.addShape(pptx.shapes.OVAL, {
      x: x + 0.35, y: 2.15, w: 0.55, h: 0.55,
      fill: { color: C.champagne },
    });
    s.addText(String(i + 1), {
      x: x + 0.35, y: 2.25, w: 0.55, h: 0.4,
      fontSize: 16, fontFace: 'Arial', color: C.basalt, align: 'center', bold: true,
    });
    s.addText(p.t, {
      x: x + 0.35, y: 3.0, w: 3.25, h: 1.0,
      fontSize: 18, fontFace: 'Georgia', color: C.white,
    });
    s.addText(p.d, {
      x: x + 0.35, y: 4.2, w: 3.25, h: 1.4,
      fontSize: 13, fontFace: 'Arial', color: C.muted,
    });
  });
  addFooter(s, 7);
}

// ─── 8. Booking UX ──────────────────────────────────────────
{
  const s = pptx.addSlide();
  addBg(s);
  eyebrow(s, '2 · CHAUFFEUR BOOKING UX FLOW');
  s.addText('Iceland Limousine — booking as a story', {
    x: 0.7, y: 0.8, w: 12, h: 0.45,
    fontSize: 26, fontFace: 'Georgia', color: C.white,
  });
  s.addText('Instead of a long form, guests move through a calm, guided ritual.', {
    x: 0.7, y: 1.35, w: 12, h: 0.35,
    fontSize: 14, fontFace: 'Arial', color: C.muted,
  });

  const steps = [
    ['01', 'Welcome', 'Set the tone — Iceland story, one step at a time'],
    ['02', 'Vehicle', 'Choose the car suited to the terrain'],
    ['03', 'Service', 'Transfer, hourly hire, or day tour'],
    ['04', 'Schedule', 'Pick date & time on the calendar'],
    ['05', 'Details', 'Who, where, and special requests'],
    ['06', 'Confirm', 'Reference issued — concierge follows up'],
  ];

  steps.forEach((st, i) => {
    const col = i % 3;
    const row = Math.floor(i / 3);
    const x = 0.7 + col * 4.15;
    const y = 1.95 + row * 2.25;
    card(s, { x, y, w: 3.95, h: 2.05 });
    s.addText(st[0], {
      x: x + 0.25, y: y + 0.25, w: 3.4, h: 0.35,
      fontSize: 14, fontFace: 'Arial', color: C.champagne, bold: true,
    });
    s.addText(st[1], {
      x: x + 0.25, y: y + 0.65, w: 3.4, h: 0.4,
      fontSize: 18, fontFace: 'Georgia', color: C.white,
    });
    s.addText(st[2], {
      x: x + 0.25, y: y + 1.15, w: 3.4, h: 0.6,
      fontSize: 13, fontFace: 'Arial', color: C.muted,
    });
  });
  addFooter(s, 8);
}

// ─── 9. Design system ───────────────────────────────────────
{
  const s = pptx.addSlide();
  addBg(s);
  eyebrow(s, '4 · LUXURY DESIGN SYSTEM');
  s.addText('Visual language shared across all three sites', {
    x: 0.7, y: 0.8, w: 12, h: 0.45,
    fontSize: 26, fontFace: 'Georgia', color: C.white,
  });

  const colors = [
    ['080B0E', 'Icelandic Basalt', true],
    ['C5A880', 'Champagne Gold', false],
    ['0D1219', 'Glass Container', true],
    ['161E2A', 'Focus / Hover', true],
  ];

  colors.forEach((c, i) => {
    const x = 0.7 + i * 3.15;
    s.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
      x, y: 1.6, w: 2.95, h: 2.2,
      fill: { color: c[0] },
      line: { color: C.line, width: 1 },
      rectRadius: 0.08,
    });
    s.addText('#' + c[0], {
      x: x + 0.2, y: 2.85, w: 2.55, h: 0.3,
      fontSize: 13, fontFace: 'Arial', color: c[2] ? C.white : C.basalt, bold: true,
    });
    s.addText(c[1], {
      x: x + 0.2, y: 3.2, w: 2.55, h: 0.3,
      fontSize: 12, fontFace: 'Arial', color: c[2] ? C.muted : '3F3A32',
    });
  });

  card(s, { x: 0.7, y: 4.15, w: 6.0, h: 2.2 });
  s.addText('Display type', {
    x: 0.95, y: 4.4, w: 5.5, h: 0.3,
    fontSize: 12, fontFace: 'Arial', color: C.champagne, bold: true,
  });
  s.addText('Cormorant Garamond / Cinzel', {
    x: 0.95, y: 4.8, w: 5.5, h: 0.4,
    fontSize: 20, fontFace: 'Georgia', color: C.white,
  });
  s.addText('Editorial headlines for a private-house feel.', {
    x: 0.95, y: 5.4, w: 5.5, h: 0.5,
    fontSize: 13, fontFace: 'Arial', color: C.muted,
  });

  card(s, { x: 6.95, y: 4.15, w: 5.75, h: 2.2 });
  s.addText('Body & UI', {
    x: 7.2, y: 4.4, w: 5.3, h: 0.3,
    fontSize: 12, fontFace: 'Arial', color: C.champagne, bold: true,
  });
  s.addText('Plus Jakarta Sans', {
    x: 7.2, y: 4.8, w: 5.3, h: 0.4,
    fontSize: 20, fontFace: 'Arial', color: C.white,
  });
  s.addText('Clean, readable interface type for booking and navigation.', {
    x: 7.2, y: 5.4, w: 5.3, h: 0.5,
    fontSize: 13, fontFace: 'Arial', color: C.muted,
  });
  addFooter(s, 9);
}

// ─── 10. Scope ──────────────────────────────────────────────
{
  const s = pptx.addSlide();
  addBg(s);
  eyebrow(s, 'SCOPE OF WORK');
  s.addText('What’s included in the package', {
    x: 0.7, y: 0.85, w: 12, h: 0.5,
    fontSize: 30, fontFace: 'Georgia', color: C.white,
  });

  const scope = [
    ['01', 'Development of 3 websites', 'TFO Private, TFO Jets, and Iceland Limousine — full design & build, mobile-ready, production deployment.'],
    ['02', '3 months post-deployment support', '5 minor changes + 1 major change included. After that, further work is charged separately.'],
    ['03', 'Domain transition (old → new)', 'Support moving to the new websites. Client provides domain access/approval so we complete the switch together.'],
  ];

  scope.forEach((item, i) => {
    const y = 1.6 + i * 1.55;
    card(s, { x: 0.7, y, w: 12, h: 1.4 });
    s.addText(item[0], {
      x: 1.0, y: y + 0.35, w: 1.0, h: 0.6,
      fontSize: 24, fontFace: 'Georgia', color: C.champagne,
    });
    s.addText(item[1], {
      x: 2.3, y: y + 0.25, w: 9.8, h: 0.4,
      fontSize: 18, fontFace: 'Arial', color: C.white, bold: true,
    });
    s.addText(item[2], {
      x: 2.3, y: y + 0.7, w: 9.8, h: 0.5,
      fontSize: 14, fontFace: 'Arial', color: C.muted,
    });
  });
  addFooter(s, 10);
}

// ─── 11. Investment ─────────────────────────────────────────
{
  const s = pptx.addSlide();
  addBg(s);
  eyebrow(s, 'INVESTMENT');
  s.addText('Package pricing', {
    x: 0.7, y: 0.85, w: 12, h: 0.5,
    fontSize: 30, fontFace: 'Georgia', color: C.white,
  });

  card(s, { x: 0.7, y: 1.6, w: 7.2, h: 4.5, border: C.champagne, fill: '12100E' });
  s.addText('PACKAGE INVESTMENT', {
    x: 1.1, y: 2.0, w: 6.4, h: 0.35,
    fontSize: 12, fontFace: 'Arial', color: C.champagne, bold: true, charSpacing: 2,
  });
  s.addText('ISK 1,800,000', {
    x: 1.1, y: 2.55, w: 6.4, h: 0.9,
    fontSize: 44, fontFace: 'Georgia', color: C.white,
  });
  s.addText('Reference: ₱900,000', {
    x: 1.1, y: 3.5, w: 6.4, h: 0.4,
    fontSize: 16, fontFace: 'Arial', color: C.muted,
  });
  s.addText('Full ecosystem delivery for all three websites — Private, Jets, and Iceland Limousine.', {
    x: 1.1, y: 4.3, w: 6.4, h: 0.9,
    fontSize: 14, fontFace: 'Arial', color: C.soft,
  });

  card(s, { x: 8.2, y: 1.6, w: 4.5, h: 4.5 });
  s.addText('COMPARISON', {
    x: 8.55, y: 2.0, w: 3.9, h: 0.3,
    fontSize: 11, fontFace: 'Arial', color: C.champagne, bold: true, charSpacing: 2,
  });
  s.addText('Standard per site', {
    x: 8.55, y: 2.45, w: 3.9, h: 0.3,
    fontSize: 13, fontFace: 'Arial', color: C.muted,
  });
  s.addText('ISK 2,400,000', {
    x: 8.55, y: 2.75, w: 3.9, h: 0.35,
    fontSize: 16, fontFace: 'Arial', color: C.white, bold: true,
  });
  s.addText('₱1,200,000 each', {
    x: 8.55, y: 3.1, w: 3.9, h: 0.25,
    fontSize: 11, fontFace: 'Arial', color: C.muted,
  });
  s.addText('Standard (3 sites)', {
    x: 8.55, y: 3.5, w: 3.9, h: 0.3,
    fontSize: 13, fontFace: 'Arial', color: C.muted,
  });
  s.addText('ISK 7,200,000', {
    x: 8.55, y: 3.8, w: 3.9, h: 0.35,
    fontSize: 16, fontFace: 'Arial', color: C.white, bold: true,
  });
  s.addShape(pptx.shapes.RECTANGLE, {
    x: 8.55, y: 4.3, w: 3.8, h: 0.01, fill: { color: C.line },
  });
  s.addText('This package', {
    x: 8.55, y: 4.5, w: 3.9, h: 0.3,
    fontSize: 13, fontFace: 'Arial', color: C.muted,
  });
  s.addText('ISK 1,800,000', {
    x: 8.55, y: 4.85, w: 3.9, h: 0.35,
    fontSize: 18, fontFace: 'Arial', color: C.champagne, bold: true,
  });
  s.addText('Friendship rate for all 3 sites.', {
    x: 8.55, y: 5.35, w: 3.9, h: 0.4,
    fontSize: 12, fontFace: 'Arial', color: C.soft,
  });
  addFooter(s, 11);
}

// ─── 12. Payment ────────────────────────────────────────────
{
  const s = pptx.addSlide();
  addBg(s);
  eyebrow(s, 'PAYMENT SCHEDULE');
  s.addText('Suggested milestones', {
    x: 0.7, y: 0.85, w: 12, h: 0.5,
    fontSize: 30, fontFace: 'Georgia', color: C.white,
  });

  const pays = [
    ['40%', 'ISK 720,000', 'On approval / kickoff', 'Project confirmed and delivery locked'],
    ['40%', 'ISK 720,000', 'On staging sign-off', 'Sites reviewed and accepted before launch'],
    ['20%', 'ISK 360,000', 'On go-live & domain switch', 'Websites live on chosen domain(s)'],
  ];

  pays.forEach((p, i) => {
    const x = 0.7 + i * 4.15;
    card(s, { x, y: 1.7, w: 3.95, h: 4.3 });
    s.addText(p[0], {
      x: x + 0.3, y: 2.1, w: 3.35, h: 0.6,
      fontSize: 36, fontFace: 'Georgia', color: C.champagne,
    });
    s.addText(p[1], {
      x: x + 0.3, y: 2.85, w: 3.35, h: 0.45,
      fontSize: 18, fontFace: 'Arial', color: C.white, bold: true,
    });
    s.addText(p[2], {
      x: x + 0.3, y: 3.55, w: 3.35, h: 0.7,
      fontSize: 16, fontFace: 'Georgia', color: C.white,
    });
    s.addText(p[3], {
      x: x + 0.3, y: 4.5, w: 3.35, h: 0.9,
      fontSize: 13, fontFace: 'Arial', color: C.muted,
    });
  });
  addFooter(s, 12);
}

// ─── 13. Next steps ─────────────────────────────────────────
{
  const s = pptx.addSlide();
  addBg(s);
  eyebrow(s, 'NEXT STEPS');
  s.addText('From Monday to launch', {
    x: 0.7, y: 0.85, w: 12, h: 0.5,
    fontSize: 30, fontFace: 'Georgia', color: C.white,
  });

  const next = [
    ['01', 'Review the live demo', 'Walk through Private, Jets, and Limousine — including the booking story.'],
    ['02', 'Confirm scope & investment', 'Agree the package: ISK 1,800,000 for the full ecosystem.'],
    ['03', 'Provide domain access', 'Share registrar details when ready so transition can be scheduled.'],
    ['04', 'Launch', 'Go live, then begin the 3-month support window.'],
  ];

  next.forEach((n, i) => {
    const y = 1.55 + i * 1.2;
    s.addText(n[0], {
      x: 0.7, y: y + 0.15, w: 1.1, h: 0.5,
      fontSize: 22, fontFace: 'Georgia', color: C.champagne,
    });
    s.addText(n[1], {
      x: 2.0, y, w: 10.5, h: 0.4,
      fontSize: 18, fontFace: 'Arial', color: C.white, bold: true,
    });
    s.addText(n[2], {
      x: 2.0, y: y + 0.4, w: 10.5, h: 0.4,
      fontSize: 14, fontFace: 'Arial', color: C.muted,
    });
    if (i < next.length - 1) {
      s.addShape(pptx.shapes.RECTANGLE, {
        x: 2.0, y: y + 0.95, w: 10.5, h: 0.01, fill: { color: C.line },
      });
    }
  });
  addFooter(s, 13);
}

// ─── 14. Close ──────────────────────────────────────────────
{
  const s = pptx.addSlide();
  addBg(s);
  s.addShape(pptx.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.12, h: 7.5, fill: { color: C.champagne },
  });
  s.addText('Ready when you are.', {
    x: 0.9, y: 2.4, w: 11.5, h: 0.8,
    fontSize: 40, fontFace: 'Georgia', color: C.white,
  });
  s.addText('Three brands. One ecosystem. Built with intention —\nfrom blueprint to live demo.', {
    x: 0.9, y: 3.4, w: 11, h: 0.9,
    fontSize: 18, fontFace: 'Arial', color: C.muted,
  });
  s.addText('TFO PRIVATE  ·  FROM RUNWAY TO ROAD', {
    x: 0.9, y: 4.7, w: 11, h: 0.4,
    fontSize: 13, fontFace: 'Arial', color: C.champagne, bold: true, charSpacing: 3,
  });
  addFooter(s, 14);
}

const out = path.join(__dirname, 'TFO-Private-Proposal.pptx');
pptx.writeFile({ fileName: out }).then(() => {
  console.log('Wrote', out);
}).catch((err) => {
  console.error(err);
  process.exit(1);
});
