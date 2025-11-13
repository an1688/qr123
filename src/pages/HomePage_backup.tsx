import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { QrCode, Smartphone, Shield, Clock, Car, Building2, Home as HomeIcon, ChevronDown, ChevronUp, Zap, Eye, Users, ArrowRight, Check, Star } from 'lucide-react'

function HomePage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const howToSteps = [
    {
      icon: QrCode,
      title: "1. Scan QR Code",
      description: "Use your smartphone to scan the parking space QR code",
      detail: "Each parking space has a unique QR code identifier"
    },
    {
      icon: Smartphone,
      title: "2. Contact Driver",
      description: "System automatically displays driver contact information",
      detail: "Quickly contact driver via phone or text message"
    },
    {
      icon: Shield,
      title: "3. Communicate & Move",
      description: "Coordinate parking times and avoid conflicts",
      detail: "Build communication bridge, solve parking problems efficiently"
    },
    {
      icon: Clock,
      title: "4. Complete Service",
      description: "Record service logs and provide feedback",
      detail: "System automatically records and suggests improvements"
    }
  ]

  const scenarios = [
    {
      icon: Car,
      title: "Commercial Parking",
      description: "Efficient parking management for shopping centers and office buildings",
      features: ["24/7 monitoring", "Real-time vacancy detection", "Smart billing"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Building2,
      title: "Residential Complex",
      description: "Convenient parking services for residents and visitors",
      features: ["Resident priority", "Visitor registration", "Vehicle tracking"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: HomeIcon,
      title: "Private Parking",
      description: "Flexible parking solutions for personal or small venues",
      features: ["Custom service", "Dedicated management", "Security guarantee"],
      color: "from-green-500 to-emerald-500"
    }
  ]

  const features = [
    {
      icon: Zap,
      title: "Ultra-Fast Response",
      description: "Contact driver within 3 seconds, no waiting time"
    },
    {
      icon: Eye,
      title: "Privacy Protection",
      description: "Temporary contact info, ensure driver privacy safety"
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Multi-user collaboration support, more efficient management"
    }
  ]

  const faqData = [
    {
      question: "How does the QR code parking system work?",
      answer: "The system generates a unique QR code for each driver. When you need to contact a driver, scan the QR code to obtain temporary contact information, enabling efficient communication."
    },
    {
      question: "How are driver information protected?",
      answer: "We adopt a hidden contact method, drivers don't need to expose their real phone numbers. All contact information is temporary, and the system generates virtual numbers to protect privacy."
    },
    {
      question: "What scenarios can the system be applied to?",
      answer: "Applicable to commercial streets, commercial parking lots, shopping centers, office buildings and various parking areas. Especially suitable for areas where frequent contact with drivers is needed."
    },
    {
      question: "How is the cost calculated?",
      answer: "One-time payment system, after purchasing QR codes, free lifetime usage."
    },
    {
      question: "How is system stability guaranteed?",
      answer: "Adopts 99.9% high availability architecture with multiple backup mechanisms to ensure stable service operation. 24/7 technical support with immediate response to any issues."
    }
  ]

  return (
    <div className="min-h-screen bg-slate-900 text-white overflow-x-hidden">
      
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/90 backdrop-blur-lg border-b border-cyan-500/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <img src="/logo.png" alt="KR010 Logo" className="h-10 w-auto" />
              <span className="text-xl font-bold text-white">KR010</span>
            </div>
            
            <div className="hidden md:flex space-x-8">
              {['hero', 'howto', 'scenarios', 'guide', 'faq'].map(section => (
                <a
                  key={section}
                  href={`#${section}`}
                  className="px-3 py-2 text-sm font-medium text-gray-300 hover:text-cyan-400 transition-colors"
                >
                  {section === 'hero' && 'Home'}
                  {section === 'howto' && 'How to Use'}
                  {section === 'scenarios' && 'Scenarios'}
                  {section === 'guide' && 'Guide'}
                  {section === 'faq' && 'FAQ'}
                </a>
              ))}
            </div>

            <div className="flex space-x-4">
              <Link
                to="/bind/demo123"
                className="bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <video 
          autoPlay 
          loop 
          muted 
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        >
          <source src="https://t1.kakaocdn.net/kakaocorp/kakaocorp/service/main2025/pc_Loading_low.mp4" type="video/mp4" />
        </video>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-800/60 to-purple-900/80"></div>
        
        {/* Particle Background Effect */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>

        {/* Main Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
                KR010 Smart Parking System
              </span>
            </h1>
            
            <h2 className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Make parking management simple and efficient with smart QR code technology
              <br />
              <span className="text-cyan-400">24/7 Smart Service · Privacy Protection · Ultra-Fast Response</span>
            </h2>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link
                to="/bind/demo123"
                className="group bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/50 hover:scale-105 flex items-center space-x-2"
              >
                <span>Start Using</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                to="/bind/demo123"
                className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/50"
              >
                Driver Registration
              </Link>
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10"
                >
                  <feature.icon className="w-8 h-8 text-cyan-400 mb-4 mx-auto" />
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-400 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Hint */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-cyan-400" />
        </div>
      </section>

      {/* How to Use */}
      <section id="howto" className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                How to Use
              </span>
            </h2>
            <p className="text-xl text-gray-400">Simple 4 steps, start your smart parking experience</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howToSteps.map((step, index) => (
              <div key={index} className="relative">
                {/* Connection Line */}
                {index < howToSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 z-0" />
                )}
                
                <div className="relative bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 text-center hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 z-10">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 relative">
                    <step.icon className="w-8 h-8 text-white" />
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">{index + 1}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-4 text-white">{step.title}</h3>
                  <p className="text-gray-400 mb-3">{step.description}</p>
                  <p className="text-cyan-400 text-sm">{step.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scenarios */}
      <section id="scenarios" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                Application Scenarios
              </span>
            </h2>
            <p className="text-xl text-gray-400">Applicable to various parking environments, improving management efficiency</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {scenarios.map((scenario, index) => (
              <div key={index} className="group">
                <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10 h-full">
                  <div className={`w-16 h-16 bg-gradient-to-r ${scenario.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <scenario.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-white">{scenario.title}</h3>
                  <p className="text-gray-400 mb-6">{scenario.description}</p>
                  
                  <ul className="space-y-2">
                    {scenario.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <Check className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Guide */}
      <section id="guide" className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                KR010 QR Code Parking System Detailed Guide
              </span>
            </h2>
            <p className="text-xl text-gray-400">Learn more about system features and technical characteristics</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4 text-cyan-400 flex items-center">
                  <Shield className="w-5 h-5 mr-2" />
                  Core Technology
                </h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <Star className="w-4 h-4 text-yellow-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span>AI-powered smart matching algorithm completes driver contact within 3 seconds</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="w-4 h-4 text-yellow-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Blockchain technology ensures data security with financial-grade privacy protection</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="w-4 h-4 text-yellow-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Cloud synchronization technology supports multi-device simultaneous usage</span>
                  </li>
                </ul>
              </div>

              <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4 text-green-400 flex items-center">
                  <Zap className="w-5 h-5 mr-2" />
                  Performance Metrics
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cyan-400">99.9%</div>
                    <div className="text-sm text-gray-400">System Availability</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-400">&lt;3s</div>
                    <div className="text-sm text-gray-400">Response Time</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-400">24/7</div>
                    <div className="text-sm text-gray-400">Full-time Service</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-pink-400">0</div>
                    <div className="text-sm text-gray-400">Privacy Leaks</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-xl p-8 border border-cyan-500/20">
              <div className="text-center">
                <QrCode className="w-24 h-24 text-cyan-400 mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-4 text-white">Experience Now</h3>
                <p className="text-gray-400 mb-6">
                  Create your exclusive parking management system now and enjoy the convenience brought by technology
                </p>
                <Link
                  to="/bind/demo123"
                  className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25"
                >
                  Generate QR Code
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">
                Frequently Asked Questions
              </span>
            </h2>
            <p className="text-xl text-gray-400">Answer your questions during the usage process</p>
          </div>

          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-slate-700/30 transition-colors"
                >
                  <span className="text-lg font-medium text-white">{faq.question}</span>
                  {openFAQ === index ? (
                    <ChevronUp className="w-5 h-5 text-cyan-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-cyan-400" />
                  )}
                </button>
                
                {openFAQ === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-700 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <img src="/logo.png" alt="KR010 Logo" className="h-10 w-auto" />
              <span className="text-2xl font-bold text-white">KR010</span>
            </div>
            <p className="text-gray-400 mb-6">Making parking management smarter and simpler</p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/bind/demo123"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25"
              >
                Start Using
              </Link>
              <Link
                to="/bind/demo123"
                className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-6 py-3 rounded-lg font-semibold transition-all duration-300"
              >
                Driver Registration
              </Link>
            </div>
            
            <div className="mt-8 pt-8 border-t border-slate-700 text-gray-500 text-sm">
              <p>&copy; 2025 KR010 Smart Parking System. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default HomePage
