import Icon from "../icons/icon";

const Footer = () => {
  return (
    <footer>
      <section className="footer-content">
        <div className="our-brand">
          <img src="/images/logo.png" alt="" />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <div className="footer-icons">
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
        <div className="info-groups">
          <div className="group">
            <h4>Institucional</h4>
            <a>Sobre Nós</a>
            <a>Movimento</a>
            <a>Trabalhe conosco</a>
          </div>
          <div className="group">
            <h4>Ajuda</h4>
            <a>Suporte</a>
            <a>Fale Conosco</a>
            <a>Perguntas Frequentes</a>
          </div>
          <div className="group">
            <h4>Termos</h4>
            <a>Termos e Condições</a>
            <a>Política de Privacidade</a>
            <a>Troca e Devolução</a>
          </div>
        </div>
      </section>
      <div className="copyright">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </div>
    </footer>
  )
}

export default Footer;
