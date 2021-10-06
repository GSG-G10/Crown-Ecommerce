import React from "react";

function ButtonMain({ className, children }) {
  return (
    <div className={`button ${className}`}>
      <button>{children}</button>
    </div>
  );
}

export default ButtonMain;
