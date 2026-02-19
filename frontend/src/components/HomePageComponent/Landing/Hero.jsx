import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShieldCheck, ChevronRight, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'center', 
      alignItems: 'center',
      padding: '0 24px', 
      maxWidth: '1280px', 
      margin: '0 auto', 
      textAlign: 'center',
      paddingTop: '100px'
    }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ 
          display: 'inline-flex', 
          alignItems: 'center', 
          gap: '8px', 
          padding: '8px 16px', 
          backgroundColor: '#EFF6FF', 
          color: '#2563EB', 
          borderRadius: '9999px', 
          fontSize: '14px', 
          fontWeight: '600', 
          marginBottom: '24px' 
        }}
      >
        <Zap size={16} fill="#2563EB" />
        <span style={{ letterSpacing: '0.025em' }}>NEXT-GEN FRAUD PROTECTION</span>
      </motion.div>

      <div style={{ position: 'relative' }}>
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ 
            fontSize: 'clamp(3rem, 8vw, 6rem)', 
            fontWeight: '900', 
            letterSpacing: '-0.05em', 
            lineHeight: '0.9', 
            color: '#111827',
            marginBottom: '32px'
          }}
        >
          SECURE EVERY <br />
          <span style={{ color: '#2563EB' }}>TRANSACTION.</span>
        </motion.h1>
      </div>

      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        style={{ 
          fontSize: 'clamp(1.1rem, 2vw, 1.4rem)', 
          color: '#4B5563', 
          maxWidth: '700px', 
          lineHeight: '1.6',
          marginBottom: '48px'
        }}
      >
        Advanced AI-driven analysis for real-time fraud detection. Protect your platform with intelligent patterns, relationship mapping, and automated safety.
      </motion.p>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center' }}
      >
        <Link 
          to="/login" 
          style={{ 
            backgroundColor: '#2563EB', 
            color: '#FFFFFF', 
            padding: '16px 36px', 
            borderRadius: '9999px', 
            fontSize: '18px', 
            fontWeight: '600', 
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            boxShadow: '0 20px 25px -5px rgba(37, 99, 235, 0.2)',
            transition: 'all 0.3s'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.05)';
            e.currentTarget.style.backgroundColor = '#1D4ED8';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.backgroundColor = '#2563EB';
          }}
        >
          Get Started Now <ChevronRight size={20} />
        </Link>
        
        <Link 
          to="/analyze" 
          style={{ 
            backgroundColor: '#FFFFFF', 
            color: '#111827', 
            padding: '16px 36px', 
            borderRadius: '9999px', 
            fontSize: '18px', 
            fontWeight: '600', 
            textDecoration: 'none',
            border: '2px solid #E5E7EB',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            transition: 'all 0.3s'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#F9FAFB';
            e.currentTarget.style.borderColor = '#D1D5DB';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#FFFFFF';
            e.currentTarget.style.borderColor = '#E5E7EB';
          }}
        >
          View Live Demo
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        style={{ marginTop: '80px', display: 'flex', gap: '40px', color: '#9CA3AF', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <ShieldCheck size={20} />
          <span style={{ fontSize: '14px', fontWeight: '500' }}>ISO 27001 Certified</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#10B981' }}></div>
          <span style={{ fontSize: '14px', fontWeight: '500' }}>Real-time Analysis Online</span>
        </div>
      </motion.div>
    </section>
  );
}
