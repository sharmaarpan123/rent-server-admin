import React from "react";

const QueryNavIcons = () => {
  return (
    <span className={` icn me-1`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="15"
        height="15"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M4 3H14L20 9V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V3Z"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14 3V9H20"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8 13H16"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M8 17H13"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
};

export default QueryNavIcons;
