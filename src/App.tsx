import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './App.css';

// Components
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Timeline } from './components/Timeline';
import { Skills } from './components/Skills';
import { Certifications } from './components/Certifications';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // Animate section titles (Global animation for all h2)
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
      const title = section.querySelector('h2');
      if (title) {
        gsap.fromTo(title,
          { y: 30, opacity: 0 },
          {
            scrollTrigger: {
              trigger: section,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power3.out',
          }
        );
      }
    });

    // Refresh ScrollTrigger
    ScrollTrigger.refresh();
  }, []);

  return (
    <div className="App relative bg-[#0f172a] min-h-screen font-sans text-white selection:bg-indigo-500 selection:text-white overflow-x-hidden">
      <CustomCursor />
      <Header />
      <main>
        <Hero />
        <About />
        <Timeline />
        <Skills />
        <Certifications />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;