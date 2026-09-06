import { ArrowDown, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PageHeading, PortfolioEntry } from '../components/PortfolioEntry';
import cv from '../data/cv.json';
export default function Experience() {
  return <><PageHeading number="03" title="Experience">Research, technical leadership, and education.</PageHeading><div className="page-content">
    <section className="section" aria-labelledby="research-roles"><div className="section-label"><span className="section-number">01</span><h2 id="research-roles">Research appointments</h2></div>{cv.research.map(item => <article className="entry" key={item.id}><div className="entry-date">{item.date}</div><div><h2>{item.role}</h2><p>{item.summary}</p><Link className="text-link" to={'/research#'+item.id}>Research details <ArrowRight size={16} aria-hidden="true" /></Link></div></article>)}</section>
    <section className="section" aria-labelledby="leadership"><div className="section-label"><span className="section-number">02</span><h2 id="leadership">Leadership & involvement</h2></div>{cv.leadership.map((item,index) => <PortfolioEntry key={item.id} item={item} index={index} />)}</section>
    <section className="section" aria-labelledby="education"><div className="section-label"><span className="section-number">03</span><h2 id="education">Education</h2></div><article className="entry"><div className="entry-date">Expected May 2028<br />Dallas, Texas</div><div><h2>The University of Texas at Dallas</h2><p>B.S. in Computer Science · Minor in Mathematics</p><p>GPA: 3.72 · Dean’s List, Fall 2024</p><p>Coursework: Data Structures and Algorithms, Object-Oriented Programming, Discrete Mathematics, Computer Architecture, Linear Algebra, Probability and Statistics.</p></div></article></section>
    <section className="section" aria-labelledby="skills"><div className="section-label"><span className="section-number">04</span><h2 id="skills">Technical skills</h2><a className="section-action" href="/Hrishikesh_Naveenam_CV.pdf" download>Download CV <ArrowDown size={16} aria-hidden="true" /></a></div><div className="skills-grid">{cv.skills.map(skill => <div key={skill.label}><p className="skill-label">{skill.label}</p><p>{skill.value}</p></div>)}</div></section>
  </div></>;
}
