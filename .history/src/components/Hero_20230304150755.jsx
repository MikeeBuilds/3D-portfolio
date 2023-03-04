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
              Hi, I'm <span className='text-[#915eff]'>Mike</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              I'm a Web3 Developer based in Ft Lauderdale, FL. I specialize in building and
                designing websites and web applications. <br className='sm:block hidden' /> I'm also a blockchain enthusiast and 
                I'm currently building with Solidity and Web3.js. I also have a passion for
                creating and designing user interfaces, 3D graphics, and animations.
                Im also a big believer in the power of open source software.
            </p>
          </div>
            
      </div>
    </section>
  )
}

export default Hero