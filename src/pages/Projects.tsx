function Projects() {
  return (
    <>
      <h2 className="text-xl font-bold mt-8 mb-3">Projects</h2>
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
    </>
  );
}

export default Projects;
