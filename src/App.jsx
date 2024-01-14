import Navbar from "./pages/Navbar.tsx";
import Home from "./pages/Home.tsx";
import About from "./pages/About.tsx";
import Projects from "./pages/Projects.tsx";
import Contacts from "./pages/Contacts.tsx";
import Footer from "./pages/Footer.tsx";
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
