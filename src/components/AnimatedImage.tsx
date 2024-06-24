import React from 'react';
import { CardMedia, CardMediaProps } from '@mui/material';
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

const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
    borderRadius: 100,
    width: 400,
    height: 400,
    objectFit: 'cover',
    animation: `${fadeIn} 1s ease-in-out`,
}));

interface AnimatedImageProps extends CardMediaProps {
    image: string;
    alt: string;
}

const AnimatedImage: React.FC<AnimatedImageProps> = ({ image, alt, ...props }) => {
    return <StyledCardMedia component="img" image={image} {...props} />;
};

export default AnimatedImage;
