/* eslint-disable react/no-unescaped-entities */
import Navbar from "./pages/Navbar.tsx";
import Home from "./pages/Home.tsx";
import About from "./pages/About.tsx";
import Projects from "./pages/Projects.tsx";
import Contacts from "./pages/Contacts.tsx";
import Footer from "./pages/Footer.tsx";
import Skills from "./pages/Skills.tsx";

const App = () => {
  return (
    <div className="w-full">
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Rubik:wght@500&display=swap');
      </style>
      ;
      <div className="w-full h-full">
        <Navbar />
      </div>
      <div id="home" className="w-full h-full">
        <Home />
      </div>
      <div id="about" className="w-full h-full">
        <About />
      </div>
      <div id="project" className="w-full h-full">
        <Projects />
      </div>
      <div id="project" className="w-full h-full">
        <Skills />
      </div>
      <div id="contact" className="w-full h-full">
        <Contacts />
      </div>
      <div className="w-full h-full">
        <Footer />
      </div>
    </div>
  );
};

export default App;
