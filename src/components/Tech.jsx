import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10 '>
      {technologies.map((technology) => (
        <div className='w-28 h-28 hidden lg:block' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
      {technologies.map((technology) => (
  <div class="block lg:hidden center relative inline-block select-none whitespace-nowrap rounded-lg bg-amber-500 py-2 px-3.5 align-baseline font-sans text-xs font-bold uppercase leading-none text-black">
    <div class="mt-px">{technology.name}</div>
  </div>))}
    </div>

  );
};

export default SectionWrapper(Tech, "");
