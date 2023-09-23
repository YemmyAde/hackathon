import React from "react";
import Lottie from "react-lottie-player";
import lottie from "../../jsonLoader/loader.json";

export const Loader = () => {
    return (
        // <>
        // </>
    <Lottie
      speed={2}
      loop
      animationData={lottie}
      play
      style={{ width: "30px", textAlign: "center" }}
    />
  );
};
