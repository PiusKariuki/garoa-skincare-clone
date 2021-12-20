import React from "react";
import Autumn from "../components/Autumn";
import Hero from "../components/Hero";
import Topbar from "../components/Topbar";
import "../styles/home.css";

const Home: React.FC = (): JSX.Element => {


  return (
    <div className="h-screen relative" >
      <div className="fixed top-0 w-full z-20">
        <Topbar />
      </div>
      <Hero />
      <Autumn />
    </div>
  );
};

export default Home;
