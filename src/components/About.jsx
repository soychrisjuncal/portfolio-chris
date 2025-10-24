import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { FiAward, FiBriefcase, FiGift } from 'react-icons/fi';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const stats = [
    { number: 22, label: "Proyectos Completados", color: "cyan" },
    { number: 15, label: "Clientes Satisfechos", color: "pink" },
    { number: 8, label: "Años en Ventas", color: "cyan" },
    { number: 10, label: "Tecnologías", color: "pink" },
  ];

  return (
    <section id="about" className="py-20 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white text-center mb-4">
          Sobre <span className="bg-gradient-to-r from-cyan-500 to-pink-500 bg-clip-text text-transparent">Mí</span>
        </h2>
        <p className="text-slate-500 dark:text-slate-300 text-center mb-12 max-w-2xl mx-auto text-lg">
          Vivo en Capital Federal, tengo 36 años. Soy proactivo y un eterno aprendiz. Me gusta y me motiva sumarme a grupos para potenciar proyectos colectivos.
        </p>

        {/* PRIMERA FILA: Texto + Stats */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto mb-16">
          
          {/* Texto principal - IZQUIERDA */}
          <div className="space-y-4">
            <p className="text-slate-500 dark:text-slate-300 leading-relaxed text-lg md:text-xl">
              <strong className="text-slate-900 dark:text-white">Profesional híbrido</strong> con experiencia en{' '}
              <span className="text-cyan-600 dark:text-cyan-400 font-semibold">desarrollo Front-End</span> y{' '}
              <span className="text-pink-600 dark:text-pink-400 font-semibold">gestión comercial</span>. 
              Especializado en crear estrategias digitales que conectan desarrollo web con objetivos de venta. 
              Combino conocimientos técnicos con habilidades comerciales para desarrollar landing pages y plataformas que optimizan la conversión.
            </p>
            <p className="text-slate-500 dark:text-slate-300 leading-relaxed text-base">
              Mi enfoque único permite traducir necesidades comerciales en soluciones técnicas efectivas, 
              diseñando experiencias de usuario que no solo se ven bien, sino que generan resultados medibles. 
              Especialista en crear embudos de conversión optimizados y estrategias de marketing digital 
              integradas con desarrollo web moderno.
            </p>
          </div>

          {/* Stats Grid - DERECHA */}
          <div ref={ref} className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`p-6 rounded-lg border backdrop-blur-sm ${
                  stat.color === 'cyan' 
                    ? 'bg-cyan-50 dark:bg-slate-800/50 border-cyan-200 dark:border-cyan-500/30' 
                    : 'bg-pink-50 dark:bg-slate-800/50 border-pink-200 dark:border-pink-500/30'
                }`}
              >
                <div className={`text-5xl font-bold mb-2 ${
                  stat.color === 'cyan' 
                    ? 'text-cyan-600 dark:text-cyan-400' 
                    : 'text-pink-600 dark:text-pink-400'
                }`}>
                  {inView && <CountUp end={stat.number} duration={2} />}+
                </div>
                <p className="text-slate-700 dark:text-slate-300 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* SEGUNDA FILA: 3 columnas iguales */}
        <div className="grid lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          
          {/* Educación */}
          <div className="bg-white dark:bg-slate-800/50 backdrop-blur-sm p-6 rounded-lg border border-slate-200 dark:border-slate-700/50 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <FiAward className="text-2xl text-cyan-600 dark:text-cyan-400" />
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Educación</h3>
            </div>
            <div className="space-y-3">
              <div>
                <p className="font-semibold text-slate-900 dark:text-white text-base">Desarrollador Front-End</p>
                <p className="text-slate-600 dark:text-slate-400 text-sm">CoderHouse</p>
              </div>
              <div>
                <p className="font-semibold text-slate-900 dark:text-white text-base">Diseño Multimedial</p>
                <p className="text-slate-600 dark:text-slate-400 text-sm">Escuela Da Vinci</p>
              </div>
              <div>
                <p className="font-semibold text-slate-900 dark:text-white text-base">Coaching Ontológico y Desarrollo Profesional</p>
              </div>
              <div>
                <p className="font-semibold text-slate-900 dark:text-white text-base">Perito Mercantil</p>
                <p className="text-slate-600 dark:text-slate-400 text-sm">con orientación en Programación</p>
              </div>
            </div>
          </div>

          {/* Experiencia Actual */}
          <div className="bg-white dark:bg-slate-800/50 backdrop-blur-sm p-6 rounded-lg border border-slate-200 dark:border-slate-700/50 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <FiBriefcase className="text-2xl text-pink-600 dark:text-pink-400" />
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Experiencia Actual</h3>
            </div>
            <div className="space-y-3">
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white text-base">Inversor Global S.A.</h4>
                <p className="text-cyan-600 dark:text-cyan-400 text-sm mb-2">2022 - Actualidad</p>
                <p className="font-semibold text-slate-900 dark:text-white text-base mb-2">Desarrollador Digital & Ejecutivo Comercial</p>
                <ul className="text-slate-600 dark:text-slate-400 text-sm space-y-1 list-disc list-inside">
                  <li>Desarrollo de estrategias digitales para ventas online</li>
                  <li>Diseño y desarrollo de landing pages optimizadas</li>
                  <li>Gestión integral del embudo de ventas y conversión</li>
                  <li>Contacto con clientes vía canales digitales y telefónicos</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Experiencia Comercial */}
          <div className="bg-white dark:bg-slate-800/50 backdrop-blur-sm p-6 rounded-lg border border-slate-200 dark:border-slate-700/50 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <FiGift className="text-2xl text-purple-600 dark:text-purple-400" />
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Experiencia Comercial</h3>
            </div>
            <div className="space-y-3">
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white text-base">Gravity Gafas (2016-2022)</h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm">Distribuidor Comercial - Venta mayorista y desarrollo de negocios</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;