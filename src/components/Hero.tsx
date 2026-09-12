function Hero() {
  return (
    <section className="hero">

      <div className="hero-content">

        <p className="hero-label">
          HELLO, I'M
        </p>

        <h1>
          Molli Akhil
          <span>Kumar.</span>
        </h1>

        <h2>
          Computer Science Student & Developer
        </h2>

        <p className="hero-description">
          I enjoy building practical digital solutions, exploring
          modern technologies, and turning ideas into useful
          real-world applications.
        </p>

<div className="hero-status">
  <span className="status-dot"></span>
  OPEN TO INTERNSHIPS & OPPORTUNITIES
</div>
    
        <div className="hero-buttons">

  <a href="#projects" className="primary-button">
    View My Work →
  </a>

  <a href="#contact" className="secondary-button">
    Get In Touch
  </a>

  <a
    href="/resume/Molli-Akhil-Kumar-Resume.pdf"
    download
    className="secondary-button"
  >
    Download Resume ↓
  </a>

</div>

      </div>

      <div className="hero-glow"></div>

    </section>
  )
}

export default Hero