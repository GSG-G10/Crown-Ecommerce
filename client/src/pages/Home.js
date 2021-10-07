import React, { Fragment } from "react";
import Category from "../components/Category";
import {
  Carousel,
  Collection,
  Quotes,
  Footer,
  NewConfrts,
} from '../components';

function Home() {
  return (
    <>
      {/* header */}
      <Category />

      <Carousel />
      <Quotes />
      {/* category & button */}
      <NewConfrts />
      <Collection />
      <Footer />
    </>
  );
}

export default Home;
