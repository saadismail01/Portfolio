import Navbar from "./components/Navbar.tsx";
import Home from "./components/Home.tsx";
import About from "./components/About.tsx";
import Projects from "./components/Projects.tsx";
import Contacts from "./components/Contacts.tsx";
import Footer from "./components/Footer.tsx";
const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contacts />
      <Footer />
    </div>
  );
};

export default App;
