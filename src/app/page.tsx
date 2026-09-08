'use client';

import React, { useState, useEffect } from 'react';
import { 
  ShieldAlert, 
  Layers, 
  Cpu, 
  Activity, 
  Terminal, 
  Copy, 
  Check, 
  ExternalLink, 
  Github, 
  Linkedin, 
  Sun, 
  Moon, 
  MapPin, 
  Phone, 
  Mail, 
  Sparkles,
  ArrowUpRight,
  Code2,
  Menu,
  X,
  FolderGit2,
  User
} from 'lucide-react';
import { PORTFOLIO_DATA, Project } from '@/data/portfolioData';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [theme, setTheme] = useState<'dark' | 'light'>('light');
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [currentTime, setCurrentTime] = useState<string>('');
  const [terminalOutput, setTerminalOutput] = useState<string>(
    'System ready. Select a command chip below or explore the audited architecture.'
  );

  // Synchronize theme with html class and localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('me_theme') as 'dark' | 'light' | null;
    const initial = savedTheme || 'light';
    setTheme(initial);
    if (typeof document !== 'undefined') {
      document.documentElement.classList.remove('dark-theme', 'light-theme');
      document.documentElement.classList.add(`${initial}-theme`);
    }
  }, []);

  // Live Cairo Time Clock
  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const timeString = now.toLocaleTimeString('en-US', {
        timeZone: 'Africa/Cairo',
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      });
      setCurrentTime(`${timeString} EET (Cairo)`);
    };
    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  // Theme Toggle
  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('me_theme', nextTheme);
    }
    if (typeof document !== 'undefined') {
      document.documentElement.classList.remove('dark-theme', 'light-theme');
      document.documentElement.classList.add(`${nextTheme}-theme`);
    }
  };

  // Toast Notification
  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2400);
  };

  // Copy to Clipboard
  const handleCopy = async (text: string, label: string) => {
    try {
      await navigator.clipboard.writeText(text);
      triggerToast(`Copied ${label} to clipboard!`);
    } catch {
      triggerToast(`Copied ${text}`);
    }
  };

  // Interactive CLI Simulation
  const handleTerminalCommand = (cmd: string) => {
    switch (cmd) {
      case 'whoami':
        setTerminalOutput(
          'Mustafa Elsayed Mustafa — Junior Backend .NET Developer. Electronics & Communication Engineering @ Zagazig University. DEPI scholarship graduate & iSchool instructor. Actively seeking Junior & Internship roles.'
        );
        break;
      case 'architecture':
        setTerminalOutput(
          'ARCH PATTERNS: 4-Layer Onion Architecture (Domain, Application, Infrastructure, Presentation) | Specification Pattern with deferred LINQ expressions | Unit of Work | Defensive RBAC | SignalR Real-Time Telemetry'
        );
        break;
      case 'stats':
        setTerminalOutput(
          'METRICS: 53 GitHub repositories | 1+ year commercial production APIs | 4 public Vercel cloud deployments | 0 hardcoded connection strings'
        );
        break;
      case 'contact':
        handleCopy(PORTFOLIO_DATA.personal.email, 'Email');
        setTerminalOutput(`CONTACT DISPATCHED: Email copied -> ${PORTFOLIO_DATA.personal.email}`);
        break;
      default:
        setTerminalOutput(`Executing: ${cmd}... done.`);
    }
  };

  // Filter Projects
  const filteredProjects = selectedCategory === 'all'
    ? PORTFOLIO_DATA.projects
    : PORTFOLIO_DATA.projects.filter(p => p.category === selectedCategory);

  return (
    <div className="portfolio-app">
      
      {/* 1. Real-time Telemetry Bar */}
      <div className="telemetry-bar">
        <div className="container telemetry-inner">
          <div className="telemetry-left">
            <div className="telemetry-tag">
              <span className="telemetry-dot" />
              <span>SIGNALR TELEMETRY: CONNECTED</span>
            </div>
            <div className="telemetry-tag" style={{ opacity: 0.7 }}>
              <span>PING: 14ms</span>
            </div>
          </div>
          <div className="telemetry-right">
            <div className="telemetry-tag">
              <span>ACTIVE REPOS: {PORTFOLIO_DATA.personal.repoCount}</span>
            </div>
            <div className="telemetry-tag" style={{ color: 'var(--accent)' }}>
              <span>{currentTime || '04:00:00 EET'}</span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Main Navigation Header */}
      <header className="site-nav">
        <div className="container nav-row">
          <a href="#" className="brand-badge">
            <img 
              src="/avatar.jpg" 
              alt="Mustafa Elsayed" 
              className="brand-avatar-img"
              width={34}
              height={34}
            />
            <span>Mustafa Elsayed</span>
          </a>

          <nav className="nav-links-desktop">
            <a href="#about" className="nav-item">About</a>
            <a href="#projects" className="nav-item">Projects</a>
            <a href="#terminal" className="nav-item">CLI Console</a>
            <a href="#experience" className="nav-item">Experience</a>
            <a href="#skills" className="nav-item">Skills</a>
            <a href="#contact" className="nav-item">Contact</a>
          </nav>

          <div className="nav-actions">
            <button 
              onClick={toggleTheme} 
              className="theme-toggle-btn" 
              aria-label="Toggle Theme"
              title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} mode`}
            >
              {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
            </button>
            <a 
              href={PORTFOLIO_DATA.personal.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-outline nav-github-btn"
              style={{ padding: '0.45rem 0.85rem', fontSize: '0.8rem' }}
            >
              <Github size={15} />
              <span>GitHub</span>
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="mobile-menu-toggle-btn"
              aria-label="Toggle Navigation Menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="mobile-nav-drawer">
            <div className="container mobile-nav-inner">
              <div className="mobile-nav-profile-header">
                <img 
                  src="/avatar.jpg" 
                  alt="Mustafa Elsayed" 
                  className="mobile-drawer-avatar"
                  width={48}
                  height={48}
                />
                <div>
                  <div className="mobile-drawer-name">{PORTFOLIO_DATA.personal.name}</div>
                  <div className="mobile-drawer-role">Junior Backend .NET Developer</div>
                </div>
              </div>

              <nav className="mobile-nav-links">
                <a href="#about" onClick={() => setMobileMenuOpen(false)} className="mobile-nav-item">
                  <span className="mobile-nav-num">01</span>
                  <span>About & Engineering DNA</span>
                </a>
                <a href="#projects" onClick={() => setMobileMenuOpen(false)} className="mobile-nav-item">
                  <span className="mobile-nav-num">02</span>
                  <span>Audited Projects ({PORTFOLIO_DATA.projects.length})</span>
                </a>
                <a href="#terminal" onClick={() => setMobileMenuOpen(false)} className="mobile-nav-item">
                  <span className="mobile-nav-num">03</span>
                  <span>CLI Terminal Console</span>
                </a>
                <a href="#experience" onClick={() => setMobileMenuOpen(false)} className="mobile-nav-item">
                  <span className="mobile-nav-num">04</span>
                  <span>Experience & Education</span>
                </a>
                <a href="#skills" onClick={() => setMobileMenuOpen(false)} className="mobile-nav-item">
                  <span className="mobile-nav-num">05</span>
                  <span>Skills Matrix</span>
                </a>
                <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="mobile-nav-item">
                  <span className="mobile-nav-num">06</span>
                  <span>Contact & Dispatch</span>
                </a>
              </nav>

              <div className="mobile-nav-footer">
                <button
                  onClick={() => {
                    handleCopy(PORTFOLIO_DATA.personal.email, 'Email');
                    setMobileMenuOpen(false);
                  }}
                  className="btn btn-accent"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  <Mail size={15} />
                  <span>Copy Direct Email</span>
                </button>
                <div className="mobile-quick-links">
                  <a href={`tel:${PORTFOLIO_DATA.personal.phone.replace(/\s+/g, '')}`} className="mobile-quick-btn">
                    <Phone size={14} />
                    <span>Call Phone</span>
                  </a>
                  <a href={PORTFOLIO_DATA.personal.github} target="_blank" rel="noopener noreferrer" className="mobile-quick-btn">
                    <Github size={14} />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      <main>
        {/* 3. Hero Section */}
        <section className="hero-wrapper">
          <div className="container">
            <div className="hero-minimal-header">
              <div className="hero-avatar-minimal">
                <img
                  src="/avatar.jpg"
                  alt="Mustafa Elsayed"
                  className="minimal-avatar-img"
                  width={82}
                  height={82}
                />
                <span className="minimal-status-dot" title="Available for Junior & Intern Roles" />
              </div>

              <div className="hero-status-pill">
                <Sparkles size={14} style={{ color: 'var(--accent)' }} />
                <span>{PORTFOLIO_DATA.personal.status}</span>
              </div>
            </div>

            <h1 className="hero-name">{PORTFOLIO_DATA.personal.name}</h1>

            <p className="hero-role">
              <strong>Junior Backend .NET Developer.</strong> Driven by an Electronics & Communication 
              Engineering foundation, DEPI scholarship certification, and 53 public repositories. Specializing 
              in ASP.NET Core, EF Core, and 4-layer Onion Architecture — ready to deliver production-ready 
              APIs from Day 1.
            </p>

            {/* Metric counters */}
            <div className="hero-metrics-grid">
              {PORTFOLIO_DATA.metrics.map((m, idx) => (
                <div key={idx} className="metric-pill">
                  <span className="metric-val">{m.value}</span>
                  <span className="metric-lbl">{m.label}</span>
                </div>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="hero-cta-group">
              <a href="#projects" className="btn btn-accent btn-primary-cta">
                <span>Explore Audited Systems</span>
                <ArrowUpRight size={15} />
              </a>
              <div className="hero-cta-secondary-row">
                <button 
                  onClick={() => handleCopy(PORTFOLIO_DATA.personal.email, 'Email')}
                  className="btn btn-outline"
                >
                  <Copy size={14} />
                  <span>Copy Email</span>
                </button>
                <a href="#terminal" className="btn btn-terminal">
                  <Terminal size={14} />
                  <span>CLI Console</span>
                </a>
              </div>
            </div>

            {/* 4. Creative Feature: Interactive Architecture CLI Console */}
            <div id="terminal" className="terminal-card">
              <div className="terminal-header">
                <div className="terminal-dots">
                  <span className="dot-red" />
                  <span className="dot-yellow" />
                  <span className="dot-green" />
                </div>
                <span className="terminal-title">mustafa@cairo-server: ~ (interactive shell)</span>
                <Code2 size={15} style={{ opacity: 0.5 }} />
              </div>
              <div className="terminal-body">
                <div className="terminal-line">
                  <span className="term-prompt">$</span>
                  <span className="term-cmd">system --audit-mode</span>
                </div>
                <div className="term-res">{terminalOutput}</div>
                <div className="term-actions-bar">
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)', alignSelf: 'center' }}>
                    Quick commands:
                  </span>
                  <button onClick={() => handleTerminalCommand('whoami')} className="term-action-chip">
                    whoami
                  </button>
                  <button onClick={() => handleTerminalCommand('architecture')} className="term-action-chip">
                    cat architecture.md
                  </button>
                  <button onClick={() => handleTerminalCommand('stats')} className="term-action-chip">
                    systemctl status metrics
                  </button>
                  <button onClick={() => handleTerminalCommand('contact')} className="term-action-chip">
                    dispatch contact --email
                  </button>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* 5. Architectural Philosophy Section */}
        <section id="about" className="section">
          <div className="container">
            <div className="section-head">
              <span className="section-tag">Engineering DNA</span>
              <h2 className="section-title">The Four Core Pillars</h2>
              <p className="section-sub">
                Every line of code is structured to survive production scale, malicious inputs, and distributed state.
              </p>
            </div>

            <div className="pillars-grid">
              {PORTFOLIO_DATA.pillars.map((pillar, idx) => (
                <div key={idx} className="pillar-card">
                  <div className="pillar-icon-box">
                    {idx === 0 && <ShieldAlert size={22} />}
                    {idx === 1 && <Layers size={22} />}
                    {idx === 2 && <Cpu size={22} />}
                    {idx === 3 && <Activity size={22} />}
                  </div>
                  <h3 className="pillar-title">{pillar.title}</h3>
                  <span className="pillar-subtitle">{pillar.subtitle}</span>
                  <p className="pillar-desc">{pillar.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. Projects Showcase */}
        <section id="projects" className="section">
          <div className="container">
            <div className="section-head">
              <span className="section-tag">Audited Repositories</span>
              <h2 className="section-title">Selected Production & Open Source Systems</h2>
              <p className="section-sub">
                Direct evidence of microservices, enterprise Onion monoliths, and real-time WebSocket pipelines.
              </p>
            </div>

            {/* Category Filter Pills */}
            <div className="category-filter-bar">
              {[
                { key: 'all', label: 'All Systems' },
                { key: 'microservices', label: 'Microservices & Docker' },
                { key: 'enterprise', label: 'Enterprise .NET (Onion)' },
                { key: 'realtime', label: 'IoT & Real-Time Telemetry' },
                { key: 'fullstack', label: 'Full-Stack & Web' },
              ].map(tab => (
                <button
                  key={tab.key}
                  onClick={() => setSelectedCategory(tab.key)}
                  className={`cat-btn ${selectedCategory === tab.key ? 'active' : ''}`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Projects Grid */}
            <div className="projects-grid">
              {filteredProjects.map((project) => (
                <article key={project.id} className="project-card">
                  <div>
                    <div className="project-meta-head">
                      <span className={`project-badge ${project.stars ? 'featured' : ''}`}>
                        {project.badge}
                      </span>
                      {project.githubUrl && (
                        <a 
                          href={project.githubUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="project-icon-link"
                          aria-label={`View ${project.title} on GitHub`}
                        >
                          <ExternalLink size={18} />
                        </a>
                      )}
                    </div>

                    <h3 className="project-title">{project.title}</h3>
                    <div className="project-tagline">{project.tagline}</div>
                    <p className="project-description">{project.description}</p>

                    <ul className="project-bullets">
                      {project.highlights.map((h, i) => (
                        <li key={i}>{h}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="tag-cloud">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="tag-pill">{tag}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>

            {/* Live Deployments Banner */}
            <div className="live-deployments-card">
              <div className="live-deployments-info">
                <h4>Active Cloud Deployments on Vercel</h4>
                <p>Publicly accessible client-side tools and frontends engineered and hosted live:</p>
              </div>
              <div className="live-pills-row">
                {PORTFOLIO_DATA.liveApps.map((app, i) => (
                  <a 
                    key={i} 
                    href={app.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="live-pill"
                    title={app.desc}
                  >
                    <span>{app.name}</span>
                    <ArrowUpRight size={12} />
                  </a>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* 7. Experience & Education Timeline */}
        <section id="experience" className="section">
          <div className="container">
            <div className="section-head">
              <span className="section-tag">Career Trajectory</span>
              <h2 className="section-title">Experience & Technical Education</h2>
              <p className="section-sub">Commercial software delivery, technical instruction, and engineering rigor.</p>
            </div>

            <div className="timeline-track">
              {PORTFOLIO_DATA.experience.map(item => (
                <div key={item.id} className="timeline-entry">
                  <div className={`entry-node ${item.type === 'education' ? 'education' : ''}`} />
                  <div className="timeline-card">
                    <div className="timeline-card-head">
                      <div>
                        <h3 className="entry-role">{item.role}</h3>
                        <span className="entry-org">{item.organization}</span>
                      </div>
                      <span className="entry-date">{item.period}</span>
                    </div>
                    <p className="entry-desc">{item.description}</p>
                    <div className="tag-cloud">
                      {item.skills.map((s, i) => (
                        <span key={i} className="tag-pill">{s}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 8. Technical Skills Matrix */}
        <section id="skills" className="section">
          <div className="container">
            <div className="section-head">
              <span className="section-tag">Capabilities</span>
              <h2 className="section-title">Technical Skills Matrix</h2>
            </div>

            <div className="skills-matrix">
              <div className="skill-box">
                <div className="skill-box-head">
                  <Cpu size={18} />
                  <span>Core Backend Stack</span>
                </div>
                <ul className="skill-items">
                  {PORTFOLIO_DATA.skills.backend.map((s, i) => (
                    <li key={i}>{s}</li>
                  ))}
                </ul>
              </div>

              <div className="skill-box">
                <div className="skill-box-head">
                  <Layers size={18} />
                  <span>Architecture & Patterns</span>
                </div>
                <ul className="skill-items">
                  {PORTFOLIO_DATA.skills.architecture.map((s, i) => (
                    <li key={i}>{s}</li>
                  ))}
                </ul>
              </div>

              <div className="skill-box">
                <div className="skill-box-head">
                  <ShieldAlert size={18} />
                  <span>Security & Identity</span>
                </div>
                <ul className="skill-items">
                  {PORTFOLIO_DATA.skills.security.map((s, i) => (
                    <li key={i}>{s}</li>
                  ))}
                </ul>
              </div>

              <div className="skill-box">
                <div className="skill-box-head">
                  <Terminal size={18} />
                  <span>DevOps & Databases</span>
                </div>
                <ul className="skill-items">
                  {PORTFOLIO_DATA.skills.databases.concat(PORTFOLIO_DATA.skills.qualityDevops.slice(0, 3)).map((s, i) => (
                    <li key={i}>{s}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 9. Contact & Connect Section */}
        <section id="contact" className="section">
          <div className="container">
            <div className="section-head" style={{ textAlign: 'center', margin: '0 auto 2.5rem' }}>
              <span className="section-tag" style={{ justifyContent: 'center' }}>Direct Connection</span>
              <h2 className="section-title">Initiate Contact</h2>
              <p className="section-sub" style={{ margin: '0 auto' }}>
                Open for Junior Backend .NET Developer roles, internships, and engineering opportunities.
              </p>
            </div>

            <div className="contact-grid">
              
              {/* Contact Data Box */}
              <div className="contact-card-box">
                <div className="contact-profile-summary">
                  <img 
                    src="/avatar.jpg" 
                    alt="Mustafa Elsayed" 
                    className="contact-avatar-thumb"
                    width={46}
                    height={46}
                  />
                  <div>
                    <div style={{ fontSize: '1.05rem', fontWeight: 600, color: 'var(--text-main)' }}>
                      Mustafa Elsayed
                    </div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--accent)', fontFamily: 'var(--font-mono)' }}>
                      Junior Backend .NET Developer · Cairo
                    </div>
                  </div>
                </div>

                <div className="contact-row">
                  <div className="contact-meta">
                    <span className="contact-meta-label">Direct Email</span>
                    <a href={`mailto:${PORTFOLIO_DATA.personal.email}`} className="contact-meta-val">
                      {PORTFOLIO_DATA.personal.email}
                    </a>
                  </div>
                  <button 
                    onClick={() => handleCopy(PORTFOLIO_DATA.personal.email, 'Email')} 
                    className="copy-mini-btn"
                    title="Copy Email"
                  >
                    <Copy size={15} />
                  </button>
                </div>

                <div className="contact-row">
                  <div className="contact-meta">
                    <span className="contact-meta-label">Phone / WhatsApp</span>
                    <a href={`tel:${PORTFOLIO_DATA.personal.phone.replace(/\s+/g, '')}`} className="contact-meta-val">
                      {PORTFOLIO_DATA.personal.phone}
                    </a>
                  </div>
                  <button 
                    onClick={() => handleCopy(PORTFOLIO_DATA.personal.phone, 'Phone Number')} 
                    className="copy-mini-btn"
                    title="Copy Phone Number"
                  >
                    <Copy size={15} />
                  </button>
                </div>

                <div className="contact-row">
                  <div className="contact-meta">
                    <span className="contact-meta-label">Physical Base</span>
                    <span className="contact-meta-val">{PORTFOLIO_DATA.personal.location} (UTC+2)</span>
                  </div>
                  <MapPin size={17} style={{ color: 'var(--accent)' }} />
                </div>
              </div>

              {/* Social Channels Cluster */}
              <div className="socials-cluster">
                <a 
                  href={PORTFOLIO_DATA.personal.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-button"
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <Github size={20} />
                    <span>github.com/MustafaElsayed74</span>
                  </div>
                  <ArrowUpRight size={16} />
                </a>

                <a 
                  href={PORTFOLIO_DATA.personal.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-button"
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <Linkedin size={20} />
                    <span>linkedin.com/in/mustafaelsayed72</span>
                  </div>
                  <ArrowUpRight size={16} />
                </a>

                <button 
                  onClick={() => handleCopy(PORTFOLIO_DATA.personal.email, 'Email')}
                  className="btn btn-accent"
                  style={{ justifyContent: 'center', marginTop: '0.5rem', width: '100%' }}
                >
                  <Mail size={16} />
                  <span>Send Direct Email</span>
                </button>
              </div>

            </div>
          </div>
        </section>
      </main>

      {/* 10. Minimal Technical Footer */}
      <footer className="site-footer">
        <div className="container footer-inner">
          <div>
            <span>© 2026 Mustafa Elsayed Mustafa. Built with Next.js & Clean Systems Architecture.</span>
          </div>
          <div>
            <a href="#" style={{ color: 'var(--text-muted)' }}>Back to Top ↑</a>
          </div>
        </div>
      </footer>

      {/* Sleek Minimalist Mobile Bottom Navigation Bar */}
      <nav className="mobile-bottom-nav" aria-label="Mobile Bottom Navigation">
        <a href="#about" className="mobile-bottom-nav-item">
          <User size={18} />
          <span>About</span>
        </a>
        <a href="#projects" className="mobile-bottom-nav-item">
          <FolderGit2 size={18} />
          <span>Projects</span>
        </a>
        <a href="#skills" className="mobile-bottom-nav-item">
          <Cpu size={18} />
          <span>Skills</span>
        </a>
        <a href="#contact" className="mobile-bottom-nav-item">
          <Mail size={18} />
          <span>Contact</span>
        </a>
      </nav>

      {/* Toast Notification */}
      {toastMessage && (
        <div className="floating-toast" role="status">
          {toastMessage}
        </div>
      )}

    </div>
  );
}
