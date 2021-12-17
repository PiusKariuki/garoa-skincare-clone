import React from "react";

const Topbar: React.FC = (): JSX.Element => {
  return (
    <div className="flex justify-between ml-8 mr-8 mt-4">
      <div className="h-6 w-8 " id="menu"></div>
      <p className="text-3xl font-bold ">
        Garoa
        <sup>
          <img src="/img/trademark.png" alt="" className="inline h-2" />
        </sup>
      </p>
      <div className="flex justify-around h-6 w-6 md:h-8 md:w-8 rounded-full border-2 border-black ">
        <p className="leading-3 mt-1 md:leading-normal md:mt-0">0</p>
      </div>
    </div>
  );
};

export default Topbar;
