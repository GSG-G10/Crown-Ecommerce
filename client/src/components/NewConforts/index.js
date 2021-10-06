import React, { useEffect } from "react";
import Card from "../Card";

function NewConforts() {
  useEffect(() => {
    fetch("https://localhost:8080/api/v1/product");
  }, []);
  return <Card />;
}

export default NewConforts;
