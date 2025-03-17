import Icon from "../../ui/icons/icon";
import styles from "./header-center.module.scss"

const SearchBar = () => {
  return (
    <div className={styles["searchbar"]}>
      <input type="text" placeholder="O que você está buscando?" className={styles["searchbar-input"]} />
      <span className={styles["searchbar-icon"]}>
        <Icon name="magnifyingGlass" width={28} height={28} />
      </span>
    </div>
  )
}

export default SearchBar;
