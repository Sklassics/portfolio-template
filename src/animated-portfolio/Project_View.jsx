// src/project_view_new.jsx — Advanced Home v3
// Hero + Services + Design Cards (tuned for perfect mobile fit)
// Single-file, no external deps
import React, { useEffect, useMemo, useRef, useState } from "react";

import lmspage from '../assets/lmspage.jpg';

import ITTraining from '../assets/ITTraining.jpg';

import loan from '../assets/loanmanagement1.png';
import AIInter from '../assets/AIInter.jpg';
import Tutor from '../assets/Tutor.jpg';
import hanuman from '../assets/hanumancars.jpg';
import ITServices from '../assets/ITServices.jpg';
import Quiz from '../assets/Quiz.jpg';

import hanuman11 from "../assets/hanuman11.jpg";
import learnms from "../assets/learnms.png";
import Netflix from "../assets/Netflix.png";
import portfolio from "../assets/portfolio.png";
import finance from "../assets/finance.png";
import travel from "../assets/travel.png";
import screw from "../assets/screw.png";
import resturant from "../assets/resturant.png";
import trae1 from "../assets/trae1.png";
import business from "../assets/business.png";
import ecommerce from "../assets/ecommerce.png";
import sklassics from "../assets/sklassics.png";




/* ---------- Styles (inline) ---------- */
const styles = `
  :root {
    --bg:#000; --panel:#0b0b0b; --text:#f6f3ff; --muted:#b7a9d9;
    --purple:#a855f7; --purple-2:#7c3aed; --border:rgba(168,85,247,0.35);
    --shadow:0 30px 80px rgba(0,0,0,.65);
    --card:#17171b; --card-2:#1c1c21; --danger:#ef4444;
  }
  *{box-sizing:border-box}
  html,body,#root{height:100%}
  body{margin:0;background:#000;color:var(--text);font-family:Inter,system-ui,-apple-system,Segoe UI,Roboto,Arial;overflow-x:hidden}

  /* Outer padding uses safe-area + clamp, panel uses max-width:100% (no vw) */
  .wrap{
    --outer-pad: clamp(12px,3.5vw,28px);
    min-height:100vh;display:grid;place-items:center;
    padding-top:var(--outer-pad);
    padding-bottom:var(--outer-pad);
    padding-left:calc(var(--outer-pad) + env(safe-area-inset-left,0px));
    padding-right:calc(var(--outer-pad) + env(safe-area-inset-right,0px));
  }
  .panel{
    width:100%; max-width:2000px; margin:0 auto; background:#0b0b0b;
    border:1px solid var(--border); border-radius:20px; box-shadow:var(--shadow);
    padding:0; position:relative; overflow:hidden;
  }
  .panel::before{content:"";position:absolute;left:0;right:0;top:0;height:2px;
    background:linear-gradient(90deg,var(--purple),var(--purple-2));opacity:.9}

  /* Topbar */
  .topbar{position:sticky;top:0;z-index:20;background:linear-gradient(180deg,#0b0b0b 70%, rgba(11,11,11,0));
    border-bottom:1px solid var(--border);backdrop-filter:saturate(120%)}
  .tb-inner{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:12px 18px}
  .brand{display:flex;align-items:center;gap:10px}
  .logo{width:28px;height:28px;border-radius:8px;background:linear-gradient(135deg,var(--purple),var(--purple-2));
    box-shadow:0 6px 18px rgba(168,85,247,.35)}
  .brand h1{margin:0;font-size:clamp(14px,1.4vw,18px);letter-spacing:.2px}
  .navlinks{display:flex;gap:8px;flex-wrap:wrap;overflow:auto}
  .alink{padding:8px 12px;border-radius:999px;border:1px solid var(--border);background:#0a0a0a;color:var(--muted);
    cursor:pointer;font-weight:700;white-space:nowrap}
  .alink:hover{box-shadow:0 0 0 3px rgba(168,85,247,.15)}

  /* Header */
  .header{padding:18px 18px 8px}
  .header-grid{display:grid;grid-template-columns:1fr;gap:12px}
  .title{margin:0;letter-spacing:-.02em;display:flex;align-items:center;gap:10px}
  .title .ink{font-size:clamp(22px,3.2vw,38px);background:linear-gradient(90deg,#fff,#d7c9ff 40%,#b48cff 75%,#fff);
    -webkit-background-clip:text;background-clip:text;color:transparent;filter:drop-shadow(0 6px 28px rgba(168,85,247,.18))}
  .title::after{content:"";height:2px;width:0;display:block;background:linear-gradient(90deg,var(--purple),var(--purple-2));
    border-radius:2px;margin-top:6px;transition:width .6s ease .1s}
  .intro.in .title::after{width:92%}
  .pip{display:inline-block;width:10px;height:10px;border-radius:50%;background:var(--purple);
    box-shadow:0 0 0 0 rgba(168,85,247,.45);animation:pulse 2.2s infinite ease-in-out}
  @keyframes pulse{0%{box-shadow:0 0 0 0 rgba(168,85,247,.45)}70%{box-shadow:0 0 0 10px rgba(168,85,247,0)}100%{box-shadow:0 0 0 0 rgba(168,85,247,0)}}
  .lead{margin:10px 0 0;color:var(--muted);max-width:70ch;line-height:1.6;text-wrap:balance}
  .lead .hl{background:linear-gradient(90deg, rgba(168,85,247,.18), rgba(168,85,247,.07));
    border:1px solid var(--border);padding:2px 6px;border-radius:8px;color:#eae3ff}
  .lead-rail{position:relative;padding-left:14px}
  .lead-rail::before{content:"";position:absolute;left:0;top:.35em;bottom:.35em;width:3px;border-radius:2px;
    background:linear-gradient(180deg,var(--purple),var(--purple-2))}
  .intro .title,.intro .lead{opacity:0;transform:translateY(10px)}
  .intro.in .title{opacity:1;transform:none;transition:opacity .5s ease, transform .5s ease}
  .intro.in .lead{opacity:1;transform:none;transition:opacity .6s ease .08s, transform .6s ease .08s}

  .section{padding:12px 18px 18px}
  .section-h{display:flex;align-items:center;justify-content:space-between;margin:6px 0 10px}
  .section-h h3{margin:0;font-size:clamp(14px,1.3vw,18px);letter-spacing:.3px}
  .section-h .hint{color:var(--muted);font-size:clamp(11px,1.1vw,13px)}
  .divider{height:1px;background:linear-gradient(90deg,transparent,rgba(168,85,247,.35),transparent);border:none;margin:6px 0 12px}

  /* Hero */
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
.progress{position:absolute;left:0;right:0;bottom:0;height:3px;background:rgba(255,255,255,.06)}
.bar{width:0;height:100%;background:linear-gradient(90deg,var(--purple),var(--purple-2));transition:width .1s linear}

/* 📱 Mobile Adjustments for Hero */
@media (max-width:640px){
  .hero-inner{
    aspect-ratio: 1/1;       /* make hero square */
    max-height: 70vh;        /* prevent overflow */
  }
  .slide img{
    object-fit: contain;     /* show full image without cropping */
    background: #000;        /* black background for letterboxing */
  }
}

  /* Thumbnails: always visible & mobile-friendly */
  .thumbs{display:flex;gap:8px;overflow:auto;padding:8px 10px 0;scroll-snap-type:x mandatory}
  .thumb{min-width:110px;aspect-ratio:16/10;border-radius:10px;overflow:hidden;border:1px solid var(--border);opacity:.9;cursor:pointer;background:#0a0a0a;position:relative;scroll-snap-align:center}
  .thumb.active{opacity:1;border-color:var(--purple)}
  .thumb img{width:100%;height:100%;object-fit:cover;display:block}
  .thumbs::-webkit-scrollbar{height:6px}
  .thumbs::-webkit-scrollbar-thumb{background:rgba(168,85,247,.35);border-radius:999px}
  @media (max-width:1024px){ .hero-inner{aspect-ratio:16/10} }
  @media (max-width:640px){
    .hero-inner{aspect-ratio:1/1}
    .nav button{width:38px;height:38px}
    .thumb{min-width:92px}
  }

  /* ===== SERVICES ===== */
  .svc{padding:22px 12px 24px}
  .svc-group{position:relative;padding:0 6px;margin-bottom:26px}
  .svc-head{display:flex;align-items:center;justify-content:space-between;gap:8px}
  .svc-left{min-width:0}
  .svc-kicker{letter-spacing:.24em;color:var(--muted);font-size:12px;opacity:.9}
  .svc-title{margin:6px 0 0;font-size:clamp(18px,1.4vw,22px);font-weight:900}
  .svc-init{font-size:12px;color:#bcaef0;display:flex;align-items:center;gap:6px;white-space:nowrap}
  .svc-init .dot{width:7px;height:7px;border-radius:50%;background:var(--danger);box-shadow:0 0 8px rgba(239,68,68,.65)}
  .svc-line{height:1px;background:linear-gradient(90deg,transparent,rgba(168,85,247,.7),transparent);margin:10px 0 12px}
  .svc-corners{position:absolute;inset:0;pointer-events:none}
  .svc-corners::before,.svc-corners::after{content:"";position:absolute;width:14px;height:14px;border-color:var(--purple)}
  .svc-corners::before{left:0;top:0;border-left:2px solid var(--purple);border-top:2px solid var(--purple)}
  .svc-corners::after{right:0;top:0;border-right:2px solid var(--purple);border-top:2px solid var(--purple)}
  .svc-card{position:relative;background:linear-gradient(180deg,var(--card),var(--card-2));border:1px solid var(--border);
    border-radius:16px;padding:clamp(16px,4.5vw,22px);box-shadow:0 10px 40px rgba(0,0,0,.35);transform:translateY(12px);opacity:0}
  .svc-card.in{animation:svcIn .7s ease forwards}
  @keyframes svcIn{to{transform:none;opacity:1}}
  .svc-h{margin:0 0 8px;font-weight:800;font-size:clamp(20px,1.8vw,26px)}
  .svc-desc{margin:0;color:var(--muted)}
  .svc-meta{display:flex;gap:10px;align-items:center;color:var(--muted);font-size:12px;margin-top:14px}

  /* ===== ADVANCED CTA (reused for cards) ===== */
  .cta{
    position:relative; display:inline-flex; align-items:center; gap:10px;
    padding:10px 16px; border-radius:999px; color:#ede8ff; text-decoration:none;
    background:#0c0c12; border:1px solid var(--border);
    transition: box-shadow .25s ease, transform .15s ease, border-color .25s ease;
    isolation:isolate;
  }
  .cta::before{
    content:""; position:absolute; inset:-1px; border-radius:inherit;
    background:conic-gradient(from 180deg at 50% 50%, rgba(168,85,247,.0), rgba(168,85,247,.45), rgba(124,58,237,.45), rgba(168,85,247,.0));
    -webkit-mask:linear-gradient(#000 0 0) padding-box, linear-gradient(#000 0 0);
    -webkit-mask-composite:xor; mask-composite:exclude;
    animation:spin 3.6s linear infinite; opacity:.35;
  }
  .cta:hover{ box-shadow:0 0 0 4px rgba(168,85,247,.12), 0 10px 32px rgba(0,0,0,.45); border-color:rgba(168,85,247,.55) }
  .cta:active{ transform: translateY(1px) scale(.98) }
  .badge{position:relative; width:34px; height:34px; border-radius:999px; display:grid; place-items:center; background:#0b0b12; border:1px solid var(--border); overflow:hidden}
  .badge::before{content:""; position:absolute; inset:-25%; border-radius:inherit; background:conic-gradient(var(--purple), var(--purple-2), var(--purple)); filter:blur(8px); opacity:.55; animation:spin 4.8s linear infinite}
  .badge svg{position:relative; z-index:1; width:18px; height:18px; stroke:#eae6ff; stroke-width:2; fill:none}
  @keyframes spin{to{transform:rotate(360deg)}}
  @media (max-width:480px){
    .cta{padding:8px 12px}
    .badge{width:28px;height:28px}
    .badge svg{width:16px;height:16px}
  }

  /* Footer */
  .svc-foot{display:flex;align-items:center;justify-content:space-between;color:#7d6fb0;font-size:12px;margin-top:10px}
  .cornerL,.cornerR{position:relative;width:16px;height:16px;display:inline-block}
  .cornerL::before{content:"";position:absolute;left:0;bottom:0;width:12px;height:12px;border-left:2px solid var(--purple);border-bottom:2px solid var(--purple)}
  .cornerR::before{content:"";position:absolute;right:0;bottom:0;width:12px;height:12px;border-right:2px solid var(--purple);border-bottom:2px solid var(--purple)}

  /* ===== SAMPLE WEBSITE DESIGNS ===== */
  .designs{padding:8px 12px 26px}
  .designs .section-h h3{font-weight:900}
  .design-intro{color:var(--muted);max-width:90ch;margin:6px 0 14px}
  .design-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:clamp(10px,1.2vw,16px)}
  @media (min-width:1280px){ .design-grid{grid-template-columns:repeat(3,1fr)} }

  .d-card{
    position:relative; display:flex; flex-direction:column;
    background:#0a0a0a; border:1px solid var(--border); border-radius:16px;
    box-shadow:0 12px 28px rgba(0,0,0,.35); overflow:hidden;
    transform:translateY(10px); opacity:0;
  }
  .d-card.in{animation:fadeUp .55s ease forwards}
  @keyframes fadeUp{to{transform:none;opacity:1}}

  .d-img{aspect-ratio:16/9; background:#070707; border-bottom:1px solid var(--border); overflow:hidden}
  .d-img img{width:100%;height:100%;object-fit:cover;display:block;transform:scale(1.03)}
  .d-body{padding:clamp(12px,1.2vw,16px);padding-inline:clamp(16px,5vw,20px)}
  .d-title{margin:0 0 6px;font-size:clamp(16px,1.3vw,18px);font-weight:900}
  .d-desc{margin:0 0 14px;color:var(--muted);min-height:42px}
  .d-cta{display:flex;align-items:center;gap:10px;margin-top:auto;flex-wrap:wrap}
  .mini{font-size:12px;color:#9aa1c9}
`;

/* ---------- Demo images (hero) ---------- */
const IMGS = [
  { title: "Hanuman Cars", src: hanuman },
  { title: "LMS", src: lmspage},
  { title: "AI-Interview",    src: AIInter},
  { title: "IT-Training", src: ITTraining},
  { title: "Tutoring", src:Tutor},
  { title: "Loan Management", src:loan},
  { title: "Quiz Application",src:Quiz},
  { title: "ITServices",src:ITServices },
];

/* ---------- Icons (inline SVG) ---------- */
const ICONS = {
  menu: (<svg viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16"/></svg>),
  car:  (<svg viewBox="0 0 24 24"><path d="M3 13l2-5a2 2 0 0 1 2-1h10a2 2 0 0 1 2 1l2 5M5 18h14M7 18a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm10 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"/></svg>),
  cap:  (<svg viewBox="0 0 24 24"><path d="M22 10L12 6 2 10l10 4 10-4z"/><path d="M6 12v5c0 1.1 2.7 2 6 2s6-.9 6-2v-5"/></svg>),
  laptop:(<svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="12" rx="2"/><path d="M2 20h20"/></svg>),
  users:(<svg viewBox="0 0 24 24"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>),
  cpu:  (<svg viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 1v3M15 1v3M9 20v3M15 20v3M1 9h3M1 15h3M20 9h3M20 15h3"/></svg>),
  quiz: (<svg viewBox="0 0 24 24"><path d="M9 11a3 3 0 1 1 3 3v2"/><rect x="3" y="3" width="18" height="18" rx="2"/></svg>),
  doc:  (<svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M8 13h8M8 17h5"/></svg>),
  cart: (<svg viewBox="0 0 24 24"><circle cx="9" cy="20" r="1"/><circle cx="20" cy="20" r="1"/><path d="M1 1h4l2.68 12.39A2 2 0 0 0 9.63 15H19a2 2 0 0 0 2-1.62L23 6H6"/></svg>),
  building:(<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 21V9h6v12M7 12h2M15 12h2M7 16h2M15 16h2"/></svg>),
  external:(<svg viewBox="0 0 24 24"><path d="M7 17L17 7M8 7h9v9"/></svg>)
};

/* ---------- Services (links + icon keys) ---------- */
const SERVICES = [
  { kicker:"TUTORS", title:"Expert Tutors",
    headline:"One-on-One Guidance: Learn with the Best Tutors",
    desc:"Personalized learning support for students across all grades and subjects.",
    brand:"EduTeam", year:"2025", cta:"Get a Tutor", link:"https://sklassicstutor.com",
    status:"INITIATE EDU•360", icon:"cap" },
  { kicker:"OUR SERVICES • HANUMANCAR", title:"Premium Car Rentals",
    headline:"Ride with Confidence: HanumanCar Rental Services",
    desc:"We provide reliable and affordable car rental services across your city, 24/7.",
    brand:"HanumanCar", year:"2025", cta:"Book Now", link:"https://hanumancars.com",
    status:"INITIATE DRIVE", icon:"car" },
  { kicker:"TRAINING • CAREERS", title:"IT Training & Placements",
    headline:"Empower Your Future with IT Training & Job Assistance",
    desc:"Hands-on courses and real-world projects to boost your IT career.",
    brand:"Sklassics", year:"2025", cta:"Explore Programs", link:"https://sklassics.com",
    status:"INITIATE LEARN", icon:"cap" },
  { kicker:"DIGITAL • SOLUTIONS", title:"IT Services",
    headline:"End-to-End IT Services for Your Business",
    desc:"From cloud to custom applications—we deliver scalable IT solutions.",
    brand:"SklassicsTech", year:"2025", cta:"Get Services", link:"https://sklassicstech.com",
    status:"INITIATE TECH", icon:"laptop" },
  { kicker:"LEARNING • PLATFORM", title:"Learning Management System",
    headline:"Sklassics LMS: Simplify Online Learning",
    desc:"Smart, flexible and interactive learning management system for institutions.",
    brand:"Sklassics LMS", year:"2025", cta:"Launch LMS", link:"https://sklassics-lms.com",
    status:"INITIATE LMS", icon:"users" },
  { kicker:"AI • CAREERS", title:"AI Interview Platform",
    headline:"Boost Your Confidence with AI-Powered Mock Interviews",
    desc:"AI-driven insights to prepare for real-world interviews.",
    brand:"SklassicsAI", year:"2025", cta:"Try AI Interview", link:"https://sklassicsai.com",
    status:"INITIATE AI", icon:"cpu" },
  { kicker:"QUIZ • LEARN", title:"Quiz & Test Application",
    headline:"Interactive Quizzes and Tests for Continuous Learning",
    desc:"Assess knowledge, track progress, and learn better.",
    brand:"Sklassics Academy", year:"2025", cta:"Start Quiz", link:"https://sklassicsacademy.com",
    status:"INITIATE QUIZ", icon:"quiz" },
  { kicker:"FINTECH • APPS", title:"Loan Application",
    headline:"Sklassics Loan App: Simplify Your Loan Journey",
    desc:"Fast, secure, and transparent loan processing at your fingertips.",
    brand:"Sklassics Loan", year:"2025", cta:"Apply Loan", link:"https://sklassics-loan.com",
    status:"INITIATE LOAN", icon:"doc" },
  { kicker:"COMMERCE • DIGITAL", title:"E-Commerce Application",
    headline:"Your Online Storefront with Sklassics E-Commerce",
    desc:"Launch your e-commerce platform quickly and grow your business.",
    brand:"Sklassics E-Commerce", year:"2025", cta:"Shop Now", link:"https://sklassics-ecommerce.com",
    status:"INITIATE SHOP", icon:"cart" },
  { kicker:"REAL ESTATE • DIGITAL", title:"Real Estate Application",
    headline:"VLRWS Real Estate App: Smarter Property Solutions",
    desc:"Discover, buy, and rent properties with ease.",
    brand:"VLRWS", year:"2025", cta:"Explore Properties", link:"https://vlrws.com",
    status:"INITIATE ESTATE", icon:"building" },
];

/* ---------- Sample Website Designs (12) ---------- */

const designNames = [
  "Hanuman Cars",
  "Learning Management System",
  "SklassicsCom",
  "Netflix Clone",
  "Finance Recruitment",
  "Portfolio",
  "Travel Explorer",
  "Restuarant",
  "Trae-ai clone",
  "ScrewFast",
  "Businiess",
  "Ecommerce website"
];

const designDescs = [
  "Trusted dealership offering quality cars with reliable service and support.",
  "A smart learning management system for schools, colleges, and corporates.",
  "Innovative IT solutions provider delivering modern digital products and services.",
  "A streaming platform replica featuring movies, series, and user-friendly browsing",
  "A smart platform for managing money, investments, and financial insights",
  "A modern personal portfolio showcasing projects, skills, and achievements",
  "An interactive travel website for exploring destinations and planning trips.",
  "A digital menu and booking system designed for modern dining experiences.",
  "A fast and reliable service for hardware, tools, and industrial solutions",
  "E-learning hub with courses and progress tracking.",
  "A professional business landing page highlighting services and growth",
  "A sleek online store with seamless shopping and checkout experience."
];

// ✅ Add unique links for each design
const designLinks = [
  "hanumancars.com",
  "sklassics-lms.com",
  "sklassics.com",
  "https://ticky5.netlify.app/",
  "https://sklassicsfinance.netlify.app/",
  "https://sklassicsportfolio1.netlify.app/",
  "https://sklassicstravels.netlify.app/",
  "https://sklassicsrestaurant.netlify.app/",
  "https://sklassicscrea.netlify.app/",
  "https://sklassicsscrew.netlify.app/",
  "https://sklassicsbusiness1.netlify.app/",
  "https://ecommerce-two-pink-84.vercel.app/"
];
const designImages = [
  hanuman11,
  learnms,
  sklassics,
  Netflix,
  finance,
  portfolio,
  travel,
  resturant,
  trae1,
  screw,
  business,
  ecommerce
];


const DESIGNS = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  name: designNames[i],
  img: designImages[i],   // ✅ individual photo for each design
  desc: designDescs[i],
  link: designLinks[i]
}));



/* ---------- Component ---------- */
export default function ProjectViewNew() {
  const heroRef = useRef(null);
  const barRef = useRef(null);

  const [heroIndex, setHeroIndex] = useState(0);
  const [hoverHero, setHoverHero] = useState(false);

  const [vw, setVw] = useState(typeof window !== "undefined" ? window.innerWidth : 1280);
  useEffect(() => {
    const onResize = () => setVw(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  const effectiveMode = useMemo(() => (vw <= 640 ? "mobile" : "desktop"), [vw]);

  /* Hero autoplay + progress */
  useEffect(() => {
    const slides = heroRef.current?.querySelectorAll?.(".slide");
    if (!slides || !slides.length) return;
    slides.forEach((s, i) => (s.style.opacity = i === heroIndex ? "1" : "0"));
    if (barRef.current) barRef.current.style.width = "0";
    const start = Date.now(); const DURATION = 3300;
    let raf;
    const tick = () => {
      const elapsed = hoverHero ? 0 : Date.now() - start;
      const pct = Math.min(1, elapsed / DURATION);
      if (barRef.current) barRef.current.style.width = `${pct * 100}%`;
      if (pct >= 1) setHeroIndex((heroIndex + 1) % IMGS.length);
      else raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [heroIndex, hoverHero]);

  /* Touch swipe on hero for mobile */
  const touchRefState = useRef({ x: 0, t: 0 });
  const onTouchStart = (e) => { const t = e.touches[0]; touchRefState.current = { x: t.clientX, t: Date.now() }; };
  const onTouchEnd = (e) => {
    const dx = (e.changedTouches[0]?.clientX || 0) - touchRefState.current.x;
    const dt = Date.now() - touchRefState.current.t;
    if (dt < 450 && Math.abs(dx) > 40) {
      setHeroIndex((i) => (dx < 0 ? (i + 1) % IMGS.length : (i - 1 + IMGS.length) % IMGS.length));
    }
  };

  /* Header reveal */
  const introRef = useRef(null);
  const [introIn, setIntroIn] = useState(false);
  useEffect(() => {
    const opts = { threshold: 0.3 };
    const introObs = new IntersectionObserver(([e]) => setIntroIn(!!e.isIntersecting), opts);
    if (introRef.current) introObs.observe(introRef.current);
    return () => introObs.disconnect();
  }, []);

  /* Stagger in cards */
  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(en => en.isIntersecting && en.target.classList.add("in"));
    }, { threshold: 0.25 });
    document.querySelectorAll(".svc-card, .d-card").forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const locDate = useMemo(() => new Date().toISOString().slice(0,10), []);

  return (
    <div className="wrap">
      <style dangerouslySetInnerHTML={{ __html: styles }} />
      <div className={`panel ${effectiveMode === "mobile" ? "mobile" : "desktop"}`}>
        {/* Topbar */}
        

        {/* Header */}
        <div className="header header-grid" id="about">
          <div className={`intro ${introIn ? 'in' : ''}`} ref={introRef}>
            <h2 className="title">
              
             <span className="ink">Welcome to Sklassics Technologies</span>
</h2>
<p className="lead lead-rail">
  An innovation-driven company delivering <span className="hl">cutting-edge software</span> and 
  <span className="hl"> smart digital solutions</span>. Empowering businesses with technology 
  that transforms ideas into reality.
</p>

          </div>
        </div>
        <hr className="divider" />

        {/* HERO */}
        <div className="section" id="hero">
          
          <div className="hero" onMouseEnter={() => setHoverHero(true)} onMouseLeave={() => setHoverHero(false)}>
            <div className="hero-inner" ref={heroRef} onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
              {IMGS.map((img, i) => (
                <div className={`slide ${i === heroIndex ? "active" : ""}`} key={img.src}>
                  <img src={img.src} alt={img.title} loading="eager" />
                </div>
              ))}
              <div className="fade-shadow" />
              
              <div className="hero-info">
                <p className="hero-title">{IMGS[heroIndex].title}</p>
                <p className="hero-desc">{IMGS[heroIndex].desc}</p>
              </div>
              <div className="progress"><div className="bar" ref={barRef} /></div>
            </div>
            <div className="thumbs">
              {IMGS.map((img, i) => (
                <button key={img.src} className={`thumb ${i === heroIndex ? "active" : ""}`} onClick={() => setHeroIndex(i)}>
                  <img src={img.src} alt={`${img.title} thumbnail`} loading="lazy" />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* SERVICES */}
        <section className="svc" id="services">
          {SERVICES.map((s, idx) => (
            <div className="svc-group" key={s.title + idx}>
              <div className="svc-corners" aria-hidden="true" />
              <div className="svc-head">
                <div className="svc-left">
                  <div className="svc-kicker">{s.kicker}</div>
                  <h3 className="svc-title">{s.title}</h3>
                </div>
                <div className="svc-init">{s.status} <span className="dot" /></div>
              </div>
              <div className="svc-line" />
              <article className="svc-card">
                <h4 className="svc-h text-purple-300 font-black">
  {s.headline}
</h4>


                <p className="svc-desc">{s.desc}</p>
                <div className="svc-meta">
                  <span>{s.brand}</span>
                  <span>•</span>
                  <span>{s.year}</span>
                </div>
                <a className="cta" href={s.link} target="_blank" rel="noreferrer">
                  <span className="badge">{ICONS[s.icon] ?? ICONS.menu}</span>
                  {s.cta}
                </a>
              </article>
              <div className="svc-foot">
                <div style={{display:'flex',alignItems:'center',gap:8}}>
                  <span className="cornerL" aria-hidden="true" /> <span>ACTIVE</span>
                </div>
                <div style={{display:'flex',alignItems:'center',gap:8}}>
                  <span>LOC: {locDate}</span> <span className="cornerR" aria-hidden="true" />
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* SAMPLE WEBSITE DESIGNS */}
        <section className="designs" id="designs">
          <div className="section-h">
            <h3>From Vision to Reality: See What We Build</h3>
          </div>
          <p className="design-intro">
            This is how we build. Explore our portfolio of high-performing site layouts, from impactful hero sections to trust-building features.
            Click to see a live example of our work on <strong>SklassicsTech</strong>. Then, we'll adapt and perfect a design for you. 
            We’ll tailor colors, content and sections to your brand.
          </p>

          <div className="design-grid">
            {DESIGNS.map((d) => (
              <article className="d-card" key={d.id}>
                <div className="d-img">
                  <img src={d.img} alt={`${d.name} preview`} loading="lazy" />
                </div>
                <div className="d-body">
                  <h4 className="d-title">{d.name}</h4>
                  <p className="d-desc">{d.desc}</p>
                  <div className="d-cta">
                    <a className="cta" href={d.link} target="_blank" rel="noreferrer">
                      <span className="badge">{ICONS.external}</span>
                      Open Design
                    </a>
                
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
