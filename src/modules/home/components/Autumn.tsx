import React, { useRef } from "react";
import { motion,  useElementScroll, } from "framer-motion";
import "../styles/autumn.css";

const Autumn: React.FC = (): JSX.Element => {
  const ref1 = useRef<any>();
  const { scrollY } = useElementScroll(ref1);
  

  return (
    <>
      <div ref={ref1} className="flex   h-screen relative justify-around mt-24">
        {/* absloutes */}
        <div
          className="absolute right-five top-0 md:right-0 z-10 rounded-xl"
          id="fall1"
        ></div>
        <motion.div
          style={{ translateX: scrollY }}
          className="absolute right-0 top-five md:top-ten md:right-twenty  z-20 rounded-lg"
          id="fall2"
        ></motion.div>
        <div
          className="absolute left-0 bottom-five  md:left-13 md:bottom-13 z-20 rounded-xl"
          id="fall3"
        ></div>
        <div
          className="absolute left-0 bottom-0  md:left-five z-10 rounded-xl"
          id="fall4"
        ></div>

        {/* flexes */}
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
      </div>

      <div className="flex  justify-around mt-32">
        <p className="w-eighty md:w-sixty text-lg md:text-4xl text-center font-semibold leading-relaxed">
          Your skin &nbsp;
          <span>
            <motion.img
              initial={{ width: "0rem", height: "0rem" }}
              whileInView={{ width: "4rem", height: "4rem" }}
              transition={{ duration: 1, delay: 0.01 }}
              src="/img/neptune.jpg"
              alt=""
              className="inline rounded-full"
            />{" "}
            &nbsp;
          </span>
          reacts differently according to every season, in the months of
          September, October and November &nbsp;
          <span>
            <motion.img
              initial={{ width: "0rem", height: "0rem" }}
              whileInView={{ width: "4rem", height: "4rem" }}
              transition={{ duration: 1, delay: 0.01 }}
              src="/img/kadri.jpg"
              alt=""
              className="inline rounded-full"
            />{" "}
            &nbsp;
          </span>
          your skin tends to start drying abit easier, so we offer a selection
          of essential skincare &nbsp;
          <span>
            <motion.img
              initial={{ width: "0rem", height: "0rem" }}
              whileInView={{ width: "4rem", height: "4rem" }}
              transition={{ duration: 1, delay: 0.01 }}
              src="/img/jupiter.jpg"
              alt=""
              className="inline rounded-full"
            />{" "}
            &nbsp;
          </span>
          products for your morning and night routines to keep your skin
          perfect.
        </p>
      </div>
    </>
  );
};

export default Autumn;
