import './App.css'
import Navbar from './components/Navbar'
import ProjectCard from './components/ProjectCard'
import Section from './components/Section'

function App() {
  const profile = {
    name: 'Mishti Kinker',
    role: 'Computer Science Engineering Student | React & Computer Vision Enthusiast',
    summary:
      'Passionate about building impactful technology solutions using web development and computer vision to enhance accessibility and human–machine interaction.',
    about:
      'I am a BTech Computer Science student at Symbiosis Institute of Technology, Pune. I enjoy working on real-world projects that combine hardware and software such as gesture recognition systems and dynamic event platforms. I actively contribute to open-source communities and participate in hackathons to apply my technical and leadership skills in collaborative environments.',
    email: 'mishtikinker@gmail.com',
    linkedin: 'https://www.linkedin.com/in/mishti-kinker-00382427a/',
    github: 'https://github.com/mish-1',
  }

  const education = [
    {
      institute: 'Symbiosis Institute of Technology, Pune',
      degree: 'Bachelor of Technology - Computer Science',
      year: '2024 - 2028',
      score: 'GPA: 8.47',
    },
    {
      institute: 'U.S.M Public School, Delhi',
      degree: 'Schooling (CBSE) - 12th',
      year: '2023 - 2024',
      score: '12th: 82.2%',
    },
    {
      institute: 'St. Patrick’s Junior College, Agra',
      degree: 'Schooling (ICSE) - 10th',
      year: '2010 - 2022',
      score: '10th: 93%',
    },
  ]

  const skills = {
    languages: ['Python', 'C', 'C++', 'HTML', 'CSS', 'JavaScript', 'React'],
    tools: ['Git'],
    soft: [
      'Leadership',
      'Event Management',
      'Public Speaking',
      'Time Management',
      'Problem Solving',
      'Adaptability',
    ],
  }

  const projects = [
    {
      title: 'Hand Gesture Detection and Meaning Display System',
      description:
        'Developed a real-time gesture recognition system using Python, OpenCV and MediaPipe to detect predefined hand gestures and map them to corresponding meanings. Integrated system with Arduino/NodeMCU via serial communication to display gesture meanings on a 16x2 LCD screen with over 90% accuracy and sub-1 second response time.',
      stack: 'Python, OpenCV, MediaPipe, Arduino, NodeMCU',
      link: 'https://github.com/mish-1',
    },
    {
      title: 'SymbiTech 2025 Official Website',
      description:
        'Co-managed the official event website and improved registration flow and participant navigation to enhance engagement and reduce confusion.',
      stack: 'HTML, CSS, JavaScript, React',
      link: 'https://github.com/mish-1',
    },
  ]

  const leadership = [
    {
      role: 'Open Source Contributor - Hacktoberfest',
      org: 'Remote',
      year: '2024 - 2025',
      work: 'Contributed to open-source repositories by fixing issues, improving documentation and collaborating with maintainers to get pull requests merged.',
    },
    {
      role: 'Head of Hospitality - StartupCon 2.0',
      org: 'Symbiosis Institute of Technology',
      year: '2025',
      work: 'Led hospitality operations for 200+ attendees including speakers and founders and coordinated logistics for smooth event experience.',
    },
    {
      role: 'Website Co-Head - SymbiTech 2025',
      org: 'Symbiosis Institute of Technology',
      year: '2025',
      work: 'Co-managed official event website and enhanced user experience for registrations and navigation.',
    },
    {
      role: 'Student Coordinator - EPIC',
      org: 'Symbiosis Institute of Technology',
      year: '2024 - Present',
      work: 'Managed student coordination and streamlined internal communication to support club activities and outreach.',
    },
    {
      role: 'Co-Coordinator - Google Developer Student Club (GDSC)',
      org: 'Symbiosis Institute of Technology',
      year: '2024 - Present',
      work: 'Assisted in organizing technical events and workshops to promote developer community participation.',
    },
  ]

  const achievements = [
    {
      title: 'Smart India Hackathon (SIH) 2025',
      desc: 'Qualified Round 1 - National Level Hackathon',
    },
    {
      title: 'CMR HackFest 3.0',
      desc: 'Finalist (Final Round - January 2026)',
    },
  ]

  return (
    <div className="portfolio">
      <div className="background-effects" aria-hidden="true">
        <span className="orb orb-one" />
        <span className="orb orb-two" />
      </div>

      <Navbar />

      <header className="hero">
        <div className="hero-main">
          <div className="hero-copy">
            <span className="hero-eyebrow">Portfolio • 2026</span>
            <h1>{profile.name}</h1>
            <p className="hero-text">{profile.role}</p>
            <p className="hero-text">{profile.summary}</p>
            <div className="hero-about">
              <p className="hero-about-text">{profile.about}</p>
            </div>
            <div className="hero-badges">
              <span className="badge">Open to internships</span>
              <span className="badge">Based in Pune, India</span>
            </div>
            <div className="hero-actions">
              <a className="cta" href="#contact">
                Contact Me
              </a>
              <a className="secondary-cta" href="#projects">
                View Projects
              </a>
            </div>
          </div>
          <div className="hero-photo-wrap">
            <img
              className="hero-photo"
              src="/profile-mishti.jpeg"
              alt="Mishti Kinker"
            />
          </div>
        </div>
      </header>

      <Section id="education" title="Education">
        <div className="education-timeline">
          {education.map((edu) => (
            <article key={edu.institute} className="edu-entry">
              <span className="edu-marker" aria-hidden="true" />
              <div className="edu-content">
                <span className="edu-year">{edu.year}</span>
                <h3>{edu.institute}</h3>
                <p className="edu-degree">{edu.degree}</p>
                <p className="edu-score">{edu.score}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section id="skills" title="Skills">
        <div className="skills-grid">
          <article className="info-card">
            <h3>Languages</h3>
            <p>{skills.languages.join(', ')}</p>
          </article>
          <article className="info-card">
            <h3>Tools</h3>
            <p>{skills.tools.join(', ')}</p>
          </article>
          <article className="info-card">
            <h3>Soft Skills</h3>
            <p>{skills.soft.join(', ')}</p>
          </article>
        </div>
      </Section>

      <Section id="projects" title="Projects">
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </Section>

      <Section id="leadership" title="Leadership & Involvement">
        <div className="stacked-cards">
          {leadership.map((lead) => (
            <article key={lead.role} className="info-card">
              <h3>{lead.role}</h3>
              <p>
                {lead.org} ({lead.year})
              </p>
              <p>{lead.work}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section id="achievements" title="Achievements">
        <div className="stacked-cards">
          {achievements.map((ach) => (
            <article key={ach.title} className="info-card">
              <h3>{ach.title}</h3>
              <p>{ach.desc}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section id="contact" title="Contact">
        <div className="section-surface contact-list">
          <p>
            Email: <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </p>
          <p>
            LinkedIn:{' '}
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              {profile.linkedin}
            </a>
          </p>
          <p>
            GitHub:{' '}
            <a href={profile.github} target="_blank" rel="noreferrer">
              {profile.github}
            </a>
          </p>
          <div className="contact-cta">
            <p>Let’s collaborate on inclusive interfaces or event-tech platforms.</p>
            <a className="secondary-cta" href="mailto:mishtikinker@gmail.com">
              Start a conversation
            </a>
          </div>
        </div>
      </Section>
    </div>
  )
}

export default App