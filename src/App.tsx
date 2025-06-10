import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card'
import { Badge } from './components/ui/badge'
import { Button } from './components/ui/button'
import { Input } from './components/ui/input'
import { Textarea } from './components/ui/textarea'
import { Github, ExternalLink, Mail, Linkedin } from 'lucide-react'

function App() {
  return (
    <div className="dark">
      <div className="min-h-screen bg-gray-900 text-foreground transition-colors">
        <nav className="fixed top-0 left-0 right-0 bg-gray-900/70 backdrop-blur border-b border-gray-700 z-50">
          <div className="max-w-screen-lg mx-auto flex items-center justify-between p-4">
            <span className="font-display text-lg font-bold">HN</span>
            <div className="flex items-center gap-4 text-sm">
              <a href="#projects" className="hover:text-blue-400">Projects</a>
              <a href="#experience" className="hover:text-blue-400">Experience</a>
              <a href="#about" className="hover:text-blue-400">About</a>
              <a href="#contact" className="hover:text-blue-400">Contact</a>
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
            <img src="/my-genmoji.png" alt="Hrishikesh Genmoji" className="w-16 h-16 inline-block" />
          </div>
          <h1 className="text-lg md:text-2xl font-display font-medium mb-4">
            Hi, I'm <span className="animate-rainbow bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 via-indigo-500 to-purple-500 bg-clip-text text-transparent">Hrishikesh</span>—a developer, researcher, and ML enthusiast.
          </h1>
          <p className="text-sm md:text-base text-gray-400 mb-6 max-w-xl">
            I'm currently a Computer Science Student @ UT Dallas and a Research Assistant @ the ANRL Lab headed by Dr. Jason Jue.
          </p>

          <div className="flex flex-col gap-4">
            <p className="text-sm md:text-base text-gray-400">
              Feel free to contact me at{' '}
              <a 
                href="mailto:hrishinave@gmail.com" 
                className="text-blue-400 hover:text-blue-300 underline font-medium"
              >
                hrishinave@gmail.com
              </a>
            </p>
            <div>
              <Button size="lg" variant="outline" className="rounded-2xl" asChild>
                <a href="/resume%20june25.pdf" target="_blank" rel="noopener noreferrer">
                  View Resume
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
        <h2 className="text-4xl font-display font-bold mb-12">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Project Card 1 */}
          <motion.div whileHover={{ scale: 1.05 }} className="shadow-lg hover:shadow-xl transition-shadow">
            <Card className="bg-gray-800 border-gray-700">
              <img src="/celestai-poster.png" alt="Project" className="rounded-t-2xl h-48 w-full object-cover" />
              
              <CardHeader>
              <CardTitle className="text-lg text-white">GAN-Based Anomaly Detection</CardTitle>
              <CardDescription className="text-gray-400">
                AI system using DCGAN, StyleGAN, VQGAN and VAE for astronomical image synthesis and rare-event detection.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-2">
                <Button size="sm" variant="outline">
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </Button>
                <Button size="sm" variant="outline" asChild>
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
            <Card className="bg-gray-800 border-gray-700">
              <img src="netgainnba-poster.png" alt="Project" className="rounded-t-2xl h-48 w-full object-cover" />
              <CardHeader>
              <CardTitle className="text-lg text-white">NetGain NBA</CardTitle>
              <CardDescription className="text-gray-400">
                Interactive simulator generating complete playoff brackets for NBA teams from 1995-2024.
              </CardDescription>
            </CardHeader>
            <CardContent>
        
              <div className="flex gap-2">
                <Button size="sm" variant="outline" asChild>
                  <a href="https://github.com/Sarvesh30/NetGainNBA" target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                  </a>
                </Button>
                <Button size="sm" variant="outline">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Demo
                </Button>
              </div>
            </CardContent>
            </Card>
          </motion.div>

          {/* Project Card 3 */}
          <motion.div whileHover={{ scale: 1.05 }} className="shadow-lg hover:shadow-xl transition-shadow">
            <Card className="bg-gray-800 border-gray-700">
              <img src="https://via.placeholder.com/300x200" alt="Project" className="rounded-t-2xl h-48 w-full object-cover" />
              <CardHeader>
              <CardTitle className="text-lg text-white">Edge Computing Optimizer</CardTitle>
              <CardDescription className="text-gray-400">
                K-means clustering system for volunteer edge node workflow placement optimization.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-2">
                <Button size="sm" variant="outline">
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </Button>
                <Button size="sm" variant="outline">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Research
                </Button>
              </div>
            </CardContent>
            </Card>
          </motion.div>

          {/* Project Card 4 */}
          <motion.div whileHover={{ scale: 1.05 }} className="shadow-lg hover:shadow-xl transition-shadow">
            <Card className="bg-gray-800 border-gray-700">
              <img src="https://via.placeholder.com/300x200" alt="Project" className="rounded-t-2xl h-48 w-full object-cover" />
              <CardHeader>
              <CardTitle className="text-lg text-white">Portfolio Website</CardTitle>
              <CardDescription className="text-gray-400">
                Modern, responsive portfolio built with React, TypeScript, and Tailwind CSS.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-2">
                <Button size="sm" variant="outline">
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </Button>
                <Button size="sm" variant="outline">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Live Site
                </Button>
              </div>
            </CardContent>
            </Card>
          </motion.div>

          {/* Project Card 5 */}
          <motion.div whileHover={{ scale: 1.05 }} className="shadow-lg hover:shadow-xl transition-shadow">
            <Card className="bg-gray-800 border-gray-700">
              <img src="https://via.placeholder.com/300x200" alt="Project" className="rounded-t-2xl h-48 w-full object-cover" />
              <CardHeader>
              <CardTitle className="text-lg text-white">Deep Learning Research</CardTitle>
              <CardDescription className="text-gray-400">
                Comprehensive ML research projects exploring various neural network architectures.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-2">
                <Button size="sm" variant="outline">
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </Button>
                <Button size="sm" variant="outline">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Publications
                </Button>
              </div>
            </CardContent>
            </Card>
          </motion.div>

          {/* Project Card 6 */}
          <motion.div whileHover={{ scale: 1.05 }} className="shadow-lg hover:shadow-xl transition-shadow">
            <Card className="bg-gray-800 border-gray-700">
              <img src="https://i.imgur.com/1234567890.png" alt="Project" className="rounded-t-2xl h-48 w-full object-cover" />
              <CardHeader>
              <CardTitle className="text-lg text-white">Data Analytics Platform</CardTitle>
              <CardDescription className="text-gray-400">
                Full-stack platform for data visualization and statistical analysis.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-2">
                <Button size="sm" variant="outline">
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </Button>
                <Button size="sm" variant="outline">
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
      <hr className="max-w-screen-lg mx-auto border-gray-700" />

      {/* Experience Section */}
      <motion.section
        id="experience"
        className="max-w-screen-lg mx-auto px-6 md:px-12 py-24"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-display font-bold mb-12">Experience</h2>
        <div className="space-y-8">
          {/* Experience Item 3 */}
          <Card className="shadow-lg bg-gray-800 border-gray-700">
            
            <CardHeader>
              <CardTitle className="text-white">Researcher</CardTitle>
              <CardDescription className="text-gray-400">ACM UT Dallas • Spring 2025</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Developed and optimized DCGAN architecture to generate realistic synthetic astronomical images, improving anomaly detection metrics (Recall: 0.72, ROC-AUC: 0.85).</li>
                <li>• Implemented StyleGAN, fine-tuning pre-trained weights on the Galaxy10 dataset, resulting in high-fidelity image synthesis and enhanced model performance (ROC-AUC: 0.81).</li>
                <li>• Enhanced rare-event detection performance by 15% over baseline through GAN-based augmentation.</li>
                <li>• Developed a novel anomaly detection pipeline using a combination of GAN-based augmentation and traditional machine learning techniques, achieving state-of-the-art performance in rare-event detection.</li>
              </ul>
            </CardContent>
          </Card>

          {/* Experience Item 1 */}
          <Card className="shadow-lg bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">ML Engineer</CardTitle>
              <CardDescription className="text-gray-400">AIS UT Dallas • Spring 2025</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Collaborated in developing an interactive NBA Playoff simulator, enabling users to generate complete playoff brackets for any NBA team and season from 1995 to 2024.</li>
                <li>• Conducted data cleaning and preprocessing in Python on extensive team and player datasets retrieved from the official NBA API.</li>
                <li>• Built and optimized predictive classification and regression models using TabNet for enhanced accuracy in analyzing tabular data.</li>
              </ul>
            </CardContent>
          </Card>

          {/* Experience Item 2 */}
          <Card className="shadow-lg bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">Research Assistant</CardTitle>
              <CardDescription className="text-gray-400">VIMAN Lab @ Univ of Missouri • Aug 2023 - Feb 2024</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-gray-400 space-y-1">
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
      <hr className="max-w-screen-lg mx-auto border-gray-700" />

      {/* About Section */}
      <motion.section
        id="about"
        className="max-w-screen-lg mx-auto px-6 md:px-12 py-24"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-display font-bold mb-12">About</h2>
        <Card className="shadow-lg bg-gray-800 border-gray-700">
          <CardContent className="p-8">
            <p className="text-gray-400 leading-relaxed">
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
      <hr className="max-w-screen-lg mx-auto border-gray-700" />

      {/* Contact Section */}
      <motion.section
        id="contact"
        className="max-w-screen-lg mx-auto px-6 md:px-12 py-24"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-display font-bold mb-4">Get in touch with me</h2>
        <p className="text-gray-400 mb-12">
          Feel free to send me a message using the form or email me at hrishinave@gmail.com
        </p>
        
        <div className="max-w-2xl">
          <Card className="shadow-lg bg-gray-800 border-gray-700">
            <CardContent className="p-8">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Name *</label>
                  <Input placeholder="Your name" className="bg-gray-900 border-gray-600 text-white placeholder:text-gray-500 rounded-3xl px-4 py-3" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Email *</label>
                  <Input type="email" placeholder="Your email" className="bg-gray-900 border-gray-600 text-white placeholder:text-gray-500 rounded-3xl px-4 py-3" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Message *</label>
                  <Textarea placeholder="Your message" rows={5} className="bg-gray-900 border-gray-600 text-white placeholder:text-gray-500 rounded-3xl px-4 py-3" />
                </div>
                <Button className="w-full rounded-3xl font-semibold" size="lg">
                  Send
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Social Links */}
        <div className="flex gap-4 mt-12">
          <Button variant="outline" size="lg" className="rounded-2xl border-gray-600 text-gray-400 hover:text-black hover:border-gray-500" asChild>
            <a href='https://github.com/hrishinave' target='_blank' rel='noopener noreferrer'>
              <Github className="w-4 h-4 mr-2" />
              GitHub
            </a>
          </Button>
          <Button variant="outline" size="lg" className="rounded-2xl border-gray-600 text-gray-400 hover:text-black hover:border-gray-500" asChild>
            <a href='https://www.linkedin.com/in/hrishikeshnaveenam/' target='_blank' rel='noopener noreferrer'>
              <Linkedin className="w-4 h-4 mr-2" />
              LinkedIn
            </a>
          </Button>
        
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="max-w-screen-lg mx-auto px-6 md:px-12 py-8 border-t border-gray-700">
        <div className="text-center text-gray-500">
          <p>Hrishikesh Naveenam © 2025</p>
        </div>
      </footer>
    </div>
  </div>
  )
}

export default App 