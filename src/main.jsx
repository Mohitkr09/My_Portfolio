import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowDownRight, ArrowRight, ArrowUpRight, Github, Linkedin, Mail,
  Menu, X, Code2, BrainCircuit, Database, Cloud, Terminal, ExternalLink,
  CheckCircle2, MapPin, GraduationCap, BriefcaseBusiness, Trophy, Sparkles
} from "lucide-react";
import "./styles.css";

const github = "https://github.com/MohitKr09";
const linkedin = "https://linkedin.com/in/mohit-kumar-a954b42b6";
const email = "mkr27858@gmail.com";

const projects = [
  {
    number: "01",
    name: "EstateMate AI",
    type: "AI · FULL STACK",
    description: "An AI-powered real-estate management platform for property discovery, lead tracking, and conflict-free site-visit scheduling.",
    stack: ["React.js", "FastAPI", "PostgreSQL", "SQLAlchemy", "JWT", "Generative AI"],
    accent: "violet",
    icon: BrainCircuit,
    highlights: ["Role-based access control", "AI conversational assistant", "Lead validation & visit booking"],
    github: `${github}/Estate_AI`,
    label: "Real estate intelligence"
  },
  {
    number: "02",
    name: "TransportX",
    type: "MOBILITY · FULL STACK",
    description: "A ride-booking application with user, driver, and admin experiences, live map features, and integrated payments.",
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "Google Maps", "Stripe"],
    accent: "blue",
    icon: Code2,
    highlights: ["Role-based dashboards", "Route & fare features", "Secure checkout flow"],
    github: `${github}/Transport`,
    label: "Ride booking platform"
  },
  {
    number: "03",
    name: "Movie Ticket Booking",
    type: "WEB APP · RECOMMENDATIONS",
    description: "A movie ticket booking experience with secure authentication, seat booking, payment processing, and movie recommendations.",
    stack: ["React.js", "Node.js", "MongoDB", "Stripe", "Python", "scikit-learn"],
    accent: "pink",
    icon: Sparkles,
    highlights: ["Movie recommendation engine", "Seat booking workflow", "E-ticket & email confirmation"],
    github: github,
    label: "Bookings made seamless"
  }
];

const skillGroups = [
  { title: "Languages", icon: Terminal, skills: ["Java", "Python", "JavaScript", "SQL", "HTML", "CSS"] },
  { title: "Frontend & Backend", icon: Code2, skills: ["React.js", "Node.js", "Express.js", "FastAPI", "React Native", "REST APIs"] },
  { title: "Data & Infrastructure", icon: Database, skills: ["PostgreSQL", "MongoDB", "SQLAlchemy", "Git", "GitHub", "Docker", "AWS EC2", "AWS S3"] },
  { title: "AI & Data", icon: BrainCircuit, skills: ["Gemini API", "scikit-learn", "Pandas", "NumPy", "Matplotlib"] }
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  }

  return (
    <div className="site-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <header className="nav-wrap">
        <nav className="nav container" aria-label="Main navigation">
          <a href="#home" className="brand" onClick={closeMenu} aria-label="Mohit Kumar home">
            <span className="brand-mark">M<span>.</span></span>
            <span className="brand-name">MOHIT KUMAR</span>
          </a>
          <button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close menu" : "Open menu"}>
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
          <div className={`nav-links ${menuOpen ? "nav-links-open" : ""}`}>
            {["About", "Skills", "Projects", "Experience", "Achievements", "Contact"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>{item}</a>
            ))}
            <a className="nav-cta" href={github} target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={14} /></a>
          </div>
        </nav>
      </header>

      <main>
        <section className="hero container" id="home">
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot" /> OPEN TO SOFTWARE ENGINEERING OPPORTUNITIES</div>
            <h1>Building useful<br />things with <span className="gradient-text">code<span className="period">.</span></span></h1>
            <p className="hero-description">
              Hey, I’m <strong>Mohit Kumar</strong> — a software developer and final-year IT student who enjoys turning complex problems into clean, practical products across full-stack engineering and AI.
            </p>
            <div className="hero-actions">
              <a href="#projects" className="button button-primary">Explore my work <ArrowDownRight size={17} /></a>
              <a href={`mailto:${email}`} className="button button-secondary"><Mail size={16} /> Get in touch</a>
            </div>
            <div className="hero-socials">
              <a href={github} target="_blank" rel="noreferrer"><Github size={17} /> GitHub <ArrowUpRight size={13} /></a>
              <a href={linkedin} target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn <ArrowUpRight size={13} /></a>
              <span className="social-divider" />
              <span className="location"><MapPin size={14} /> India</span>
            </div>
          </div>
          <div className="hero-visual" aria-label="Developer profile summary">
            <div className="orbit orbit-large" />
            <div className="orbit orbit-small" />
            <div className="profile-card">
              <div className="profile-card-top"><span className="window-dots"><i /><i /><i /></span><span className="mono">developer.profile</span><span className="card-live">● LIVE</span></div>
              <div className="avatar-area">
                <div className="avatar-ring"><div className="avatar">MK<span>.</span></div></div>
                <div className="avatar-spark spark-one">✳</div>
                <div className="avatar-spark spark-two">✦</div>
              </div>
              <div className="profile-info">
                <div className="profile-name">Mohit Kumar</div>
                <div className="profile-role">Software Engineer · Full Stack</div>
                <div className="profile-line"><span>location</span><b>"India"</b></div>
                <div className="profile-line"><span>graduation</span><b>"2027"</b></div>
                <div className="profile-line"><span>currently</span><b className="green-text">building + learning</b></div>
              </div>
              <div className="profile-card-bottom"><Code2 size={15} /><span>Ship thoughtfully. Learn constantly.</span><span className="bottom-cursor">_</span></div>
            </div>
            <div className="float-chip chip-top"><span className="chip-icon"><Code2 size={16} /></span><span><b>Full Stack</b><small>Product development</small></span></div>
            <div className="float-chip chip-bottom"><span className="chip-icon chip-icon-pink"><BrainCircuit size={16} /></span><span><b>AI curious</b><small>Practical applications</small></span></div>
          </div>
          <div className="hero-bottom-note"><span>SCROLL TO EXPLORE</span><div className="scroll-line" /></div>
        </section>

        <section className="stats-section container" aria-label="Highlights">
          <div className="stat"><span className="stat-value">600<span>+</span></span><span className="stat-label">LeetCode problems</span></div>
          <div className="stat"><span className="stat-value">3<span>★</span></span><span className="stat-label">CodeChef rating tier</span></div>
          <div className="stat"><span className="stat-value">1600<span>+</span></span><span className="stat-label">CodeChef rating</span></div>
          <div className="stat"><span className="stat-value">3</span><span className="stat-label">Featured projects</span></div>
        </section>

        <section className="section container" id="about">
          <SectionHeading number="01" eyebrow="A LITTLE ABOUT ME" title={<>Curiosity meets<br /><span className="muted-title">craftsmanship.</span></>} />
          <div className="about-grid">
            <div className="about-main">
              <p className="about-lead">I like understanding how things work — then building something that makes them work better.</p>
              <p className="body-copy">I’m pursuing a B.Tech in Information Technology at Kamla Nehru Institute of Technology, Sultanpur. My work spans responsive interfaces, backend APIs, database design, and AI-enabled features. I enjoy moving between the details of implementation and the bigger picture of user experience.</p>
              <p className="body-copy">Outside project work, I keep sharpening my problem-solving skills through data structures and algorithms. I’m looking for opportunities where I can contribute, ask good questions, and grow alongside a strong engineering team.</p>
              <a className="text-link" href={linkedin} target="_blank" rel="noreferrer">More about my journey <ArrowUpRight size={16} /></a>
            </div>
            <div className="about-facts">
              <div className="fact-card"><div className="fact-icon"><GraduationCap size={19} /></div><div><span className="fact-label">EDUCATION</span><b>B.Tech, Information Technology</b><small>KNIT Sultanpur · 2023–2027</small></div></div>
              <div className="fact-card"><div className="fact-icon"><BriefcaseBusiness size={19} /></div><div><span className="fact-label">EXPERIENCE</span><b>Full Stack Developer Intern</b><small>Unified Mentor · Apr–May 2025</small></div></div>
              <div className="fact-card"><div className="fact-icon"><Trophy size={19} /></div><div><span className="fact-label">PROBLEM SOLVING</span><b>600+ problems solved</b><small>LeetCode · CodeChef 3★</small></div></div>
            </div>
          </div>
        </section>

        <section className="section skills-section" id="skills">
          <div className="container">
            <SectionHeading number="02" eyebrow="MY TOOLKIT" title={<>Tools I use to<br /><span className="muted-title">make things happen.</span></>} />
            <p className="section-intro">A practical stack for building, connecting, and shipping software.</p>
            <div className="skills-grid">
              {skillGroups.map((group, index) => {
                const Icon = group.icon;
                return <div className="skill-card" key={group.title}>
                  <div className="skill-card-top"><div className="skill-icon"><Icon size={19} /></div><span className="mono skill-index">0{index + 1}</span></div>
                  <h3>{group.title}</h3>
                  <div className="skill-pills">{group.skills.map(skill => <span key={skill}>{skill}</span>)}</div>
                </div>;
              })}
            </div>
          </div>
        </section>

        <section className="section container" id="projects">
          <SectionHeading number="03" eyebrow="SELECTED WORK" title={<>Projects built to<br /><span className="muted-title">solve real problems.</span></>} />
          <div className="projects-topline"><p className="section-intro">A mix of full-stack systems, thoughtful workflows, and AI-powered features.</p><span className="mono projects-count">03 PROJECTS / 2025—26</span></div>
          <div className="projects-list">
            {projects.map((project) => {
              const Icon = project.icon;
              return <article className={`project-card project-${project.accent}`} key={project.name}>
                <div className="project-art">
                  <div className="art-grid" />
                  <div className="art-orb" />
                  <div className="art-window">
                    <div className="art-window-bar"><span /><span /><span /><i>{project.label}</i></div>
                    <div className="art-window-content">
                      <div className="art-icon"><Icon size={27} /></div>
                      <div className="art-lines"><b /><span /><span /></div>
                      <div className="art-mini-row"><i /><i /><i /></div>
                    </div>
                  </div>
                  <span className="project-number">{project.number}</span>
                </div>
                <div className="project-content">
                  <div className="project-type">{project.type}</div>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <div className="project-highlights">{project.highlights.map(item => <span key={item}><CheckCircle2 size={13} /> {item}</span>)}</div>
                  <div className="project-stack">{project.stack.map(item => <span key={item}>{item}</span>)}</div>
                  <div className="project-links">
                    <a href={project.github} target="_blank" rel="noreferrer"><Github size={15} /> View repository <ArrowUpRight size={14} /></a>
                  </div>
                </div>
              </article>;
            })}
          </div>
          <p className="project-note"><span className="note-star">✳</span> More experiments and code live on <a href={github} target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={13} /></a>.</p>
        </section>

        <section className="section experience-section" id="experience">
          <div className="container">
            <SectionHeading number="04" eyebrow="WHERE I'VE GROWN" title={<>Experience that<br /><span className="muted-title">builds good habits.</span></>} />
            <div className="timeline">
              <div className="timeline-rail"><span /></div>
              <div className="experience-entry">
                <div className="experience-date mono">APR 2025 — MAY 2025</div>
                <div className="experience-body">
                  <div className="experience-heading"><div><h3>Full Stack Developer Intern</h3><p className="company">Unified Mentor <span>· Remote</span></p></div><span className="experience-badge">INTERNSHIP</span></div>
                  <p className="body-copy">Contributed to full-stack web development with a focus on responsive frontend experiences, backend APIs, and data management.</p>
                  <ul className="experience-points">
                    <li>Built responsive UI features with React.js and backend REST APIs using Node.js and Express.js.</li>
                    <li>Designed MongoDB schemas and integrated client-server communication through APIs.</li>
                    <li>Debugged issues, improved route and query efficiency, and used Git/GitHub in development workflows.</li>
                  </ul>
                  <div className="project-stack"><span>React.js</span><span>Node.js</span><span>Express.js</span><span>MongoDB</span><span>Git</span></div>
                </div>
              </div>
              <div className="timeline-footnote"><span className="status-dot" /> Currently pursuing my degree and building projects</div>
            </div>
          </div>
        </section>

        <section className="section container" id="achievements">
          <SectionHeading number="05" eyebrow="THE PRACTICE" title={<>Small steps. <span className="muted-title">Consistent progress.</span></>} />
          <div className="achievement-grid">
            <div className="achievement-card"><div className="achievement-top"><Code2 size={20} /><span className="mono">01 / DSA</span></div><strong>600<span>+</span></strong><h3>Problems solved</h3><p>Consistent practice in algorithms, data structures, and problem-solving on LeetCode.</p><a href="https://leetcode.com/" target="_blank" rel="noreferrer">LeetCode <ArrowUpRight size={13} /></a></div>
            <div className="achievement-card achievement-featured"><div className="achievement-top"><Trophy size={20} /><span className="mono">02 / CONTESTS</span></div><strong>3<span>★</span></strong><h3>CodeChef · 1600+ rating</h3><p>Competitive programming practice that reinforces algorithmic thinking and implementation.</p><a href="https://www.codechef.com/" target="_blank" rel="noreferrer">CodeChef <ArrowUpRight size={13} /></a></div>
            <div className="achievement-card"><div className="achievement-top"><Cloud size={20} /><span className="mono">03 / LEARNING</span></div><strong>∞</strong><h3>Always learning</h3><p>Oracle Cloud Infrastructure & AI Foundations, plus software engineering and cybersecurity job simulations.</p><span className="achievement-caption">CERTIFICATIONS & PRACTICE</span></div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-glow" />
          <div className="container contact-inner">
            <div className="eyebrow"><span className="status-dot" /> LET'S BUILD SOMETHING</div>
            <h2>Have a good problem?<br /><span className="gradient-text">Let’s solve it.</span></h2>
            <p>I’m open to software engineering internships, full-stack roles, and conversations about building useful products. If you think we’d work well together, I’d love to hear from you.</p>
            <div className="contact-actions">
              <button className="button button-primary" onClick={copyEmail}><Mail size={16} /> {copied ? "Email copied!" : "Copy my email"} {copied ? <CheckCircle2 size={16} /> : <ArrowUpRight size={15} />}</button>
              <a className="button button-secondary" href={`mailto:${email}`}>Send an email <ArrowRight size={16} /></a>
            </div>
            <div className="contact-socials">
              <a href={github} target="_blank" rel="noreferrer"><Github size={17} /> GitHub <ArrowUpRight size={13} /></a>
              <a href={linkedin} target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn <ArrowUpRight size={13} /></a>
              <a href={`mailto:${email}`}><Mail size={17} /> Email <ArrowUpRight size={13} /></a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer container">
        <a href="#home" className="brand"><span className="brand-mark">M<span>.</span></span><span className="brand-name">MOHIT KUMAR</span></a>
        <span className="footer-copy">Designed & built with care <span>✳</span> © {new Date().getFullYear()} Mohit Kumar</span>
        <a href="#home" className="back-top">BACK TO TOP <ArrowUpRight size={13} /></a>
      </footer>
    </div>
  );
}

function SectionHeading({ number, eyebrow, title }) {
  return <div className="section-heading">
    <div className="section-heading-meta"><span className="mono section-number">{number}</span><span className="section-eyebrow">{eyebrow}</span></div>
    <h2>{title}</h2>
  </div>;
}

createRoot(document.getElementById("root")).render(<App />);
