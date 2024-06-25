import React from 'react';
import { Typography, Box, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import AnimatedHeader from '../components/AnimatedHeader';
import AnimatedImage from '../components/AnimatedImage';
import meImage from '../static/images/Me.png';

const AboutContainer = styled(Box)(({ theme }) => ({
    background: 'linear-gradient(270deg, #f1f4db, #c3ddc3, #ffddd1, #f1f4db)',
    backgroundSize: '800% 800%',
    animation: 'gradient 30s ease infinite',
    padding: theme.spacing(4),
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Poppins, sans-serif',
}));

const ContentGrid = styled(Grid)(({ theme }) => ({
    width: '100%',
    maxWidth: '1200px', // Ensures it doesn't get too wide on large screens
    padding: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
    },
}));

const Section = styled(Box)(({ theme }) => ({
    padding: theme.spacing(4),
    width: '100%',
    [theme.breakpoints.up('md')]: {
        width: '60%',
    },
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
    color: '#006400', // Dark green color for text
    fontFamily: 'Poppins, sans-serif',
}));

function About() {
    return (
        <AboutContainer sx={{paddingTop: 15}}>
            <ContentGrid container spacing={2} alignItems="center">
                <Grid item xs={12} md={6}>
                    <Box display="flex" justifyContent="center">
                        <AnimatedImage
                            image={meImage}
                            alt="Aakrista Dahal"
                            sx={{
                                width: { xs: '100%', sm: '80%', md: '60%' },
                                height: 'auto',
                            }}
                        />
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box display="flex" flexDirection="column" alignItems={{ xs: 'center', md: 'flex-start' }} justifyContent="center">
                        <AnimatedHeader text="I'm Aakrista." variant="header" />
                        <AnimatedHeader text="A Computer Science Student based in Christchurch, New Zealand." variant="subheader" />
                    </Box>
                </Grid>
            </ContentGrid>
            <Section>
                <StyledTypography variant="h5" gutterBottom>
                    Over the past few years, I've been improving my skills in various areas of software development, including front-end development, back-end development, and also sometimes a little bit of data science.
                </StyledTypography>
                <StyledTypography variant="body1" gutterBottom>
                    These days, I am focused on completing my degree and working on projects that allow me to apply my skills in real-world scenarios.
                </StyledTypography>
            </Section>
            <Section>
                <StyledTypography variant="h4" gutterBottom>
                    A Bit About Me
                </StyledTypography>
                <StyledTypography variant="body1" gutterBottom>
                    Before beginning my Computer Science journey at UC, I was always fascinated by computers, apps, games—essentially, anything tech-related. I love building my own PCs and designing new and exciting software projects.
                </StyledTypography>
                <StyledTypography variant="body1" gutterBottom>
                    Outside of work and studies, I enjoy being actively involved in the Nepalese community here in Christchurch, often organizing events and participating in various activities. You can also find me on the badminton courts, working up a sweat, as I have a great passion for the sport.                </StyledTypography>
            </Section>
            <Section>
                <StyledTypography variant="h4" gutterBottom>
                    Let's Collaborate
                </StyledTypography>
                <StyledTypography variant="body1" gutterBottom>
                    My goal is to create innovative solutions for common challenges, working alongside like-minded individuals to make a positive impact.                </StyledTypography>
            </Section>
            <Section>
                <StyledTypography variant="h4" gutterBottom>
                    Personal Principles
                </StyledTypography>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <StyledTypography variant="h6">Listen and Not Just Hear</StyledTypography>
                        <StyledTypography variant="body2">
                            Effective communication is key to solving any problem. I prioritize active listening to fully comprehend the needs and concerns of others. By engaging in meaningful dialogue, I ensure that all perspectives are considered and valued, leading to better, more informed decisions.
                        </StyledTypography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <StyledTypography variant="h6">Work for a Purpose</StyledTypography>
                        <StyledTypography variant="body2">
                            Every action should have a meaningful goal. I dedicate myself to working on projects that have a clear, positive impact. This purpose-driven approach ensures that my efforts contribute to making a difference, whether it’s through innovative solutions, community involvement, or advancing technology.
                        </StyledTypography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <StyledTypography variant="h6">Just Get Started</StyledTypography>
                        <StyledTypography variant="body2">
                            Procrastination can be a major barrier to progress. I believe in taking the first step, even when the path isn’t entirely clear. By starting a project and iterating along the way, I can overcome inertia and build momentum towards achieving my goals.
                        </StyledTypography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <StyledTypography variant="h6">Make a Product You Are Proud Of</StyledTypography>
                        <StyledTypography variant="body2">
                            Quality and pride in one’s work are non-negotiable. I strive to create products and solutions that meet high standards of excellence. This means paying attention to detail, refining my work continuously, and ensuring that the final outcome is something I can be genuinely proud of.
                        </StyledTypography>
                    </Grid>
                </Grid>
            </Section>

            <Section>
                <StyledTypography variant="h4" gutterBottom>
                    Work Experience
                </StyledTypography>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Box>
                            <StyledTypography variant="h6">Engineering Assistant</StyledTypography>
                            <StyledTypography variant="subtitle1">Dairy Works</StyledTypography>
                            <StyledTypography variant="body2">February 2020 - February 2021</StyledTypography>
                            <StyledTypography variant="body2">
                                Assisted in various engineering projects, providing support in design, development, and implementation of technical solutions. Gained hands-on experience with machinery and quality control processes, ensuring the efficient operation of production lines.
                            </StyledTypography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box>
                            <StyledTypography variant="h6">Customer Service Representative</StyledTypography>
                            <StyledTypography variant="subtitle1">New World</StyledTypography>
                            <StyledTypography variant="body2">February 2021 - February 2022</StyledTypography>
                            <StyledTypography variant="body2">
                                Provided exceptional customer service, handling inquiries and resolving issues efficiently. Managed transactions, maintained product displays, and ensured a welcoming shopping environment. Developed strong communication skills and a customer-focused approach.
                            </StyledTypography>
                        </Box>
                    </Grid>
                </Grid>
            </Section>
        </AboutContainer>
    );
}

export default About;
