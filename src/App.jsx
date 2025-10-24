import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Background3D from './components/Background3D'
import AnimatedSection from './components/AnimatedSection'
import './App.css'

function App() {
  return (
    <>
      {/* Fondo 3D animado SIEMPRE VISIBLE */}
      <Background3D />
      
      {/* Contenido por encima */}
      <div className="relative z-10 min-h-screen">
        <Header />
        
        <AnimatedSection>
          <Hero />
        </AnimatedSection>
        
        <AnimatedSection>
          <About />
        </AnimatedSection>
        
        <AnimatedSection>
          <Skills />
        </AnimatedSection>
        
        <AnimatedSection>
          <Projects />
        </AnimatedSection>
        
        <AnimatedSection>
          <Contact />
        </AnimatedSection>
        
        <Footer />
      </div>
    </>
  )
}

export default App