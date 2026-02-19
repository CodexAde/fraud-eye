import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function CTASection() {
  return (
    <section style={{ padding: '100px 24px' }}>
      <div style={{ 
        maxWidth: '1280px', 
        margin: '0 auto',
        backgroundColor: '#2563EB',
        borderRadius: '48px',
        padding: '80px 24px',
        textAlign: 'center',
        color: 'white',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{ 
          position: 'absolute', 
          inset: 0, 
          opacity: 0.1,
          background: 'radial-gradient(circle at 20% 50%, white 0%, transparent 50%), radial-gradient(circle at 80% 50%, white 0%, transparent 50%)'
        }} />
        
        <motion.h2 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', fontWeight: '900', marginBottom: '24px', position: 'relative' }}
        >
          Ready to Secure Your Future?
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          style={{ fontSize: '20px', opacity: 0.9, maxWidth: '600px', margin: '0 auto 48px', position: 'relative' }}
        >
          Join thousands of platforms using Crix to protect their users from fraudulent activities.
        </motion.p>
        
        <motion.div
           initial={{ opacity: 0, y: 10 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.4 }}
           style={{ position: 'relative' }}
        >
          <Link 
            to="/login" 
            style={{ 
              backgroundColor: 'white', 
              color: '#2563EB', 
              padding: '20px 48px', 
              borderRadius: '9999px', 
              fontSize: '20px', 
              fontWeight: '700', 
              textDecoration: 'none',
              boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.2)',
              transition: 'all 0.3s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            Start Your Protection Now
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
