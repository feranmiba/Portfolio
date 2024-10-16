import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiX } from 'react-icons/si';



function Contact() {
  return (
    <div className='py-10 px-24'>
        <h1>Let's talk 😉</h1>
      <form className='bg-white  shadow-2xl flex'>
        <div className='bg-[#fdf4f4] py-10 px-10'>
            <h1 className='font-bold'>Connnect with me</h1>
            <div className='space-y-5 mt-5'>
                <div>
            <a href='mailto:amiolademilade@gmail.com'>
            <p>
              amiolademilade@gmail.com  
            </p>
            </a>
            </div>
            <div>
            <a href='tel:070 1904 0834'>
            <p>
             +234 70 1904 0834
            </p>
            </a>
            </div>
            <div>
            <a  href="https://github.com/feranmiba"  target='_blank' rel="noopener noreferrer">
            <p className='flex gap-2'>
            <FaGithub className="text-gray-700 hover:text-black dark:text-white" size={20} />
            @feranmiba
            </p>
            </a>
            </div>
            <div>
            <a href="https://www.linkedin.com/in/amiola-demilade-5a46801a8/" target="_blank" rel="noopener noreferrer">
            <p className='flex gap-2'>
            <FaLinkedin className="text-gray-700 hover:text-blue-700 dark:text-white" size={20} />
                Amiola Demilade
            </p>
            </a>
            </div>
            <div>
            <a href="https://x.com/emmanuel_amiola" target="_blank" rel="noopener noreferrer">
            <p className='flex gap-2'>
            <SiX className="text-gray-700 hover:text-blue-400 dark:text-white" size={20} />
            @emmanuel_amiola
            </p>
            </a>
            </div>
            </div>
        </div>

        <div className='px-5 py-10 space-y-6'>
            <div className='w-[600px]max-w-full'>
            <label>Name</label>
            <p className='border  flex-shrink h-[20px] rounded-lg'> <input type="text" className='w-full' /> </p>
            </div>
            <div>
            <label>Name</label>
            <p> <input type="text" /> </p>
            </div>

            <div>
            <label>Name</label>
            <p> <input type="text" /> </p>
            </div>

          <button type="submit">Submit</button>
        </div>


      </form>
    </div>
  )
}

export default Contact
