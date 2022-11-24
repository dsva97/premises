import React from "react";

export const Point = () => {
  const height = 44;
  return (
    <div
      style={{
        position: "relative",
        width: (height + 10) / 2,
        height: height / 2,
      }}
    >
      <svg
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 52 44"
        enableBackground="new 0 0 52 44"
        xmlSpace="preserve"
        height={height}
        style={{ position: "absolute", top: "-10px", left: "-12px" }}
      >
        <path
          fill="#EE2737"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M26.01,10.95c4.42,0.01,7.99,3.58,8,8c0,3.64-4.73,10.09-7.36,14.09
    c-0.23,0.35-0.71,0.45-1.06,0.21c-0.08-0.06-0.16-0.13-0.21-0.21c-2.64-4-7.36-10.46-7.36-14.09c-0.02-4.39,3.52-7.98,7.91-8
    C25.95,10.95,25.98,10.95,26.01,10.95z M26.01,15.95c1.63,0.02,2.93,1.36,2.91,2.99c0,0,0,0.01,0,0.01
    c0.02,1.59-1.25,2.89-2.84,2.91c-0.02,0-0.05,0-0.07,0c-1.63,0.03-2.97-1.27-3-2.9c0,0,0-0.01,0-0.01
    C23.03,17.3,24.36,15.97,26.01,15.95z"
        ></path>
      </svg>
    </div>
  );
};
