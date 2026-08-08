function Experience() {
  return (
    <>
      <h2 className="text-xl font-bold mt-8 mb-3">Experience</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>
          <span className="font-medium">Undergraduate Research Assistant — URAP, UT Dallas</span> (May – August 2026)<br />
          <span className="ml-5 inline-block">
            Advised by Professor Wei Yang. Investigated root causes of non-determinism in LLM inference across serving
            stacks, kernel implementations, and hardware backends. Curated a dataset of 200+ documented root causes,
            developed a taxonomy of recurring failure modes, and built Python harnesses to isolate and replay divergent
            inference runs.
          </span>
        </li>
        <li>
          <span className="font-medium">Lead Developer — AI51 Innovation Labs</span> (August 2025 – Present)<br />
          <span className="ml-5 inline-block">
            Leading development of Research Mate, an AI-powered research paper copilot with section-wise summarization,
            citation-aware explanations with source attribution, and interactive citation graph visualization.
          </span>
        </li>
        <li>
          <span className="font-medium">
            Product Manager — AI Mentorship Program (AIM),{' '}
            <a href="https://www.aisutd.org/" className="text-blue-700 hover:underline">AIS</a> at UT Dallas
          </span> (August 2025 – Present)<br />
          <span className="ml-5 inline-block">
            Directing a 4–5 person engineering team building TuneTrend, a genre-aware music popularity predictor with an
            ML pipeline extracting 140+ audio features across 6 genre models.
          </span>
        </li>
        <li>
          <span className="font-medium">Officer — Artificial Intelligence Society (AIS), UT Dallas</span> (May 2025 – Present)<br />
          <span className="ml-5 inline-block">
            Organizing HackAI, UTD's premier annual AI hackathon, for hundreds of participants. Facilitating technical
            workshops and community initiatives promoting AI literacy.
          </span>
        </li>
        <li>
          <span className="font-medium">Student Researcher — UT Dallas</span> (February – May 2025)<br />
          <span className="ml-5 inline-block">
            Designed and trained a DCGAN in PyTorch for astronomical anomaly detection, reaching 0.85 ROC-AUC and 0.72
            recall on Galaxy10. Fine-tuned StyleGAN weights to 0.81 ROC-AUC on rare celestial events, improving
            rare-event detection 15% over baseline.
          </span>
        </li>
        <li>
          <span className="font-medium">Research Assistant — VIMAN Lab, Univ. of Missouri</span> (September 2023 – January 2024)<br />
          <span className="ml-5 inline-block">
            Achieved 84% workflow-placement accuracy across volunteer edge nodes using K-Means clustering over CPU, RAM,
            and storage telemetry. Architected a Docker-based AWS EC2 testbed for repeatable testing across
            heterogeneous edge infrastructure.
          </span>
        </li>
      </ul>
    </>
  );
}

export default Experience;
