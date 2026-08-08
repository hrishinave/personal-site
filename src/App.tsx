import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <div className="min-h-screen bg-white text-black font-sans">
      <Analytics />

      {/* Nav */}
      <nav className="sticky top-0 z-10 bg-white/90 backdrop-blur border-b border-gray-200">
        <div className="max-w-3xl mx-auto px-6 py-3 flex flex-wrap gap-x-5 gap-y-1 text-sm">
          {[
            ['About', '#about'],
            ['Research Interests', '#research-interests'],
            ['News', '#news'],
            ['Projects', '#projects'],
            ['Experience', '#experience'],
          ].map(([label, href]) => (
            <a key={href} href={href} className="text-blue-700 hover:underline">
              {label}
            </a>
          ))}
        </div>
      </nav>

      <main className="max-w-3xl mx-auto px-6 py-10 md:py-14 text-[15px] leading-relaxed">
        {/* Name */}
        <h1 className="text-3xl font-bold mb-4">Hrishikesh Naveenam</h1>

        {/* Info block with headshot floated right */}
        <div className="relative mb-6">
          <img
            src="/Hrishikesh_N_Headshot.png"
            alt="Hrishikesh Naveenam"
            className="float-right ml-6 mb-4 w-40 h-40 rounded-sm object-cover"
          />

          <p>
            Undergraduate Student<br />
            <a href="https://cs.utdallas.edu/" className="text-blue-700 hover:underline">
              Department of Computer Science
            </a><br />
            <a href="https://www.utdallas.edu/" className="text-blue-700 hover:underline">
              The University of Texas at Dallas
            </a><br />
            Email: <a href="mailto:hrishinave@gmail.com" className="text-blue-700 hover:underline">
              hrishinave@gmail.com
            </a>
          </p>

          <ul className="list-disc list-inside mt-3">
            <li>
              <a href="https://github.com/hrishinave" className="text-blue-700 hover:underline">GitHub</a>
              {' | '}
              <a href="https://www.linkedin.com/in/hrishikeshnaveenam/" className="text-blue-700 hover:underline">LinkedIn</a>
              {' | '}
              <a href="/Naveenam_Hrishikesh_CV.pdf" className="text-blue-700 hover:underline">CV</a>
            </li>
          </ul>
        </div>

        <div className="clear-both" />

        {/* About Me */}
        <h2 id="about" className="text-xl font-bold mt-8 mb-3 scroll-mt-20">About Me</h2>
        <p className="mb-3">
          I am an undergraduate student at the{' '}
          <a href="https://www.utdallas.edu/" className="text-blue-700 hover:underline">University of Texas at Dallas</a>{' '}
          studying Computer Science with a Minor in Mathematics, graduating in May 2028. I am broadly interested in
          machine learning systems — how models behave once they leave the notebook and have to run reliably on real
          serving infrastructure.
        </p>
        <p className="mb-3">
          My research so far spans reproducibility in LLM inference, generative models for anomaly detection, and
          resource allocation for distributed scientific workflows. Outside of research, I build things with friends and
          help run the AI community at UTD.
        </p>

        {/* Research Interests */}
        <h2 id="research-interests" className="text-xl font-bold mt-8 mb-3 scroll-mt-20">Research Interests</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Reproducibility &amp; Non-Determinism in LLM Inference</li>
          <li>ML Systems: Serving Stacks, Kernels, and Hardware Backends</li>
          <li>Reliability, Testing, and Evaluation of AI Systems</li>
          <li>LLM Agents &amp; Multi-Agent Workflows</li>
          <li>Generative Models &amp; Anomaly Detection</li>
        </ul>

        {/* News */}
        <h2 id="news" className="text-xl font-bold mt-8 mb-3 scroll-mt-20">News</h2>
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

        {/* Projects */}
        <h2 id="projects" className="text-xl font-bold mt-8 mb-3 scroll-mt-20">Projects</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <span className="font-medium">AutoPM</span> (November 2025):
            {' '}AI copilot orchestrating 8 LangGraph agents across a 7-step product workflow — research, user stories,
            RICE prioritization, wireframing, and Jira tickets — cutting an estimated 10+ hours of manual PM work per
            cycle. Type-safe agent communication with Zod-validated outputs across Jira, Gmail, and Gemini.
            {' '}Built with Next.js, TypeScript, and Auth0. <span className="italic">2nd Place out of 350+ at HackUTD.</span>
          </li>
          <li>
            <span className="font-medium">OpenWorker</span> (open-source contribution):
            {' '}Added 4 NVIDIA NIM catalog models to OpenWorker's provider ecosystem behind an OpenAI-compatible
            interface, first closing an authentication gap that let invalid API keys pass validation.
            {' '}(<a href="https://github.com/andrewyng/openworker/pull/185" className="text-blue-700 hover:underline">PR #185</a>)
          </li>
          <li>
            <span className="font-medium">EduTube</span> (September 2025):
            {' '}AI-powered lecture companion integrating the TwelveLabs API for semantic video search and the Gemini API
            for auto-generated study materials, processing 100+ educational videos. Fastify backend with webhook-based
            real-time video processing at 95% uptime, and a React + Vite frontend in a type-safe monorepo.
          </li>
          <li>
            <a href="https://github.com/hrishinave/UTD-Spots" className="text-blue-700 hover:underline font-medium">UTD Spots</a> (May 2025):
            {' '}iOS app enabling 100+ students to discover campus study locations with amenity filtering and
            distance-based recommendations via Core Location. MVVM architecture with MapKit for interactive campus
            visualization.
            {' '}(<a href="https://github.com/hrishinave/UTD-Spots" className="text-blue-700 hover:underline">GitHub</a>)
          </li>
          <li>
            <a href="https://github.com/Sarvesh30/NetGainNBA" className="text-blue-700 hover:underline font-medium">NetGain NBA</a> (February – May 2025):
            {' '}Full-stack platform achieving 88% playoff-prediction accuracy on 2020–2024 data with a 7-model ML
            ensemble across 89 features, plus live win-probability tracking from an NBA Stats API pipeline and K-Means
            player clustering into 9 archetypes. Interactive GM toolkit with bracket simulation, salary-cap tracking,
            and a trade engine over 26 datasets.
            {' '}(<a href="https://net-gain-nba.vercel.app" className="text-blue-700 hover:underline">Live</a>
            {' | '}
            <a href="https://github.com/Sarvesh30/NetGainNBA" className="text-blue-700 hover:underline">GitHub</a>)
          </li>
          <li>
            <a href="https://github.com/ShaheemJ/CelestAI" className="text-blue-700 hover:underline font-medium">CelestAI</a> (February – May 2025):
            {' '}GAN-based augmentation pipeline (DCGAN, StyleGAN, VQGAN, VAE) improving astronomical anomaly-detection
            metrics to 0.85 ROC-AUC on Galaxy10.
            {' '}(<a href="/celestai-poster.png" className="text-blue-700 hover:underline">Poster</a>
            {' | '}
            <a href="https://github.com/ShaheemJ/CelestAI" className="text-blue-700 hover:underline">GitHub</a>)
          </li>
          <li>
            <a href="https://github.com/hrishinave/email-agent" className="text-blue-700 hover:underline font-medium">Cold Email Agent</a>:
            {' '}Agentic cold email outreach tool for applying to research lab internships.
            {' '}(<a href="https://github.com/hrishinave/email-agent" className="text-blue-700 hover:underline">GitHub</a>)
          </li>
        </ul>

        {/* Experience */}
        <h2 id="experience" className="text-xl font-bold mt-8 mb-3 scroll-mt-20">Experience</h2>
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

        {/* Footer */}
        <hr className="mt-12 mb-4 border-gray-300" />
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Hrishikesh Naveenam
        </p>
      </main>
    </div>
  );
}

export default App;
