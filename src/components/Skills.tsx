const skillGroups = [
  { number: "01", title: "Languages", note: "The foundations", skills: ["Python", "Java", "JavaScript", "TypeScript"] },
  { number: "02", title: "Frontend", note: "Interfaces & experience", skills: ["HTML", "CSS", "React", "Vite", "Responsive Design"] },
  { number: "03", title: "Backend", note: "APIs & communication", skills: ["Node.js", "Express", "REST APIs", "Socket.IO"] },
  { number: "04", title: "Data", note: "Storage & data access", skills: ["PostgreSQL", "SQL", "MongoDB", "Supabase", "Prisma ORM"] },
  { number: "05", title: "Tools", note: "Everyday workflow", skills: ["Git / GitHub", "VS Code", "Vercel", "Androidstudios"] },
]
function Skills() {
  return (
    <section id="skills" className="section"><div className="section-container">
      <div className="section-heading"><div><span className="section-index">02 / TOOLKIT</span><h2>Skills &amp; tools</h2></div><p className="section-aside">Technologies explored through coursework and hands-on projects.</p></div>
      <div className="skills-grid">
        {skillGroups.map((group) => <article className="surface-card skill-group-card" key={group.number}>
          <div className="skill-card-heading"><span className="card-kicker">{group.number} / CATEGORY</span><span className="skill-card-mark" aria-hidden="true">↗</span></div>
          <h3>{group.title}</h3><p className="skill-group-note">{group.note}</p>
          <div className="skill-tags">{group.skills.map((skill) => <span className="skill-tag" key={skill}>{skill}</span>)}</div>
        </article>)}
        <article className="surface-card skills-note-card"><span className="card-kicker">ALWAYS IN PROGRESS</span><p>Learning by building, debugging, and shipping real projects.</p><span className="skills-note-symbol" aria-hidden="true">+</span></article>
      </div>
    </div></section>
  )
}
export default Skills
