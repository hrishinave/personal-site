import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
export default function About() {
  return <>
    <section className="home-hero">
      <div className="hero-copy"><p className="eyebrow"><span className="blue-dot" /> Computer science · UT Dallas</p><h1>Hrishikesh<br />Naveenam<span className="blue-text">.</span></h1><p className="hero-description">I study non-determinism in LLM inference and build agent systems, web applications, and machine learning tools.</p><div className="hero-links"><Link className="button-link" to="/projects">Explore my work <ArrowRight size={18} aria-hidden="true" /></Link><a className="text-link" href="https://github.com/hrishinave" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={17} aria-hidden="true" /></a></div></div>
      <figure className="portrait"><div className="portrait-frame"><img src="/Hrishikesh_N_Headshot.png" alt="Hrishikesh Naveenam" width="238" height="349" loading="eager" /></div><figcaption><span>Based in Dallas, TX</span></figcaption></figure>
    </section>
    <div className="intro-strip"><span>B.S. Computer Science</span><span>Minor in Mathematics</span><span>Class of 2028</span></div>
    <section className="section" aria-labelledby="current-research">
      <div className="section-label"><span className="section-number">01</span><h2 id="current-research">Current research</h2></div>
      <div className="research-panel"><div><p className="eyebrow">UT Dallas · Advised by Prof. Wei Yang</p><h3>Same model.<br />Different results.</h3><p>I investigate why LLM inference runs diverge across serving stacks, kernels, and hardware. My work combines a taxonomy of failure modes with Python harnesses that reproduce them.</p><Link className="panel-link" to="/research">Read about the research <ArrowUpRight size={19} aria-hidden="true" /></Link></div><div className="research-stat"><span className="stat-number">200<span>+</span></span><span>documented root causes<br />of non-determinism</span><span className="stat-note">UTD URAP / May 2026–present</span></div></div>
    </section>
    <section className="section" aria-labelledby="selected-work">
      <div className="section-label"><span className="section-number">02</span><h2 id="selected-work">Selected projects</h2><Link className="section-action" to="/projects">All projects <ArrowRight size={16} aria-hidden="true" /></Link></div>
      <div className="selected-grid">
        <a className="selected-project" href="https://github.com/hrishinave/Holler" target="_blank" rel="noreferrer"><div className="project-topline"><span>01 / Agent systems</span><ArrowUpRight size={22} aria-hidden="true" /></div><h3>Holler</h3><p>One persistent agent across WhatsApp, Telegram, and voice. Shared memory and crash-safe actions.</p><div className="project-result">91% <span>task completion · 100-workflow evaluation</span></div><p className="stack">Python / FastAPI / TypeScript / SQLite</p></a>
        <a className="selected-project" href="https://poka-client.vercel.app" target="_blank" rel="noreferrer"><div className="project-topline"><span>02 / Real-time systems</span><ArrowUpRight size={22} aria-hidden="true" /></div><h3>Multiplayer poker</h3><p>A live poker app with an authoritative game server, private player views, and persistent accounts.</p><div className="project-result">360 <span>concurrent players in load testing</span></div><p className="stack">React / WebSockets / Node.js / Supabase</p></a>
        <Link className="selected-project" to="/projects#autopm"><div className="project-topline"><span>03 / Product workflows</span><ArrowUpRight size={22} aria-hidden="true" /></div><h3>AutoPM</h3><p>Eight agents handle a seven-step product workflow, from research and user stories to Jira tickets.</p><div className="project-result">2nd <span>PNC Track · HackUTD 2025</span></div><p className="stack">Next.js / TypeScript / LangGraph / Gemini</p></Link>
      </div>
    </section>
    <section className="section home-background" aria-labelledby="background"><div className="section-label"><span className="section-number">03</span><h2 id="background">Education & leadership</h2></div><div className="background-copy"><p>I’m studying computer science and mathematics at the University of Texas at Dallas, graduating in May 2028.</p><p>I also lead development of Research Mate at AI51 Innovation Labs, manage the TuneTrend team in UTD’s AI Mentorship Program, and help organize HackAI with the Artificial Intelligence Society.</p><Link className="text-link" to="/experience">Experience & education <ArrowRight size={18} aria-hidden="true" /></Link></div></section>
  </>;
}
