import React from 'react'
import { techIcons, Experience } from '../utils/Data'
import AnimatedSection from '../utils/AnimationSection'
import { AnimatePresence, motion } from 'framer-motion'
import WhatsAppLink from '../utils/WhatsappLink';

function AboutMe() {

    
  const contactRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    // Scroll to the contact section when the component mounts
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

    const [openIndex, setOpenIndex] = React.useState<number | null>(null);

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };


  return (
    <div className='dark:bg-[#252025] dark:text-white h-full' ref={contactRef}>

        <section className='text-start space-y-5 px-5 md:px-10 lg:px-24 py-10'>
        <h1 className='font-bold text-xl'> About Me</h1>  

        <p className='leading-10'>I’m a passionate full-stack web developer with over two years of professional experience, dedicated to creating exceptional user experiences through clean, responsive, and visually appealing web applications. My journey has been fueled by a commitment to staying current with the latest technologies and best practices.

        With hands-on experience in Web3 frontend technologies, I also specialize in building and integrating Web3 smart contracts. Currently, I work as a Full Stack/Mobile Developer at Ullweb, where I develop robust backends and scalable frontends. Previously, I completed an internship at Web3Bridge, further honing my skills in the evolving tech landscape.
        </p>

        <h1 className='font-bold text-xl'>Technologies</h1> 

        <div className='flex  flex-wrap gap-5 md:gap-5'>
            {techIcons.map((tech) => (
                <AnimatedSection animationType='slide'>
                <p className=' px-5 py-3 rounded dark:bg-[#130e] shadow-xl'>
                    {tech.icon}
                </p>
                </AnimatedSection>
            ))

            }
        </div>
        </section>

        <section className='text-start px-5 md:px-10 lg:px-24 py-10'>
        <h1 className='font-bold'>Experience</h1> 

        <section className='space-y-7'>
      {Experience.map((exp, index) => (
        <AnimatedSection animationType='zoom'>
        <div className='cursor-pointer dark:bg-[#1b1b1bee] shadow-xl px-5 py-5 rounded-lg space-y-2' key={index} onClick={() => handleToggle(index)}>
    <h1 className='font-poppin font-bold'>{exp.role}</h1>
    <p className='font-bold'>{exp.company} <span className='text-sm font-normal'>{exp.time}</span></p>
    {openIndex !== index && (
    <em className='text-sm'>Click for more details</em>
    )}

    <div className='flex gap-2'>
        <p className='dark:bg-white w-[0.1%] h-auto bg-black'></p>
        <div className='self-start'>
  
        <AnimatePresence>
        {openIndex === index && (
            <motion.div     initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}>
        <p>Responsibilities</p>
        <ul className='list-disc pl-5 text-sm '>
              {exp.responsibilities.map((res) =>(<li className='mt-4'>{res}</li>))}
        </ul>
            </motion.div>
   
     )}

        </AnimatePresence>
        </div>
            </div>
        </div>
        </AnimatedSection>
        ))}
        </section>

        </section>
        <WhatsAppLink />
    </div>
  )
}

export default AboutMe
