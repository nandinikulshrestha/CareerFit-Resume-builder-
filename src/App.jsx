import {
  ArrowRight,
  Check,
  FileText,
  Target,
  TrendingUp,
  Sparkles,
  Upload,
  Search,
  Lightbulb,
  Menu,
  X,
  ShieldCheck,
  BriefcaseBusiness,
  BarChart3,
  FileCheck2,
} from 'lucide-react';

import { useState } from 'react';
import './App.css';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const features = [
    {
      icon: Target,
      title: 'Fit score for every job',
      description:
        'One clear percentage for each opening, based on how your skills line up with what the role asks for.',
    },
    {
      icon: BarChart3,
      title: 'Skill gap analysis',
      description:
        'See which skills appear in your target role but are missing from your resume.',
    },
    {
      icon: FileCheck2,
      title: 'Resume suggestions',
      description:
        'Get specific ideas that would make your resume stronger for the role you want.',
    },
  ];

  const steps = [
    {
      number: '01',
      title: 'Upload your resume',
      description:
        'Drop in a PDF or DOCX. No forms to fill, no experience to re-enter.',
    },
    {
      number: '02',
      title: 'AI reads your profile',
      description:
        'CareerFit extracts your skills, projects and experience and compares them with each job description.',
    },
    {
      number: '03',
      title: 'Get ranked matches',
      description:
        'See every opening ordered by fit score, with the reason behind each match.',
    },
  ];

  return (
    <div className="app">

      {/* NAVBAR */}
      <nav className="navbar">
        <a href="#home" className="logo">
          <span className="logo-icon">
            <BriefcaseBusiness size={18} />
          </span>
          CareerFit
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <a href="#how-it-works" onClick={() => setMenuOpen(false)}>
            How it works
          </a>

          <a href="#features" onClick={() => setMenuOpen(false)}>
            Features
          </a>

          <a href="#about" onClick={() => setMenuOpen(false)}>
            About
          </a>
        </div>

        <div className="nav-actions">
          <a href="/login" className="login-btn">
            Log in
          </a>

          <a href="/signup" className="signup-btn">
            Get started
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero-content">

          <div className="eyebrow">
            <Sparkles size={13} />
            AI-POWERED RESUME AND JOB MATCHING
          </div>

          <h1>
            Know how well
            <br />
            you <span>fit the job</span>
            <br />
            before you apply.
          </h1>

          <p className="hero-description">
            Upload your resume once. CareerFit reads your skills,
            scores you against every opening, and shows exactly
            what is missing for the roles you want.
          </p>

          <div className="hero-buttons">
            <a href="/signup" className="primary-btn">
              Upload your resume
              <ArrowRight size={17} />
            </a>

            <a href="#how-it-works" className="secondary-btn">
              See how it works
            </a>
          </div>

          <div className="hero-trust">
            <span>
              <Check size={14} />
              No manual forms
            </span>

            <span>
              <Check size={14} />
              Instant fit score
            </span>

            <span>
              <Check size={14} />
              Actionable insights
            </span>
          </div>
        </div>

        {/* JOB MATCH CARD */}
        <div className="hero-visual">

          <div className="score-card">

            <div className="score-header">
              <div>
                <span className="small-label">
                  SAMPLE RESULT
                </span>

                <h3>Backend Developer</h3>

                <span className="company-name">
                  Northwind Labs · Bengaluru
                </span>
              </div>

              <div className="match-score">
                <strong>86%</strong>
                <span>fit score</span>
              </div>
            </div>

            <div className="score-progress">
              <span></span>
            </div>

            <div className="skills-section">
              <span className="small-label">
                SKILLS YOU ALREADY HAVE
              </span>

              <div className="skill-tags">
                <span>Python</span>
                <span>FastAPI</span>
                <span>SQL</span>
                <span>REST APIs</span>
                <span>Git</span>
              </div>
            </div>

            <div className="skills-section missing-skills">
              <span className="small-label">
                SKILLS TO ADD
              </span>

              <div className="skill-tags">
                <span>Docker</span>
                <span>Redis</span>
              </div>
            </div>

            <div className="suggestion-box">
              <Lightbulb size={17} />

              <div>
                <strong>Why this score?</strong>

                <p>
                  Your backend experience is a strong match.
                  Adding Docker and Redis could improve your fit.
                </p>
              </div>
            </div>
          </div>

          <div className="floating-badge">
            <TrendingUp size={18} />

            <div>
              <strong>Strong match</strong>
              <span>Ready to apply</span>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section
        className="how-section section"
        id="how-it-works"
      >
        <div className="section-heading dark-heading">
          <span className="section-label">
            HOW IT WORKS
          </span>

          <h2>
            Three steps from resume to shortlist
          </h2>
        </div>

        <div className="steps-grid">
          {steps.map((step, index) => (
            <div className="step-card" key={index}>

              <div className="step-number">
                {step.number}
              </div>

              <h3>{step.title}</h3>

              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section
        className="features section"
        id="features"
      >
        <div className="section-heading">

          <span className="section-label">
            SMARTER JOB SEARCH
          </span>

          <h2>
            Stop guessing which jobs are
            <br />
            <span>worth your time</span>
          </h2>

          <p>
            Every match comes with an explanation, so you know
            what to apply for today and what to learn next.
          </p>
        </div>

        <div className="feature-grid">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div className="feature-card" key={index}>

                <div className="feature-icon">
                  <Icon size={21} />
                </div>

                <h3>{feature.title}</h3>

                <p>{feature.description}</p>

                <a href="/signup">
                  Learn more
                  <ArrowRight size={14} />
                </a>
              </div>
            );
          })}
        </div>
      </section>

      {/* RESUME ANALYSIS STRIP */}
      <section className="analysis-section">
        <div className="analysis-content">

          <div className="analysis-icon">
            <FileText size={24} />
          </div>

          <div>
            <span className="section-label">
              BUILT FOR YOUR CAREER
            </span>

            <h2>
              Know what to improve before
              you send your next application.
            </h2>

            <p>
              CareerFit turns your resume into useful,
              job-specific insights instead of generic advice.
            </p>
          </div>

          <a href="/signup" className="primary-btn">
            Analyze my resume
            <ArrowRight size={17} />
          </a>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section" id="about">

        <div className="cta-content">

          <span className="section-label">
            YOUR NEXT CAREER MOVE
          </span>

          <h2>
            Make every application count.
          </h2>

          <p>
            Find the right roles, understand your gaps,
            and apply with confidence.
          </p>

          <a href="/signup" className="primary-btn">
            Get started free
            <ArrowRight size={17} />
          </a>
        </div>

        <div className="cta-icon">
          <ShieldCheck size={72} strokeWidth={1.2} />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">

        <a href="#home" className="logo">
          <span className="logo-icon">
            <BriefcaseBusiness size={17} />
          </span>
          CareerFit
        </a>

        <p>
          Make every application count.
        </p>

        <span>
          © 2026 CareerFit. All rights reserved.
        </span>

      </footer>

    </div>
  );
}

export default App;


