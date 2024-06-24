import React from 'react';
import { Box, Container, Grid } from '@mui/material';
import ProjectCard from '../components/ProjectCard';
import testImage from '../static/images/test.png'; // Import the image
import project2 from '../static/images/project2.png';
import { styled } from '@mui/material/styles';
import AnimatedHeader from '../components/AnimatedHeader';

const Projects: React.FC = () => {
    const projects = [
        {
            projectId: '1',
            title: 'Project 1',
            description: 'Description of project 1',
            image: testImage,
            mainTech: ['React', 'Java'],
            creationDate: 'November 2022'
        },
        {
            projectId: '2',
            title: 'Project 2',
            description: 'Description of project 2',
            image: project2,
            mainTech: ['Node.js', 'Express'],
            creationDate: 'September 2024'
        },
        {
            projectId: '1',
            title: 'Project 1',
            description: 'Description of project 1',
            image: testImage,
            mainTech: ['React', 'Java'],
            creationDate: 'November 2022'
        },
        {
            projectId: '2',
            title: 'Project 2',
            description: 'Description of project 2',
            image: project2,
            mainTech: ['Node.js', 'Express'],
            creationDate: 'September 2024'
        }
        // Add more projects as needed
    ];

    const HeaderSection = styled(Box)(({ theme }) => ({
        textAlign: 'center',
        marginBottom: theme.spacing(4),
    }));

    return (
        <Container sx={{paddingTop: 15}}>
            <HeaderSection>
                <AnimatedHeader text="A glimpse into some projects." variant="header" />
                <AnimatedHeader text="Projects I completed for university, personal learning, and occasionally just for fun." variant="subheader" />
            </HeaderSection>
            <Grid container spacing={3}>
                {projects.map((project) => (
                    <Grid item xs={12} sm={3} md={6} key={project.projectId}>
                        <ProjectCard project={project} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default Projects;
