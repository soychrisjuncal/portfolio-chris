import { Parallax } from 'react-scroll-parallax';

const Background3D = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Gradiente base - DIFERENTE para light y dark mode */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900"></div>
      
      {/* Esferas grandes con parallax */}
      <Parallax speed={-10}>
        <div className="absolute top-10 -left-32 w-[600px] h-[600px] bg-cyan-500/30 dark:bg-cyan-500/40 rounded-full blur-3xl animate-float"></div>
      </Parallax>
      
      <Parallax speed={15}>
        <div className="absolute top-20 -right-32 w-[550px] h-[550px] bg-pink-500/30 dark:bg-pink-500/40 rounded-full blur-3xl animate-float-delayed"></div>
      </Parallax>
      
      <Parallax speed={-20}>
        <div className="absolute bottom-10 left-1/4 w-[500px] h-[500px] bg-purple-500/25 dark:bg-purple-500/35 rounded-full blur-3xl animate-float-slow"></div>
      </Parallax>
      
      <Parallax speed={8}>
        <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-blue-500/20 dark:bg-blue-500/30 rounded-full blur-3xl animate-float"></div>
      </Parallax>
      
      {/* Geometrías flotantes visibles */}
      <Parallax speed={-15} className="absolute top-1/4 left-20">
        <div className="w-24 h-24 border-2 border-cyan-400/40 dark:border-cyan-400/50 rotate-45 animate-spin-slow"></div>
      </Parallax>
      
      <Parallax speed={12} className="absolute top-1/3 right-32">
        <div className="w-32 h-32 rounded-full border-4 border-pink-400/30 dark:border-pink-400/40 animate-pulse"></div>
      </Parallax>
      
      <Parallax speed={-8} className="absolute bottom-1/3 left-1/3">
        <div className="w-20 h-20 bg-gradient-to-br from-purple-500/20 to-transparent dark:from-purple-500/30 backdrop-blur-sm rotate-12"></div>
      </Parallax>
      
      <Parallax speed={18} className="absolute top-2/3 right-1/4">
        <svg width="60" height="60" className="text-cyan-400/30 dark:text-cyan-400/40">
          <polygon points="30,5 55,50 5,50" stroke="currentColor" strokeWidth="2" fill="none" />
        </svg>
      </Parallax>
      
      {/* Grid tecnológico con parallax */}
      <Parallax speed={5}>
        <div className="absolute inset-0 opacity-10 dark:opacity-20 bg-[linear-gradient(to_right,#06b6d430_1px,transparent_1px),linear-gradient(to_bottom,#06b6d430_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      </Parallax>
      
      {/* Líneas diagonales animadas */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <Parallax speed={-5}>
          <div className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
        </Parallax>
        <Parallax speed={8}>
          <div className="absolute top-2/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pink-500 to-transparent"></div>
        </Parallax>
        <Parallax speed={-12}>
          <div className="absolute top-3/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
        </Parallax>
      </div>
      
      {/* Partículas pequeñas */}
      {[...Array(20)].map((_, i) => (
        <Parallax key={i} speed={Math.random() * 20 - 10}>
          <div
            className="absolute w-1 h-1 bg-cyan-400/40 dark:bg-cyan-400/60 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        </Parallax>
      ))}
    </div>
  );
};

export default Background3D;