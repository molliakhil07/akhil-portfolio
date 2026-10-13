const education = [
  { year: "2024 — Present", degree: "Bachelor of Technology", institution: "Vignan Institute of Technology and Science", details: "Computer Science & Engineering", number: "01" },
  { year: "2022 — 2024", degree: "Intermediate", institution: "SR Junior College", details: "Mathematics, Physics & Chemistry", number: "02" },
  { year: "2010 — 2022", degree: "Schooling", institution: "Kamala Rani Sanghi School", details: "Class X, CBSE", number: "03" },
]
function Education() {
  return (
    <section id="education" className="section"><div className="section-container">
      <div className="section-heading"><div><span className="section-index">04 / BACKGROUND</span><h2>Education</h2></div><p className="section-aside">The learning journey so far.</p></div>
      <div className="education-grid">{education.map((item) => <article className="surface-card education-card" key={item.number}>
        <div className="education-card-top"><span className="card-kicker">EDUCATION / {item.number}</span><span className="education-arrow" aria-hidden="true">↗</span></div>
        <span className="education-year">{item.year}</span><h3>{item.degree}</h3><h4>{item.institution}</h4><p>{item.details}</p>
      </article>)}</div>
    </div></section>
  )
}
export default Education
