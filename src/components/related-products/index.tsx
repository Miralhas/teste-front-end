import { PropsWithChildren, useState } from "react";
import { useModalContext } from "../../contexts/modal-context";
import useSelected from "../../hooks/useSelected";
import { useProductsQuery } from "../../lib/queries";
import { formatToBRL } from "../../lib/utils";
import { Product } from "../../types/product";
import Carousel from "../ui/carousel";
import Button from "../ui/button";
import CategoriesFilter from "./categories-filter";
import ProductModal from "./product-modal";
import styles from "./related-products.module.scss";

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
      <a className={styles["see-all"]} href="#/">Ver todos</a>
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
      <div className={styles["related-products"]}>
        <div className={styles["related-products__title"]}>
          <h2><span>Produtos Relacionados</span></h2>
        </div>
        {children}
        <Carousel>
          {products?.map((product, index) => (
            <div className="embla__slide" key={index}>
              <div className={styles["card"]} onClick={() => toggleModalAndProduct(product)}>
                <img src={product.photo} className={styles["card-img"]} alt={product.productName + " image"} />
                <div className={styles["card-content"]}>
                  <p className={styles["product-name"]}>{product.productName}</p>
                  <p className={styles["product-description"]}>{product.descriptionShort}</p>
                  <p className={styles["product-price"]}>R$ {formatToBRL(product.price)}</p>
                  <p className={styles["product-price-discount"]}>R$ {formatToBRL(product.price)}</p>
                  <p className={styles["product-payment-method"]}>ou 2x de R$ {formatToBRL(product.price / 2)} sem juros</p>
                  <p className={styles["product-shipping"]}>Frete grátis</p>
                </div>
                <div className={styles["card-footer"]}>
                  <Button className={`${styles["btn"]} btn-blue btn-scale bold`}>comprar</Button>
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
