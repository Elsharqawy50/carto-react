import React from "react";

const UpDownIcon = ({ className, onClick }) => {
  return (
    <svg
      width={37}
      height={37}
      viewBox="0 0 24 24"
      data-name="Line Color"
      xmlns="http://www.w3.org/2000/svg"
      className={`icon line-color ${className}`}
      onClick={onClick}
    >
      <path
        style={{
          fill: "none",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 2,
        }}
        d="M8 20V4"
      />
      <path
        data-name="secondary"
        style={{
          fill: "none",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 2,
        }}
        d="M11 7 8 4 5 7"
      />
      <path
        style={{
          fill: "none",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 2,
        }}
        d="m13 17 3 3 3-3"
      />
      <path
        data-name="primary"
        style={{
          fill: "none",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 2,
        }}
        d="M16 4v16"
      />
    </svg>
  );
};

export default UpDownIcon;
