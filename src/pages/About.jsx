import React from 'react';
import { Container, Typography, Box, Paper, Divider, Chip } from '@mui/material';
import { Code, Storage, Brush, Speed } from '@mui/icons-material';

const About = () => {
    const techs = [
        { label: 'React 18', icon: <Code />, color: 'primary' },
        { label: 'Vite', icon: <Speed />, color: 'secondary' },
        { label: 'Material UI', icon: <Brush />, color: 'success' },
        { label: 'Bootstrap 5', icon: <Storage />, color: 'warning' },
    ];

    return (
        <div className="pt-5 mt-5">
            <div className="pastel-bg py-5 mb-5">
                <Container>
                    <Typography variant="overline" display="block" color="primary" sx={{ fontWeight: 700, letterSpacing: 2 }}>
                        PROJECT DOCUMENTATION
                    </Typography>
                    <Typography variant="h2" component="h1" className="fw-bold mb-3" sx={{ fontFamily: 'var(--font-heading)' }}>
                        About SheCycle
                    </Typography>
                    <Typography variant="h5" color="text.secondary" sx={{ fontWeight: 300, maxWidth: '800px' }}>
                        A modern Single Page Application (SPA) demonstrating professional healthcare software design patterns.
                    </Typography>
                </Container>
            </div>

            <Container className="mb-5 pb-5">
                <div className="row">
                    <div className="col-lg-8">
                        <Paper elevation={0} className="p-4 mb-4 border rounded-4 bg-light">
                            <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
                                Architecture Overview
                            </Typography>
                            <Typography variant="body1" paragraph>
                                This application is built as a client-side only Single Page Application (SPA).
                                It demonstrates how to build complex, interactive heath tools without any backend dependencies.
                                All calculations are performed locally in the browser using JavaScript and React state management.
                            </Typography>
                        </Paper>

                        <Box className="mb-5">
                            <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
                                Tech Stack
                            </Typography>
                            <div className="d-flex flex-wrap gap-2 mb-4">
                                {techs.map((tech, idx) => (
                                    <Chip
                                        key={idx}
                                        icon={tech.icon}
                                        label={tech.label}
                                        color={tech.color}
                                        variant="outlined"
                                        sx={{ p: 1, fontSize: '0.9rem' }}
                                    />
                                ))}
                            </div>

                            <ul className="list-group list-group-flush rounded-3 border">
                                <li className="list-group-item p-3">
                                    <strong>Component Library:</strong> Material UI (MUI) is used for complex interactive components like cards, buttons, and form elements.
                                </li>
                                <li className="list-group-item p-3">
                                    <strong>Layout System:</strong> Bootstrap 5's grid system and utility classes handle the responsive layout structure.
                                </li>
                                <li className="list-group-item p-3">
                                    <strong>State Management:</strong> React Hooks (useState, useEffect) manage local component state and logic.
                                </li>
                                <li className="list-group-item p-3">
                                    <strong>Routing:</strong> React Router v6 handles client-side navigation without page reloads.
                                </li>
                            </ul>
                        </Box>

                        <Divider className="my-5" />

                        <Paper elevation={0} className="p-4 mb-4 border rounded-4 bg-light">
                            <Box>
                                <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
                                    Design Philosophy
                                </Typography>
                                <Typography variant="body1" paragraph>
                                    The UI is designed to mimic a real-world SaaS product. Key design elements include:
                                </Typography>
                                <ul>
                                    <li><strong>Typography:</strong> Using 'Playfair Display' for headings to evoke authority and 'Inter' for readability.</li>
                                    <li><strong>Color Palette:</strong> Soft pastels (Lavender, Soft Pink, Mint) to create a calming, clinical-yet-friendly atmosphere.</li>
                                    <li><strong>Accessibility:</strong> High contrast text and clear hierarchy for better usability.</li>
                                </ul>
                            </Box>
                        </Paper>
                    </div>

                    <div className="col-lg-4">
                        <Paper elevation={3} className="p-4 rounded-4 text-center">
                            <Typography variant="h6" gutterBottom>
                                Developer Note
                            </Typography>
                            <Typography variant="body2" color="text.secondary" paragraph>
                                This project was developed for educational purposes to demonstrate advanced frontend development skills.
                            </Typography>
                            <Typography variant="caption" display="block" color="text.secondary">
                                Version 1.0.0
                            </Typography>
                        </Paper>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default About;
