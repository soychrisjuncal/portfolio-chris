import { useState } from 'react';
import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiGithub, FiSend } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validar que los campos no estén vacíos
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('Por favor completa todos los campos');
      setTimeout(() => setStatus(''), 3000);
      return;
    }

    // Formatear el mensaje para WhatsApp
    const whatsappMessage = `
*Nuevo contacto desde Portfolio* 🚀

*Nombre:* ${formData.name}
*Email:* ${formData.email}

*Mensaje:*
${formData.message}
    `.trim();

    // Número de WhatsApp (reemplaza con tu número - formato: código país sin + y número sin espacios ni guiones)
    const phoneNumber = '5491130540430'; // Tu número: +54 9 11 3054 0430
    
    // Crear el link de WhatsApp
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    
    // Abrir WhatsApp
    window.open(whatsappURL, '_blank');
    
    setStatus('✅ Abriendo WhatsApp...');
    
    // Limpiar formulario después de 2 segundos
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setStatus('');
    }, 2000);
  };

  return (
<section id="contact" className="py-20 bg-white/90 dark:bg-slate-900/60 md:bg-slate-50/80 md:dark:bg-slate-800/80 backdrop-blur-sm">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white text-center mb-4">
          Hablemos de tu <span className="bg-gradient-to-r from-cyan-500 to-pink-500 bg-clip-text text-transparent">Proyecto</span>
        </h2>
        <p className="text-slate-600 dark:text-slate-400 text-center mb-12 max-w-2xl mx-auto">
          ¿Tienes un proyecto en mente? Conversemos sobre cómo puedo ayudarte a hacerlo realidad
        </p>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Información de contacto */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                Información de Contacto
              </h3>
              
              <div className="space-y-4">
  <a
    href="mailto:juncalcf@gmail.com"
    className="flex items-center gap-4 p-4 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-cyan-400 dark:hover:border-cyan-400 transition-all duration-300 group"
  >
    <div className="p-3 bg-cyan-100 dark:bg-cyan-900/30 rounded-lg group-hover:scale-110 transition-transform duration-300">
      <FiMail className="text-2xl text-cyan-600 dark:text-cyan-400" />
    </div>
    <div>
      <p className="text-sm text-slate-600 dark:text-slate-400">Email</p>
      <p className="text-slate-900 dark:text-white font-semibold">juncalcf@gmail.com</p>
    </div>
  </a>

  <a
    href="https://wa.me/5491130540430"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-4 p-4 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-green-400 dark:hover:border-green-400 transition-all duration-300 group"
  >
    <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg group-hover:scale-110 transition-transform duration-300">
      <FaWhatsapp className="text-2xl text-green-600 dark:text-green-400" />
    </div>
    <div>
      <p className="text-sm text-slate-600 dark:text-slate-400">WhatsApp</p>
      <p className="text-slate-900 dark:text-white font-semibold">+54 11 3054 0430</p>
    </div>
  </a>

  <div className="flex items-center gap-4 p-4 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
    <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
      <FiMapPin className="text-2xl text-purple-600 dark:text-purple-400" />
    </div>
    <div>
      <p className="text-sm text-slate-600 dark:text-slate-400">Ubicación</p>
      <p className="text-slate-900 dark:text-white font-semibold">Buenos Aires, Argentina</p>
    </div>
  </div>
</div>
            </div>

            {/* Redes sociales */}
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                Redes Sociales
              </h3>
              <div className="flex gap-4">
                <a
                  href="https://linkedin.com/in/soychrisjuncal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg hover:border-cyan-400 dark:hover:border-cyan-400 hover:scale-110 transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <FiLinkedin className="text-2xl text-slate-700 dark:text-slate-300" />
                </a>
                <a
                  href="https://github.com/soychrisjuncal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg hover:border-cyan-400 dark:hover:border-cyan-400 hover:scale-110 transition-all duration-300"
                  aria-label="GitHub"
                >
                  <FiGithub className="text-2xl text-slate-700 dark:text-slate-300" />
                </a>
              </div>
            </div>
          </div>

          {/* Formulario de contacto */}
          <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-lg border border-slate-200 dark:border-slate-700">
            <div className="flex items-center gap-3 mb-6">
              <FaWhatsapp className="text-3xl text-green-500" />
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                Contáctame por WhatsApp
              </h3>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Nombre *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-transparent outline-none transition-all duration-300 text-slate-900 dark:text-white"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-transparent outline-none transition-all duration-300 text-slate-900 dark:text-white"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Mensaje *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-transparent outline-none transition-all duration-300 text-slate-900 dark:text-white resize-none"
                  placeholder="Cuéntame sobre tu proyecto..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-green-500/50 transition-all duration-300 flex items-center justify-center gap-3 group"
              >
                <FaWhatsapp className="text-2xl group-hover:scale-110 transition-transform duration-300" />
                <span>Enviar por WhatsApp</span>
                <FiSend className="group-hover:translate-x-1 transition-transform duration-300" />
              </button>

              {status && (
                <p className={`text-center font-medium ${
                  status.includes('✅') 
                    ? 'text-green-600 dark:text-green-400' 
                    : 'text-orange-600 dark:text-orange-400'
                }`}>
                  {status}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
