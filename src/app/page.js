import Menu from "./Menu"
import Hero from "./components/Hero"
import About from "./components/About"
import Projects from "./components/Projects"
import Contact from "./components/Contact"



export default function Home() {
  return (
    <div className="kanit">
      <Menu />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  )
}
