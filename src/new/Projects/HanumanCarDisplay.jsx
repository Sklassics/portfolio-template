// src/project_view_new.jsx — Advanced Home v3
// Enhanced header animations & alignment + top carousel + rich descriptions (single-file, no deps)
import React, { useEffect, useMemo, useRef, useState } from "react";
import hanuman11 from '../../assets/hanuman11.jpg';
import hanuman22 from '../../assets/hanuman22.jpg';
import hanuman33 from '../../assets/hanuman33.jpg';
import hanuman10 from '../../assets/hanuman10.jpg';
import hanuman44 from '../../assets/hanuman44.jpg';
import hanuman55 from '../../assets/hanuman55.jpg';
import hanuman66 from '../../assets/hanuman66.jpg';
import hanuman88 from '../../assets/hanuman88.jpg';



/* ---------- Styles (inline) ---------- */
const styles = `
  :root {
    --bg:#000; --panel:#0b0b0b; --text:#f6f3ff; --muted:#b7a9d9;
    --purple:#a855f7; --purple-2:#7c3aed; --border:rgba(168,85,247,0.35);
    --shadow:0 30px 80px rgba(0,0,0,.65);
    --success:#22c55e; --warning:#eab308; --danger:#ef4444;
  }
  *{box-sizing:border-box}
  html,body,#root{height:100%}
  body{margin:0;background:#000;color:var(--text);font-family:Inter,system-ui,-apple-system,Segoe UI,Roboto,Arial}

  /* Wrapper ensures full height + centered */
.wrap {
  min-height: 100vh;
  display: grid;
  place-items: center;
  padding: 28px;
}

/* Panel base */
.panel {
  width: min(1280px, 95vw);
  background: #0b0b0b;
  border: 1px solid var(--border);
  border-radius: 50px;
  box-shadow: var(--shadow);
  padding: 0;
  position: relative;
  overflow: hidden;
}

/* Gradient top accent */
.panel::before {
  content:"";
  position:absolute;
  left:0; right:0; top:0;
  height:2px;
  background:linear-gradient(90deg, var(--purple), var(--purple-2));
  opacity:.9;
}

/* -----------------------------------
   Device simulation wrapper classes
----------------------------------- */
.panel.desktop {
  /* Desktop wide: keep original large scaling */
  width: min(2000px, 90vw);
}

.panel.tablet {
  /* Tablet friendly width */
  width: min(900px, 94vw);
  border-radius: 20px;
}

.panel.mobile {
  /* Mobile narrow version */
  width: min(420px, 96vw);
  border-radius: 24px;
}

/* -----------------------------------
   Automatic Responsive Breakpoints
----------------------------------- */

/* Tablets (≤1024px but >640px) */
@media (max-width:1024px) {
  .panel {
    width: 95vw;           /* Fill most of screen width */
    border-radius: 18px;
  }
  .wrap {
    padding: 20px;
  }
}

/* Mobiles (≤640px) */
@media (max-width:640px) {
  .panel {
    width: 98vw;           /* nearly full screen */
    border-radius: 16px;   /* smaller radius for compact look */
  }
  .wrap {
    padding: 12px;
  }
}


  /* Topbar */
  .topbar{position:sticky;top:0;z-index:20;background:linear-gradient(180deg,#0b0b0b 70%, rgba(11,11,11,0));
    border-bottom:1px solid var(--border);backdrop-filter:saturate(120%)}
  .tb-inner{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:12px 18px}
  .brand{display:flex;align-items:center;gap:10px}
  .logo{width:28px;height:28px;border-radius:8px;background:linear-gradient(135deg,var(--purple),var(--purple-2));
    box-shadow:0 6px 18px rgba(168,85,247,.35)}
  .brand h1{margin:0;font-size:18px;letter-spacing:.2px}
  .navlinks{display:flex;gap:8px;flex-wrap:wrap;overflow:auto}
  .alink{padding:8px 12px;border-radius:999px;border:1px solid var(--border);background:#0a0a0a;color:var(--muted);
    cursor:pointer;font-weight:700;white-space:nowrap}
  .alink:hover{box-shadow:0 0 0 3px rgba(168,85,247,.15)}

  /* Header area (enhanced) */
  .header{padding:18px 18px 8px}
  .header-grid{display:grid;grid-template-columns:1.2fr auto;align-items:end;gap:18px}
  @media (max-width:860px){ .header-grid{grid-template-columns:1fr;align-items:stretch;gap:12px} }

  .title{margin:0;letter-spacing:-.02em;display:flex;align-items:center;gap:10px}
  .title .ink{font-size:clamp(26px,3.4vw,38px);background:linear-gradient(90deg,#fff, #d7c9ff 40%, #b48cff 75%, #fff);
    -webkit-background-clip:text;background-clip:text;color:transparent;filter:drop-shadow(0 6px 28px rgba(168,85,247,.18))}
  .title::after{content:"";height:2px;width:0;display:block;background:linear-gradient(90deg,var(--purple),var(--purple-2));
    border-radius:2px;margin-top:6px;transition:width .6s ease .1s}
  .intro.in .title::after{width:92%}

  .pip{display:inline-block;width:10px;height:10px;border-radius:50%;background:var(--purple);
    box-shadow:0 0 0 0 rgba(168,85,247,.45);animation:pulse 2.2s infinite ease-in-out}
  @keyframes pulse{0%{box-shadow:0 0 0 0 rgba(168,85,247,.45)}70%{box-shadow:0 0 0 10px rgba(168,85,247,0)}100%{box-shadow:0 0 0 0 rgba(168,85,247,0)}}

  .lead{margin:10px 0 0;color:var(--muted);max-width:70ch;line-height:1.6;text-wrap:balance}
  .lead strong,.hl{background:linear-gradient(90deg, rgba(168,85,247,.18), rgba(168,85,247,.07));
    border:1px solid var(--border);padding:2px 6px;border-radius:8px;color:#eae3ff}
  .lead-rail{position:relative;padding-left:14px}
  .lead-rail::before{content:"";position:absolute;left:0;top:.35em;bottom:.35em;width:3px;border-radius:2px;
    background:linear-gradient(180deg,var(--purple),var(--purple-2))}

  /* Staggered reveal */
  .intro .title, .intro .lead, .toolbar{opacity:0;transform:translateY(10px)}
  .intro.in .title{opacity:1;transform:none;transition:opacity .5s ease, transform .5s ease}
  .intro.in .lead{opacity:1;transform:none;transition:opacity .6s ease .08s, transform .6s ease .08s}
  .toolbar.in{opacity:1;transform:none;transition:opacity .6s ease .16s, transform .6s ease .16s}
  @media (prefers-reduced-motion: reduce){
    .intro .title, .intro .lead, .toolbar{opacity:1;transform:none}
    .title::after{transition:none}
    .pip{animation:none}
  }

  .toolbar{display:flex;gap:10px;align-items:center;flex-wrap:wrap}
  .control{display:flex;align-items:center;gap:8px;background:#0a0a0a;border:1px solid var(--border);
    border-radius:12px;padding:8px 10px}
  .control input,.control select{background:transparent;border:none;color:var(--text);outline:none}
  .control input::placeholder{color:#9a8cc2}
  .btn{padding:8px 12px;border-radius:12px;border:1px solid var(--border);background:transparent;color:var(--purple);
    cursor:pointer;font-weight:700}
  .btn:hover{box-shadow:0 0 0 3px rgba(168,85,247,.15), 0 8px 24px rgba(0,0,0,.4)}
  .badge{padding:6px 10px;border:1px solid var(--border);border-radius:999px;background:#0a0a0a;color:var(--muted);font-weight:700}

  /* Section shells */
  .section{padding:12px 18px 18px}
  .section + .section{padding-top:8px}
  .section-h{display:flex;align-items:center;justify-content:space-between;margin:6px 0 10px}
  .section-h h3{margin:0;font-size:18px;letter-spacing:.3px}
  .section-h .hint{color:var(--muted);font-size:13px}
  .divider{height:1px;background:linear-gradient(90deg,transparent,rgba(168,85,247,.35),transparent);border:none;margin:6px 0 12px}

  /* TOP CAROUSEL */
  .carousel{position:relative;border-radius:16px;border:1px solid var(--border);background:#0a0a0a;overflow:hidden}
  .car-grid{display:grid;grid-template-columns:7fr 5fr;gap:12px;padding:12px}
  .track{display:flex;gap:12px;overflow:auto;padding:4px;scroll-snap-type:x mandatory;scroll-behavior:smooth}
  .c-card{min-width:clamp(260px,30vw,380px);aspect-ratio:16/10;position:relative;border-radius:14px;overflow:hidden;border:1px solid var(--border);
    background:#080808;scroll-snap-align:center;cursor:pointer;transition:transform .25s ease, box-shadow .3s ease}
  .c-card:hover{transform:translateY(-2px); box-shadow:0 16px 42px rgba(0,0,0,.5), 0 0 0 3px rgba(168,85,247,.18) inset}
  .c-card.active{outline:2px solid var(--purple)}
  .c-img{position:absolute;inset:0}
  .c-img img{width:100%;height:100%;object-fit:cover}
  .c-cap{position:absolute;left:0;right:0;bottom:0;padding:10px 12px;background:linear-gradient(180deg,transparent,rgba(0,0,0,.85))}
  .c-title{margin:0;font-weight:900}
  .c-desc{margin:2px 0 0;font-size:12px;color:var(--muted)}
  .c-tag{position:absolute;left:10px;top:10px;padding:4px 8px;border-radius:999px;background:#00000090;border:1px solid var(--border);font-size:12px;color:var(--purple);font-weight:700}

  .aside{border:1px solid var(--border);border-radius:14px;padding:12px;background:#0a0a0a;display:grid;grid-template-rows:auto 1fr auto;gap:8px}
  .aside h4{margin:0 0 2px}
  .meta{display:flex;gap:8px;flex-wrap:wrap}
  .chip{padding:8px 12px;border-radius:999px;border:1px solid var(--border);background:transparent;color:var(--purple);
    cursor:pointer;font-weight:700;letter-spacing:.2px;transition: box-shadow .2s ease, transform .12s ease}
  .chip:hover{box-shadow:0 0 0 3px rgba(168,85,247,.15), 0 8px 24px rgba(0,0,0,.4)}
  .chip:active{transform: translateY(1px) scale(.98)}
  .clamp-4{display:-webkit-box;-webkit-line-clamp:4;-webkit-box-orient:vertical;overflow:hidden}
  .read{background:transparent;border:1px solid var(--border);border-radius:10px;padding:6px 10px;color:var(--muted);cursor:pointer}

  .car-nav{position:absolute;inset:0;display:flex;align-items:center;justify-content:space-between;pointer-events:none}
  .car-btn{pointer-events:auto;width:42px;height:42px;border-radius:999px;border:1px solid var(--border);background:#0a0a0a;color:var(--purple);font-weight:800;margin:0 8px}
  .dots{display:flex;gap:8px;justify-content:center;padding:8px}
  .dot{width:8px;height:8px;border-radius:50%;background:transparent;border:1px solid var(--border);opacity:.9}
  .dot.active{background:var(--purple); border-color:var(--purple)}

  @media (max-width: 900px){ .car-grid{grid-template-columns:1fr} }

  /* Hero slider */
  .hero{position:relative;border-radius:16px;overflow:hidden;border:1px solid var(--border)}
  .hero-inner{position:relative;aspect-ratio:16/9;background:#050505}
  .slide{position:absolute;inset:0;opacity:0;transition:opacity .45s ease}
  .slide.active{opacity:1}
  .slide img{width:100%;height:100%;display:block;object-fit:cover}
  .fade-shadow{position:absolute;inset:0;pointer-events:none;background:linear-gradient(180deg, rgba(0,0,0,0.35), rgba(0,0,0,0) 32%, rgba(0,0,0,0) 68%, rgba(0,0,0,0.55))}
  .hero-info{position:absolute;left:16px;bottom:16px;padding:10px 12px;border-radius:12px;background:#0000008a;border:1px solid var(--border);max-width:min(560px,80%)}
  .hero-title{margin:0 0 4px;font-weight:800}
  .hero-desc{margin:0;color:var(--muted)}
  .hero-cta{position:absolute;left:16px;top:16px;display:flex;gap:8px;flex-wrap:wrap}
  .pill{padding:8px 12px;border:1px solid var(--border);border-radius:999px;background:#0a0a0a;color:var(--text);font-weight:800;cursor:pointer}
  .pill.filled{background:linear-gradient(135deg,var(--purple),var(--purple-2));border-color:transparent}

  .nav{position:absolute;inset:0;display:flex;align-items:center;justify-content:space-between;padding:0 8px}
  .nav button{width:42px;height:42px;border-radius:999px;border:1px solid var(--border);background:transparent;color:var(--purple);
    cursor:pointer;font-weight:800;transition: box-shadow .2s ease, transform .12s ease}
  .nav button:hover{box-shadow:0 0 0 3px rgba(168,85,247,.2), 0 10px 28px rgba(0,0,0,.45)}
  .nav button:active{transform: translateY(1px) scale(.98)}

  .progress{position:absolute;left:0;right:0;bottom:0;height:3px;background:rgba(255,255,255,.06)}
  .bar{width:0;height:100%;background:linear-gradient(90deg,var(--purple),var(--purple-2));transition:width .1s linear}

  .thumbs{display:flex;gap:8px;overflow:auto;padding:8px 6px 0}
  .thumb{min-width:110px;aspect-ratio:16/10;border-radius:10px;overflow:hidden;border:1px solid var(--border);opacity:.85;cursor:pointer;background:#0a0a0a;position:relative}
  .thumb.active{opacity:1;border-color:var(--purple)}
  .thumb img{width:100%;height:100%;object-fit:cover;display:block}
  .thumb::after{content:attr(data-t);position:absolute;left:6px;bottom:6px;font-size:11px;padding:3px 6px;border-radius:8px;background:#000000a6;border:1px solid var(--border);color:var(--muted)}

  /* Overview / Stats */
  .stats{display:grid;grid-template-columns:repeat(12,1fr);gap:12px}
  .stat{grid-column:span 3;background:#0a0a0a;border:1px solid var(--border);border-radius:14px;padding:12px}
  .stat h4{margin:0 0 2px;font-size:14px;color:var(--muted)}
  .stat p{margin:0;font-size:22px;font-weight:900}
  .ok{color:var(--success)} .warn{color:var(--warning)} .bad{color:var(--danger)}
  @media (max-width:900px){ .stat{grid-column:span 6} }
  @media (max-width:640px){ .stat{grid-column:span 12} }

  /* Sections grid */
  .sections{display:grid;grid-template-columns:repeat(12,1fr);gap:12px}
  .section-card{grid-column:span 4;background:#0a0a0a;border:1px solid var(--border);border-radius:14px;padding:12px;position:relative;overflow:hidden}
  .section-card h4{margin:0 0 4px;display:flex;align-items:center;gap:8px}
  .section-card p{margin:0;color:var(--muted)}
  .section-card .act{position:absolute;right:12px;bottom:12px}
  .section-card .act .btn{padding:6px 10px}
  @media (max-width:900px){ .section-card{grid-column:span 6} }
  @media (max-width:640px){ .section-card{grid-column:span 12} }

  /* Grid Gallery */
  .grid{display:grid;grid-template-columns:repeat(12,1fr);gap:12px;margin-top:16px}
  .grid.compact{gap:8px}
  .card{position:relative;border:1px solid var(--border);border-radius:14px;overflow:hidden;cursor:pointer;background:#0a0a0a;transition: box-shadow .3s ease, transform .25s ease}
  .card:hover{box-shadow:0 16px 42px rgba(0,0,0,.5), 0 0 0 3px rgba(168,85,247,.18) inset; transform: translateY(-2px)}
  .card img{width:100%;height:100%;object-fit:cover;display:block}
  .tag{position:absolute;left:10px;top:10px;padding:4px 8px;border-radius:999px;background:#00000090;border:1px solid var(--border);font-size:12px;color:var(--purple);font-weight:700}
  .cap{position:absolute;left:0;right:0;bottom:0;padding:10px 12px;background:linear-gradient(180deg, transparent, rgba(0,0,0,.85))}
  .cap .t{font-weight:800;margin:0}
  .cap .d{margin:2px 0 0;font-size:12px;color:var(--muted)}

  .span-6{grid-column:span 6} .span-4{grid-column:span 4} .span-8{grid-column:span 8} .span-12{grid-column:span 12}
  .h-200{height:200px} .h-260{height:260px} .h-320{height:320px}

  /* ---------- Responsive: automatic (CSS breakpoints) ---------- */
  @media (max-width: 1024px){
    .title .ink{font-size:clamp(24px,3.2vw,32px)}
    .hero-inner{aspect-ratio:16/10}
  }
  @media (max-width: 900px){
    .span-6{grid-column:span 12} .span-8{grid-column:span 12} .span-4{grid-column:span 6}
    .h-320{height:260px}
  }
  @media (max-width: 640px){
    .grid{grid-template-columns:repeat(6,1fr)}
    .span-4{grid-column:span 6} .span-6{grid-column:span 6} .span-8{grid-column:span 6}
    .thumbs{display:none} /* hide thumbs on small screens */
    .hero-inner{aspect-ratio:1/1}
    .nav button{width:38px;height:38px}
    .control{padding:6px 8px}
    .btn{padding:6px 9px}
  }

  /* ---------- Forced modes via .desktop / .mobile ---------- */
  .panel.desktop .grid{grid-template-columns:repeat(12,1fr)}
  .panel.desktop .thumbs{display:flex}
  .panel.desktop .hero-inner{aspect-ratio:16/9}

  .panel.mobile .grid{grid-template-columns:repeat(6,1fr)}
  .panel.mobile .span-4{grid-column:span 6}
  .panel.mobile .span-6{grid-column:span 6}
  .panel.mobile .span-8{grid-column:span 6}
  .panel.mobile .thumbs{display:none}
  .panel.mobile .hero-inner{aspect-ratio:1/1}
  .panel.mobile .title .ink{font-size:22px}
  .panel.mobile .control{padding:6px 8px}
  .panel.mobile .btn{padding:6px 9px}

  /* Lightbox */
  .lightbox{position:fixed;inset:0;background:rgba(0,0,0,.75);display:flex;align-items:center;justify-content:center;z-index:50}
  .lb-inner{width:min(1100px,92vw);max-height:88vh;background:#0b0b0b;border:1px solid var(--border);border-radius:16px;box-shadow:var(--shadow);
    overflow:hidden;display:grid;grid-template-rows:auto 1fr}
  .lb-head{display:flex;justify-content:space-between;align-items:center;padding:10px 12px;border-bottom:1px solid var(--border)}
  .lb-title{margin:0;font-weight:800}
  .lb-close{cursor:pointer;border:1px solid var(--border);background:transparent;color:var(--purple);border-radius:8px;padding:6px 10px;font-weight:800}
  .lb-media{position:relative;background:#000;display:grid;place-items:center}
  .lb-media img{max-width:100%;max-height:82vh;object-fit:contain}
  .lb-nav{position:absolute;left:0;right:0;top:50%;display:flex;justify-content:space-between;transform:translateY(-50%);padding:0 8px}
  .lb-btn{width:42px;height:42px;border-radius:999px;border:1px solid var(--border);background:transparent;color:var(--purple);font-weight:800}

  /* Motion accessibility */
  @media (prefers-reduced-motion: reduce){
    .slide{transition:none}
    .card{transition:none}
    .nav button{transition:none}
  }
    /* -------- Responsive overrides for gallery -------- */
@media (max-width:900px){
  .grid{grid-template-columns:repeat(12,1fr)}
  .grid .card{grid-column:span 6 !important; height:auto; min-height:200px}
}

@media (max-width:640px){
  .grid{grid-template-columns:repeat(12,1fr)}
  .grid .card{grid-column:span 12 !important; height:auto; min-height:200px}
}
  /* Desktop/Tablet: show normal nav */
.desktop-nav { display: flex; }
.mobile-nav { display: none; }

/* Mobile: swap */
@media (max-width:640px) {
  .desktop-nav { display: none; }
  .mobile-nav { display: block; position: relative; }
  .hamburger {
    font-size: 22px;
    background: transparent;
    border: 1px solid var(--border);
    border-radius: 8px;
    padding: 6px 10px;
    color: var(--purple);
    cursor: pointer;
  }
    @media (max-width:640px){
  .mobile-nav { display:block; }
  .mobile-menu {
    position: fixed;
    top: 0;
    left: 0;
    width: 335px;
    max-width: 94vw;
    height: 100vh;
    background: #0b0b0b;
    border-right: 1px solid var(--border);
    z-index: 1050;
    display: flex;
    flex-direction: column;
    padding: 0;
    box-shadow: 0 10px 48px #000c;
    transform: translateX(-100%);
    transition: transform .35s cubic-bezier(.26,1,.32,1);
  }
  .mobile-menu.open { transform: translateX(0);}
  .mobile-menu-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 18px 18px 10px 18px;
    border-bottom: 1px solid var(--border);
    min-height: 56px;
  }
  .mobile-menu-logo {
    display: flex;
    align-items: center;
    font-size: 24px;
    color: #fff;
    font-weight: 700;
    gap: 8px;
  }
  .mobile-menu-logo img {
    height: 32px; width: auto; margin-right:8px;
  }
  .close-btn {
    background: none;
    border: none;
    font-size: 32px;
    color: var(--muted);
    cursor: pointer;
    padding: 2px 8px; margin-left: auto;
  }
  .mobile-menu-items {
    flex: 1; /* takes all space */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 32px;
    padding: 40px 0 16px 0;
  }
  .mobile-menu-items .menu-link {
    background: none;
    border: none;
    color: #fff;
    font-size: 21px;
    text-align: center;
    font-weight: 500;
    padding: 8px 0;
    width: 92%;
    cursor: pointer;
    border-radius: 8px;
    transition: background .18s,color .18s;
  }
  .mobile-menu-items .menu-link:hover {
    background: rgba(168,85,247,0.10);
    color: var(--purple);
  }
  .whatsapp-btn {
    width: 85%;
    margin: 10px auto 8px auto;
    background: #25d366;
    color: #222;
    border: none;
    border-radius: 10px;
    font-size: 19px;
    font-weight:700;
    padding: 12px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    box-shadow: 0 2px 8px #18b5513a;
    cursor: pointer;
  }
  .whatsapp-btn .wa-icon {
    font-size: 22px;
    margin-right: 4px;
  }
  .login-btn {
    width: 92%;
    margin: 8px auto 0 auto;
    background: transparent;
    color: var(--text);
    border: 1px solid var(--border);
    border-radius: 8px;
    font-size: 18px;
    font-weight: 500;
    padding: 12px 0;
    cursor: pointer;
    transition: border .18s,color .18s;
  }
  .login-btn:hover {
    color: var(--purple);
    border-color: var(--purple);
  }
  .drawer-overlay {
    display: block;
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,0.45);
    z-index: 1000;
  }
}

  .mobile-menu {
    position: absolute;
    items: center;
    top: 110%;
    right: 0;
    background: #0b0b0b;
    border: 1px solid var(--border);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    gap: 6px;
    padding: 8px;
    z-index: 100;
  }
  .mobile-menu button {
    background: none;
    border: none;
    color: var(--text);
    text-align: left;
    padding: 6px 10px;
    border-radius: 6px;
    cursor: pointer;
  }
  .mobile-menu button:hover {
    background: rgba(168,85,247,0.12);
  }
}

@media (max-width:640px) {
  .mobile-pill-vertical {
    display: flex;
    flex-direction: column;
    gap: 18px;
    align-items: stretch;
    padding: 30px 18px 16px 18px;
    background: transparent;
    width: 100%;
  }
  .pill-link {
    padding: 12px 0;
    border-radius: 999px;
    border: 2px solid var(--border, #a855f7);
    background: #181118;
    color: #f6f3ff;
    font-size: 18px;
    font-weight: 700;
    outline: none;
    cursor: pointer;
    width: 50%; /* full width in drawer */
    height: 50%;
    text-align: center;
    margin: 0;
    transition: background .18s, color .18s, border .15s;
  }
  .pill-link:hover,
  .pill-link:focus {
    color: var(--purple, #a855f7);
    background: rgba(168,85,247,0.09);
    border-color: var(--purple, #a855f7);
  }
}
/* Hide by default */
.mobile-pill-vertical {
  display: none;
}

/* Show only on mobile screens */
@media (max-width:640px) {
  .mobile-pill-vertical {
    display: flex;
  }
}

`;

/* ---------- Demo data ---------- */
const IMGS = [
  { title: "Dashboard",    desc: "Live KPIs and overview.", long:"Get a real-time pulse on KPIs, revenue, uptime, and operational health with drill-downs and alerting.", src:hanuman10, cat: "Overview" },
  { title: "Analytics",    desc: "Charts & deep insights.", long:"Build interactive charts, compare cohorts, and export reports to CSV/PDF. Great for weekly reviews.", src: hanuman55, cat: "Analytics" },
  { title: "CRM",          desc: "Profiles & timeline.",  long:"Track user journeys, lifecycle stages, and automate follow-ups with tags, notes, and activity streams.", src: hanuman11, cat: "Users" },
  { title: "Tasks",        desc: "Boards & sprints.",     long:"Plan sprints, assign tasks, and visualize progress in Kanban and timeline views with SLA reminders.", src:hanuman22,cat: "Product" },
  { title: "Collaboration",desc: "Comments & mentions.",  long:"Centralize feedback, mentions, and decision logs with inline comments and quick reactions.", src: hanuman33, cat: "Collab" },
  { title: "Reports",      desc: "Export PDF/CSV.",       long:"Schedule report deliveries, watermark PDFs, and keep your stakeholders aligned without manual work.", src:hanuman66, cat: "Analytics" },
  { title: "Automation",   desc: "Workflows & triggers.", long:"Trigger workflows on events, update records, and notify teams with visual builders and audit trails.", src:hanuman44, cat: "Product" },
  { title: "Settings",     desc: "Roles & permissions.",  long:"Configure SSO, RBAC, audit logs, and environment flags with safe defaults for enterprise.", src:hanuman88, cat: "Users" },
];
const CATS = ["All", ...Array.from(new Set(IMGS.map(i => i.cat)))]
const CAT_ICONS = { 
  All: "⭐", 
  Home: "🏠", 
  About: "ℹ️", 
  Cars: "🚗", 
  Support: "🛟"
};

const SECTIONS = [
  { key: "Home",    icon: "🏠",  title: "Home" },
  { key: "About",   icon: "ℹ️",  title: "About" },
  { key: "Cars",    icon: "🚗",  title: "Cars" },
  { key: "Support", icon: "🛟",  title: "Support" },
];

/* ---------- Component ---------- */
export default function ProjectViewNew() {
  const heroRef = useRef(null);
  const barRef = useRef(null);

  /* Carousel refs */
  const trackRef = useRef(null);
  const cardRefs = useRef([]);
  const [menuOpen, setMenuOpen] = useState(false);


  const [heroIndex, setHeroIndex] = useState(0);
  const [hoverHero, setHoverHero] = useState(false);
  const [lightbox, setLightbox] = useState({ open: false, i: 0 });

  const [cat, setCat] = useState("All");
  const [query, setQuery] = useState("");
  const [sortBy, setSortBy] = useState("title-asc");
  const [compact, setCompact] = useState(false);

  /* Viewport mode: auto/desktop/mobile for easy preview */
  const [viewport, setViewport] = useState("auto"); // 'auto' | 'desktop' | 'mobile'
  const [vw, setVw] = useState(typeof window !== 'undefined' ? window.innerWidth : 1280);
  useEffect(() => {
    const onResize = () => setVw(window.innerWidth);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);
  const effectiveMode = useMemo(() => {
    if (viewport === 'desktop') return 'desktop';
    if (viewport === 'mobile') return 'mobile';
    return vw <= 640 ? 'mobile' : 'desktop';
  }, [viewport, vw]);

  /* Filters + search + sort */
  const catFiltered = useMemo(() => (cat === "All" ? IMGS : IMGS.filter(i => i.cat === cat)), [cat]);
  const textFiltered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return catFiltered;
    return catFiltered.filter(i => (i.title + " " + i.desc + " " + i.cat).toLowerCase().includes(q));
  }, [query, catFiltered]);
  const finalList = useMemo(() => {
    const list = [...textFiltered];
    if (sortBy === "title-asc") list.sort((a, b) => a.title.localeCompare(b.title));
    if (sortBy === "title-desc") list.sort((a, b) => b.title.localeCompare(a.title));
    return list;
  }, [textFiltered, sortBy]);

  /* ---------- TOP CAROUSEL logic ---------- */
  const [carIdx, setCarIdx] = useState(0);
  const [carHover, setCarHover] = useState(false);
  const [carExpanded, setCarExpanded] = useState(false);

  const scrollToIdx = (i) => {
    const track = trackRef.current; const card = cardRefs.current[i];
    if (!track || !card) return;
    const left = card.offsetLeft - (track.clientWidth/2 - card.clientWidth/2);
    track.scrollTo({ left, behavior: 'smooth' });
  };
  const nextCar = () => setCarIdx(i => (i + 1) % IMGS.length);
  const prevCar = () => setCarIdx(i => (i - 1 + IMGS.length) % IMGS.length);

  useEffect(() => { scrollToIdx(carIdx); }, [carIdx]);
  useEffect(() => {
    if (carHover) return; // pause on hover
    const id = setInterval(() => setCarIdx(i => (i + 1) % IMGS.length), 4200);
    return () => clearInterval(id);
  }, [carHover]);

  /* Hero autoplay + progress (pure React timer) */
  useEffect(() => {
    const slides = heroRef.current?.querySelectorAll?.(".slide");
    if (!slides || !slides.length) return;

    slides.forEach((s, i) => (s.style.opacity = i === heroIndex ? "1" : "0"));
    if (barRef.current) barRef.current.style.width = "0";

    const start = Date.now();
    const DURATION = 3300;

    let raf;
    const tick = () => {
      const elapsed = hoverHero ? 0 : Date.now() - start;
      const pct = Math.min(1, elapsed / DURATION);
      if (barRef.current) barRef.current.style.width = `${pct * 100}%`;
      if (pct >= 1) {
        const next = (heroIndex + 1) % IMGS.length;
        setHeroIndex(next);
      } else {
        raf = requestAnimationFrame(tick);
      }
    };
    raf = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(raf);
  }, [heroIndex, hoverHero]);

  /* Lightbox keyboard */
  useEffect(() => {
    const onKey = (e) => {
      if (!lightbox.open) return;
      if (e.key === "Escape") setLightbox({ open: false, i: 0 });
      if (e.key === "ArrowRight") setLightbox(s => ({ open: true, i: (s.i + 1) % IMGS.length }));
      if (e.key === "ArrowLeft") setLightbox(s => ({ open: true, i: (s.i - 1 + IMGS.length) % IMGS.length }));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox.open]);

  /* Touch swipe on hero for mobile */
  const touchRefState = useRef({ x: 0, t: 0 });
  const onTouchStart = (e) => { const t = e.touches[0]; touchRefState.current = { x: t.clientX, t: Date.now() }; };
  const onTouchEnd = (e) => {
    const dx = (e.changedTouches[0]?.clientX || 0) - touchRefState.current.x;
    const dt = Date.now() - touchRefState.current.t;
    if (dt < 450 && Math.abs(dx) > 40) {
      if (dx < 0) setHeroIndex((i) => (i + 1) % IMGS.length);
      else setHeroIndex((i) => (i - 1 + IMGS.length) % IMGS.length);
    }
  };

  const setHero = (i) => setHeroIndex(i);
  const openLB = (i) => setLightbox({ open: true, i });
  const closeLB = () => setLightbox({ open: false, i: 0 });
  const nextLB = () => setLightbox(s => ({ open: true, i: (s.i + 1) % IMGS.length }));
  const prevLB = () => setLightbox(s => ({ open: true, i: (s.i - 1 + IMGS.length) % IMGS.length }));

  const countLabel = `${finalList.length} item${finalList.length === 1 ? "" : "s"}`;

  const go = (id) => (e) => { e?.preventDefault?.(); document.querySelector(id)?.scrollIntoView({ behavior:'smooth', block:'start' }); };

  // Derived featured slice
  const featured = finalList.slice(0, 4);

  /* Intro reveal (IntersectionObserver) */
  const introRef = useRef(null);
  const toolbarRef = useRef(null);
  const [introIn, setIntroIn] = useState(false);
  const [toolbarIn, setToolbarIn] = useState(false);
  useEffect(()=>{
    const opts = { threshold: 0.3 };
    const introObs = new IntersectionObserver(([e])=> setIntroIn(!!e.isIntersecting), opts);
    const tbObs = new IntersectionObserver(([e])=> setToolbarIn(!!e.isIntersecting), opts);
    if (introRef.current) introObs.observe(introRef.current);
    if (toolbarRef.current) tbObs.observe(toolbarRef.current);
    return ()=>{ introObs.disconnect(); tbObs.disconnect(); };
  },[]);

  return (
    <div className="wrap">
      <style dangerouslySetInnerHTML={{ __html: styles }} />
      <div className={`panel ${effectiveMode === 'mobile' ? 'mobile' : 'desktop'}`}>
        {/* Topbar */}
        {/* Topbar */}
        {/* Topbar */}
<div className="topbar" role="navigation" aria-label="Primary">
  <div className="tb-inner">
    <div className="brand">
      <div className="logo" aria-hidden="true" />
      <h1>Hanuman Cars</h1>
    </div>
    {/* Desktop/Tablet Nav */}
    <div className="navlinks desktop-nav">
      <button className="alink" onClick={go('#about')}>About</button>
      <button className="alink" onClick={go('#carousel')}>Carousel</button>
      <button className="alink" onClick={go('#sections')}>Sections</button>
      <button className="alink" onClick={go('#hero')}>Hero</button>
      <button className="alink" onClick={go('#featured')}>Featured</button>
      <button className="alink" onClick={go('#gallery')}>Gallery</button>
    </div>
    {/* Mobile Nav */}
    <div className="mobile-nav">
      <button className="hamburger" onClick={()=>setMenuOpen(true)} aria-label="Open menu">☰</button>
    </div>
  </div>
  {/* Mobile Drawer Menu */}
  <div className={`mobile-menu${menuOpen ? " open" : ""}`}>
  
  {/* Pills menu as vertical */}
  <div className="mobile-pill-vertical">
    <button className="pill-link" onClick={go('#about')}>About</button>
    <button className="pill-link" onClick={go('#carousel')}>Carousel</button>
    <button className="pill-link" onClick={go('#sections')}>Sections</button>
    <button className="pill-link" onClick={go('#hero')}>Hero</button>
    <button className="pill-link" onClick={go('#featured')}>Featured</button>
    <button className="pill-link" onClick={go('#gallery')}>Gallery</button>
  </div>
  {/* Other drawer items here (WhatsApp, Login, etc) */}
</div>

  {menuOpen && <div className="drawer-overlay" onClick={()=>setMenuOpen(false)} />}
</div>


        {/* Header / lead */}
        <div className="header header-grid" id="about">
          <div className={`intro ${introIn ? 'in' : ''}`} ref={introRef}>
            <h2 className="title">
              {/* <span className="pip" /> */}
              <span className="ink">Welcome to your project home</span>
            </h2>
            <p className="lead lead-rail">
              A single-screen hub that blends a <span className="hl">cinematic hero</span>, <span className="hl">rich descriptions</span>,
              <span className="hl"> quick actions</span>, and <span className="hl">categorized sections</span>. Use the chips to filter,
              the search to find anything fast, and the lightbox to view details. Toggle the <strong>viewport</strong> to preview
              desktop/mobile instantly.
            </p>
          </div>

        </div>
        <hr className="divider" />

        {/* ---------- TOP CAROUSEL ---------- */}
       

        {/* Quick status */}
        <div className="section">
          <div className="section-h"><h3>Overview</h3><span className="hint"></span></div>
          <div className="stats" role="list">
            <div className="stat" role="listitem"><h4>Happy Customers</h4><p className="ok">2K+</p></div>
            <div className="stat" role="listitem"><h4>Premium Cars</h4><p>50+</p></div>
            <div className="stat" role="listitem"><h4>Cities</h4><p className="warn">10+</p></div>
            <div className="stat" role="listitem"><h4>Satisfaction Rate</h4><p className="bad">99%</p></div>
          </div>
        </div>

        {/* Sections directory */}
        <div className="section" id="sections">
          <div className="section-h"><h3>Sections</h3><span className="hint"></span></div>
          <div className="sections">
            {SECTIONS.map((s)=> (
              <div key={s.key} className="section-card">
                <h4>{s.icon} {s.title}</h4>
                <p>{s.blurb}</p>
                <div className="act">
                  <button className="btn" onClick={()=>{ setCat(s.key); document.querySelector('#gallery')?.scrollIntoView({behavior:'smooth'}); }}>
                    View {s.title}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Hero slider */}
        <div className="section" id="hero">
          <div className="section-h"><h3>Spotlight</h3><span className="hint">Swipe or click to explore</span></div>
          <div className="hero" onMouseEnter={() => setHoverHero(true)} onMouseLeave={() => setHoverHero(false)}>
            <div className="hero-inner" ref={heroRef} onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
              {IMGS.map((img, i) => (
                <div className={`slide ${i === heroIndex ? "active" : ""}`} key={img.src} onClick={() => openLB(i)}>
                  <img src={img.src} alt={img.title} loading="eager" />
                </div>
              ))}
              <div className="fade-shadow" />
              <div className="hero-cta">
                <button className="pill filled" onClick={()=>{ setCat('All'); document.querySelector('#featured')?.scrollIntoView({behavior:'smooth'}); }}>Explore Featured</button>
                <button className="pill" onClick={()=>{ setCat('Analytics'); document.querySelector('#gallery')?.scrollIntoView({behavior:'smooth'}); }}>See Analytics</button>
              </div>
              <div className="hero-info">
                <p className="hero-title">{IMGS[heroIndex].title}</p>
                <p className="hero-desc">{IMGS[heroIndex].desc}</p>
              </div>
              <div className="nav">
                <button onClick={() => setHero((heroIndex - 1 + IMGS.length) % IMGS.length)} aria-label="Prev">◀</button>
                <button onClick={() => setHero((heroIndex + 1) % IMGS.length)} aria-label="Next">▶</button>
              </div>
              <div className="progress"><div className="bar" ref={barRef} /></div>
            </div>
            <div className="thumbs">
              {IMGS.map((img, i) => (
                <button key={img.src} data-t={img.title} className={`thumb ${i === heroIndex ? "active" : ""}`} onClick={() => setHero(i)}>
                  <img src={img.src} alt={`${img.title} thumbnail`} loading="lazy" />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="section">
          <div className="section-h"><h3>Filters</h3><span className="hint">Refine by category</span></div>
          <div className="filters" role="tablist" aria-label="Categories">
            {CATS.map(c => (
              <button
                key={c}
                role="tab"
                aria-selected={c === cat}
                className={`chip ${c === cat ? "active" : ""}`}
                onClick={() => setCat(c)}
              >
                {CAT_ICONS[c] || ""} {c}
              </button>
            ))}
          </div>
        </div>

        {/* Featured slice */}
        <div className="section" id="featured">
          <div className="section-h"><h3>Featured</h3><span className="hint">Hand-picked highlights</span></div>
          <div className={`grid ${compact ? "compact" : ""}`}>
            {featured.map((img, idx) => (
              <div
                key={img.src}
                className={`${idx % 2 === 0 ? "span-8 h-320" : "span-4 h-320"} card`}
                onClick={() => setLightbox({ open: true, i: IMGS.findIndex(x => x.src === img.src) })}
                title={`${img.title} — ${img.desc}`}
              >
                <span className="tag">{img.cat}</span>
                <img src={img.src} alt={img.title} loading="lazy" />
                <div className="cap">
                  <p className="t">{img.title}</p>
                  <p className="d">{img.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Grid gallery */}
        
<div className="section" id="gallery">
  <div className="section-h">
    <h3>Gallery</h3>
    <span className="hint">All items • {countLabel}</span>
  </div>

  <div className={`grid ${compact ? "compact" : ""}`}>
    {finalList.map((img, idx) => (
      <div
        key={img.src}
        className={`card ${idx % 8 === 0
          ? "span-8 h-320"
          : idx % 8 === 1
          ? "span-4 h-320"
          : idx % 8 < 4
          ? "span-6 h-260"
          : idx % 8 < 7
          ? "span-4 h-200"
          : "span-12 h-320"}`}
        onClick={() =>
          setLightbox({ open: true, i: IMGS.findIndex(x => x.src === img.src) })
        }
        title={`${img.title} — ${img.desc}`}
      >
        <span className="tag">{img.cat}</span>
        <img src={img.src} alt={img.title} loading="lazy" />
        <div className="cap">
          <p className="t">{img.title}</p>
          <p className="d">{img.desc}</p>
        </div>
      </div>
    ))}
  </div>
</div>


        {/* Lightbox */}
        {lightbox.open && (
          <div className="lightbox" onClick={closeLB}>
            <div className="lb-inner" onClick={(e) => e.stopPropagation()}>
              <div className="lb-head">
                <h3 className="lb-title">{IMGS[lightbox.i].title}</h3>
                <button className="lb-close" onClick={closeLB}>Close</button>
              </div>
              <div className="lb-media">
                <img src={IMGS[lightbox.i].src} alt={IMGS[lightbox.i].title} />
                <div className="lb-nav">
                  <button className="lb-btn" onClick={prevLB}>◀</button>
                  <button className="lb-btn" onClick={nextLB}>▶</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}