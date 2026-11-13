import { useState } from 'react'
import { supabase } from '../supabaseClient'
import { Link, useNavigate } from 'react-router-dom'
import {
  Briefcase,
  Users,
  TrendingUp,
  Globe,
  ArrowRight,
  MapPin,
  Clock,
  ChevronDown,
  GraduationCap,
  Code2,
  Brain,
  Palette,
  Database,
  UserCog,
  X,
  Send,
  FileText,
  Linkedin
} from 'lucide-react'
import './Careers.css'

function Careers() {
  const [selectedJob, setSelectedJob] = useState(null)
  const [showForm, setShowForm] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // 'success' | 'error' | null
  const [submitError, setSubmitError] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    resume: null,
    resumeName: '',
    linkedin: '',
    coverLetter: ''
  })
  const navigate = useNavigate()

  const jobOpenings = [
    {
      id: 1,
      title: 'Full Stack Developer',
      type: 'Full-time',
      location: 'Hyderabad, India',
      experience: '2-5 Years',
      department: 'Engineering',
      icon: Code2,
      description: 'Build scalable web applications using modern technologies like React, Node.js, and cloud services.',
      requirements: [
        '2+ years of experience in full-stack development',
        'Proficiency in React, Node.js, and databases',
        'Experience with cloud platforms (AWS/Azure/GCP)',
        'Strong problem-solving skills'
      ]
    },
    {
      id: 2,
      title: 'AI/ML Engineer',
      type: 'Full-time',
      location: 'Hyderabad, India',
      experience: '3-6 Years',
      department: 'Engineering',
      icon: Brain,
      description: 'Develop intelligent solutions using machine learning and artificial intelligence.',
      requirements: [
        'Strong background in ML algorithms',
        'Experience with TensorFlow or PyTorch',
        'Knowledge of data preprocessing and modeling',
        'Published research or projects preferred'
      ]
    },
    {
      id: 3,
      title: 'Frontend Developer',
      type: 'Full-time',
      location: 'Remote / Hyderabad',
      experience: '1-3 Years',
      department: 'Engineering',
      icon: Code2,
      description: 'Create beautiful and responsive user interfaces for web applications.',
      requirements: [
        'Expert knowledge of React and modern CSS',
        'Understanding of web performance',
        'Experience with responsive design',
        'Good communication skills'
      ]
    },
    {
      id: 4,
      title: 'UI/UX Designer',
      type: 'Full-time',
      location: 'Hyderabad, India',
      experience: '2-4 Years',
      department: 'Design',
      icon: Palette,
      description: 'Design intuitive and engaging user experiences for our products.',
      requirements: [
        'Strong portfolio showcasing UX work',
        'Proficiency in Figma or similar tools',
        'Understanding of design systems',
        'User research experience'
      ]
    },
    {
      id: 5,
      title: 'Python Developer',
      type: 'Full-time',
      location: 'Hyderabad, India',
      experience: '1-4 Years',
      department: 'Engineering',
      icon: Database,
      description: 'Develop backend services and automation solutions using Python.',
      requirements: [
        'Strong Python programming skills',
        'Experience with Django or FastAPI',
        'Knowledge of RESTful APIs',
        'Database design experience'
      ]
    },
    {
      id: 6,
      title: 'Data Science Intern',
      type: 'Internship',
      location: 'Hyderabad, India',
      experience: 'Students',
      department: 'Engineering',
      icon: GraduationCap,
      description: 'Learn and work on real-world data science projects under experienced mentors.',
      requirements: [
        'Currently pursuing B.Tech/M.Sc in relevant field',
        'Basic knowledge of Python and statistics',
        'Eagerness to learn and grow',
        'Available for 3-6 months'
      ]
    },
    {
      id: 7,
      title: 'Web Development Intern',
      type: 'Internship',
      location: 'Remote / Hyderabad',
      experience: 'Students',
      department: 'Engineering',
      icon: GraduationCap,
      description: 'Get hands-on experience building real web applications.',
      requirements: [
        'Basic knowledge of HTML, CSS, JavaScript',
        'Understanding of web concepts',
        'Passion for web development',
        'Available for 3-6 months'
      ]
    },
    {
      id: 8,
      title: 'Project Manager',
      type: 'Full-time',
      location: 'Hyderabad, India',
      experience: '4-8 Years',
      department: 'Management',
      icon: UserCog,
      description: 'Lead and manage software development projects from planning to delivery.',
      requirements: [
        'Experience in project management',
        'Agile/Scrum certification preferred',
        'Excellent communication skills',
        'Track record of successful deliveries'
      ]
    },
    {
      id: 9,
      title: 'UI/UX Design Intern',
      type: 'Internship',
      location: 'Remote',
      experience: 'Students',
      department: 'Design',
      icon: Palette,
      description: 'Design modern, user-friendly interfaces.',
      requirements: [
        'Figma / Adobe XD',
        'Wireframing',
        'UI principles'
      ]
    },
    {
      id: 10,
      title: 'Mobile App Developer',
      type: 'Full-time',
      location: 'Remote / Hyderabad',
      experience: '1-3 Years',
      department: 'Engineering',
      icon: Code2,
      description: 'Builds Android + iOS app. Flutter / React Native preferred.',
      requirements: [
        'Flutter / React Native preferred',
        'Build Android + iOS apps',
        'UI + API integration',
        'App performance optimization'
      ]
    },
    {
      id: 14,
      title: 'Mobile App Development Intern',
      type: 'Internship',
      location: 'Remote',
      experience: 'Students',
      department: 'Engineering',
      icon: Code2,
      description: 'Build Android/iOS applications.',
      requirements: [
        'Flutter / React Native',
        'APIs integration'
      ]
    },
    {
      id: 11,
      title: 'Backend Development Intern',
      type: 'Internship',
      location: 'Remote / Hyderabad',
      experience: 'Students',
      department: 'Engineering',
      icon: Database,
      description: 'Work on server-side logic and APIs.',
      requirements: [
        'Node.js / Python',
        'Databases (MongoDB / MySQL)'
      ]
    },
    {
      id: 12,
      title: 'Software Testing / QA Intern',
      type: 'Internship',
      location: 'Remote',
      experience: 'Students',
      department: 'Quality Assurance',
      icon: UserCog,
      description: 'Test applications and ensure quality.',
      requirements: [
        'Manual testing',
        'Bug tracking',
        'Attention to detail'
      ]
    },
    {
      id: 13,
      title: 'Full Stack Development Intern',
      type: 'Internship',
      location: 'Remote / Hyderabad',
      experience: 'Students',
      department: 'Engineering',
      icon: Code2,
      description: 'Build complete web applications from frontend to backend.',
      requirements: [
        'HTML, CSS, JavaScript',
        'React (frontend)',
        'Node.js / Express (backend)',
        'Database (MongoDB / MySQL)'
      ]
    }
  ]

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Growth Opportunities',
      description: 'Clear career path with regular promotions and skill development programs'
    },
    {
      icon: Globe,
      title: 'Remote Work',
      description: 'Flexible work arrangements including remote and hybrid options'
    },
    {
      icon: Users,
      title: 'Team Culture',
      description: 'Collaborative environment with regular team building activities'
    },
    {
      icon: Briefcase,
      title: 'Work-Life Balance',
      description: 'Flexible hours, generous leave policy, and wellness programs'
    }
  ]

  const INTERNSHIP_POSITIONS = ['Data Science Intern', 'Web Development Intern', 'UI/UX Design Intern', 'Backend Development Intern', 'Software Testing / QA Intern', 'Full Stack Development Intern', 'Mobile App Development Intern']

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)
    setSubmitError('')

    // Validate file upload
    if (!formData.resume) {
      setSubmitError('Please upload your resume')
      setSubmitStatus('error')
      setIsSubmitting(false)
      return
    }

    try {
      const applicantType = INTERNSHIP_POSITIONS.includes(formData.position) ? 'Internship' : 'Job'
      
      // Step 1: Upload file to Supabase Storage
      const file = formData.resume
      const fileExt = file.name.split('.').pop()
      const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`
      const filePath = `resumes/${fileName}`
      
      const { data: uploadData, error: uploadError } = await supabase.storage
        .from('resumes')
        .upload(filePath, file, {
          cacheControl: '3600',
          upsert: false,
          contentType: file.type
        })

      if (uploadError) {
        throw new Error(`Failed to upload resume: ${uploadError.message}`)
      }

      // Step 2: Get public URL of the uploaded file
      const { data: urlData } = supabase.storage
        .from('resumes')
        .getPublicUrl(filePath)
      
      const resumeUrl = urlData.publicUrl
      
      // Step 3: Save the URL in the database
      const { data, error } = await supabase
        .from('applicants')
        .insert([{
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          position: formData.position,
          applicant_type: applicantType,
          experience: formData.experience,
          resume: resumeUrl,
          linkedin: formData.linkedin || '',
          cover_letter: formData.coverLetter || ''
        }])
        .select()

      if (error) throw error

      // Save inserted data for confirmation page and navigate
      const inserted = Array.isArray(data) ? data[0] : data
      try {
        localStorage.setItem('applicantData', JSON.stringify(inserted))
        localStorage.setItem('lastApplicantId', inserted.id)
      } catch (storageErr) {
        console.warn('Could not save applicant data to localStorage', storageErr)
      }

      setSubmitStatus('success')
      // navigate to application-specific confirmation page
      navigate('/application-confirmation')
    } catch (err) {
      console.error('Application submit error:', err)
      // Capture message for UI
      const msg = err?.message || (err && typeof err === 'object' ? JSON.stringify(err) : String(err))
      setSubmitError(msg)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      // Check file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        alert('File size must be less than 5MB')
        return
      }
      // Check file type
      const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']
      if (!allowedTypes.includes(file.type)) {
        alert('Only PDF and DOC/DOCX files are allowed')
        return
      }
      setFormData(prev => ({ 
        ...prev, 
        resume: file,
        resumeName: file.name
      }))
    }
  }

  const removeFile = () => {
    setFormData(prev => ({ 
      ...prev, 
      resume: null,
      resumeName: ''
    }))
  }

  return (
<div id="top" className="careers-page">
      {/* Hero Section */}
      <section className="careers-hero">
        <div className="container">
          <span className="hero-badge">Join Our Team</span>
          <h1>Build Your Future with <span className="highlight">AURAON</span></h1>
          <p>
            Join a team of innovators and problem solvers. We're looking for talented individuals
            who want to make an impact in the tech industry.
          </p>
          <div className="hero-buttons">
            <a href="#openings" className="btn btn-primary btn-lg">
              View Open Positions
            </a>
            <a href="#internships" className="btn btn-secondary btn-lg">
              Internship Programs
            </a>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section">
        <div className="container">
          <div className="section-header">
            <h2>Why Join AURAON?</h2>
            <p>We offer competitive benefits and a great work environment</p>
          </div>
          <div className="benefits-grid">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon
              return (
                <div key={index} className="benefit-card">
                  <div className="benefit-icon">
                    <IconComponent size={28} />
                  </div>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="openings" className="jobs-section">
        <div className="container">
          <div className="section-header">
            <h2>Open Positions</h2>
            <p>Find your next role at AURAON</p>
          </div>
          <div className="jobs-grid">
            {jobOpenings.filter(job => job.type === 'Full-time').map((job) => {
              const IconComponent = job.icon
              return (
                <div key={job.id} className="job-box">
                  <div className="job-box-header">
                    <div className="job-box-icon">
                      <IconComponent size={28} />
                    </div>
                    <span className="job-box-type">{job.type}</span>
                  </div>
                  <h3 className="job-box-title">{job.title}</h3>
                  <div className="job-box-meta">
                    <span><MapPin size={14} /> {job.location}</span>
                    <span><Clock size={14} /> {job.experience}</span>
                  </div>
                  <p className="job-box-description">{job.description}</p>
                  <div className="job-box-actions">
                    <button
                      className="btn btn-primary apply-btn-box"
                      onClick={() => {
                        setFormData(prev => ({ ...prev, position: job.title }))
                        setShowForm(true)
                      }}
                    >
                      Apply Now <ArrowRight size={16} />
                    </button>
                    <button
                      className="details-btn"
                      onClick={() => setSelectedJob(selectedJob === job.id ? null : job.id)}
                    >
                      {selectedJob === job.id ? 'Hide' : 'Details'}
                      <ChevronDown size={16} className={selectedJob === job.id ? 'rotated' : ''} />
                    </button>
                  </div>
                  {selectedJob === job.id && (
                    <div className="job-box-details">
                      <h4>Requirements:</h4>
                      <ul>
                        {job.requirements.map((req, i) => (
                          <li key={i}>{req}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Internships Section */}
      <section id="internships" className="jobs-section internships-section">
        <div className="container">
          <div className="section-header">
            <h2>Internship Programs</h2>
            <p>Start your career with hands-on experience</p>
          </div>
          <div className="jobs-grid">
            {jobOpenings.filter(job => job.type === 'Internship').map((job) => {
              const IconComponent = job.icon
              return (
                <div key={job.id} className="job-box internship-box">
                  <div className="job-box-header">
                    <div className="job-box-icon internship-icon">
                      <IconComponent size={28} />
                    </div>
                    <span className="job-box-type internship-type">{job.type}</span>
                  </div>
                  <h3 className="job-box-title">{job.title}</h3>
                  <div className="job-box-meta">
                    <span><MapPin size={14} /> {job.location}</span>
                    <span><Clock size={14} /> {job.experience}</span>
                  </div>
                  <p className="job-box-description">{job.description}</p>
                  <div className="job-box-actions">
                    <button
                      className="btn btn-primary apply-btn-box"
                      onClick={() => {
                        setFormData(prev => ({ ...prev, position: job.title }))
                        setShowForm(true)
                      }}
                    >
                      Apply Now <ArrowRight size={16} />
                    </button>
                    <button
                      className="details-btn"
                      onClick={() => setSelectedJob(selectedJob === job.id ? null : job.id)}
                    >
                      {selectedJob === job.id ? 'Hide' : 'Details'}
                      <ChevronDown size={16} className={selectedJob === job.id ? 'rotated' : ''} />
                    </button>
                  </div>
                  {selectedJob === job.id && (
                    <div className="job-box-details">
                      <h4>Requirements:</h4>
                      <ul>
                        {job.requirements.map((req, i) => (
                          <li key={i}>{req}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Don't See the Right Role?</h2>
            <p>We're always looking for talented people. Send us your resume and we'll reach out when we have a suitable position.</p>
           <a
  href="mailto:info@auraontechnolohies.com?subject=Career%20Enquiry"
  className="btn btn-primary btn-lg"
>
  Get in Touch <ArrowRight size={18} />
</a>
          </div>
        </div>
      </section>

      {/* Application Modal */}
      {showForm && (
        <div className="modal-overlay" onClick={() => setShowForm(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowForm(false)}>
              <X size={24} />
            </button>
            <div className="modal-header">
              <h2>Apply for Position</h2>
              <p>Fill out the form below and we'll get back to you within 48 hours</p>
            </div>
            <form className="application-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label>
                    <UserCog size={16} />
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>
                    <Briefcase size={16} />
                    Position *
                  </label>
                  <select
                    name="position"
                    value={formData.position}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a position</option>
                    {jobOpenings.map(job => (
                      <option key={job.id} value={job.title}>{job.title}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>
                    <Briefcase size={16} />
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>
                    <Briefcase size={16} />
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label>
                  <Clock size={16} />
                  Years of Experience *
                </label>
                <select
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select experience</option>
                  <option value="fresher">Fresher (0 years)</option>
                  <option value="1">1 Year</option>
                  <option value="2">2 Years</option>
                  <option value="3">3 Years</option>
                  <option value="4">4 Years</option>
                  <option value="5+">5+ Years</option>
                </select>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>
                    <FileText size={16} />
                    Resume/CV *
                  </label>
                  <div className="file-upload-container">
                    <input
                      type="file"
                      id="resume-upload"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      className="file-input"
                    />
                    <label htmlFor="resume-upload" className="file-upload-label">
                      <FileText size={18} />
                      <span>
                        {formData.resumeName ? formData.resumeName : 'Choose file or drag here'}
                      </span>
                    </label>
                    {formData.resumeName && (
                      <button type="button" className="remove-file-btn" onClick={removeFile}>
                        <X size={16} />
                      </button>
                    )}
                  </div>
                  <p className="file-hint">PDF, DOC, or DOCX (max 5MB)</p>
                </div>
                <div className="form-group">
                  <label>
                    <Linkedin size={16} />
                    LinkedIn Profile
                  </label>
                  <input
                    type="url"
                    name="linkedin"
                    value={formData.linkedin}
                    onChange={handleChange}
                    placeholder="Link to your LinkedIn profile"
                  />
                </div>
              </div>

              <div className="form-group">
                <label>
                  <Briefcase size={16} />
                  Cover Letter / Additional Info
                </label>
                <textarea
                  name="coverLetter"
                  value={formData.coverLetter}
                  onChange={handleChange}
                  placeholder="Tell us why you'd be a great fit for this role..."
                  rows="4"
                />
              </div>

              {submitStatus === 'success' && (
                <p className="form-success-msg">✅ Application submitted! We'll contact you soon.</p>
              )}
              {submitStatus === 'error' && (
                <p className="form-error-msg">❌ Submission failed. Please try again.{submitError ? ` — ${submitError}` : ''}</p>
              )}
              <button type="submit" className="submit-application-btn" disabled={isSubmitting}>
                {isSubmitting ? '⏳ Submitting...' : <><Send size={18} /> Submit Application</>}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default Careers
