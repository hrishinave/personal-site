import { ArrowUpRight } from 'lucide-react';
import { PageHeading, PortfolioEntry } from '../components/PortfolioEntry';
import cv from '../data/cv.json';
export default function Projects() {
  return <><PageHeading number="02" title="Projects">Agent systems, real-time applications, and machine learning projects.</PageHeading><div className="page-content">{cv.projects.map((item,index) => <PortfolioEntry key={item.id} item={item} index={index} />)}<section className="section" aria-labelledby="open-source"><div className="section-label"><span className="section-number">↗</span><h2 id="open-source">Open source</h2></div><article className="entry"><div className="entry-date">Contributor / PR #185</div><div><h2>{cv.opensource.title}</h2><p>{cv.opensource.summary}</p><p>{cv.opensource.detail}</p><div className="entry-links"><a href={cv.opensource.href} target="_blank" rel="noreferrer">View pull request <ArrowUpRight size={16} aria-hidden="true" /></a></div></div></article></section></div></>;
}
