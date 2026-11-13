
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  Linkedin
} from 'lucide-react'
import './Home.css'

function Home() {
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

      {/* Capabilities — Minimal Technology Statement */}
      <section
        id="capabilities"
        className="services-section"
        aria-labelledby="capabilities-heading"
      >
        <div className="capabilities-statement">
          <h2 id="capabilities-heading">
            <span>Technology, engineered.</span>
            <span className="capabilities-highlight">Ideas, realised.</span>
          </h2>
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

      {/* Founder + About Auraon — composed together on the founder backdrop */}
      <section
        id="founder"
        className="founder-section"
      >
        <div
          className="container founder-layout"
          style={{
            width: 'min(1440px, calc(100% - 100px))',
            maxWidth: '1440px',
            minHeight: '760px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.12fr)',
            alignItems: 'center',
            columnGap: '48px',
            position: 'relative',
            overflow: 'visible'
          }}
        >
          {/* About Auraon stays on the left */}
          <motion.div
            id="about"
            className="about-card glass-card founder-about-card"
            style={{
              width: '100%',
              maxWidth: '650px',
              minWidth: 0,
              padding: '24px 0',
              margin: 0,
              background: 'transparent',
              border: 'none',
              boxShadow: 'none',
              textAlign: 'left',
              position: 'relative',
              zIndex: 2
            }}
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="section-title" style={{ width: '100%', maxWidth: '650px', textAlign: 'left', margin: 0 }}>
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

          {/* Use the exact supplied FounderCEO card image; its LinkedIn symbol and text are already included */}
          <motion.div
            className="founder-card founder-card-image-only"
            style={{
              width: '100%',
              maxWidth: '700px',
              minWidth: 0,
              justifySelf: 'end',
              alignSelf: 'center',
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'center',
              padding: 0,
              margin: 0,
              background: 'transparent',
              border: 'none',
              boxShadow: 'none',
              position: 'relative',
              top: '-78px',
              right: '-28px',
              zIndex: 3
            }}
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img
              src="/images/FounderCEO.png"
              alt="Founder and CEO profile card for Ch. Sai Balaji Singh Rajput"
              className="founder-profile-card-image"
              style={{
                display: 'block',
                width: '100%',
                maxWidth: '700px',
                height: 'auto',
                objectFit: 'contain',
                border: 0,
                borderRadius: 0,
                boxShadow: 'none'
              }}
              loading="eager"
            />
          </motion.div>
        </div>
      </section>

    </div>
  )
}

export default Home
