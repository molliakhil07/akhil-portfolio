function About() {
  return (
    <section id="about" className="section"><div className="section-container">
      <div className="section-heading"><div><span className="section-index">01 / INTRODUCTION</span><h2>About me</h2></div><p className="section-aside">A little context, a lot of curiosity.</p></div>
      <div className="about-grid">
        <article className="surface-card about-statement-card"><span className="card-kicker">THE MINDSET</span><h3>Curious mind.<br /><span>Constant builder.</span></h3><div className="statement-mark" aria-hidden="true">“</div></article>
        <article className="surface-card about-copy-card"><span className="card-kicker">WHO I AM</span><p>I'm Molli Akhil Kumar, a Computer Science student passionate about software development and technology.</p><p>I enjoy creating applications and websites that solve practical problems. I believe the best way to learn technology is by building real projects and experimenting with new ideas.</p><p>Currently, I'm focused on improving my programming, web development and problem-solving skills while building projects that can make a real-world impact.</p></article>
        <div className="about-detail-card surface-card"><span className="detail-label">APPROACH</span><strong>Learn → Build → Improve</strong></div>
        <div className="about-detail-card surface-card"><span className="detail-label">INTEREST</span><strong>Web Development</strong><span className="detail-note">Technology with a purpose.</span></div>
      </div>
    </div></section>
  )
}
export default About
