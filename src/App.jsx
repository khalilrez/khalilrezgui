import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";
import ReactSound from "react-sound";
import LoFi from "./assets/lofi.mp3"
import { useState } from "react";
const App = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };
  return (
    <BrowserRouter>
    <ReactSound url={LoFi}
    loop={true}
    playStatus={isPlaying ? ReactSound.status.PLAYING : ReactSound.status.PAUSED}>
    </ReactSound>
      <div onClick={handlePlay} className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
