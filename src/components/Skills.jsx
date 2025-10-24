import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaWordpress, FaBootstrap, FaGitAlt, FaFigma, FaNodeJs } from 'react-icons/fa';
import { SiTailwindcss, SiAdobexd, SiAdobephotoshop, SiAdobeillustrator, SiMysql, SiOpenai } from 'react-icons/si';
import { BiLineChart, BiBrain } from 'react-icons/bi';
import { HiChatBubbleLeftRight, HiPresentationChartLine } from 'react-icons/hi2';
import { RiRobot2Line } from 'react-icons/ri';

const Skills = () => {
  const skillCategories = [
    {
      title: "Front-End",
      skills: [
        { name: "HTML5", icon: <FaHtml5 />, color: "text-orange-500" },
        { name: "CSS3", icon: <FaCss3Alt />, color: "text-blue-500" },
        { name: "JavaScript", icon: <FaJs />, color: "text-yellow-400" },
        { name: "React", icon: <FaReact />, color: "text-cyan-400" },
        { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "text-cyan-400" },
        { name: "Bootstrap", icon: <FaBootstrap />, color: "text-purple-500" }
      ]
    },
    {
      title: "CMS & E-commerce",
      skills: [
        { name: "WordPress", icon: <FaWordpress />, color: "text-blue-400" },
        { name: "WooCommerce", icon: <FaWordpress />, color: "text-purple-400" },
        { name: "TiendaNube", icon: null, color: "text-green-400" },
        { name: "TiendUp", icon: null, color: "text-pink-400" }
      ]
    },
    {
      title: "Diseño",
      skills: [
        { name: "Figma", icon: <FaFigma />, color: "text-purple-500" },
        { name: "Adobe XD", icon: <SiAdobexd />, color: "text-pink-500" },
        { name: "Photoshop", icon: <SiAdobephotoshop />, color: "text-blue-600 dark:text-blue-400" },
        { name: "Illustrator", icon: <SiAdobeillustrator />, color: "text-orange-600 dark:text-orange-400" }
      ]
    },
    {
      title: "Herramientas & Backend",
      skills: [
        { name: "Git", icon: <FaGitAlt />, color: "text-orange-500" },
        { name: "Node.js", icon: <FaNodeJs />, color: "text-green-500" },
        { name: "MySQL", icon: <SiMysql />, color: "text-blue-400" }
      ]
    }
  ];

  const businessSkills = [
    { name: "CRM & Gestión de Clientes", icon: <BiLineChart />, color: "text-cyan-500" },
    { name: "Asesorías Comerciales Digitales", icon: <HiPresentationChartLine />, color: "text-pink-500" },
    { name: "Comunicación Comercial Presencial", icon: <HiChatBubbleLeftRight />, color: "text-purple-500" },
  ];

  const aiSkills = [
    { name: "Claude (Anthropic)", icon: <BiBrain />, color: "text-orange-400" },
    { name: "ChatGPT (OpenAI)", icon: <SiOpenai />, color: "text-green-400" },
    { name: "Leonardo AI", icon: <RiRobot2Line />, color: "text-purple-400" },
    { name: "Google AI Studio", icon: <BiBrain />, color: "text-blue-400" },
  ];

  return (
<section id="skills" className="py-20 bg-white dark:bg-slate-900 relative overflow-hidden">
  {/* Video de fondo */}
  <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute top-0 left-0 w-full h-full object-cover opacity-20 dark:opacity-10"
    style={{ filter: 'blur(80px)' }}
  >
    <source src="/portfolio-chris/bg-gradient.mp4" type="video/mp4" />
  </video>
  
  {/* Overlay */}
  <div className="absolute inset-0 bg-white/80 dark:bg-slate-900/70"></div>
  
  {/* Ya está el relative z-10 en el container */}
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white text-center mb-4">
          Mis <span className="bg-gradient-to-r from-cyan-500 to-pink-500 bg-clip-text text-transparent">Skills</span>
        </h2>
        <p className="text-slate-600 dark:text-slate-400 text-center mb-12 max-w-2xl mx-auto">
          Tecnologías y herramientas que domino para crear experiencias digitales excepcionales
        </p>

        {/* Technical Skills */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mb-12">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="bg-slate-50 dark:bg-slate-800 rounded-lg p-6 border border-slate-200 dark:border-slate-700 hover:border-cyan-400 dark:hover:border-cyan-400 transition-all duration-300">
              <h3 className="text-xl font-bold text-cyan-600 dark:text-cyan-400 mb-6">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx} className="flex items-center gap-3 group">
                    {skill.icon && (
                      <div className={`text-3xl ${skill.color} group-hover:scale-110 transition-transform duration-300`}>
                        {skill.icon}
                      </div>
                    )}
                    <span className="text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white transition-colors duration-300">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* AI Skills Banner */}
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 rounded-lg p-8 border-2 border-purple-300 dark:border-purple-700 mb-8">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white text-center mb-6">
            🤖 Inteligencia <span className="text-purple-600 dark:text-purple-400">Artificial</span>
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            {aiSkills.map((skill, idx) => (
              <div key={idx} className="flex flex-col items-center text-center gap-3 bg-white/50 dark:bg-slate-800/50 p-4 rounded-lg hover:scale-105 transition-transform duration-300">
                <div className={`text-4xl ${skill.color}`}>
                  {skill.icon}
                </div>
                <span className="text-slate-800 dark:text-slate-200 font-medium text-sm">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
          <p className="text-center text-slate-600 dark:text-slate-400 mt-6 text-sm">
            Especializado en implementar soluciones con IA para optimizar procesos y crear contenido
          </p>
        </div>

        {/* Business Skills Banner */}
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-cyan-100 to-pink-100 dark:from-cyan-900/30 dark:to-pink-900/30 rounded-lg p-8 border-2 border-cyan-300 dark:border-cyan-700">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white text-center mb-6">
            💼 Habilidades <span className="text-cyan-600 dark:text-cyan-400">Comerciales</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {businessSkills.map((skill, idx) => (
              <div key={idx} className="flex flex-col items-center text-center gap-3 bg-white/50 dark:bg-slate-800/50 p-4 rounded-lg hover:scale-105 transition-transform duration-300">
                <div className={`text-4xl ${skill.color}`}>
                  {skill.icon}
                </div>
                <span className="text-slate-800 dark:text-slate-200 font-medium text-sm">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
          <p className="text-center text-slate-600 dark:text-slate-400 mt-6 text-sm">
            Experiencia combinando desarrollo técnico con estrategias comerciales para maximizar conversiones
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;