import { FaHtml5, FaCss3Alt, FaJs, FaNodeJs } from 'react-icons/fa';
import { SiTypescript, SiReact, SiReactrouter, SiFramer, SiPostgresql, SiMongodb, SiNextdotjs } from 'react-icons/si';
import Easy from '../Image/easyLearning.png'
import Artica from '../Image/artica.png'
import Fit from '../Image/getFit.png'

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
        role: "Fullstack Web & Mobile Developer",
        company: "Ullweb",
        time: "June 2024 - current",
        responsibilities: [
            "Assisted in developing responsive web applications using HTML, CSS, and JavaScript.",
            "Collaborated with designers to implement user-friendly interfaces and improve UX.",
            "Participated in code reviews and contributed to team knowledge sharing.",
            "Maintained and updated existing applications to enhance performance and usability.",
            "Learned and utilized frameworks like React to build dynamic web components.",
            "Engaged in team meetings to discuss project progress and propose enhancements."
        ]
    }
]

export const Portfolios = [
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