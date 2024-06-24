import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

const StyledContainer = styled(Container)(({ theme }) => ({
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
}));

const ErrorTypography = styled(Typography)(({ theme }) => ({
    fontSize: '6rem',
    fontWeight: 'bold',
    marginBottom: theme.spacing(2),
    color: theme.palette.primary.main,
}));

const MessageTypography = styled(Typography)(({ theme }) => ({
    fontSize: '1.5rem',
    marginBottom: theme.spacing(4),
}));

const NotFound = () => {
    const navigate = useNavigate();

    const handleGoHome = () => {
        navigate('/');
    };

    return (
        <StyledContainer>
            <ErrorTypography>404</ErrorTypography>
            <MessageTypography>
                Oops! The page you are looking for does not exist.
            </MessageTypography>
            <Button variant="contained" color="primary" href="/">
                Go to Home
            </Button>
        </StyledContainer>
    );
};

export default NotFound;
