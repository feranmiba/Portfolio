import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaPhone } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { SiX } from 'react-icons/si';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch('https://formspree.io/f/xpwzzopy', { 
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, message }),
    });

    if (response.ok) {
      setStatus('Thanks for reaching out 😁👍');
      setName('');
      setEmail('');
      setMessage('');
    } else {
      setStatus('There was an error. Please try again later.');
    }
  };

  return (
    <div className='py-10 mt-8 px-24'>
      <h1>Let's talk 😉</h1>
      <form className='bg-white dark:bg-[#1b1b1bee] shadow-2xl flex rounded-md mt-10' onSubmit={handleSubmit}>
        <div className='bg-[#fdf4f4] dark:bg-[#302f2fee] py-10 px-10 rounded-l-md'>
          <h1 className='font-bold'>Connect with me</h1>
          <div className='space-y-5 mt-5'>
            <div>
              <a href='mailto:amiolademilade@gmail.com' className='flex gap-2'>
                <SiGmail className='self-center' />
                <p>amiolademilade@gmail.com</p>
              </a>
            </div>
            <div>
              <a href='tel:07019040834' className='flex gap-2'>
                <FaPhone className='rotate-90 self-center' />
                <p>+234 70 1904 0834</p>
              </a>
            </div>
            <div>
              <a href="https://github.com/feranmiba" target='_blank' rel="noopener noreferrer">
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

        <div className='px-5 py-10 w-[60%] space-y-6'>
          <div className='space-y-3'>
            <label>Name</label>
            <p className='border-2 px-4 flex-shrink rounded-lg'>
              <input
                type="text"
                className='w-full outline-none bg-transparent h-[40px]'
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </p>
          </div>
          <div className='space-y-3'>
            <label>Email</label>
            <p className='border-2 px-4 flex-shrink rounded-lg'>
              <input
                type="email"
                className='w-full outline-none bg-transparent h-[40px]'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </p>
          </div>
          <div className='space-y-3'>
            <label>Message</label>
            <p className='border-2 px-4 flex-shrink rounded-lg'>
              <textarea
                className='w-full outline-none bg-transparent'
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </p>
          </div>

          <div className='flex text-end justify-end'>
            <button type="submit" className='rounded-md bg-[#f7eded] w-[80px] h-[30px] flex justify-center items-center dark:bg-[#130e]'>Send</button>
          </div>

          {status && <p className="text-center">{status}</p>} 
        
        </div>
      </form>
    </div>
  );
}

export default Contact;

