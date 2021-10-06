import React, { Fragment } from "react";
import {
  Carousel,
  Collection,
  Quotes,
  Footer,
  NewConforts,
} from "../components";
function Home() {
  return (
    <Fragment>
      {/* header */}
      <Carousel />
      <Quotes />
      {/* category & button */}
      <NewConforts />
      <Collection />
      <Footer />
    </Fragment>
  );
}

export default Home;
