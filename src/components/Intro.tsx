import React, { useEffect } from 'react';
import IntroVideo from '../res/video/background_vod.mp4';

const Intro = () => {
  useEffect(() => {
    setTimeout(() => {
      const Intro = document.getElementById('intro');
      if (Intro) Intro.style.display = 'none';
    }, 10000);
    return () => {
      clearTimeout();
    };
  }, []);
  return (
    <div
      id="intro"
      style={{
        position: 'fixed',
        zIndex: '999',
        top: '0',
        width: '100%',
        maxWidth: '50.8rem',
        height: '100vh',
      }}
    >
      <video className="BackGround" autoPlay muted loop>
        <source src={IntroVideo} type="video/mp4"></source>
      </video>
    </div>
  );
};

export default Intro;
