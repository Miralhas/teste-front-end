import { PropsWithChildren, useState } from "react";
import { useModalContext } from "../../contexts/modal-context";
import useSelected from "../../hooks/useSelected";
import { useProductsQuery } from "../../lib/queries";
import { formatToBRL } from "../../lib/utils";
import { Product } from "../../types/product";
import Button from "../button";
import Carousel from "../carousel";
import CategoriesFilter from "./categories-filter";
import ProductModal from "./product-modal";

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
  const { toggleModal } = useModalContext();
  const [product, setProduct] = useState<Product | null>(null);

  const products = query.data?.products;

  const toggleModalAndProduct = (product: Product) => {
    toggleModal();
    setProduct(product);
  }

  return (
    <section>
      <div className="related-products">
        <h2><span>Produtos Relacionados</span></h2>
        {children}
        <Carousel>
          {products?.map((product, index) => (
            <div className="embla__slide" key={index}>
              <div className="card" onClick={() => toggleModalAndProduct(product)}>
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
      </div>
      {product && (
        <ProductModal product={product} />
      )}
    </section>
  )
}

export default RelatedProducts;
