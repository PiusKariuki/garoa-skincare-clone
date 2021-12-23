import React from "react";
import { motion } from "framer-motion";
import "../styles/hero.css";

const Hero: React.FC = (): JSX.Element => {
  return (
    <div className="flex justify-around w-full h-full relative">
      <motion.div
        animate={{ scaleX: 0.94, scaleY: 0.88 }}
        transition={{ delay: 2.5, duration: 2.5 }}
        className="mt-8 w-full h-full rounded-2xl"
        id="hero-bg"
      ></motion.div>
      <motion.p
        initial={{ opacity: 0, y: -36 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.04 }}
        className="words 
        left-[35%] top-[26%]  tab:left-[40%] md:left-[33%]  lg:left-[24%] lg:top-[47%] 
        xl:left-[27%] xl:top-[30%]  3xl:left-[33%]"
      >
        Treat
      </motion.p>
      <motion.p
        initial={{ opacity: 0, x: -36 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.04 }}
        className="words top-[33%] left-[25%] 425:left-[27%] md:left-[49%] md:top-[26%] lg:left-[45%] lg:top-[47%]
        xl:top-[30%] 3xl:left-[46%]"
      >
        your
      </motion.p>
      <motion.p
        initial={{ opacity: 0, x: 36 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.04 }}
        className="words top-[33%] right-[23%] md:top-[26%] md:right-[28%] lg:right-[25%] lg:top-[47%]
        xl:top-[30%] xl:right-[30%]  3xl:right-[36%]"
      >
        skin
      </motion.p>
      <motion.p
        initial={{ opacity: 0, x: -36 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.04 }}
        className="words top-[41%] left-[30%] md:left-[33%] lg:top-[55%] lg:left-[23%] 
        xl:top-[43%] xl:left-[28%] 2xl:top-[40%] 3xl:top-[37%] 3xl:left-[32%]"
      >
        in
      </motion.p>
      <motion.p
        initial={{ opacity: 0, x: 36 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.04 }}
        className="words top-[41%] right-[23%] md:left-[40%] lg:top-[55%] lg:left-[33%]
        xl:top-[43%] xl:left-[35%] 2xl:top-[40%] 3xl:top-[37%] 3xl:left-[37%]"
      >
        every
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.04 }}
        className="words top-[49%] md:top-[41%] md:right-[28%] lg:top-[55%] lg:right-[25%]
        xl:top-[43%]  xl:right-[29%] 2xl:top-[40%] 3xl:top-[37%] 3xl:right-[37%]"
      >
        season
      </motion.p>
      {/* ...............🤐🤐🤐🤐🤐🤐 */}
      <motion.button
        initial={{
          top: "90%",
          width: "2rem",
          height: "2rem",
          borderRadius: "50%",
          padding: "0",
          fontSize: "0rem",
        }}
        whileInView={{
          width: "8rem",
          height: "3rem",
          paddingTop: "0.5rem",
          paddingBottom: "0.5rem",
          paddingLeft: "1rem",
          paddingRight: "1rem",
          top: "70%",
          backgroundColor: "#fff",
          color: "#000",
          borderRadius: "1rem",
          fontSize: "1rem",
        }}
        whileHover={{
          backgroundColor: "#000",
          color: "#fff",
        }}
        transition={{ duration: 1, delay: 0.04 }}
        className="absolute  text-bold"
      >
        SHOP NOW
      </motion.button>
    </div>
  );
};

export default Hero;
