import React from "react";

function LoadingInfo({ loadingText = "Loading" }) {
  return (
    <>
      {loadingText}
      <span className="inline-flex">
        <span className="animate-dot1">.</span>
        <span className="animate-dot2">.</span>
        <span className="animate-dot3">.</span>
      </span>
    </>
  );
}

export default LoadingInfo;
