import Icon from "../../ui/icons/icon";
import InputText from "../../ui/input-text";
import styles from "./header-center.module.scss"

const SearchBar = () => {
  return (
    <div className={styles["searchbar"]}>
      <InputText type="text" placeholder="O que você está buscando?" className={styles["input-text"]} />
      <span className={styles["searchbar-icon"]}>
        <Icon name="magnifyingGlass" width={28} height={28} />
      </span>
    </div>
  )
}

export default SearchBar;
