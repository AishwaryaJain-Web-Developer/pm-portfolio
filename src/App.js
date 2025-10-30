import React, { useState } from 'react';
import { Menu, X, Mail, Linkedin, Github, ExternalLink, ChevronDown } from 'lucide-react';

export default function PMPortfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const projects = [
    {
      title: "E-commerce Platform Redesign",
      role: "Lead Product Manager",
      duration: "Jan 2024 - Jun 2024",
      description: "Led the complete redesign of checkout flow, resulting in 35% increase in conversion rate and 50% reduction in cart abandonment.",
      impact: ["35% increase in conversion", "50% reduction in cart abandonment", "$2M additional revenue"],
      skills: ["User Research", "A/B Testing", "Agile", "Figma"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop"
    },
    {
      title: "Mobile App Launch",
      role: "Product Manager",
      duration: "Jul 2023 - Dec 2023",
      description: "Launched iOS and Android apps from 0 to 1, achieving 100K downloads in first 3 months with 4.5+ star rating.",
      impact: ["100K+ downloads in 3 months", "4.5★ rating", "Featured by App Store"],
      skills: ["Mobile Strategy", "User Analytics", "React Native", "Product Roadmap"],
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=400&fit=crop"
    },
    {
      title: "AI-Powered Recommendation Engine",
      role: "Senior Product Manager",
      duration: "Mar 2023 - Sep 2023",
      description: "Developed and launched ML-based product recommendation system that increased engagement by 60% and average order value by 25%.",
      impact: ["60% increase in engagement", "25% higher AOV", "15% boost in retention"],
      skills: ["Machine Learning", "Data Analysis", "Python", "Product Analytics"],
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=400&fit=crop"
    }
  ];

  const skills = [
    { category: "Product Strategy", items: ["Product Roadmap", "Market Research", "Competitive Analysis", "OKRs"] },
    { category: "Technical", items: ["SQL", "Python", "APIs", "A/B Testing"] },
    { category: "Design & UX", items: ["Figma", "User Research", "Wireframing", "Prototyping"] },
    { category: "Methodologies", items: ["Agile/Scrum", "Lean Startup", "Design Thinking", "Data-Driven"] }
  ];

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Aishwarya
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-blue-600 transition">About</button>
              <button onClick={() => scrollToSection('projects')} className="text-gray-700 hover:text-blue-600 transition">Projects</button>
              <button onClick={() => scrollToSection('skills')} className="text-gray-700 hover:text-blue-600 transition">Skills</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-blue-600 transition">Contact</button>
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden">
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 space-y-2">
              <button onClick={() => scrollToSection('about')} className="block w-full text-left py-2 text-gray-700 hover:text-blue-600">About</button>
              <button onClick={() => scrollToSection('projects')} className="block w-full text-left py-2 text-gray-700 hover:text-blue-600">Projects</button>
              <button onClick={() => scrollToSection('skills')} className="block w-full text-left py-2 text-gray-700 hover:text-blue-600">Skills</button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left py-2 text-gray-700 hover:text-blue-600">Contact</button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-4xl font-bold">
            AJ
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Product Manager
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Building products that users love and businesses need. 5+ years of experience in SaaS, mobile, and AI-powered solutions.
          </p>
          <div className="flex justify-center gap-4">
            <button onClick={() => scrollToSection('projects')} className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition flex items-center gap-2">
              View Projects <ChevronDown className="w-4 h-4" />
            </button>
            <button onClick={() => scrollToSection('contact')} className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition">
              Get in Touch
            </button>
          </div>
        </div>
      </section>


      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
          <div className="max-w-3xl mx-auto text-gray-700 space-y-4">
            <p className="text-lg">
              I'm a passionate Product Manager with a track record of launching successful products that drive business growth and delight users. My approach combines data-driven decision making with empathy for user needs.
            </p>
            <p className="text-lg">
              With experience spanning e-commerce, mobile apps, and AI/ML products, I excel at translating complex technical concepts into user-friendly solutions. I believe in building cross-functional relationships and fostering a culture of innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="space-y-8">
            {projects.map((project, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
                <div className="md:flex">
                  <div className="md:w-2/5">
                    <img src={project.image} alt={project.title} className="w-full h-64 md:h-full object-cover" />
                  </div>
                  <div className="p-8 md:w-3/5">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{project.title}</h3>
                        <p className="text-blue-600 font-medium">{project.role}</p>
                        <p className="text-gray-500 text-sm">{project.duration}</p>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-4">{project.description}</p>

                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Key Impact:</h4>
                      <div className="space-y-1">
                        {project.impact.map((item, i) => (
                          <div key={i} className="flex items-center text-gray-700">
                            <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.skills.map((skill, i) => (
                        <span key={i} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Skills & Expertise</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skillGroup, idx) => (
              <div key={idx} className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4 text-gray-900">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((item, i) => (
                    <span key={i} className="px-4 py-2 bg-white text-gray-700 rounded-lg shadow-sm">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Let's Connect</h2>
          <p className="text-xl text-gray-600 mb-8">
            I'm always interested in hearing about new opportunities and collaborations.
          </p>
          <div className="flex justify-center gap-6">
            <a href="mailto:your.email@example.com" className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
              <Mail className="w-5 h-5" />
              Email Me
            </a>
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition">
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
            <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 border-2 border-gray-700 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition">
              <Github className="w-5 h-5" />
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p>&copy; 2025 Your Name. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
