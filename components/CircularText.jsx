import { useEffect, useState, useRef } from 'react';
import { motion, useAnimation, useMotionValue } from 'motion/react';

import './CircularText.css';

const getRotationTransition = (duration, from, loop = true) => ({
  from,
  to: from + 360,
  ease: 'linear',
  duration,
  type: 'tween',
  repeat: loop ? Infinity : 0
});

const getTransition = (duration, from) => ({
  rotate: getRotationTransition(duration, from),
  scale: {
    type: 'spring',
    damping: 20,
    stiffness: 300
  }
});

const CircularText = ({ text, spinDuration = 20, onHover = 'speedUp', className = '' }) => {
  const [isMounted, setIsMounted] = useState(false);
  const [radius, setRadius] = useState(85);
  const containerRef = useRef(null);
  const letters = Array.from(text);
  const controls = useAnimation();
  const rotation = useMotionValue(0);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    // Calculate radius based on container size
    const updateRadius = () => {
      if (containerRef.current) {
        const containerSize = containerRef.current.offsetWidth || containerRef.current.offsetHeight || containerRef.current.clientWidth || containerRef.current.clientHeight || 200;
        // Use 42.5% of container size (equivalent to 85px for 200px container)
        const calculatedRadius = (containerSize * 0.425);
        if (calculatedRadius > 0) {
          setRadius(calculatedRadius);
        }
      }
    };

    // Initial calculation with multiple attempts to ensure container is sized
    const timeoutId1 = setTimeout(updateRadius, 0);
    const timeoutId2 = setTimeout(updateRadius, 50);
    const timeoutId3 = setTimeout(updateRadius, 100);
    
    // Update on resize
    window.addEventListener('resize', updateRadius);
    
    // Use ResizeObserver for better accuracy
    let resizeObserver;
    if (containerRef.current && window.ResizeObserver) {
      resizeObserver = new ResizeObserver(updateRadius);
      resizeObserver.observe(containerRef.current);
    }

    return () => {
      clearTimeout(timeoutId1);
      clearTimeout(timeoutId2);
      clearTimeout(timeoutId3);
      window.removeEventListener('resize', updateRadius);
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
    };
  }, [isMounted]);

  useEffect(() => {
    const start = rotation.get();
    controls.start({
      rotate: start + 360,
      scale: 1,
      transition: getTransition(spinDuration, start)
    });
  }, [spinDuration, text, onHover, controls, rotation]);

  const handleHoverStart = () => {
    const start = rotation.get();
    console.log('CircularText mounted with text:', text);
    if (!onHover) return;

    let transitionConfig;
    let scaleVal = 1;

    switch (onHover) {
      case 'slowDown':
        transitionConfig = getTransition(spinDuration * 2, start);
        break;
      case 'speedUp':
        transitionConfig = getTransition(spinDuration / 4, start);
        break;
      case 'pause':
        transitionConfig = {
          rotate: { type: 'spring', damping: 20, stiffness: 300 },
          scale: { type: 'spring', damping: 20, stiffness: 300 }
        };
        scaleVal = 1;
        break;
      case 'goBonkers':
        transitionConfig = getTransition(spinDuration / 20, start);
        scaleVal = 0.8;
        break;
      default:
        transitionConfig = getTransition(spinDuration, start);
    }

    controls.start({
      rotate: start + 360,
      scale: scaleVal,
      transition: transitionConfig
    });
  };

  const handleHoverEnd = () => {
    const start = rotation.get();
    controls.start({
      rotate: start + 360,
      scale: 1,
      transition: getTransition(spinDuration, start)
    });
  };

  // Only render after mount to prevent hydration mismatches
  if (!isMounted) {
    return (
      <div className={`circular-text ${className}`} style={{ width: '100%', height: '100%' }} />
    );
  }

  return (
    <motion.div
      ref={containerRef}
      className={`circular-text ${className}`}
      style={{ rotate: rotation }}
      initial={{ rotate: 0 }}
      animate={controls}
      onMouseEnter={handleHoverStart}
      onMouseLeave={handleHoverEnd}
    >
      {letters.map((letter, i) => {
        const rotationDeg = (360 / letters.length) * i;
        // Calculate radius dynamically based on container size
        const angle = (rotationDeg * Math.PI) / 180;
        const x = radius * Math.cos(angle);
        const y = radius * Math.sin(angle);
        // Round values to 4 decimal places to match server rendering precision
        const roundedX = Math.round(x * 10000) / 10000;
        const roundedY = Math.round(y * 10000) / 10000;
        const roundedRotation = Math.round((rotationDeg + 90) * 1000) / 1000;
        // Translate from center, then rotate to face outward
        const transform = `translate(${roundedX}px, ${roundedY}px) rotate(${roundedRotation}deg)`;

        return (
          <span key={i} style={{ transform, WebkitTransform: transform }}>
            {letter}
          </span>
        );
      })}
    </motion.div>
  );
};

export default CircularText;
