/* eslint-disable react/no-unescaped-entities */
import Navbar from "./pages/Navbar.tsx";
import Home from "./pages/Home.tsx";
import About from "./pages/About.tsx";
import Projects from "./pages/Projects.tsx";
import Contacts from "./pages/Contacts.tsx";
import Footer from "./pages/Footer.tsx";
import Skills from "./pages/Skills.tsx";
import BackgroundCircles from "./components/BackgroundCircles";

const App = () => {
  return (
    <div className="w-full">

      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Rubik:wght@500&display=swap');
      </style>
      
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
            <BackgroundCircles />
    </div>
  );
};

export default App;
