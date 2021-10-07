import React from "react";

function ImageTag({ src, className, onClick }) {
  return (
    <div className={`image ${className}`} onClick={onClick}>
      <img src={src} alt="img" />
    </div>
  );
}

export default ImageTag;
