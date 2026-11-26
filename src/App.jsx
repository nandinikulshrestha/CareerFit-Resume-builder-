<<<<<<< HEAD
//import {
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
  BriefcaseBusiness
} from 'lucide-react';

import { useState } from 'react';
import './App.css';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const features = [
    {
      icon: Target,
      title: 'Resume Fit Score',
      description:
        'Get a clear percentage score showing how well your resume matches a job opening.'
    },
    {
      icon: Search,
      title: 'Missing Skills Analysis',
      description:
        'Identify the important skills missing from your resume for your target role.'
    },
    {
      icon: Lightbulb,
      title: 'Smart Suggestions',
      description:
        'Get practical suggestions to improve your resume and increase your chances.'
    }
  ];

  const steps = [
    {
      number: '01',
      icon: Upload,
      title: 'Upload Your Resume',
      description: 'Add your resume and choose your target job role.'
    },
    {
      number: '02',
      icon: Target,
      title: 'Get Your Fit Score',
      description: 'Understand how closely your profile matches the job.'
    },
    {
      number: '03',
      icon: TrendingUp,
      title: 'Improve Your Resume',
      description: 'Discover skill gaps and get suggestions for improvement.'
    }
  ];

  return (
    <div className="app">

      {/* Navbar */}
      <nav className="navbar">
        <a href="#home" className="logo">
          <span className="logo-icon">
            <BriefcaseBusiness size={21} />
          </span>
          CareerFit
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

        <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#features" onClick={() => setMenuOpen(false)}>Features</a>
          <a href="#how-it-works" onClick={() => setMenuOpen(false)}>How it works</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
        </div>

        <div className="nav-actions">
          <a href="/login" className="login-btn">Log in</a>
          <a href="/signup" className="signup-btn">Get Started <ArrowRight size={16} /></a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-content">
          <div className="eyebrow">
            <Sparkles size={15} />
            SMARTER RESUME MATCHING
          </div>

          <h1>
            Your resume,
            <br />
            <span>scored against</span>
            <br />
            every job.
          </h1>

          <p className="hero-description">
            Stop guessing if your resume is good enough.
            Discover your job fit score, identify missing skills,
            and make every application count.
          </p>

          <div className="hero-buttons">
            <a href="/signup" className="primary-btn">
              Get Started Free <ArrowRight size={18} />
            </a>
            <a href="#how-it-works" className="secondary-btn">
              Explore Features
            </a>
          </div>

          <div className="hero-trust">
            <span><Check size={16} /> Easy to use</span>
            <span><Check size={16} /> Actionable insights</span>
            <span><Check size={16} /> Career focused</span>
          </div>
        </div>

        {/* Sample Score Card */}
        <div className="hero-visual">
          <div className="score-card">
            <div className="score-header">
              <div>
                <span className="small-label">YOUR RESUME ANALYSIS</span>
                <h3>Job Match Overview</h3>
              </div>
              <span className="status-dot"></span>
            </div>

            <div className="score-main">
              <div className="score-circle">
                <div className="score-inner">
                  <strong>85%</strong>
                  <span>Match score</span>
                </div>
              </div>
              <div className="score-info">
                <span className="good-tag">Excellent Match</span>
                <h4>Frontend Developer</h4>
                <p>Your resume matches most of the job requirements.</p>
              </div>
            </div>

            <div className="score-divider"></div>

            <h4 className="skills-heading">Skills Overview</h4>

            <div className="skill-row">
              <span>JavaScript</span>
              <span className="skill-status"><Check size={14} /> Matched</span>
            </div>
            <div className="skill-row">
              <span>HTML & CSS</span>
              <span className="skill-status"><Check size={14} /> Matched</span>
            </div>
            <div className="skill-row">
              <span>React.js</span>
              <span className="missing-status">Missing</span>
            </div>

            <div className="suggestion-box">
              <Lightbulb size={19} />
              <div>
                <strong>Improvement tip</strong>
                <p>Consider adding React.js to your skill set.</p>
              </div>
            </div>
          </div>

          <div className="floating-badge">
            <TrendingUp size={19} />
            <div>
              <strong>Better Preparation</strong>
              <span>Know your skill gaps</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="features section" id="features">
        <div className="section-heading">
          <span className="section-label">WHAT WE OFFER</span>
          <h2>Everything you need to <span>stand out</span></h2>
          <p>Make smarter career decisions with useful resume insights.</p>
        </div>

        <div className="feature-grid">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div className="feature-card" key={index}>
                <div className="feature-icon">
                  <Icon size={25} />
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
                <a href="/signup">
                  Learn more <ArrowRight size={15} />
                </a>
              </div>
            );
          })}
        </div>
      </section>

      {/* How it works */}
      <section className="how-section section" id="how-it-works">
        <div className="section-heading">
          <span className="section-label">SIMPLE PROCESS</span>
          <h2>How <span>CareerFit</span> works</h2>
          <p>Three simple steps to understand your job readiness.</p>
        </div>

        <div className="steps-grid">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div className="step-card" key={index}>
                <div className="step-top">
                  <span>{step.number}</span>
                  <Icon size={25} />
                </div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section" id="about">
        <div>
          <span className="section-label">YOUR NEXT CAREER MOVE</span>
          <h2>Ready to make your resume job-ready?</h2>
          <p>Start understanding your strengths and improve your job applications.</p>
          <a href="/signup" className="primary-btn">
            Create Free Account <ArrowRight size={18} />
          </a>
        </div>
        <div className="cta-icon">
          <FileText size={75} />
          <ShieldCheck size={35} />
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <a href="#home" className="logo">
          <span className="logo-icon">
            <BriefcaseBusiness size={20} />
          </span>
          CareerFit
        </a>

        <p>Make every application count.</p>

        <span>© 2026 CareerFit. All rights reserved.</span>
      </footer>

    </div>
  );
}

export default App;
=======

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
>>>>>>> eaf2ca42af5bbc7a5ae2ec65631e0b610f4e1856
