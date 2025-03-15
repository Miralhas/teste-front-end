import InformationGroup from "./information-group";

const HeaderTop = () => {
  return (
    <section className="header-top">
      <InformationGroup icon={"checkShield"}>
        <p>Compra <span className="text-highlight">100% segura</span></p>
      </InformationGroup>
      <InformationGroup icon={"truck"} >
        <p><span className="text-highlight">Frete grátis</span> acima de R$ 200</p>
      </InformationGroup>
      <InformationGroup icon={"creditCard"} >
        <p><span className="text-highlight">Parcele</span> suas compras</p>
      </InformationGroup>
    </section>
  )
}

export default HeaderTop;
