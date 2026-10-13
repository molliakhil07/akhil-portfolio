import "./App.css"
import CustomCursor from "./components/CustomCursor"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Education from "./components/Education"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
function App() {
  return <><Navbar /><CustomCursor /><main><Hero /><About /><Skills /><Projects /><Education /><Contact /></main><Footer /></>
}
export default App
