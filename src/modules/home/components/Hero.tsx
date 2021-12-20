import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "../styles/hero.css";

const Hero: React.FC = (): JSX.Element => {
  const [bgName, setBgName] = useState<string>(
    "mt-8 w-full h-full rounded-2xl"
  );
  useEffect(() => {
    setBgName(
      "w-ninety h-eighty mt-8 rounded-2xl justify-self-center md:w-ninetyFive"
    );
  }, []);

  const handleScroll = () => {};

  return (
    <div className="flex justify-around w-full h-full relative mt-8">
      <div className={`${bgName}`} id="hero-bg" onScroll={handleScroll}></div>
      <motion.p
        initial={{ opacity: 0, y: -36 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.04 }}
        className="little:text-4xl xs:text-5xl xl:text-five 2xl:text-9xl font-semibold 
        absolute left-33 top-26"
      >
        Treat
      </motion.p>
      <motion.p
        initial={{ opacity: 0, x: -36 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.04 }}
        className="little:text-4xl xs:text-5xl xl:text-five 2xl:text-9xl font-semibold 
        absolute top-33 left-25 md:left-49 md:top-26"
      >
        your
      </motion.p>
      <motion.p
        initial={{ opacity: 0, x: 36 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.04 }}
        className=" little:text-4xl xs:text-5xl xl:text-five 2xl:text-9xl font-semibold 
        absolute top-33 right-23 md:top-26 md:right-thirty"
      >
        skin
      </motion.p>
      <motion.p
        initial={{ opacity: 0, x: -36 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.04 }}
        className=" little:text-4xl xs:text-5xl xl:text-five 2xl:text-9xl font-semibold 
        absolute top-41 left-thirty"
      >
        in
      </motion.p>
      <motion.p
        initial={{ opacity: 0, x: 36 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.04 }}
        className=" little:text-4xl xs:text-5xl xl:text-five 2xl:text-9xl font-semibold 
        absolute top-41 right-23 md:left-forty"
      >
        every
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.04 }}
        className=" little:text-4xl xs:text-5xl xl:text-five 2xl:text-9xl font-semibold 
        absolute top-49 md:top-41 md:right-thirty"
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
        }}
        whileInView={{
          width: "8rem",
          height: "3rem",
          paddingTop: "0.5rem",
          paddingBottom: "0.5rem",
          paddingLeft: "1rem",
          paddingRight: "1rem",
          top: "65%",
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
        className="absolute top-65 text-semibold"
      >
        SHOP NOW
      </motion.button>
    </div>
  );
};

export default Hero;
