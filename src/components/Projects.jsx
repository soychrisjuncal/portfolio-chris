import { useState } from 'react';
import { FiExternalLink } from 'react-icons/fi';
import { projects } from '../data/projects';
import TiltCard from './TiltCard';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    { id: 'all', name: 'Todos', count: Object.values(projects).flat().length },
    { id: 'personal', name: 'Personales', count: projects.personal?.length || 0 },
    { id: 'wordpress', name: 'WordPress', count: projects.wordpress?.length || 0 },
    { id: 'freelance', name: 'Freelance', count: projects.freelance?.length || 0 },
    { id: 'inversor', name: 'Inversor Global', count: projects.inversorGlobal?.length || 0 },
  ];

  const getFilteredProjects = () => {
    if (activeFilter === 'all') {
      return Object.values(projects).flat();
    }
    
    const filterMap = {
      'personal': 'personal',
      'wordpress': 'wordpress',
      'freelance': 'freelance',
      'inversor': 'inversorGlobal'
    };
    
    const projectKey = filterMap[activeFilter];
    return projects[projectKey] || [];
  };

  const filteredProjects = getFilteredProjects();

  return (
<section id="projects" className="py-20 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white text-center mb-4">
          Mis <span className="bg-gradient-to-r from-cyan-500 to-pink-500 bg-clip-text text-transparent">Proyectos</span>
        </h2>
        <p className="text-slate-600 dark:text-slate-400 text-center mb-12 max-w-2xl mx-auto">
          Portfolio de proyectos reales desarrollados para empresas y clientes
        </p>

        {/* Filtros */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeFilter === category.id
                  ? 'bg-gradient-to-r from-cyan-500 to-pink-500 text-white shadow-lg'
                  : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-cyan-400 dark:hover:border-cyan-400'
              }`}
            >
              {category.name} <span className="text-sm opacity-75">({category.count})</span>
            </button>
          ))}
        </div>

        {/* Grid de proyectos */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {filteredProjects.map((project) => (
         <TiltCard
  key={project.id}
  className="bg-white dark:bg-slate-900 rounded-lg overflow-hidden border border-slate-200 dark:border-slate-700 hover:border-cyan-400 dark:hover:border-cyan-400 transition-all duration-300 group"
>
              {/* Imagen del proyecto */}
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-cyan-500/20 to-pink-500/20">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    const parent = e.target.parentElement;
                    const placeholder = parent.querySelector('.placeholder-fallback');
                    if (placeholder) {
                      placeholder.style.display = 'flex';
                    }
                  }}
                />
                
                {/* Placeholder fallback */}
                <div className="placeholder-fallback hidden absolute inset-0 w-full h-full items-center justify-center bg-gradient-to-br from-cyan-500 to-pink-500">
                  <span className="text-white font-bold text-3xl">
                    {project.title.substring(0, 2).toUpperCase()}
                  </span>
                </div>

                {/* Overlay con link */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 gap-3">
                <a  
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white rounded-full hover:bg-cyan-400 transition-colors duration-300 z-20"
                    aria-label="Ver proyecto"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FiExternalLink size={20} className="text-slate-900" />
                  </a>
                </div>
              </div>

              {/* Info del proyecto */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tags de tecnologías */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.slice(0, 3).map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 text-xs font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-3 py-1 bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-400 text-xs font-medium rounded-full">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>
              </div>
           </TiltCard>
          ))}
        </div>

        {/* Mensaje si no hay proyectos */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-600 dark:text-slate-400 text-lg">
              No hay proyectos en esta categoría.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;