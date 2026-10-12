import Navbar from "./pages/Navbar.tsx";
import Home from "./pages/Home.tsx";
import Experience from "./pages/Experience.tsx";
import Projects from "./pages/Projects.tsx";
import Skills from "./pages/Skills.tsx";
import Education from "./pages/Education.tsx";
import Contacts from "./pages/Contacts.tsx";
import Footer from "./pages/Footer.tsx";
import { useRevealOnScroll, useSpotlight } from "./effects.ts";

const App = () => {
  useRevealOnScroll();
  useSpotlight();

  return (
    <>
      <Navbar />
      <main id="main">
        <Home />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contacts />
      </main>
      <Footer />
    </>
  );
};

export default App;
