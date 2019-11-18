import React from "react";

const Loading = () => {
  return (
    <section>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xlink="http://www.w3.org/1999/xlink"
        className="loading"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
      >
        <rect x="17.5" y="26.8624" width="15" height="46.2751" fill="#4682B4">
          <animate
            attributeName="y"
            repeatCount="indefinite"
            dur="1s"
            calcMode="spline"
            keyTimes="0;0.5;1"
            values="18;30;30"
            keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
            begin="-0.2s"
          ></animate>
          <animate
            attributeName="height"
            repeatCount="indefinite"
            dur="1s"
            calcMode="spline"
            keyTimes="0;0.5;1"
            values="64;40;40"
            keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
            begin="-0.2s"
          ></animate>
        </rect>
        <rect x="42.5" y="25.5934" width="15" height="48.8132" fill="#B0C4DE">
          <animate
            attributeName="y"
            repeatCount="indefinite"
            dur="1s"
            calcMode="spline"
            keyTimes="0;0.5;1"
            values="20.999999999999996;30;30"
            keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
            begin="-0.1s"
          ></animate>
          <animate
            attributeName="height"
            repeatCount="indefinite"
            dur="1s"
            calcMode="spline"
            keyTimes="0;0.5;1"
            values="58.00000000000001;40;40"
            keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
            begin="-0.1s"
          ></animate>
        </rect>
        <rect x="67.5" y="30" width="15" height="40" fill="#4682B4">
          <animate
            attributeName="y"
            repeatCount="indefinite"
            dur="1s"
            calcMode="spline"
            keyTimes="0;0.5;1"
            values="20.999999999999996;30;30"
            keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
          ></animate>
          <animate
            attributeName="height"
            repeatCount="indefinite"
            dur="1s"
            calcMode="spline"
            keyTimes="0;0.5;1"
            values="58.00000000000001;40;40"
            keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
          ></animate>
        </rect>
      </svg>
    </section>
  );
};

export default Loading;
