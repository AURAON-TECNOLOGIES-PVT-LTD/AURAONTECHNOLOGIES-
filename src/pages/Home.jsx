
import { useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  Search,
  Lightbulb,
  Code2,
  Blocks,
  FlaskConical,
  Rocket,
  ArrowRight,
  Linkedin
} from 'lucide-react'
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

          <div className="services-grid">
            {capabilities.map((capability, index) => (
              <motion.div
                key={index}
                className="service-card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="service-icon">
                  {capability.icon}
                </div>

                <h3>{capability.title}</h3>
                <p>{capability.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
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
                transition={{
                  duration: 0.6,
                  delay: index * 0.1
                }}
                viewport={{ once: true }}
              >
                <div className="process-number">
                  {step.step}
                </div>

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
