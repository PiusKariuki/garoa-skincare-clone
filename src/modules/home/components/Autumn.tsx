import React from "react";
import { motion } from "framer-motion";
import "../styles/autumn.css";

const Autumn: React.FC = (): JSX.Element => {
  return (
    <div className="flex  h-screen relative justify-around">
      <div
        className="absolute right-five top-0 md:right-0 z-10 rounded-xl"
        id="fall1"
      ></div>
      <div
        className="absolute right-0 top-five md:top-ten md:right-twenty  z-20 rounded-lg"
        id="fall2"
      ></div>

      <div
        className="justify-self-center flex flex-col flex-wrap justify-center 
      w-seventy md:w-26 gap-y-4"
      >
        <p
          className="text-night text-sm font-medium  md:font-lg 
        md:font-semibold md:tracking-wide uppercase text-center mx-8"
        >
          Treat your skin in every season
        </p>
        <p
          className="flex flex-wrap text-night font-semibold text-5xl lg:text-7xl text-center
         justify-around "
        >
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.03 }}
          >
            SkinCare&nbsp;
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.03 }}
          >
            For&nbsp;
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.03 }}
          >
            Autumn
          </motion.span>
        </p>
        <p
          className="flex flex-wrap text-night font-medium text-base  
          md:text-lg md:font-semibold text-center justify-around mx-6"
        >
          Your skin reacts different from summer to winter, our products treat
          your skin with the proper vitamins for every season so it's healthy
          year round
        </p>
      </div>

      <div
        className="absolute left-0 bottom-five  md:left-13 md:bottom-13 z-20 rounded-xl"
        id="fall3"
      ></div>
      <div
        className="absolute left-0 bottom-0  md:left-five z-10 rounded-xl"
        id="fall4"
      ></div>
    </div>
  );
};

export default Autumn;
