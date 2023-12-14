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
        <p className={styles.heroSubText}>Who am I?</p>
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
                I'm a passionate full stack developer dedicated to crafting dynamic
                web applications. Dive into this portfolio to explore my coding
                journey, spanning from intuitive web2 projects to intricate web3
                applications driven by blockchain technologies. <br />Originating from
                a background as an Outdoor Photographer and bowhunting guide,
                my coding adventure kicked off in late 2021 with a deep dive
                into Solidity and blockchain. Now, I channel that passion into
                crafting digital experiences using Next.js, React, and Tailwind.
              </p>
            </div>
          </div>

          <div className="mt-8">
            <div className="p-4 bg-black-100 rounded-lg">
              <h3 className=" font-bold text-white">Passion Meets Problem Solving</h3>
              <p className="text-white">
                My coding enthusiasm finds its sweet spot at the intersection of
                climate tech and outdoor innovation. <br />I'm on the lookout for
                challenges where I can apply tech solutions, seamlessly blending
                my love for the outdoors with the power of code. A remote
                work aficionado, I bring a unique adaptability cultivated
                through diverse experiences. Let's not just connect but
                collaborate on something extraordinary. Ready to embark on the
                next project? Feel free to reach out—let's make it happen!
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
