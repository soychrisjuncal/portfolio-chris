import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { Parallax } from 'react-scroll-parallax';

const Hero = () => {
  return (
<section id="home" className="min-h-screen flex items-center justify-center relative pt-32 md:pt-20 overflow-hidden bg-white/90 md:bg-transparent dark:bg-slate-900/60 md:dark:bg-transparent">
      <div className="container mx-auto px-6 lg:px-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          
          <div className="text-center lg:text-left space-y-4 lg:pl-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 dark:text-white leading-tight">
  Hola, soy{' '}
  <span className="bg-gradient-to-r from-cyan-500 to-pink-500 bg-clip-text text-transparent whitespace-nowrap">
    Christian Juncal
  </span>
</h1>

<p className="text-lg md:text-xl lg:text-2xl text-cyan-600 dark:text-cyan-400 font-medium">
  Front-End Developer & Digital Designer
</p>

<p className="text-base md:text-lg lg:text-xl text-pink-600 dark:text-pink-400 font-medium">
  Ejecutivo Comercial | Estrategias Digitales
</p>

<p className="text-slate-500 dark:text-slate-300 text-base md:text-lg max-w-lg mx-auto lg:mx-0">
  Profesional híbrido especializado en <strong className="text-slate-900 dark:text-white">React, WordPress y E-commerce</strong>. 
  Combino desarrollo técnico con estrategias comerciales para crear experiencias digitales 
  que <strong className="text-cyan-600 dark:text-cyan-400">impulsan ventas</strong> y optimizan conversiones.
</p>

          <div className="flex flex-wrap gap-3 justify-center lg:justify-start pt-4">
  <a
    href="#projects"
    className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-pink-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 text-sm md:text-base"
  >
    Ver Proyectos
  </a>
   <a
    href="#contact"
    className="px-6 py-3 bg-transparent border-2 border-cyan-400 text-cyan-600 dark:text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-slate-900 dark:hover:text-slate-900 hover:border-cyan-400 transition-all duration-300 text-sm md:text-base"
  >
    Contactar
  </a>
</div>

<div className="flex gap-3 justify-center lg:justify-start pt-4">
   <a
    href="https://github.com/soychrisjuncal"
    target="_blank"
    rel="noopener noreferrer"
    className="p-3 bg-slate-200 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg text-slate-700 dark:text-white hover:border-cyan-400 hover:bg-cyan-400 hover:text-white dark:hover:text-white transition-all duration-300"
    aria-label="GitHub"
  >
    <FiGithub size={20} />
  </a>
   <a
    href="https://linkedin.com/in/soychrisjuncal"
    target="_blank"
    rel="noopener noreferrer"
    className="p-3 bg-slate-200 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg text-slate-700 dark:text-white hover:border-cyan-400 hover:bg-cyan-400 hover:text-white dark:hover:text-white transition-all duration-300"
    aria-label="LinkedIn"
  >
    <FiLinkedin size={20} />
  </a>
   <a
    href="mailto:juncalcf@gmail.com"
    className="p-3 bg-slate-200 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg text-slate-700 dark:text-white hover:border-cyan-400 hover:bg-cyan-400 hover:text-white dark:hover:text-white transition-all duration-300"
    aria-label="Email"
  >
    <FiMail size={20} />
  </a>
</div>
          </div>

          <Parallax speed={-5}>
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-cyan-400 shadow-2xl shadow-cyan-400/30">
                  <img
                    src="https://avatars.githubusercontent.com/soychrisjuncal"
                    alt="Christian Juncal"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Geometrías decorativas alrededor de la foto */}
                <div className="absolute -top-4 -right-4 w-20 h-20 border-2 border-pink-400 rounded-lg rotate-12 animate-spin-slow opacity-50"></div>
                <div className="absolute -bottom-6 -left-6 w-16 h-16 border-2 border-cyan-400 rotate-45 animate-pulse opacity-50"></div>
              </div>
            </div>
          </Parallax>
        </div>
      </div>
    </section>
  );
};

export default Hero;