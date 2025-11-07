import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white font-inter">
      <Header />
      <Hero />
      <main>
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
