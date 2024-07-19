import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'COSMOS-E-HEALTHCARE APP',
        description: "An online E-consultation and E-commerce medical platform equipped with 24/7 Chatbot for medical guidance and end-to-end encrypted for patient medical history database management and booking online/offline appointments",
        tools: ['Express', 'MongoDB', 'NodeJS', 'HTML', 'CSS', 'AWS', 'DOCKER', 'Javascript'],
        role: 'Full-Stack Developer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'E-COMMERCE WEBSITE',
        description: 'Fully functioning E-Commerce portal created using MERN stack with admin interface , Redux Toolkit, Payment Gateway, E-mail system',
        tools: ['NextJS', 'Tailwind CSS', "Google Maps", "ReactJS", "TypeScript", "MongoDB", "AWS", "Redux","Express"],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'NEXHARE',
        description: 'An end-to-end open marketplace for minting real-time assets and tokenization of assets using Solidity,Nextjs,AWS.Through smart contracts and decentralized ledgers, ensuring that the history, authenticity, and ownership of each physical asset are immutable and verifiable.',
        tools: ['React', 'Redux', 'Node', 'Stripe', 'Express', 'TypeScript', 'MongoDB', 'Azure', 'OpenAI API', 'Replicate AI', 'JWT'],
        code: '',
        role: 'Frontend Developer',
        demo: '',
        image: realEstate,
    },
    {
        id: 4,
        name: 'Digital Supply Chain Management',
        description: "My team and I developed a newspaper management dashboard application called Newsroom Management. As a front-end developer, I worked on creating the dashboard using NextJS, Material UI, Redux, Calendar, and other necessary npm libraries. We used React Redux to manage the application's state and React-hook-form and Sun Editor to handle forms.",
        tools: ['NextJS', 'Material UI', 'Redux', 'Sun Editor', "Calendar"],
        code: '',
        demo: '',
        image: ayla,
        role: 'Full Stack Developer',
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },