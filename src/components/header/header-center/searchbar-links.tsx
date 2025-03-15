import Icon from "../../icons/icon";

const SearchbarLinks = () => {
  return (
    <>
      <div className="links">
        <a href="#" className="link">
          <Icon name="group" width={26} height={26} />
        </a>
        <a href="#" className="link">
          <Icon name="heart" width={26} height={26} />
        </a>
        <a href="#" className="link">
          <Icon name="userCircle" width={26} height={26} />
        </a>
        <a href="#" className="link">
          <Icon name="shoppingCart" width={26} height={26} />
        </a>
      </div>
    </>
  )
}

export default SearchbarLinks;
