import React from 'react';
import { motion } from 'framer-motion';

export default function Showcase() {
  return (
    <section style={{ 
      padding: '100px 24px', 
      backgroundColor: '#F8FAFF',
      overflow: 'hidden'
    }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ fontSize: '40px', fontWeight: '800', color: '#111827', marginBottom: '16px' }}
          >
            Powerful Visual Insights
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            style={{ fontSize: '18px', color: '#6B7280', maxWidth: '600px', margin: '0 auto' }}
          >
            Monitor patterns and detect anomalies with our integrated dashboard view.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ 
            position: 'relative',
            borderRadius: '32px',
            backgroundColor: '#FFFFFF',
            padding: '12px',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.1)',
            border: '1px solid #E5E7EB',
          }}
        >
          <img 
            src="/Live overiew.png" 
            alt="Dashboard Showcase" 
            style={{ 
              width: '100%', 
              borderRadius: '24px',
              display: 'block'
            }}
          />
          
          <div style={{
            position: 'absolute',
            bottom: '-30px',
            right: '40px',
            backgroundColor: '#2563EB',
            padding: '24px',
            borderRadius: '24px',
            color: 'white',
            boxShadow: '0 20px 25px -5px rgba(37, 99, 235, 0.3)',
            maxWidth: '240px',
            display: 'none',
            '@media (min-width: 768px)': { display: 'block' }
          }}>
            <p style={{ fontSize: '14px', fontWeight: '500', opacity: 0.8, marginBottom: '8px' }}>Active Scans</p>
            <p style={{ fontSize: '24px', fontWeight: '800' }}>1,284,019</p>
          </div>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px', marginTop: '100px' }}>
          {[
            { img: '/Csv overiew.png', title: 'Data Analysis', desc: 'Detailed table views with flag indicators.' },
            { img: '/Realtion maping.png', title: 'Relation Mapping', desc: 'Identify complex network connections.' }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '24px',
                padding: '16px',
                border: '1px solid #E5E7EB',
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.05)'
              }}
            >
              <img 
                src={item.img} 
                alt={item.title} 
                style={{ width: '100%', borderRadius: '16px', marginBottom: '20px', aspectRatio: '16/9', objectFit: 'cover' }} 
              />
              <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#111827', marginBottom: '8px' }}>{item.title}</h3>
              <p style={{ color: '#6B7280', fontSize: '15px' }}>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
