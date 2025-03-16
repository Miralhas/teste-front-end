import { Category } from "../../../types/categories";
import Button from "../../button";

const CATEGORIES: Category[] = [
  { title: "celular" },
  { title: "acessórios" },
  { title: "tablets" },
  { title: "notebooks" },
  { title: "tvs" },
  { title: "ver todos"}
];

type CategoriesFilterProps = {
  handleSelected: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void,
  selected: string | null
}

const CategoriesFilter = ({ handleSelected, selected }: CategoriesFilterProps) => {
  return (
    <div className="categories-filter">
      {CATEGORIES.map(category => (
        <Button
          key={category.title}
          onClick={handleSelected}
          id={category.title}
          className={`btn-transparent ${selected === category.title ? "text-highlight bold" : undefined}`}
        >
          {category.title}
        </Button>
      ))}
    </div>
  )
}

export default CategoriesFilter;
