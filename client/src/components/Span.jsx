import React from "react";

function Span({ className, text, onClick }) {
  return (
    <div className={className} onClick={onClick}>
      <span>{text}</span>
    </div>
  );
}

export default Span;
