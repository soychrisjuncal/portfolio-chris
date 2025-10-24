import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 dark:bg-slate-950 py-12 border-t border-slate-800">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Info */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">Chris Juncal</h3>
            <p className="text-cyan-400 font-medium mb-4">Front-End Developer & Digital Designer</p>
            <p className="text-slate-400 text-sm">
              Creando experiencias digitales que impulsan negocios
            </p>
          </div>

          {/* Links rápidos */}
          <div>
            <h4 className="text-white font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-slate-400 hover:text-cyan-400 transition-colors duration-300">Inicio</a></li>
              <li><a href="#about" className="text-slate-400 hover:text-cyan-400 transition-colors duration-300">Sobre mí</a></li>
              <li><a href="#skills" className="text-slate-400 hover:text-cyan-400 transition-colors duration-300">Skills</a></li>
              <li><a href="#projects" className="text-slate-400 hover:text-cyan-400 transition-colors duration-300">Proyectos</a></li>
              <li><a href="#contact" className="text-slate-400 hover:text-cyan-400 transition-colors duration-300">Contacto</a></li>
            </ul>
          </div>

          {/* Redes sociales */}
          <div>
            <h4 className="text-white font-semibold mb-4">Sígueme</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com/soychrisjuncal"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-800 rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                aria-label="GitHub"
              >
                <FiGithub size={20} />
              </a>
                 <a
                href="https://linkedin.com/in/soychrisjuncal"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-800 rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <FiLinkedin size={20} />
              </a>
                 <a
                href="mailto:juncalcf@gmail.com"
                className="p-3 bg-slate-800 rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                aria-label="Email"
              >
                <FiMail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-800 pt-8 text-center">
          <p className="text-slate-400 text-sm flex items-center justify-center gap-2">
            © {currentYear} Chris Juncal. Hecho con <FiHeart className="text-pink-500" /> 
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;