function Hero() {
  return (
    <section className="hero section-container" id="home">
      <div className="hero-grid">
        <div className="hero-card hero-main-card">
          <div className="card-eyebrow"><span className="eyebrow-line" />HELLO, I'M</div>
          <h1 className="hero-name" aria-label="Molli Akhil Kumar">
            <span className="hero-name-line" aria-hidden="true">Molli Akhil</span>
            <span className="hero-name-line hero-name-last" aria-hidden="true">Kumar<span className="name-period">.</span></span>
          </h1>
          <h2>Computer Science Student <span>&amp;</span> Developer</h2>
          <p className="hero-description">I enjoy building practical digital solutions, exploring modern technologies, and turning ideas into useful real-world applications.</p>
          <div className="hero-status"><span className="status-dot" />OPEN TO INTERNSHIPS &amp; OPPORTUNITIES</div>
          <div className="hero-buttons">
            <a href="#projects" className="button button-primary">Explore my work <span aria-hidden="true">↗</span></a>
            <a href="#contact" className="button button-secondary">Get in touch</a>
            <a href="/resume/Molli-Akhil-Kumar-Resume.pdf" download className="button button-quiet">Resume <span aria-hidden="true">↓</span></a>
          </div>
          <span className="hero-card-index">PORTFOLIO / 2026</span>
        </div>
        <aside className="hero-side-grid">
          <div className="hero-card hero-note-card">
            <div className="card-topline"><span className="card-kicker">A LITTLE ABOUT ME</span><span className="card-symbol" aria-hidden="true">✳</span></div>
            <p className="hero-note">Curious by nature.<br /><span>Building by practice.</span></p>
            <a className="card-link" href="#about">Get to know me <span aria-hidden="true">↗</span></a>
          </div>
          <div className="hero-card hero-focus-card">
            <div className="card-topline"><span className="card-kicker">CURRENT FOCUS</span><span className="focus-dot" /></div>
            <h3>Full-stack development</h3>
            <p>Learning through real projects, practical problem-solving, and continuous experimentation.</p>
            <div className="focus-tags"><span>Frontend</span><span>Backend</span><span>Problem solving</span></div>
          </div>
          <a href="#projects" className="hero-card hero-project-teaser"><span className="card-kicker">SELECTED WORK</span><span className="teaser-title">Ideas into<br />applications.</span><span className="teaser-arrow" aria-hidden="true">↗</span></a>
        </aside>
      </div>
    </section>
  )
}
export default Hero
