import React from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography, Container } from '@mui/material';
import { projects } from '../data/projects';
import { styled } from '@mui/material/styles';
import AnimatedHeader from '../components/AnimatedHeader';

const StyledContainer = styled(Container)(({ theme }) => ({
    marginTop: theme.spacing(8),
    fontFamily: 'Poppins, sans-serif',
    padding: theme.spacing(2),
    paddingTop: theme.spacing(5)
}));

const ProjectImage = styled('img')(({ theme }) => ({
    width: '40%',
    height:'40%',
    maxWidth: '600px', // Limit the maximum width
    borderRadius: '100px',
    marginBottom: theme.spacing(4),
    border: '5px solid #006400', // Add a border with the desired color
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
            <Box display="flex" justifyContent="center">
                <ProjectImage src={project.image} alt={project.title} />
            </Box>
            <Typography
                variant="body1"
                paragraph
                sx={{ fontFamily: 'Poppins, sans-serif', fontSize: '1rem', color: '#006400' }}
            >
                {project.description}
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
