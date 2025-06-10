import React from 'react'
import { motion } from 'framer-motion'

// Add Manrope font
const fontLink = document.createElement('link');
fontLink.href = 'https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&display=swap';
fontLink.rel = 'stylesheet';
if (!document.querySelector('link[href*="Manrope"]')) {
  document.head.appendChild(fontLink);
}
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card'
import { Badge } from './components/ui/badge'
import { Button } from './components/ui/button'
import { Input } from './components/ui/input'
import { Textarea } from './components/ui/textarea'
import { Github, ExternalLink, Mail, Linkedin } from 'lucide-react'

function App() {
  return (
    <div className="light">
      <div className="min-h-screen bg-slate-50 text-slate-900 transition-colors" style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%236b7280" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")', fontFamily: 'Manrope, system-ui, -apple-system, sans-serif'}}>
        <nav className="fixed top-0 left-0 right-0 bg-slate-50/90 backdrop-blur border-b border-slate-200 z-50">
          <div className="max-w-screen-lg mx-auto flex items-center justify-between p-4">
            <span className="font-display text-lg font-bold text-slate-900">HN</span>
            <div className="flex items-center gap-4 text-sm">
              <a href="#projects" className="hover:text-blue-600 text-slate-800">Projects</a>
              <a href="#experience" className="hover:text-blue-600 text-slate-800">Experience</a>
              <a href="#about" className="hover:text-blue-600 text-slate-800">About</a>
              <a href="#contact" className="hover:text-blue-600 text-slate-800">Contact</a>
            </div>
          </div>
        </nav>
      {/* Hero Section */}
      <motion.section
        id="hero"
        className="max-w-screen-lg mx-auto px-6 md:px-12 py-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="text-left">
          <div className="mb-4">
            <img src="/my-genmoji.png" alt="Hrishikesh Genmoji" className="w-16 h-16 inline-block rounded-full border-2 border-slate-300 shadow-md" />
          </div>
          <h1 className="text-lg md:text-2xl font-display font-medium mb-4 text-slate-900" style={{fontFamily: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif'}}>
            Hi, I'm <span className="animate-rainbow bg-gradient-to-r from-red-600 via-orange-600 via-yellow-600 via-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">Hrishikesh</span>—an undergrad researcher and fullstack developer.
          </h1>
          <p className="text-sm md:text-base text-slate-700 mb-6 max-w-xl">
            I'm currently a Computer Science Student @ UT Dallas and a Research Assistant @ the ANRL Lab headed by Dr. Jason Jue.
          </p>

          <div className="flex flex-col gap-4">
            <p className="text-sm md:text-base text-slate-700">
              Feel free to{' '}
              <a 
                href="#contact" 
                className="inline-block bg-slate-100 border border-slate-300 px-3 py-1 rounded-lg text-black-600 hover:text-blue-700 hover:bg-blue-50 hover:border-blue-300 font-medium transition-colors"
              >
                contact me
              </a>
              {' '}at{' '}
              <a 
                href="mailto:hrishinave@gmail.com" 
                className="text-blue-600 hover:text-blue-700 underline font-medium"
              >
                hrishinave@gmail.com
              </a>
            </p>
            <div className="flex gap-3">
              <Button size="lg" variant="outline" className="rounded-2xl border-slate-400 text-slate-800 hover:bg-slate-100 bg-slate-50" asChild>
                <a href="/resume%20june25.pdf" target="_blank" rel="noopener noreferrer">
                  View Resume
                </a>
              </Button>
              <Button variant="outline" size="lg" className="rounded-2xl border-slate-400 text-slate-800 hover:text-white hover:bg-blue-600 hover:border-blue-600" asChild>
                <a href='https://github.com/hrishinave' target='_blank' rel='noopener noreferrer'>
                  <Github className="w-4 h-4" />
                </a>
              </Button>

              <Button variant="outline" size="lg" className="rounded-2xl border-slate-400 text-slate-800 hover:text-white hover:bg-blue-600 hover:border-blue-600" asChild>
                <a href='https://www.linkedin.com/in/hrishikeshnaveenam/' target='_blank' rel='noopener noreferrer'>
                  <Linkedin className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        id="projects"
        className="max-w-screen-lg mx-auto px-6 md:px-12 py-24"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-display font-bold mb-12 text-slate-900">Check out my projects!</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Project Card 1 */}
          <motion.div whileHover={{ scale: 1.05 }} className="shadow-lg hover:shadow-xl transition-shadow">
            <Card className="bg-slate-50 border-slate-300 shadow-md">
              <img src="/celestai-poster.png" alt="Project" className="rounded-t-2xl h-48 w-full object-cover" />
              
              <CardHeader>
              <CardTitle className="text-lg text-slate-900">GAN-Based Anomaly Detection</CardTitle>
              <CardDescription className="text-slate-700">
                AI system using DCGAN, StyleGAN, VQGAN and VAE for astronomical image synthesis and rare-event detection.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-2">
                <Button size="sm" variant="outline" className="border-slate-400 text-slate-800 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-600">
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </Button>
                <Button size="sm" variant="outline" className="border-slate-400 text-slate-800 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-600" asChild>
                  <a href="/celestai-poster.png" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Paper
                  </a>
                </Button>
              </div>
            </CardContent>
            </Card>
          </motion.div>

          {/* Project Card 2 */}
          <motion.div whileHover={{ scale: 1.05 }} className="shadow-lg hover:shadow-xl transition-shadow">
            <Card className="bg-slate-50 border-slate-300 shadow-md">
              <img src="netgainnba-poster.png" alt="Project" className="rounded-t-2xl h-48 w-full object-cover" />
              <CardHeader>
              <CardTitle className="text-lg text-slate-900">NetGain NBA</CardTitle>
              <CardDescription className="text-slate-700">
                Interactive simulator generating complete playoff brackets for NBA teams from 1995-2024 made with my team from AIS UT Dallas.
              </CardDescription>
            </CardHeader>
            <CardContent>
        
              <div className="flex gap-2">
                <Button size="sm" variant="outline" className="border-slate-400 text-slate-800 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-600" asChild>
                  <a href="https://github.com/Sarvesh30/NetGainNBA" target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                  </a>
                </Button>
                <Button size="sm" variant="outline" className="border-slate-400 text-slate-800 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-600">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Demo
                </Button>
              </div>
            </CardContent>
            </Card>
          </motion.div>

          {/* Project Card 3 */}
          <motion.div whileHover={{ scale: 1.05 }} className="shadow-lg hover:shadow-xl transition-shadow">
            <Card className="bg-slate-50 border-slate-300 shadow-md">
              <img src="utd-spots.png" alt="Project" className="rounded-t-2xl h-48 w-full object-cover" />
              <CardHeader>
              <CardTitle className="text-lg text-slate-900">UTD Spots</CardTitle>
              <CardDescription className="text-slate-700">
                iOS app that helps University of Texas at Dallas students discover and share study locations in a concise manner.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-2">
                <Button size="sm" variant="outline" className="border-slate-400 text-slate-800 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-600">
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </Button>
                <Button size="sm" variant="outline" className="border-slate-400 text-slate-800 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-600">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Research
                </Button>
              </div>
            </CardContent>
            </Card>
          </motion.div>

          {/* Project Card 4 */}
          <motion.div whileHover={{ scale: 1.05 }} className="shadow-lg hover:shadow-xl transition-shadow">
            <Card className="bg-slate-50 border-slate-300 shadow-md">
              <img src="https://via.placeholder.com/300x200" alt="Project" className="rounded-t-2xl h-48 w-full object-cover" />
              <CardHeader>
              <CardTitle className="text-lg text-slate-900">Portfolio Website</CardTitle>
              <CardDescription className="text-slate-700">
                Modern, responsive portfolio built with React, TypeScript, and Tailwind CSS.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-2">
                <Button size="sm" variant="outline" className="border-slate-400 text-slate-800 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-600">
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </Button>
                <Button size="sm" variant="outline" className="border-slate-400 text-slate-800 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-600">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Live Site
                </Button>
              </div>
            </CardContent>
            </Card>
          </motion.div>

          {/* Project Card 5 */}
          <motion.div whileHover={{ scale: 1.05 }} className="shadow-lg hover:shadow-xl transition-shadow">
            <Card className="bg-slate-50 border-slate-300 shadow-md">
              <img src="https://via.placeholder.com/300x200" alt="Project" className="rounded-t-2xl h-48 w-full object-cover" />
              <CardHeader>
              <CardTitle className="text-lg text-slate-900">Deep Learning Research</CardTitle>
              <CardDescription className="text-slate-700">
                Comprehensive ML research projects exploring various neural network architectures.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-2">
                <Button size="sm" variant="outline" className="border-slate-400 text-slate-800 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-600">
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </Button>
                <Button size="sm" variant="outline" className="border-slate-400 text-slate-800 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-600">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Publications
                </Button>
              </div>
            </CardContent>
            </Card>
          </motion.div>

          {/* Project Card 6 */}
          <motion.div whileHover={{ scale: 1.05 }} className="shadow-lg hover:shadow-xl transition-shadow">
            <Card className="bg-slate-50 border-slate-300 shadow-md">
              <img src="https://i.imgur.com/1234567890.png" alt="Project" className="rounded-t-2xl h-48 w-full object-cover" />
              <CardHeader>
              <CardTitle className="text-lg text-slate-900">Data Analytics Platform</CardTitle>
              <CardDescription className="text-slate-700">
                Full-stack platform for data visualization and statistical analysis.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-2">
                <Button size="sm" variant="outline" className="border-slate-400 text-slate-800 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-600">
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </Button>
                <Button size="sm" variant="outline" className="border-slate-400 text-slate-800 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-600">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Demo
                </Button>
              </div>
            </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.section>

      {/* Section Divider */}
      <hr className="max-w-screen-lg mx-auto border-slate-300" />

      {/* Experience Section */}
      <motion.section
        id="experience"
        className="max-w-screen-lg mx-auto px-6 md:px-12 py-24"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-display font-bold mb-12 text-slate-900">Experience</h2>
        <div className="space-y-8">
          {/* Experience Item 3 */}
          <Card className="shadow-lg bg-slate-50 border-slate-300">
            
            <CardHeader>
              <CardTitle className="text-slate-900">Researcher</CardTitle>
              <CardDescription className="text-slate-700">ACM UT Dallas • Spring 2025</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-slate-700 space-y-1">
                <li>• Developed and optimized DCGAN architecture to generate realistic synthetic astronomical images, improving anomaly detection metrics (Recall: 0.72, ROC-AUC: 0.85).</li>
                <li>• Implemented StyleGAN, fine-tuning pre-trained weights on the Galaxy10 dataset, resulting in high-fidelity image synthesis and enhanced model performance (ROC-AUC: 0.81).</li>
                <li>• Enhanced rare-event detection performance by 15% over baseline through GAN-based augmentation.</li>
                <li>• Developed a novel anomaly detection pipeline using a combination of GAN-based augmentation and traditional machine learning techniques, achieving state-of-the-art performance in rare-event detection.</li>
              </ul>
            </CardContent>
          </Card>

          {/* Experience Item 1 */}
          <Card className="shadow-lg bg-slate-50 border-slate-300">
            <CardHeader>
              <CardTitle className="text-slate-900">ML Engineer</CardTitle>
              <CardDescription className="text-slate-700">AIS UT Dallas • Spring 2025</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-slate-700 space-y-1">
                <li>• Collaborated in developing an interactive NBA Playoff simulator, enabling users to generate complete playoff brackets for any NBA team and season from 1995 to 2024.</li>
                <li>• Conducted data cleaning and preprocessing in Python on extensive team and player datasets retrieved from the official NBA API.</li>
                <li>• Built and optimized predictive classification and regression models using TabNet for enhanced accuracy in analyzing tabular data.</li>
              </ul>
            </CardContent>
          </Card>

          {/* Experience Item 2 */}
          <Card className="shadow-lg bg-slate-50 border-slate-300">
            <CardHeader>
              <CardTitle className="text-slate-900">Research Assistant</CardTitle>
              <CardDescription className="text-slate-700">VIMAN Lab @ Univ of Missouri • Aug 2023 - Feb 2024</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-slate-700 space-y-1">
                <li>• Volunteer Edge Computing at the VIMAN Lab</li>
                <li>• Designed and implemented K-means clustering algorithms to group volunteer edge nodes, achieving 84% accuracy in workflow placement. </li>
                <li>• Used the Elbow Method to identify optimal cluster configurations based on parameters like CPU, RAM, and storage</li>
                <li>• Created detailed visualizations to showcase clustering and allocation results, highlighting trends and patterns critical to workflow optimization</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </motion.section>

      {/* Section Divider */}
      <hr className="max-w-screen-lg mx-auto border-slate-300" />

      {/* About Section */}
      <motion.section
        id="about"
        className="max-w-screen-lg mx-auto px-6 md:px-12 py-24"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-display font-bold mb-12 text-slate-900">About</h2>
        <Card className="shadow-lg bg-slate-50 border-slate-300">
          <CardContent className="p-8">
            <p className="text-slate-700 leading-relaxed">
              I'm a passionate Computer Science student at UT Dallas with a deep focus on machine learning (specifically reinforcement learning!). 
              My research spans from GAN-based anomaly detection in astronomical data to edge computing optimization. I've published 
              multiple research papers and achieved state-of-the-art performance in various ML applications. Currently, I'm working 
              on innovative projects that bridge the gap between theoretical research and practical applications. When I'm not coding 
              or researching, you can find me exploring the latest developments in AI, contributing to open-source projects, or 
              mentoring fellow students in machine learning concepts.
            </p>
          </CardContent>
        </Card>
      </motion.section>

      {/* Section Divider */}
      <hr className="max-w-screen-lg mx-auto border-slate-300" />

      {/* Contact Section */}
      <motion.section
        id="contact"
        className="max-w-screen-lg mx-auto px-6 md:px-12 py-24"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-display font-bold mb-4 text-slate-900">Get in touch with me</h2>
        <p className="text-slate-700 mb-12">
          Feel free to send me a message using the form or email me at hrishinave@gmail.com
        </p>
        
        <div className="max-w-2xl">
          <Card className="shadow-lg bg-slate-50 border-slate-300">
            <CardContent className="p-8">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Name *</label>
                  <Input placeholder="Your name" className="bg-slate-50 border-slate-400 text-slate-900 placeholder:text-slate-600 rounded-3xl px-4 py-3" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Email *</label>
                  <Input type="email" placeholder="Your email" className="bg-slate-50 border-slate-400 text-slate-900 placeholder:text-slate-600 rounded-3xl px-4 py-3" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Message *</label>
                  <Textarea placeholder="Your message" rows={5} className="bg-slate-50 border-slate-400 text-slate-900 placeholder:text-slate-600 rounded-3xl px-4 py-3" />
                </div>
                <Button className="w-full rounded-3xl font-semibold bg-blue-600 hover:bg-blue-700 text-white" size="lg">
                  Send
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Social Links */}
        <div className="flex gap-4 mt-12">
          <Button variant="outline" size="lg" className="rounded-2xl border-slate-400 text-slate-800 hover:text-white hover:bg-blue-600 hover:border-blue-600" asChild>
            <a href='https://github.com/hrishinave' target='_blank' rel='noopener noreferrer'>
              <Github className="w-4 h-4 mr-2" />
              GitHub
            </a>
          </Button>
          <Button variant="outline" size="lg" className="rounded-2xl border-slate-400 text-slate-800 hover:text-white hover:bg-blue-600 hover:border-blue-600" asChild>
            <a href='https://www.linkedin.com/in/hrishikeshnaveenam/' target='_blank' rel='noopener noreferrer'>
              <Linkedin className="w-4 h-4 mr-2" />
              LinkedIn
            </a>
          </Button>
        
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="max-w-screen-lg mx-auto px-6 md:px-12 py-8 border-t border-slate-300">
        <div className="text-center text-slate-600">
          <p>Hrishikesh Naveenam © 2025</p>
        </div>
      </footer>
    </div>
  </div>
  )
}

export default App 