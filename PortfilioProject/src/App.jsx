import Contact from "./components/Contact"
import Experience from "./components/Experience"
import Footer from "./components/Footer"
import Main from "./components/Main"
import Projects from "./components/Projects"
import Sidenav from "./components/Sidenav"

function App() {

  return (
    <div>
      <Main />
      <Sidenav />
      <Experience/>
      <Projects />
      <Contact />
      <Footer/>
    </div>
  )
}

export default App
