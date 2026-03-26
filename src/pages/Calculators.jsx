import React from 'react';
import { Container, Typography, Grid, Card, CardContent, Box, Button } from '@mui/material';
import { CalendarMonth, PregnantWoman, Scale, Spa } from '@mui/icons-material';
import PeriodCalculator from '../components/calculators/PeriodCalculator';

const Calculators = () => {
    const tools = [
        {
            title: 'Ovulation Tracker',
            desc: 'Pinpoint your most fertile days with precision.',
            icon: <Spa sx={{ fontSize: 40, color: '#ec407a' }} />,
            active: false
        },
        {
            title: 'Pregnancy Due Date',
            desc: 'Calculate your estimated due date based on LMP.',
            icon: <PregnantWoman sx={{ fontSize: 40, color: '#66bb6a' }} />,
            active: false
        },
        {
            title: 'BMI Calculator',
            desc: 'Check your Body Mass Index for general health awareness.',
            icon: <Scale sx={{ fontSize: 40, color: '#ffa726' }} />,
            active: false
        }
    ];

    return (
        <div className="pt-5 mt-5">
            <div className="pastel-bg py-5 mb-5">
                <Container>
                    <Typography variant="overline" display="block" color="primary" sx={{ fontWeight: 700, letterSpacing: 2 }}>
                        INTERACTIVE TOOLS
                    </Typography>
                    <Typography variant="h2" component="h1" className="fw-bold" sx={{ fontFamily: 'var(--font-heading)' }}>
                        Health Calculators
                    </Typography>
                </Container>
            </div>

            <Container className="mb-5 pb-5">
                <div className="row">
                    <div className="col-lg-8 mx-auto">
                        <Typography variant="h5" gutterBottom className="fw-bold mb-4">
                            Period & Cycle Calculator
                        </Typography>
                        <PeriodCalculator />

                        <Typography variant="h5" gutterBottom className="fw-bold mb-4 mt-5">
                            More Health Tools
                        </Typography>
                        <Grid container spacing={3}>
                            {tools.map((tool, index) => (
                                <Grid item xs={12} md={4} key={index}>
                                    <Card className="h-100 border-0 shadow-sm" sx={{ borderRadius: '16px', bgcolor: '#f8f9fa' }}>
                                        <CardContent className="p-4 text-center">
                                            <Box sx={{ mb: 2 }}>
                                                {tool.icon}
                                            </Box>
                                            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                                                {tool.title}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary" paragraph>
                                                {tool.desc}
                                            </Typography>
                                            <Button variant="outlined" size="small" disabled={!tool.active} sx={{ borderRadius: '20px' }}>
                                                {tool.active ? 'Open Tool' : 'Coming Soon'}
                                            </Button>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Calculators;
