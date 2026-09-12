function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <div className="section-container">

        <div className="section-heading">
          <span>05</span>
          <h2>Contact</h2>
        </div>

        <div className="contact-content">

          <div className="contact-intro">
            <p className="contact-label">
              HAVE A PROJECT IN MIND?
            </p>

            <h3>
              Let's build something
              <span> together.</span>
            </h3>

            <p className="contact-description">
              I'm always interested in learning, building new projects
              and connecting with people who are passionate about technology.
            </p>
          </div>

          <div className="contact-links">

            <a href="mailto:molliakhil07@gmail.com">
              <span>Email</span>
              <strong>Connect via Email →</strong>
            </a>

            <a
              href="https://github.com/molliakhil07"
              target="_blank"
              rel="noreferrer"
            >
              <span>GitHub</span>
              <strong>View my GitHub →</strong>
            </a>

            <a
              href="https://www.linkedin.com/in/molli-akhil-kumar-088579364/"
              target="_blank"
              rel="noreferrer"
            >
              <span>LinkedIn</span>
              <strong>Connect with me →</strong>
            </a>

          </div>

        </div>

      </div>
    </section>
  )
}

export default Contact