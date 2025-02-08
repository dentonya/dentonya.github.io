import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Home from "./components/Home";
import { NavBar } from "./components/NavBar";
import Projects from "./components/Projects";
import Articles from "./components/Articles";

function App() {
  return (
      <div className="w-full min-h-screen overflow-x-hidden">
      <NavBar />
      <Home />
      <About />
      <Experience />
      <Projects />
      <Articles />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
