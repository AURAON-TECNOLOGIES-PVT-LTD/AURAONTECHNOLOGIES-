import { Link } from 'react-router-dom'
import { Linkedin, Github, Twitter, Instagram, Mail, MapPin, Phone } from 'lucide-react'
import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    services: [
      { name: 'Web Development', href: '/#services' },
      { name: 'Mobile Apps', href: '/#services' },
      { name: 'AI Solutions', href: '/#services' },
      { name: 'Cloud Services', href: '/#services' },
      { name: 'UI/UX Design', href: '/#services' },
    ],
    company: [
      { name: 'About Us', href: '/' },
      { name: 'Our Process', href: '/#process' },
      { name: 'Careers', href: '/careers' },
    ],
    contact: [
      { icon: <Linkedin size={16} />, text: 'Sai Balaji Singh Rajput', href: 'https://www.linkedin.com/in/ch-sai-balaji-singh-rajput-4a153129a/' },
      { icon: <Linkedin size={16} />, text: 'Auraon Technologies', href: 'https://www.linkedin.com/company/auraontechnologies/' },
      { icon: <Mail size={16} />, text: 'info@auraontechnologies.com', href: 'mailto:info@auraontechnologies.com' },
      { icon: <Phone size={16} />, text: '9963058111', href: 'tel:+919963058111' },
      { icon: <MapPin size={16} />, text: 'Hyderabad, India', href: '#' },
    ]
  }

  const socialLinks = [
    { icon: <Linkedin size={20} />, href: 'https://www.linkedin.com/company/auraon-technologies', label: 'LinkedIn' },
    { icon: <Github size={20} />, href: '#', label: 'GitHub' },
    { icon: <Twitter size={20} />, href: '#', label: 'Twitter' },
    { icon: <Instagram size={20} />, href: '#', label: 'Instagram' },
  ]

  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Brand Section */}
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            <div className="logo-icon">
              <img src="/logo.jpg" alt="AURAON Logo" className="logo-img" />
            </div>
            <span>AURAON</span>
          </Link>
          <p className="footer-description">
            Building intelligent software for modern businesses. Your trusted technology partner for digital transformation.
          </p>
          
          <div className="footer-social">
            {socialLinks.map((social, index) => (
              <a 
                key={index} 
                href={social.href} 
                className="social-link"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Services Links */}
        <div className="footer-section">
          <h4>Services</h4>
          <ul className="footer-links">
            {footerLinks.services.map((link, index) => (
              <li key={index}>
                <Link to={link.href} className="footer-link">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company Links */}
        <div className="footer-section">
          <h4>Company</h4>
          <ul className="footer-links">
            {footerLinks.company.map((link, index) => (
              <li key={index}>
                <Link to={link.href} className="footer-link">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section">
          <h4>Contact</h4>
          <ul className="footer-contact">
            {footerLinks.contact.map((item, index) => (
              <li key={index}>
                <a href={item.href} className="contact-item">
                  <span className="contact-icon">{item.icon}</span>
                  <span className="contact-text">{item.text}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p className="copyright">
            &copy; {currentYear} Auraon Technologies. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
