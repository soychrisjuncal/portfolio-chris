import { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-lg shadow-lg' 
        : 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm'
    }`}>
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center py-5">
          <a href="#home" className="group flex items-center gap-3">
  <div className="w-10 h-10 flex-shrink-0">
    <img 
      src="./public/vite.svg" 
      alt="Chris Juncal Logo" 
      className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
    />
  </div>
  <div className="flex flex-col">
    <span className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors duration-300">
      Chris Juncal
    </span>
    <span className="text-sm text-cyan-600 dark:text-cyan-400 font-medium">
      Front-End Developer
    </span>
  </div>
</a>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white font-medium transition-colors duration-300">Inicio</a>
            <a href="#about" className="text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white font-medium transition-colors duration-300">Sobre mí</a>
            <a href="#skills" className="text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white font-medium transition-colors duration-300">Skills</a>
            <a href="#projects" className="text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white font-medium transition-colors duration-300">Proyectos</a>
            <a href="#contact" className="text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white font-medium transition-colors duration-300">Contacto</a>
            
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-lg bg-slate-200 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 hover:border-cyan-400 transition-all duration-300"
            >
              {isDark ? (
                <FiSun className="w-5 h-5 text-cyan-500 dark:text-cyan-400" />
              ) : (
                <FiMoon className="w-5 h-5 text-slate-700" />
              )}
            </button>
          </nav>

          <div className="flex items-center gap-4 md:hidden">
            <button 
              onClick={toggleTheme} 
              className="p-2 rounded-lg bg-slate-200 dark:bg-slate-800 border border-slate-300 dark:border-slate-700"
            >
              {isDark ? (
                <FiSun className="w-5 h-5 text-cyan-400" />
              ) : (
                <FiMoon className="w-5 h-5 text-slate-700" />
              )}
            </button>
            
            <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 text-slate-900 dark:text-white">
              {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white/95 dark:bg-slate-900/95 backdrop-blur-lg border-t border-slate-200 dark:border-slate-800 px-6 py-6">
          <nav className="flex flex-col gap-4">
            <a href="#home" onClick={() => setMenuOpen(false)} className="text-slate-700 dark:text-slate-300 hover:text-cyan-500 dark:hover:text-cyan-400 text-lg font-medium">Inicio</a>
            <a href="#about" onClick={() => setMenuOpen(false)} className="text-slate-700 dark:text-slate-300 hover:text-cyan-500 dark:hover:text-cyan-400 text-lg font-medium">Sobre mí</a>
            <a href="#skills" onClick={() => setMenuOpen(false)} className="text-slate-700 dark:text-slate-300 hover:text-cyan-500 dark:hover:text-cyan-400 text-lg font-medium">Skills</a>
            <a href="#projects" onClick={() => setMenuOpen(false)} className="text-slate-700 dark:text-slate-300 hover:text-cyan-500 dark:hover:text-cyan-400 text-lg font-medium">Proyectos</a>
            <a href="#contact" onClick={() => setMenuOpen(false)} className="text-slate-700 dark:text-slate-300 hover:text-cyan-500 dark:hover:text-cyan-400 text-lg font-medium">Contacto</a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;