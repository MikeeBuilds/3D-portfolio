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
        <p className={styles.heroSubText}>What We Do</p>
        <h2 className={styles.heroHeadText}>Overview.</h2>
      </motion.div>

      <div className="flex items-center min-[1000px]:flex-row flex-col-reverse">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          <div className="mt-8">
            <div className="p-4 bg-black-100 rounded-lg">
              <h3 className=" font-bold text-white">Full-stack Development</h3>
              <p className="text-white">
                At Umbr3lla Labs, we are building a team of skilled developers excels in both
                front-end and back-end development, ensuring seamless project
                launches and fully functional websites. We expertly integrate your
                content into captivating public-facing websites while
                simultaneously developing the back end, enabling wallet
                connections and essential functionalities.
              </p>
            </div>
          </div>

          <div className="mt-8">
            <div className="p-4 bg-black-100 rounded-lg">
              <h3 className=" font-bold text-white">Custom Smart Contract</h3>
              <p className="text-white">
                With our in-house Solidity developers, we create efficient and
                tailored smart contracts that cater specifically to your project's
                requirements. From comprehensive tokenomics and contract
                migration to ensuring proper provenance and implementing
                whitelisting, we handle it all. Explore our projects page for
                inspiring examples of our work.
              </p>
            </div>
          </div>

          {/* Repeat the above code for other services */}

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

      <div className="mt-20 flex flex-wrap gap-10 justify-center ">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
