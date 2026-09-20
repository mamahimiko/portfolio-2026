import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import MotionSection from "./components/motionSection";
import Works from "./components/Works";

function App() {
  return (
    <div className="bg-bg-gray font-text">
      <main>
        <Hero />
        <MotionSection>
          <About />
        </MotionSection>
        <MotionSection>
          <Works />
        </MotionSection>
        <MotionSection>
          <Contact />
        </MotionSection>
      </main>
      <Footer />
    </div>
  );
}

export default App;
