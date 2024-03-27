import React from "react";

export const Hero = () => {
  return (
    <div className="bg-hero-image flex items-center w-full h-[88vh] px-10 bg-bottom bg-cover bg-no-repeat">
      <h1 className="text-white md:w-1/3 flex text-center md:text-left flex-col text-5xl font-bold">
        <span className="font-julee">Find your</span>
        <span className="text-verdant text-7xl md:text-9xl -mt-2 font-extrabold">
          SQUAD
        </span>
      </h1>
    </div>
  );
};
