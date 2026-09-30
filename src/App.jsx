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
    <div className="w-full min-h-screen bg-[#050b18]">
      <Navbar />
      <main>
        <Home />
        <About />
        <Projects />
        <Skills />
        <Contacts />
      </main>
      <Footer />
    </div>
  );
};

export default App;
