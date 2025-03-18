import { useState } from "react";
import { formatToBRL } from "../../../lib/utils";
import { Product } from "../../../types/product";
import Button from "../../ui/button";
import styles from "./product-modal.module.scss";
import Modal from "../../ui/modal";

const ProductModal = ({ product }: { product: Product }) => {
  const [count, setCount] = useState(1);

  const handleCountPlus = () => {
    setCount(prev => prev + 1);
  }

  const handleCountMinus = () => {
    if (count <= 1) return;
    setCount(prev => prev - 1);
  }

  return (
    <Modal>
      <div className={styles["product-modal"]}>
        <img src={product.photo} alt="" className={styles["product-image"]} />
        <div className={styles["product-info"]}>
            <div>
              <h3>{product.productName}</h3>
              <p className={styles["product-price"]}>R$ {formatToBRL(product.price)}</p>
            </div>
            <div>
              <p className={styles["product-description"]}>{product.descriptionShort}</p>
              <a href="#/" className={styles["see-more"]}>Veja mais detalhes do produto {">"} </a>
          </div>
          <div className={styles["product-buttons"]}>
            <div className={styles["product-quantity"]}>
              <Button className={`${styles["btn"]} ${styles["btn-transparent"]}`} onClick={handleCountMinus}>-</Button>
              <span className={styles["count"]}>{count}</span>
              <Button className={`${styles["btn"]} ${styles["btn-transparent"]}`} onClick={handleCountPlus}>+</Button>
            </div>
            <Button className={`${styles["btn"]} ${styles["btn-yellow"]} btn-scale`}>Comprar</Button>
          </div>
        </div>
      </div>
    </Modal>
  )
}

export default ProductModal;
