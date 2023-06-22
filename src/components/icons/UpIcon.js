import React from "react";

const UpIcon = ({ className, onClick }) => {
  return (
    <svg
      width={37}
      height={37}
      viewBox="0 0 24 24"
      data-name="Flat Color"
      xmlns="http://www.w3.org/2000/svg"
      className={`icon flat-color ${className}`}
      onClick={onClick}
    >
      <path
        d="m19.71 9.29-7-7a1 1 0 0 0-1.42 0l-7 7a1 1 0 0 0 1.42 1.42L11 5.41V21a1 1 0 0 0 2 0V5.41l5.29 5.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42Z"
      />
    </svg>
  );
};

export default UpIcon;
