import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  Code2, 
  Smartphone, 
  Cloud, 
  Brain, 
  Palette, 
  Database,
  ArrowRight,
  ChevronRight,
  Linkedin
} from 'lucide-react'
import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
  useEffect(() => {
    const handleAnchorClick = (e) => {
      const href = e.currentTarget.getAttribute('href')
      if (href?.startsWith('#')) {
        e.preventDefault()
        const element = document.querySelector(href)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', handleAnchorClick)
    })

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', handleAnchorClick)
      })
    }
  }, [])

  const services = [
    {
      icon: <Code2 size={32} />,
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies like React, Node.js, and cloud infrastructure.',
      color: 'var(--primary-color)'
    },
    {
      icon: <Smartphone size={32} />,
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications for iOS and Android using React Native and Flutter.',
      color: 'var(--secondary-color)'
    },
    {
      icon: <Brain size={32} />,
      title: 'AI Solutions',
      description: 'Machine learning models, chatbots, and intelligent automation to transform your business processes.',
      color: '#d946ef'
    },
    {
      icon: <Cloud size={32} />,
      title: 'Cloud Services',
      description: 'Cloud migration, DevOps, and infrastructure management on AWS, Azure, and Google Cloud.',
      color: '#3b82f6'
    },
    {
      icon: <Palette size={32} />,
      title: 'UI/UX Design',
      description: 'User-centered design that creates intuitive, engaging experiences for your digital products.',
      color: '#f59e0b'
    },
    {
      icon: <Database size={32} />,
      title: 'Database Solutions',
      description: 'Database design, optimization, and management for scalable data storage and retrieval.',
      color: '#10b981'
    }
  ]

  const process = [
  {
    step: '01',
    title: 'Identify',
    description: 'We identify meaningful opportunities, understand emerging needs, and recognise problems worth solving.'
  },
  {
    step: '02',
    title: 'Research',
    description: 'We study the problem, explore possibilities, and evaluate technologies before moving forward.'
  },
  {
    step: '03',
    title: 'Strategise',
    description: 'We define the direction, establish priorities, and create a practical roadmap.'
  },
  {
    step: '04',
    title: 'Design',
    description: 'We shape the structure, functionality, and user experience with clarity and purpose.'
  },
  {
    step: '05',
    title: 'Engineer',
    description: 'We turn ideas into working digital solutions through focused engineering and development.'
  },
  {
    step: '06',
    title: 'Test & Refine',
    description: 'We evaluate, test, improve, and refine our work through continuous iteration.'
  }
]




  return (
    <div className="home">
     
      {/* Hero Section */}
      <section id="home" className="hero" aria-labelledby="hero-heading">
        <div className="hero-copy">
          <div className="hero-eyebrow">
            <span className="hero-eyebrow-line"></span>
            AURAON TECHNOLOGIES
          </div>

          <h1 id="hero-heading">
            We build beyond
            <span> the ordinary.</span>
          </h1>

          <h2>Ideas. Engineered into ventures.</h2>

          <p>
            Auraon is an independent technology company focused on
            discovering opportunities, researching ideas and engineering
            original digital products and technology-led ventures.
          </p>

          <div className="hero-pillars">
            <span>Research & Discovery</span>
            <span>Product Innovation</span>
            <span>Technology Engineering</span>
          </div>

          <div className="hero-actions">
            <a href="#about" className="hero-cta hero-cta-primary">
              Explore Auraon
              <ArrowRight size={18} />
            </a>

            <a href="#process" className="hero-cta hero-cta-secondary">
              How We Build
            </a>
          </div>
        </div>

        <div className="scroll-indicator">
          <div className="mouse">
            <div className="wheel"></div>
          </div>
          <span>Scroll to explore</span>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services-section">
        <div className="container">
          <div className="section-title">
            <h2>Our Services</h2>
            <p>Comprehensive digital solutions tailored to your business needs</p>
          </div>
          
          <div className="services-grid">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                className="service-card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <div className="service-glow" style={{ background: service.color }}></div>
                <div className="service-icon" style={{ color: service.color }}>
                  {service.icon}
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <div className="service-arrow">
                  <ChevronRight size={20} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
<section id="process" className="process-section">
  <div className="container">
    <div className="section-title">
      <span className="process-eyebrow">OUR APPROACH</span>
      <h2>From Thought to Technology.</h2>
      <p>
        Every meaningful innovation begins with a question.
        Our approach brings research, strategy, engineering,
        and continuous improvement together.
      </p>
    </div>

    <div className="process-timeline">
      {process.map((step, index) => (
        <motion.div
          key={index}
          className="process-item"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <div className="process-number">{step.step}</div>
          <div className="process-content">
            <span className="process-stage">
              STAGE {step.step}
            </span>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>


      <section className="cta-section">
        <div className="container">
          <motion.div 
            className="cta-card glass-card"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="cta-glow"></div>
            <h2>Ready to Transform Your Business?</h2>
            <p>Let's collaborate to bring your vision to life with cutting-edge technology.</p>
            <Link to="/quote" className="btn btn-primary btn-glow">
              Get Free Quote
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Founder Section */}
      <section id="founder" className="founder-section">
        <div className="container">
          <motion.div 
            className="founder-card glass-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="founder-content">
              <div className="founder-header">
                <h2>Founder & CEO</h2>
              </div>
              <div className="founder-details">
                <div className="founder-grid">
                  <div className="founder-text">
                    <h3 className="founder-name">Ch. Sai Balaji Singh Rajput</h3>
                    <p className="founder-title">Founder & CEO, Auraon Technologies</p>
                    <p className="founder-description">
                      Ch. Sai Balaji Singh Rajput is the Founder and Chief Executive Officer (CEO) of Auraon Technologies, a technology startup focused on building intelligent software solutions for modern businesses. He leads the development of AI-powered applications, scalable web platforms, and innovative digital systems that help organizations improve efficiency, automate workflows, and accelerate digital transformation.
                    </p>
                    <a 
                      href="https://www.linkedin.com/in/ch-sai-balaji-singh-rajput-4a153129a/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="linkedin-button"
                    >
                      <Linkedin size={20} />
                      <span>Connect on LinkedIn</span>
                    </a>
                    <p className="founder-relationship">
                    
                    </p>
                  </div>


                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="container">
          <motion.div 
            className="about-card glass-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="section-title">
              
              <p>Auraon Technologies is an IT services and software development company based in Hyderabad, India. The company specializes in artificial intelligence solutions, web development, mobile applications, and cloud technologies.</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home
