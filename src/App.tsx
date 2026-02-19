import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <div className="min-h-screen bg-white text-black font-sans">
      <Analytics />

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
              <a href="dist/Naveenam_Hrishikesh_CV_Feb26.pdf" className="text-blue-700 hover:underline">CV</a>
            </li>
          </ul>
        </div>

        <div className="clear-both" />

        {/* About Me */}
        <h2 className="text-xl font-bold mt-8 mb-3">About Me</h2>
        <p className="mb-3">
          I am an undergraduate student at the{' '}
          <a href="https://www.utdallas.edu/" className="text-blue-700 hover:underline">University of Texas at Dallas</a>{' '}
          pursuing a B.S. in Computer Science with a Minor in Mathematics. I am currently a research assistant at the{' '}
          <a href="https://www.prasadcalyam.com/research" className="text-blue-700 hover:underline">VIMAN Lab</a>{' '}
          at the{' '}
          <a href="https://missouri.edu/" className="text-blue-700 hover:underline">University of Missouri</a>,
          advised by{' '}
          <a href="https://www.prasadcalyam.com/" className="text-blue-700 hover:underline">Dr. Prasad Calyam</a>,
          working on confidential computing approaches for ML/DL-based scientific workflows on Volunteer Edge-Cloud resources.
          I have also fine-tuned bioinformatics models (Evo2, BioMistral7B) and deployed testbeds using OpenFaaS and MicroK8S on AWS.
        </p>
        <p className="mb-3">
          Previously, I worked as a student researcher with{' '}
          <a href="https://acmutd.co/" className="text-blue-700 hover:underline">ACM at UT Dallas</a>{' '}
          on GAN-based augmentation pipelines for astronomical anomaly detection, and with{' '}
          <a href="https://www.aisutd.org/" className="text-blue-700 hover:underline">AIS at UT Dallas</a>{' '}
          building ML-powered sports analytics tools.
          I also lead development at{' '}
          <a href="#" className="text-blue-700 hover:underline">AI51 Innovation Labs</a>{' '}
          and serve as an officer at AIS, organizing HackAI — UTD's premier AI hackathon.
        </p>

        {/* Research Interests */}
        <h2 className="text-xl font-bold mt-8 mb-3">Research Interests</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Confidential Computing &amp; Privacy-Preserving ML</li>
          <li>Generative Adversarial Networks &amp; Anomaly Detection</li>
          <li>Volunteer Edge-Cloud Computing &amp; Resource Allocation</li>
          <li>Bioinformatics &amp; Health Informatics</li>
        </ul>

        {/* News */}
        <h2 className="text-xl font-bold mt-8 mb-3">News</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Spring 2026: Joined the{' '}
            <a href="https://www.aisutd.org/" className="text-blue-700 hover:underline">Artificial Intelligence Society</a>{' '}
            as an Officer, organizing HackAI.
          </li>
          <li>Spring 2026: Joined the AI Mentorship Program (AIM) as Project Manager, mentoring students on TuneTrend.</li>
          <li>Fall 2025: Won 2nd Place (PNC Track) at HackUTD 2025.</li>
          <li>Fall 2025: Joined{' '}
            <a href="#" className="text-blue-700 hover:underline">AI51 Innovation Labs</a>{' '}
            as Lead Developer, building Research Mate — an AI-powered research paper copilot.
          </li>
          <li>Spring 2025: Completed GAN-based anomaly detection research with{' '}
            <a href="https://acmutd.co/" className="text-blue-700 hover:underline">ACM at UT Dallas</a>{' '}
            — achieved 0.85 ROC-AUC on Galaxy10 dataset.
          </li>
          <li>Fall 2024: Began research assistantship at the{' '}
            <a href="https://www.prasadcalyam.com/research" className="text-blue-700 hover:underline">VIMAN Lab</a>,
            {' '}University of Missouri, on confidential computing for scientific workflows.
          </li>
          <li>Fall 2024: Dean's List, UT Dallas.</li>
        </ul>

        {/* Projects */}
        <h2 className="text-xl font-bold mt-8 mb-3">Projects</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <span className="font-medium">AutoPM</span>:
            {' '}AI-powered PM automation platform orchestrating 8 specialized LangGraph agents for end-to-end workflows including ideation, user stories, RICE prioritization, OKR alignment, and wireframe generation.
            {' '}Built with Next.js, MongoDB, Auth0, and Gemini 2.0 Flash.
          </li>
          <li>
            <span className="font-medium">EduTube</span>:
            {' '}AI-powered lecture companion integrating TwelveLabs API for semantic video search and Gemini API for auto-generated study materials, processing 100+ educational videos.
            {' '}Built with React, Fastify, and Google Cloud Storage.
          </li>
          <li>
            <a href="https://github.com/ShaheemJ/CelestAI" className="text-blue-700 hover:underline font-medium">CelestAI</a>:
            {' '}AI system using DCGAN, StyleGAN, VQGAN and VAE based augmentation pipeline improving astronomical anomaly-detection metrics.
            {' '}(<a href="/celestai-poster.png" className="text-blue-700 hover:underline">Poster</a>
            {' | '}
            <a href="https://github.com/ShaheemJ/CelestAI" className="text-blue-700 hover:underline">GitHub</a>)
          </li>
          <li>
            <a href="https://github.com/Sarvesh30/NetGainNBA" className="text-blue-700 hover:underline font-medium">NetGain NBA</a>:
            {' '}Interactive simulator generating complete playoff brackets for NBA teams (1995–2024), built with AIS UT Dallas.
            {' '}(<a href="https://github.com/Sarvesh30/NetGainNBA" className="text-blue-700 hover:underline">GitHub</a>)
          </li>
          <li>
            <a href="https://github.com/hrishinave/UTD-Spots" className="text-blue-700 hover:underline font-medium">UTD Spots</a>:
            {' '}iOS app helping UT Dallas students discover and share study locations.
            {' '}(<a href="https://github.com/hrishinave/UTD-Spots" className="text-blue-700 hover:underline">GitHub</a>)
          </li>
          <li>
            <a href="https://github.com/hrishinave/email-agent" className="text-blue-700 hover:underline font-medium">Cold Email Agent</a>:
            {' '}Agentic cold email outreach tool for applying to research lab internships.
            {' '}(<a href="https://github.com/hrishinave/email-agent" className="text-blue-700 hover:underline">GitHub</a>)
          </li>
        </ul>

        {/* Experience */}
        <h2 className="text-xl font-bold mt-8 mb-3">Experience</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <span className="font-medium">Research Assistant — VIMAN Lab, Univ. of Missouri</span> (Fall 2024 – Spring 2025)<br />
            <span className="ml-5 inline-block">Confidential computing for ML/DL scientific workflows on Volunteer Edge-Cloud resources. Fine-tuned Evo2 and BioMistral7B bioinformatics models on AWS EC2.</span>
          </li>
          <li>
            <span className="font-medium">Student Researcher — ACM, UT Dallas</span> (Spring 2025)<br />
            <span className="ml-5 inline-block">Developed DCGAN and StyleGAN architectures for astronomical anomaly detection, achieving 0.85 ROC-AUC on Galaxy10.</span>
          </li>
          <li>
            <span className="font-medium">Research Assistant — VIMAN Lab, Univ. of Missouri</span> (Fall 2023 – Spring 2024)<br />
            <span className="ml-5 inline-block">Implemented K-means clustering for volunteer edge node resource allocation, achieving 84% placement accuracy. Built Docker-based AWS testbed.</span>
          </li>
          <li>
            <span className="font-medium">Lead Developer — AI51 Innovation Labs</span> (Fall 2025 – Present)<br />
            <span className="ml-5 inline-block">Leading development of Research Mate, an AI-powered research paper copilot with citation graph visualization and cross-domain paper discovery.</span>
          </li>
          <li>
            <span className="font-medium">Officer — Artificial Intelligence Society (AIS), UT Dallas</span> (Spring 2026 – Present)<br />
            <span className="ml-5 inline-block">Organizing HackAI, UTD's premier annual AI hackathon. Facilitating workshops and community initiatives.</span>
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
