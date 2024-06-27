import React from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography, Container, Button } from '@mui/material';
import { projects } from '../data/projects';
import {keyframes, styled} from '@mui/material/styles';
import AnimatedHeader from '../components/AnimatedHeader';

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

const StyledContainer = styled(Container)(({ theme }) => ({
    marginTop: theme.spacing(8),
    fontFamily: 'Poppins, sans-serif',
    padding: theme.spacing(2),
    paddingTop: theme.spacing(5)
}));

const ProjectImage = styled('img')(({ theme }) => ({
    width: '40%',
    height: '40%',
    maxWidth: '600px', // Limit the maximum width
    borderRadius: '100px',
    marginBottom: theme.spacing(4),
    border: '5px solid #006400', // Add a border with the desired color
}));

const StyledButton = styled(Button)(({ theme }) => ({
    animation: `${fadeIn} 0.5s ease-in-out`,
    textTransform: 'none',
    color: '#fff',
    backgroundColor: '#006400',
    fontSize: '1rem',
    fontWeight: 'bold',
    fontFamily: 'Poppins, sans-serif',
    padding: theme.spacing(1, 4),
    borderRadius: '30px',
    transition: 'all 0.3s ease-in-out',
    '&:hover': {
        backgroundColor: '#004d00',
        transform: 'scale(1.1)',
    },
}));

const ProjectDetail: React.FC = () => {
    const { projectId } = useParams<{ projectId: string }>();
    const project = projects.find((proj) => proj.projectId === projectId);

    if (!project) {
        return (
            <StyledContainer>
                <Typography variant="h4" color="error" sx={{ fontFamily: 'Poppins, sans-serif' }}>
                    Project not found
                </Typography>
            </StyledContainer>
        );
    }

    return (
        <StyledContainer>
            <AnimatedHeader
                text={project.title}
                variant="header"
            />
            <Box display="flex" justifyContent="left" marginBottom={2}>
                <StyledButton href={"#/my-work"}>Back To All Projects</StyledButton>
            </Box>
            <Box display="flex" justifyContent="center">
                <ProjectImage src={project.image} alt={project.title} />
            </Box>
            <Typography
                variant="body1"
                paragraph
                sx={{ fontFamily: 'Poppins, sans-serif', fontSize: '1rem', color: '#006400' }}
            >
                <strong>{project.description}</strong>
            </Typography>
            <Typography
                variant="body1"
                paragraph
                sx={{ fontFamily: 'Poppins, sans-serif', fontSize: '1rem', color: '#006400' }}
            >
                {project.details}
            </Typography>
            <Typography
                variant="body2"
                color="textSecondary"
                paragraph
                sx={{ fontFamily: 'Poppins, sans-serif', fontSize: '1rem', color: '#006400' }}
            >
                <strong>Technologies used:</strong> {project.mainTech.join(', ')}
            </Typography>
            <Typography
                variant="body2"
                color="textSecondary"
                sx={{ fontFamily: 'Poppins, sans-serif', fontSize: '1rem', color: '#006400' }}
            >
                <strong>Created:</strong> {project.creationDate}
            </Typography>
        </StyledContainer>
    );
};

export default ProjectDetail;
