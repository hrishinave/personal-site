import { NavLink, Outlet } from 'react-router-dom';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
const navItems = [{ label: 'About', to: '/' }, { label: 'Research', to: '/research' }, { label: 'Projects', to: '/projects' }, { label: 'Experience', to: '/experience' }, { label: 'News', to: '/news' }];
export default function Layout() {
  return <div className="site-shell">
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="site-header">
      <NavLink className="wordmark" to="/" aria-label="Hrishikesh Naveenam, home">hn<span>.</span></NavLink>
      <nav aria-label="Main navigation">{navItems.map(({ label, to }) => <NavLink key={to} to={to} end={to === '/'} className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>{label}</NavLink>)}</nav>
      <a className="cv-link" href="/Hrishikesh_Naveenam_CV.pdf" target="_blank" rel="noreferrer">CV <ArrowDown size={15} aria-hidden="true" /></a>
    </header>
    <main id="main" tabIndex={-1}><Outlet /></main>
    <footer className="site-footer">
      <div className="footer-top"><div><p className="eyebrow">Get in touch</p><a className="email-link" href="mailto:hrishinave@gmail.com">hrishinave@gmail.com <ArrowUpRight aria-hidden="true" /></a></div><div className="footer-socials"><a href="https://github.com/hrishinave" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={16} aria-hidden="true" /></a><a href="https://www.linkedin.com/in/hrishikeshnaveenam/" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={16} aria-hidden="true" /></a></div></div>
      <div className="footer-bottom"><span>© {new Date().getFullYear()} Hrishikesh Naveenam</span><span>Dallas, Texas</span></div>
    </footer>
  </div>;
}
