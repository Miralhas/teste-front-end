import { Category } from "../../../types/categories";
import Button from "../../ui/button";
import styles from "./categories-filter.module.scss";
import classNames from "classnames";

const CATEGORIES: Category[] = [
  { title: "celular" },
  { title: "acessórios" },
  { title: "tablets" },
  { title: "notebooks" },
  { title: "tvs" },
  { title: "ver todos" }
];

type CategoriesFilterProps = {
  handleSelected: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void,
  selected: string | null
}

const CategoriesFilter = ({ handleSelected, selected }: CategoriesFilterProps) => {

  return (
    <div className={styles["categories-filter"]}>
      {CATEGORIES.map(category => {
        const isSelected = selected === category.title;
        return (
          <Button
            key={category.title}
            onClick={handleSelected}
            id={category.title}
            className={`${classNames(styles["btn"], "btn-transparent", { "bold": isSelected, "text-highlight": isSelected })}`}
          >
            {category.title}
          </Button>
        )
      })}
    </div>
  )
}

export default CategoriesFilter;
