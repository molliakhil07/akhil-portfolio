const education = [
  {
    year: "2024 — Present",
    degree: "Bachelor of Technology",
    institution: "Vignan Institute of Technology and Science",
    details: "Computer Science & Engineering",
  },
  {
    year: "2022 - 2024",
    degree: "Intermediate",
    institution: "SR Junior College",
    details: "Mathematics, Physics & Chemistry",
  },
  {
    year: "2010 - 2022",
    degree: "Schooling",
    institution: "Kamala Rani Sanghi School",
    details: "Class X, CBSE",
  },
]

function Education() {
  return (
    <section id="education" className="section education-section">
      <div className="section-container">

        <div className="section-heading">
          <span>04</span>
          <h2>Education</h2>
        </div>

        <div className="education-list">

          {education.map((item) => (
            <div className="education-item" key={item.degree}>

              <div className="education-year">
                {item.year}
              </div>

              <div className="education-details">
                <h3>{item.degree}</h3>
                <h4>{item.institution}</h4>
                <p>{item.details}</p>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  )
}

export default Education