import Button from "../ui/button";
import InputText from "../ui/input-text";
import styles from "./newsletter.module.scss";

const Newsletter = () => {
  return (
    <section className={styles["newsletter"]}>
      <div className={styles["newsletter-description"]}>
        <h3>Inscreva-se na nossa newsletter</h3>
        <p>Assine a nossa newsletter e receba as novidades e conteúdos exclusivos da Econverse.</p>
      </div>

      <form className={styles["newsletter-subscribe"]}>
        <div className={styles["newsletter-subscribe-upper"]}>
          <InputText className={styles["newsletter-subscribe-upper__input"]} placeholder="Digite seu nome" />
          <InputText className={styles["newsletter-subscribe-upper__input"]} placeholder="Digite seu e-mail" />
          <Button className={`${styles["newsletter-btn"]} btn-yellow btn-scale bold`}>
            Inscrever
          </Button>
        </div>
        <div className={styles["newsletter-subscribe-lower"]}>
          <input type="checkbox" id="terms-and-conditions" />
          <label htmlFor="terms-and-conditions">Aceito os termos e condições</label>
        </div>
      </form>
    </section>
  )
}

export default Newsletter;
