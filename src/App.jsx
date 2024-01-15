import Navbar from "./pages/Navbar.tsx";
import Home from "./pages/Home.tsx";
import About from "./pages/About.tsx";
import Projects from "./pages/Projects.tsx";
import Contacts from "./pages/Contacts.tsx";
import Footer from "./pages/Footer.tsx";
const App = () => {
  return (
    <div>
      <div className="w-full h-16">
        <Navbar />
      </div>
      <div className="w-[100%] h-[100%]"></div>
      <Home />
      <About />
      <Projects />
      <Contacts />
      <Footer />
    </div>
  );
};

export default App;
