import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import AnimatedHeader from '../components/AnimatedHeader';
import AnimatedImage from '../components/AnimatedImage';
import testImage from '../static/images/test.png'; // Replace with your actual image paths
import project2 from '../static/images/gardenGrove.webp';
import ProjectCard from "../components/ProjectCard";
import petitions from '../static/images/petition.png';


const HomeContainer = styled(Box)(({ theme }) => ({
    background: 'linear-gradient(270deg, #f1f4db, #c3ddc3, #ffddd1, #f1f4db)',
    backgroundSize: '800% 800%',
    animation: 'gradient 30s ease infinite',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(4),
    fontFamily: 'Poppins, sans-serif',
}));

const DescriptionBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: theme.spacing(2),
    color: '#006400', // Dark green color
    fontFamily: 'Poppins, sans-serif', // Poppins font
}));

const ImageDescriptionContainer = styled(Grid)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(4),
    [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
    },
}));

const StyledImageBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    padding: theme.spacing(2),
    img: {
        borderRadius: '15px',
        width: '100%',
        maxWidth: '500px', // Maximum width for larger screens
        height: 'auto',
    },
}));

const Home: React.FC = () => {
    const projects = [
        {
            projectId: '1',
            title: 'Gardeners Grove',
            description: 'A group project done in a group of eight developers for the course SENG302',
            image: project2,
            mainTech: ['Java','Spring',"JS" ],
            creationDate: 'Started February 2024'
        }
        ,
        {
            projectId: '2',
            title: 'Petition Website (Frontend)',
            description: 'Front end for a petition based website, the backend was done in a previous project.',
            image: petitions,
            mainTech: ['React', 'TS', "CSS", "MUI"],
            creationDate: 'May 2024'

        },
        // Add more projects as needed
    ];

    return (
        <HomeContainer>
            <AnimatedHeader text="Hi. I'm Aakrista." variant="largeHeader"/>
            <AnimatedHeader text="A 3rd year computer science student" variant="header"/>
            <AnimatedHeader
                text="I'm a final year student at University of Canterbury, passionate about all things tech."
                variant="subheader"/>
            <hr style={{border: 'none', borderTop: '2px solid black', margin: '32px 0'}}/>
            <AnimatedHeader text="Featured Projects" variant='subheader'/>
            <hr style={{border: 'none', borderTop: '2px solid black', margin: '32px 0'}}/>

            <Grid container spacing={4} justifyContent="center" alignItems="center">
                {projects.map((project) => (
                    <Grid item xs={2} sm={3} md={4} key={project.projectId}>
                        <ProjectCard project={project} />
                    </Grid>
                ))}
            </Grid>

        </HomeContainer>
    );
};

export default Home;
