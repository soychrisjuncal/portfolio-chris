import Tilt from 'react-parallax-tilt';

const TiltCard = ({ children, className = '' }) => {
  return (
    <Tilt
      tiltMaxAngleX={10}
      tiltMaxAngleY={10}
      perspective={1000}
      scale={1.05}
      transitionSpeed={2000}
      gyroscope={true}
      className={className}
    >
      {children}
    </Tilt>
  );
};

export default TiltCard;