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
