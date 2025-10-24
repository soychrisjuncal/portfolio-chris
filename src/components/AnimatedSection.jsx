import { motion } from 'framer-motion'; // eslint-disable-line
import { useInView } from 'react-intersection-observer';

const AnimatedSection = ({ children, className = '' }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.05, // Reducido de 0.1 a 0.05 para mobile
    rootMargin: '0px 0px -50px 0px', // Se dispara 50px antes de entrar al viewport
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
};


export default AnimatedSection;