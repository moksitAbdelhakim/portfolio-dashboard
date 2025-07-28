import Navbar from './components/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Projects from './components/Projects';

export function App() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="w-full md:px-36 lg:px-40 px-6 py-5">
        <main className="w-full ">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
      </div>
    </div>
  );
}

export default App;
