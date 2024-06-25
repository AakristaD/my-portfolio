import React from 'react';
import { Box, Container, Grid } from '@mui/material';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects'; // Import the projects data
import { styled } from '@mui/material/styles';
import AnimatedHeader from '../components/AnimatedHeader';

const HeaderSection = styled(Box)(({ theme }) => ({
    textAlign: 'center',
    marginBottom: theme.spacing(4),
}));

const Projects: React.FC = () => {
    return (
        <Container sx={{paddingTop: 15}}>
            <HeaderSection>
                <AnimatedHeader text="A glimpse into some projects." variant="header" />
                <AnimatedHeader text="Projects I completed for university, personal learning, and occasionally just for fun." variant="subheader" />
            </HeaderSection>
            <Grid container spacing={3}>
                {projects.map((project) => (
                    <Grid item xs={12} sm={6} md={4} key={project.projectId}>
                        <ProjectCard project={project} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default Projects;
