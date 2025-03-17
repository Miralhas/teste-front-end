import Icon from "../../ui/icons/icon";
import styles from "./header-center.module.scss";

const SearchbarLinks = () => {
  return (
    <>
      <div className={styles["links"]}>
        <a href="#" className={styles["link"]}>
          <Icon name="group" width={32} height={32} />
        </a>
        <a href="#" className={styles["link"]}>
          <Icon name="heart" width={32} height={32} />
        </a>
        <a href="#" className={styles["link"]}>
          <Icon name="userCircle" width={32} height={32} />
        </a>
        <a href="#" className={styles["link"]}>
          <Icon name="shoppingCart" width={32} height={32} />
        </a>
      </div>
    </>
  )
}

export default SearchbarLinks;
