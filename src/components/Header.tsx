import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { styled, alpha } from '@mui/material/styles';
import { useMediaQuery, useTheme, Box } from '@mui/material';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
    backgroundColor: alpha('#ffffff', 0.9), // Light translucent white
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
    [theme.breakpoints.down('sm')]: {
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        left: '10px',
        transform: 'none',
        margin: '10px',
    },
}));

const MenuIconStyled = styled(MenuIcon)(({ theme }) => ({
    color: '#003900',
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-around',
    padding: '0 30px',
    [theme.breakpoints.down('sm')]: {
        justifyContent: 'center',
        padding: '0',
    },
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
    const [drawerOpen, setDrawerOpen] = React.useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
        if (event.type === 'keydown' && ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')) {
            return;
        }
        setDrawerOpen(open);
    };

    const list = () => (
        <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <List>
                <ListItem button component="a" href="#/">
                    <ListItemText primary="Home" />
                </ListItem>
                <ListItem button component="a" href="#/my-work">
                    <ListItemText primary="My Work" />
                </ListItem>
                <ListItem button component="a" href="#/about-me">
                    <ListItemText primary="About Me" />
                </ListItem>
                <ListItem button component="a" href="#/contact">
                    <ListItemText primary="Contact Me" />
                </ListItem>
            </List>
        </Box>
    );

    return (
        <>
            <StyledAppBar position="sticky">
                <StyledToolbar>
                    {isMobile && (
                        <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
                            <MenuIconStyled />
                        </IconButton>
                    )}
                    {!isMobile && (
                        <>
                            <StyledButton href="#/">Home</StyledButton>
                            <StyledButton href="#/my-work">My Work</StyledButton>
                            <StyledButton href="#/about-me">About Me</StyledButton>
                            <StyledButton href="#/contact">Contact Me</StyledButton>
                        </>
                    )}
                </StyledToolbar>
            </StyledAppBar>
            <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
                {list()}
            </Drawer>
        </>
    );
}

export default Header;
