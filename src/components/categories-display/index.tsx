import useSelected from "../../hooks/useSelected";
import { Category } from "../../types/categories";
import Icon from "../icons/icon";

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
  const { selected, handleSelected } = useSelected();

  return (
    <section className="categories-display">
      {CATEGORIES.map(category => (
        <div className={`category`} id={category.title} key={category.title} onClick={handleSelected}>
          <a className={`card ${category.title === selected ? "card-selected" : ""}`} href="#">
            <Icon name={category.icon ?? "checkShield"} width={61} height={61} />
          </a>
          <p className={`${category.title === selected ? "text-highlight" : ""}`}>{category.title}</p>
        </div>
      ))}
    </section>
  )
}

export default CategoriesDisplay;
