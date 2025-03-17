import Button from "../ui/button";
import styles from "./hero-banner.module.scss";

const HeroBanner = () => {
  return (
    <section className={styles["hero-banner"]}>
      <div className={styles["gradient"]}>
        <h2>Venha conhecer nossas promoções</h2>
        <p><span>50% Off</span> nos produtos </p>
        <Button className={`${styles["hero-banner__btn"]} btn-yellow btn-scale`}>Ver produto</Button>
      </div>
    </section>
  )
}

export default HeroBanner;
