import React, { Fragment } from "react";
import { Carousel, Collection, Quotes } from "../components";
function Home() {
  return (
    <Fragment>
      {/* header */}
      {/* Carousel */}
      <Carousel />
      {/* quotes */}
      <Quotes />
      {/* category & button */}
      {/* collection */}
      <Collection />
      {/* footer */}
    </Fragment>
  );
}

export default Home;
