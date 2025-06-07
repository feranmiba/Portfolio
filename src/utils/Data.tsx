import { FaHtml5, FaCss3Alt, FaJs, FaNodeJs } from 'react-icons/fa';
import { SiTypescript, SiReact, SiReactrouter, SiFramer, SiPostgresql, SiMongodb, SiNextdotjs, SiAdonisjs } from 'react-icons/si';
import Easy from '../Image/easyLearning.png'
import Artica from '../Image/artica.png'
import Fit from '../Image/getFit.png'
import Music from '../Image/music.png'
import Grantty from '../Image/grantty.png';
import veeKite from '../Image/veekite.png';

export const techIcons = [
  { name: 'HTML', icon: <FaHtml5 size={40} /> },
  { name: 'CSS', icon: <FaCss3Alt size={40} /> },
  { name: 'JavaScript', icon: <FaJs size={40} /> },
  { name: 'TypeScript', icon: <SiTypescript size={40} /> },
  { name: 'React', icon: <SiReact size={40} /> },
  { name: 'React Native', icon: <SiReactrouter size={40} /> }, // Placeholder icon
  { name: 'Framer Motion', icon: <SiFramer size={40} /> },
  { name: 'Next.js', icon: <SiNextdotjs size={40} /> }, // Using SiNextdotjs
  { name: 'Node.js', icon: <FaNodeJs size={40} /> },
  { name: 'PostgreSQL', icon: <SiPostgresql size={40} /> },
  { name: 'MongoDB', icon: <SiMongodb size={40} /> },
  { name: 'AdoniJs', icon: <SiAdonisjs size={40} /> },
];


export const Experience = [
    {
        role: "Frontend Developer Intern",
        company: "Web3bridge",
        time: "June 2024 - current",
        responsibilities: [
            "Assisted in developing responsive web applications using Javascript, Nextjs and Typescript",
            "Collaborated with designers to implement user-friendly interfaces and improve UX.",
            "Participated in code reviews and contributed to team knowledge sharing.",
            "Maintained and updated existing applications to enhance performance and usability.",
            "Learned and utilized frameworks like React to build dynamic web components.",
            "Engaged in team meetings to discuss project progress and propose enhancements.",
            "Collaborated with backend developers and implented the created APIs to the frontend."
        ]
    },
    {
        role: "Frontend Engineer",
        company: "SphiderAssWeb",
        time: "Feb 2025 - current",
        responsibilities: [
            "Developing and maintaining web applications using modern frameworks and technologies.",
            "Collaborating with cross-functional teams to create user-friendly and efficient applications.",
            "Integrating RESTful APIs for seamless communication between frontend and backend services.",
            "Conducting code reviews, implementing testing strategies, and ensuring high-quality code standards.",
            "Ensuring applications are responsive and perform well across a variety of devices and screen sizes.",
            "Using version control systems (like Git) for tracking changes and collaborating on code.",
            "Analyzing and improving application performance, addressing bottlenecks and enhancing user experience.",
            "Continuously researching and implementing emerging technologies and best practices in web  development.",
            "Identifying and fixing bugs, performance issues, and other technical challenges."
        ]
        
    },
    {
        role: "Fullstack Web & Mobile Developer",
        company: "Ullweb",
        time: "June 2024 - June 2025",
        responsibilities: [
            "Developing and maintaining web and mobile applications using modern frameworks and technologies.",
            "Collaborating with cross-functional teams to create user-friendly and efficient applications.",
            "Creating and integrating RESTful APIs for seamless communication between frontend and backend services.",
            "Designing and managing databases, ensuring data integrity and security, and optimizing query performance.",
            "Conducting code reviews, implementing testing strategies, and ensuring high-quality code standards.",
            "Ensuring applications are responsive and perform well across a variety of devices and screen sizes.",
            "Using version control systems (like Git) for tracking changes and collaborating on code.",
            "Analyzing and improving application performance, addressing bottlenecks and enhancing user experience.",
            "Continuously researching and implementing emerging technologies and best practices in web and mobile development.",
            "Identifying and fixing bugs, performance issues, and other technical challenges."
        ]
        
    }
]

export const Portfolios = [
    {
        image: Grantty,
        name: "Grantty",
        desc: "A platform designed to help small businesses discover and apply for grants, making funding more accessible to entrepreneurs and startups.",
        link: "https://grantty.com/"
    },    
    {
        image: Music,
        name: "Musician Portfolio",
        desc: "A responsive portfolio website for showcasing music, albums, and artist profiles. Built with modern web technologies and optimized for performance.",
        link: "https://youngboyjarred.netlify.app/"
    },    
    {
        image: veeKite,
        name: "Veekite",
        desc: "A modern website built for Veekite, an engineering company based in Nigeria, showcasing their services, projects, and expertise in delivering innovative engineering solutions.",
        link: "https://www.veekites.com/"
    },    
    {
        image: Easy,
        name: "Easy learning",
        desc: "Easy learning is an online platform which allows education to be accessible and affordable to everyone regardless of their geographical area. This is a website created with the vision of helping everyone learn any subject all round the world.",
        link: "https://learn2024.netlify.app/"
    },
    {
        image: Artica,
        name: "artica",
        desc: "Artica is web3 art website which is built with the vison exposing African cultures to the world using blockchain technologies. This software appreciates African artefacts and endeavors to bring it to limelight with the exposition of the blockchain technology.",
         link: "https://artica-explore.netlify.app/"
    },
    {
        image: Fit,
        name: "get-fit",
        desc: "Get fit is a free template which i built for fittness and gym business. It is a website which givs tips on how to improve ones body and also keeping fit.",
         link: "https://get-fitted.netlify.app/"
    }
]