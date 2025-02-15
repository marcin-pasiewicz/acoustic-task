import React, { ReactElement } from "react";

export default function Loader(): ReactElement {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={{
        margin: "auto",
        backgroundColor: "rgb(255, 255, 255)",
        backgroundPosition: "initial initial",
        backgroundRepeat: "initial initial",
      }}
      width="200"
      height="200"
      display="block"
      preserveAspectRatio="xMidYMid"
      viewBox="0 0 100 100"
    >
      <rect width="6" height="12" x="47" y="24" fill="#7a7a7a" rx="3" ry="3.6">
        <animate
          attributeName="opacity"
          begin="-0.9166666666666666s"
          dur="1s"
          keyTimes="0;1"
          repeatCount="indefinite"
          values="1;0"
        ></animate>
      </rect>
      <rect
        width="6"
        height="12"
        x="47"
        y="24"
        fill="#7a7a7a"
        rx="3"
        ry="3.6"
        transform="rotate(30 50 50)"
      >
        <animate
          attributeName="opacity"
          begin="-0.8333333333333334s"
          dur="1s"
          keyTimes="0;1"
          repeatCount="indefinite"
          values="1;0"
        ></animate>
      </rect>
      <rect
        width="6"
        height="12"
        x="47"
        y="24"
        fill="#7a7a7a"
        rx="3"
        ry="3.6"
        transform="rotate(60 50 50)"
      >
        <animate
          attributeName="opacity"
          begin="-0.75s"
          dur="1s"
          keyTimes="0;1"
          repeatCount="indefinite"
          values="1;0"
        ></animate>
      </rect>
      <rect
        width="6"
        height="12"
        x="47"
        y="24"
        fill="#7a7a7a"
        rx="3"
        ry="3.6"
        transform="rotate(90 50 50)"
      >
        <animate
          attributeName="opacity"
          begin="-0.6666666666666666s"
          dur="1s"
          keyTimes="0;1"
          repeatCount="indefinite"
          values="1;0"
        ></animate>
      </rect>
      <rect
        width="6"
        height="12"
        x="47"
        y="24"
        fill="#7a7a7a"
        rx="3"
        ry="3.6"
        transform="rotate(120 50 50)"
      >
        <animate
          attributeName="opacity"
          begin="-0.5833333333333334s"
          dur="1s"
          keyTimes="0;1"
          repeatCount="indefinite"
          values="1;0"
        ></animate>
      </rect>
      <rect
        width="6"
        height="12"
        x="47"
        y="24"
        fill="#7a7a7a"
        rx="3"
        ry="3.6"
        transform="rotate(150 50 50)"
      >
        <animate
          attributeName="opacity"
          begin="-0.5s"
          dur="1s"
          keyTimes="0;1"
          repeatCount="indefinite"
          values="1;0"
        ></animate>
      </rect>
      <rect
        width="6"
        height="12"
        x="47"
        y="24"
        fill="#7a7a7a"
        rx="3"
        ry="3.6"
        transform="rotate(180 50 50)"
      >
        <animate
          attributeName="opacity"
          begin="-0.4166666666666667s"
          dur="1s"
          keyTimes="0;1"
          repeatCount="indefinite"
          values="1;0"
        ></animate>
      </rect>
      <rect
        width="6"
        height="12"
        x="47"
        y="24"
        fill="#7a7a7a"
        rx="3"
        ry="3.6"
        transform="rotate(210 50 50)"
      >
        <animate
          attributeName="opacity"
          begin="-0.3333333333333333s"
          dur="1s"
          keyTimes="0;1"
          repeatCount="indefinite"
          values="1;0"
        ></animate>
      </rect>
      <rect
        width="6"
        height="12"
        x="47"
        y="24"
        fill="#7a7a7a"
        rx="3"
        ry="3.6"
        transform="rotate(240 50 50)"
      >
        <animate
          attributeName="opacity"
          begin="-0.25s"
          dur="1s"
          keyTimes="0;1"
          repeatCount="indefinite"
          values="1;0"
        ></animate>
      </rect>
      <rect
        width="6"
        height="12"
        x="47"
        y="24"
        fill="#7a7a7a"
        rx="3"
        ry="3.6"
        transform="rotate(270 50 50)"
      >
        <animate
          attributeName="opacity"
          begin="-0.16666666666666666s"
          dur="1s"
          keyTimes="0;1"
          repeatCount="indefinite"
          values="1;0"
        ></animate>
      </rect>
      <rect
        width="6"
        height="12"
        x="47"
        y="24"
        fill="#7a7a7a"
        rx="3"
        ry="3.6"
        transform="rotate(300 50 50)"
      >
        <animate
          attributeName="opacity"
          begin="-0.08333333333333333s"
          dur="1s"
          keyTimes="0;1"
          repeatCount="indefinite"
          values="1;0"
        ></animate>
      </rect>
      <rect
        width="6"
        height="12"
        x="47"
        y="24"
        fill="#7a7a7a"
        rx="3"
        ry="3.6"
        transform="rotate(330 50 50)"
      >
        <animate
          attributeName="opacity"
          begin="0s"
          dur="1s"
          keyTimes="0;1"
          repeatCount="indefinite"
          values="1;0"
        ></animate>
      </rect>
    </svg>
  );
}
