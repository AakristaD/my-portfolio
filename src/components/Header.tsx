import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { styled, alpha } from '@mui/material/styles';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
    backgroundColor: alpha('#ffffff', .9), // Light translucent white
    borderRadius: '50px',
    margin: '10px auto',
    maxWidth: '800px',
    boxShadow: 'none',
    position: 'fixed',
    top: '10px', // Adjust this value as needed
    left: '50%',
    transform: 'translateX(-50%)',
    width: '80%', // Make it responsive; adjust width as needed
    zIndex: 1300, // Ensure it's above other content
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-around',
    padding: '0 30px',
}));

const StyledButton = styled(Button)(({ theme }) => ({
    textTransform: 'none',
    color: '#003900',
    fontSize: '1.1rem', // Increase the font size
    fontWeight: "-moz-initial", // Make the font bold
    fontFamily: 'Poppins, sans-serif',
    transition: 'all 0.3s ease-in-out', // Add transition for smooth scaling and border-radius change
    '&:hover': {
        backgroundColor: alpha('#def0ff', 0.3),
        borderRadius: '30px', // Increase the border-radius on hover
        transform: 'scale(1.1)', // Scale up the button on hover
        border: '2px solid #333', // Add a border on hover
    },
}));

function Header() {
    return (
        <StyledAppBar position="fixed">
            <StyledToolbar>
                <StyledButton href="/">Home</StyledButton>
                <StyledButton href="/my-work">My Work</StyledButton>
                <StyledButton href="/about-me">About Me</StyledButton>
                <StyledButton href="/contact">Contact Me</StyledButton>
            </StyledToolbar>
        </StyledAppBar>
    );
}

export default Header;
