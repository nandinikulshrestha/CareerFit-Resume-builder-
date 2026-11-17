
import { Link } from "react-router-dom";

import {
  ArrowRight,
  Upload,
  Target,
  ChartNoAxesColumnIncreasing,
  FileText,
  Menu
} from "lucide-react";

import "./Home.css";

function Home() {
  const existingSkills = [
    "Python",
    "FastAPI",
    "SQL",
    "REST APIs",
    "Git"
  ];

  const missingSkills = ["Docker", "Redis"];

  return (
    <div className="home-page">

      <nav className="navbar">
        <Link to="/" className="logo">
          <span className="logo-icon"></span>
          CareerFit
        </Link>

        <div className="nav-links">
          <a href="#how-it-works">How it works</a>
          <a href="#features">Features</a>
          <Link to="/login">Log in</Link>
          <Link to="/signup" className="nav-button">
            Get started
          </Link>
        </div>

        <Link to="/signup" className="mobile-menu">
          <Menu size={25} />
        </Link>
      </nav>

      <section className="hero-section">
        <div className="hero-content">

          <span className="hero-tag">
            AI-powered resume and job matching
          </span>

          <h1>
            Know how well
            <br />
            you fit the job
            <br />
            before you apply.
          </h1>

          <p>
            Upload your resume once. CareerFit reads your skills,
            scores you against every opening, and shows exactly
            what is missing for the roles you want.
          </p>

          <div className="hero-buttons">
            <Link to="/signup" className="primary-button">
              <Upload size={18} />
              Upload your resume
            </Link>

            <a href="#how-it-works" className="text-button">
              See how it works
              <ArrowRight size={17} />
            </a>
          </div>
        </div>

        <div className="sample-card">

          <div className="sample-top">
            <div>
              <span className="small-label">Sample result</span>
              <h3>Backend Developer</h3>
              <p>Northwind Labs · Bengaluru</p>
            </div>

            <div className="score">
              <strong>86%</strong>
              <span>fit score</span>
            </div>
          </div>

          <div className="progress-bar">
            <div className="progress-fill"></div>
          </div>

          <div className="skill-group">
            <h4>Skills you already have</h4>

            <div className="skill-list">
              {existingSkills.map((skill) => (
                <span className="skill-tag" key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="skill-group">
            <h4>Skills to add</h4>

            <div className="skill-list">
              {missingSkills.map((skill) => (
                <span className="missing-tag" key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </div>

        </div>
      </section>

      <section className="steps-section" id="how-it-works">
        <div className="section-container">
          <h2>Three steps from resume to shortlist</h2>

          <div className="steps-grid">

            <div className="step-card">
              <span className="step-number">01</span>
              <h3>Upload your resume</h3>
              <p>
                Drop in a PDF or DOCX. No forms to fill,
                no retyping your experience.
              </p>
            </div>

            <div className="step-card">
              <span className="step-number">02</span>
              <h3>AI reads your profile</h3>
              <p>
                CareerFit extracts your skills, projects and
                experience and compares them with each job description.
              </p>
            </div>

            <div className="step-card">
              <span className="step-number">03</span>
              <h3>Get ranked matches</h3>
              <p>
                See every opening ordered by fit score,
                with the reason behind each score.
              </p>
            </div>

          </div>
        </div>
      </section>

      <section className="features-section" id="features">
        <div className="section-container">

          <h2>Stop guessing which jobs are worth your time</h2>

          <p className="section-description">
            Every match comes with an explanation, so you know
            what to apply for today and what to learn next.
          </p>

          <div className="features-grid">

            <div className="feature-card">
              <Target className="feature-icon" size={27} />
              <h3>Fit score for every job</h3>
              <p>
                One clear percentage per opening, based on how
                your skills line up with what the role asks for.
              </p>
            </div>

            <div className="feature-card">
              <ChartNoAxesColumnIncreasing
                className="feature-icon"
                size={27}
              />
              <h3>Skill gap analysis</h3>
              <p>
                See which skills keep appearing in your target
                roles but are missing from your resume.
              </p>
            </div>

            <div className="feature-card">
              <FileText className="feature-icon" size={27} />
              <h3>Resume suggestions</h3>
              <p>
                Specific edits that would raise your score
                for a role, not generic resume advice.
              </p>
            </div>

          </div>
        </div>
      </section>

      <section className="cta-section">
        <h2>
          Find out where you
          <br />
          fit in under a minute
        </h2>

        <Link to="/signup" className="primary-button">
          Upload your resume
          <ArrowRight size={18} />
        </Link>
      </section>

      <footer className="footer">
        <span>CareerFit · B.Tech final-year major project</span>
        <span>Built for smarter career decisions</span>
      </footer>

    </div>
  );
}

export default Home;
