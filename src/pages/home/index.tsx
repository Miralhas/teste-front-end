import CategoriesDisplay from "../../components/categories-display";
import Container from "../../components/container";
import HeroBanner from "../../components/hero-banner";
import Partners from "../../components/partners";
import RelatedProducts from "../../components/related-products";

const Home = () => {
  return (
    <main>
      <HeroBanner />
      <Container>
        <CategoriesDisplay />
        <RelatedProducts filter/>
        <Partners />
        <RelatedProducts />
        <Partners />
        
        <RelatedProducts />
      </Container>
    </main>
  )
}

export default Home;
