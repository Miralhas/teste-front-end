import styles from "./browse-brands.module.scss";

const BrowseBrands = () => {
  return (
    <section className={styles["browse-brands"]}>
      <h3 className={styles["browse-brands__title"]}>Navegue por marcas</h3>
      {Array.from({ length: 5 }, (_, i) => i).map(index => (
        <div className={`${styles["brand"]} shadow`} key={index} >
          <img src="/images/logo.png" alt="" />
        </div>
      ))}
    </section>
  )
}

export default BrowseBrands;
