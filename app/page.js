"use client";

import { useState } from "react";

const experience = [
  {
    role: "AI Product Engineer",
    org: "Sebit, Hong Kong",
    time: "Summer 2026 · Present",
    summary: "Developing software.",
  },
  {
    role: "Research Assistant",
    org: "The Chinese University of Hong Kong",
    time: "May 2026 - Present",
    summary: "Working in physics department on CNN for gravitational lensing.",
  },
  {
    role: "AI Engineering Intern",
    org: "Nebula Group Limited · Hong Kong, Hong Kong SAR",
    time: "Feb 2026 - May 2026",
    summary:
      "Supported development and evaluation of AI-assisted educational tools and content pipelines using Python, prompt design, and structured technical workflows.",
  },
  {
    role: "Research Intern",
    org: "PGxAI",
    time: "Jun 2025 - Aug 2025",
    summary:
      "Contributed to research on an agentic AI system for automated pharmacogenomic recommendation generation.",
  },
  {
    role: "Founder",
    org: "OnStudy",
    time: "Jul 2022 - Jul 2025",
    summary:
      "Founded and led an education venture, managing operations, content, and an AI-based mentoring feature.",
  },
  {
    role: "Part of the main team",
    org: "Kyrgyz Space Program",
    time: "Aug 2022 - Jan 2025",
    summary:
      "Core member of an all-girls team working on launching Kyrgyzstan's first satellite, CubeSat.",
  },
];

const projects = [
  {
    title: "Th229-ScanBench",
    meta: "Sole Author · Invited to the Physics & AI conference at Stanford",
    body: "A public ML benchmark for weak-signal detection in sparse, heteroscedastic time series. Built the first public benchmark for signal detection in the nuclear clock Th229 time series.",
  },
  {
    title: "LensFusion",
    meta: "Research Assistant · Manuscript targeted at Nature Astronomy",
    body: "Developing a PyTorch CNN regressor that predicts the Einstein radius directly from lensed galaxy images and integrating it into the LensFusion diffusion posterior sampler.",
  },
  {
    title: "ML Toolkit Lab",
    meta: "Independent Research Project",
    body: "A modular PyTorch training toolkit with reusable components for data loading, training loops, evaluation, and logging.",
  },
  {
    title: "Asteroid Orbit Determination",
    meta: "Summer Science Program in Astrophysics",
    body: "Computed orbital determination through Gauss's Method and iterative numerical techniques for solving orbital mechanics problems.",
  },
  {
    title: "ENT Variability Lab",
    meta: "Independent project",
    body: "Exploratory unsupervised analysis of astronomical light curve variability.",
  },
  {
    title: "NASA Space Apps Challenge 2024",
    meta: "Global Nominee · Top 6% of 15,000+ teams worldwide",
    body: "Built a platform visualizing the correlation between climate vulnerability and gender inequality across 198 countries over 25+ years.",
  },
];

const skills = [
  "Python",
  "C",
  "basic C++",
  "Bash",
  "PyTorch",
  "Transformers",
  "CNNs",
  "supervised & unsupervised learning",
  "simulation-based inference",
  "neural density estimation",
  "anomaly detection",
  "model training & evaluation",
  "NumPy",
  "Pandas",
  "Matplotlib",
  "scikit-learn",
  "sbi",
  "nflows",
  "prompt design",
  "AI-assisted workflows",
  "structured output formatting",
  "model output evaluation",
  "preprocessing",
  "feature extraction",
  "visualization",
  "scientific time-series analysis",
  "Git",
  "Linux/Bash",
  "LaTeX",
  "Jupyter",
  "Azure",
  "Cursor",
  "Claude Code",
  "Codex",
  "OpenClaw",
];

const photos = [
  {
    src: "/gallery/space-screen.jpg",
    alt: "A space visualization on a large display",
    title: "Space systems",
    caption: "Curiosity, hardware, and scientific data in the same room.",
  },
  {
    src: "/gallery/team-portrait.jpg",
    alt: "Team portrait in matching shirts",
    title: "Team work",
    caption: "Building with people has shaped as much of my path as building with code.",
  },
  {
    src: "/gallery/engineering-workshop.jpg",
    alt: "Engineering workshop setup",
    title: "Engineering floor",
    caption: "The kind of place where math becomes wiring, testing, and iteration.",
  },
  {
    src: "/gallery/lab-robotics.jpg",
    alt: "Lab robotics setup",
    title: "Lab textures",
    caption: "Machines, measurement, and the quiet beauty of instruments.",
  },
  {
    src: "/gallery/outdoor-portrait.jpg",
    alt: "Outdoor portrait in a scenic setting",
    title: "Between things",
    caption: "A softer note between research, product work, and school.",
  },
];

const contactLinks = [
  { label: "Email", value: "nurkkyz@gmail.com", href: "mailto:nurkkyz@gmail.com" },
  { label: "GitHub", value: "github.com/nurkyzaz", href: "https://github.com/nurkyzaz" },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/nurkyzydyrysova",
    href: "https://linkedin.com/in/nurkyzydyrysova",
  },
];

function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {subtitle ? <p className="subtitle">{subtitle}</p> : null}
    </div>
  );
}

function PhotonMark() {
  return (
    <div className="photon-mark" aria-hidden="true">
      <div className="photon-ring" />
      <div className="photon-core">
        <span>γ</span>
      </div>
    </div>
  );
}

function ContactForm() {
  const [form, setForm] = useState({ name: "", contact: "", message: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const subject = encodeURIComponent(
      `Message from ${form.name.trim() || "someone who visited your site"}`
    );
    const body = encodeURIComponent(
      `Name: ${form.name || "n/a"}\nContact: ${form.contact || "n/a"}\n\n${form.message || ""}`
    );

    window.location.href = `mailto:nurkkyz@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <form className="contact-form panel" onSubmit={handleSubmit}>
      <div className="form-row">
        <label>
          <span>Your name</span>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your name"
          />
        </label>
        <label>
          <span>Email or social</span>
          <input
            name="contact"
            value={form.contact}
            onChange={handleChange}
            placeholder="Email, LinkedIn, or Instagram"
          />
        </label>
      </div>
      <label className="message-field">
        <span>Your message</span>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Leave a comment, question, or idea."
          rows={6}
        />
      </label>
      <button className="button button-primary form-button" type="submit">
        Send note
      </button>
    </form>
  );
}

export default function Page() {
  return (
    <main className="page-shell">
      <div className="stars" />

      <header className="topbar">
        <a className="brand" href="#top">
          <PhotonMark />
          <span>
            Nurkyz Ydyrysova <small>AI & Physics Undergraduate</small>
          </span>
        </a>
        <nav className="nav">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#research">Projects/Research</a>
          <a href="#photos">Photos</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <img
          className="hero-image"
          src="/gallery/hero-portrait.jpg"
          alt="Nurkyz Ydyrysova holding flowers"
        />
        <div className="hero-shade" />
        <div className="hero-copy">
          <p className="eyebrow">AI + Physics @ CUHK</p>
          <h1>Nurkyz Ydyrysova</h1>
          <p className="hero-text">
            AI Product Engineer in Hong Kong and undergraduate researcher in ML
            for scientific data.
          </p>
          <p className="hero-note">
            I build ML systems that connect physics and data. Right now I am
            curious about how information becomes laws, how data turns into
            inference, and how research ideas become working systems.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#contact">
              Contact
            </a>
            <a className="button button-secondary" href="#research">
              View Research
            </a>
          </div>
        </div>

        <div className="orbit-panel">
          <PhotonMark />
          <div className="hero-card-copy">
            <p className="card-label">Current orbit</p>
            <ul>
              <li>Summer 2026 · AI Product Engineer at Sebit</li>
              <li>AI + Physics @ CUHK</li>
              <li>Physics, ML, astrophysics, scientific data</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="content-section" id="about">
        <SectionTitle
          eyebrow="About"
          title="A little about me"
          subtitle="AI & Physics Undergraduate · CUHK | AI Engineer"
        />
        <div className="about-grid">
          <article className="panel">
            <p>
              I am an Undergraduate Researcher in ML for Scientific Data. I’m
              currently studying Minimum Description Length, information
              theory, and connections between compression, inference, and
              physics.
            </p>
            <p>
              I build benchmarks, write PyTorch code, and follow my curiosity.
              If you work on algorithmic information theory, MDL, quantum
              compression, or scientific ML, let’s talk.
            </p>
          </article>
          <article className="panel panel-accent">
            <p className="panel-label">Research themes</p>
            <ul className="simple-list">
              <li>weak-signal detection in physics time series</li>
              <li>pharmacogenomic AI</li>
              <li>orbit determination for near-Earth asteroid</li>
              <li>gravitational lensing</li>
              <li>scientific time-series analysis</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="content-section" id="experience">
        <SectionTitle
          eyebrow="Experience"
          title="Work and research"
          subtitle="A timeline of what I’ve been building, studying, and shipping."
        />
        <div className="timeline">
          {experience.map((item) => (
            <article className="timeline-item panel" key={`${item.role}-${item.org}`}>
              <div className="timeline-meta">
                <p className="timeline-role">{item.role}</p>
                <p className="timeline-org">{item.org}</p>
              </div>
              <p className="timeline-time">{item.time}</p>
              <p className="timeline-summary">{item.summary}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section" id="research">
        <SectionTitle
          eyebrow="Projects / Research"
          title="Selected work"
          subtitle="A mix of physics, ML, scientific computing, and research projects."
        />
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card panel" key={project.title}>
              <p className="project-meta">{project.meta}</p>
              <h3>{project.title}</h3>
              <p>{project.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section" id="photos">
        <SectionTitle
          eyebrow="Photos"
          title="A few moments"
          subtitle="A small visual thread through research spaces, teams, and the quieter in-between."
        />
        <div className="photo-grid">
          {photos.map((photo) => (
            <article className="photo-card panel" key={photo.src}>
              <img
                src={photo.src}
                alt={photo.alt}
                loading="eager"
                decoding="async"
                className="photo-image"
              />
              <div className="photo-caption">
                <h3>{photo.title}</h3>
                <p>{photo.caption}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section" id="skills">
        <SectionTitle
          eyebrow="Skills"
          title="Tools, methods, and systems"
          subtitle="What I use to build and research."
        />
        <div className="skill-cloud panel">
          {skills.map((skill) => (
            <span className="skill-pill" key={skill}>
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section className="content-section" id="contact">
        <SectionTitle
          eyebrow="Contact"
          title="Let’s talk"
          subtitle="Leave a comment and your contact info, and I’ll get back to you."
        />
        <div className="contact-layout">
          <ContactForm />
          <div className="contact-links">
            {contactLinks.map((item) => (
              <a
                className="contact-card panel"
                key={item.label}
                href={item.href}
                target={item.label === "Email" ? "_self" : "_blank"}
                rel="noreferrer"
              >
                <p className="project-meta">{item.label}</p>
                <h3>{item.value}</h3>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
