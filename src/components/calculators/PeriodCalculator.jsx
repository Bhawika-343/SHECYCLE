import React, { useState } from 'react';
import {
    Card, CardContent, Typography, TextField, Button, Grid,
    Box, InputAdornment, Fade, CircularProgress, Alert
} from '@mui/material';
import { CalendarToday, AccessTime, Event, Favorite, AutoFixHigh, Psychology } from '@mui/icons-material';

const PeriodCalculator = () => {
    const [formData, setFormData] = useState({
        lastPeriod: '',
        age: 25,
        weight: 65,
        height: 160,
        stressLevel: 5,
        sleepHours: 7,
        previousCycleLen: 28
    });
    
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const calculateCycleWithAI = async (e) => {
        e.preventDefault();
        if (!formData.lastPeriod) return;

        setLoading(true);
        setError(null);

        try {
            // Pointing to the Flask backend running locally on port 8000
            const response = await fetch('http://localhost:8000/predict', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    last_period: formData.lastPeriod,
                    age: formData.age,
                    weight: formData.weight,
                    height: formData.height,
                    stress_level: formData.stressLevel,
                    sleep_hours: formData.sleepHours,
                    previous_cycle_len: formData.previousCycleLen
                })
            });

            if (!response.ok) {
                throw new Error("Failed to communicate with AI Backend. Ensure Flask is running on port 5000.");
            }

            const data = await response.json();
            
            if (data.error) {
                throw new Error(data.error);
            }

            // Formatting dates
            const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
            const nextDate = new Date(data.next_period).toLocaleDateString('en-US', options);
            const ovulDate = new Date(data.ovulation).toLocaleDateString('en-US', options);
            
            const startF = new Date(data.fertile_window_start).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
            const endF = new Date(data.fertile_window_end).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });

            setResult({
                nextPeriod: nextDate,
                ovulation: ovulDate,
                fertileWindow: `${startF} - ${endF}`,
                aiPredictedLength: data.predicted_cycle_length,
                isIrregular: data.is_irregular,
                recommendations: data.recommendations
            });

        } catch (err) {
            setError(err.message || 'An error occurred during prediction.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <Card className="card-custom mb-5" sx={{ overflow: 'visible' }}>
            <Box sx={{ bgcolor: 'var(--accent-color)', py: 2, px: 3, borderRadius: '12px 12px 0 0', color: 'white', display: 'flex', alignItems: 'center' }}>
                <AutoFixHigh sx={{ mr: 1, mb: 0 }} />
                <Typography variant="h5" component="h2" sx={{ fontFamily: 'var(--font-heading)', fontWeight: 'bold' }}>
                    AI-Powered Cycle Predictor
                </Typography>
            </Box>
            <CardContent className="p-4">
                <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
                    Go beyond simple math. Our Random Forest AI analyzes your personal health metrics to accurately predict your next cycle length and provide personalized wellness recommendations.
                </Typography>

                {error && <Alert severity="error" sx={{ mb: 3 }}>{error}</Alert>}

                <form onSubmit={calculateCycleWithAI}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={6}>
                            <TextField
                                fullWidth
                                label="First day of last period"
                                type="date"
                                name="lastPeriod"
                                InputLabelProps={{ shrink: true }}
                                value={formData.lastPeriod}
                                onChange={handleChange}
                                required
                                variant="outlined"
                                sx={{ '& .MuiOutlinedInput-root': { borderRadius: '12px' } }}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField
                                fullWidth
                                label="Previous Cycle Length (Days)"
                                type="number"
                                name="previousCycleLen"
                                value={formData.previousCycleLen}
                                onChange={handleChange}
                                InputProps={{ endAdornment: <InputAdornment position="end">Days</InputAdornment> }}
                                sx={{ '& .MuiOutlinedInput-root': { borderRadius: '12px' } }}
                                required
                            />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <TextField
                                fullWidth
                                label="Age"
                                type="number"
                                name="age"
                                value={formData.age}
                                onChange={handleChange}
                                sx={{ '& .MuiOutlinedInput-root': { borderRadius: '12px' } }}
                                required
                            />
                        </Grid>
                        <Grid item xs={6} md={4}>
                            <TextField
                                fullWidth
                                label="Weight"
                                type="number"
                                name="weight"
                                value={formData.weight}
                                onChange={handleChange}
                                InputProps={{ endAdornment: <InputAdornment position="end">kg</InputAdornment> }}
                                sx={{ '& .MuiOutlinedInput-root': { borderRadius: '12px' } }}
                                required
                            />
                        </Grid>
                        <Grid item xs={6} md={4}>
                            <TextField
                                fullWidth
                                label="Height"
                                type="number"
                                name="height"
                                value={formData.height}
                                onChange={handleChange}
                                InputProps={{ endAdornment: <InputAdornment position="end">cm</InputAdornment> }}
                                sx={{ '& .MuiOutlinedInput-root': { borderRadius: '12px' } }}
                                required
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField
                                fullWidth
                                label="Stress Level (1-10)"
                                type="number"
                                name="stressLevel"
                                value={formData.stressLevel}
                                onChange={handleChange}
                                InputProps={{ inputProps: { min: 1, max: 10 } }}
                                sx={{ '& .MuiOutlinedInput-root': { borderRadius: '12px' } }}
                                required
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField
                                fullWidth
                                label="Avg Sleep Hours"
                                type="number"
                                name="sleepHours"
                                value={formData.sleepHours}
                                onChange={handleChange}
                                InputProps={{ endAdornment: <InputAdornment position="end">Hrs</InputAdornment> }}
                                sx={{ '& .MuiOutlinedInput-root': { borderRadius: '12px' } }}
                                required
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button
                                type="submit"
                                variant="contained"
                                fullWidth
                                size="large"
                                disabled={loading}
                                sx={{
                                    bgcolor: 'var(--primary-color)',
                                    borderRadius: '50px',
                                    py: 1.5,
                                    fontSize: '1.1rem',
                                    textTransform: 'none',
                                    boxShadow: '0 4px 14px 0 rgba(194, 24, 91, 0.39)',
                                    '&:hover': { bgcolor: '#AD1457', boxShadow: '0 6px 20px rgba(194, 24, 91, 0.23)' }
                                }}
                            >
                                {loading ? <CircularProgress size={24} color="inherit" /> : 'Start AI Prediction'}
                            </Button>
                        </Grid>
                    </Grid>
                </form>

                {result && (
                    <Fade in={true}>
                        <Box sx={{ mt: 4 }}>
                            {/* AI Summary Badge */}
                            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
                                <Box sx={{ display: 'inline-flex', alignItems: 'center', bgcolor: '#f3e5f5', color: '#6a1b9a', px: 2, py: 1, borderRadius: '50px', fontWeight: 'bold' }}>
                                    <Psychology sx={{ mr: 1 }} />
                                    AI Predicted Cycle Length: {result.aiPredictedLength} Days
                                </Box>
                            </Box>

                            <Grid container spacing={3} sx={{ mb: 4 }}>
                                <Grid item xs={12} md={4}>
                                    <Box sx={{ p: 3, bgcolor: '#fdfbf7', borderRadius: '16px', border: '1px solid #eee', textAlign: 'center', height: '100%' }}>
                                        <Event sx={{ fontSize: 40, color: 'var(--primary-color)', mb: 2 }} />
                                        <Typography variant="subtitle2" color="text.secondary" gutterBottom>NEXT PERIOD</Typography>
                                        <Typography variant="h6" color="primary" sx={{ fontWeight: 'bold' }}>{result.nextPeriod}</Typography>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} md={4}>
                                    <Box sx={{ p: 3, bgcolor: '#fff0f5', borderRadius: '16px', border: '1px solid #fce4ec', textAlign: 'center', height: '100%' }}>
                                        <Favorite sx={{ fontSize: 40, color: '#e91e63', mb: 2 }} />
                                        <Typography variant="subtitle2" color="text.secondary" gutterBottom>FERTILE WINDOW</Typography>
                                        <Typography variant="h6" sx={{ color: '#c2185b', fontWeight: 'bold' }}>{result.fertileWindow}</Typography>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} md={4}>
                                    <Box sx={{ p: 3, bgcolor: '#e8f5e9', borderRadius: '16px', border: '1px solid #c8e6c9', textAlign: 'center', height: '100%' }}>
                                        <AccessTime sx={{ fontSize: 40, color: '#4caf50', mb: 2 }} />
                                        <Typography variant="subtitle2" color="text.secondary" gutterBottom>OVULATION (APPROX)</Typography>
                                        <Typography variant="h6" sx={{ color: '#2e7d32', fontWeight: 'bold' }}>{result.ovulation}</Typography>
                                    </Box>
                                </Grid>
                            </Grid>

                            {/* Recommendations Panel */}
                            <Box sx={{ p: 3, bgcolor: '#f8f9fa', borderRadius: '16px', borderLeft: result.isIrregular ? '4px solid #ff9800' : '4px solid #4caf50' }}>
                                <Typography variant="h6" sx={{ mb: 2, display: 'flex', alignItems: 'center', color: '#333' }}>
                                    <AutoFixHigh sx={{ mr: 1, color: 'var(--accent-color)' }} />
                                    Personalized AI Recommendations
                                </Typography>
                                
                                {result.recommendations.map((rec, idx) => (
                                    <Typography key={idx} variant="body1" sx={{ mb: 1, display: 'flex', alignItems: 'flex-start' }}>
                                        <span style={{ marginRight: '8px', color: 'var(--accent-color)' }}>•</span>
                                        {rec}
                                    </Typography>
                                ))}
                            </Box>
                        </Box>
                    </Fade>
                )}
            </CardContent>
        </Card>
    );
};

export default PeriodCalculator;
