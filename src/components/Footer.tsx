import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer: React.FC = () => {
    return (
        <Box mt={5} py={3} textAlign="center">
            <Typography variant="body2" fontFamily={'Poppins, sans-serif'}>
                © 2024 Aakrista Dahal.
            </Typography>
        </Box>
    );
};

export default Footer;
