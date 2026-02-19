import React, { useState, useEffect, useRef, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Sparkles, LogOut, UserPlus } from 'lucide-react';
import { AuthContext } from '../Context/Auth/AuthContext';

import Hero from '../components/HomePageComponent/Landing/Hero';
import Showcase from '../components/HomePageComponent/Landing/Showcase';
import ScrollMorph from '../components/HomePageComponent/Landing/ScrollMorph';
import BentoGrid from '../components/HomePageComponent/Landing/BentoGrid';
import CTASection from '../components/HomePageComponent/Landing/CTASection';

const HomePage = () => {
    const [scrolled, setScrolled] = useState(false);
    const [navVisible, setNavVisible] = useState(true);
    const morphSectionRef = useRef(null);
    const { isAuthenticated, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            if (morphSectionRef.current) {
                const rect = morphSectionRef.current.getBoundingClientRect();
                // Hide nav when morph section is in view
                const isNeedToHide = rect.top < window.innerHeight && rect.bottom > 0;
                setNavVisible(!isNeedToHide);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <div style={{ backgroundColor: '#FFFFFF', minHeight: '100vh', overflowX: 'hidden' }}>
            {/* Custom Navbar for Landing Page */}
            <AnimatePresence>
                {navVisible && (
                    <motion.nav 
                        initial={{ y: -100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -100, opacity: 0 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        style={{
                            fixed: 'top-0',
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            right: 0,
                            width: '90%',
                            maxWidth: '1200px',
                            margin: '24px auto',
                            zIndex: 100,
                            padding: '16px 24px',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            borderRadius: '999px',
                            backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.8)' : 'rgba(255, 255, 255, 0.4)',
                            backdropFilter: 'blur(16px)',
                            border: '1px solid rgba(0, 0, 0, 0.1)',
                            boxShadow: scrolled ? '0 10px 15px -3px rgba(0, 0, 0, 0.1)' : 'none',
                            transition: 'all 0.3s'
                        }}
                    >
                        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
                            <div style={{ 
                                width: '36px', 
                                height: '36px', 
                                background: '#2563EB', 
                                borderRadius: '12px', 
                                display: 'flex', 
                                alignItems: 'center', 
                                justifyCenter: 'center',
                                justifyContent: 'center'
                            }}>
                                <Sparkles size={20} color="white" />
                            </div>
                            <span style={{ fontSize: '22px', fontWeight: '900', color: '#111827', letterSpacing: '-0.04em' }}>
                                FraudWatch
                            </span>
                        </Link>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                            {isAuthenticated ? (
                                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                                    <Link to="/analyze" style={{ color: '#4B5563', textDecoration: 'none', fontWeight: '600', fontSize: '14px' }}>Analyze</Link>
                                    <button 
                                        onClick={handleLogout}
                                        style={{ 
                                            backgroundColor: '#F3F4F6', 
                                            border: 'none', 
                                            padding: '8px 20px', 
                                            borderRadius: '999px', 
                                            fontSize: '14px', 
                                            fontWeight: '700', 
                                            color: '#111827',
                                            cursor: 'pointer',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '8px'
                                        }}
                                    >
                                        <LogOut size={16} /> Logout
                                    </button>
                                </div>
                            ) : (
                                <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                                    <Link to="/login" style={{ color: '#4B5563', textDecoration: 'none', fontWeight: '600', fontSize: '14px' }}>Login</Link>
                                    <Link to="/login" style={{ 
                                        backgroundColor: '#2563EB', 
                                        color: 'white', 
                                        textDecoration: 'none', 
                                        padding: '10px 24px', 
                                        borderRadius: '999px', 
                                        fontSize: '14px', 
                                        fontWeight: '700',
                                        boxShadow: '0 10px 15px -3px rgba(37, 99, 235, 0.2)'
                                    }}>
                                        Start Protection
                                    </Link>
                                </div>
                            )}
                        </div>
                    </motion.nav>
                )}
            </AnimatePresence>

            <Hero />
            <Showcase />
            
            <div ref={morphSectionRef}>
                <ScrollMorph />
            </div>

            <BentoGrid />
            <CTASection />

            {/* Simple Refined Footer */}
            <footer style={{ padding: '60px 24px', backgroundColor: '#F9FAFB', borderTop: '1px solid #E5E7EB' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '40px' }}>
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                            <div style={{ width: '24px', height: '24px', background: '#2563EB', borderRadius: '6px' }}></div>
                            <span style={{ fontSize: '18px', fontWeight: '800', color: '#111827' }}>FraudWatch</span>
                        </div>
                        <p style={{ color: '#6B7280', fontSize: '14px', maxWidth: '280px' }}>
                            Leading the way in transaction security and fraud analysis.
                        </p>
                    </div>
                    <div style={{ display: 'flex', gap: '60px' }}>
                        <div>
                            <h4 style={{ fontSize: '14px', fontWeight: '700', textTransform: 'uppercase', marginBottom: '16px' }}>Product</h4>
                            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                <li><a href="#" style={{ color: '#6B7280', textDecoration: 'none', fontSize: '14px' }}>Features</a></li>
                                <li><a href="#" style={{ color: '#6B7280', textDecoration: 'none', fontSize: '14px' }}>Demo</a></li>
                                <li><a href="#" style={{ color: '#6B7280', textDecoration: 'none', fontSize: '14px' }}>Pricing</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default HomePage;
