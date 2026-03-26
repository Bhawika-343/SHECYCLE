import React from 'react';
import { Container, Typography, Grid, Button, Box, Paper } from '@mui/material';
import { MedicalServices, Description, Science } from '@mui/icons-material';

const ForClinicians = () => {
    return (
        <div className="pt-5 mt-5">
            <div className="pastel-bg py-5 mb-5" style={{ background: 'linear-gradient(135deg, #e0f2f1 0%, #e0f7fa 100%)' }}>
                <Container>
                    <div className="row">
                        <div className="col-lg-8">
                            <Typography variant="overline" display="block" color="primary" sx={{ fontWeight: 700, letterSpacing: 2 }}>
                                PROFESSIONAL PORTAL
                            </Typography>
                            <Typography variant="h2" component="h1" className="fw-bold mb-3" sx={{ fontFamily: 'var(--font-heading)' }}>
                                Resources for Clinicians
                            </Typography>
                            <Typography variant="h5" color="text.secondary" sx={{ fontWeight: 300 }}>
                                Evidence-based tools to support your practice and patient education.
                            </Typography>
                            <Button variant="contained" size="large" sx={{ mt: 3, bgcolor: '#00695c', borderRadius: '50px' }}>
                                Request Access
                            </Button>
                        </div>
                    </div>
                </Container>
            </div>

            <Container className="mb-5 pb-5">
                <Grid container spacing={4}>
                    <Grid item xs={12} md={4}>
                        <Paper className="p-4 h-100 rounded-4 border-0 shadow-sm">
                            <MedicalServices sx={{ fontSize: 40, color: '#00695c', mb: 2 }} />
                            <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
                                Clinical Guidelines
                            </Typography>
                            <Typography variant="body1" color="text.secondary">
                                Access the latest ACOG-aligned guidelines for menstrual cycle tracking and hormonal health assessments.
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Paper className="p-4 h-100 rounded-4 border-0 shadow-sm">
                            <Description sx={{ fontSize: 40, color: '#00897b', mb: 2 }} />
                            <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
                                Patient Handouts
                            </Typography>
                            <Typography variant="body1" color="text.secondary">
                                Download printable PDF guides on ovulation tracking, fertility awareness, and cycle phases.
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Paper className="p-4 h-100 rounded-4 border-0 shadow-sm">
                            <Science sx={{ fontSize: 40, color: '#4db6ac', mb: 2 }} />
                            <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
                                Research Hub
                            </Typography>
                            <Typography variant="body1" color="text.secondary">
                                Stay updated with the latest peer-reviewed studies on reproductive health technology.
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>

                <Box sx={{ mt: 6, p: 4, border: '1px dashed #bdbdbd', borderRadius: '12px', textAlign: 'center' }}>
                    <Typography variant="subtitle1" color="text.secondary">
                        This portal is intended for verified healthcare professionals only.
                    </Typography>
                </Box>
            </Container>
        </div>
    );
};

export default ForClinicians;
