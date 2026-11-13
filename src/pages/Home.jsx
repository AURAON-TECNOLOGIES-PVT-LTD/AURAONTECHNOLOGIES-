
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Search,
  Lightbulb,
  Code2,
  Blocks,
  FlaskConical,
  Rocket,
  ArrowRight,
  ChevronRight,
  Linkedin
} from 'lucide-react'
import './Home.css'

function Home() {
  const [activeCapability, setActiveCapability] = useState(null)
  const [activeProcess, setActiveProcess] = useState(null)

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

  useEffect(() => {
    if (activeCapability === null) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setActiveCapability(null)
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [activeCapability])

  const capabilities = [
    {
      icon: <Search size={30} />,
      title: 'Research & Discovery',
      description: 'Identifying opportunities, studying problems, and understanding emerging technologies.'
    },
    {
      icon: <Lightbulb size={30} />,
      title: 'Product Strategy',
      description: 'Transforming promising ideas into structured product concepts and clear development directions.'
    },
    {
      icon: <Code2 size={30} />,
      title: 'Technology Engineering',
      description: 'Engineering reliable, scalable, and secure technology foundations.'
    },
    {
      icon: <Blocks size={30} />,
      title: 'Digital Product Development',
      description: 'Designing and developing original digital products from concept to execution.'
    },
    {
      icon: <FlaskConical size={30} />,
      title: 'Innovation & Experimentation',
      description: 'Exploring new approaches, testing possibilities, and refining ideas.'
    },
    {
      icon: <Rocket size={30} />,
      title: 'Venture Development',
      description: 'Building technology-led ventures with long-term vision and purpose.'
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
      title: 'Validate & Refine',
      description: 'We test our work, evaluate outcomes, identify improvements, and refine products through continuous iteration.'
    }
  ]

  return (
    <div className="home">

      {/* Hero Section */}
      <section
        id="home"
        className="hero"
        aria-labelledby="hero-heading"
      >
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
            <a
              href="#about"
              className="hero-cta hero-cta-primary"
            >
              Explore Auraon
              <ArrowRight size={18} />
            </a>

            <a
              href="#process"
              className="hero-cta hero-cta-secondary"
            >
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

      {/* Capabilities Section */}
      <section
        id="capabilities"
        className="services-section"
      >
        <div className="container">
          <div className="section-title">
            <h2>What We Focus On</h2>
            <p>
              The disciplines behind discovering, developing and building
              original technology ventures.
            </p>
          </div>

          <div className="services-grid capability-orbit">
            {capabilities.map((capability, index) => (
              <motion.article
                key={capability.title}
                layoutId={`capability-${index}`}
                className="service-card capability-card"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1]
                }}
                viewport={{ once: true, amount: 0.15 }}
              >
                <div className="service-icon capability-icon">
                  {capability.icon}
                </div>

                <h3>{capability.title}</h3>
                <p>{capability.description}</p>

                <button
                  type="button"
                  className="service-arrow capability-arrow"
                  aria-label={`Explore ${capability.title}`}
                  aria-expanded={activeCapability === index}
                  aria-controls="capability-detail"
                  onClick={() => setActiveCapability(index)}
                >
                  <ChevronRight size={21} />
                </button>
              </motion.article>
            ))}
          </div>

          <AnimatePresence>
            {activeCapability !== null && (
              <motion.div
                className="capability-overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.28, ease: 'easeOut' }}
                onClick={() => setActiveCapability(null)}
              >
                <motion.article
                  id="capability-detail"
                  layoutId={`capability-${activeCapability}`}
                  className="capability-expanded"
                  role="dialog"
                  aria-modal="true"
                  aria-labelledby="capability-detail-title"
                  onClick={(event) => event.stopPropagation()}
                  transition={{
                    layout: {
                      type: 'spring',
                      stiffness: 230,
                      damping: 27,
                      mass: 0.9
                    }
                  }}
                >
                  <button
                    type="button"
                    className="capability-close"
                    aria-label="Close capability details"
                    onClick={() => setActiveCapability(null)}
                  >
                    <span aria-hidden="true">×</span>
                  </button>

                  <div className="service-icon capability-icon capability-expanded-icon">
                    {capabilities[activeCapability].icon}
                  </div>

                  <span className="capability-label">
                    AURAON CAPABILITY / 0{activeCapability + 1}
                  </span>

                  <h2 id="capability-detail-title">
                    {capabilities[activeCapability].title}
                  </h2>

                  <p>
                    {capabilities[activeCapability].description}
                  </p>

                  <div className="capability-bottom-line">
                    <span>RESEARCH. ENGINEERING. INNOVATION.</span>
                    <span className="capability-detail-index">
                      0{activeCapability + 1} / 06
                    </span>
                  </div>
                </motion.article>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

     
      {/* Our Approach — Interactive Six-Stage Orbit */}
      <section
        id="process"
        className="process-section"
      >
        <div className="container">
          <div className="section-title">
            <span className="process-eyebrow">
              OUR APPROACH
            </span>

            <h2>From Thought to Technology.</h2>

            <p>
              Every meaningful innovation begins with a question.
              Explore the six stages that shape how we research,
              design and engineer original technology.
            </p>
          </div>

          <div className="process-orbit" aria-label="Six stages of our approach">
            <div className="process-orbit-ring" aria-hidden="true" />

          

{process.map((step, index) => {
  const isActive = activeProcess === index

  // Fixed scattered positions outside the circular orbit
  const positions = [
    { x: 12, y: 29 },
    { x: 88, y: 29 },
    { x: 88, y: 71 },
    { x: 50, y: 85 },
    { x: 12, y: 71 },
    { x: 50, y: 15 }
  ]

  const position = positions[index]

  const navigateWithArrow = (event) => {
    const keyDirection = {
      ArrowRight: 1,
      ArrowDown: 1,
      ArrowLeft: -1,
      ArrowUp: -1
    }

    if (!(event.key in keyDirection)) return

    event.preventDefault()

    const nextIndex =
      (index + keyDirection[event.key] + process.length) % process.length

    const orbit = event.currentTarget.closest('.process-orbit')
    const nextCard = orbit?.querySelectorAll('.process-orbit-card')[nextIndex]

    nextCard?.focus()
  }

  return (
    <button
      key={step.step}
      type="button"
      className={`process-orbit-card${isActive ? ' is-active' : ''}`}
      style={{
        '--orbit-x': `${position.x}%`,
        '--orbit-y': `${position.y}%`
      }}
      onClick={() => setActiveProcess(index)}
      onFocus={() => setActiveProcess(index)}
      onKeyDown={navigateWithArrow}
      aria-pressed={isActive}
      aria-label={`Stage ${step.step}: ${step.title}`}
    >
      <span className="process-orbit-number">{step.step}</span>
      <span className="process-orbit-stage">STAGE {step.step}</span>
      <span className="process-orbit-title">{step.title}</span>
      <span className="process-orbit-description">
        {step.description}
      </span>

      {isActive && (
        <span className="process-orbit-current">
          CURRENT FOCUS
        </span>
      )}
    </button>
  )
})}



            <div className="process-orbit-center" aria-hidden="true">
              <span>AURAON</span>
              <strong>OUR<br />APPROACH</strong>
              <i />
              <small>IDEA TO EXECUTION</small>
            </div>
          </div>

          <div className="process-orbit-mobile">
            {process.map((step, index) => (
              <button
                key={step.step}
                type="button"
                className={`process-mobile-step${activeProcess === index ? ' is-active' : ''}`}
                onClick={() => setActiveProcess(index)}
                aria-pressed={activeProcess === index}
              >
                <span className="process-number">{step.step}</span>
                <span className="process-mobile-copy">
                  <span className="process-stage">STAGE {step.step}</span>
                  <strong>{step.title}</strong>
                  <span>{step.description}</span>
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>


      {/* Auraon Vision Section */}
      <section className="cta-section">
        <div className="container">
          <motion.div
            className="cta-card glass-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="process-eyebrow">
              OUR VISION
            </span>

            <h2>Building What Comes Next.</h2>

            <p>
              We believe meaningful technology begins with curiosity,
              develops through research and engineering, and creates
              lasting value through thoughtful execution.
            </p>

            <a
              href="#about"
              className="hero-cta hero-cta-primary"
            >
              Discover Auraon
              <ArrowRight size={18} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Founder Section */}
      <section
        id="founder"
        className="founder-section"
      >
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
                    <h3 className="founder-name">
                      Ch. Sai Balaji Singh Rajput
                    </h3>

                    <p className="founder-title">
                      Founder & CEO, Auraon Technologies & Software Solutions Pvt. Ltd.
                    </p>

                    <p className="founder-description">
                      Ch. Sai Balaji Singh Rajput is the Founder and
                      Chief Executive Officer of Auraon Technologies
                      & Software Solutions Pvt. Ltd. He leads the
                      company's vision, strategic direction and pursuit
                      of original technology products and ventures,
                      with a focus on research, innovation and engineering.
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
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="about-section"
      >
        <div className="container">
          <motion.div
            className="about-card glass-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="section-title">
              <span className="process-eyebrow">
                ABOUT AURAON
              </span>

              <h2>Technology With Purpose.</h2>

              <p>
                Auraon Technologies & Software Solutions Pvt. Ltd. is an
                independent, product-driven technology company based in
                Hyderabad, India. We focus on discovering opportunities,
                researching ideas, engineering original digital products
                and building technology-led ventures with a long-term vision.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  )
}

export default Home
