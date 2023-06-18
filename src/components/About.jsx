import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import me from "../assets/me.jpg";

const ServiceCard = ({ title, icon, index }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[240px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.heroSubText}>Introduction</p>
        <h2 className={styles.heroHeadText}>Overview.</h2>
      </motion.div>

      <div className="flex items-center min-[1000px]:flex-row flex-col-reverse ">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          I'm Algo, a self-taught full-stack developer specializing in
          cutting-edge web application development. At Umbr3lla Labs, we excel
          in utilizing React, TailwindCSS, Next.js, and Three.js to build
          exceptional web experiences. With a dedicated focus on web3 and DeFi
          technologies, we shape the future of the web by exploring innovative
          blockchain and decentralized solutions.
        </motion.p>
        <Tilt className="xs:w-[350px] xs:h-[350px] w-full h-full m-auto max-[1000px]:my-14">
          <motion.div
            variants={fadeIn("", "", 0.5, 1)}
            className="rounded-full xs:w-[350px] w-full green-pink-gradient p-[1px]  shadow-card"
            style={{ marginTop: "-35px" }}
          >
            <div
              options={{ max: 45, scale: 1, speed: 450 }}
              className="rounded-full bg-tertiary min-h-[250px] flex justify-evenly items-center flex-col overflow-hidden"
            >
              <img
                src={me}
                alt="MyPhoto"
                className="rounded-full w-full h-full object-contain"
              />
            </div>
          </motion.div>
        </Tilt>
      </div>

      <motion.div
        variants={textVariant()}
        className="mt-20 max-w-3xl text-secondary text-[17px] leading-[30px]"
        
      >
        <motion.p>
        Our portfolio showcases
          carefully crafted projects that demonstrate our expertise in web
          development, including captivating web3 and DeFi applications. Take a
          moment to explore our website and discover the skills, experience, and
          potential collaboration opportunities that await you.
        </motion.p>
      </motion.div>

      <div className="mt-20 flex flex-wrap gap-10 justify-center ">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
