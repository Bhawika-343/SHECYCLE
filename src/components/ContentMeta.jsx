import React from 'react';
import { Box, Typography, Divider, Chip } from '@mui/material';
import { CheckCircle, Person } from '@mui/icons-material';

const ContentMeta = () => {
    return (
        <Box sx={{ my: 4 }}>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 2, mb: 2 }}>
                <Typography variant="body2" color="text.secondary">
                    Last Updated: <strong>October 15, 2025</strong>
                </Typography>

                <Divider orientation="vertical" flexItem sx={{ display: { xs: 'none', sm: 'block' } }} />

                <Chip
                    icon={<CheckCircle style={{ color: 'var(--success-color)' }} />}
                    label="Medically Reviewed"
                    variant="outlined"
                    size="small"
                    sx={{ borderColor: 'var(--success-color)', color: 'text.secondary', fontWeight: 500 }}
                />

                <Divider orientation="vertical" flexItem sx={{ display: { xs: 'none', sm: 'block' } }} />

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Person fontSize="small" color="action" />
                    <Typography variant="body2" color="text.secondary">
                        By <strong>Dr. Sarah Jenkins, OB/GYN</strong>
                    </Typography>
                </Box>
            </Box>
            <Divider />
        </Box>
    );
};

export default ContentMeta;
