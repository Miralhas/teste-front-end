import useSelected from "../../../hooks/useSelected";
import { Category } from "../../../types/categories";
import Icon from "../../ui/icons/icon";
import styles from "./header-bottom.module.scss";
import classNames from "classnames";

const CATEGORIES: Category[] = [
  { title: "supermercado" },
  { title: "livros" },
  { title: "moda" },
  { title: "lançamentos" },
  { title: "ofertas do dia" },
]

const Categories = () => {
  const { selected, handleSelected } = useSelected();

  return (
    <ul className={styles["header-bottom"]}>
      <HeaderCategory category={{ title: "todas categorias" }} selected={selected} handleSelected={handleSelected} />
      {CATEGORIES.map((category, index) => (
        <HeaderCategory category={category} key={index} selected={selected} handleSelected={handleSelected} />
      ))}
      <HeaderCategory category={{ title: "assinatura", icon: "simpleCrown" }} selected={selected} handleSelected={handleSelected} />
    </ul>
  )
}

type HeaderCategoryProps = {
  category: Category,
  selected: string | null,
  handleSelected: (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => void
}

const HeaderCategory = ({ category, selected, handleSelected }: HeaderCategoryProps) => {
  const isSelected = category.title === selected;
  return (
    <li id={category.title} onClick={handleSelected}>
      <a className={classNames(styles["header-category"], { "text-highlight": isSelected })} href="#">
        {category.icon ? (
          <Icon name={category.icon} width={20} height={20} />
        ) : null}
        {category.title}
      </a>
    </li>
  )
}

export default Categories;
