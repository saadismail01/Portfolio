/* eslint-disable react/no-unescaped-entities */
import Navbar from "./pages/Navbar.tsx";
import Home from "./pages/Home.tsx";
import About from "./pages/About.tsx";
import Projects from "./pages/Projects.tsx";
import Contacts from "./pages/Contacts.tsx";
import Footer from "./pages/Footer.tsx";

const App = () => {
  return (
    <div>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Rubik:wght@500&display=swap');
      </style>
      ;
      <div className="w-full h-full">
        <Navbar />
      </div>
      <div className="w-full h-full">
        <Home />
      </div>
      <div className="w-full h-full">
        <About />
      </div>
      <div className="w-full h-full">
        <Projects />
      </div>
      <div className="w-full h-full">
        <Contacts />
      </div>
      <div className="w-full h-full">
        <Footer />
      </div>
    </div>
  );
};

export default App;
