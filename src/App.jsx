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
            <div>
              <Navbar />
            </div>
            <div id="home">
              <Home />
            </div>
            <div id="about">
              <About />
            </div>
            <div id="project">
              <Projects />
            </div>
            <div id="skills">
              <Skills />
            </div>
            <div id="contact">
              <Contacts />
            </div>
            <div>
              <Footer />
            </div>

      <div className="inset-0 -z-10 overflow-hidden sm:overflow-hidden">
        <div className="absolute w-[500px] h-[500px] bg-teal-800 rounded-full blur-2xl opacity-10 bottom-10 left-1/4 animate-pulse-light">      <Home /></div>
      <div className="absolute w-[900px] h-[700px] bg-purple-900 rounded-full blur-3xl opacity-10 bottom-20  left-1/4 animate-pulse-light">      <Home /></div>
    
      </div>
    </div>
  );
};

export default App;
