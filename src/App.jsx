import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Footer from './components/Footer';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-[#121212] text-white min-h-screen selection:bg-[#03DAC6]/30 selection:text-[#03DAC6] scroll-smooth">
      <Navbar />
      <main>
        <Hero />
        <TechStack />
        <Projects />
        <Experience />
        <Certifications />
        <Contact/>
      </main>
      <Footer />
    </div>
  );
}

export default App;