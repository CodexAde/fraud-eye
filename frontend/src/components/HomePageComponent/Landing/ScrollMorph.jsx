import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function ScrollMorph() {
  const containerRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const rotate = useTransform(scrollYProgress, [0, 0.5, 1], [-10, 0, 10]);

  return (
    <section 
      ref={containerRef}
      style={{ 
        height: '150vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        position: 'relative',
        backgroundColor: '#FFFFFF'
      }}
    >
      <div style={{ position: 'sticky', top: '20vh', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <motion.div
           style={{
             scale,
             opacity,
             rotate,
             textAlign: 'center',
             maxWidth: '900px',
             padding: '0 24px'
           }}
        >
          <span style={{ 
            color: '#2563EB', 
            fontWeight: '700', 
            fontSize: '18px', 
            textTransform: 'uppercase', 
            letterSpacing: '0.2em',
            marginBottom: '24px',
            display: 'block'
          }}>
            The Future of Safety
          </span>
          <h2 style={{ 
            fontSize: 'clamp(2.5rem, 6vw, 5rem)', 
            fontWeight: '900', 
            color: '#111827', 
            lineHeight: '1',
            letterSpacing: '-0.04em'
          }}>
            EXPERIENCE THE <br />
            <span style={{ color: '#2563EB' }}>INVISIBLE SHIELD.</span>
          </h2>
          <p style={{ 
            marginTop: '32px', 
            fontSize: '20px', 
            color: '#4B5563', 
            maxWidth: '600px', 
            margin: '32px auto 0' 
          }}>
            Every packet, every signal, every micro-pattern analyzed with millisecond precision to protect what matters most.
          </p>
        </motion.div>

        <div style={{ position: 'absolute', width: '100%', height: '100%', zIndex: -1, overflow: 'hidden' }}>
            <motion.div 
               animate={{ 
                 scale: [1, 1.2, 1],
                 rotate: [0, 90, 0],
                 opacity: [0.3, 0.5, 0.3]
               }}
               transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
               style={{ 
                 position: 'absolute', 
                 top: '50%', 
                 left: '50%', 
                 width: '500px', 
                 height: '500px', 
                 borderRadius: '50%', 
                 background: 'radial-gradient(circle, rgba(37,99,235,0.2) 0%, rgba(37,99,235,0) 70%)',
                 transform: 'translate(-50%, -50%)' 
               }} 
            />
        </div>
      </div>
    </section>
  );
}
