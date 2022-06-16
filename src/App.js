import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <div className="bg-black-pearl-900">
        <Navbar />
        <Home />
        <AboutMe />
        <Contact />
        <Skills />
      </div>
    </>
  );
}

export default App;
