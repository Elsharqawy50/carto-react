import React, { useState } from "react";

const ImgLoader = ({ imgSrc, minImgSrc, boxHeight }) => {
  const [imageLoad, setImageLoad] = useState(false);

  const handleImageLoad = () => {
    setImageLoad(true);
  };

  return (
    <div
      className="image-box"
      style={{
        backgroundImage: minImgSrc,
        height: imageLoad ? "auto" : boxHeight,
      }}
    >
      <img
        src={imgSrc}
        loading="lazy"
        alt="product-card"
        className={`d-block w-100 ${imageLoad ? "opacity-1" : "opacity-0"}`}
        onLoad={handleImageLoad}
      />
    </div>
  );
};

export default ImgLoader;
