import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import MotionSection from "./components/motionSection";
import MarqueeText from "./components/MarqueeText";
import Works from "./components/Works";

function App() {
  return (
    <div className="bg-bg-gray ">
      <main>
        <Hero />
        <MarqueeText />
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
