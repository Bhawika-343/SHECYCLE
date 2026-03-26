import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia, Chip, Box, Button } from '@mui/material';
import { AutoStories, Spa, ChildCare, Psychology, FitnessCenter, Restaurant } from '@mui/icons-material';

const topics = [
    {
        title: 'Menstrual Health 101',
        category: 'Basics',
        desc: 'Everything you need to know about your cycle, from hormones to hygiene.',
        icon: <AutoStories fontSize="large" sx={{ color: 'var(--primary-color)' }} />,
        color: '#fdfbf7'
    },
    {
        title: 'Fertility & Conception',
        category: 'Fertility',
        desc: 'Understanding your fertile window and maximizing your chances of conception.',
        icon: <ChildCare fontSize="large" sx={{ color: '#ec407a' }} />,
        color: '#fff0f5'
    },
    {
        title: 'Mental Wellness',
        category: 'Mental Health',
        desc: 'Managing PMS, PMDD, and emotional well-being throughout your cycle.',
        icon: <Psychology fontSize="large" sx={{ color: '#7e57c2' }} />,
        color: '#ede7f6'
    },
    {
        title: 'Nutrition for Your Cycle',
        category: 'Lifestyle',
        desc: 'What to eat during each phase to support your hormones and energy.',
        icon: <Restaurant fontSize="large" sx={{ color: '#66bb6a' }} />,
        color: '#e8f5e9'
    },
    {
        title: 'Exercise Guide',
        category: 'Fitness',
        desc: 'How to adapt your workout routine to your menstrual cycle phases.',
        icon: <FitnessCenter fontSize="large" sx={{ color: '#ffa726' }} />,
        color: '#fff3e0'
    },
    {
        title: 'Self-Care Rituals',
        category: 'Wellness',
        desc: 'Restorative practices to help you feel your best all month long.',
        icon: <Spa fontSize="large" sx={{ color: '#26c6da' }} />,
        color: '#e0f7fa'
    }
];

const HealthLibrary = () => {
    return (
        <div className="pt-5 mt-5">
            <div className="pastel-bg py-5 mb-5">
                <Container>
                    <div className="row align-items-center">
                        <div className="col-lg-8">
                            <Typography variant="overline" display="block" color="primary" sx={{ fontWeight: 700, letterSpacing: 2 }}>
                                EDUCATION HUB
                            </Typography>
                            <Typography variant="h2" component="h1" className="fw-bold mb-3" sx={{ fontFamily: 'var(--font-heading)' }}>
                                Health Library
                            </Typography>
                            <Typography variant="h5" color="text.secondary" sx={{ fontWeight: 300 }}>
                                Expert-backed articles to help you understand your body.
                            </Typography>
                        </div>
                        <div className="col-lg-4 text-center d-none d-lg-block">
                            <img src="/images/health-library-new.png" alt="Library" style={{ maxHeight: '250px', opacity: 1, borderRadius: '16px' }} />
                        </div>
                    </div>
                </Container>
            </div>

            <Container className="mb-5 pb-5">
                <Grid container spacing={4}>
                    {topics.map((topic, index) => (
                        <Grid item xs={12} md={4} key={index}>
                            <Card
                                className="h-100 card-custom border-0"
                                sx={{
                                    backgroundColor: topic.color,
                                    transition: 'transform 0.3s ease-in-out',
                                    '&:hover': { transform: 'translateY(-8px)' }
                                }}
                            >
                                <CardContent className="p-4 d-flex flex-column h-100">
                                    <Box sx={{ mb: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                                        <div className="p-3 bg-white rounded-circle shadow-sm">
                                            {topic.icon}
                                        </div>
                                        <Chip label={topic.category} size="small" sx={{ bgcolor: 'white', fontWeight: 600 }} />
                                    </Box>
                                    <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
                                        {topic.title}
                                    </Typography>
                                    <Typography variant="body1" color="text.secondary" sx={{ mb: 3, flexGrow: 1 }}>
                                        {topic.desc}
                                    </Typography>
                                    <Button variant="text" color="primary" sx={{ alignSelf: 'start', p: 0, fontWeight: 600 }}>
                                        Read Article &rarr;
                                    </Button>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>

                <Box sx={{ mt: 8, textAlign: 'center', p: 5, bgcolor: '#f8f9fa', borderRadius: '24px' }}>
                    <Typography variant="h4" gutterBottom sx={{ fontFamily: 'var(--font-heading)' }}>
                        Have a specific question?
                    </Typography>
                    <Typography variant="body1" color="text.secondary" paragraph>
                        Browse our complete database of medical articles or check our FAQ.
                    </Typography>
                    <Button variant="outlined" size="large" sx={{ borderRadius: '50px', mt: 2 }}>
                        Search Knowledge Base
                    </Button>
                </Box>
            </Container>
        </div>
    );
};

export default HealthLibrary;
