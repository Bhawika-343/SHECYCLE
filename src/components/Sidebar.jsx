import React from 'react';
import { Box, Typography, List, ListItem, Link as MuiLink } from '@mui/material';

const Sidebar = () => {
    const sections = [
        { id: 'key-takeaways', label: 'Key Takeaways' },
        { id: 'how-it-works', label: 'How it Works' },
        { id: 'calculator', label: 'Calculator' },
        { id: 'cycle-phases', label: 'Cycle Phases' },
        { id: 'faq', label: 'Common Questions' }
    ];

    return (
        <Box sx={{ position: 'sticky', top: '100px' }}>
            <Typography
                variant="subtitle2"
                sx={{
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    fontWeight: 'bold',
                    mb: 2,
                    color: 'var(--text-secondary)'
                }}
            >
                In This Article
            </Typography>
            <List component="nav" sx={{ borderLeft: '2px solid #f0f0f0' }}>
                {sections.map((section) => (
                    <ListItem key={section.id} sx={{ py: 0.5, pl: 2 }}>
                        <MuiLink
                            href={`#${section.id}`}
                            to={`#${section.id}`}
                            underline="none"
                            color="text.secondary"
                            sx={{
                                fontSize: '0.9rem',
                                transition: 'color 0.2s',
                                '&:hover': { color: 'var(--primary-color)', fontWeight: 500 }
                            }}
                        >
                            {section.label}
                        </MuiLink>
                    </ListItem>
                ))}
            </List>

            <Box sx={{ mt: 4, p: 3, bgcolor: '#f8f9fa', borderRadius: '12px' }}>
                <Typography variant="subtitle2" fontWeight="bold" gutterBottom>
                    Need professional advice?
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                    Our clinician guide offers specialized resources for healthcare providers.
                </Typography>
                <MuiLink href="/clinicians" sx={{ fontWeight: 600, color: 'var(--primary-color)' }}>
                    View Clinician Resources →
                </MuiLink>
            </Box>
        </Box>
    );
};

export default Sidebar;
