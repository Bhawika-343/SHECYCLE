import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Grid, Typography, Box } from '@mui/material';
import { WaterDrop } from '@mui/icons-material';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: '#fff', padding: '60px 0 30px', borderTop: '1px solid #eee' }}>
            <Container>
                <div className="row">
                    <div className="col-lg-4 mb-4">
                        <h3 className="fw-bold h4 mb-3 d-flex align-items-center" style={{ fontFamily: 'var(--font-heading)' }}>
                            <WaterDrop sx={{ color: '#D81B60', mr: 1 }} />
                            <span style={{ color: '#D81B60' }}>She</span>Cycle
                        </h3>
                        <p className="text-muted">
                            Empowering women with accurate health insights and educational resources.
                            Track your cycle, understand your body.
                        </p>
                    </div>

                    <div className="col-lg-2 col-md-6 mb-4">
                        <h5 className="fw-bold mb-3">Product</h5>
                        <ul className="list-unstyled">
                            <li className="mb-2"><Link to="/calculators" className="text-decoration-none text-secondary">Period Calculator</Link></li>
                            <li className="mb-2"><Link to="/calculators" className="text-decoration-none text-secondary">Ovulation Tracker</Link></li>
                            <li className="mb-2"><Link to="/library" className="text-decoration-none text-secondary">Health Insights</Link></li>
                        </ul>
                    </div>

                    <div className="col-lg-2 col-md-6 mb-4">
                        <h5 className="fw-bold mb-3">Company</h5>
                        <ul className="list-unstyled">
                            <li className="mb-2"><Link to="/about" className="text-decoration-none text-secondary">About Us</Link></li>
                            <li className="mb-2"><Link to="/clinicians" className="text-decoration-none text-secondary">For Clinicians</Link></li>
                            <li className="mb-2"><Link to="/" className="text-decoration-none text-secondary">Contact</Link></li>
                        </ul>
                    </div>

                    <div className="col-lg-4 mb-4">
                        <h5 className="fw-bold mb-3">Stay Updated</h5>
                        <div className="input-group mb-3">
                            <input type="email" className="form-control" placeholder="Enter your email" style={{ borderRadius: '20px 0 0 20px', borderRight: 'none' }} />
                            <button className="btn btn-primary" type="button" style={{ backgroundColor: 'var(--primary-color)', border: 'none', borderRadius: '0 20px 20px 0' }}>Subscribe</button>
                        </div>
                    </div>
                </div>

                <hr className="my-4" />

                <div className="text-center text-muted">
                    <small>&copy; 2024 SheCycle. All rights reserved. Not medical advice.</small>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
