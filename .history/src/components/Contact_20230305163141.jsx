import React from 'react';
import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';



const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);

  const handlechange = (e) => {};
  const handleSubmit = (e) => {};

  return (
    <div className='xl:mt-12 xl:flex-row
      flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div
      variants={slideIn('left', "tween", 0.2, 1)}
      className='flex-[0.75] bg-black-100 p-8 rounded-2xl'>
        <p className={styles.sectionSubText}>
          Get in touch with me and let's build!
        </p>
        <h3 className={styles.sectionHeadText}>
          Contact
        </h3>

        <form ref={formRef}
              onSubmit={handleSubmit}
              className="mt-12 flex flex-col gap-8"
              >
                <label 
                className='flex flex-col '
                htmlFor="">
                  <span 
                    className='text-white-100 font-medium mb-4'
                    >
                      Your Name
                  </span>
                  <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handlechange}
                  placeholder="Whats your name?"
                  className='bg-tertiary py-4 px-6 placeholder:text-secondary
                      rounded-lg outline-none border-none font-medium text-white-100'
                  >
                    
                  </input>
                </label>
                <label 
                className='flex flex-col '
                htmlFor="">
                  <span 
                    className='text-white-100 font-medium mb-4'
                    >
                      Email
                  </span>
                  <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handlechange}
                  placeholder="Whats your email?"
                  className='bg-tertiary py-4 px-6 placeholder:text-secondary
                      rounded-lg outline-none border-none font-medium text-white-100'
                  >
                    
                  </input>
                </label>
                <label 
                className='flex flex-col '
                htmlFor="">
                  <span 
                    className='text-white-100 font-medium mb-4'
                    >
                      Your Message
                  </span>
                  <textArea
                  rows="7"
                  name="message"
                  value={form.message}
                  onChange={handlechange}
                  placeholder="Type Your Message Here"
                  className='bg-tertiary py-4 px-6 placeholder:text-secondary
                      rounded-lg outline-none border-none font-medium text-white-100'
                  >
                    
                  </textArea>
                </label>

                <button
                className='bg-[#915eff] py-4 px-6 rounded-lg outline-none border-none font-medium text-white-100'
                type='submit'
                >
                  {loading ? 'sending...' : 'send'}

                </button>
              </form>
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact");