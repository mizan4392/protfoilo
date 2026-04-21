import { BrowserRouter } from "react-router-dom";
import { About, Experience, Hero, Navbar, Tech, Works } from "./components";
import "./index.css";
import { ToastContainer } from "react-toastify";
import Education from "./components/Education";
import SocialLinks from "./components/SocialLinks";
import ContactSection from "./components/ContactSection";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center ">
          <Navbar />
          <Hero />
        </div>
        <About />

        <Experience />
        <Tech />
        <Works />
        <Education />
        {/* <Feedbacks /> */}
        <SocialLinks />
        <div className="relative z-0">
          {/* <Contact />
          <StarsCanvas /> */}
          <ContactSection />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
