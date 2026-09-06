import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
const metadata: Record<string, { title: string; description: string }> = {
  '/': { title: 'Hrishikesh Naveenam — Computer Science & ML Systems', description: 'Computer science student at UT Dallas. Research in LLM reproducibility, agent systems, and machine learning. Projects, research, and experience.' },
  '/research': { title: 'Research — Hrishikesh Naveenam', description: 'Research in LLM inference reproducibility, astronomical anomaly detection, and resource allocation for distributed scientific workflows.' },
  '/projects': { title: 'Projects — Hrishikesh Naveenam', description: 'Holler, live multiplayer poker, AutoPM, NetGainNBA, EduTube, and open-source contributions to OpenWorker.' },
  '/experience': { title: 'Experience — Hrishikesh Naveenam', description: 'Research appointments, leadership at AI51 Innovation Labs and UT Dallas, education, and technical skills.' },
  '/news': { title: 'News — Hrishikesh Naveenam', description: 'Updates on research, software projects, and milestones from Hrishikesh Naveenam.' },
};
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    const page = metadata[pathname] || metadata['/'];
    document.title = page.title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', page.description);
    const target = hash ? document.getElementById(decodeURIComponent(hash.slice(1))) : null;
    if (target) target.scrollIntoView({ behavior: 'instant' });
    else window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname, hash]);
  return null;
}
