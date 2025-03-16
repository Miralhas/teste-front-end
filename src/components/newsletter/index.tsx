import Button from "../button";

const Newsletter = () => {
  return (
    <section className="newsletter">
      <div className="newsletter-description">
        <h3>Inscreva-se na nossa newsletter</h3>
        <p>Assine a nossa newsletter e receba as novidades e conteúdos exclusivos da Econverse.</p>
      </div>

      <form className="newsletter-subscribe">
        <input type="text" placeholder="Digite seu nome" />
        <input type="text" placeholder="Digite seu e-mail" />
        <Button className="btn-yellow btn-scale bold">
          Inscrever
        </Button>
        <div className="form-checkbox">
          <input type="checkbox" id="terms-and-conditions" />
          <label htmlFor="terms-and-conditions" >Aceito os termos e condições</label>
        </div>
      </form>
    </section>
  )
}

export default Newsletter;
