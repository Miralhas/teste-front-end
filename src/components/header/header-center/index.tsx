import SearchBar from "./searchbar";
import SearchbarLinks from "./searchbar-links";

const HeaderCenter = () => {
  return (
    <section className="header-center">
      <a className="logo" href="#">
        <img src="/images/logo.png" alt="" />
      </a>
      <SearchBar />
      <SearchbarLinks />
    </section>
  )
}

export default HeaderCenter;
