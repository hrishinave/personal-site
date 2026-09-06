import { ArrowUpRight } from 'lucide-react';
import type { ReactNode } from 'react';
export function PageHeading({ number, title, children }: { number: string; title: string; children: ReactNode }) {
  return <header className="page-heading"><p className="eyebrow"><span className="blue-text">{number}</span> / Hrishikesh Naveenam</p><h1>{title}<span className="blue-text">.</span></h1><p>{children}</p></header>;
}
export type EntryData = { id: string; title: string; date: string; summary: string; bullets: string[]; stack: string; links?: { label: string; href: string }[]; category?: string; context?: string; organization?: string; award?: string };
export function PortfolioEntry({ item, index }: { item: EntryData; index: number }) {
  return <article className="entry" id={item.id}>
    <div className="entry-date"><span className="entry-index">{String(index + 1).padStart(2, '0')}</span>{item.date || item.category}</div>
    <div><p className="item-kicker">{item.organization || item.category}</p><h2>{item.title}</h2>{item.context && <p>{item.context}</p>}{item.award && <span className="inline-note">{item.award}</span>}<p>{item.summary}</p><ul>{item.bullets.map(b => <li key={b}>{b}</li>)}</ul><p className="stack">{item.stack}</p>{!!item.links?.length && <div className="entry-links">{item.links.map(link => <a key={link.href} href={link.href} target="_blank" rel="noreferrer">{link.label} <ArrowUpRight size={16} aria-hidden="true" /></a>)}</div>}</div>
  </article>;
}
