import React from "react";
import Trending from "../Ui/Trending";
export const Hero = () => {
  return (
    <div className="bg-hero-image flex items-center justify-between w-full h-[88vh] px-10 bg-bottom bg-cover bg-no-repeat">
      <div className="flex w-2/5">
        <h1 className="text-white md:w-2/3 flex text-center md:text-left flex-col text-5xl font-bold">
          <span className="font-julee">Find your</span>
          <span className="text-verdant text-7xl md:text-9xl -mt-2 font-extrabold">
            SQUAD
          </span>
        </h1>
      </div>
      <Trending />
    </div>
  );
};
