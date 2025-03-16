import CategoriesDisplay from "../../components/categories-display";
import Container from "../../components/container";
import HeroBanner from "../../components/hero-banner";
import RelatedProducts from "../../components/related-products";

const Home = () => {
  return (
    <main>
      <Container>
        <HeroBanner />
        <CategoriesDisplay />
        <RelatedProducts filter/>
      </Container>
    </main>
  )
}

export default Home;
