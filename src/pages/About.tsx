function About() {
  return (
    <>
      <h2 className="text-xl font-bold mt-8 mb-3">About Me</h2>
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
    </>
  );
}

export default About;
