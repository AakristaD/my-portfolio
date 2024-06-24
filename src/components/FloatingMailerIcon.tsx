import React, { useState } from 'react';
import { Box, Fab, Modal, TextField, Button, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import MessageIcon from '@mui/icons-material/Message';

const FloatingButton = styled(Fab)(({ theme }) => ({
    position: 'fixed',
    bottom: theme.spacing(2),
    left: theme.spacing(2),
    zIndex: 1000,
    backgroundColor:"#005300"

}));

const modalStyle = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    borderRadius:10,
    boxShadow: 24,
    p: 4,
};

const FloatingMessageIcon: React.FC = () => {
    const [open, setOpen] = useState(false);
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleSubmit = async () => {
        // Call the backend API to send email
        const response = await fetch('/api/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, message }),
        });

        if (response.ok) {
            alert('Email sent successfully');
            handleClose();
        } else {
            alert('Failed to send email');
        }
    };

    return (
        <>
            <FloatingButton color="primary" onClick={handleOpen}>
                <MessageIcon />
            </FloatingButton>
            <Modal open={open} onClose={handleClose}>
                <Box sx={modalStyle}>
                    <Typography variant="h6" component="h2" color={"darkred"}>
                        In Progress...
                    </Typography>
                </Box>
            </Modal>
        </>
    );
};

export default FloatingMessageIcon;
