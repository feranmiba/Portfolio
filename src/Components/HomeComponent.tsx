import React from 'react'
import Profile from '../Image/pic2-removebg-preview.png'
import AnimatedSection from '../utils/AnimationSection'
import WordCycler from '../utils/WordCycler'
import { FaGithub, FaFacebook, FaLinkedin } from 'react-icons/fa';
import { SiX } from 'react-icons/si';
import { motion } from 'framer-motion'
import WhatsAppLink from '../utils/WhatsappLink';

function HomeComponent() {

  
  const contactRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    // Scroll to the contact section when the component mounts
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);


    const words = ['Frontend Developer', 'Mobile Developer', 'Backend Developer'];
    const duration = 3000;

    const animationVariants = {
        left: {
          x: 0, // Move to the left (in pixels)
          transition: {
            type: 'spring',
            stiffness: 5,
            damping: 5,
            repeat: Infinity,
            repeatType: 'reverse' as const, // Use 'as const' for literal types
            duration: 3,
          },
        },
        right: {
          x: -30, // Move to the right (in pixels)
          transition: {
            type: 'spring',
            stiffness: 10,
            damping: 5,
            repeat: Infinity,
            repeatType: 'reverse' as const, // Use 'as const' for literal types
            duration: 3,
          },
        },
      };


  return (

        <div className=' dark:bg-[#252025] dark:text-white h-[120vh] md:h-[110vh]' ref={contactRef}>
            
            <section className='flex justify-center px-5 lg:px-32   gap-10 flex-wrap md:flex-nowrap'>
                <AnimatedSection animationType='left'>
            <motion.div      variants={animationVariants}
            initial="left"
            animate={['left', 'right']} >
            <img src={Profile} className='object-contain ' alt="profile" />  
            </motion.div>
            </AnimatedSection>

            <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          className='self-center mt-10 md:w-[75%] lg:w-[60%] h-[10vh] text-start space-y-6'
        >
          <div className=' text-4xl font-medium'>
            <WordCycler words={words} duration={duration} />
          </div>
             
<p className='font-semibold'>Results-Driven Full Stack Web & Mobile Developer</p>
<p>I specialize in building and managing websites, web applications, and mobile applications that drive product success. With expertise in both backend and frontend development, I deliver robust solutions that enhance user experience and optimize performance across all platforms.</p>

                    <div className="flex space-x-4 dark:text-white mt-5">
      <a href="https://github.com/feranmiba" target="_blank" rel="noopener noreferrer">
        <FaGithub className="text-gray-700 hover:text-black dark:text-white" size={20} />
      </a>
      <a href="https://web.facebook.com/amiola.emmanuel.5" target="_blank" rel="noopener noreferrer">
        <FaFacebook className="text-gray-700 hover:text-blue-600 dark:text-white" size={20} />
      </a>
      <a href="https://www.linkedin.com/in/amiola-demilade-5a46801a8/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="text-gray-700 hover:text-blue-700 dark:text-white" size={20} />
      </a>
      <a href="https://x.com/emmanuel_amiola" target="_blank" rel="noopener noreferrer">
        <SiX className="text-gray-700 hover:text-blue-400 dark:text-white" size={20} />
      </a>
    </div>

            </motion.div>
            </section>

         
         <WhatsAppLink />

        </div>
  )
}

export default HomeComponent
