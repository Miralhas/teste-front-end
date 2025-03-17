import { PropsWithChildren } from "react";
import useSelected from "../../hooks/useSelected";
import { useProductsQuery } from "../../lib/queries";
import { formatToBRL } from "../../lib/utils";
import Button from "../button";
import Carousel from "../carousel";
import CategoriesFilter from "./categories-filter";

const RelatedProducts = ({ filter = false }: { filter?: boolean }) => {
  const { handleSelected, selected } = useSelected("celular");

  if (filter) {
    return (
      <Layout>
        <CategoriesFilter handleSelected={handleSelected} selected={selected} />
      </Layout>
    )
  }

  return (
    <Layout>
      <a className="see-all" href="#">Ver todos</a>
    </Layout>
  )
}

const Layout = ({ children }: PropsWithChildren) => {
  const query = useProductsQuery();
  const products = query.data?.products;

  return (
    <section className="related-products">
      <h2><span>Produtos Relacionados</span></h2>

      {children}

      <Carousel>
        {products?.map((product, index) => (
          <div className="embla__slide" key={index}>
              <div className="card">
                <img src={product.photo} className="card-img" alt={product.productName + " image"} />
                <div className="card-content">
                  <p className="product-name">{product.productName}</p>
                  <p className="product-description">{product.descriptionShort}</p>
                  <p className="product-price">R$ {formatToBRL(product.price)}</p>
                  <p className="product-price-discount">R$ {formatToBRL(product.price)}</p>
                  <p className="product-payment-method">ou 2x de R$ {formatToBRL(product.price / 2)} sem juros</p>
                  <p className="product-shipping">Frete grátis</p>
                </div>
                <div className="card-footer">
                  <Button className="btn-blue btn-scale bold">comprar</Button>
                </div>
              </div>
          </div>
        ))}
      </Carousel>
    </section>
  )
}

export default RelatedProducts;
