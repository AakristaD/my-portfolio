export const projects = [
    {
        projectId: '1',
        title: 'Gardeners Grove',
        description: 'A group project done in a group of eight developers for the course SENG302',
        image: require('../static/images/gardenGrove.webp'), // Update with actual image path
        details: 'Gardeners Grove is a comprehensive gardening platform developed as part of a group project for SENG302. The project involved eight developers and focused on creating a user-friendly platform for gardeners to share tips, track their gardening progress, and connect with other gardening enthusiasts. Technologies used include Java, Spring Boot, and Thymeleaf for the backend, with a responsive front-end built using React and Material-UI.',
        mainTech: ['Java', 'Spring', 'JS'],
        creationDate: 'Started February 2024',
    },
    {
        projectId: '2',
        title: 'Petition Website (Frontend)',
        description: 'Front end for a petition-based website, the backend was done in a previous project.',
        image: require('../static/images/petition.png'), // Update with actual image path
        details: 'The Petition Website project focuses on building a responsive and interactive front-end for a petition platform. The backend for this platform was developed in a previous project. The front-end leverages React for building user interfaces, TypeScript for type safety, and Material-UI for consistent and accessible design. Key features include user authentication, petition creation, and signature collection.',
        mainTech: ['React', 'TS', 'CSS', 'MUI'],
        creationDate: 'May 2024',
    },
    {
        projectId: '3',
        title: 'RESTful API',
        description: 'An API made for the Petition Website. Created for the course SENG365 using rigorous API methodologies and testing.',
        image: require('../static/images/restfulAPI.png'), // Update with actual image path
        details: 'The RESTful API project involved creating a robust and scalable API for the Petition Website. Developed as part of the SENG365 course, this API follows REST principles and includes extensive documentation and testing. The project utilizes TypeScript for strong typing, Java for server-side logic, and Postman for API testing. Key features include CRUD operations for petitions, user authentication, and secure data handling.',
        mainTech: ['TS', 'Java', 'Postman'],
        creationDate: 'March 2024',
    },
    {
        projectId: '4',
        title: 'Java Card Game',
        description: 'A Basketball themed card game made alongside another student for the course SENG201',
        image: require('../static/images/swing.png'), // Update with actual image path
        details: 'The Java Card Game is a basketball-themed card game developed in collaboration with another student for the SENG201 course. The game involves strategic gameplay where players use cards representing basketball moves to outplay their opponents. It was built using Java and Swing for the graphical user interface. This project provided valuable experience in game development and GUI programming.',
        mainTech: ['Java', 'Swing'],
        creationDate: 'May 2023',
    },
    {
        projectId: '5',
        title: 'Endless Runner',
        description: 'A game made in Unity using C#. I was playing Subway Surfers and wanted to create something similar of my own',
        image: require('../static/images/runner.png'), // Update with actual image path
        details: 'The Endless Runner game is inspired by popular games like Subway Surfers. Developed using Unity and C#, this project involved designing an engaging and fast-paced endless runner game where players navigate through various obstacles. Blender was used for creating 3D models and animations. This project helped in gaining experience with game development, 3D modeling, and C# programming.',
        mainTech: ['Unity', 'Blender', 'C#'],
        creationDate: 'October 2022',
    },
];
