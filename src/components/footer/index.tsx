import Icon from "../ui/icons/icon";
import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <footer>
      <section className={styles["footer-content"]}>
        <div className={styles["our-brand"]}>
          <img src="/images/logo.png" alt="" />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <div className={styles["footer-icons"]}>
            <a href="#" className="btn-scale">
              <Icon name="instagram" width={24} height={24} />
            </a>
            <a href="#" className="btn-scale">
              <Icon name="facebook" width={24} height={24} />
            </a>
            <a href="#" className="btn-scale">
              <Icon name="linkedin" width={24} height={24} />
            </a>
          </div>
        </div>
        <div className={styles["info-groups"]}>
          <div className={styles["group"]}>
            <h4>Institucional</h4>
            <a>Sobre Nós</a>
            <a>Movimento</a>
            <a>Trabalhe conosco</a>
          </div>
          <div className={styles["group"]}>
            <h4>Ajuda</h4>
            <a>Suporte</a>
            <a>Fale Conosco</a>
            <a>Perguntas Frequentes</a>
          </div>
          <div className={styles["group"]}>
            <h4>Termos</h4>
            <a>Termos e Condições</a>
            <a>Política de Privacidade</a>
            <a>Troca e Devolução</a>
          </div>
        </div>
      </section>
      <div className={styles["copyright"]}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </div>
    </footer>
  )
}

export default Footer;
