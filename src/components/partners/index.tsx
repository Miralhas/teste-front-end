import Partner from "./partner";
import styles from "./partners.module.scss";

const Partners = () => {
  return (
    <section className={styles["partners-section"]}>
      <Partner />
      <Partner />
    </section>
  )
}

export default Partners;
