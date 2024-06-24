import React from 'react';
import { Typography } from '@mui/material';
import { styled, keyframes } from '@mui/material/styles';

const fadeIn = keyframes`
    0% {
        opacity: 0;
        transform: translateY(-20px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
`;

const AnimatedLargeHeaderText = styled(Typography)(({ theme }) => ({
    fontSize: '9rem', // Default large font size
    fontWeight: 'bold',
    fontFamily: 'Poppins, sans-serif',
    marginBottom: theme.spacing(2),
    animation: `${fadeIn} 1s ease-in-out`,
    color: '#004000', // Dark green color for large header
    [theme.breakpoints.down('md')]: {
        fontSize: '4rem', // Smaller font size for medium screens
    },
    [theme.breakpoints.down('sm')]: {
        fontSize: '2.5rem', // Smaller font size for small screens
    },
}));

const AnimatedHeaderText = styled(Typography)(({ theme }) => ({
    fontSize: '4rem',
    fontWeight: 'bold',
    fontFamily: 'Poppins, sans-serif',
    marginBottom: theme.spacing(2),
    animation: `${fadeIn} 1s ease-in-out`,
    color: '#005300', // Dark green color
    [theme.breakpoints.down('md')]: {
        fontSize: '3rem', // Smaller font size for medium screens
    },
    [theme.breakpoints.down('sm')]: {
        fontSize: '2rem', // Smaller font size for small screens
    },
}));

const AnimatedSubHeaderText = styled(Typography)(({ theme }) => ({
    fontSize: '1.5rem',
    fontFamily: 'Poppins, sans-serif',
    animation: `${fadeIn} 1.5s ease-in-out`,
    color: '#006400', // Dark green color
    [theme.breakpoints.down('md')]: {
        fontSize: '1.2rem', // Smaller font size for medium screens
    },
    [theme.breakpoints.down('sm')]: {
        fontSize: '1rem', // Smaller font size for small screens
    },
}));

interface AnimatedHeaderProps {
    text: string;
    variant: 'largeHeader' | 'header' | 'subheader';
}

const AnimatedHeader: React.FC<AnimatedHeaderProps> = ({ text, variant }) => {
    switch (variant) {
        case 'largeHeader':
            return <AnimatedLargeHeaderText>{text}</AnimatedLargeHeaderText>;
        case 'header':
            return <AnimatedHeaderText>{text}</AnimatedHeaderText>;
        case 'subheader':
            return <AnimatedSubHeaderText>{text}</AnimatedSubHeaderText>;
        default:
            return null;
    }
};

export default AnimatedHeader;
