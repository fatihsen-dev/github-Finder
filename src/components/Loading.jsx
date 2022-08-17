import React from "react";
import * as LottiePlayer from "@lottiefiles/lottie-player";
import "../styles/index.css";

const Loading = () => {
  return (
    <lottie-player
      autoplay
      loop
      mode='normal'
      src='https://assets8.lottiefiles.com/packages/lf20_hzyzmdld.json'
    ></lottie-player>
  );
};

export default Loading;
