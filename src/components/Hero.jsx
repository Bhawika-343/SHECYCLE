import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const Hero = () => {
    return (
        <section className="pastel-bg position-relative overflow-hidden section-padding pt-5 mt-5">
            <Container>
                <div className="row align-items-center">
                    <div className="col-lg-6 mb-4 mb-lg-0">
                        <Typography variant="h1" component="h1" className="display-4 fw-bold mb-3" sx={{ fontFamily: 'var(--font-heading)', color: '#2c2c2c' }}>
                            Period calculator: Predict your next cycle
                        </Typography>
                        <Typography variant="h5" className="text-secondary mb-4" sx={{ fontWeight: 300, lineHeight: 1.6 }}>
                            Understand your body better with our advanced cycle tracking.
                            Get accurate predictions for your period, ovulation, and fertile window
                            in seconds. No account required.
                        </Typography>
                        <div className="d-flex gap-3">
                            <span className="badge bg-white text-dark shadow-sm py-2 px-3 border rounded-pill">
                                ✨ Medically Reviewed
                            </span>
                            <span className="badge bg-white text-dark shadow-sm py-2 px-3 border rounded-pill">
                                🔒 Privacy Focused
                            </span>
                        </div>
                    </div>
                    <div className="col-lg-6 text-center">
                        <Box
                            component="img"
                            src="/images/hero-relaxed.png"
                            alt="Relaxed woman reading book"
                            sx={{
                                maxWidth: '100%',
                                height: 'auto',
                                dropShadow: '0 10px 30px rgba(157, 142, 195, 0.2)',
                                transform: 'scale(1.05)',
                                transition: 'transform 0.3s ease',
                                '&:hover': { transform: 'scale(1.08)' },
                                borderRadius: '24px'
                            }}
                        />
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Hero;
