import React from 'react';
import { Container, Typography, Box, Divider } from '@mui/material';
import Hero from '../components/Hero';
import PeriodCalculator from '../components/calculators/PeriodCalculator';
import Sidebar from '../components/Sidebar';
import ContentMeta from '../components/ContentMeta';
import { CheckCircleOutline, InfoOutlined } from '@mui/icons-material';

const Home = () => {
    return (
        <>
            <Hero />

            <Container className="py-5">
                <div className="row">
                    {/* Main Content Column */}
                    <div className="col-lg-8">
                        <ContentMeta />

                        <section id="calculator" className="mb-5">
                            <PeriodCalculator />
                        </section>

                        <section id="key-takeaways" className="mb-5">
                            <div className="p-4 rounded-4 mb-4" style={{ backgroundColor: '#eaf4fc', borderLeft: '5px solid var(--accent-color)' }}>
                                <Typography variant="h5" component="h2" gutterBottom className="fw-bold" sx={{ fontFamily: 'var(--font-heading)' }}>
                                    Key Takeaways
                                </Typography>
                                <ul className="list-unstyled mb-0">
                                    <li className="d-flex mb-3 align-items-start">
                                        <CheckCircleOutline sx={{ color: 'var(--accent-color)', mr: 2, mt: 0.5 }} />
                                        <Typography variant="body1">
                                            A typical menstrual cycle lasts between <strong>21 and 35 days</strong>.
                                        </Typography>
                                    </li>
                                    <li className="d-flex mb-3 align-items-start">
                                        <CheckCircleOutline sx={{ color: 'var(--accent-color)', mr: 2, mt: 0.5 }} />
                                        <Typography variant="body1">
                                            Ovulation usually occurs around <strong>day 14</strong> of a 28-day cycle.
                                        </Typography>
                                    </li>
                                    <li className="d-flex align-items-start">
                                        <CheckCircleOutline sx={{ color: 'var(--accent-color)', mr: 2, mt: 0.5 }} />
                                        <Typography variant="body1">
                                            Your <strong>fertile window</strong> is the 6-day period ending on the day of ovulation.
                                        </Typography>
                                    </li>
                                </ul>
                            </div>
                            <div className="text-center mt-4">
                                <img
                                    src="/images/yoga-relaxed.png"
                                    alt="Relaxation"
                                    className="img-fluid rounded-4 shadow-sm"
                                    style={{ maxWidth: '300px' }}
                                />
                            </div>
                        </section>

                        <section id="how-it-works" className="mb-5">
                            <Typography variant="h4" component="h2" gutterBottom className="fw-bold mb-4" sx={{ fontFamily: 'var(--font-heading)' }}>
                                How the Menstrual Cycle Works
                            </Typography>
                            <Typography variant="body1" paragraph className="text-secondary fs-5" sx={{ lineHeight: 1.8 }}>
                                The menstrual cycle is a complex monthly series of events orchestrated by hormones.
                                It prepares your body for potential pregnancy. Understanding these phases allows you
                                to track your health and identify your most fertile days.
                            </Typography>
                            <Typography variant="body1" paragraph className="text-secondary fs-5" sx={{ lineHeight: 1.8 }}>
                                Tracking your cycle isn't just about knowing when your period starts.
                                It's a vital sign of your overall health. Irregular cycles can indicate hormonal imbalances,
                                stress, or other underlying conditions.
                            </Typography>
                        </section>

                        <section id="cycle-phases" className="mb-5">
                            <Typography variant="h4" component="h2" gutterBottom className="fw-bold mb-4" sx={{ fontFamily: 'var(--font-heading)' }}>
                                The 4 Phases of Your Cycle
                            </Typography>

                            <div className="row g-4">
                                {[
                                    { title: 'Menstrual Phase', days: 'Days 1-5', color: '#f7cac9', desc: 'The uterus sheds its lining. Energy levels may be lower.' },
                                    { title: 'Follicular Phase', days: 'Days 1-13', color: '#e0f2f1', desc: 'The body prepares to release an egg. Estrogen rises, boosting energy.' },
                                    { title: 'Ovulation Phase', days: 'Day 14', color: '#fff9c4', desc: 'An egg is released. You are most fertile during this time.' },
                                    { title: 'Luteal Phase', days: 'Days 15-28', color: '#f3e5f5', desc: 'The body prepares for possible pregnancy. PMS symptoms may occur.' }
                                ].map((phase, index) => (
                                    <div className="col-md-6" key={index}>
                                        <div className="p-4 h-100 rounded-4" style={{ backgroundColor: phase.color }}>
                                            <Typography variant="overline" display="block" sx={{ fontWeight: 700, letterSpacing: 1 }}>
                                                {phase.days}
                                            </Typography>
                                            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                                                {phase.title}
                                            </Typography>
                                            <Typography variant="body2">
                                                {phase.desc}
                                            </Typography>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section id="faq" className="mb-5">
                            <Typography variant="h4" component="h2" gutterBottom className="fw-bold mb-4" sx={{ fontFamily: 'var(--font-heading)' }}>
                                Common Questions
                            </Typography>
                            <div className="accordion" id="faqAccordion">
                                <div className="accordion-item border-0 mb-3 shadow-sm rounded-3 overflow-hidden">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button fw-bold collapsed bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#faq1">
                                            Is a 30-day cycle normal?
                                        </button>
                                    </h2>
                                    <div id="faq1" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                        <div className="accordion-body text-secondary">
                                            Yes! A "normal" cycle can range anywhere from 21 to 35 days. Consistency is more important than the exact number.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item border-0 mb-3 shadow-sm rounded-3 overflow-hidden">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button fw-bold collapsed bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#faq2">
                                            Can stress affect my period?
                                        </button>
                                    </h2>
                                    <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                        <div className="accordion-body text-secondary">
                                            Absolutely. High stress levels can disrupt the hormones that regulate your cycle, leading to late or missed periods.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* Sidebar Column */}
                    <div className="col-lg-4 d-none d-lg-block">
                        <Sidebar />
                    </div>
                </div>
            </Container>
        </>
    );
};

export default Home;
