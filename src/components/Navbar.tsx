import { useState } from "react"
const links = [{ label: "About", href: "#about" }, { label: "Skills", href: "#skills" }, { label: "Projects", href: "#projects" }, { label: "Education", href: "#education" }, { label: "Contact", href: "#contact" }]
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)
  return <nav className="navbar" aria-label="Main navigation"><div className="navbar-container">
    <a href="#home" className="logo" aria-label="Molli Akhil Kumar, home">MAK<span>.</span></a>
    <div className="nav-links">{links.map((link) => <a key={link.href} href={link.href}>{link.label}</a>)}</div>
    <div className="navbar-actions"><a href="#contact" className="nav-button">Let's Talk <span aria-hidden="true">↗</span></a><button className="menu-button" type="button" onClick={() => setMenuOpen((open) => !open)} aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"} aria-expanded={menuOpen} aria-controls="mobile-navigation">{menuOpen ? "✕" : "☰"}</button></div>
  </div>{menuOpen && <div className="mobile-menu" id="mobile-navigation">{links.map((link) => <a key={link.href} href={link.href} onClick={closeMenu}>{link.label}<span aria-hidden="true">↗</span></a>)}<a href="#contact" onClick={closeMenu}>Let's Talk <span aria-hidden="true">↗</span></a></div>}</nav>
}
export default Navbar
