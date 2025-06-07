import React from 'react'
import { Portfolios } from '../utils/Data'
import { Link } from 'react-router-dom'
import WhatsAppLink from '../utils/WhatsappLink';

function Portfolio() {
  
  const contactRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    // Scroll to the contact section when the component mounts
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);


  return (
    <div className='dark:bg-[#252025] dark:text-white md:h-[110vh]' ref={contactRef}>

      <section className='px-5 md:px-10 lg:px-24 mt-10 mb-2'>

      <section className='flex justify-between gap-5 flex-wrap'>
    {Portfolios.map((port, index) => (
        <div className='relative md:w-[30%] shadow-2xl  dark:bg-[#1b1b1bee] rounded-lg cursor-pointer' key={index}>
            <img src={port.image} alt="" className='rounded-t-lg' />
            {/* Dark Overlay */}
            <div className='absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg'>
                <Link to={port.link} target='_blank' className='text-white bg-blue-500 hover:bg-blue-700 px-4 py-2 rounded'>
                    View Project
                </Link>
            </div>
            <div className='p-5 space-y-4'>
                <h1 className='uppercase font-semibold'>{port.name}</h1>
                <p className='leading-8 text-sm'>{port.desc}</p>
            </div>
        </div>
    ))}
</section>
      </section>
      <WhatsAppLink />
    </div>
  )
}

export default Portfolio
