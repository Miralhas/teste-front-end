import useSelected from "../../hooks/useSelected";
import { Category } from "../../types/categories";
import Icon from "../ui/icons/icon";
import styles from "./categories-display.module.scss";
import classNames from "classnames";

const CATEGORIES: Category[] = [
  { title: "tecnologia", icon: "devices" },
  { title: "supermercado", icon: "supermarket" },
  { title: "bebidas", icon: "whiskey" },
  { title: "ferramentas", icon: "tools" },
  { title: "saúde", icon: "health" },
  { title: "Esportes e Fitness", icon: "fitness" },
  { title: "Moda", icon: "fashion" },
];

const CategoriesDisplay = () => {
  const { selected, handleSelected } = useSelected("tecnologia");

  return (
    <section className={styles["categories-display"]}>
      {CATEGORIES.map(category => {
        const isSelected = category.title === selected;
        return (
          <div className={styles["category"]} id={category.title} key={category.title} onClick={handleSelected}>
            <a className={`${styles["card"]} ${isSelected && styles["card-selected"]}`} href="#/">
              <Icon name={category.icon ?? "checkShield"} width={61} height={61} />
            </a>
            <p className={classNames(styles["category__name"], { "text-highlight": isSelected })}>{category.title}</p>
          </div>
        )
      })}
    </section>
  )
}

export default CategoriesDisplay;
