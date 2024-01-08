import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto `}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Khalil</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
          I am a student harnessing cloud and Infrastructure technologies, <br className='sm:block hidden' />
          with a background in full stack development
          </p>
          <h2>(This Website is best viewed on a Desktop/Laptop because of 3D rendering)</h2>
        </div>
      </div>
      <ComputersCanvas  />

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-[#FF0] flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-[#FF0] mb-1'
            />
           
          </div>
          <h3 className="text-white bg-black border border-black" >Click</h3>
        </a>
      </div>
    </section>
  );
};

export default Hero;
