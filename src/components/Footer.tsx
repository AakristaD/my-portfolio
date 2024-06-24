import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer: React.FC = () => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', backgroundColor: 'transparent' }}>
            <Typography variant="body2" fontFamily={'Poppins, sans-serif'}>
                © 2024 Aakrista Dahal.
            </Typography>
        </Box>
    );
};

export default Footer;
