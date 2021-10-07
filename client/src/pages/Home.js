import React, { Fragment } from "react";
import {
  Carousel,
  Collection,
  Quotes,
  Footer,
  NewConfrts,
} from "../components";
function Home() {
  return (
    <Fragment>
      {/* header */}
      <Carousel />
      <Quotes />
      {/* category & button */}
      <NewConfrts />
      <Collection />
      <Footer />
    </Fragment>
  );
}

export default Home;
