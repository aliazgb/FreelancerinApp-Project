import React from "react";
import { ThreeDots } from "react-loader-spinner";
function Loader({ width = "75", height = "40" }) {
  return (
    <div>
      <ThreeDots
        height={height}
        width={width}
        radius="9"
        color="rgb(var(--color-primary-900))"
        ariaLabel="loading"
        wrapperStyle={{
          display: "flex",
          justifyContent: "center",
        }}
        visible={true}
      />
    </div>
  );
}

export default Loader;
