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
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <motion.section
        className="max-w-screen-lg mx-auto px-6 md:px-12 py-24"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl md:text-7xl font-bold text-left mb-4">
          Hrishikesh Naveenam
        </h1>
        <p className="text-lg text-gray-600 text-left">
          Computer Science Student | Aspiring ML Researcher
        </p>
      </motion.section>

      {/* Section Divider */}
      <hr className="max-w-screen-lg mx-auto border-gray-200" />

      {/* Projects Section */}
      <motion.section
        className="max-w-screen-lg mx-auto px-6 md:px-12 py-24"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-12">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Project Card 1 */}
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle>Machine Learning Portfolio</CardTitle>
              <CardDescription>
                A comprehensive collection of ML projects showcasing various algorithms and techniques
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="secondary">Python</Badge>
                <Badge variant="secondary">TensorFlow</Badge>
                <Badge variant="secondary">Scikit-learn</Badge>
                <Badge variant="secondary">Jupyter</Badge>
              </div>
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

          {/* Project Card 2 */}
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle>Web Development Project</CardTitle>
              <CardDescription>
                Full-stack web application with modern technologies and clean design
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="secondary">React</Badge>
                <Badge variant="secondary">Node.js</Badge>
                <Badge variant="secondary">TypeScript</Badge>
                <Badge variant="secondary">PostgreSQL</Badge>
              </div>
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
        </div>
      </motion.section>

      {/* Section Divider */}
      <hr className="max-w-screen-lg mx-auto border-gray-200" />

      {/* Experience Section */}
      <motion.section
        className="max-w-screen-lg mx-auto px-6 md:px-12 py-24"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-12">Experience</h2>
        <div className="space-y-8">
          {/* Experience Item 1 */}
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle>Software Engineering Intern</CardTitle>
              <CardDescription>Tech Company • Summer 2024</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Developed and maintained web applications using React and Node.js</li>
                <li>• Collaborated with cross-functional teams to deliver high-quality software</li>
                <li>• Implemented automated testing strategies improving code coverage by 30%</li>
              </ul>
            </CardContent>
          </Card>

          {/* Experience Item 2 */}
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle>Research Assistant</CardTitle>
              <CardDescription>VIMAN Lab • Aug 2023 - Feb 2024</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Conducted research in machine learning applications for computer vision</li>
                <li>• Published findings in peer-reviewed conferences and journals</li>
                <li>• Mentored undergraduate students in research methodologies</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </motion.section>

      {/* Section Divider */}
      <hr className="max-w-screen-lg mx-auto border-gray-200" />

      {/* About Section */}
      <motion.section
        className="max-w-screen-lg mx-auto px-6 md:px-12 py-24"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-12">About</h2>
        <Card className="shadow-md">
          <CardContent className="p-8">
            <p className="text-gray-600 leading-relaxed">
              I'm a passionate Computer Science student with a deep interest in machine learning and artificial intelligence. 
              My journey in tech began with a curiosity about how computers can learn and make decisions, which has evolved 
              into a focused pursuit of research in ML applications. I enjoy building projects that solve real-world problems 
              and contribute to the advancement of technology. When I'm not coding, you can find me reading research papers, 
              contributing to open-source projects, or exploring the latest developments in AI.
            </p>
          </CardContent>
        </Card>
      </motion.section>

      {/* Section Divider */}
      <hr className="max-w-screen-lg mx-auto border-gray-200" />

      {/* Contact Section */}
      <motion.section
        className="max-w-screen-lg mx-auto px-6 md:px-12 py-24"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-12">Get in touch</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle>Send me a message</CardTitle>
              <CardDescription>
                I'd love to hear from you. Send me a message and I'll respond as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Input placeholder="Your name" />
              </div>
              <div>
                <Input type="email" placeholder="Your email" />
              </div>
              <div>
                <Textarea placeholder="Your message" rows={5} />
              </div>
              <Button className="w-full">Send Message</Button>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="flex flex-col justify-center space-y-8">
            <div className="flex items-center space-x-4">
              <Mail className="w-6 h-6 text-gray-600" />
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-gray-600">hrishikesh@example.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Linkedin className="w-6 h-6 text-gray-600" />
              <div>
                <h3 className="font-semibold">LinkedIn</h3>
                <p className="text-gray-600">linkedin.com/in/hrishikesh-naveenam</p>
              </div>
            </div>
            <div className="flex space-x-4">
              <Button variant="outline" size="lg">
                <Mail className="w-4 h-4 mr-2" />
                Email Me
              </Button>
              <Button variant="outline" size="lg">
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </Button>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Footer Spacing */}
      <div className="h-24"></div>
    </div>
  )
}

export default App 