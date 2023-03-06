import React from 'react';
import { useState, UseRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';



const Contact = () => {
  const formRef = useRef();
  useState [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  
  return (
    <div>Contact</div>
  )
}

export default Contact