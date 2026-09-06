import { PageHeading, PortfolioEntry } from '../components/PortfolioEntry';
import cv from '../data/cv.json';
export default function Research() {
  return <><PageHeading number="01" title="Research">My research spans reproducibility in LLM inference, generative models for anomaly detection, and resource allocation for distributed workflows.</PageHeading><div className="page-content"><div className="research-topics" aria-label="Research interests"><span>ML systems</span><span>Reproducibility</span><span>Reliability & evaluation</span><span>Generative models</span><span>Distributed computing</span></div>{cv.research.map((item,index) => <PortfolioEntry key={item.id} item={item} index={index} />)}</div></>;
}
