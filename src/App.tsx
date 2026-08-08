import { Analytics } from "@vercel/analytics/react";
import { Navigate, Route, Routes } from "react-router-dom";

import Layout from "./components/Layout";
import ScrollToTop from "./components/ScrollToTop";
import About from "./pages/About";
import Experience from "./pages/Experience";
import News from "./pages/News";
import Projects from "./pages/Projects";
import Research from "./pages/Research";

function App() {
  return (
    <>
      <Analytics />
      <ScrollToTop />

      <Routes>
        <Route element={<Layout />}>
          <Route index element={<About />} />
          <Route path="research" element={<Research />} />
          <Route path="news" element={<News />} />
          <Route path="projects" element={<Projects />} />
          <Route path="experience" element={<Experience />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
