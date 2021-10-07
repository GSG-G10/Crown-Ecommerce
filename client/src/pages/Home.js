import React, { Fragment } from "react";
import Category from "../components/Category";
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
      <Category />

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
