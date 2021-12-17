import React, { useState, useEffect } from "react";
import "../styles/hero.css";

const Hero: React.FC = (): JSX.Element => {
  const [bgName, setBgName] = useState<string>(
    "mt-8 w-full h-full rounded-2xl"
  );
  useEffect(() => {
    setBgName("w-ninety h-eighty mt-8 rounded-2xl justify-self-center md:w-ninetyFive");
  }, []);

  const handleScroll = () => {};

  return (
    <div className="flex justify-around w-full h-full relative mt-8">
      <div className={`${bgName}`} id="hero-bg" onScroll={handleScroll}></div>
      <p
        className=" little:text-4xl xs:text-5xl xl:text-five font-semibold absolute animate-slideInTop md:animate-fadeInLeft"
        id="treat"
      >
        Treat
      </p>
      <p
        className="little:text-4xl xs:text-5xl xl:text-five font-semibold absolute animate-slideInLeft md:animate-fadeInTop"
        id="your"
      >
        your
      </p>
      <p
        className=" little:text-4xl xs:text-5xl xl:text-five font-semibold absolute animate-slideInRight md:animate-fadeInRight"
        id="skin"
      >
        skin
      </p>
      <p
        className=" little:text-4xl xs:text-5xl xl:text-five font-semibold absolute animate-slideInLeft md:animate-fadeInLeft"
        id="in"
      >
        in
      </p>
      <p
        className=" little:text-4xl xs:text-5xl xl:text-five font-semibold absolute animate-slideInRight md:animate-fadeInBottom"
        id="every"
      >
        every
      </p>
      <p
        className=" little:text-4xl xs:text-5xl xl:text-five font-semibold absolute animate-slideInBottom md:animate-fadeInRight"
        id="season"
      >
        season
      </p>

      <button className="absolute rounded-2xl" id="shop-btn">
        SHOP NOW
      </button>
    </div>
  );
};

export default Hero;
