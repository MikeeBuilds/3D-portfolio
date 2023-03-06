import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'
    >
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col items-center justify-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
          </div>
          <div className=''> 
            <h1 className={`${styles.heroHeadText} text-white`}> 
              Greetings, I'm <span className=' underline text-[#915eff]'>Mike</span>
            </h1>
            <p className=''>
              Let me help assist you with
            </p>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            "Crafting Your Digital Experiences With <span className=' animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-5xl font-black'>codE...</span>"


            </p>
          </div>
      </div>
            <ComputersCanvas />
            <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center
            items-center'>
              <a href="#about">
                <div className='w-35-[35px] h-[64px] rounded-3xl border-4 border-secondary flex items-center
                p-2'>
                  <motion.div 
                  animate={{ y: [0, 24, 0] }}
                  transition={{ duration: 1.5,
                                repeat: Infinity,
                                repeatType: 'loop' 
                              }}
                  className='w-3 h-3 rounded-full mb-1 bg-secondary'
                  
                  />
                </div>
              </a>
            </div>
    </section>
  )
}

export default Hero;