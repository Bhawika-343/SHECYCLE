import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@mui/material';
import { WaterDrop } from '@mui/icons-material';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Product', path: '/' },
        { name: 'Health Library', path: '/library' },
        { name: 'Calculators', path: '/calculators' },
        { name: 'About', path: '/about' },
        { name: 'For Clinicians', path: '/clinicians' },
    ];

    return (
        <nav className={`navbar navbar-expand-lg fixed-top transition-all ${scrolled ? 'bg-white shadow-sm py-2' : 'bg-transparent py-4'}`}
            style={{ transition: 'all 0.3s ease' }}>
            <div className="container">
                <Link className="navbar-brand fw-bold d-flex align-items-center" to="/" style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-primary)', fontSize: '2rem' }}>
                    <WaterDrop sx={{ color: '#D81B60', fontSize: '2.2rem', mr: 1, filter: 'drop-shadow(0 2px 4px rgba(216, 27, 96, 0.2))' }} />
                    <span style={{ color: '#D81B60' }}>She</span>Cycle
                </Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        {navLinks.map((link) => (
                            <li className="nav-item mx-2" key={link.name}>
                                <Link
                                    className={`nav-link fw-medium ${location.pathname === link.path ? 'active text-primary' : 'text-secondary'}`}
                                    to={link.path}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <Button
                        variant="contained"
                        className="btn-primary-custom text-capitalize px-4"
                        style={{
                            backgroundColor: 'var(--primary-color)',
                            borderRadius: '50px',
                            fontFamily: 'var(--font-main)',
                            boxShadow: '0 4px 10px rgba(157, 142, 195, 0.3)'
                        }}
                    >
                        Try App Today
                    </Button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
