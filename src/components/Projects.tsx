const projects = [
  {
    number: "01",
    title: "Chatter Box",
    category: "Personal Messaging Application",
    description:
      "A full-stack personal messaging application built with real-time communication. Includes user authentication, email verification, password reset, messaging, reply interactions, and message management.",
    technologies: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "Prisma", "Socket.IO"],
    live: "https://molli-portfolio.vercel.app/",
    github: "https://github.com/molliakhil07/chatter-box",
    label: "FULL-STACK",
  },
  {
    number: "02",
    title: "Kalvani",
    category: "E-Commerce Website",
    description:
      "A modern e-commerce website for a traditional Kanchipuram silk saree business, featuring product browsing, product details, cart functionality and WhatsApp ordering.",
    technologies: ["React", "TypeScript", "CSS", "Vite", "Supabase"],
    live: "https://kalvani.vercel.app/",
    github: "https://github.com/molliakhil07/kalavani",
    label: "WEB",
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
    label: "MOBILE",
  },
];

function Projects() {
  return (
    <section id="projects" className="section">
      <div className="section-container">
        <div className="section-heading">
          <div>
            <span className="section-index">03 / SELECTED WORK</span>
            <h2>Projects</h2>
          </div>
          <p className="section-aside">
            A selection of things I've designed, built, and learned from.
          </p>
        </div>

        <div className="projects-grid projects-simple-grid">
          {projects.map((project) => (
            <article className="surface-card project-card project-simple-card" key={project.number}>
              <div className="project-card-top">
                <span className="project-number">{project.number}</span>
                <span className="project-type">{project.label}</span>
              </div>

              <div className="project-card-content">
                <span className="card-kicker">{project.category}</span>
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
                      className="button button-primary project-button"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live demo <span aria-hidden="true">↗</span>
                    </a>
                  )}
                  <a
                    href={project.github}
                    className="button button-secondary project-button"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
