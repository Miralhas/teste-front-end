import Icon from "../../icons/icon";

const SearchBar = () => {
  return (
    <div className="searchbar">
      <input type="text" placeholder="O que você está buscando?" className="searchbar-input" />
      <span className="searchbar-icon">
        <Icon name="magnifyingGlass" width={28} height={28} />
      </span>
    </div>
  )
}

export default SearchBar;
