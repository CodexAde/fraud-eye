import React from 'react';
import { motion } from 'framer-motion';
import { Shield, BarChart3, Users, Lock, Search, Zap } from 'lucide-react';

export default function BentoGrid() {
  const features = [
    { 
      id: 1, 
      title: 'AI Pattern Matching', 
      desc: 'Smart algorithms that learn from history to predict future threats.', 
      icon: <Zap size={24} />, 
      size: 'large', 
      color: '#EFF6FF', 
      iconColor: '#2563EB'
    },
    { 
      id: 2, 
      title: 'Real-time Monitoring', 
      desc: 'Instant alerts for suspicious activities.', 
      icon: <BarChart3 size={24} />, 
      size: 'small', 
      color: '#F0FDF4', 
      iconColor: '#10B981'
    },
    { 
      id: 3, 
      title: 'Relation Mapping', 
      desc: 'Trace connections between fraudulent accounts.', 
      icon: <Search size={24} />, 
      size: 'medium', 
      color: '#FAF5FF', 
      iconColor: '#9333EA'
    },
    { 
      id: 4, 
      title: 'Secure API Access', 
      desc: 'Enterprise-grade security for your endpoints.', 
      icon: <Lock size={24} />, 
      size: 'small', 
      color: '#FFF7ED', 
      iconColor: '#F97316'
    },
    { 
      id: 5, 
      title: 'Collaborative Defense', 
      desc: 'Share threat intelligence across your organization safely.', 
      icon: <Users size={24} />, 
      size: 'medium', 
      color: '#F8FAFF', 
      iconColor: '#2563EB'
    }
  ];

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gridAutoRows: '220px',
    gap: '24px',
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '0 24px'
  };

  const getGridArea = (size) => {
    switch(size) {
      case 'large': return 'span 2 / span 2';
      case 'medium': return 'span 1 / span 2';
      case 'small': return 'span 1 / span 1';
      default: return 'span 1 / span 1';
    }
  };

  return (
    <section style={{ padding: '100px 0', backgroundColor: '#FFFFFF' }}>
      <div style={{ textAlign: 'center', marginBottom: '64px' }}>
        <h2 style={{ fontSize: '36px', fontWeight: '800', color: '#111827' }}>Advanced Capabilities</h2>
      </div>

      <div style={gridStyle}>
        {features.map((feature, idx) => (
          <motion.div
            key={feature.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            style={{
              gridArea: getGridArea(feature.size),
              backgroundColor: feature.color,
              borderRadius: '32px',
              padding: '32px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              border: '1px solid rgba(0,0,0,0.02)',
              transition: 'transform 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            <div style={{ 
              width: '48px', 
              height: '48px', 
              borderRadius: '16px', 
              backgroundColor: 'white', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              color: feature.iconColor,
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)'
            }}>
              {feature.icon}
            </div>
            <div>
              <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#111827', marginBottom: '8px' }}>{feature.title}</h3>
              <p style={{ color: '#4B5563', fontSize: '15px', lineHeight: '1.5' }}>{feature.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* Mobile grid fallback via style tag */}
      <style>{`
        @media (max-width: 1024px) {
          .bento-grid {
             grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 640px) {
          .bento-grid {
             grid-template-columns: 1fr !important;
             grid-auto-rows: auto !important;
          }
          .bento-grid > div {
             grid-area: auto !important;
          }
        }
      `}</style>
    </section>
  );
}
