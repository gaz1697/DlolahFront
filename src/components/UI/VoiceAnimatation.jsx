import React, { useEffect, useRef, useState } from "react";
import lottie from "lottie-web";
import animationData from "../../../public/icons/Animation - 1711499666786.json";

const MyLottieAnimation = (props) => {
  const animationContainer = useRef(null);

  useEffect(() => {
    if (animationContainer.current) {
      const instance = lottie.loadAnimation({
        container: animationContainer.current,
        renderer: "svg", // or 'canvas', 'html'
        animationData: animationData,
        loop: props.recordData, // Set to true if you want the animation to loop
        autoplay: true, // Set to true if you want the animation to start playing as soon as it's loaded
      });
      return () => instance.destroy();
    }
  }, [props.recordData]);
  console.log(props.recordData);

  return <div ref={animationContainer} />;
};

export default MyLottieAnimation;
