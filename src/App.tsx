import { About } from "./components/About";
import { AICreatives } from "./components/AICreatives";
import { BeyondWork } from "./components/BeyondWork";
import { CaseStudies } from "./components/CaseStudies";
import { Contact } from "./components/Contact";
import { Education } from "./components/Education";
import { Gallery } from "./components/Gallery";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { PreloadSplash } from "./components/PreloadSplash";
import { ScrollJourney } from "./components/ScrollJourney";
import { Skills } from "./components/Skills";
import { StatsWall } from "./components/StatsWall";
import { Testimonials } from "./components/Testimonials";
import { LightboxProvider } from "./context/LightboxContext";

function App() {
  return (
    <PreloadSplash>
      <LightboxProvider>
        <div className="min-h-screen bg-canvas text-ink">
          <Navbar />
          <main className="flow-root">
            <Hero />
            <About />
            <ScrollJourney />
            <CaseStudies />
            <AICreatives />
            <StatsWall />
            <Skills />
            <Gallery />
            <Testimonials />
            <Education />
            <BeyondWork />
            <Contact />
          </main>
          <footer className="bg-ink py-6 text-center text-[10px] tracking-[0.2em] text-white/30 uppercase">
            Pavan Thakkar · {new Date().getFullYear()}
          </footer>
        </div>
      </LightboxProvider>
    </PreloadSplash>
  );
}

export default App;