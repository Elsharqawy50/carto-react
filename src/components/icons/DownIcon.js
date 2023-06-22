import * as React from "react";

const DownIcon = ({ className, onClick }) => (
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
      d="M19.71 13.29a1 1 0 0 0-1.42 0L13 18.59V3a1 1 0 0 0-2 0v15.59l-5.29-5.3a1 1 0 0 0-1.42 1.42l7 7a1 1 0 0 0 1.42 0l7-7a1 1 0 0 0 0-1.42Z"
    />
  </svg>
);
export default DownIcon;
