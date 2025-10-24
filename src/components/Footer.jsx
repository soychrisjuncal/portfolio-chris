import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
 

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 dark:bg-slate-950 border-t border-slate-800 py-12">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          
          {/* Columna 1: Info */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <img 
               src="/vite.svg"
  alt="Chris Juncal Logo" 
                className="w-10 h-10"
              />
              <div>
                <h3 className="text-xl font-bold text-white">Chris Juncal</h3>
                <p className="text-cyan-400 text-sm font-medium">Front-End Developer & Digital Designer</p>
                <p className="text-pink-400 text-xs font-medium">Ejecutivo Comercial | Estrategias Digitales</p>
              </div>
            </div>
            <p className="text-slate-400 text-sm">
              Creando experiencias digitales que impulsan negocios y optimizan conversiones.
            </p>
          </div>

          {/* Columna 2: Links rápidos */}
          <div>
            <h4 className="text-white font-semibold mb-4">Navegación</h4>
            <nav className="flex flex-col gap-2">
              <a href="#home" className="text-slate-400 hover:text-cyan-400 transition-colors duration-300 text-sm">Inicio</a>
              <a href="#about" className="text-slate-400 hover:text-cyan-400 transition-colors duration-300 text-sm">Sobre mí</a>
              <a href="#skills" className="text-slate-400 hover:text-cyan-400 transition-colors duration-300 text-sm">Skills</a>
              <a href="#projects" className="text-slate-400 hover:text-cyan-400 transition-colors duration-300 text-sm">Proyectos</a>
              <a href="#contact" className="text-slate-400 hover:text-cyan-400 transition-colors duration-300 text-sm">Contacto</a>
            </nav>
          </div>

          {/* Columna 3: Contacto y Redes */}
          <div>
            <h4 className="text-white font-semibold mb-4">Conectemos</h4>
            <div className="space-y-3 mb-4">
              <a 
                href="mailto:juncalcf@gmail.com" 
                className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors duration-300 text-sm"
              >
                <FiMail size={16} />
                juncalcf@gmail.com
              </a>
              <a 
                href="https://wa.me/5491130540430" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-400 hover:text-green-400 transition-colors duration-300 text-sm"
              >
                <FaWhatsapp size={16} />
                +54 11 3054 0430
              </a>
            </div>
            <div className="flex gap-3">
              <a
                href="https://github.com/soychrisjuncal"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-slate-800 border border-slate-700 rounded-lg hover:border-cyan-400 hover:bg-cyan-400 hover:text-white transition-all duration-300"
                aria-label="GitHub"
              >
                <FiGithub size={18} />
              </a>
               <a
                href="https://linkedin.com/in/soychrisjuncal"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-slate-800 border border-slate-700 rounded-lg hover:border-cyan-400 hover:bg-cyan-400 hover:text-white transition-all duration-300"
                aria-label="LinkedIn"
              >
                <FiLinkedin size={18} />
              </a>
               <a
                href="mailto:juncalcf@gmail.com"
                className="p-2 bg-slate-800 border border-slate-700 rounded-lg hover:border-cyan-400 hover:bg-cyan-400 hover:text-white transition-all duration-300"
                aria-label="Email"
              >
                <FiMail size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm text-center md:text-left">
            © {currentYear} Chris Juncal. Todos los derechos reservados.
          </p>
          <p className="text-slate-500 text-sm flex items-center gap-1">
            Hecho con <FiHeart className="text-pink-500 animate-pulse" size={14} /> en Buenos Aires
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;