import * as React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardActionArea, CardContent, CardMedia, Typography, Chip } from '@mui/material';
import { styled } from '@mui/material/styles';

interface ProjectCardProps {
    project: {
        projectId: string;
        title: string;
        description: string;
        image: string;
        mainTech: string[];
        creationDate: string;
    };
}

const StyledCard = styled(Card)(({ theme }) => ({
    border: '2px solid black',
    borderRadius: 30,
    transition: 'transform 0.3s ease-in-out',
    '&:hover': {
        transform: 'scale(1.05)',
    },
}));

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    return (
        <Link to={`/project/${project.projectId}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <StyledCard variant="outlined">
                <CardActionArea>
                    <CardMedia
                        sx={{ borderBottom: '2px solid black' }}
                        component="img"
                        height="200"
                        image={project.image}
                        alt={project.title}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="div" sx={{ fontSize: '1rem', fontWeight: 'bold' }}>
                            {project.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {project.description}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ marginTop: 1 }}>
                            {project.mainTech.map((tech) => (
                                <Chip key={tech} label={tech} sx={{ marginRight: 1, marginBottom: 1 }} />
                            ))}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ marginTop: 1 }}>
                            {project.creationDate}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </StyledCard>
        </Link>
    );
};

export default ProjectCard;
