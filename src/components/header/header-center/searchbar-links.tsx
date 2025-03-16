import Icon from "../../icons/icon";

const SearchbarLinks = () => {
  return (
    <>
      <div className="links">
        <a href="#" className="link">
          <Icon name="group" width={32} height={32} />
        </a>
        <a href="#" className="link">
          <Icon name="heart" width={32} height={32} />
        </a>
        <a href="#" className="link">
          <Icon name="userCircle" width={32} height={32} />
        </a>
        <a href="#" className="link">
          <Icon name="shoppingCart" width={32} height={32} />
        </a>
      </div>
    </>
  )
}

export default SearchbarLinks;
