import React from 'react';
import { Github, Linkedin, FileText, ExternalLink, Code } from 'lucide-react';

// Ensure Manrope font is available
const fontLink = document.createElement('link');
fontLink.href = 'https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700&display=swap';
fontLink.rel = 'stylesheet';
if (!document.querySelector('link[href*="Manrope"]')) document.head.appendChild(fontLink);

interface ItemProps { 
  title: string; 
  desc: string;
  posterUrl?: string;
  posterName?: string;
  codeUrl?: string;
}

const Item: React.FC<ItemProps> = ({ title, desc, posterUrl, posterName, codeUrl }) => (
  <li className="mb-6 max-w-xs">
    <h4 className="font-semibold text-gray-50 mb-1">{title}</h4>
    <p className="text-sm text-gray-400 leading-relaxed mb-3">{desc}</p>
    <div className="flex items-center gap-2">
      {posterUrl && posterName && (
        <a 
          href={posterUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-3 py-1.5 bg-dark-800 border border-dark-700 rounded-md text-xs text-gray-300 hover:text-gray-50 hover:bg-dark-700 transition-colors"
        >
          <ExternalLink className="w-3 h-3" />
          {posterName}
        </a>
      )}
      {codeUrl && (
        <a 
          href={codeUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-3 py-1.5 bg-dark-800 border border-dark-700 rounded-md text-xs text-gray-300 hover:text-gray-50 hover:bg-dark-700 transition-colors"
        >
          <Code className="w-3 h-3" />
          Code
        </a>
      )}
    </div>
  </li>
);

interface ColumnProps { title: string; items: ItemProps[] }
const Column: React.FC<ColumnProps> = ({ title, items }) => (
  <section>
    <h3 className="uppercase text-xs tracking-widest text-gray-500 mb-6">{title}</h3>
    <ul>
      {items.map((it) => (
        <Item key={it.title} {...it} />
      ))}
    </ul>
  </section>
);

function App() {
  const projects: ItemProps[] = [
    { 
      title: 'GAN-Based Anomaly Detection', 
      desc: 'AI system using DCGAN, StyleGAN, VQGAN and VAE for astronomical image synthesis and rare-event detection.',
      posterUrl: '/celestai-poster.png',
      posterName: 'Poster'
    },
          { 
        title: 'NetGain NBA', 
        desc: 'Interactive simulator generating complete playoff brackets for NBA teams (1995-2024) built with AIS UT Dallas.',
        codeUrl: 'https://github.com/Sarvesh30/NetGainNBA'
      },
    { title: 'UTD Spots', desc: 'iOS app that helps UT Dallas students discover and share study locations in a concise manner.' },
    { title: 'Portfolio Website', desc: 'Modern, responsive portfolio built with React, TypeScript and Tailwind CSS.' },
    { title: 'Deep Learning Research', desc: 'Comprehensive ML research projects exploring various neural-network architectures.' },
    { title: 'Data Analytics Platform', desc: 'Full-stack platform for data visualisation and statistical analysis.' }
  ];

  const experience: ItemProps[] = [
    { title: 'Researcher – ACM UT Dallas', desc: 'Developed GAN-based augmentation pipeline improving astronomical anomaly-detection metrics.' },
    { title: 'ML Engineer – AIS UT Dallas', desc: 'Built interactive NBA playoff simulator and optimised TabNet models on official NBA data.' },
    { title: 'Research Assistant – VIMAN Lab', desc: 'Implemented K-means clustering for volunteer edge nodes achieving 84 % placement accuracy.' }
  ];

  return (
    <div className="min-h-screen bg-dark-950 text-gray-50 font-sans">
      {/* Header */}
      <header className="px-6 py-10 md:py-16 max-w-5xl mx-auto flex flex-col gap-2">
        {/* Genmoji image */}
        <img src="/my-genmoji.png" alt="Hrishikesh" className="w-12 h-12 mb-6 rounded-lg" />
        
        <h1 className="text-3xl md:text-4xl font-bold">
          <span className="animate-rainbow bg-gradient-to-r from-red-400 via-orange-400 via-yellow-400 via-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">Hrishikesh</span>
          &nbsp;
          <span className="animate-rainbow bg-gradient-to-r from-red-400 via-orange-400 via-yellow-400 via-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">Naveenam</span>
        </h1>
        <span className="text-xl text-gray-400 font-semibold tracking-wide">Undergrad Researcher, Builder</span>
        
        {/* Resume Link */}
        <div className="flex items-center mt-6">
          <a 
            href="/resume june25.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-dark-800 border border-dark-700 rounded-lg text-gray-300 hover:text-gray-50 hover:bg-dark-700 transition-colors"
          >
            <FileText className="w-4 h-4" />
            Resume
          </a>
        </div>
      </header>

      {/* 2-column grid */}
      <main className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 px-6 pb-24">
        <Column title="Projects" items={projects} />
        <Column title="Experience" items={experience} />
      </main>

      {/* Footer */}
      <footer className="max-w-5xl mx-auto px-6 pb-16 text-gray-500 text-sm">
        <div className="flex items-center gap-4 mb-6">
          <a href="https://github.com/hrishinave" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
            <Github className="w-5 h-5" />
          </a>
          <a href="https://www.linkedin.com/in/hrishikeshnaveenam/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
        <p>2024—∞ &nbsp; Built by Hrishikesh Naveenam</p>
      </footer>
    </div>
  );
}

export default App; 