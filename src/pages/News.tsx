import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { PageHeading } from '../components/PortfolioEntry';
const updates = [
  {date:'July 2026',title:'Built a live multiplayer poker app',text:'An authoritative WebSocket game server, tested with 360 concurrent players across 60 tables. Game rules and chip accounting checked across 3,000 fuzzed hands.',href:'/projects#poker'},
  {date:'May 2026',title:'Joined UTD’s Undergraduate Research Assistant Program',text:'Working with Prof. Wei Yang on the root causes of non-determinism in LLM inference.',href:'/research#llm-reproducibility'},
  {date:'November 2025',title:'2nd Place at HackUTD’s PNC Track',text:'Built AutoPM: eight agents covering a seven-step product workflow, from research to Jira tickets. HackUTD 2025 had 350+ participants.',href:'/projects#autopm'},
  {date:'September 2025',title:'Built EduTube',text:'A lecture companion using semantic video search and generated study materials, with TwelveLabs and Gemini.',href:'/projects#edutube'},
  {date:'August 2025',title:'Started leading Research Mate and TuneTrend',text:'Joined AI51 Innovation Labs as Lead Developer and UTD’s AI Mentorship Program as Product Manager.',href:'/experience#leadership'},
  {date:'May 2025',title:'Joined the Artificial Intelligence Society as an officer',text:'Helping organize HackAI and technical workshops at UT Dallas.',href:'/experience#ais'},
  {date:'May 2025',title:'Completed astronomical anomaly detection research',text:'Trained generative models for Galaxy10, reaching 0.85 ROC-AUC with DCGAN-based data augmentation.',href:'/research#celestai'},
  {date:'Fall 2024',title:'UT Dallas Dean’s List',text:'Recognized for academic achievement.',href:'/experience#education'},
  {date:'September 2023',title:'Began research at the University of Missouri',text:'Studied resource allocation for scientific workflows on volunteer edge infrastructure.',href:'/research#edge-workflows'},
];
export default function News() {
  return <><PageHeading number="04" title="News">Research, projects, and a few milestones.</PageHeading><div className="page-content">{updates.map(item => <article className="entry news-entry" key={item.title}><div className="entry-date">{item.date}</div><div><h2>{item.title}</h2><p>{item.text}</p><Link className="text-link" to={item.href}>Details <ArrowRight size={16} aria-hidden="true" /></Link></div></article>)}</div></>;
}
