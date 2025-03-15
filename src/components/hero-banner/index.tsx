import Button from "../button";

const HeroBanner = () => {
  return (
    <section className="hero-banner">
      <div className="gradient">
        <h2>Venha conhecer nossas promoções</h2>
        <p><span>50% Off</span> nos produtos </p>
        <Button className="btn-yellow">Ver produto</Button>
      </div>
    </section>
  )
}

export default HeroBanner;
