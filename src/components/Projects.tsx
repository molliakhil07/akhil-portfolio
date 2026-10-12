
const projects = [
  {
    number: "01",
    title: "Chatter Box",
    category: "Personal Messaging Application",
    description:
      "A full-stack personal messaging application built with real-time communication. Includes user authentication, email verification, password reset, messaging, reply interactions, and message management.",
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Prisma",
      "Socket.IO",
    ],
    live: "https://molli-portfolio.vercel.app/",
    github: "https://github.com/molliakhil07/chatter-box",
  },
  {
    number: "02",
    title: "Kalavani",
    category: "E-Commerce Website",
    description:
      "A modern e-commerce website for a traditional Kanchipuram silk saree business, featuring product browsing, product details, cart functionality and WhatsApp ordering.",
    technologies: ["React", "TypeScript", "CSS", "Vite"],
    live: "https://kalvani.vercel.app/",
    github: "https://github.com/molliakhil07/kalavani",
  },
  {
    number: "03",
    title: "ScanKart",
    category: "Mobile Application",
    description:
      "A smart supermarket checkout application designed to reduce traditional checkout queues through barcode scanning, product information retrieval and digital payments.",
    technologies: ["Mobile App", "Barcode", "Database", "UPI"],
    live: "",
    github: "https://github.com/molliakhil07/ScanKart",
  },
]

function Projects() {
  return (
    <section id="projects" className="section projects-section">
      <div className="section-container">
        <div className="section-heading">
          <span>03</span>
          <h2>Projects</h2>
        </div>

        <div className="projects-list">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <div className="project-top">
                <span className="project-number">
                  {project.number}
                </span>

                <span className="project-category">
                  {project.category}
                </span>
              </div>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="project-tech">
                {project.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>

              <div className="project-links">
                {project.live && (
                  <a
                    href={project.live}
                    className="project-button"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo →
                  </a>
                )}

                <a
                  href={project.github}
                  className="project-button secondary-project-button"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
