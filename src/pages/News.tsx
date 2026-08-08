function News() {
  return (
    <>
      <h2 className="text-xl font-bold mt-8 mb-3">News</h2>
      <ul className="list-disc list-inside space-y-1">
        <li>Summer 2026: Completed the{' '}
          <a href="https://ugresearch.utdallas.edu/" className="text-blue-700 hover:underline">
            Undergraduate Research Assistant Program (URAP)
          </a>{' '}
          at UT Dallas under Professor Wei Yang (May–August 2026), studying non-determinism in LLM inference.
        </li>
        <li>Fall 2025: Won 2nd Place (PNC Track) at HackUTD 2025, out of 350+ participants.</li>
        <li>Fall 2025: Joined{' '}
          <a href="#" className="text-blue-700 hover:underline">AI51 Innovation Labs</a>{' '}
          as Lead Developer, building Research Mate — an AI-powered research paper copilot.
        </li>
        <li>Fall 2025: Joined AIS's AI Mentorship Program (AIM) as Product Manager, leading the TuneTrend team.</li>
        <li>Spring 2025: Joined the{' '}
          <a href="https://www.aisutd.org/" className="text-blue-700 hover:underline">Artificial Intelligence Society</a>{' '}
          as an Officer, organizing HackAI.
        </li>
        <li>Spring 2025: Completed GAN-based anomaly detection research with{' '}
          <a href="https://acmutd.co/" className="text-blue-700 hover:underline">ACM at UT Dallas</a>{' '}
          — achieved 0.85 ROC-AUC on Galaxy10 dataset.
        </li>
        <li>Fall 2024: Dean's List, UT Dallas.</li>
        <li>Fall 2023: Began research assistantship at the{' '}
          <a href="https://www.prasadcalyam.com/research" className="text-blue-700 hover:underline">VIMAN Lab</a>,
          {' '}University of Missouri, on resource allocation for volunteer edge-cloud workflows.
        </li>
      </ul>
    </>
  );
}

export default News;
