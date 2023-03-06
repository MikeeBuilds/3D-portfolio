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
              onSubmit={}></form>
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact");