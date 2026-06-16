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

const contact = [
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

export default function Page() {
  return (
    <main className="page-shell">
      <div className="background-orb background-orb-a" />
      <div className="background-orb background-orb-b" />
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
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">AI + Physics @ CUHK</p>
          <h1>
            AI Product Engineer in Hong Kong.
            <span> Undergrad Researcher in Physics for ML.</span>
          </h1>
          <p className="hero-text">
            I build ML systems that connect physics and data.
          </p>
          <p className="hero-note">
            "I'm a first-year undergrad exploring different domains to find my
            true passion in science." "Rn I'm most interested in this question:
            How do we compress information into laws and extract laws from
            information?"
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

        <div className="hero-card">
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
          title="A simple portrait from the words in my files"
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
              I build benchmarks, write PyTorch code, and just follow my
              curiosity. If you work on algorithmic information theory, MDL,
              quantum compression, or scientific ML, let's talk.
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
          subtitle="A timeline built from the CV, with the Sebit update added for summer 2026."
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
          subtitle="Titles and phrasing are taken directly from your portfolio and CV wherever possible."
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

      <section className="content-section" id="skills">
        <SectionTitle
          eyebrow="Skills"
          title="Tools, methods, and systems"
          subtitle="Pulled from the CV and portfolio."
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
          subtitle="If you work on scientific ML, compression, astrophysics, or AI systems."
        />
        <div className="contact-grid">
          {contact.map((item) => (
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
      </section>
    </main>
  );
}
