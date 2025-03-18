import Button from "../../ui/button";
import style from "./partner.module.scss";

const Partner = () => {
  return (
    <div className={style["partner"]}>
      <div className={style["banner-content"]}>
        <h3>Parceiros</h3>
        <p>Lorem ipsum dolor sit amet, consectetur</p>
        <Button className={`${style["btn"]} btn-yellow btn-scale`}>Confira</Button>
      </div>
    </div>
  )
}

export default Partner;
