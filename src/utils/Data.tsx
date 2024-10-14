import { FaHtml5, FaCss3Alt, FaJs, FaNodeJs } from 'react-icons/fa';
import { SiTypescript, SiReact, SiReactrouter, SiFramer, SiPostgresql, SiMongodb, SiNextdotjs } from 'react-icons/si';

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
