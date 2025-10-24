import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { projects } from '../data/projects'; // ← Importar projects

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  // Calcular el total de proyectos automáticamente
  const totalProjects = Object.values(projects).flat().length;

  const stats = [
    { number: totalProjects, label: "Proyectos Completados", color: "cyan" }, // ← Usa totalProjects
    { number: 15, label: "Clientes Satisfechos", color: "pink" },
    { number: 8, label: "Años en Ventas", color: "cyan" },
    { number: 10, label: "Tecnologías", color: "pink" },
  ];

  return (
    <section id="about" className="py-20 bg-slate-100 dark:bg-slate-800">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white text-center mb-12">
          Sobre <span className="bg-gradient-to-r from-cyan-500 to-pink-500 bg-clip-text text-transparent">Mí</span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Left - Texto + Estadísticas */}
          <div className="space-y-8">
            <div>
              <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed mb-6">
                Vivo en Capital Federal, tengo 36 años. Soy proactivo y un eterno aprendiz. 
                Me gusta y me motiva sumarme a grupos para potenciar proyectos colectivos.
              </p>

              <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed">
                <strong className="text-slate-900 dark:text-white">Profesional híbrido</strong> con experiencia en{' '}
                <strong className="text-cyan-600 dark:text-cyan-400">desarrollo Front-End</strong> y{' '}
                <strong className="text-pink-600 dark:text-pink-400">gestión comercial</strong>. 
                Especializado en crear estrategias digitales que conectan desarrollo web con objetivos de venta. 
                Combino conocimientos técnicos con habilidades comerciales para desarrollar landing pages y plataformas que optimizan la conversión.
              </p>
            </div>

            {/* Estadísticas debajo del texto */}
            <div ref={ref} className="grid grid-cols-2 gap-4">
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className={`bg-gradient-to-br ${
                    stat.color === 'cyan'
                      ? 'from-cyan-100 to-pink-100 dark:from-cyan-500/20 dark:to-pink-500/20 border-cyan-300 dark:border-cyan-400/30'
                      : 'from-pink-100 to-cyan-100 dark:from-pink-500/20 dark:to-cyan-500/20 border-pink-300 dark:border-pink-400/30'
                  } p-6 rounded-lg border-2 text-center transform hover:scale-105 transition-transform duration-300`}
                >
                  <div className={`text-4xl font-bold mb-2 ${
                    stat.color === 'cyan' ? 'text-cyan-600 dark:text-cyan-400' : 'text-pink-600 dark:text-pink-400'
                  }`}>
                    {inView ? (
                      <>
                        <CountUp end={stat.number} duration={2.5} />
                        <span>+</span>
                      </>
                    ) : (
                      '0+'
                    )}
                  </div>
                  <div className="text-slate-700 dark:text-slate-300 font-medium text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Educación y Experiencia */}
          <div className="space-y-6">
            <div className="bg-white dark:bg-slate-900 p-6 rounded-lg border border-slate-200 dark:border-slate-700">
              <h3 className="text-cyan-600 dark:text-cyan-400 font-semibold text-xl mb-4">🎓 Educación</h3>
              <ul className="space-y-2 text-slate-700 dark:text-slate-300 text-sm">
                <li>• <strong>Desarrollador Front-End</strong> - CoderHouse</li>
                <li>• <strong>Diseño Multimedial</strong> - Escuela Da Vinci</li>
                <li>• <strong>Coaching Ontológico y Desarrollo Profesional</strong></li>
                <li>• <strong>Perito Mercantil</strong> con orientación en Programación</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-cyan-50 to-pink-50 dark:from-cyan-900/20 dark:to-pink-900/20 p-6 rounded-lg border border-cyan-200 dark:border-cyan-700">
              <h3 className="text-pink-600 dark:text-pink-400 font-semibold text-xl mb-4">💼 Experiencia Actual</h3>
              <div className="text-slate-700 dark:text-slate-300">
                <p className="font-semibold text-slate-900 dark:text-white mb-1">Inversor Global S.A.</p>
                <p className="text-xs text-cyan-600 dark:text-cyan-400 mb-3">2022 - Actualidad</p>
                <p className="mb-3 text-sm"><strong>Desarrollador Digital & Ejecutivo Comercial</strong></p>
                <ul className="text-xs space-y-1 ml-4">
                  <li>• Desarrollo de estrategias digitales para ventas online</li>
                  <li>• Diseño y desarrollo de landing pages optimizadas</li>
                  <li>• Gestión integral del embudo de ventas y conversión</li>
                  <li>• Contacto con clientes vía canales digitales y telefónicos</li>
                </ul>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-900 p-6 rounded-lg border border-slate-200 dark:border-slate-700">
              <h3 className="text-slate-700 dark:text-slate-400 font-semibold text-lg mb-3">📊 Experiencia Comercial Previa</h3>
              <div className="text-slate-600 dark:text-slate-400 text-xs space-y-2">
                <div>
                  <p className="font-semibold text-slate-900 dark:text-white">Gravity Gafas (2016-2022)</p>
                  <p>Distribuidor Comercial - Venta mayorista y desarrollo de negocios</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;