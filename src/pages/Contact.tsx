import React from 'react';
import { Box, Typography, Grid, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AnimatedHeader from '../components/AnimatedHeader';

const ContactContainer = styled(Box)(({ theme }) => ({
    background: 'linear-gradient(270deg, #f1f4db, #c3ddc3, #ffddd1, #f1f4db)',
    backgroundSize: '800% 800%',
    animation: 'gradient 30s ease infinite',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(2),
    fontFamily: 'Poppins, sans-serif',
    color: '#006400', // Dark green color
}));

const Section = styled(Box)(({ theme }) => ({
    padding: theme.spacing(1), // Reduced padding
    width: '100%',
    maxWidth: '800px',
    textAlign: 'center',
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
    fontFamily: 'Poppins, sans-serif',
    color: '#006400', // Dark green color
    margin: theme.spacing(1, 0),
}));

const ContactIconButton = styled(IconButton)(({ theme }) => ({
    color: '#006400', // Dark green color
    '&:hover': {
        color: '#004d00', // Slightly darker green on hover
    },
}));

const Contact: React.FC = () => {
    return (
        <ContactContainer>
            <Section>
                <AnimatedHeader text="Contact Me" variant="header" />
                <AnimatedHeader text="Hey, feel free to contact me by sending an email or follow me on LinkedIn, I won't bite I promise." variant="subheader" />
                <Grid container spacing={4} alignItems="center" justifyContent="center">
                    <Grid item>
                        <a href="mailto:aakrista21@gmail.com" style={{ textDecoration: 'none' }}>
                            <ContactIconButton>
                                <EmailIcon fontSize="large" sx={{ fontSize: '3rem' }} />
                            </ContactIconButton>
                        </a>
                        <StyledTypography variant="body1">aakrista21@gmail.com</StyledTypography>
                    </Grid>
                    <Grid item>
                        <a href="https://www.linkedin.com/in/aakrista" target="_blank" style={{ textDecoration: 'none' }}>
                            <ContactIconButton>
                                <LinkedInIcon fontSize="large" sx={{ fontSize: '3rem' }} />
                            </ContactIconButton>
                        </a>
                        <StyledTypography variant="body1">LinkedIn</StyledTypography>
                    </Grid>
                </Grid>
            </Section>
        </ContactContainer>
    );
};

export default Contact;
