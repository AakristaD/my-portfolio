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
        <AboutContainer>
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
                    Over the past few years, I've been honing my skills in various areas of computer science, including front-end development, back-end development, and data science.
                </StyledTypography>
                <StyledTypography variant="body1" gutterBottom>
                    These days, I am focused on completing my degree and working on projects that allow me to apply my skills in real-world scenarios.
                </StyledTypography>
            </Section>
            <Section>
                <StyledTypography variant="h4" gutterBottom>
                    Work Experience
                </StyledTypography>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Box>
                            <StyledTypography variant="h6">Senior Product Designer</StyledTypography>
                            <StyledTypography variant="subtitle1">GiveDirectly</StyledTypography>
                            <StyledTypography variant="body2">2022 - Present</StyledTypography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box>
                            <StyledTypography variant="h6">Senior Product Designer</StyledTypography>
                            <StyledTypography variant="subtitle1">Help Scout</StyledTypography>
                            <StyledTypography variant="body2">2015 - 2023</StyledTypography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box>
                            <StyledTypography variant="h6">Design Consultant</StyledTypography>
                            <StyledTypography variant="subtitle1">Freelance</StyledTypography>
                            <StyledTypography variant="body2">2012 - 2022</StyledTypography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box>
                            <StyledTypography variant="h6">Design / Dev</StyledTypography>
                            <StyledTypography variant="subtitle1">Dotfusion</StyledTypography>
                            <StyledTypography variant="body2">2010 - 2014</StyledTypography>
                        </Box>
                    </Grid>
                </Grid>
            </Section>
            <Section>
                <StyledTypography variant="h4" gutterBottom>
                    Let's Collaborate
                </StyledTypography>
                <StyledTypography variant="body1" gutterBottom>
                    I believe we should leave this Earth as good as or better than we found it for future generations; my goal is to contribute to those ideals in whatever way I can. If you feel the same, I'd love to talk.
                </StyledTypography>
            </Section>
            <Section>
                <StyledTypography variant="h4" gutterBottom>
                    Personal Principles
                </StyledTypography>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <StyledTypography variant="h6">Make it</StyledTypography>
                        <StyledTypography variant="body2">I sketch wireframes and make prototypes...</StyledTypography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <StyledTypography variant="h6">Collaborate</StyledTypography>
                        <StyledTypography variant="body2">Good design is not created in a vacuum...</StyledTypography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <StyledTypography variant="h6">Accessible FTW</StyledTypography>
                        <StyledTypography variant="body2">I aim to make everything I design accessible...</StyledTypography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <StyledTypography variant="h6">Keep experimenting</StyledTypography>
                        <StyledTypography variant="body2">Everything I create is subject to change and experimentation...</StyledTypography>
                    </Grid>
                </Grid>
            </Section>
            <Section>
                <StyledTypography variant="h4" gutterBottom>
                    A Bit About Me
                </StyledTypography>
                <StyledTypography variant="body1" gutterBottom>
                    Before I stepped into the world of computer science, I was always curious about technology...
                </StyledTypography>
                <StyledTypography variant="body1" gutterBottom>
                    Outside of work and studies, I enjoy playing badminton, spending time with family, and exploring new places.
                </StyledTypography>
            </Section>
        </AboutContainer>
    );
}

export default About;
