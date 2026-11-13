
import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  const location = useLocation()
  const navigate = useNavigate()

  // Detect scrolling and highlight the section currently visible
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      if (location.pathname === '/careers') {
        setActiveSection('careers')
        return
      }

      const sections = [
        { id: 'capabilities', name: 'capabilities' },
        { id: 'process', name: 'process' },
        { id: 'founder', name: 'founder' },
      ]

      let current = 'home'

      sections.forEach((section) => {
        const element = document.getElementById(section.id)

        if (element && element.getBoundingClientRect().top <= 180) {
          current = section.name
        }
      })

      setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [location.pathname])

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev)
  }

  // Always return to the first screen of Home
  const goHome = (e) => {
    e.preventDefault()
    setMenuOpen(false)
    setActiveSection('home')

    if (location.pathname !== '/') {
      navigate('/', { replace: false })

      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'instant' })
      }, 100)
    } else {
      window.history.replaceState(null, '', '/')
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const goToSection = (e, id) => {
    e.preventDefault()
    setMenuOpen(false)

    const scrollToTarget = () => {
      const element = document.getElementById(id)

      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })
        setActiveSection(id)
      }
    }

    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(scrollToTarget, 300)
    } else {
      scrollToTarget()
    }
  }

  const goToCareers = (e) => {
    e.preventDefault()
    setMenuOpen(false)
    setActiveSection('careers')

    if (location.pathname !== '/careers') {
      navigate('/careers')

      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'instant' })
      }, 100)
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const navLinks = [
    { path: '/', label: 'Home', id: 'home' },
    { path: '/#capabilities', label: 'Capabilities', id: 'capabilities' },
    { path: '/#process', label: 'Our Approach', id: 'process' },
    { path: '/careers', label: 'Careers', id: 'careers' },
    { path: '/#founder', label: 'Founder', id: 'founder' },
  ]

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-glow"></div>

      <div className="nav-container">
        <Link
          to="/"
          className="logo"
          onClick={goHome}
        >
          <img
            src="/images/.png"
            alt="AURAON Technologies and Software Solutions"
            className="logo-img"
          />
        </Link>

        <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`nav-link ${
                activeSection === link.id ? 'active' : ''
              }`}
              onClick={(e) => {
                if (link.id === 'home') {
                  goHome(e)
                } else if (link.id === 'careers') {
                  goToCareers(e)
                } else {
                  goToSection(e, link.id)
                }
              }}
            >
              <span className="link-text">{link.label}</span>
              <span className="link-glow"></span>
            </Link>
          ))}
        </div>

        <div
          className="menu-icon"
          onClick={toggleMenu}
          role="button"
          tabIndex={0}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault()
              toggleMenu()
            }
          }}
        >
          {menuOpen ? '✕' : '☰'}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
