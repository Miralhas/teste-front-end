import styles from "./header-center.module.scss"
import SearchBar from "./searchbar";
import SearchbarLinks from "./searchbar-links";

const HeaderCenter = () => {
  return (
    <section className={styles["header-center"]}>
      <a className={styles["logo"]} href="#">
        <img src="/images/logo.png" alt="" />
      </a>
      <SearchBar />
      <SearchbarLinks />
    </section>
  )
}

export default HeaderCenter;
