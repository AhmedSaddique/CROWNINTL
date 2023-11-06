import React, { useEffect } from 'react';
import lottie from 'lottie-web';
import animationData from '../../public/assets/images/lottie1.json';

 const Animation1 = () => {
  useEffect(() => {
    const animationContainer = document.getElementById('animation-container'); 
    const anim = lottie.loadAnimation({
      container: animationContainer,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: animationData,
    });

    return () => {
      anim.destroy();
    };
  }, []); // Empty dependency array to ensure this effect runs only once

  return <div className='w-[450px]' id="animation-container" />;
};
export default Animation1;



