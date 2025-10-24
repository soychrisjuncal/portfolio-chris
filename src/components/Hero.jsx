import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const Hero = () => {
  return (
<section id="home" className="min-h-screen flex items-center justify-center relative pt-24 md:pt-20 overflow-hidden">
  {/* Video de fondo */}
  <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute top-0 left-0 w-full h-full object-cover opacity-30 dark:opacity-20"
    style={{ filter: 'blur(60px)' }}
  >
    <source src="/portfolio-chris/bg-gradient.mp4" type="video/mp4" />
  </video>
  
  {/* Overlay gradient */}
  <div className="absolute inset-0 bg-slate-50 dark:bg-slate-900 opacity-70 dark:opacity-70"></div>
  
  {/* Contenido - agregar z-10 relative */}
<div className="container mx-auto px-6 lg:px-16 relative z-10">
<div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto mt-8 lg:mt-0">
    
    <div className="text-center lg:text-left space-y-6 lg:pl-8">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white">
        Hola, soy{' '}
        <span className="bg-gradient-to-r from-cyan-500 to-pink-500 bg-clip-text text-transparent">
          Christian Juncal
        </span>
      </h1>

            <p className="text-xl md:text-2xl text-cyan-600 dark:text-cyan-400 font-medium mb-2">
              Front-End Developer & Digital Designer
            </p>

            <p className="text-lg md:text-xl text-pink-600 dark:text-pink-400 font-medium mb-6">
              Ejecutivo Comercial | Estrategias Digitales
            </p>

            <p className="text-slate-600 dark:text-slate-400 text-lg mb-6 max-w-xl mx-auto lg:mx-0">
              Profesional híbrido especializado en <strong className="text-slate-900 dark:text-white">React, WordPress y E-commerce</strong>. 
              Combino desarrollo técnico con estrategias comerciales para crear experiencias digitales 
              que <strong className="text-cyan-600 dark:text-cyan-400">impulsan ventas</strong> y optimizan conversiones.
            </p>

            <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-6">
              <a
                href="#projects"
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-pink-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 text-sm md:text-base"
              >
                Ver Proyectos
              </a>
                 <a
                href="#contact"
  className="px-6 py-3 bg-transparent border-2 border-cyan-400 text-cyan-600 dark:text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-slate-900 dark:hover:text-white transition-all duration-300 text-sm md:text-base"
>
  Contactar
</a>
            </div>

            <div className="flex gap-3 justify-center lg:justify-start">
                 <a
                href="https://github.com/soychrisjuncal"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-200 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300"
                aria-label="GitHub"
              >
                <FiGithub size={20} />
              </a>
                 <a
                href="https://linkedin.com/in/soychrisjuncal"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-200 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <FiLinkedin size={20} />
              </a>
                 <a
                href="mailto:juncalcf@gmail.com"
                className="p-3 bg-slate-200 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300"
                aria-label="Email"
              >
                <FiMail size={20} />
              </a>
            </div>
          </div>

          <div className="flex justify-center lg:justify-center">
            <div className="relative">
              <div className="w-100 h-100 md:w-100 md:h-100 lg:w-100 lg:h-100 rounded-full overflow-hidden border-4 border-cyan-400 shadow-2xl shadow-cyan-400/30">
                <img
                  src="https://avatars.githubusercontent.com/soychrisjuncal"
                  alt="Christian Juncal"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-neon-magenta/20 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-neon-cyan/20 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;