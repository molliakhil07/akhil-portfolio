const skillGroups = [
  {
    title: "Languages",
    skills: ["Python", "Java", "JavaScript", "TypeScript"],
  },
  {
    title: "Web",
    skills: ["HTML", "CSS", "React", "Vite"],
  },
  {
    title: "Tools & Database",
    skills: ["Git", "GitHub", "SQL", "REST APIs"],
  },
]

function Skills() {
  return (
    <section id="skills" className="section skills-section">
      <div className="section-container">

        <div className="section-heading">
          <span>02</span>
          <h2>Skills</h2>
        </div>

        <div className="skills-content">

          <div className="skills-intro">
            <h3>
              Technologies I use to
              <span> build.</span>
            </h3>

            <p>
              Technologies and tools I've worked with through
              coursework, projects and hands-on experimentation.
            </p>
          </div>

          <div className="skill-groups">

            {skillGroups.map((group) => (
              <div className="skill-group" key={group.title}>

                <h4>{group.title}</h4>

                <div className="skills-grid">
                  {group.skills.map((skill) => (
                    <div className="skill-card" key={skill}>
                      {skill}
                    </div>
                  ))}
                </div>

              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  )
}

export default Skills